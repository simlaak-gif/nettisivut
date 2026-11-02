import fs from "fs/promises";
import path from "path";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

async function getAccessToken() {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Auth virhe: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function run() {
  console.log("🔄 Haetaan Google Access Token...");
  const token = await getAccessToken();
  const headers = { Authorization: `Bearer ${token}` };

  // 1. Haetaan KAIKKI tilit
  console.log("🔍 Etsitään Google Business -tilejä...");
  const accRes = await fetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", {
    headers,
  });
  const accData = await accRes.json();

  if (!accRes.ok) {
    console.error("❌ Virhe tilien haussa:", JSON.stringify(accData, null, 2));
    return;
  }

  const accounts = accData.accounts || [];
  console.log(
    `✅ Löytyi ${accounts.length} tili(ä):`,
    accounts.map((a) => `${a.name} (${a.accountName || a.type})`).join(", "),
  );

  let bestReviewsData = null;
  let bestPostsData = [];

  // 2. Käydään läpi jokainen tili ja sen toimipisteet
  for (const acc of accounts) {
    const locUrl = `https://mybusinessbusinessinformation.googleapis.com/v1/${acc.name}/locations?readMask=name,title,metadata`;
    const locRes = await fetch(locUrl, { headers });
    const locData = await locRes.json();

    if (!locRes.ok) {
      console.log(`⚠️ Ei voitu hakea toimipisteitä tilille ${acc.name}:`, locData.error?.message);
      continue;
    }

    const locations = locData.locations || [];
    console.log(`📍 Tililtä ${acc.name} löytyi ${locations.length} toimipiste(ttä).`);

    for (const loc of locations) {
      const locId = loc.name.split("/")[1];
      const v4Parent = `${acc.name}/locations/${locId}`;
      console.log(`\n👉 Tarkistetaan toimipiste: "${loc.title}" (${v4Parent})`);

      // Haetaan arvostelut
      const revRes = await fetch(
        `https://mybusiness.googleapis.com/v4/${v4Parent}/reviews?pageSize=50`,
        { headers },
      );
      const revData = await revRes.json();

      if (!revRes.ok) {
        console.log(
          `   ❌ Arvostelujen haku epäonnistui (${revRes.status}):`,
          revData.error?.message || JSON.stringify(revData),
        );
      } else {
        const count = revData.totalReviewCount || (revData.reviews ? revData.reviews.length : 0);
        console.log(`   ⭐ Löytyi ${count} arvostelua (keskiarvo: ${revData.averageRating || 0})`);
        if (count > 0 || !bestReviewsData) {
          bestReviewsData = revData;
        }
      }

      // Haetaan julkaisut (Local Posts)
      const postRes = await fetch(
        `https://mybusiness.googleapis.com/v4/${v4Parent}/localPosts?pageSize=20`,
        { headers },
      );
      const postData = await postRes.json();

      if (!postRes.ok) {
        console.log(
          `   ❌ Julkaisujen haku epäonnistui (${postRes.status}):`,
          postData.error?.message || JSON.stringify(postData),
        );
      } else {
        const posts = postData.localPosts || [];
        console.log(`   📝 Löytyi ${posts.length} julkaisua`);
        if (posts.length > bestPostsData.length) {
          bestPostsData = posts;
        }
      }
    }
  }

  // 3. Tallennetaan tulokset vain jos dataa oikeasti löytyi
  await fs.mkdir(path.resolve("src/data"), { recursive: true });

  if (
    bestReviewsData &&
    (bestReviewsData.reviews?.length > 0 || bestReviewsData.totalReviewCount > 0)
  ) {
    const rawReviews = bestReviewsData.reviews || [];
    const starMap = { FIVE: 5, FOUR: 4, THREE: 3, TWO: 2, ONE: 1 };

    const formattedReviews = rawReviews
      .map((r) => ({
        id: r.reviewId || r.name,
        author: r.reviewer?.displayName || "Asiakas",
        avatar: r.reviewer?.profilePhotoUrl || null,
        rating: starMap[r.starRating] || 5,
        comment: r.comment ? r.comment.replace(/\(Translated by Google\)[\s\S]*$/i, "").trim() : "",
        date: r.createTime,
        reply: r.reviewReply?.comment || null,
      }))
      .filter((r) => r.rating >= 4 && r.comment.length > 0);

    const reviewsOutput = {
      averageRating: bestReviewsData.averageRating || 5.0,
      totalReviewCount: bestReviewsData.totalReviewCount || formattedReviews.length,
      reviews: formattedReviews,
    };

    await fs.writeFile(
      path.resolve("src/data/google-reviews.json"),
      JSON.stringify(reviewsOutput, null, 2),
    );
    console.log(
      `\n✅ Tallennettiin ${formattedReviews.length} arvostelua tiedostoon src/data/google-reviews.json!`,
    );
  } else {
    console.log(
      "\n⚠️ API palautti 0 arvostelua – ei ylikirjoitettu nykyistä google-reviews.json tiedostoa.",
    );
  }

  if (bestPostsData.length > 0) {
    const formattedPosts = bestPostsData
      .filter((p) => p.state === "LIVE")
      .map((p) => ({
        id: p.name.split("/").pop(),
        summary: p.summary || "",
        createTime: p.createTime,
        image: p.media?.[0]?.googleUrl || p.media?.[0]?.sourceUrl || null,
        callToAction: p.callToAction || null,
      }));

    await fs.writeFile(
      path.resolve("src/data/google-posts.json"),
      JSON.stringify(formattedPosts, null, 2),
    );
    console.log(
      `✅ Tallennettiin ${formattedPosts.length} julkaisua tiedostoon src/data/google-posts.json!`,
    );
  } else {
    console.log(
      "⚠️ API palautti 0 julkaisua – ei ylikirjoitettu nykyistä google-posts.json tiedostoa.",
    );
  }
}

run().catch((err) => {
  console.error("❌ Odottamaton virhe:", err.message);
});

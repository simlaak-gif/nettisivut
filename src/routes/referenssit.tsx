import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ExternalLink, Calendar, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import reviewsData from "@/data/google-reviews.json";
import postsData from "@/data/google-posts.json";

export const Route = createFileRoute("/referenssit")({
  head: () => ({
    meta: [
      { title: "Referenssit ja asiakaskokemukset — KS-Sähkö Oy | Jyväskylä & Keski-Suomi" },
      {
        name: "description",
        content:
          "Lue asiakkaidemme aitoja Google-arvosteluja ja tutustu KS-Sähkö Oy:n viimeisimpiin sähköasennuksiin, latausasemiin ja urakkakohteisiin Keski-Suomessa.",
      },
      { property: "og:title", content: "Referenssit ja asiakaskokemukset — KS-Sähkö Oy" },
      {
        property: "og:description",
        content: `Keskiarvo ${Number(reviewsData?.averageRating || 4.9).toFixed(1)} / 5 (${reviewsData?.totalReviewCount || 18} Google-arvostelua). Katso toteutuneet kohteet ja palautteet.`,
      },
    ],
  }),
  component: ReferencesPage,
});

function formatDate(isoString?: string) {
  if (!isoString) return "";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("fi-FI", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function ReferencesPage() {
  const averageRating = Number(reviewsData?.averageRating || 4.9).toFixed(1);
  const totalReviews = reviewsData?.totalReviewCount || 18;
  const reviews = Array.isArray(reviewsData?.reviews) ? reviewsData.reviews : [];
  const posts = Array.isArray(postsData) ? postsData : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="pt-36 md:pt-44 pb-14 bg-secondary/40 border-b border-border">
          <div className="container-px mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <SectionHeading
                eyebrow="Referenssit & Asiakaskokemukset"
                title="Mitä asiakkaamme sanovat meistä."
                description="Olemme ylpeitä työmme jäljestä ja siitä, että sovitut aikataulut pitävät. Alla näet suoraan Google-yritysprofiilistamme haetut aidot arvostelut ja viimeisimmät työnäytteet."
              />

              {/* Google Rating Badge */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-5 shrink-0">
                <div className="text-center pr-5 border-r border-border">
                  <div className="text-4xl font-display font-extrabold text-[var(--ink)]">
                    {averageRating}
                  </div>
                  <div className="mt-1 flex items-center justify-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--ink)]">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    Vahvistetut Google-arvostelut
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Perustuu {totalReviews} asiakkaan arvosteluun
                  </p>
                  <a
                    href="https://www.google.com/search?q=KS-S%C3%A4hk%C3%B6+Oy+arvostelut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-deep)] hover:underline"
                  >
                    Katso kaikki Googlessa <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOOGLE ARVOSTELUT */}
        <section className="section-y">
          <div className="container-px mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--ink)]">
                Asiakkaiden palautteita ({reviews.length} poimintaa)
              </h2>
              <p className="mt-2 text-muted-foreground">
                Kaikki palautteet ovat oikeiden asiakkaidemme jättämiä 4–5 tähden arvosteluja.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((rev) => (
                <article
                  key={rev.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] flex flex-col justify-between transition-all hover:border-[var(--brand)]/60"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {rev.avatar ? (
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="size-10 rounded-full object-cover border border-border"
                          />
                        ) : (
                          <div className="size-10 rounded-full bg-[var(--brand)]/20 text-[var(--ink)] font-bold grid place-items-center text-sm">
                            {(rev.author || "A").charAt(0)}
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold text-sm text-[var(--ink)]">{rev.author}</h3>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(rev.date)}
                          </span>
                        </div>
                      </div>
                      <Quote className="size-6 text-[var(--brand)]/40 shrink-0" />
                    </div>

                    <div className="mt-4 flex items-center gap-0.5">
                      {[...Array(Number(rev.rating) || 5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Lähde: Google</span>
                    <span className="font-semibold text-emerald-600">✓ Vahvistettu</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE JULKAISUT / AJANKOHTAISTA */}
        {posts.length > 0 && (
          <section className="section-y bg-secondary/30 border-t border-border">
            <div className="container-px mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--ink)]">
                  Viimeisimmät työt ja kuulumiset
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Tuoreimmat päivitykset ja työnäytteet suoraan työmailtamme Keski-Suomesta.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const ctaUrl = post.callToAction?.url;
                  const isCall = post.callToAction?.actionType === "CALL";

                  return (
                    <article
                      key={post.id}
                      className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)] flex flex-col"
                    >
                      {post.image && (
                        <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                          <img
                            src={post.image}
                            alt="KS-Sähkö Oy työnäyte"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-3">
                            <Calendar className="size-3.5 text-[var(--brand-deep)]" />
                            {formatDate(post.createTime)}
                          </div>
                          <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line line-clamp-6">
                            {post.summary}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border/60">
                          {isCall ? (
                            <a
                              href="tel:+358503600142"
                              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--brand-deep)] hover:underline"
                            >
                              <Phone className="size-3.5" /> Soita meille: 050 360 0142
                            </a>
                          ) : ctaUrl ? (
                            <a
                              href={ctaUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-deep)] hover:underline"
                            >
                              Lue lisää tai pyydä tarjous <ArrowRight className="size-3.5" />
                            </a>
                          ) : (
                            <Link
                              to="/yhteystiedot"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-deep)] hover:underline"
                            >
                              Pyydä vastaava tarjous <ArrowRight className="size-3.5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

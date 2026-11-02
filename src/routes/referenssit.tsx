import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ExternalLink,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
          "Tutustu KS-Sähkö Oy:n viimeisimpiin sähköasennuksiin, latausasemiin ja urakkakohteisiin sekä lue asiakkaidemme aitoja Google-arvosteluja Keski-Suomessa.",
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

  const ITEMS_PER_SLIDE = 3;
  const totalPostSlides = Math.max(1, Math.ceil(posts.length / ITEMS_PER_SLIDE));
  const totalReviewSlides = Math.max(1, Math.ceil(reviews.length / ITEMS_PER_SLIDE));

  const [postSlide, setPostSlide] = useState(0);
  const [reviewSlide, setReviewSlide] = useState(0);
  const [pausePosts, setPausePosts] = useState(false);
  const [pauseReviews, setPauseReviews] = useState(false);

  // Automaattinen kierto julkaisuille (6 sekuntia)
  useEffect(() => {
    if (pausePosts || totalPostSlides <= 1) return;
    const timer = setInterval(() => {
      setPostSlide((prev) => (prev + 1) % totalPostSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [pausePosts, totalPostSlides]);

  // Automaattinen kierto arvosteluille (6,5 sekuntia)
  useEffect(() => {
    if (pauseReviews || totalReviewSlides <= 1) return;
    const timer = setInterval(() => {
      setReviewSlide((prev) => (prev + 1) % totalReviewSlides);
    }, 6500);
    return () => clearInterval(timer);
  }, [pauseReviews, totalReviewSlides]);

  const visiblePosts = posts.slice(
    postSlide * ITEMS_PER_SLIDE,
    postSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
  );

  const visibleReviews = reviews.slice(
    reviewSlide * ITEMS_PER_SLIDE,
    reviewSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
  );

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
                title="Toteutuneet kohteet ja asiakkaiden kokemukset."
                description="Olemme ylpeitä työmme jäljestä ja siitä, että sovitut aikataulut pitävät. Alla näet tuoreimmat työnäytteet suoraan työmailtamme sekä asiakkaidemme vahvistetut Google-arvostelut."
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

        {/* 1. YLIMPÄNÄ: GOOGLE JULKAISUT / VIIMEISIMMÄT TYÖT (3 KIERTO) */}
        {posts.length > 0 && (
          <section
            className="section-y"
            onMouseEnter={() => setPausePosts(true)}
            onMouseLeave={() => setPausePosts(false)}
          >
            <div className="container-px mx-auto">
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--ink)]">
                    Viimeisimmät työt ja kuulumiset
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Tuoreimmat päivitykset ja työnäytteet suoraan työmailtamme Keski-Suomesta.
                  </p>
                </div>

                {totalPostSlides > 1 && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setPostSlide((prev) => (prev - 1 + totalPostSlides) % totalPostSlides)
                      }
                      aria-label="Edelliset julkaisut"
                      className="grid size-10 place-items-center rounded-full border border-border bg-card text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:bg-secondary"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <span className="text-xs font-bold text-muted-foreground px-2">
                      {postSlide + 1} / {totalPostSlides}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPostSlide((prev) => (prev + 1) % totalPostSlides)}
                      aria-label="Seuraavat julkaisut"
                      className="grid size-10 place-items-center rounded-full border border-border bg-card text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:bg-secondary"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post) => {
                  const ctaUrl = post.callToAction?.url;
                  const isCall = post.callToAction?.actionType === "CALL";

                  return (
                    <article
                      key={post.id}
                      className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)] flex flex-col animate-fade-up"
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

              {/* Indikaattoripisteet */}
              {totalPostSlides > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(totalPostSlides)].map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPostSlide(idx)}
                      aria-label={`Sivu ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        postSlide === idx
                          ? "w-8 bg-[var(--brand-deep)]"
                          : "w-2 bg-border hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 2. ALEMPANA: GOOGLE ARVOSTELUT (3 KIERTO) */}
        <section
          className="section-y bg-secondary/30 border-t border-border"
          onMouseEnter={() => setPauseReviews(true)}
          onMouseLeave={() => setPauseReviews(false)}
        >
          <div className="container-px mx-auto">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--ink)]">
                  Asiakkaiden palautteita
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Kaikki palautteet ovat oikeiden asiakkaidemme jättämiä vahvistettuja
                  Google-arvosteluja.
                </p>
              </div>

              {totalReviewSlides > 1 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setReviewSlide((prev) => (prev - 1 + totalReviewSlides) % totalReviewSlides)
                    }
                    aria-label="Edelliset arvostelut"
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:bg-secondary"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <span className="text-xs font-bold text-muted-foreground px-2">
                    {reviewSlide + 1} / {totalReviewSlides}
                  </span>
                  <button
                    type="button"
                    onClick={() => setReviewSlide((prev) => (prev + 1) % totalReviewSlides)}
                    aria-label="Seuraavat arvostelut"
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:bg-secondary"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleReviews.map((rev) => (
                <article
                  key={rev.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] flex flex-col justify-between transition-all hover:border-[var(--brand)]/60 animate-fade-up"
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

                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed whitespace-pre-line line-clamp-6">
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

            {/* Indikaattoripisteet */}
            {totalReviewSlides > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setReviewSlide(idx)}
                    aria-label={`Sivu ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      reviewSlide === idx
                        ? "w-8 bg-[var(--brand-deep)]"
                        : "w-2 bg-border hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

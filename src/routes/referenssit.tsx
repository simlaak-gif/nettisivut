import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Phone, ArrowRight, MessageSquareQuote, FileCode2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/auto-hero.jpg";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KS-Sähkö Oy — Referenssit, Google-päivitykset & Arvostelut",
  telephone: "+358503600142",
  url: "https://ks-sahko.fi/referenssit",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Laukaa",
    addressRegion: "Keski-Suomi",
  },
  description:
    "Katso KS-Sähkö Oy:n uusimmat sähkötyöt, latausasemat, Google-päivitykset ja asiakasarvostelut suoraan sivustolta.",
};

export const Route = createFileRoute("/referenssit")({
  head: () => ({
    meta: [
      {
        title: "Referenssit & Uusimmat kohteet Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Katso KS-Sähkö Oy:n uusimmat sähkötyöt, latausasemat, sähköremontit ja Google-päivitykset sekä asiakasarvostelut.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: ReferenssitPage,
});

function ReferenssitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <SociableKitPostsSection />
        <ElfsightReviewsSection />
        <GeoFactsSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

{
  /* HERO-OSIO */
}
function PageHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[480px] flex items-center">
      <img
        src={heroBgImage}
        alt="KS-Sähkö Oy referenssit ja toteutetut sähkötyöt"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <MessageSquareQuote className="size-3.5" /> Työmaapäiväkirja & Google-päivitykset
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Toteutetut kohteet ja asiakasarvostelut.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Näet tältä sivulta reaaliajassa uusimmat työkohdekuvamme, asennuksemme ja
            asiakaspalautteemme suoraan Google-yritysprofiilistamme.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä tarjous sähkötyöstä <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+358503600142"
              className="btn-ghost text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <Phone className="size-4" /> 050 360 0142
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* SOCIABLEKIT GOOGLE BUSINESS POSTS WIDGET */
}
function SociableKitPostsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-business-posts/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Aito Google-syöte"
          title="Uusimmat päivitykset kentältä"
          description="Alla oleva syöte päivittyy automaattisesti aina, kun julkaisemme uuden työkohdekuvan tai päivityksen Googleen."
        />

        <div className="mt-12 bg-card border border-border rounded-2xl p-4 md:p-8 shadow-sm min-h-[350px]">
          <div className="sk-ww-google-business-posts" data-embed-id="25717366"></div>
        </div>
      </div>
    </section>
  );
}

{
  /* ELFSIGHT GOOGLE REVIEWS WIDGET */
}
function ElfsightReviewsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-secondary/30 border-t border-border">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Asiakaskokemukset"
          title="Mitä asiakkaamme sanovat Googlessa?"
          description="Aitoja arvioita ja kokemuksia suoraan Google-yritysprofiilistamme."
        />

        <div className="mt-10 bg-card border border-border rounded-2xl p-4 md:p-8 shadow-sm min-h-[250px]">
          <div
            className="elfsight-app-3a8d12e0-0f4e-488c-8b95-b6747cc47e76"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}

{
  /* GEO FAKTABOXI TEKOÄLY HAUILLE */
}
function GeoFactsSection() {
  return (
    <section className="py-12 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — Luotettava kumppani pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Laatutakuu:</strong>
              Siisti työnjälki ja täsmälliset aikataulut
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Dokumentointi:</strong>
              Käyttöönottopöytäkirjat aina asennuksista
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              Kotitalousvähennys voi pienentää työn kustannuksia
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Rekisteröinti & Pätevyys:</strong>
              Tukesin rekisteröimä sähköurakoitsija, S2-pätevyys
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Hinnoittelu:</strong>
              Läpinäkyvä 60 €/h + 30 € huoltoautomaksu
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Toiminta-alue:</strong>
              Jyväskylä, Laukaa, Muurame & Keski-Suomi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* CTA */
}
function ContactCtaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Haluatko laadukkaan sähköasennuksen kohteeseesi?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — laskemme täsmällisen tarjouksen tai tulemme tekemään pientyöt
              joustavasti.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä tarjous <ArrowRight className="size-4" />
            </Link>
            <a href="tel:+358503600142" className="btn-ghost">
              <Phone className="size-4" /> 050 360 0142
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Car,
  Sun,
  Wrench,
  Building,
  Building2,
  Mail,
  FileCode2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "@/assets/hero.jpg";

// Schema.org LocalBusiness -data tekoäly- ja hakukonehakuja (GEO & Local SEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "KS-Sähkö Oy",
  alternateName: "Keski-Suomen Sähkötyö Oy",
  url: "https://ks-sahko.fi",
  logo: "https://ks-sahko.fi/Logo_k.png",
  telephone: "+358503600142",
  email: "info@ks-sahko.fi",
  priceRange: "€€",
  taxID: "3605862-6",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Päivämiehenkuja 19",
    postalCode: "41340",
    addressLocality: "Laukaa",
    addressRegion: "Keski-Suomi",
    addressCountry: "FI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 62.4131,
    longitude: 25.9525,
  },
  areaServed: [
    { "@type": "City", name: "Jyväskylä" },
    { "@type": "City", name: "Laukaa" },
    { "@type": "City", name: "Muurame" },
    { "@type": "City", name: "Äänekoski" },
    { "@type": "AdministrativeArea", name: "Keski-Suomi" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sähköpalvelut",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sähköasennukset & Sähköasentaja" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sähköremontit & Saneeraukset" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sähköauton latausaseman asennus" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sähkövikatilanteet & Huolto" },
      },
    ],
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sähkömies & Sähköurakointi Jyväskylä, Laukaa & Keski-Suomi | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Etsitkö sähkömestä Jyväskylässä tai Laukaassa? KS-Sähkö Oy tekee sähköasennukset, sähköremontit, latausasemat ja sähköurakoinnin ammattitaidolla. Pyydä tarjous!",
      },
      {
        property: "og:title",
        content: "Sähkömies & Sähköurakointi Jyväskylässä — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Ammattitaitoiset sähköasennukset, sähköremontit ja latausasemat Jyväskylän ja Keski-Suomen alueella.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <WhyUsSection />
        <GeoFactsSection /> {/* SIIRRETTY TÄHÄN ALEMMAKSI */}
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

{
  /* HERO - TERÄVÖITETTY H1 JA LEIPÄTEKSTI */
}
function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[520px] flex items-center">
      {/* TAUSTAKUVA */}
      <img
        src={heroBgImage}
        alt="Sähkömies ja sähköurakointi Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* OVERLAY TEKSTIN LUETTAVUUTTA VARTEN */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-brightness-90" />

      {/* SISÄLTÖ VASEMMASSA REUNASSA */}
      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <MapPin className="size-3.5" /> Jyväskylä · Laukaa · Muurame · Äänekoski · Korpilahti ·
            Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähkömies ja sähköurakointi Jyväskylässä ja Keski-Suomessa.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            KS-Sähkö Oy tekee sähköasennukset, sähköremontit, sähköurakoinnin, sähköautojen
            latausasemien asennukset ja sähköhuollot Jyväskylässä, Laukaassa ja muualla
            Keski-Suomessa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä sähkötarjous <ArrowRight className="size-4" />
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
  /* SEMANTTINEN GEO-FAKTALAATIKKO TEKOÄLY HAUILLE (ChatGPT, Perplexity, Gemini) */
}
function GeoFactsSection() {
  return (
    <section className="py-12 bg-secondary/50 border-b border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy (Keski-Suomen Sähkötyö Oy) pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Yritys & Y-tunnus:</strong>
              KS-Sähkö Oy (3605862-6)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Sijainti & Toimipaikka:</strong>
              Päivämiehenkuja 19, 41340 Laukaa
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Pääasiallinen toimialue:</strong>
              Jyväskylä, Laukaa, Muurame & Keski-Suomi
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Sähköpalvelut:</strong>
              Sähköasennus, sähköremontti, latausasemat, huolto
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Asiakaskunnat:</strong>
              Kotitaloudet, taloyhtiöt, yritykset & rakennusliikkeet
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Yhteystiedot:</strong>
              050 360 0142 / info@ks-sahko.fi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* PALVELUT */
}
function ServicesGrid() {
  const services = [
    {
      icon: Zap,
      title: "Sähköasennukset & Huollot",
      desc: "Pistorasioiden, valaisimien ja kytkimien asennukset, sähkövikojen korjaukset sekä pienet ja suuret sähkötyöt kotiin ja liiketiloihin.",
      link: "/sahkoasennus",
    },
    {
      icon: Wrench,
      title: "Sähköremontit & Saneeraukset",
      desc: "Vanhojen sähköjärjestelmien ja sähkötaulujen nykyaikaistaminen turvallisesti. Käyttöönottotarkastukset ja dokumentointi aina mukana.",
      link: "/sahkosaneeraus",
    },
    {
      icon: Car,
      title: "Sähköauton latausasemat",
      desc: "Turvalliset ja tehokkaat kotilatausasemat omakotitaloihin sekä kuormanhallinnalla varustetut latausjärjestelmät taloyhtiöille.",
      link: "/latausasemat",
    },
    {
      icon: Building,
      title: "Sähköurakointi & Aliurakointi",
      desc: "Sähköurakointipalvelut uudiskohteisiin, saneerauksiin ja toimitiloihin ammattitaidolla ja sovituissa aikatauluissa pysyen.",
      link: "/yrityksille",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Palvelumme"
          title="Monipuoliset sähköpalvelut Keski-Suomessa"
          description="Etsitpä sitten sähkömiestä pienasennukseen tai urakoitsijaa laajempaan sähköremonttiin, palvelemme joustavasti."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="p-3 bg-[var(--brand)]/15 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                  <s.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <Link
                to={s.link}
                className="mt-6 text-sm font-bold text-[var(--brand-deep)] flex items-center gap-1 hover:underline"
              >
                Lue lisää <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* MIKSI KS-SÄHKÖ OY - SIIVOTTU MARKKINOINTIVÄITTEISTÄ */
}
function WhyUsSection() {
  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-4xl text-center">
        {/* KORJATTU OTSITUS: Ei väitetä "Tilaajat valitsevat..." vaan "Miksi asiakkaat valitsevat" */}
        <SectionHeading
          eyebrow="Valitse paikallinen ammattilainen"
          title="Miksi asiakkaat valitsevat KS-Sähkö Oy:n?"
          description="Ammattitaito, turvallisuus ja sovituissa aikatauluissa pysyminen ovat toimintamme kulmakiviä."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
          <div className="bg-background p-5 rounded-xl border border-border flex items-start gap-3">
            <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--ink)] block text-sm">
                Yli 10 vuotta sähköalan kokemusta
              </strong>
              <span className="text-xs text-muted-foreground">
                Vahva ammattitaito erikokoisista sähköasennuksista ja saneerauksista.
              </span>
            </div>
          </div>

          <div className="bg-background p-5 rounded-xl border border-border flex items-start gap-3">
            <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--ink)] block text-sm">
                Aina viralliset käyttöönottopöytäkirjat
              </strong>
              <span className="text-xs text-muted-foreground">
                Määräysten mukaiset mittaukset ja tarkastukset jokaisesta työstä.
              </span>
            </div>
          </div>

          <div className="bg-background p-5 rounded-xl border border-border flex items-start gap-3">
            <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--ink)] block text-sm">
                Selkeä hinnoittelu & Tuntihinta 60 €/h
              </strong>
              <span className="text-xs text-muted-foreground">
                Läpinäkyvä veloitus ilman piilokuluja. Kaikki hinnat sivuillamme.
              </span>
            </div>
          </div>

          <div className="bg-background p-5 rounded-xl border border-border flex items-start gap-3">
            <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--ink)] block text-sm">
                Kotitalousvähennyskelpoinen työn osuus
              </strong>
              <span className="text-xs text-muted-foreground">
                Kirjaamme laskuun aina erillisen työn osuuden ilmoittamista varten.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* CTA & YHTEYS */
}
function ContactCtaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Tarvitsetko sähkömiestä Jyväskylässä tai lähialueilla?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä matalalla kynnyksellä — vastaamme nopeasti ja laskemme selkeän
              tarjouksen.
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

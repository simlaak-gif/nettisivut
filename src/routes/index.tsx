import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Zap,
  Home,
  BatteryCharging,
  Sun,
  Wrench,
  Building2,
  CheckCircle2,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import b2bImg from "@/assets/b2b.jpg";
import b2cImg from "@/assets/b2c.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "KS-Sähkö Oy (Keski-Suomen Sähkötyö Oy)",
  image: "https://www.ks-sahko.fi/og-image.jpg",
  "@id": "https://www.ks-sahko.fi",
  url: "https://www.ks-sahko.fi",
  telephone: "+358503600142",
  email: "info@ks-sahko.fi",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Päivämiehenkuja 19",
    addressLocality: "Laukaa",
    postalCode: "41340",
    addressCountry: "FI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 62.4131,
    longitude: 25.9525,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jyväskylä",
    },
    {
      "@type": "City",
      name: "Laukaa",
    },
    {
      "@type": "City",
      name: "Muurame",
    },
    {
      "@type": "AdministrativeArea",
      name: "Keski-Suomi",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "16:00",
  },
  sameAs: ["https://www.vastuugroup.fi"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sähköurakointi & Sähköasennukset Jyväskylä ja Keski-Suomi | KS-Sähkö Oy" },
      {
        name: "description",
        content:
          "Ammattitaitoiset sähkötyöt, sähköurakointi ja aliurakointi rakennusliikkeille sekä kotitalouksille Jyväskylässä ja Keski-Suomessa. Pyydä tarjous!",
      },
      { property: "og:title", content: "Sähköurakointi & Sähköasennukset Jyväskylä | KS-Sähkö Oy" },
      {
        property: "og:description",
        content:
          "Ammattitaitoinen sähköurakoitsija rakennusliikkeille ja kotitalouksille Keski-Suomessa.",
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
        <Hero />
        <TrustBar />
        <AudienceSplit />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Sähköasentaja työssään"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />

      <div className="container-px mx-auto relative pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="size-1.5 rounded-full bg-[var(--brand)]" />
            Jyväskylä · Laukaa · Muurame · Äänekoski · Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[1.02]">
            Luotettava{" "}
            <span className="relative inline-block px-3 sm:px-4">
              <span
                className="absolute inset-0 -z-0 rounded-lg"
                style={{ background: "var(--brand)" }}
                aria-hidden
              />
              <span className="relative z-10 text-[var(--ink)]">
                Sähköurakointi ja sähköasennukset
              </span>
            </span>
            <br />
            Jyväskylässä ja Keski-Suomessa
          </h1>

          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
            Olemme paikallinen ja ammattitaitoinen sähköalan yritys. Hoidamme kaikki sähkötyöt
            turvallisesti, laadukkaasti ja sovitussa aikataulussa — niin rakennusliikkeille kuin
            kotitalouksille.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/yrityksille" className="btn-primary text-base group">
              <Building2 className="size-5" />
              Rakennusliikkeille
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kotitalouksille" className="btn-ghost text-base group">
              <Home className="size-5" />
              Kotitalouksille
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <a
              href="tel:+358503600142"
              className="flex items-center gap-2 font-bold text-white hover:text-[var(--brand)] transition-colors"
            >
              <Phone className="size-4" /> 050 360 0142
            </a>
            <span className="hidden sm:inline-block h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[var(--brand)]" /> VastuuGroup Luotettava Kumppani
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />
    </section>
  );
}

function TrustBar() {
  const stats = [
    { v: "100%", l: "Tyytyväisyystakuu" },
    { v: "24/7", l: "Päivystys yrityksille" },
    { v: "10+", l: "Vuotta kokemusta" },
    { v: "Keski-Suomi", l: "Toiminta-alue" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container-px mx-auto py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="flex flex-col">
            <span className="font-display font-black text-3xl md:text-4xl text-[var(--ink)]">
              {s.v}
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AudienceSplit() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Kenelle"
          title={
            <>
              Kaksi selkeää polkua —<br />
              sama lupaus laadusta.
            </>
          }
          description="Valitse onko kyseessä rakennushanke vai kodin sähkötyöt. Räätälöimme palvelun täsmälleen sinun tarpeisiisi."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <AudienceCard
            tag="B2B · Aliurakointi"
            image={b2bImg}
            title="Rakennusliikkeille ja yrityksille"
            points={[
              "Sähköurakointi uudis- ja saneerauskohteissa",
              "Sovitut aikataulut pitävät — joka kerta",
              "VastuuGroup Luotettava Kumppani -status",
              "Joustava aliurakointi suurempiin hankkeisiin",
            ]}
            cta="Tutustu B2B-palveluihin"
            href="/yrityksille"
            accent="dark"
          />
          <AudienceCard
            tag="B2C · Kotitaloudet"
            image={b2cImg}
            title="Kotitalouksille ja remontteihin"
            points={[
              "Kodin sähköremontit ja korjaukset",
              "Sähköauton latauspisteiden asennus",
              "Aurinkopaneelijärjestelmät avaimet käteen",
              "Kotitalousvähennys — säästät heti",
            ]}
            cta="Tutustu kodin palveluihin"
            href="/kotitalouksille"
            accent="brand"
          />
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  tag,
  image,
  title,
  points,
  cta,
  href,
  accent,
}: {
  tag: string;
  image: string;
  title: string;
  points: string[];
  cta: string;
  href: "/yrityksille" | "/kotitalouksille";
  accent: "dark" | "brand";
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl card-elev">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] ${
            accent === "brand"
              ? "bg-[var(--brand)] text-[var(--ink)]"
              : "bg-[var(--ink)] text-white"
          }`}
        >
          {tag}
        </span>
      </div>
      <div className="p-7 md:p-8">
        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--ink)]">
          {title}
        </h3>
        <ul className="mt-5 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] text-[var(--ink-soft)]">
              <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <Link
          to={href}
          className="mt-7 inline-flex items-center gap-2 font-bold text-sm text-[var(--ink)] group/cta"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          {cta}
          <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function Services() {
  const items = [
    {
      icon: Zap,
      title: "Sähköasennukset",
      text: "Kaikki kodin ja yritysten sähköasennukset turvallisesti ja nykymääräysten mukaisesti.",
    },
    {
      icon: Wrench,
      title: "Huoltopalvelut",
      text: "Sähkölaitteiden ja järjestelmien säännölliset huollot, vianetsintä ja nopeat korjaukset.",
    },
    {
      icon: Building2,
      title: "Sähköurakointi",
      text: "Toteutamme laadukkaat sähköurakat niin uudiskohteisiin kuin saneeraustyömaille ammattitaidolla.",
    },
    {
      icon: BatteryCharging,
      title: "Latauspisteet",
      text: "Sähköauton latauspisteiden suunnittelu ja asennus kotiin tai taloyhtiöön.",
    },
    {
      icon: Sun,
      title: "Aurinkopaneelit",
      text: "Aurinkosähköjärjestelmät avaimet käteen — mitoitus, asennus ja käyttöönotto.",
    },
    {
      icon: ShieldCheck,
      title: "Sähköturvallisuus",
      text: "Tarkastukset, mittaukset ja dokumentointi — vastaamme määräysten mukaisuudesta.",
    },
  ];
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Palvelut"
          title="Mitä teemme."
          description="Sähköasennuksista huoltopalveluihin ja uusiutuvaan energiaan — koko palvelu yhdeltä luotettavalta kumppanilta."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-elev p-7 group">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand-deep)] group-hover:bg-[var(--brand)] transition-colors">
                <Icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-xl font-display font-extrabold text-[var(--ink)]">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Turvallisuus edellä",
      text: "Kaikki työt nykymääräysten mukaisesti — dokumentoidusti ja sertifioidusti.",
    },
    {
      icon: Clock,
      title: "Sovittu aikataulu pitää",
      text: "Pidämme kiinni lupauksistamme. Työmaa etenee suunnitellusti ja ennustettavasti.",
    },
    {
      icon: Award,
      title: "Paikallinen ja luotettava",
      text: "VastuuGroup Luotettava Kumppani -status — verot, vakuutukset ja vastuut kunnossa.",
    },
  ];
  return (
    <section className="section-y bg-[var(--ink)] text-white relative overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />
      <div className="container-px mx-auto relative">
        <SectionHeading
          light
          eyebrow="Miksi me"
          title="Lupaus, jonka voi pitää."
          description="Tilaajat valitsevat KS-Sähkön kerta toisensa jälkeen kolmesta syystä: turvallisuus, aikataulu ja luotettavuus."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--brand)] text-[var(--ink)]">
                <Icon className="size-6" strokeWidth={2.4} />
              </div>
              <h3 className="mt-5 text-xl font-display font-extrabold text-white">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] p-10 md:p-16">
          <div
            className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--brand)" }}
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="eyebrow !text-[var(--brand)]">Ota yhteyttä</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold text-white leading-[1.05]">
                Pyydä maksuton tarjous —<br />
                vastaamme samana päivänä.
              </h2>
              <p className="mt-5 text-white/70 text-lg max-w-xl">
                Kerro hankkeestasi muutamalla rivillä tai soita suoraan. Käymme tarvittaessa paikan
                päällä Jyväskylän, Laukaan ja koko Keski-Suomen alueella.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/yhteystiedot" className="btn-primary text-base">
                Pyydä tarjous <ArrowRight className="size-4" />
              </Link>
              <a href="tel:+358503600142" className="btn-ghost text-base">
                <Phone className="size-4" /> 050 360 0142
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

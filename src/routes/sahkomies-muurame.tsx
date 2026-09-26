import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Zap,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileCode2,
  Home,
  Wrench,
  Car,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/hero.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO Local) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "KS-Sähkö Oy — Sähkömies Muurame",
  image: "https://ks-sahko.fi/Logo_k.png",
  telephone: "+358503600142",
  url: "https://ks-sahko.fi/sahkomies-muurame",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Laukaa",
    addressRegion: "Keski-Suomi",
    addressCountry: "FI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 62.1283,
    longitude: 25.6722,
  },
  areaServed: [
    "Muurame",
    "Kinkomaa",
    "Hautala",
    "Rajala",
    "Niittyaho",
    "Isolahti",
    "Saukkola",
    "Verkkoniemi",
    "Jyväskylä",
    "Säynätsalo",
    "Korpilahti",
    "Laukaa",
  ],
  description:
    "Ammattitaitoinen ja paikallinen sähkömies Muuramessa ja lähikunnissa. Sähköasennukset, vianetsintä, pistorasiat, valaisimet, latausasemat ja sähköremontit kotiin ja mökille.",
};

export const Route = createFileRoute("/sahkomies-muurame")({
  head: () => ({
    meta: [
      {
        title: "Sähkömies Muurame & Kinkomaa | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Etsitkö luotettavaa sähkömiestä Muuramessa? KS-Sähkö Oy palvelee Muuramen keskustassa, Kinkomaalla, Hautalassa ja lähialueilla. Tuntihinta 60 €/h. Soita 050 360 0142!",
      },
      {
        property: "og:title",
        content: "Sähkömies Muurame & lähialueet — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Paikalliset sähköasennukset, pistorasiat, valaisimet, sähköremontit ja sähköauton latausasemat Muuramessa ja Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: SahkomiesMuuramePage,
});

function SahkomiesMuuramePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <LocalServicesGrid />
        <WhyLocalSection />
        <GeoFactsSection />
        <FaqSection />
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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[520px] flex items-center">
      <img
        src={heroBgImage}
        alt="Sähkömies Muurame KS-Sähkö Oy"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <MapPin className="size-3.5" /> Sähköasennus Muurame & Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Luotettava sähkömies Muuramen alueella.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Tarvitsetko ammattitaitoista sähköasentajaa kotiin, vapaa-ajan asunnolle, taloyhtiöön
            tai yrityksen toimitilaan Muuramessa? Palvelemme nopeasti ja läpinäkyvällä 60 €/h
            tuntihinnoittelulla.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Tilaa sähkömies paikalle <ArrowRight className="size-4" />
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
  /* PALVELUT MUURAMESSA */
}
function LocalServicesGrid() {
  const services = [
    {
      icon: Zap,
      title: "Sähköasennukset & Vianetsintä",
      desc: "Pistorasioiden lisäykset, kytkimien vaihdot, sähkövikojen paikannus ja valaisinasennukset Muuramen kotitalouksiin, mökeille ja toimitiloihin.",
      link: "/sahkoasennus",
    },
    {
      icon: Car,
      title: "Latausaseman asennus Muurame",
      desc: "Latausasemat (Defa, Easee, Walle, Zaptec) omakotitaloihin ja taloyhtiöihin avaimet käteen -asennuksena dynaamisella kuormanhallinnalla.",
      link: "/latausasemat",
    },
    {
      icon: Wrench,
      title: "Sähkösaneeraus & Sähkökeskukset",
      desc: "Vanhojen sulaketaulujen päivitykset automaattikeskuksiin, keittiöremonttien sähkötyöt ja omakotitalojen sähkösaneeraukset.",
      link: "/sahkosaneeraus",
    },
    {
      icon: Home,
      title: "Kotitaloudet & Mökki-asennukset",
      desc: "Joustavat sähkötyöt omakotitaloihin, rivitaloihin ja vapaa-ajan asunnoille Muuramen keskustassa, Kinkomaalla, Hautalassa ja Rajalassa.",
      link: "/kotitalouksille",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Paikallinen sähköurakoitsija"
          title="Sähköpalvelut Muuramessa ilman piilokuluja"
          description="Palvelemme kaikkia Muuramen asuinalueita ja lähikuntia. Kaikki asennuksemme ovat Tukes S2 -luokiteltuja ja oikeutettuja kotitalousvähennykseen (-60 %)."
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
                Lue lisää palvelusta <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* PALVELUALUEET MUURAMESSA JA LÄHIALUEILLA */
}
function WhyLocalSection() {
  const regions = [
    "Muuramen keskusta",
    "Kinkomaa",
    "Hautala & Rajala",
    "Niittyaho & Saukkola",
    "Isolahti & Verkkoniemi",
    "Punasilta & Jaakkola",
    "Jyväskylä (Keljo, Korpilahti jne.)",
    "Säynätsalo & Muuratsalo",
    "Laukaa",
    "Äänekoski",
    "Hankasalmi",
    "Petäjävesi & Toivakka",
  ];

  return (
    <section className="py-16 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl">
              <MapPin className="size-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                Kattava palvelualueemme Muuramessa ja Keski-Suomessa
              </h3>
              <p className="text-sm text-muted-foreground">
                Sähköasentajamme liikkuvat huoltoautolla joustavasti kaikkiin Muuramen kyliin,
                vapaa-ajan asunnoille sekä lähikuntiin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {regions.map((r) => (
              <div
                key={r}
                className="flex items-center gap-2 text-sm font-medium text-[var(--ink)] bg-secondary/50 p-2.5 rounded-lg border border-border/50"
              >
                <CheckCircle2 className="size-4 text-[var(--brand-deep)] shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* GEO FAKTABOXI TEKOÄLY HAUILLE (ChatGPT, Perplexity, Gemini) */
}
function GeoFactsSection() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — Sähkömies Muurame pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Tuntiveloitus:</strong>
              60 € / h (sis. ALV 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Huoltoautomaksu:</strong>
              30 € / käynti lähialueella
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              -60 % työn osuudesta verotuksessa
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Paikallinen saavutettavuus:</strong>
              Muurame, Kinkomaa, Jyväskylä, Laukaa, Säynätsalo
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Lakisääteisyys:</strong>
              Tukes S2 -sähköurakoitsija & Pöytäkirjat
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Tilaus & Yhteydenotto:</strong>
              Puhelin 050 360 0142 / Yhteystietolomake
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* FAQ GEO & LOCAL SEO */
}
function FaqSection() {
  const faqs = [
    {
      q: "Kuinka nopeasti sähkömies pääsee paikalle Muuramessa?",
      a: "Sähköasennukset ja vianetsinnät pystytään yleensä järjestämään 1–3 arkipäivän kuluessa, tarvittaessa joustavasti aikataulusi mukaan. Sovimme aina täsmällisen saapumisajan.",
    },
    {
      q: "Paljonko sähkömies maksaa Muuramessa?",
      a: "Veloituksemme on selkeä 60 € / tunti (sis. ALV 25,5 %) + huoltoautomaksu 30 € lähialueella. Työn osuudesta voit hakea -60 % kotitalousvähennyksen verotuksessa.",
    },
    {
      q: "Teettekö sähköasennuksia myös Kinkomaalla ja vapaa-ajan asunnoilla?",
      a: "Kyllä teemme! Palvelemme Kinkomaalla, Muuramen keskustassa sekä kaikilla vapaa-ajan asunnoilla ja mökeillä Muuramen ja Päijänteen lähialueilla.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="p-3 bg-background rounded-xl text-[var(--brand-deep)] w-fit mx-auto mb-3 border border-border shadow-sm">
            <HelpCircle className="size-6" />
          </div>
          <h2 className="text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Usein kysyttyä sähköasennuksista Muuramessa
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-[var(--ink)] mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
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
    <section className="py-20 bg-background border-t border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Tarvitsetko sähkömiestä Muuramessa?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — tulemme tekemään sähkötyöt turvallisesti ja siististi.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Tilaa sähkömies <ArrowRight className="size-4" />
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

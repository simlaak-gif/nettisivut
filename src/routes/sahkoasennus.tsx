import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Plug,
  Lightbulb,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCode2,
  Check,
  Flame,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/sahkoasennukset-hero.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköasennukset ja sähköhuollot",
  serviceType: "Electrical Installation & Repair",
  provider: {
    "@type": "Electrician",
    name: "KS-Sähkö Oy",
    telephone: "+358503600142",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Laukaa",
      addressRegion: "Keski-Suomi",
    },
  },
  areaServed: ["Jyväskylä", "Laukaa", "Muurame", "Äänekoski", "Keski-Suomi"],
  description:
    "Sähköasennukset, pistorasioiden vaihdot ja lisäykset, valaisinasennukset, lieden ja kiukaan kytkennät sekä sähkövikojen korjaukset Jyväskylässä ja Keski-Suomessa. Tuntihinta 60 €/h.",
};

export const Route = createFileRoute("/sahkoasennus")({
  head: () => ({
    meta: [
      {
        title: "Sähköasennukset & Pistorasian asennus Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Sähkömies kotiin Jyväskylässä ja Laukaassa. Pistorasioiden ja valaisimien asennukset, lieden ja kiukaan kytkennät sekä pienet sähkötyöt. Tuntihinta 60 €/h. Pyydä tarjous!",
      },
      {
        property: "og:title",
        content: "Sähköasennukset ja valaisinasennukset Jyväskylässä — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Ammattitaitoiset pienten ja suurten sähköasennusten toteutukset kotitalouksille ja yrityksille Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: SahkoasennusPage,
});

function SahkoasennusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesPricingGrid />
        <CommonJobsSection />
        <GeoFactsSection /> {/* SIIRRETTY TÄHÄN ALEMMAKSI */}
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
        alt="Sähköasennukset ja pistorasioiden asennus Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Zap className="size-3.5" /> Sähköasennus·Jyväskylä · Laukaa · Muurame · Äänekoski ·
            Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähköasennukset ja huollot nopeasti kotiin.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Pistorasioiden lisäykset, valaisinasennukset, lieden ja kiukaan kytkennät sekä
            sähkövikojen korjaukset Jyväskylässä, Laukaassa ja muualla Keski-Suomessa. Selkeä
            hinnoittelu 60 €/h.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Tilaa sähköasennus <ArrowRight className="size-4" />
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
  /* GEO FAKTABOXI TEKOÄLY HAUILLE (ChatGPT, Perplexity, Gemini) */
}
function GeoFactsSection() {
  return (
    <section className="py-12 bg-secondary/50 border-b border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — Sähköasennuspalvelut pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Tuntiveloitus:</strong>
              60 € / h (sis. ALV 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Pistorasioiden asennus:</strong>
              Riippuu kaapelointitarpeesta (tyyp. 80–160 €)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Valaisimasennus:</strong>
              Samaan paikkaan tai uusi kaapelointi (80–150 €)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Sähkölaitteet:</strong>
              Lieden, uunin ja kiukaan turvalliset kytkennät
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              -60 % työn osuudesta verotuksessa
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Toiminta-alue:</strong>
              Jyväskylä, Laukaa, Muurame, Äänekoski & Keski-Suomi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* PERUSASENNUKSET JA HINTA-ARVIOT */
}
function ServicesPricingGrid() {
  const jobs = [
    {
      icon: Plug,
      title: "Pistorasioiden & kytkimien asennus",
      price: "Alk. n. 80–160 €",
      desc: "Uusien pistorasioiden lisääminen, pinnassa toimivien pistorasioiden vaihto turvallisiin maadoitettuihin malleihin tai rikkinäisten valokytkimien uusiminen.",
      points: [
        "Pinta- tai uppoasennus",
        "Turvallinen vikavirtasuojaus",
        "Rikkinäisten rasioiden vaihto",
      ],
    },
    {
      icon: Lightbulb,
      title: "Valaisinasennus & valaistusmuutokset",
      price: "Alk. n. 80–150 €",
      desc: "Kattovalaisimien, LED-nauhojen, pihavalojen sekä liiketunnistimien asennus ja kaapelointi kotiin tai liiketilaan.",
      points: [
        "Kattovalaisimet & spottivalot",
        "LED-kiskot ja -nauhat",
        "Pihavalot ja liiketunnistimet",
      ],
    },
    {
      icon: Flame,
      title: "Lieden, uunin & kiukaan kytkentä",
      price: "Alk. n. 85–120 €",
      desc: "Kodinkoneiden turvallinen kiinteä sähkökytkentä. Liesien ja sähkökiukaiden asennus vaatii aina valtuutetun sähköasentajan.",
      points: ["Induktioliedet & uunit", "Sähkökiukaiden kytkentä", "Käyttöönottotarkastus"],
    },
    {
      icon: Wrench,
      title: "Sähkövikojen vianetsintä & korjaus",
      price: "60 € / h + huoltoauto",
      desc: "Sulake laukeaa toistuvasti, pistorasiasta kuuluu ritinää tai osasta asuntoa katkesi sähköt? Etsimme sähkövian syyn ja korjaamme sen heti.",
      points: [
        "Vikavirtasuojien laukeamiset",
        "Oikosulkujen paikannus",
        "Kaapelivaurioiden korjaus",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Tavallisimmat sähkötyöt"
          title="Mitä sähköasennukset maksavat?"
          description="Sähköasennuksemme veloitetaan selkeällä 60 €/h tuntihinnalla. Alla on arvioituja esimerkkejä tyypillisten pienten sähkötöiden kokonaiskustannuksista."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="p-3 bg-[var(--brand)]/15 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                  <j.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)]">{j.title}</h3>
                <span className="inline-block mt-2 font-black text-lg text-[var(--brand-deep)]">
                  {j.price}
                </span>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {j.points.map((p) => (
                    <li key={p} className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-[var(--brand-deep)] shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/yhteystiedot"
                className="mt-6 btn-primary text-xs py-2 text-center justify-center"
              >
                Tilaa asennus <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* MIKSI TILATA SÄHKÖMIES KS-SÄHKÖLTÄ */
}
function CommonJobsSection() {
  return (
    <section className="py-16 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-4xl">
        <div className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6">
          <div className="p-4 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-2xl shrink-0">
            <ShieldCheck className="size-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">
              Tiesitkö? Sähköasennukset ovat luvanvaraisia
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Tavallinen kotitalous saa vaihtaa itse vain pienen valaisinliittimen tai sulakkeen.
              Kaikki kiinteät pistorasioiden lisäämiset, kytkimien vaihdot sekä kodinkoneiden
              kytkennät edellyttävät lain mukaan Tukesin rekisteröimää sähköurakoitsijaa. Meiltä
              saat aina virallisen käyttöönottopöytäkirjan.
            </p>
            <div className="mt-4 font-semibold text-sm text-[var(--ink)]">
              Muista hyödyntää myös kotitalousvähennys (-60 % työn osuudesta)!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* FAQ TEKOÄLYÄ JA HAKUKONEITA VARTEN (GEO & SEO) */
}
function FaqSection() {
  const faqs = [
    {
      q: "Paljonko pistorasian asennus maksaa Jyväskylässä?",
      a: "Pistorasian vaihto olemassa olevalle paikalle vie tyypillisesti alle tunnin (n. 60 € + tarvikkeet). Jos kyseessä on kokonaan uusi pistorasia, joka vaatii kaapelin vetämisen ja läpiviennin sähkökeskukselta, kokonaishinta liikkuu yleensä 100–180 euron välillä.",
    },
    {
      q: "Paljonko valaisimen asennus maksaa?",
      a: "Valaisimen vaihto valmiiseen kattorasiaan tai pistokkeeseen vie yleensä noin 30–60 minuuttia. Jos asennetaan uusia spottivaloja tai vedetään uusi kaapelointi, hinta määräytyy käytetyn ajan ja tarvikkeiden perusteella tuntihinnallamme 60 € / h.",
    },
    {
      q: "Saako sähköliieden tai induktiotason kytkeä itse?",
      a: "Ei saa. Sähkölieden, uunin ja sähkökiukaan kiinteät asennukset vaativat 3-vaihesähköä ja ne saa kytkeä vain valtuutettu sähköasentaja paloturvallisuus- ja takuusyistä.",
    },
    {
      q: "Mikä on minimiveloitus sähkötyöstä?",
      a: "Minimiveloituksemme on 1 tunti (60 €) + huoltoautomaksu lähialueella (30 €). Samaan käyntiin kannattaa yhdistää useampia pikkutöitä, kuten palovaroittimien tarkistus tai useamman pistorasian korjaus!",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="p-3 bg-secondary rounded-xl text-[var(--brand-deep)] w-fit mx-auto mb-3">
            <HelpCircle className="size-6" />
          </div>
          <h2 className="text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Usein kysyttyä sähköasennuksista
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
    <section className="py-20 bg-secondary/30 border-t border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Tarvitsetko sähköasennusta kotiin tai toimitilaan?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — tulemme nopeasti paikalle tekemään asennukset turvallisesti.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä sähköasennus <ArrowRight className="size-4" />
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

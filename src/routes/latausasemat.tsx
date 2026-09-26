import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Car,
  Home,
  Building2,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "@/assets/latausasema-hero.jpg.png";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköauton latausaseman asennus",
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
  areaServed: [
    "Jyväskylä",
    "Laukaa",
    "Muurame",
    "Keski-Suomi",
    "Äänekoski",
    "Uurainen",
    "Jämsä",
    "Himos",
    "Korpilahti",
  ],
  description:
    "Avaimet käteen -sähköauton latausasemien asennukset kotitalouksille, taloyhtiöille ja yrityksille Keski-Suomessa.",
};

export const Route = createFileRoute("/latausasemat")({
  head: () => ({
    meta: [
      { title: "Sähköauton latausaseman asennus Jyväskylä & Keski-Suomi | KS-Sähkö Oy" },
      {
        name: "description",
        content:
          "Sähköauton latausaseman asennus kotiin, taloyhtiöön ja yrityksille Jyväskylässä ja Keski-Suomessa. Turvallinen ja avaimet käteen -toteutus. Pyydä tarjous!",
      },
      { property: "og:title", content: "Sähköauton latausasemat — KS-Sähkö Oy" },
      {
        property: "og:description",
        content: "Turvalliset latausasema-asennukset kotiin ja yrityksille Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: EvChargingPage,
});

function EvChargingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <PricingSection />
        <WhyUs />
        <CTABar />
      </main>
      <SiteFooter />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[520px] flex items-center">
      {/* TAUSTAKUVA */}
      <img
        src={heroBgImage}
        alt="Sähköauton latausaseman asennus"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* TASAINEN, KEVYT OVERLAY JOTTA KUVA NÄKYI KOKONAAN JA TEKSTI SÄILYTTÄÄ LUETTAVUUDEN */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-brightness-90" />

      {/* SISÄLTÖ VASEMMASSA REUNASSA */}
      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Car className="size-3.5" /> Sähköauton lataus: Jyväskylä · Laukaa · Muurame · Äänekoski
            · Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähköauton latausaseman asennus vaivattomasti ja turvallisesti.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Asennamme laadukkaat ja turvalliset latausasemat omakotitaloihin, taloyhtiöille ja
            yrityksille Jyväskylässä sekä koko Keski-Suomen alueella.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä tarjous latausasemasta <ArrowRight className="size-4" />
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

function ServicesGrid() {
  const targets = [
    {
      icon: Home,
      title: "Kotitaloudet & Omakotitalot",
      desc: "Lataa sähköautosi turvallisesti kotona. Kartoitamme kiinteistön sähköverkon kapasiteetin ja asennamme kiinteän latausaseman avaimet käteen -periaatteella.",
    },
    {
      icon: Building2,
      title: "Taloyhtiöt",
      desc: "Nykyaikaiset latausjärjestelmät taloyhtiöille kuormanhallinnalla ja selkeällä laskutusvalmiudella. Suunnittelemme ja toteutamme asukaslähtöisesti.",
    },
    {
      icon: Zap,
      title: "Yritykset & Toimitilat",
      desc: "Latauspisteet henkilöstölle ja asiakkaille. Edusta yrityksesi vihreitä arvoja ja tarjoa vaivaton latausmahdollisuus kiinteistössäsi.",
    },
  ];

  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Ratkaisut"
          title="Latausasemat jokaiseen tarpeeseen"
          description="Tavallinen pistorasia ei ole suunniteltu jatkuvaan korkeatehoiseen lataukseen. Kiinteä latausasema on turvallinen ja huomattavasti nopeampi."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {targets.map((t) => (
            <div key={t.title} className="card-elev p-7 flex flex-col justify-between">
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/15 text-[var(--brand-deep)]">
                  <t.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold text-[var(--ink)]">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Läpinäkyvä hinnoittelu
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Mitä sähköauton latausaseman asennus maksaa?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Latausaseman kokonaishinta koostuu itse laitteesta sekä ammattilaisen tekemästä
            asennustyöstä. Muista hyödyntää työn osuudesta kotitalousvähennys!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Perusasennus -paketti */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-bold text-[var(--ink)] mb-4">
                Suosituin omakotitaloihin
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)]">Perusasennus + Latausasema</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Avaimet käteen -kokonaispaketti kotilataukseen Keski-Suomessa.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-black text-[var(--ink)]">alk. 990 €</span>
                <span className="text-sm text-muted-foreground block mt-1">(sis. ALV 25,5 %)</span>
              </div>

              <ul className="space-y-3 text-sm text-[var(--ink)] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Laadukas 11 kW / 22 kW latausasema (esim. Zaptec / DEFA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Kaapelointi sähkökeskukselta (max. 10m)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Kytkentä, turvallisuusmittaukset & käyttöönottopöytäkirja</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Käytön opastus kohteessa</span>
                </li>
              </ul>
            </div>

            <Link to="/yhteystiedot" className="btn-primary w-full text-center justify-center">
              Pyydä tarkka tarjous kohteeseesi
            </Link>
          </div>

          {/* Pelkkä asennustyö -paketti */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-bold text-[var(--ink)] mb-4">
                Oma laite valmiina
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)]">Pelkkä asennustyö</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Latausaseman asennus, kun olet jo hankkinut laitteen itse.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-black text-[var(--ink)]">alk. 190 €</span>
                <span className="text-sm text-muted-foreground block mt-1">(sis. ALV 25,5 %)</span>
              </div>

              <ul className="space-y-3 text-sm text-[var(--ink)] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Ammattilaisen tekemä turvallinen uppo-/pinta-asennus</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Syöttökaapelin veto sähkökeskukselta</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>A-tyypin vikavirtasuojaus & suojalaitteet</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)] shrink-0" />
                  <span>Virallinen käyttöönottopöytäkirja</span>
                </li>
              </ul>
            </div>

            <Link to="/yhteystiedot" className="btn-secondary w-full text-center justify-center">
              Kysy asennusaikaa
            </Link>
          </div>
        </div>

        {/* Kotitalousvähennys-infolaatikko */}
        <div className="mt-12 max-w-4xl mx-auto bg-background border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl shrink-0">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)]">
              Hyödynnä kotitalousvähennys -60 % työn osuudesta
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Sähköauton latausaseman asennustyö kuuluu kotitalousvähennyksen piiriin. Kirjaamme
              laskulle erillisen työn osuuden, jotta vähennyksen hakeminen Verohallinnolta on
              mahdollisimman helppoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    "Kartoitus ja sähköverkon riittävyyden varmistaminen",
    "Dynaaminen kuormanhallinta (ehkäisee pääsulakkeiden palamisen)",
    "Pöytäkirjat ja käyttöottotarkastus aina mukana",
    "Avaimet käteen -asennus kiinteään hintaan",
  ];

  return (
    <section className="section-y bg-secondary/40">
      <div className="container-px mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Miksi KS-Sähkö?"
          title="Turvallinen asennus ammattitaitoiselta sähköurakoitsijalta"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border"
            >
              <CheckCircle2 className="size-5 text-[var(--brand-deep)] shrink-0" />
              <span className="text-sm font-medium text-[var(--ink)]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABar() {
  return (
    <section className="pb-24 pt-12">
      <div className="container-px mx-auto">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Harkitsetko latausaseman hankintaa?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — laskemme selkeän tarjouksen asennuksesta.
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

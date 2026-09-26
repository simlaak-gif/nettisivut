import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Car,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
  Home,
  Check,
  FileCode2,
  Boxes,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/latausasema-hero.jpg.png";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköauton latausaseman asennus",
  serviceType: "EV Charger Installation",
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
    "Sähköauton latausaseman asennus omakotitaloihin ja taloyhtiöihin Jyväskylässä ja Keski-Suomessa. Defa, Easee, Walle, Garo, Zaptec, Ensto ja Wallbox -asennukset. Pelkkä asennus alk. 190 € ja avaimet käteen alk. 990 €.",
};

export const Route = createFileRoute("/latausasemat")({
  head: () => ({
    meta: [
      {
        title: "Sähköauton latausaseman asennus Jyväskylä & Laukaa | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Latausaseman asennus Jyväskylässä ja Keski-Suomessa. Defa Power, Easee, Walle, Zaptec, Garo ja Wallbox -laturit turvallisesti. Pelkkä asennus alk. 190 € ja pakettiasennus alk. 990 €.",
      },
      {
        property: "og:title",
        content: "Sähköauton latausaseman asennus Jyväskylässä — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Turvalliset Defa, Easee, Walle ja Zaptec -kotilatausasemat sekä taloyhtiöiden latausjärjestelmät kuormanhallinnalla Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: LatausasematPage,
});

function LatausasematPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <GeoFactsSection />
        <PricingSection />
        <SupportedBrandsSection />
        <TargetGroupsSection />
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
        alt="Sähköauton latausaseman asennus Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Car className="size-3.5" /> Latausasemat·Jyväskylä · Laukaa · Muurame · Äänekoski ·
            Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähköauton latausaseman asennus Jyväskylässä ja Keski-Suomessa.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Asennamme kaikkien tunnettujen valmistajien (mm. Defa Power, Easee, Walle, Zaptec, Garo,
            Ensto ja Wallbox) latausasemat omakotitaloihin, taloyhtiöihin ja yrityksille.
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
              KS-Sähkö Oy — Latausasemien asennukset pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Pelkkä asennustyö:</strong>
              alk. 190 € (sis. ALV 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Latausasema + perusasennus:</strong>
              alk. 990 € (sis. ALV 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Suositut merkit:</strong>
              Defa, Easee, Walle, Zaptec, Garo, Ensto, Wallbox, CTEK
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Ominaisuudet:</strong>
              Dynaaminen kuormanhallinta & Type 2
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
  /* HINNASTO KORTIT */
}
function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Selkeä hinnoittelu"
          title="Latausaseman asennuksen hinta"
          description="Aina läpinäkyvä hinnoittelu ilman piilokuluja. Kaikki asennukset sisältävät lakisääteisen käyttöönottotarkastuksen ja pöytäkirjan."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* PAKETTI 1 */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Oma laite (Defa, Easee, Walle jne.)
              </span>
              <h3 className="text-2xl font-bold text-[var(--ink)] mt-1">Pelkkä asennustyö</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-[var(--ink)]">alk. 190 €</span>
                <span className="text-xs text-muted-foreground">sis. ALV 25,5 %</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Kun olet hankkinut latausaseman itse (esim. Verkkokaupasta, Motonetista tai
                autoliikkeestä) ja tarvitset sähköasentajan kytkemään sen turvallisesti.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Kaapelointi sähkötaululta
                  latauspaikalle (pinta-asennus)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Vikavirtasuojauksen
                  tarkistus & kytkentä
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Käyttöönottotarkastus ja
                  mittauspöytäkirja
                </li>
              </ul>
            </div>
            <Link to="/yhteystiedot" className="btn-primary w-full text-center justify-center mt-8">
              Pyydä asennustarjous <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* PAKETTI 2 */}
          <div className="bg-card border-2 border-[var(--brand-deep)] rounded-2xl p-8 flex flex-col justify-between shadow-md relative">
            <span className="absolute -top-3.5 right-6 bg-[var(--brand-deep)] text-white text-xs font-bold px-3 py-1 rounded-full">
              Suosituin valinta
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
                Avaimet käteen -paketti
              </span>
              <h3 className="text-2xl font-bold text-[var(--ink)] mt-1">
                Latausasema + Perusasennus
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-[var(--ink)]">alk. 990 €</span>
                <span className="text-xs text-muted-foreground">sis. ALV 25,5 %</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Täydellinen avaimet käteen -paketti laadukkaalla latausasemalla omakotitaloon tai
                paritaloon.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Laadukas 11 kW / 22 kW
                  kotilatausasema
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Perusasennus (max 10m
                  kaapelointia & läpivienti)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Valmius dynaamiselle
                  kuormanhallinnalle
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-[var(--brand-deep)]" /> Käyttöopastus ja
                  mittauspöytäkirja
                </li>
              </ul>
            </div>
            <Link to="/yhteystiedot" className="btn-primary w-full text-center justify-center mt-8">
              Tilaa pakettiasennus <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* CASUAL TUOTEMERKKIOSIO SEO / GEO NÄKYVYYTTÄ VARTEN */
}
function SupportedBrandsSection() {
  const brands = [
    {
      name: "Defa Power",
      desc: "Tyylikäs ja suosittu latausasema kiinteällä kaapelilla ja näyttöllä.",
    },
    {
      name: "Easee Charge & Ready",
      desc: "Älykäs ja erittäin pienikokoinen norjalainen latausklassikko.",
    },
    {
      name: "Walle 11kW / 22kW",
      desc: "Kotimainen, kestävä metallirunkoinen suosikkilaturi Suomen sääolosuhteisiin.",
    },
    {
      name: "Zaptec Go",
      desc: "Palkittu ja turvallinen latausasema kehittyneellä kuormanhallinnalla.",
    },
    {
      name: "Garo GLB & Entity",
      desc: "Pohjoismaista laatuajattelua omakotitaloihin ja taloyhtiöihin.",
    },
    {
      name: "Ensto & Wallbox",
      desc: "Toimintavarmat ja tunnetut latausratkaisut monipuolisiin tarpeisiin.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl">
            <Boxes className="size-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">
              Asennamme kaikki suosituimmat latausasemamerkit
            </h3>
            <p className="text-sm text-muted-foreground">
              Olitpa hankkinut laitteen itse tai tilaat sen meiltä pakettina, ammattitaitoiset
              asentajamme tuntevat kaikki merkit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {brands.map((b) => (
            <div key={b.name} className="bg-background border border-border p-4 rounded-xl">
              <span className="font-bold text-[var(--ink)] block text-base">{b.name}</span>
              <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">
                {b.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* OMAKOTITALOT VS TALOYHTIÖT */
}
function TargetGroupsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <Home className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Latausasema omakotitaloon</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Tavanomainen suko-pistorasialataus ei ole suunniteltu jatkuvaan korkeaan kuormitukseen
              ja muodostaa paloturvallisuusriskin. Kiinteä latausasema lataa autosi jopa 5–10 kertaa
              nopeammin ja täysin turvallisesti.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Yölataus edullisella pörssisähköllä</li>
              <li>• Kuormanhallinta estää pääsulakkeen laukeamisen</li>
              <li>• Työn osuudesta -60 % kotitalousvähennys</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <Building2 className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">
              Latausjärjestelmät taloyhtiöille
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Toteutamme rivi- ja kerrostaloyhtiöiden latausjärjestelmät kartoituksesta asennukseen
              ja MID-hyväksyttyyn laskutusmittaukseen. Dynaaminen kuormanhallinta jakaa kiinteistön
              sähkötehon optimaalisesti kaikkien lataajien kesken.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Kartoitus ja sähköverkon riittävyyden tarkistus</li>
              <li>• Älykäs kuormanhallinta ja osakaskohtainen mittaus</li>
              <li>• Valmius järjestelmän laajentamiselle myöhemmin</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* UKK / FAQ (GEO & SEO OPTIMOITU) */
}
function FaqSection() {
  const faqs = [
    {
      q: "Paljonko sähköauton latausaseman asennus maksaa Jyväskylässä?",
      a: "Pelkkä asennustyö (kun hankit latausaseman itse, esim. Defa, Easee tai Walle) maksaa alk. 190 € (sis. ALV 25,5 %). Avaimet käteen -paketti, joka sisältää laadukkaan 11 kW / 22 kW latausaseman ja perusasennuksen, maksaa alk. 990 €. Muista että työn osuudesta saat kotitalousvähennyksen (-60 %).",
    },
    {
      q: "Asennatteko itse ostettuja latausasemia (esim. Defa Power, Easee, Walle)?",
      a: "Kyllä asennamme! Voit hankkia haluamasi latausaseman mistä tahansa verkkokaupasta tai myymälästä. Sähköasentajamme tulee paikan päälle, tekee tarvittavat kaapeloinnit, asentaa vikavirtasuojauksen ja laittaa laitteen käyttökuntoon.",
    },
    {
      q: "Mitä latausaseman perusasennukseen kuuluu?",
      a: "Perusasennukseen kuuluu latausaseman seinäkiinnitys, kaapelointi sähkökeskukselta (max 10 metriä pinta-asennuksena), vikavirtasuojakytkimen asennus/tarkistus, kytkentä, lakisääteinen käyttöönottotarkastus sekä mittauspöytäkirja ja käyttölaitteen opastus.",
    },
    {
      q: "Mikä ero on 11 kW ja 22 kW latausasemalla?",
      a: "11 kW latausasema hyödyntää 3x16A virtaa ja lataa tavanomaisen täyssähköauton akusta tyhjästä täyteen noin 5–7 tunnissa. Se riittää yli 95 % omakotitaloista ilman pääsulakekoon nostoa. 22 kW asema vaatii 3x32A virran ja tarjoaa maksimilatausnopeuden autoille, jotka tukevat 22 kW sisäistä laturia.",
    },
    {
      q: "Mikä on dynaaminen kuormanhallinta ja milloin sitä tarvitaan?",
      a: "Dynaaminen kuormanhallinta mittaa talon muuta sähkönkulutusta (esim. kiuas, ilmalämpöpumppu, leivinuuni) reaaliajassa. Jos talon kulutus nousee korkeaksi, latausasema säätää auton lataustehoa alaspäin, jotta talon pääsulakkeet eivät pala.",
    },
    {
      q: "Voiko latausaseman asentaa vanhaan omakotitaloon?",
      a: "Kyllä voi! Suurimmassa osassa omakotitaloja sähköliittymä riittää 11 kW lataukseen sellaisenaan. Tarkistamme sähkötaulun kunnon ja sulakekoot aina ennen asennuksen aloittamista.",
    },
    {
      q: "Miten latausaseman asennus etenisi taloyhtiössä?",
      a: "Aloitamme kartoituskäynnillä, jossa selvitetään kiinteistön sähköliittymän kapasiteetti. Tämän jälkeen teemme taloyhtiölle tarjouksen latausvalmiudesta ja kuormanhallinnasta, josta osakkaat voivat ottaa latauspisteen käyttöönsä tarpeen mukaan.",
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
            Usein kysyttyä latausasemien asennuksesta
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
              Hankkimassa latausasemaa Jyväskylän alueella?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — laskemme nopeasti kiinteän tarjouksen asennuksesta kotiin tai
              taloyhtiöön.
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

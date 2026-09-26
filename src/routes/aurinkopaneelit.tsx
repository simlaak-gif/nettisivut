import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCode2,
  Home,
  Building2,
  Check,
  Battery,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/aurinkopaneelit-hero.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aurinkopaneelien asennus ja aurinkosähköjärjestelmät",
  serviceType: "Solar Panel Installation",
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
    "Aurinkopaneelijärjestelmien asennukset, AC-kytkennät, invertterien vaihdot ja huollot omakotitaloihin, taloyhtiöihin ja yrityksille Jyväskylässä ja Keski-Suomessa.",
};

export const Route = createFileRoute("/aurinkopaneelit")({
  head: () => ({
    meta: [
      {
        title: "Aurinkopaneelit & Aurinkosähköjärjestelmät Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Aurinkopaneelien asennus, AC-sähkökytkennät ja invertterihuollot Jyväskylässä, Laukaassa ja Keski-Suomessa. Avaimet käteen -asennukset omakotitaloihin ja yrityksille.",
      },
      {
        property: "og:title",
        content: "Aurinkopaneelien asennus ja aurinkosähköjärjestelmät — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Laadukkaat ja turvalliset aurinkosähköjärjestelmät, invertteriasennukset ja AC-kytkennät Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: AurinkopaneelitPage,
});

function AurinkopaneelitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <GeoFactsSection />
        <ServicesGrid />
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
        alt="Aurinkopaneelien asennus Jyväskylä KS-Sähkö Oy"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Sun className="size-3.5" /> Aurinkosähkö · Jyväskylä & Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Aurinkopaneelit ja sähkökytkennät luotettavasti.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Toteutamme laadukkaat aurinkosähköjärjestelmät, paneeliston AC-sähkökytkennät,
            invertterien vaihdot sekä akkustostot omakotitaloihin, mökeille, taloyhtiöille ja
            yrityksille.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä aurinkosähkötarjous <ArrowRight className="size-4" />
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
              KS-Sähkö Oy — Aurinkosähköpalvelut pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Palvelukokonaisuus:</strong>
              Avaimet käteen -asennukset, AC-kytkennät & invertterit
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              voi pienentää työn kustannuksia — työn osuus eriteltynä laskulla.
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Lisäominaisuudet:</strong>
              Akkujärjestelmät & Pörssisähkö-ohjaus
            </div>
            <div>
              <strong className="text-[var(--ink)] block">AC-kytkentäpalvelu:</strong>
              Itse asennettujen paneelistojen verkkoonkytkentä
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Tukes-luokitus:</strong>
              S2 -sähköurakoitsija & Käyttöönottopöytäkirjat
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
  /* PALVELUT KORTTEINA */
}
function ServicesGrid() {
  const services = [
    {
      icon: Sun,
      title: "Avaimet käteen -aurinkosähköjärjestelmät",
      desc: "Täydelliset paneelijärjestelmät mitoitettuna kiinteistösi kulutuksen mukaan. Sisältää laadukkaat paneelit, turvakytkimet, kaapeloinnin, invertterin ja verkkoyhtiön ilmoitukset.",
    },
    {
      icon: Zap,
      title: "Invertterin vaihto & Sähkökytkennät (AC)",
      desc: "Oletko asentanut paneelit itse tai tarvitsetko vanhaan järjestelmään uuden invertterin? Kytkemme järjestelmän turvallisesti sähköverkkoon ja teemme virallisen käyttöönottotarkastuksen.",
    },
    {
      icon: Battery,
      title: "Akkujärjestelmät & Älykäs pörssisähköohjaus",
      desc: "Liitä aurinkopaneelijärjestelmääsi akusto tai älykäs ohjaus, joka lataa akkua halvan pörssisähkön aikaan ja hyödyntää omaa aurinkoenergiaa kulutushuippujen aikana.",
    },
    {
      icon: Wrench,
      title: "Aurinkopaneelien huolto & Vianetsintä",
      desc: "Invertteri hälyttää virhettä tai järjestelmän tuotto on pudonnut? Etsimme kaapeli- ja laiteviat ja laitamme aurinkosähkön jälleen tuottamaan myyntisähköä.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Energiatehokasta sähköä"
          title="Aurinkosähköratkaisut kaikkiin kiinteistöihin"
          description="Säästä sähkölaskussa ja lisää kiinteistösi arvoa kotimaisella, ammattitaitoisella sähköasennuksella."
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
                to="/yhteystiedot"
                className="mt-6 text-sm font-bold text-[var(--brand-deep)] flex items-center gap-1 hover:underline"
              >
                Pyydä tarjous <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* KOHDERYHMÄT */
}
function TargetGroupsSection() {
  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <Home className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Omakotitalot & Mökit</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Oman katon aurinkosähkö leikkaa suoraan ostosähkön ja siirtomaksujen määrää.
              Ylijäämätuotto myydään automaattisesti sähköyhtiölle. Työn osuudesta saat -60 %
              kotitalousvähennyksen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Katso kotitalousvähennys työn osuudesta</li>
              <li>• Avaimet käteen -asennus 1–2 päivässä</li>
              <li>• Sähköverkkoyhtiön mikrotuotantoilmoitukset valmiina</li>
            </ul>
          </div>

          <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <Building2 className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Taloyhtiöt & Yritykset</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Taloyhtiöissä hyvityslaskentamalli mahdollistaa aurinkosähkön jakamisen suoraan
              kaikkien osakkaiden huoneistosähköön. Yrityksissä aurinkosähkö kattaa suoraan
              päiväaikaisen pohjakulutuksen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Hyvityslaskenta osakkaille energiayhteisönä</li>
              <li>• Liikekiinteistöjen suuren mittakaavan kentät</li>
              <li>• Projektikohtainen urakkalaskenta</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* UKK / FAQ */
}
function FaqSection() {
  const faqs = [
    {
      q: "Voinko ostaa aurinkopaneelit itse ja tilata teiltä pelkän sähkökytkennän?",
      a: "Kyllä voit! Monet asiakkaat hankkivat paneelit ja mekatelineet itse ja tilaavat meiltä turvallisen AC-puolen sähköasennuksen, turvakytkimet, invertterin kytkennän ja virallisen käyttöönottopöytäkirjan verkkoyhtiölle.",
    },
    {
      q: "Saako aurinkopaneelien asennustyöstä kotitalousvähennystä?",
      a: "Kyllä saa! Aurinkopaneelijärjestelmän asennus- ja sähkötyön osuudesta saa omakotitalossa tai vapaa-ajan asunnolla täyden kotitalousvähennyksen verotuksessa.",
    },
    {
      q: "Miten ylijäämäsähkön myynti toimii?",
      a: "Kun aurinkopaneelit tuottavat enemmän sähköä kuin kiinteistössä kulutetaan, ylijäämä syötetään sähköverkkoon. Tee aurinkosähkön ostosopimus haluamasi sähköyhtiön kanssa, joka hyvittää myydystä sähköstä pörssihinnan mukaan.",
    },
    {
      q: "Tarvitseeko aurinkopaneelijärjestelmä luvan Jyväskylässä tai Laukaassa?",
      a: "Tavanomainen vesikaton myötäinen aurinkopaneeliasennus ei yleensä vaadi toimenpide- tai rakennuslupaa pientaloissa. Teemme lakisääteisen mikrotuotannon liitäntäilmoituksen aina paikalliselle verkkoyhtiölle (esim. Alva, Elenia tai Järvi-Suomen Energia).",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="p-3 bg-secondary rounded-xl text-[var(--brand-deep)] w-fit mx-auto mb-3 border border-border shadow-sm">
            <HelpCircle className="size-6" />
          </div>
          <h2 className="text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Usein kysyttyä aurinkosähköstä
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
              Mietitkö aurinkopaneelien hankintaa?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — laskemme tarjouksen avaimet käteen -järjestelmästä tai pelkästä
              sähkökytkennästä!
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

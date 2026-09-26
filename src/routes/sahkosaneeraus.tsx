import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Home,
  Zap,
  Building2,
  FileCheck2,
  HelpCircle,
  Calculator,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/sahkoremontti-hero.png.png";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähkösaneeraus ja sähköremontti",
  serviceType: "Electrical Renovation",
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
    "Omakotitalojen, rivitalojen, huoneistojen ja liiketilojen sähkösaneeraukset sekä sähköjen uusimiset Jyväskylässä ja Keski-Suomessa. Avaimet käteen -toteutus sisältäen mittaukset ja käyttöönottopöytäkirjan.",
};

export const Route = createFileRoute("/sahkosaneeraus")({
  head: () => ({
    meta: [
      {
        title: "Sähkösaneeraus & Sähköremontti Jyväskylä & Keski-Suomi | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Toteutamme omakotitalojen, taloyhtiöiden ja liiketilojen sähkösaneeraukset turvallisesti Jyväskylässä, Laukaassa ja Keski-Suomessa. Turvallinen avaimet käteen -asennus. Pyydä tarjous!",
      },
      {
        property: "og:title",
        content: "Sähkösaneeraukset ja sähköremontit — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Sähköjärjestelmien nykyaikaistaminen, sähkötaulujen vaihdot ja kokonaisvaltaiset sähköremontit Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: SahkosaneerausPage,
});

function SahkosaneerausPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <ProcessSection />
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
        alt="Sähkösaneeraus ja sähköremontti Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Wrench className="size-3.5" /> Sähköremontit · Jyväskylä & Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähkösaneeraus ja sähköremontti turvallisesti avaimet käteen.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Uusimme vanhat sähköjärjestelmät, sähkötaulut ja kaapeloinnit omakotitaloihin,
            huoneistoihin sekä liiketiloihin Jyväskylässä, Laukaassa ja koko Keski-Suomen alueella.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä kartoitus ja tarjous <ArrowRight className="size-4" />
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
  /* PALVELUT & REMONTTIKOHTEET */
}
function ServicesGrid() {
  const targets = [
    {
      icon: Home,
      title: "Omakotitalon sähkösaneeraus",
      desc: "Vanhojen johtojen, pistorasioiden ja kytkimien uusiminen nykyaikaisten energiankulutustarpeiden ja turvallisuusstandardien mukaisiksi.",
    },
    {
      icon: Zap,
      title: "Sähkötaulun vaihto & modernisointi",
      desc: "Vanhan tulppasulaketaulun korvaaminen nykyaikaisella automaattisulake- ja vikavirtasuojatulla sähkökeskuksella.",
    },
    {
      icon: Building2,
      title: "Huoneisto- ja keittiöremontit",
      desc: "Osittaiset sähkömuutokset keittiö- ja kylpyhuoneremonttien yhteydessä. Lisäpistorasiat, valaistuksen uusimiset ja ryhmäkeskuspäivitykset.",
    },
    {
      icon: FileCheck2,
      title: "Käyttöönottotarkastukset & mittaukset",
      desc: "Jokaiseen saneeraukseen kuuluu aina asianmukaiset turvallisuusmittaukset sekä lakisääteinen käyttöönottopöytäkirja.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Sähköjen uusiminen"
          title="Nykyaikaiset ja turvalliset sähköratkaisut"
          description="Vanhentuneet sähköasennukset ja puutteelliset maadoitukset ovat merkittävä paloturvallisuusriski. Sähkösaneeraus nostaa asumismukavuutta ja kiinteistön arvoa."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {targets.map((t) => (
            <div
              key={t.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="p-3 bg-[var(--brand)]/15 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                  <t.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)]">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* SANEERAUSPROSESSI */
}
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Kartoitus & Tarjous",
      desc: "Tulemme paikan päälle tarkistamaan nykyisen sähköjärjestelmän kunnon ja laskemme selvän kiinteän urakkatarjouksen.",
    },
    {
      step: "02",
      title: "Suunnittelu & Purkutyöt",
      desc: "Suunnittelemme uudet sähköpisteet asukkaan toiveiden mukaan ja puretaan vanhat turvattomat asennukset purkutyövaiheessa.",
    },
    {
      step: "03",
      title: "Asennus & Kaapelointi",
      desc: "Asennamme uudet suojaputket, kaapelit, pistorasiat, valokytkimet sekä nykyaikaisen vikavirtasuojatun sähkökeskuksen.",
    },
    {
      step: "04",
      title: "Mittaus & Pöytäkirja",
      desc: "Suoritamme lakisääteiset turvallisuusmittaukset ja luovutamme tilaajalle virallisen käyttöönottopöytäkirjan.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Miten etenemme
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Sähkösaneerauksen eteneminen vaihe vaiheelta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm relative"
            >
              <span className="text-3xl font-black text-[var(--brand-deep)] opacity-60 block mb-2">
                {s.step}
              </span>
              <h3 className="text-lg font-bold text-[var(--ink)]">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-background border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl shrink-0">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)]">
              Muista hyödyntää kotitalousvähennys -60 % työn osuudesta
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Sähköremontin työn osuus on kotitalousvähennyskelpoista. Kirjaamme laskulle aina
              erillisen työn osuuden ilmoittamista varten.
            </p>
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
      q: "Paljonko omakotitalon sähkösaneeraus maksaa Jyväskylässä?",
      a: "Omakotitalon sähkösaneerauksen hinta vaihtelee kohteen koon ja laajuuden mukaan. Tyypillisesti pienemmät huoneistot ja osasaneeraukset liikkuvat 1 500 – 4 000 euron välillä, kun taas koko omakotitalon kokonaissaneeraus on yleensä noin 5 000 – 12 000 euroa. Laskemme aina ilmaisen arviokäynnin pohjalta kiinteän tarjouksen.",
    },
    {
      q: "Mistä tietää, että sähköremontti on ajankohtainen?",
      a: "Sähkösaneeraus on yleensä tarpeen yli 30–40 vuotta vanhoissa kiinteistöissä, joissa on vielä vanhat tulppasulakkeet, maadoittamattomat pistorasiat tai kangaspäällysteisiä johtoja. Myös sulakkeiden toistuva palaminen, laitteiden nykiminen tai pistorasioiden tummuminen ovat merkkejä saneeraustarpeesta.",
    },
    {
      q: "Voiko sähkösaneerauksen aikana asua kotona?",
      a: "Kyllä voi. Järjestämme asennustyöt siten, että sähkökatkot minimoidaan ja kohteeseen järjestetään tarvittaessa tilapäissähköistys kriittisille laitteille (kuten kylmälaitteille) töiden ajaksi.",
    },
    {
      q: "Tarvitseeko sähköremonttiin luvan?",
      a: "Sähköasennukset ovat luvanvaraisia luvanvaraisuusluokan (S2) töitä. Luvanvaraiset sähkötyöt saa teettää vain Tukesin rekisteröimällä sähköurakoitsijalta. KS-Sähkö Oy huolehtii kaikista tarvittavista tarkastuksista ja pöytäkirjoista.",
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
            Usein kysyttyä sähkösaneerauksesta
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
              Suunnitteletko sähköremonttia?
            </h3>
            <p className="mt-2 text-white/70">
              Pyydä meidät ilmaiselle kartoituskäynnille Jyväskylän tai Keski-Suomen alueella.
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

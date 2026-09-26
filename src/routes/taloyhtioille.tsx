import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Car,
  Lightbulb,
  Cpu,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCode2,
  Check,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/taloyhtioille-hero.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköpalvelut taloyhtiöille",
  serviceType: "Housing Company Electrical Services",
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
    "Taloyhtiöiden sähköhuollot, sähkösaneeraukset, sähköautojen latausjärjestelmät, aluevalaistus, automaatio ja sähkösuunnittelu Jyväskylässä ja Keski-Suomessa.",
};

export const Route = createFileRoute("/taloyhtioille")({
  head: () => ({
    meta: [
      {
        title: "Sähköpalvelut taloyhtiöille Jyväskylä & Keski-Suomi | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Ammattitaitoiset sähköpalvelut taloyhtiöille ja isännöitsijöille Jyväskylässä ja Keski-Suomessa. Sähköautojen latausasemat, aluevalaistus, sähkösaneeraukset ja sähköhuolto.",
      },
      {
        property: "og:title",
        content: "Sähköpalvelut ja sähkösaneeraukset taloyhtiöille — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Latauskartoitukset, autolämmityksen modernisoinnit, aluevalaistukset ja sähköurakointi rivi- ja kerrostaloille Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: TaloyhtioillePage,
});

function TaloyhtioillePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <PlanningAndQuotationSection />
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
        alt="Sähkötyöt ja sähkösaneeraukset taloyhtiöille Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Building2 className="size-3.5" /> Taloyhtiöpalvelut·Jyväskylä · Laukaa · Muurame ·
            Äänekoski · Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Luotettava sähkökumppani rivi- ja kerrostaloyhtiöille.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Toteutamme taloyhtiöiden sähkösaneeraukset, sähköautojen latausjärjestelmät,
            aluevalaistuksen päivitykset, ohjausautomaatiot sekä jatkuvat huoltotyöt Jyväskylässä ja
            Keski-Suomessa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä tarjous taloyhtiölle <ArrowRight className="size-4" />
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
  /* PALVELUT TALOYHTIÖILLE */
}
function ServicesGrid() {
  const services = [
    {
      icon: Car,
      title: "Autolämmitys & Latausasemat",
      desc: "Autolämmitystolppien modernisointi kellokytkimistä eTolppiin ja dynaamisella kuormanhallinnalla varustettuihin 11 kW / 22 kW latausjärjestelmiin.",
      link: "/latausasemat",
    },
    {
      icon: Lightbulb,
      title: "Pihapiirin & aluevalaistus",
      desc: "Pihavalojen, puistovalaisimien ja porraskäytävien LED-uudistukset. Hämäräkytkimet ja kelloverkot laskevat kiinteistön sähkölaskua huomattavasti.",
    },
    {
      icon: Cpu,
      title: "Ohjaukset & Kiinteistöautomaatio",
      desc: "Lämmityksen ja ilmanvaihdon sähköiset ohjaukset, porras- ja yleistilavalaistuksen automaatiot sekä kellokytkimien ja releseintien kunnostukset.",
    },
    {
      icon: Wrench,
      title: "Sähkösaneeraukset & Huollot",
      desc: "Pääkeskusten uusimiset, nousukaapeloinnit, huoneistosaneeraukset sekä nopea korjauspalvelu arjen sähkövikojen korjaamiseen.",
      link: "/sahkosaneeraus",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Täyden palvelun sähköurakointi"
          title="Sähköratkaisut isännöitsijöille ja hallituksille"
          description="Pidämme taloyhtiön sähköjärjestelmät turvallisina, nykyaikaisina ja energiatehokkaina. Palvelemme aina selkeällä hinnoittelulla ja täsmällisellä aikataululla."
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
              {s.link ? (
                <Link
                  to={s.link}
                  className="mt-6 text-sm font-bold text-[var(--brand-deep)] flex items-center gap-1 hover:underline"
                >
                  Lue lisää palvelusta <ArrowRight className="size-3.5" />
                </Link>
              ) : (
                <Link
                  to="/yhteystiedot"
                  className="mt-6 text-sm font-bold text-[var(--brand-deep)] flex items-center gap-1 hover:underline"
                >
                  Kysy lisätietoja <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* SUUNNITTELU, KARTOITUS JA TARJOUSLASKENTA */
}
function PlanningAndQuotationSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "1. Kartoituskäynti & Kuntotarkastus",
      desc: "Tulemme paikan päälle tarkistamaan pääkeskuksen, syöttökaapeleiden ja varauksien riittävyyden (esim. latausvalmiuksia tai valaistusuudistuksia varten).",
    },
    {
      icon: Calculator,
      title: "2. Tarjouslaskenta & Hankesuunnitelma",
      desc: "Laskemme taloyhtiölle selkeän ja kiinteän urakkatarjouksen sekä laadimme esitysmateriaalin yhtiökokousta tai hallituksen päätöksentekoa varten.",
    },
    {
      icon: ShieldCheck,
      title: "3. Laadukas toteutus & Mittauspöytäkirjat",
      desc: "Asennukset tehdään sovitussa aikataulussa asukkaita mahdollisimman vähän häiriten. Luovutamme aina viralliset käyttöönottopöytäkirjat.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Ammattimainen eteneminen
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Suunnittelusta ja laskennasta valmiiseen toteutukseen
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Autamme isännöitsijää ja taloyhtiön hallitusta viemään hankkeet sujuvasti läpi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.title}
              className="bg-background border border-border p-6 rounded-2xl shadow-sm"
            >
              <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                <st.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ink)]">{st.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
            </div>
          ))}
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
              KS-Sähkö Oy — Taloyhtiöiden sähköpalvelut pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Sähkötyöt & Huolto:</strong>
              60 € / h + huoltoauto 30 € (sis. ALV 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Latausjärjestelmät:</strong>
              Kartoitus, kaapelointi, 11/22 kW asemat & MID-mittaus
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Aluevalaistus:</strong>
              LED-päivitykset, hämäräkytkimet & kelloverkot
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Urakointi & Laskenta:</strong>
              Kiinteät urakkatarjoukset taloyhtiöryhmille
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Lakisääteisyys:</strong>
              Aina mittauspöytäkirjat ja Tukes-hyväksytyt asennukset
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
  /* FAQ TEKOÄLYÄ JA HAKUKONEITA VARTEN (GEO & SEO) */
}
function FaqSection() {
  const faqs = [
    {
      q: "Miten taloyhtiön sähköautojen lataushanke kannattaa aloittaa?",
      a: "Hanke kannattaa aloittaa latauskartoituksella. Tarkistamme kiinteistön sähköliittymän kapasiteetin ja pääkeskuksen kunnon sekä teemme ehdotuksen dynaamisesta kuormanhallinnasta ja latauspisteiden määrästä hallituksen päätöksentekoa varten.",
    },
    {
      q: "Mitä maksaa taloyhtiön aluevalaistuksen muuttaminen LED-tekniikkaan?",
      a: "Valaistusuudistuksen hinta riippuu valaisinrunkojen määrästä ja kunnosta. Usein vanhat valaisinrungot voidaan säilyttää ja vaihtaa tilalle energiatehokkaat LED-moduulit hämäräkytkimellä, mikä maksaa itsensä takaisin sähkölaskussa yleensä 1–3 vuodessa.",
    },
    {
      q: "Teettekö kiinteitä urakkatarjouksia taloyhtiöille?",
      a: "Kyllä teemme! Pienemmät arjen korjaustyöt veloitetaan selkeällä tuntihinnalla 60 €/h (+ huoltoauto 30 €), mutta suuremmat hankkeet (kuten latausjärjestelmät, valaistusuudistukset ja sähkösaneeraukset) laskemme aina kiinteänä avaimet käteen -urakkana.",
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
            Usein kysyttyä taloyhtiöiden sähkötöistä
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
              Etsittekö sähköurakoitsijaa taloyhtiölle?
            </h3>
            <p className="mt-2 text-white/70">
              Pyydä meidät maksuttomalle kartoituskäynnille tai pyydä tarjous hankkeesta.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä tarjous taloyhtiölle <ArrowRight className="size-4" />
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

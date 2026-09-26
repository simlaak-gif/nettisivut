import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  Zap,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Car,
  Plug,
  HelpCircle,
  FileCode2,
  Check,
  Flame,
  Lightbulb,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/b2c.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköpalvelut kotitalouksille",
  serviceType: "Residential Electrical Services",
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
    "Kotitalouksien sähköasennukset, pistorasioiden ja valaisimien asennus, sähkövikojen korjaus, lieden kytkentä ja sähköremontit Jyväskylässä ja Keski-Suomessa. Tuntihinta 60 €/h, hyödynnä kotitalousvähennys!",
};

export const Route = createFileRoute("/kotitalouksille")({
  head: () => ({
    meta: [
      {
        title: "Sähkömies kotiin Jyväskylä & Laukaa | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Tarvitsetko sähkömiestä kotiin Jyväskylässä tai Keski-Suomessa? Pistorasiat, valaisimet, sähköremontit ja latausasemat turvallisesti. Tuntihinta 60 €/h. Muista kotitalousvähennys!",
      },
      {
        property: "og:title",
        content: "Sähköpalvelut kotitalouksille — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Ammattitaitoinen sähkömies omakotitaloihin, huoneistoihin ja mökeille Keski-Suomessa. Selkeä hinnoittelu ja nopea palvelu.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: KotitalouksillePage,
});

function KotitalouksillePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <TaxDeductionSection />
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
        alt="Sähkömies kotiin Jyväskylä ja Laukaa"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Home className="size-3.5" /> Kotitaloustyöt·Jyväskylä · Laukaa · Muurame · Äänekoski ·
            Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Luotettava sähkömies kotisi kaikkiin sähkötöihin.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Teemme omakotitalojen, rivitalojen, huoneistojen ja vapaa-ajan asuntojen
            sähköasennukset, vianetsinnät ja sähköremontit Jyväskylässä, Laukaassa ja muualla
            Keski-Suomessa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Tilaa sähkömies kotiin <ArrowRight className="size-4" />
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
  /* PALVELUKORTIT KOTITALOUKSILLE */
}
function ServicesGrid() {
  const services = [
    {
      icon: Plug,
      title: "Pistorasiat, kytkimet & valaistus",
      desc: "Uusien pistorasioiden lisääminen, rikkoutuneiden kytkimien vaihto, valaisinasennukset sekä älyvalaistusjärjestelmät kotiin ja pihalle.",
      link: "/sahkoasennus",
    },
    {
      icon: Flame,
      title: "Lieden, uunin & kiukaan kytkentä",
      desc: "Uuden sähkölieden, induktiotason tai sähkökiukaan turvallinen kytkentä ja käyttöönottotarkastus takuun säilyttämiseksi.",
      link: "/sahkoasennus",
    },
    {
      icon: Zap,
      title: "Sähkövikojen korjaus & vianetsintä",
      desc: "Laukeaako sulake toistuvasti tai ovatko valot pimeänä? Etsimme sähkövian nopeasti ja korjaamme sen turvallisesti.",
      link: "/sahkoasennus",
    },
    {
      icon: Car,
      title: "Sähköauton latausasema kotiin",
      desc: "Lataa sähköauto tai hybridi turvallisesti kotona. Asennamme laadukkaat 11 kW / 22 kW kotilatausasemat avaimet käteen.",
      link: "/latausasemat",
    },
    {
      icon: Wrench,
      title: "Sähköremontit & sähkökeskuksen vaihto",
      desc: "Vanhan sulaketaulun vaihto nykyaikaiseen automaattisulake- ja vikavirtasuojattuun keskukseen sekä keittiö- ja kylpyhuoneremonttien sähkötyöt.",
      link: "/sahkosaneeraus",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Palvelumme kotiin"
          title="Kaikki sähköasennukset ja -huollot kotitalouksille"
          description="Eipä liian pientä tai suurta sähkötyötä. Palvelemme joustavasti ja aina läpinäkyvällä 60 €/h tuntihinnoittelulla."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              {s.link && (
                <Link
                  to={s.link}
                  className="mt-6 text-sm font-bold text-[var(--brand-deep)] flex items-center gap-1 hover:underline"
                >
                  Lue lisää palvelusta <ArrowRight className="size-3.5" />
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
  /* KOTITALOUSVÄHENNYS-OSIO */
}
function TaxDeductionSection() {
  return (
    <section className="py-16 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-4xl">
        <div className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6">
          <div className="p-4 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-2xl shrink-0">
            <ShieldCheck className="size-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Kotitalousvähennys sähkötöistä</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Kotitalousvähennys voi pienentää työn kustannuksia. Kerromme, miten
              kotitalousvähennystä voi hyödyntää sähkötyössä ja eritellemme työn osuuden laskulle
              selkeästi.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ink)] font-medium">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-[var(--brand-deep)]" /> Eritelty työn osuus suoraan
                laskulla
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-[var(--brand-deep)]" /> Soveltuu kotiin, paritaloon ja
                vapaa-ajan asunnolle
              </li>
            </ul>
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
              KS-Sähkö Oy — Kotitalouksien sähkötyöt pähkinänkuoressa
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
            TypeScript
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              Työn osuus eriteltynä laskulle
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Tyypilliset työt:</strong>
              Pistorasiat, valot, lieden & kiukaan kytkentä, latausasemat
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Hyväksynnät:</strong>
              S2 -sähköurakointioikeudet & mittauspöytäkirjat
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
  /* FAQ GEO & SEO */
}
function FaqSection() {
  const faqs = [
    {
      q: "Paljonko sähkömies maksaa Jyväskylässä?",
      a: "Tuntihintamme sähkötöissä on 60 € / h (sis. ALV 25,5 %). Lisäksi huoltoautomaksu lähialueella on 30 €. Muista että työn osuudesta saat kotitalousvähennyksen verotuksessa!",
    },
    {
      q: "Teettekö myös pieniä asennuksia, kuten yhden pistorasian lisäyksen tai valaisimen vaihdon?",
      a: "Kyllä teemme! Pienetkin sähköasennukset ja vianetsinnät ovat meille arkipäivää. Voit tilata sähkömiehen paikalle joustavasti lyhyelläkin varoitusajalla.",
    },
    {
      q: "Saanko ostaa tarvikkeet (esim. valaisimet tai latausaseman) itse?",
      a: "Kyllä saat! Voit hankkia tarvikkeet tai laitteet itse verkkokaupasta tai myymälästä, ja asentajamme tulee tekemään turvallisen asennuksen. Tarvittaessa tuomme mukanamme myös laadukkaat ammattilaistarvikkeet.",
    },
    {
      q: "Saako sähköasennuksia tehdä itse?",
      a: "Vain erittäin pieniä töitä (kuten tavanomaisen valaisimen liittäminen valaisinpistorasiaan tai sulakkeen vaihto) saa tehdä itse. Kaikki kiinteät sähköasennukset, pistorasioiden lisäykset ja sähkökeskustyöt ovat luvanvaraisia työturvallisuusyistä ja vaativat Tukesin rekisteröimän sähköasentajan.",
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
            Usein kysyttyä kotitalouksien sähkötöistä
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
              Tarvitsetko sähkömiestä kotiin?
            </h3>
            <p className="mt-2 text-white/70">
              Jätä tarjouspyyntö tai soita meille suoraan — palvelemme nopeasti!
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

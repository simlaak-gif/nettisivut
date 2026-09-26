import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCode2,
  Briefcase,
  Clock,
  Wrench,
  Store,
  HardHat,
  Calculator,
  DraftingCompass,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/b2b.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähköurakointi, aliurakointi ja sähkösuunnittelu yrityksille",
  serviceType: "Commercial Electrical Contracting",
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
    "Sähköurakointi, aliurakointi rakennusliikkeille, sähkösuunnittelu, määrälaskenta ja toimitilasaneeraukset Jyväskylässä ja Keski-Suomessa. Projektikohtainen hinnoittelu.",
};

export const Route = createFileRoute("/yrityksille")({
  head: () => ({
    meta: [
      {
        title: "Sähköurakointi & Aliurakointi rakennusliikkeille Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Sähköurakointi, aliurakointi rakennusliikkeille, sähkösuunnittelu ja toimitilamuutokset Jyväskylässä ja Keski-Suomessa. Pyydä projektikohtainen urakkatarjous!",
      },
      {
        property: "og:title",
        content: "Sähköurakointi, aliurakointi ja suunnittelu yrityksille — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Toteutamme rakennusliikkeiden ja yritysten sähköurakat, suunnittelun ja urakkalaskennan täsmällisesti Keski-Suomen alueella.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: YrityksillePage,
});

function YrityksillePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <ConstructionPartnerSection />
        <BenefitsSection />
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
        alt="Sähköurakointi ja sähkösuunnittelu yrityksille Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Briefcase className="size-3.5" /> B2B-Sähköurakointi & Suunnittelu
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähköurakointi, suunnittelu ja aliurakointi yrityksille.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Laskemme ja toteutamme sähköurakat, aliurakoinnit rakennusliikkeille sekä
            sähkösuunnittelun uudis- ja saneerauskohteisiin Jyväskylässä ja koko Keski-Suomessa.
            Projektikohtainen hinnoittelu.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä urakkatarjous <ArrowRight className="size-4" />
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
  /* B2B PALVELUKORTIT */
}
function ServicesGrid() {
  const B2bServices = [
    {
      icon: HardHat,
      title: "Urakointi & Aliurakointi rakennusliikkeille",
      desc: "Luotettava sähköaliurakoitsija uudis- ja korjausrakentamiseen. Toteutamme sähköasennukset täsmällisesti pääurakoitsijan aikataulujen mukaisesti.",
    },
    {
      icon: DraftingCompass,
      title: "Sähkösuunnittelu & Laskenta",
      desc: "Teemme sähkösuunnittelun ja tarkat määrä- ja urakkalaskelmat rakennus- ja saneeraushankkeisiin. Varmistamme kustannustehokkaat ja nykyaikaiset ratkaisut.",
    },
    {
      icon: Store,
      title: "Liiketila- & Toimitilamuutokset",
      desc: "Myymälöiden, toimistojen ja liikerakennusten sähköistykset, muutostyöt ja valaistusuudistukset räätälöitynä yrityksenne tarpeisiin.",
    },
    {
      icon: Zap,
      title: "Latausjärjestelmät & Kiinteistösähkö",
      desc: "Sähköautojen latauskentät, pääkeskusten uusimiset sekä kiinteistöjen sähköverkon kapasiteetin laajennukset yrityskohteisiin.",
      link: "/latausasemat",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Ammattitaitoista sähköpalvelua"
          title="Kattavat sähköurakoinnin ja -suunnittelun palvelut"
          description="Räätälöimme jokaisen projektin tarjouksen ja toteutuksen kohteen laajuuden mukaan. Pidämme kiinni sovituista aikatauluista ja budjetista."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {B2bServices.map((s) => (
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
                  Pyydä projektitarjous <ArrowRight className="size-3.5" />
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
  /* KUMPPANUUS RAKENNUSLIIKKEILLE */
}
function ConstructionPartnerSection() {
  return (
    <section className="py-16 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="bg-background border border-border rounded-2xl p-8 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
              Luotettava aliurakoitsija
            </span>
            <h3 className="text-2xl font-bold text-[var(--ink)] mt-1">
              Etsitkö sähköurakoitsijaa rakennus- tai saneerausprojektiin?
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Toimimme joustavana sähköaliurakoitsijana rakennusliikkeille ja päänäyttämöille.
              Tarjoamme kokonaisvaltaisen palvelun tarjouslaskennasta ja sähkösuunnittelusta aina
              lopulliseen käyttöönottotarkastukseen ja luovutusmittauksiin asti.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-[var(--ink)]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--brand-deep)]" /> Tarkka urakkalaskenta
                ja pitävät tarjoukset
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--brand-deep)]" /> Sähkösuunnittelu ja
                kuvaluonnokset hankkeeseen
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--brand-deep)]" /> Tukes S2 -luokiteltu
                urakointi & Tilaajavastuu.fi OK
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <Link to="/yhteystiedot" className="btn-primary w-full text-center justify-center">
              Pyydä urakkatarjous <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+358503600142"
              className="btn-ghost w-full text-center justify-center border-border"
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
  /* MIKSI VALITA KS-SÄHKÖ OY B2B-KUMPPANIKSI */
}
function BenefitsSection() {
  const benefits = [
    {
      icon: Calculator,
      title: "Projektikohtainen hinnoittelu",
      desc: "Jokainen kohde lasketaan ja hinnoitellaan tarkasti projektin laajuuden ja vaatimusten mukaan kiinteällä urakkahinnalla.",
    },
    {
      icon: Clock,
      title: "Pitävät aikataulut",
      desc: "Ymmärrämme rakennusprojektien kriittiset välitavoitteet. Sopeutamme työskentelymme työmaan yleisaikatauluun.",
    },
    {
      icon: ShieldCheck,
      title: "Ammattitaito & Dokumentaatio",
      desc: "Lakisääteiset mittauspöytäkirjat, käyttöönottotarkastukset ja tarkkeet luovutetaan aina ajallaan ja asianmukaisesti.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Vahvuutemme B2B-kumppanina
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Miksi valita KS-Sähkö Oy projektikumpaniksi?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                <b.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ink)]">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
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
    <section className="py-12 bg-secondary/30 border-t border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — B2B-sähköurakointi ja -suunnittelu pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Hinnoittelu:</strong>
              Kiinteät projektikohtaiset urakkatarjoukset
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Palvelut rakennusliikkeille:</strong>
              Sähköaliurakointi, urakkalaskenta & suunnittelu
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Toimitilat:</strong>
              Liiketilamuutokset & saneeraukset
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Laskutustavat:</strong>
              Verkkolaskutus (OVT-tunnus / Maventa)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Toiminta-alue:</strong>
              Jyväskylä, Laukaa, Muurame, Äänekoski & Keski-Suomi
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Luokitukset:</strong>
              Tukes S2 -sähköurakointioikeudet
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
      q: "Teettekö sähköaliurakointia rakennusliikkeiden uudis- ja saneerauskohteisiin?",
      a: "Kyllä teemme! Toimimme luotettavana sähköaliurakoitsijana rakennusliikkeille Jyväskylän ja Keski-Suomen alueella. Laskemme tarjoukset urakka-asennuksista suunnitelmien ja määräluetteloiden perusteella.",
    },
    {
      q: "Voitteko huolehtia myös kohteen sähkösuunnittelusta?",
      a: "Kyllä, tarjoamme sähkösuunnittelupalvelut saneeraus- ja muutoskohteisiin. Laadimme tarvittavat tasopiirustukset ja kaaviot, jotta hanke saadaan sujuvasti luvanvaraisuuden ja toteutuksen läpi.",
    },
    {
      q: "Miten B2B-urakan hinnoittelu muodostuu?",
      a: "Jokainen B2B-urakka hinnoitellaan projektikohtaisesti. Ennen tarjouksen jättämistä käymme läpi piirustukset, työselostukset ja teemme tarvittaessa katselmuksen kohteessa, jotta tarjoushinta on täsmällinen ja kiinteä.",
    },
    {
      q: "Teettekö sähkötyöasennuksia myös aukioloaikojen ulkopuolella?",
      a: "Kyllä, liiketilamuutoksissa ja toimistosaneerauksissa teemme asennuksia tarvittaessa iltaisin tai viikonloppuisin, jotta tilaajan liiketoiminta ei häiriinny.",
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
            Usein kysyttyä B2B-urakoinnista ja suunnittelusta
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
              Etsitkö sähköurakoitsijaa tai suunnittelijaa projektiisi?
            </h3>
            <p className="mt-2 text-white/70">
              Lähetä meille tarjouspyyntömateriaali tai ota yhteyttä — laskemme täsmällisen
              urakkatarjouksen!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä B2B-tarjous <ArrowRight className="size-4" />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  DraftingCompass,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCode2,
  Home,
  Building2,
  FileText,
  Lightbulb,
  Briefcase,
  HardHat,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroBgImage from "../assets/suunnittelu-hero.jpg";

// Schema.org-data tekoäly- ja hakukonehakuja (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sähkösuunnittelu yrityksille, rakennusprojekteihin ja pientaloihin",
  serviceType: "Electrical Design & Engineering",
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
    "Sähkösuunnittelu yritysten rakennusprojekteihin, toimitiloihin, liikerakennuksiin, omakotitaloihin ja taloyhtiöille Jyväskylässä ja Keski-Suomessa. Sähköpiirustukset ja keskuskaaviot.",
};

export const Route = createFileRoute("/sahkosuunnittelu")({
  head: () => ({
    meta: [
      {
        title: "Sähkösuunnittelu yrityksille & rakennusprojekteihin Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Nykyaikainen sähkösuunnittelu yritysten rakennusprojekteihin, liikerakennuksiin, omakotitaloihin ja taloyhtiöille Jyväskylässä, Laukaassa ja Keski-Suomessa. Pyydä suunnittelutarjous!",
      },
      {
        property: "og:title",
        content:
          "Ammattitaitoinen sähkösuunnittelu yrityksille ja rakennushankkeisiin — KS-Sähkö Oy",
      },
      {
        property: "og:description",
        content:
          "Sähkösuunnitelmat, tasopiirustukset, keskuskaaviot ja urakkalaskentamateriaalit yritysten rakennusprojekteihin ja pientaloihin Keski-Suomessa.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: SahkosuunnitteluPage,
});

function SahkosuunnitteluPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesGrid />
        <TargetGroupsSection />
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
        alt="Sähkösuunnittelu yrityksille ja rakennusprojekteihin Jyväskylä KS-Sähkö Oy"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/65 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <DraftingCompass className="size-3.5" /> Suunnittelupalvelut·Jyväskylä · Laukaa ·
            Muurame · Äänekoski · Korpilahti · Jämsä · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Sähkösuunnittelu yrityksille, rakennusprojekteihin ja pientaloihin.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Laadimme selkeät sähköpiirustukset, keskuskaaviot, valaistussuunnitelmat ja
            määrälaskelmat yritysten rakennushankkeisiin, toimitiloihin, taloyhtiöille sekä
            pientaloille Keski-Suomessa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä suunnittelutarjous <ArrowRight className="size-4" />
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
  /* PALVELUT KORTTEINA */
}
function ServicesGrid() {
  const services = [
    {
      icon: Briefcase,
      title: "Yritysten rakennusprojektit & Toimitilat",
      desc: "Sähkösuunnittelu yritysten uudis- ja saneeraushankkeisiin, myymälöihin, toimistoihin ja teollisuuskiinteistöihin. Huomioimme liiketoiminnan tehotarpeet ja muunneltavuuden.",
    },
    {
      icon: Home,
      title: "Omakotitalojen & Mökkien sähkösuunnittelu",
      desc: "Pientalojen ja vapaa-ajan asuntojen täydelliset sähkösuunnitelmat. Pistorasiat, valaistus, ryhmäkeskukset, tietoverkot ja autolatauksen sijainnit asumismukavuutta optimoiden.",
    },
    {
      icon: Lightbulb,
      title: "Valaistussuunnittelu & Älyohjaukset",
      desc: "Energiatehokkaat LED-valaistusratkaisut, epäsuorat valot sekä älykkäät valaistusohjaukset (esim. Plejd, Dali, Casambi), joilla luodaan tunnelmaa ja säästetään sähköä.",
    },
    {
      icon: Building2,
      title: "Taloyhtiöhankkeet & Latauskentät",
      desc: "Taloyhtiöiden autolatausjärjestelmien, aluevalaistuksen, pääkeskusmuutosten ja nousukaapelointien sähkösuunnittelu sekä määrälaskentamateriaalit yhtiökokouksille.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Tarkkaa ja laadukasta suunnittelua"
          title="Toimivat sähkösuunnitelmat kaikkiin hankkeisiin"
          description="Hyvin suunniteltu sähköistys säästää kustannuksia itse asennusvaiheessa ja takaa turvallisen ja arjessa toimivan lopputuloksen vuosikymmeniksi."
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
                Pyydä suunnittelutarjous <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* KOHDERYHMÄT / HYÖDYT */
}
function TargetGroupsSection() {
  return (
    <section className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <HardHat className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">
              Rakennusliikkeille & Yrityksille
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Laadimme rakennushankkeisiin käytännönläheiset sähkösuunnitelmat ja määräluettelot,
              joiden pohjalta urakkalaskenta on täsmällistä ja asennustyö sujuvaa.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Kustannustehokkaat ratkaisut toimitila- ja liikerakentamiseen</li>
              <li>• Selkeät piirustukset helpottavat urakoiden tarjouslaskentaa</li>
              <li>• Yhteensopiva LVI- ja arkkitehtisuunnittelun kanssa</li>
            </ul>
          </div>

          <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Suunnittelusta toteutukseen</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Koska tarjoamme sekä sähkösuunnittelun että asennukset samasta talosta, suunnitelmat
              laaditaan poikkeuksellisen käytännönläheisesti ja urakointinäkökulma huomioiden.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• EI turhia tai hankalasti toteutettavia erikoisratkaisuja</li>
              <li>• Suora yhteys suunnittelijan ja toteuttavan asentajan välillä</li>
              <li>• Saumaton luovutusaineisto käyttöönottotarkastuksineen</li>
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
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — Sähkösuunnittelu pähkinänkuoressa
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Hinnoittelu:</strong>
              Projektikohtaiset kiinteät suunnittelutarjoukset
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Yrityspalvelut:</strong>
              Rakennusprojektien & toimitilojen sähkösuunnittelu
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Dokumentit:</strong>
              Sähköasematasot, keskuskaaviot, LVI-ohjaukset
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Tiedostomuodot:</strong>
              PDF-piirustukset & DWG-CAD-kuvat
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Rekisteröinti:</strong>
              Tukesin rekisteröimä sähköurakoitsija (S2-pätevyys)
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
  /* UKK / FAQ */
}
function FaqSection() {
  const faqs = [
    {
      q: "Teettekö sähkösuunnittelua yritysten rakennus- ja saneerausprojekteihin?",
      a: "Kyllä teemme! Laadimme sähkösuunnitelmat yritysten toimitilamuutoksiin, uudisrakennuksiin ja myymäläsaneerauksiin. Suunnittelemme järjestelmät täsmällisesti yrityksen tarpeiden ja viranomaismääräysten mukaisesti.",
    },
    {
      q: "Tarvitaanko keittiö- tai omakotitaloremontissa virallisia sähköpiirustuksia?",
      a: "Pienissä pistorasiamuutoksissa ei välttämättä tarvita laajaa sähkösuunnitelmaa, mutta keittiö- ja kylpyhuoneremonteissa sekä koko omakotitalon sähkösaneerauksessa sähkösuunnitelma ja keskuskaavio ovat välttämättömiä, jotta kuormitukset lasketaan oikein ja työmaan urakoitsija tietää tarkan toteutusmallin.",
    },
    {
      q: "Missä muodossa toimitatte sähkösuunnitelmat?",
      a: "Toimitamme valmiit sähkösuunnitelmat selkeinä PDF-tiedostoina tulostettavaksi työmaalle sekä tarvittaessa sähköisinä CAD/DWG-tiedostoina arkkitehti- ja pääsuunnittelijakäyttöön.",
    },
    {
      q: "Voitteko suunnitella ja toteuttaa saman kohteen avaimet käteen?",
      a: "Kyllä! Sähkösuunnittelun ja sähköasennuksen yhdistäminen saman katon alle varmistaa, että budjetti pitää, piirustukset toteutuvat sellaisenaan ja vastuunjako on täysin selkeä.",
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
            Usein kysyttyä sähkösuunnittelusta
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
              Tarvitsetko sähkösuunnittelijaa yrityksen tai pientalon projektiin?
            </h3>
            <p className="mt-2 text-white/70">
              Lähetä meille kohteen pohjakuva tai ota yhteyttä — laskemme täsmällisen
              suunnittelutarjouksen!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä suunnittelutarjous <ArrowRight className="size-4" />
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

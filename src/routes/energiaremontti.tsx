import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Phone,
  ArrowRight,
  TrendingDown,
  Gauge,
  Thermometer,
  Sliders,
  CheckCircle2,
  ShieldCheck,
  FileCode2,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHeading } from "../components/SectionHeading";
import heroBgImage from "../assets/energiaremontti-hero.png";

// Schema.org-data hakukoneille ja tekoälyhauille
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Energiaremontti & Pörssisähkön ohjaus — KS-Sähkö Oy",
  provider: {
    "@type": "LocalBusiness",
    name: "KS-Sähkö Oy",
    telephone: "+358503600142",
  },
  areaServed: ["Jyväskylä", "Laukaa", "Muurame", "Keski-Suomi"],
  description:
    "Säästä sähkölaskussa! Pörssisähköohjaukset, lämminvesivaraajan automaatio, älytermostaatit ja sähköpatterien vaihto Keski-Suomessa.",
};

export const Route = createFileRoute("/energiaremontti")({
  head: () => ({
    meta: [
      {
        title: "Energiaremontti & Pörssisähkön Ohjaus Jyväskylä | KS-Sähkö Oy",
      },
      {
        name: "description",
        content:
          "Pienennä sähkölaskuasi! Pörssisähkön ohjaus lämminvesivaraajalle (hinta alkaen n. 200–250 €), älytermostaattien vaihto (hinta alkaen 160–280 €) ja sähköpatterien uusinta (hinta alkaen 150–250 €).",
      },
      {
        property: "og:title",
        content: "Energiaremontti & Pörssisähkön ohjaus — KS-Sähkö Oy",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: EnergiaremonttiPage,
});

function EnergiaremonttiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <ServicesPricesSection />
        <WhyOptimizeSection />
        <GeoFactsSection />
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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[480px] flex items-center">
      <img
        src={heroBgImage}
        alt="Sähkölämmityksen energiaremontti ja pörssisähkön ohjaus"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <TrendingDown className="size-3.5" /> Säästä sähkölaskussa
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08] text-left">
            Energiaremontti & Pörssisähkön ohjaus.
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium text-left">
            Leikkaa sähkölämmityksen ja vedenlämmityksen kustannuksia. Asennamme pörssisähkön
            ohjaukset lämminvesivaraajille, vaihdamme nykyaikaiset sähköpatterit sekä
            älytermostaatit nopeasti ja selkeällä hinnoittelulla.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä energiaremonttitarjous <ArrowRight className="size-4" />
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
  /* PALVELUT & HINNASTO -KORTIT */
}
function ServicesPricesSection() {
  const services = [
    {
      icon: Gauge,
      title: "Lämminvesivaraajan pörssisähköohjaus",
      priceLabel: "Hinta alkaen",
      price: "200 – 250 €",
      unit: "alv 25,5 % / kohde",
      desc: "Lämminvesivaraaja on omakotitalon suurimpia sähkönkuluttajia. Asennamme kytkinkellon, älyreleen tai pörssisähköohjaimen, joka lämmittää käyttöveden aina vuorokauden halvimpina tunteina.",
      features: [
        "Säästää merkittävästi lämmityskustannuksissa",
        "Automaattinen toiminta halvoilla tunneilla",
        "Käsikytkentämahdollisuus poikkeustilanteisiin",
      ],
    },
    {
      icon: Thermometer,
      title: "Älytermostaatin vaihto",
      priceLabel: "Hinta alkaen",
      price: "160 – 280 €",
      unit: "alv 25,5 % / kpl (sis. asennus + laite)",
      desc: "Vanhan mekaanisen tai epätarkan termostaatin korvaaminen pörssisähköohjatulla tai viikko-ohjelmoitavalla älytermostaatilla (esim. lattia- ja huonelämmitys).",
      features: [
        "Tarkka lämpötilansäätöasteikko",
        "Optimoitu lämmitys edullisille tunneille",
        "Etäohjaus ja ajastukset puhelimella",
      ],
    },
    {
      icon: Sliders,
      title: "Sähköpatterin / Lämmittimen vaihto",
      priceLabel: "Hinta alkaen",
      price: "150 – 250 €",
      unit: "alv 25,5 % / kpl (sis. työn & peruspatterin)",
      desc: "Vanhojen, napsuvien ja energiaa tursuavien sähkölämmittimien korvaaminen nykyaikaisilla, elektronisella termostaatilla varustetuilla pattereilla.",
      features: [
        "Tasainen ja miellyttävä huonelämpötila",
        "Ei hyödytöntä ylilämmitystä",
        "Siisti ja turvallinen asennus",
      ],
    },
    {
      icon: Sparkles,
      title: "Kattavat Pörssisähköjärjestelmät",
      priceLabel: "Hinta alkaen",
      price: "60 €/h",
      unit: "+ 30 € huoltoautomaksu / tarjous",
      desc: "Suunnittelemme ja toteutamme laajemmat koko kiinteistön pörssisähkön ohjausjärjestelmät (esim. Plejd, Shelly, Theben tai muut älykotiratkaisut) räätälöidysti.",
      features: [
        "Suunniteltu kiinteistösi tarpeisiin",
        "Automaattinen kuormanhallinta & ajastus",
        "Eritelty lasku kotitalousvähennykseen",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Tarkka hinnoittelu"
          title="Energiaremontin suosituimmat ratkaisut"
          description="Pienillä ja edullisilla sähköasennuksilla saavutetaan usein satojen eurojen vuosittaiset säästöt sähkölaskussa."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand)] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 bg-[var(--brand)]/15 text-[var(--brand-deep)] rounded-xl">
                    <item.icon className="size-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-deep)] block">
                      {item.priceLabel}
                    </span>
                    <span className="text-xl md:text-2xl font-black text-[var(--ink)] block">
                      {item.price}
                    </span>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {item.unit}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--ink)] mt-2">{item.title}</h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

                <ul className="mt-6 space-y-2 border-t border-border pt-4">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--ink)]"
                    >
                      <CheckCircle2 className="size-4 text-[var(--brand-deep)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="font-semibold text-muted-foreground">
                  Työstä kotitalousvähennys
                </span>
                <Link
                  to="/yhteystiedot"
                  className="font-bold text-[var(--brand-deep)] hover:underline flex items-center gap-1"
                >
                  Tilaa asennus <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* MIKSI ENERGIAREMONTTI KANNATTAA */
}
function WhyOptimizeSection() {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <TrendingDown className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Miksi pörssisähkön ohjaus?</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Pörssisähkön hinta vaihtelee voimakkaasti vuorokaudenajan mukaan. Siirtämällä
              lämmityksen ja vedenlämmityksen halvoille yötunneille säästät rahaa ilman, että
              asumismukavuus kärsii.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Ammattilaisen kytkennät</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Korkeatehoisten lämmittimien ja lyyra- tai varaajakytkentöjen tekeminen vaatii aina
              sähköasennusoikeudet. Meiltä saat turvallisen ja määräysten mukaisen kytkennän
              käyttöönottopöytäkirjalla.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
            <div className="p-3 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
              <Zap className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Lyhyt takaisinmaksuaika</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Lämminvesivaraajan pörssisähköohjaus tai lämmittimien ja termostaattien päivitys
              maksaa itsensä takaisin parhaimmillaan jo ensimmäisen lämmityskauden aikana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* GEO FAKTABOXI TEKOÄLY HAUILLE */
}
function GeoFactsSection() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container-px mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-[var(--brand-deep)]">
            <FileCode2 className="size-6" />
            <h3 className="text-lg font-bold text-[var(--ink)]">
              KS-Sähkö Oy — Pörssisähkön ohjaukset & Energiaremontit
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-[var(--ink)] block">Varaajan ohjaus:</strong>
              Hinta alkaen n. 200–250 € (alv 25,5 %)
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Älytermostaatit:</strong>
              Hinta alkaen 160–280 € / kpl
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Lämmittimet:</strong>
              Hinta alkaen 150–250 € / kpl
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Kotitalousvähennys:</strong>
              Työn osuus oikeuttaa kotitalousvähennykseen
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Rekisteröinti & Pätevyys:</strong>
              Tukesin rekisteröimä sähköurakoitsija, S2-pätevyys
            </div>
            <div>
              <strong className="text-[var(--ink)] block">Toiminta-alue:</strong>
              Jyväskylä, Laukaa, Muurame & Keski-Suomi
            </div>
          </div>
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
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Haluaisitko aloittaa sähkölaskun pienentämisen?
            </h3>
            <p className="mt-2 text-white/70">
              Ota yhteyttä — lasketaan tarjous varaajan ohjauksesta, lämmittimien vaihdosta tai koko
              kiinteistön pörssisähköjärjestelmästä!
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

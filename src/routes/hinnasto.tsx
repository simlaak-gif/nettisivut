import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  Clock,
  Truck,
  Wrench,
  Navigation,
  ShieldCheck,
  ArrowRight,
  Phone,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBgImage from "@/assets/hero.jpg";

// Schema.org-data tekoälyhakuja ja hakukoneita (SEO & GEO) varten
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  name: "KS-Sähkö Oy Hinnasto - Sähkötyöt Jyväskylä & Keski-Suomi",
  priceCurrency: "EUR",
  description:
    "Sähkötöiden tuntihinta 59 €/h, huoltoautokäynti 25 €, pientarvikelisä 15 € ja kilometrikorvaus Jyväskylän ulkopuolella 1,30 €/km (sis. ALV 25.5%). Kotitalousvähennyskelpoinen.",
  provider: {
    "@type": "Electrician",
    name: "KS-Sähkö Oy",
    telephone: "+358503600142",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jyväskylä",
      addressRegion: "Keski-Suomi",
    },
  },
};

export const Route = createFileRoute("/hinnasto")({
  head: () => ({
    meta: [
      { title: "Hinnasto - Sähkötyöt Jyväskylä & Keski-Suomi | KS-Sähkö Oy" },
      {
        name: "description",
        content:
          "Selkeä ja läpinäkyvä sähkötöiden hinnasto Jyväskylässä ja Keski-Suomessa. Tuntihinta 59 €/h, huoltoautokäynti 25 €. Muista kotitalousvähennys -60 %! Katso hinnat.",
      },
      { property: "og:title", content: "Hinnasto — KS-Sähkö Oy" },
      {
        property: "og:description",
        content: "Läpinäkyvä sähkötöiden hinnasto kotiin ja yrityksille Jyväskylän alueella.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdData),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PriceGridSection />
        <TaxDeductionSection />
        <CustomPricingInfo />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

{
  /* HERO-OSIO SINOA VASTAAVALLA TAUSTAKUVALLA */
}
function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-white overflow-hidden min-h-[480px] flex items-center">
      <img
        src={heroBgImage}
        alt="Sähkötyöt hinnasto Jyväskylä"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-brightness-90" />

      <div className="container-px mx-auto relative z-20 w-full text-left">
        <div className="max-w-3xl mr-auto text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Calculator className="size-3.5" /> Läpinäkyvä hinnoittelu · Keski-Suomi
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.08]">
            Sähkötöiden hinnasto
          </h1>

          <p className="mt-6 text-lg text-white/95 max-w-2xl leading-relaxed font-medium">
            Ei piilokuluja tai yllätyksiä. Tarjoamme sähköasennukset ja -huollot selkeällä
            hinnoittelulla Jyväskylässä sekä lähikunnissa. Kaikki hinnat sisältävät ALV 25,5 %.
          </p>
        </div>
      </div>
    </section>
  );
}

{
  /* HINNASTO-GRID */
}
function PriceGridSection() {
  const prices = [
    {
      title: "Tuntihinta",
      price: "60 € / h",
      unit: "sis. ALV 25,5 %",
      icon: Clock,
      desc: "Normaali sähköasennus- ja huoltotyö arkisin. Laskutus toteutuneiden työtuntien mukaan.",
      featured: true,
    },
    {
      title: "Huoltoautokäynti",
      price: "30 €",
      unit: "lähialueilla (sis. ALV 25,5 %)",
      icon: Truck,
      desc: "Kattaa huoltoauton kalusto-, työkalu- ja matkakulut Jyväskylän lähialueella.",
      featured: false,
    },
    {
      title: "Pientarvikelisä",
      price: "15 €",
      unit: "tarvittaessa (sis. ALV 25,5 %)",
      icon: Wrench,
      desc: "Veloitetaan vain, jos kohteessa käytetään pientarvikkeita (esim. liittimet, ruuvit, proput, teipit).",
      featured: false,
    },
    {
      title: "Kilometrikorvaus",
      price: "1,30 € / km",
      unit: "Jyväskylän ulkopuolella (sis. ALV 25,5 %)",
      icon: Navigation,
      desc: "Sovelletaan kohteisiin, jotka sijaitsevat Jyväskylän kaupunkialueen ulkopuolella.",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Selkeät hinnat
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Sähköasennuksen veloitusehdot
          </h2>
          <p className="mt-4 text-muted-foreground">
            Voit tilata työn tuntiveloituksella tai pyytää suurempiin kokonaisuuksiin kiinteän
            urakkatarjouksen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prices.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-shadow ${
                item.featured
                  ? "bg-card border-2 border-[var(--brand)] shadow-lg"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              <div>
                <div className="p-3 bg-[var(--brand)]/15 text-[var(--brand-deep)] rounded-xl w-fit mb-4">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-black text-[var(--ink)]">{item.price}</span>
                  <span className="text-xs text-muted-foreground block mt-1">{item.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* KOTITALOUSVÄHENNYS */
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
            <h3 className="text-2xl font-bold text-[var(--ink)]">Hyödynnä kotitalousvähennys</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Kaikki yksityishenkilöille tehty sähkötyö kotona tai vapaa-ajan asunnolla on
              kotitalousvähennyskelpoista. Erittelemme laskuun aina selkeästi työn osuuden ja
              tarvikkeet, jotta vähennyksen ilmoittaminen Verohallinnolle sujuu vaivattomasti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* TAPAUSKOHTAINEN HINNOITTELU */
}
function CustomPricingInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container-px mx-auto max-w-4xl text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-sm">
          <div className="inline-block p-3 bg-secondary rounded-xl text-[var(--brand-deep)] mb-4">
            <FileText className="size-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
            Suuremmat urakat & tapauskohtainen hinnoittelu
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sähkösaneeraukset, uudiskohteet, taloyhtiöurakat sekä isommat latausasemakokonaisuudet
            hinnoittelemme aina tapauskohtaisesti kiinteällä urakkatarjouksella. Kysy maksutonta
            arviota kohteestasi!
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/yhteystiedot" className="btn-primary">
              Pyydä urakkatarjous <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* YHTEYSTIEDOT-OSIO SIVULLA */
}
function ContactSection() {
  return (
    <section className="py-20 bg-secondary/30 border-t border-border">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-deep)]">
            Ota yhteyttä
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-[var(--ink)] sm:text-4xl">
            Tilaa sähköasentaja tai pyydä tarjous
          </h2>
          <p className="mt-3 text-muted-foreground">
            Palvelemme joustavasti Jyväskylässä, Laukaassa, Muuramessa ja koko Keski-Suomen
            alueella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <a
            href="tel:+358503600142"
            className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-[var(--brand)] transition-colors flex flex-col items-center"
          >
            <Phone className="size-8 text-[var(--brand-deep)] mb-3" />
            <span className="text-xs text-muted-foreground uppercase font-bold">Puhelin</span>
            <span className="text-lg font-bold text-[var(--ink)] mt-1">050 360 0142</span>
          </a>

          <Link
            to="/yhteystiedot"
            className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-[var(--brand)] transition-colors flex flex-col items-center"
          >
            <Mail className="size-8 text-[var(--brand-deep)] mb-3" />
            <span className="text-xs text-muted-foreground uppercase font-bold">Verkkolomake</span>
            <span className="text-lg font-bold text-[var(--ink)] mt-1">Jätä tarjouspyyntö</span>
          </Link>

          <div className="p-6 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center">
            <MapPin className="size-8 text-[var(--brand-deep)] mb-3" />
            <span className="text-xs text-muted-foreground uppercase font-bold">Toimialue</span>
            <span className="text-lg font-bold text-[var(--ink)] mt-1">
              Jyväskylä & Keski-Suomi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

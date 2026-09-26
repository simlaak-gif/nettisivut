import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  ShieldCheck,
  Clock,
  FileCheck,
  HardHat,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import b2bImg from "@/assets/b2b.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/yrityksille")({
  head: () => ({
    meta: [
      { title: "Palvelut yrityksille — Sähköurakointi & aliurakointi | KS-Sähkö Oy" },
      {
        name: "description",
        content:
          "Sähköurakointi rakennusliikkeille ja yrityksille Keski-Suomessa. Aliurakointi, aikataulut pitävät, VastuuGroup Luotettava Kumppani.",
      },
      { property: "og:title", content: "Palvelut yrityksille — KS-Sähkö Oy" },
      {
        property: "og:description",
        content: "Luotettava sähköurakoinnin kumppani rakennusliikkeille.",
      },
      { property: "og:image", content: b2bImg },
    ],
  }),
  component: B2BPage,
});

function B2BPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <Promise />
        <ServiceList />
        <Process />
        <CTABar />
      </main>
      <SiteFooter />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative isolate min-h-[78svh] flex items-end overflow-hidden">
      <img
        src={b2bImg}
        alt="Rakennushanke"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-px mx-auto relative pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Building2 className="size-3.5" /> B2B · Aliurakointi
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.05]">
            Rakennusliikkeen luotettava sähköurakoitsija.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Toteutamme sähköurakat uudis- ja saneerauskohteissa Keski-Suomessa. Ammattitaitoinen
            tiimi, sovitut aikataulut ja täydellinen dokumentointi — niin kuin sovittiin.
          </p>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const items = [
    {
      icon: ShieldCheck,
      title: "VastuuGroup Luotettava Kumppani",
      text: "Verot, vakuutukset ja tilaajavastuulain mukaiset tiedot kunnossa — vaivattomasti todennettavissa.",
    },
    {
      icon: Clock,
      title: "Aikataulut pitävät",
      text: "Resursoimme työmaan oikein. Etenemme sovitun aikataulun mukaan ja pidämme tilaajan kartalla.",
    },
    {
      icon: HardHat,
      title: "Ammattitaitoinen tiimi",
      text: "Pätevyydet ja työturvallisuuskortit kunnossa. Työmaalla ammattilainen, jolla on kokonaisuus hallussa.",
    },
    {
      icon: FileCheck,
      title: "Täydellinen dokumentointi",
      text: "Mittaukset, tarkastuspöytäkirjat ja luovutusaineisto valmiina käyttöönottoon — viivytyksittä.",
    },
  ];
  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Mitä lupaamme"
          title="Sähköurakointia, johon rakennusliike voi luottaa."
          description="Yli vuosikymmenen kokemus rakennushankkeista — pienistä saneerauksista isoihin uudiskohteisiin."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-elev p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand-deep)]">
                <Icon className="size-5" strokeWidth={2.4} />
              </div>
              <h3 className="mt-4 text-lg font-display font-extrabold text-[var(--ink)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceList() {
  const groups = [
    {
      title: "Sähköurakointi",
      items: [
        "Uudiskohteiden sähköurakat",
        "Saneerauskohteiden sähköistys",
        "Liike- ja toimitilojen sähköistys",
        "Teollisuuden sähkötyöt",
      ],
    },
    {
      title: "Aliurakointi",
      items: [
        "Joustava aliurakointi pääurakoitsijoille",
        "Asennustyöt projektikohtaisesti",
        "Resurssituki työmaalle tarpeen mukaan",
        "Selkeä kommunikaatio ja raportointi",
      ],
    },
    {
      title: "Suunnittelu & dokumentointi",
      items: [
        "Sähkösuunnittelu ja mitoitus",
        "Tarkastusmittaukset ja pöytäkirjat",
        "Käyttöottotarkastukset",
        "Luovutusaineisto valmiina",
      ],
    },
  ];
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-px mx-auto">
        <SectionHeading eyebrow="Palvelut yrityksille" title="Mitä kaikkea hoidamme." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="card-elev p-7">
              <h3 className="text-xl font-display font-extrabold text-[var(--ink)]">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                    <CheckCircle2 className="size-4 mt-0.5 text-[var(--brand-deep)] shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Yhteydenotto", d: "Kerro hankkeesta. Vastaamme yleensä samana arkipäivänä." },
    {
      n: "02",
      t: "Kartoitus & tarjous",
      d: "Käymme tarvittaessa paikan päällä. Selkeä tarjous ilman piilokustannuksia.",
    },
    {
      n: "03",
      t: "Toteutus aikataulussa",
      d: "Resursoimme tiimin ja etenemme sovitun aikataulun mukaan.",
    },
    {
      n: "04",
      t: "Luovutus & dokumentit",
      d: "Mittaukset, tarkastukset ja aineisto valmiina käyttöönottoon.",
    },
  ];
  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <SectionHeading eyebrow="Prosessi" title="Selkeä polku tarjouksesta luovutukseen." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7">
              <span className="font-display font-black text-5xl text-[var(--brand)] leading-none">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-display font-extrabold text-[var(--ink)]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <Workflow className="absolute top-6 right-6 size-5 text-muted-foreground/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABar() {
  return (
    <section className="pb-24">
      <div className="container-px mx-auto">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">
              Onko sinulla hanke tulossa?
            </h3>
            <p className="mt-2 text-white/70">
              Pyydä tarjous tai soita — käymme tarvittaessa paikan päällä.
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

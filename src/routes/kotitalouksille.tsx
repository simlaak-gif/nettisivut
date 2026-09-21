import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  BatteryCharging,
  Sun,
  Wrench,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Wallet,
} from "lucide-react";
import b2cImg from "@/assets/b2c.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/kotitalouksille")({
  head: () => ({
    meta: [
      { title: "Palvelut kotitalouksille — Sähkötyöt, latauspisteet, aurinkopaneelit | KS-Sähkö Oy" },
      {
        name: "description",
        content:
          "Kodin sähkötyöt, remontit, sähköauton latauspisteet ja aurinkopaneelit Keski-Suomessa. Hyödynnä kotitalousvähennys.",
      },
      { property: "og:title", content: "Palvelut kotitalouksille — KS-Sähkö Oy" },
      { property: "og:description", content: "Kodin sähkötyöt turvallisesti ja vaivattomasti." },
      { property: "og:image", content: b2cImg },
    ],
  }),
  component: B2CPage,
});

function B2CPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero />
        <KVHighlight />
        <Services />
        <Promise />
        <CTABar />
      </main>
      <SiteFooter />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative isolate min-h-[78svh] flex items-end overflow-hidden">
      <img src={b2cImg} alt="Koti, sähköauton latauspiste ja aurinkopaneelit" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-px mx-auto relative pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            <Home className="size-3.5" /> B2C · Kotitaloudet
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.05]">
            Sähkötyöt kotiin — turvallisesti ja vaivattomasti.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Pienistä korjauksista koko kodin sähköremonttiin, latauspisteisiin ja aurinkopaneeleihin.
            Hoidamme paperityöt ja hyödynnämme kotitalousvähennyksen puolestasi.
          </p>
        </div>
      </div>
    </section>
  );
}

function KVHighlight() {
  return (
    <section className="-mt-10 relative z-10">
      <div className="container-px mx-auto">
        <div className="rounded-2xl bg-[var(--brand)] text-[var(--ink)] p-7 md:p-9 shadow-[var(--shadow-card)] grid md:grid-cols-[auto_1fr_auto] items-center gap-6">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--ink)] text-[var(--brand)] shrink-0">
            <Wallet className="size-7" strokeWidth={2.4} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-display font-extrabold">Kotitalousvähennys — säästät heti.</h3>
            <p className="mt-1 text-sm md:text-base text-[var(--ink-soft)]">
              Vähennyksen ansiosta kodin sähkötyöt ovat edullisempia kuin uskoisitkaan. Kerromme
              mielellämme, mihin vähennys oikeuttaa juuri sinun työssäsi.
            </p>
          </div>
          <a href="tel:+358503600142" className="btn-dark shrink-0 self-start md:self-auto">
            <Phone className="size-4" /> Kysy lisää
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Wrench, title: "Kodin sähkötyöt", text: "Pistorasiat, kytkimet, valaisinasennukset ja pienet sähköremontit nopeasti." },
    { icon: Home, title: "Sähköremontit", text: "Koko kodin sähköistyksen uusiminen tai osaremontit kylpyhuoneeseen, keittiöön ja saunatiloihin." },
    { icon: BatteryCharging, title: "Latauspisteet", text: "Sähköauton latauspisteen suunnittelu ja asennus kotiin tai pihalle — turvallisesti." },
    { icon: Sun, title: "Aurinkopaneelit", text: "Aurinkosähkö avaimet käteen: mitoitus, asennus, käyttöönotto ja ohjeistus." },
    { icon: ShieldCheck, title: "Sähkötarkastukset", text: "Kuntotarkastukset ja vianetsintä — vastaamme, että koti on turvallinen." },
    { icon: Sparkles, title: "Valaistus", text: "Tunnelmavalaistuksen suunnittelu ja modernit himmenninratkaisut." },
  ];
  return (
    <section className="section-y">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Palvelut kotiin"
          title="Mitä teemme kodin sähkötöissä."
          description="Kaikki kodin sähköasiat yhdeltä luotettavalta paikalliselta ammattilaiselta."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-elev p-7 group">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand-deep)] group-hover:bg-[var(--brand)] transition-colors">
                <Icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-xl font-display font-extrabold text-[var(--ink)]">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const points = [
    "Selkeä hinnoittelu — kerromme heti, mitä työ maksaa.",
    "Hoidamme kotitalousvähennyksen paperit puolestasi.",
    "Siivoamme jälkemme — koti jää siistiksi.",
    "Tavoitettavissa myös iltaisin ja viikonloppuisin.",
  ];
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-px mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <SectionHeading
            eyebrow="Miksi me"
            title="Kodin sähkömies, jolle voi soittaa."
            description="Olemme paikallinen perheyritys. Vastaamme puhelimeen, tulemme sovittuna aikana ja teemme työn kerralla kuntoon."
          />
        </div>
        <ul className="grid gap-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <CheckCircle2 className="size-5 mt-0.5 text-[var(--brand-deep)] shrink-0" />
              <span className="text-[15px] text-[var(--ink-soft)]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTABar() {
  return (
    <section className="pb-24 pt-4">
      <div className="container-px mx-auto">
        <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold">Tarvitsetko sähkömiehen kotiin?</h3>
            <p className="mt-2 text-white/70">Soita tai pyydä tarjous — vastaamme nopeasti.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/yhteystiedot" className="btn-primary">Pyydä tarjous <ArrowRight className="size-4" /></Link>
            <a href="tel:+358503600142" className="btn-ghost"><Phone className="size-4" /> 050 360 0142</a>
          </div>
        </div>
      </div>
    </section>
  );
}

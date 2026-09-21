import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}



export const Route = createFileRoute("/yhteystiedot")({
  head: () => ({
    meta: [
      { title: "Ota yhteyttä — KS-Sähkö Oy | Sähköurakointi Jyväskylä & Laukaa" },
      {
        name: "description",
        content: "Pyydä tarjous KS-Sähkö Oy:ltä. Soita 050 360 0142, lähetä viesti tai täytä yhteydenottolomake. Palvelemme koko Keski-Suomen aluetta.",
      },
      { property: "og:title", content: "Ota yhteyttä — KS-Sähkö Oy" },
      { property: "og:description", content: "Yhteystiedot ja tarjouspyyntö — sähköurakointi Keski-Suomessa." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-36 md:pt-44 pb-12 bg-secondary/40 border-b border-border">
          <div className="container-px mx-auto">
            <SectionHeading
              eyebrow="Ota yhteyttä"
              title="Pyydä tarjous — vastaamme nopeasti."
              description="Kerro hankkeestasi muutamalla rivillä tai soita suoraan. Vastaamme yleensä samana arkipäivänä."
            />
          </div>
        </section>

        <section className="section-y">
          <div className="container-px mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        <MapSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState<"b2b" | "b2c">("b2b");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const params = new URLSearchParams();
    new FormData(form).forEach((val, key) => {
      if (typeof val === "string") params.append(key, val);
    });
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
    } catch (err) {
      console.error("Form submission error:", err);
    }
    // Register the Google Ads conversion once the form reaches its success state.
    if (window.gtag) {
      window.gtag("event", "conversion", { send_to: "AW-18075345752/YEmvCMiS9cscENjG_6pD" });
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 shadow-[var(--shadow-card)] flex flex-col items-center text-center min-h-[400px] justify-center animate-fade-up">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--brand)] text-[var(--ink)]">
          <CheckCircle2 className="size-8" strokeWidth={2.4} />
        </div>
        <h3 className="mt-6 text-2xl font-display font-extrabold text-[var(--ink)]">Kiitos viestistäsi!</h3>
        <p className="mt-2 text-muted-foreground max-w-md">
          Olemme vastaanottaneet tarjouspyyntösi ja palaamme asiaan yleensä saman arkipäivän aikana.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-[var(--brand-deep)] hover:underline">
          Lähetä uusi viesti
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="type" value={type} />
      <p style={{ display: "none" }}>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>
      <div className="grid grid-cols-2 gap-2 p-1 rounded-lg bg-secondary">
        {(["b2b", "b2c"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`py-2.5 rounded-md text-sm font-bold transition-colors ${
              type === t ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            {t === "b2b" ? "Yritys / Rakennusliike" : "Yksityishenkilö"}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Nimi *" name="name" required />
        {type === "b2b" && <Field label="Yritys" name="company" />}
        <Field label="Puhelin *" name="phone" type="tel" required />
        <Field label="Sähköposti *" name="email" type="email" required />
      </div>

      <div className="mt-4">
        <Field label="Työn sijainti (paikkakunta)" name="location" placeholder="Esim. Laukaa" />
      </div>

      <div className="mt-4">
        <label className="text-sm font-semibold text-[var(--ink)]">
          Kerro hankkeesta *
          <textarea
            required
            name="message"
            rows={5}
            placeholder={
              type === "b2b"
                ? "Esim. liikerakennuksen sähköurakka, aikataulu, laajuus…"
                : "Esim. sähköauton latauspisteen asennus omakotitaloon…"
            }
            className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-normal text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--brand-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 transition-all"
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        <Send className="size-4" /> Lähetä tarjouspyyntö
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Tietosi käsitellään luottamuksellisesti ja niitä käytetään vain tarjouksen tekemiseen.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="text-sm font-semibold text-[var(--ink)]">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-normal text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--brand-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 transition-all"
      />
    </label>
  );
}

function ContactInfo() {
  const items = [
    { icon: Phone, title: "Puhelin", primary: "+358 50 360 0142", href: "tel:+358503600142", note: "Vastaamme arkisin 7–18" },
    { icon: Mail, title: "Sähköposti", primary: "info@ks-sahko.fi", href: "mailto:info@ks-sahko.fi", note: "Vastaamme yleensä samana päivänä" },
    { icon: MapPin, title: "Toimisto", primary: "Päivämiehenkuja 19, 41340 Laukaa", note: "Palvelemme koko Keski-Suomen aluetta" },
    { icon: Clock, title: "Aukioloajat", primary: "Ma–Pe 7:00–18:00", note: "Päivystys yrityksille 24/7" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {items.map(({ icon: Icon, title, primary, href, note }) => {
        const content = (
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-[var(--brand)] hover:shadow-md">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand-deep)] shrink-0">
              <Icon className="size-5" strokeWidth={2.4} />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.16em] font-bold text-muted-foreground">{title}</p>
              <p className="mt-1 text-base font-bold text-[var(--ink)]">{primary}</p>
              {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
            </div>
          </div>
        );
        return href ? (
          <a key={title} href={href} className="block">{content}</a>
        ) : (
          <div key={title}>{content}</div>
        );
      })}

      <div className="mt-2 rounded-xl bg-[var(--ink)] text-white p-6">
        <p className="text-xs uppercase tracking-[0.18em] font-bold text-[var(--brand)]">Yritys</p>
        <p className="mt-2 font-bold">KS-Sähkö Oy / Keski-Suomen Sähkötyö Oy</p>
        <p className="mt-1 text-sm text-white/70">Y-tunnus: 3605862-6</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold">
          <span className="size-1.5 rounded-full bg-[var(--brand)]" />
          VastuuGroup Luotettava Kumppani
        </div>
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <section className="pb-24">
      <div className="container-px mx-auto">
        <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
          <div className="relative aspect-[21/9] bg-secondary">
            <iframe
              title="KS-Sähkö Oy sijainti — Laukaa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.4%2C62.3%2C26.0%2C62.5&layer=mapnik&marker=62.4131%2C25.9492"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 backdrop-blur px-4 py-3 shadow-md">
              <p className="text-xs uppercase tracking-[0.16em] font-bold text-[var(--brand-deep)]">Toiminta-alue</p>
              <p className="mt-1 text-sm font-bold text-[var(--ink)]">Jyväskylä · Laukaa · Keski-Suomi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

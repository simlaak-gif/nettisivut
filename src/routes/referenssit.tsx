import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Sun, BatteryCharging, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/referenssit")({
  head: () => ({
    meta: [
      { title: "Referenssit — KS-Sähkö Oy" },
      {
        name: "description",
        content: "Esimerkkejä KS-Sähkön toteuttamista sähköurakoista ja kodin sähkötöistä Keski-Suomen alueella.",
      },
      { property: "og:title", content: "Referenssit — KS-Sähkö Oy" },
      { property: "og:description", content: "Toteutettuja sähköurakoita ja kodin projekteja." },
    ],
  }),
  component: RefPage,
});

const refs = [
  { icon: Building2, tag: "Uudiskohde · Jyväskylä", title: "Liikerakennuksen sähköurakka", text: "Täysi sähköistys uudisrakennukseen, aikataulu pidettiin pääurakoitsijan kanssa sovitusti.", year: "2024" },
  { icon: Wrench, tag: "Saneeraus · Laukaa", title: "Rivitalon sähköjen modernisointi", text: "Vanhojen sähköjen uusiminen ja keskuksien päivitys nykymääräysten mukaisiksi.", year: "2024" },
  { icon: Sun, tag: "Aurinkoenergia · Jyväskylä", title: "10 kW aurinkopaneelijärjestelmä", text: "Omakotitalon avaimet käteen -toimitus, mitoitus ja käyttöönotto.", year: "2024" },
  { icon: BatteryCharging, tag: "Latauspisteet · Muurame", title: "Taloyhtiön latauspisteet", text: "Latauspisteiden suunnittelu ja asennus taloyhtiön autokatokseen.", year: "2023" },
  { icon: Home, tag: "Remontti · Laukaa", title: "Omakotitalon sähköremontti", text: "Keittiön ja kylpyhuoneen sähköistyksen uusiminen osana isompaa remonttia.", year: "2023" },
  { icon: Building2, tag: "Aliurakointi · Keski-Suomi", title: "Aliurakointi rakennusliikkeelle", text: "Joustava aliurakointi useassa työmaakohteessa kumppanin tarpeiden mukaan.", year: "2023" },
];

function RefPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-36 md:pt-44 pb-16 bg-secondary/40 border-b border-border">
          <div className="container-px mx-auto">
            <SectionHeading
              eyebrow="Referenssit"
              title="Toteutettuja töitä Keski-Suomessa."
              description="Pieni läpileikkaus viimeaikaisista hankkeistamme — kotien remonteista isompiin urakoihin."
            />
          </div>
        </section>

        <section className="section-y">
          <div className="container-px mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {refs.map(({ icon: Icon, ...r }) => (
              <article key={r.title} className="card-elev overflow-hidden flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden bg-[var(--ink)]">
                  <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-brand)" }} />
                  <Icon className="absolute inset-0 m-auto size-20 text-[var(--brand)]" strokeWidth={1.4} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]">
                    {r.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 text-xs font-bold text-white/80">{r.year}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-display font-extrabold text-[var(--ink)]">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="container-px mx-auto">
            <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold">Voisimmeko olla teidän seuraava referenssi?</h3>
                <p className="mt-2 text-white/70">Ota yhteyttä ja kerro hankkeesta — vastaamme nopeasti.</p>
              </div>
              <Link to="/yhteystiedot" className="btn-primary shrink-0">Ota yhteyttä <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

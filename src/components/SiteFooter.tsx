import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="container-px mx-auto py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/Logo_k.png"
              alt="KS-Sähkö Oy"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display font-extrabold text-lg">KS-Sähkö Oy</span>
          </div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            Paikallinen ja ammattitaitoinen sähköalan yritys Keski-Suomessa. Hoidamme sähkötyöt
            turvallisesti, laadukkaasti ja sovitussa aikataulussa.
          </p>
          <p className="mt-4 text-xs text-white/40">Y-tunnus: 3605862-6</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            Palvelut
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><Link to="/yrityksille" className="hover:text-[var(--brand)] transition-colors">Sähköurakointi</Link></li>
            <li><Link to="/yrityksille" className="hover:text-[var(--brand)] transition-colors">Aliurakointi</Link></li>
            <li><Link to="/kotitalouksille" className="hover:text-[var(--brand)] transition-colors">Kotitalouksien sähkötyöt</Link></li>
            <li><Link to="/kotitalouksille" className="hover:text-[var(--brand)] transition-colors">Latauspisteet & aurinkopaneelit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            Yhteystiedot
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone className="size-4 mt-0.5 text-[var(--brand)] shrink-0" />
              <a href="tel:+358503600142" className="hover:text-[var(--brand)]">+358 50 360 0142</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="size-4 mt-0.5 text-[var(--brand)] shrink-0" />
              <a href="mailto:info@ks-sahko.fi" className="hover:text-[var(--brand)]">info@ks-sahko.fi</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-[var(--brand)] shrink-0" />
              <span>Päivämiehenkuja 19,<br />41340 Laukaa</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            Toiminta-alue
          </h4>
          <p className="mt-5 text-sm text-white/75 leading-relaxed">
            Palvelemme Jyväskylän, Laukaan ja koko Keski-Suomen alueella —
            rakennusliikkeet, yritykset ja kotitaloudet.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85">
            <span className="size-2 rounded-full bg-[var(--brand)]" />
            VastuuGroup Luotettava Kumppani
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} KS-Sähkö Oy / Keski-Suomen Sähkötyö Oy. Kaikki oikeudet pidätetään.</p>
          <p>Sähkötöitä Keski-Suomessa vuodesta 2020.</p>
        </div>
      </div>
    </footer>
  );
}

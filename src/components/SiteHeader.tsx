import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Zap, Phone, Menu, X, Home } from "lucide-react";

export function SiteHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-px mx-auto h-20 flex items-center justify-between">
        {/* LOGO JA TEKSTI */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/Logo_k.png" alt="KS-Sähkö Oy" className="h-10 w-auto object-contain" />
          <span className="text-xs font-semibold text-black tracking-tight leading-tight hidden sm:inline-block">
            Keski-Suomen Sähkötyö Oy
          </span>
        </Link>

        {/* PÄÄNAVIGAATIO (Desktop) */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className="text-sm font-medium hover:text-[var(--brand-deep)] transition-colors"
          >
            Etusivu
          </Link>

          <Link
            to="/kotitalouksille"
            className="text-sm font-medium hover:text-[var(--brand-deep)] transition-colors"
          >
            Kotitalouksille
          </Link>

          <Link
            to="/yrityksille"
            className="text-sm font-medium hover:text-[var(--brand-deep)] transition-colors"
          >
            Yrityksille
          </Link>

          {/* UUSI HINNASTO -LINKKI */}
          <Link
            to="/hinnasto"
            className="text-sm font-medium hover:text-[var(--brand-deep)] transition-colors"
          >
            Hinnasto
          </Link>

          <Link
            to="/yhteystiedot"
            className="text-sm font-medium hover:text-[var(--brand-deep)] transition-colors"
          >
            Yhteystiedot
          </Link>

          {/* TUOTTEET & PALVELUT - PUDOTUSVALIKKO */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-medium hover:text-[var(--brand-deep)] transition-colors py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Tuotteet & Palvelut
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Pudotusvalikko */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 w-72 bg-card border border-border rounded-xl shadow-xl p-2 animate-in fade-in-50 slide-in-from-top-2">
                <Link
                  to="/latausasemat"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Zap className="size-5 text-[var(--brand-deep)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[var(--ink)]">Latausasemat</div>
                    <div className="text-xs text-muted-foreground">
                      Sähköauton lataus kotiin & yrityksille
                    </div>
                  </div>
                </Link>

                {/*                 <Link
                  to="/palvelut"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Home className="size-5 text-[var(--brand-deep)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[var(--ink)]">Sähkötyöt kotiin</div>
                    <div className="text-xs text-muted-foreground">Sähköasennukset & huollot</div>
                  </div>
                </Link> */}
              </div>
            )}
          </div>
        </nav>

        {/* CTA & PUHELIN */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+358503600142"
            className="flex items-center gap-2 text-sm font-bold text-[var(--ink)] hover:opacity-80"
          >
            <Phone className="size-4 text-[var(--brand-deep)]" /> 050 360 0142
          </a>
          <Link to="/yhteystiedot" className="btn-primary text-xs px-4 py-2.5">
            Pyydä tarjous
          </Link>
        </div>

        {/* MOBIILINAPPI */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Avaa valikko"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* MOBIILIVALIKKO */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border p-6 space-y-4">
          <Link
            to="/"
            className="block text-base font-semibold text-[var(--ink)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Etusivu
          </Link>
          <Link
            to="/hinnasto"
            className="block text-base font-semibold text-[var(--ink)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hinnasto
          </Link>

          <Link
            to="/kotitalouksille"
            className="block text-base font-semibold text-[var(--ink)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kotitalouksille
          </Link>

          <Link
            to="/yrityksille"
            className="block text-base font-semibold text-[var(--ink)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Yrityksille
          </Link>

          <Link
            to="/yhteystiedot"
            className="block text-base font-semibold text-[var(--ink)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Yhteystiedot
          </Link>

          <div className="space-y-2 pl-2 border-l-2 border-[var(--brand)]">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Tuotteet & Erikoispalvelut
            </div>
            <Link
              to="/latausasemat"
              className="flex items-center gap-2 text-sm font-medium text-[var(--ink)] py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Zap className="size-4 text-[var(--brand-deep)]" /> Sähköauton latausasemat
            </Link>
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="tel:+358503600142"
              className="flex items-center justify-center gap-2 text-sm font-bold text-[var(--ink)] py-2 border border-border rounded-xl"
            >
              <Phone className="size-4 text-[var(--brand-deep)]" /> 050 360 0142
            </a>
            <Link
              to="/yhteystiedot"
              className="btn-primary text-center text-sm py-2.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pyydä tarjous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

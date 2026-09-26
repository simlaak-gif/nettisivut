import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, ChevronDown, Menu, X, Car, Wrench, Zap, Sun } from "lucide-react";

export function SiteHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-px mx-auto h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/Logo_k.png"
            alt="KS-Sähkö Oy logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-[var(--ink)] leading-none">
              KS-SÄHKÖ OY
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">
              Keski-Suomen Sähkötyö Oy
            </span>
          </div>
        </Link>

        {/* PÄÄNAVIGAATIO (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Etusivu
          </Link>

          <Link
            to="/yrityksille"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Yrityksille
          </Link>

          <Link
            to="/kotitalouksille"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Kotitalouksille
          </Link>

          <Link
            to="/taloyhtioille"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Taloyhtiöille
          </Link>

          {/* TUOTTEET & PALVELUT - PUDOTUSVALIKKO */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Tuotteet & Palvelut
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* PUDOTUSVALIKON SISÄLTÖ */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link
                  to="/sahkoasennus"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--ink)] hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="p-1.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-md">
                    <Zap className="size-4" />
                  </div>
                  <span>Sähköasennukset & Huollot</span>
                </Link>

                <Link
                  to="/latausasemat"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--ink)] hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="p-1.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-md">
                    <Car className="size-4" />
                  </div>
                  <span>Sähköauton latausasemat</span>
                </Link>

                <Link
                  to="/aurinkopaneelit"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--ink)] hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="p-1.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-md">
                    <Sun className="size-4" />
                  </div>
                  <span>Aurinkopaneelit & Aurinkosähkö</span>
                </Link>

                <Link
                  to="/sahkosaneeraus"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--ink)] hover:bg-secondary transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="p-1.5 bg-[var(--brand)]/20 text-[var(--brand-deep)] rounded-md">
                    <Wrench className="size-4" />
                  </div>
                  <span>Sähkösaneeraus & remontit</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/hinnasto"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Hinnasto
          </Link>

          <Link
            to="/yhteystiedot"
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            Yhteystiedot
          </Link>
        </nav>

        {/* CTA PAINIKE & MOBIILINAPPI */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+358503600142"
            className="hidden 2xl:flex items-center gap-2 btn-primary text-sm py-2 px-4"
          >
            <Phone className="size-4" /> 050 360 0142
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[var(--ink)] hover:bg-secondary transition-colors"
            aria-label="Avaa valikko"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MOBIILIVALIKKO */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-card border-b border-border p-4 space-y-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Etusivu
          </Link>

          <Link
            to="/yrityksille"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Yrityksille
          </Link>

          <Link
            to="/kotitalouksille"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kotitalouksille
          </Link>

          <Link
            to="/taloyhtioille"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Taloyhtiöille
          </Link>

          <div className="pl-3 pr-1 py-2 space-y-1 bg-secondary/50 rounded-lg">
            <span className="block text-xs font-bold uppercase text-muted-foreground px-2 py-1">
              Tuotteet & Palvelut
            </span>
            <Link
              to="/sahkoasennus"
              className="block px-2 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              • Sähköasennukset & Huollot
            </Link>
            <Link
              to="/latausasemat"
              className="block px-2 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              • Sähköauton latausasemat
            </Link>
            <Link
              to="/aurinkopaneelit"
              className="block px-2 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              • Aurinkopaneelit & Aurinkosähkö
            </Link>
            <Link
              to="/sahkosaneeraus"
              className="block px-2 py-1.5 text-sm font-medium text-[var(--ink)] hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              • Sähkösaneeraus & remontit
            </Link>
          </div>

          <Link
            to="/hinnasto"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hinnasto
          </Link>

          <Link
            to="/yhteystiedot"
            className="block px-3 py-2 rounded-lg font-semibold text-[var(--ink)] hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Yhteystiedot
          </Link>

          <a
            href="tel:+358503600142"
            className="btn-primary w-full text-center justify-center mt-2"
          >
            <Phone className="size-4" /> Soita 050 360 0142
          </a>
        </div>
      )}
    </header>
  );
}

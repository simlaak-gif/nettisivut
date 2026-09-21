import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";




const nav = [
  { to: "/", label: "Etusivu" },
  { to: "/yrityksille", label: "Palvelut yrityksille" },
  { to: "/kotitalouksille", label: "Palvelut kotitalouksille" },
  { to: "/referenssit", label: "Referenssit" },
  { to: "/yhteystiedot", label: "Ota yhteyttä" },
] as const;


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)} aria-label="KS-Sähkö Oy — etusivu">
          <img
            src="/Logo_k.png"
            alt="KS-Sähkö Oy"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-[var(--ink)] text-base sm:text-lg tracking-tight">
              KS-Sähkö Oy
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Keski-Suomen Sähkötyö
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3.5 py-2 rounded-md text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-accent transition-colors"
              activeProps={{ className: "text-[var(--ink)] bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+358503600142"
            className="flex items-center gap-2 text-sm font-bold text-[var(--ink)] hover:text-[var(--brand-deep)] transition-colors"
          >
            <Phone className="size-4" strokeWidth={2.5} />
            050 360 0142
          </a>
          <Link to="/yhteystiedot" className="btn-primary text-sm !py-2.5 !px-4">
            Pyydä tarjous
          </Link>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-[var(--ink)]"
          aria-label="Valikko"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-px mx-auto py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-semibold text-[var(--ink-soft)] hover:bg-accent"
                activeProps={{ className: "text-[var(--ink)] bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-border">
              <a href="tel:+358503600142" className="btn-dark text-sm">
                <Phone className="size-4" /> 050 360 0142
              </a>
              <Link to="/yhteystiedot" className="btn-primary text-sm" onClick={() => setOpen(false)}>
                Pyydä tarjous
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

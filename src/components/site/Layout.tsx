import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/prototipia", label: "Prototipia" },
  { to: "/produzione", label: "Produzione" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

/** Sections mark themselves with data-nav="dark" so the navbar adapts. */
function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const check = () => {
      setScrolled(window.scrollY > 24);
      const probe = 40;
      const els = document.querySelectorAll<HTMLElement>("[data-nav]");
      let d = false;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) d = el.dataset.nav === "dark";
      });
      setDark(d);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, [path]);

  const onDark = dark && !open;
  const bar = open
    ? "bg-linen"
    : scrolled
      ? onDark ? "bg-ink/85 backdrop-blur-md border-b border-ink-foreground/10" : "bg-linen/85 backdrop-blur-md border-b border-border"
      : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${bar}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link to="/" aria-label="Sigillo, home">
          <Logo variant={onDark ? "cuoio" : "marrone"} className="h-6 w-auto md:h-7" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}
              className={`text-sm transition-colors ${onDark ? "text-ink-foreground/70 hover:text-tan" : "text-muted-foreground hover:text-foreground"}`}
              activeProps={{ className: onDark ? "!text-tan" : "!text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className={`md:hidden ${onDark ? "text-ink-foreground" : "text-foreground"}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex h-[calc(100svh-4rem)] flex-col gap-2 bg-linen px-6 pt-8 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="display border-b border-border py-4 text-4xl">{n.label}</Link>
          ))}
          <a href="mailto:info@sigillosrl.com" className="mt-auto mb-10 text-muted-foreground">info@sigillosrl.com</a>
        </nav>
      )}
    </header>
  );
}

export function CtaBand({ title = "Parliamo del tuo progetto." }: { title?: string }) {
  return (
    <section className="bg-leather text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-10 md:py-32">
        <div>
          <Logo variant="lino" className="mb-10 h-6 w-auto opacity-80" />
          <h2 className="display max-w-2xl text-5xl md:text-7xl">{title}</h2>
        </div>
        <Link to="/contatti" className="group inline-flex items-center gap-3 rounded-sm bg-linen px-7 py-4 text-sm font-medium text-ink transition hover:bg-ink hover:text-linen">
          Parliamo del tuo progetto <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-nav="dark" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo variant="cuoio" className="h-7 w-auto" />
          <p className="mt-6 max-w-sm text-sm text-ink-foreground/60">
            Manifattura di cinture e piccola pelletteria per il lusso e la moda. Scandicci, Firenze · dal 1988.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4 text-tan">Pagine</p>
          <ul className="space-y-2 text-ink-foreground/70">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-tan">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4 text-tan">Contatti</p>
          <p className="text-ink-foreground/70">Sigillo Srl<br />Scandicci (FI), Italia</p>
          <a href="mailto:info@sigillosrl.com" className="mt-2 block text-ink-foreground hover:text-tan">info@sigillosrl.com</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl justify-between border-t border-ink-foreground/10 px-6 py-6 text-xs text-ink-foreground/40 md:px-10">
        <span>© {new Date().getFullYear()} Sigillo Srl</span><span>Made in Tuscany</span>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <p className="eyebrow reveal is-visible text-leather">{eyebrow}</p>
      <h1 className="display mt-6 max-w-5xl text-5xl sm:text-6xl md:text-8xl">{title}</h1>
      {intro && <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>}
    </section>
  );
}

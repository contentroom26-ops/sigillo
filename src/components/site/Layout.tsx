import { Link, useRouterState } from "@tanstack/react-router";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, langFromPath, localePath, stripLang, useT, type RoutePath } from "@/i18n";
import { Logo } from "./Logo";
import { Cta } from "./Cta";
import { Hl } from "./Hl";
import { LocLink } from "./LocLink";

const NAV: readonly { to: RoutePath; key: "prototipia" | "produzione" | "chiSiamo" | "contatti" }[] = [
  { to: "/prototipia", key: "prototipia" },
  { to: "/produzione", key: "produzione" },
  { to: "/chi-siamo", key: "chiSiamo" },
  { to: "/contatti", key: "contatti" },
];

/**
 * Ogni sezione dichiara il proprio sfondo con data-nav="light" | "dark".
 * La navbar guarda quale sezione c'è davvero sotto di lei e inverte i colori.
 */
function useNavTone(path: string) {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      setScrolled(window.scrollY > 24);
      const x = window.innerWidth / 2;
      const stack = document.elementsFromPoint(x, 36);
      let isDark = false;
      for (const el of stack) {
        if (el.closest("header")) continue;
        const section = el.closest<HTMLElement>("[data-nav]");
        if (section) { isDark = section.dataset["nav"] === "dark"; break; }
      }
      setDark(isDark);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    raf = requestAnimationFrame(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);

  return { dark, scrolled };
}

/** Selettore lingua IT / EN / FR: porta alla stessa pagina nell'altra lingua. */
function LangSwitch({ onDark }: { onDark: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const t = useT();
  const current = langFromPath(path);
  const base = stripLang(path);

  return (
    <div role="group" aria-label={t.nav.langAria} className="flex items-center gap-1.5 text-xs font-medium tracking-[0.18em]">
      {LANGS.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span aria-hidden="true" className={onDark ? "text-ink-foreground/25" : "text-ink/25"}>/</span>}
          <Link
            to={localePath(l, base) as never}
            hrefLang={l}
            lang={l}
            aria-current={l === current ? "true" : undefined}
            className={`transition-colors ${
              l === current
                ? onDark ? "text-tan" : "text-ink"
                : onDark ? "text-ink-foreground/55 hover:text-tan" : "text-ink/50 hover:text-ink"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { dark, scrolled } = useNavTone(path);
  const t = useT();

  useEffect(() => setOpen(false), [path]);

  const onDark = dark && !open;
  const bar = open
    ? "bg-linen"
    : scrolled
      ? onDark ? "bg-ink/90 backdrop-blur-md border-b border-ink-foreground/10" : "bg-linen/90 backdrop-blur-md border-b border-border"
      : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${bar}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <LocLink to="/" aria-label={t.nav.homeAria}>
          <Logo variant={onDark ? "cuoio" : "marrone"} className="h-8 w-auto md:h-10" />
        </LocLink>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.filter((n) => n.to !== "/contatti").map((n) => (
            <LocLink key={n.to} to={n.to}
              className={`text-sm font-medium transition-colors ${onDark ? "text-ink-foreground/75 hover:text-tan" : "text-ink/70 hover:text-ink"}`}
              activeProps={{ className: onDark ? "!text-tan" : "!text-ink" }}>
              {t.nav[n.key]}
            </LocLink>
          ))}
          <LangSwitch onDark={onDark} />
          <Cta to="/contatti" size="sm" tone={onDark ? "dark" : "light"}>{t.nav.cta}</Cta>
        </nav>
        <div className="flex items-center gap-5 md:hidden">
          <LangSwitch onDark={onDark} />
          <button className={onDark ? "text-ink-foreground" : "text-ink"} onClick={() => setOpen((o) => !o)} aria-label={t.nav.menuAria}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex h-[calc(100svh-4rem)] flex-col gap-2 bg-linen px-6 pt-8 md:hidden">
          {NAV.map((n) => (
            <LocLink key={n.to} to={n.to} className="display border-b border-border py-4 text-4xl">{t.nav[n.key]}</LocLink>
          ))}
          <a href="mailto:info@sigillosrl.com" className="mt-auto mb-10 text-muted-foreground">info@sigillosrl.com</a>
        </nav>
      )}
    </header>
  );
}

/** Pulsante fisso su mobile: resta visibile finché non si arriva al form o al footer. */
function MobileCta() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const t = useT();
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-hide-cta]");
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setHidden(visible.size > 0);
    });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  if (stripLang(path) === "/contatti") return null;
  return (
    <div className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-6 transition duration-300 md:hidden ${show && !hidden ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      <Cta to="/contatti" tone="light">{t.mobileCta}</Cta>
    </div>
  );
}

export function CtaBand({ title }: { title?: ReactNode }) {
  const t = useT();
  return (
    <section data-nav="dark" data-hide-cta className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-10 md:py-32">
        <div>
          <Logo variant="cuoio" className="mb-10 h-10 w-auto md:h-12" />
          <h2 className="display max-w-2xl text-5xl md:text-7xl">
            {title ?? <Hl p={t.ctaBand.title} />}
          </h2>
          <p className="mt-6 max-w-md text-ink-foreground/60">{t.ctaBand.text}</p>
        </div>
        <Cta to="/contatti" tone="dark">{t.ctaBand.button}</Cta>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  const f = t.footer;
  return (
    <footer data-nav="dark" data-hide-cta className="border-t border-ink-foreground/10 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo variant="cuoio" className="h-10 w-auto md:h-12" />
          <p className="mt-6 max-w-sm text-sm text-ink-foreground/60">{f.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4 text-tan">{f.pages}</p>
          <ul className="space-y-2 text-ink-foreground/70">
            {NAV.map((n) => <li key={n.to}><LocLink to={n.to} className="hover:text-tan">{t.nav[n.key]}</LocLink></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4 text-tan">{f.contacts}</p>
          <address className="not-italic text-ink-foreground/70">
            Sigillo Srl<br />
            {f.address[0]}<br />
            {f.address[1]}<br />
            {f.vat} 04536710488
          </address>
          <ul className="mt-3 space-y-1 text-ink-foreground/70">
            <li>{f.tel} <a href="tel:+39055721175" className="text-ink-foreground hover:text-tan">055 721175</a></li>
            <li>{f.cell} <a href="tel:+393475175078" className="text-ink-foreground hover:text-tan">+39 347 517 5078</a></li>
          </ul>
          <a href="mailto:info@sigillosrl.com" className="mt-3 block text-ink-foreground hover:text-tan">info@sigillosrl.com</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-ink-foreground/10 px-6 py-6 text-xs text-ink-foreground/40 md:px-10">
        <span>© {new Date().getFullYear()} Sigillo Srl · {f.vat} 04536710488</span>
        <LocLink to="/privacy" className="transition-colors hover:text-ink-foreground/70">{f.privacy}</LocLink>
        <span>{f.made}</span>
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
      <MobileCta />
    </>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section data-nav="light" className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <p className="eyebrow eyebrow-line reveal is-visible text-leather">{eyebrow}</p>
      <h1 className="display mt-6 max-w-5xl text-5xl sm:text-6xl md:text-8xl">{title}</h1>
      {intro && <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>}
    </section>
  );
}

/** Intestazione delle pagine interne: foto di sfondo con overlay scuro (i colori si gestiscono nella foto). */
export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: ReactNode; intro?: string; image: string; alt: string }) {
  return (
    <section data-nav="dark" className="relative isolate flex min-h-[64svh] items-end overflow-hidden bg-ink text-ink-foreground md:min-h-[72svh]">
      <img src={image} alt={alt} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
        <p className="eyebrow eyebrow-line reveal is-visible text-tan [text-shadow:0_1px_10px_rgb(28_24_20/0.9)]">{eyebrow}</p>
        <h1 className="display reveal is-visible mt-6 max-w-5xl text-5xl sm:text-6xl md:text-8xl">{title}</h1>
        {intro && <p className="mt-8 max-w-2xl text-lg font-medium text-ink-foreground [text-shadow:0_1px_14px_rgb(28_24_20/0.85)] md:text-xl">{intro}</p>}
      </div>
    </section>
  );
}

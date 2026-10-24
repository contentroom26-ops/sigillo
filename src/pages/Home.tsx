import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Layout, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { Hl } from "@/components/site/Hl";
import { LocLink } from "@/components/site/LocLink";
import { useT } from "@/i18n";
import hero from "@/assets/hero-macchina.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";
import classica from "@/assets/cintura-classica.jpg";
import elegante from "@/assets/cintura-elegante.jpg";
import intrecciata from "@/assets/cintura-intrecciata.jpg";
import casual from "@/assets/cintura-casual.jpg";
import rossa from "@/assets/cintura-rossa.jpg";
import design from "@/assets/cintura-design.jpg";

// Struttura (link, foto) qui; i testi sono nel dizionario, nello stesso ordine.
const serviceLinks = [
  { to: "/prototipia" },
  { to: "/produzione" },
  { to: "/prototipia", hash: "materiali" },
] as const;

const modelPhotos = [classica, elegante, intrecciata, casual, rossa, design];

/** Numero che sale da 0 al valore finale quando entra in vista. */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function HomePage() {
  const t = useT().home;
  const ticker = t.ticker;
  const statValues = [<Counter key="a" to={40} />, <Counter key="b" to={30} suffix="+" />, t.globalWord];

  return (
    <Layout>
      {/* 1 · Hero + numeri — scuro, con foto di sfondo e overlay */}
      <section data-nav="dark" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt={t.hero.alt} width={2000} height={1333} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
          <Reveal><p className="eyebrow eyebrow-line text-tan [text-shadow:0_1px_10px_rgb(28_24_20/0.9)]">{t.hero.eyebrow}</p></Reveal>
          <Reveal delay={100}>
            <h1 className="display mt-6 text-[clamp(3.2rem,10vw,9.5rem)]">{t.hero.title[0]}<br />{t.hero.title[1]}<span className="text-tan">{t.hero.title[2]}</span></h1>
          </Reveal>
          <Reveal delay={200} className="mt-10 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <p className="max-w-xl text-lg font-medium text-ink-foreground [text-shadow:0_1px_14px_rgb(28_24_20/0.85)] md:text-xl">
              {t.hero.lead}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta to="/contatti" tone="dark">{t.hero.cta1}</Cta>
              <Cta to="/produzione" tone="dark" variant="outline">{t.hero.cta2}</Cta>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:grid-cols-3 md:px-10">
          {t.stats.map(([l, d], i) => (
            <Reveal key={l} delay={300 + i * 120} className="border-t border-ink-foreground/25 py-6 sm:pr-8">
              <p className="display text-5xl md:text-7xl">{statValues[i]}</p>
              <p className="eyebrow mt-3 text-tan">{l}</p>
              <p className="mt-1 text-sm text-ink-foreground/65">{d}</p>
            </Reveal>
          ))}
        </div>

        <div className="overflow-hidden border-t border-ink-foreground/15 bg-ink/60 py-5 backdrop-blur-sm" aria-hidden="true">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((w, i) => (
              <span key={i} className="eyebrow flex items-center gap-8 pr-8 text-ink-foreground/75">
                {w}<span className="h-1 w-1 rounded-full bg-tan" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Storia — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
          <Reveal><img src={lab} alt={t.story.alt} loading="lazy" width={1408} height={1008} className="aspect-[4/5] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow eyebrow-line text-leather">{t.story.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.story.title} className="text-leather" /></h2>
            <p className="mt-8 text-lg text-muted-foreground">{t.story.text}</p>
            <p className="mt-6 border-l-2 border-ink pl-5 text-foreground">{t.story.quote}</p>
            <div className="mt-10"><Cta to="/chi-siamo" variant="outline">{t.story.cta}</Cta></div>
          </Reveal>
        </div>
      </section>

      {/* 4 · Servizi — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-tan">{t.services.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.services.title} /></h2>
          </Reveal>
          <div className="mt-16 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {t.services.items.map(([title, text], i) => {
              const link = serviceLinks[i]!;
              return (
                <Reveal key={title} delay={i * 80}>
                  <LocLink to={link.to} {...("hash" in link ? { hash: link.hash } : {})} className="group grid gap-4 py-10 transition-colors hover:bg-ink-foreground/[0.04] md:grid-cols-12 md:items-center md:px-4">
                    <h3 className="display text-3xl transition-colors group-hover:text-tan md:col-span-5 md:text-5xl">{title}</h3>
                    <p className="text-ink-foreground/65 md:col-span-6">{text}</p>
                    <span className="hidden h-12 w-12 items-center justify-center justify-self-end rounded-full border border-ink-foreground/40 text-ink-foreground transition group-hover:border-tan group-hover:bg-tan group-hover:text-ink md:col-span-1 md:flex">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </LocLink>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="display text-2xl md:text-3xl">{t.services.bottom}</p>
            <Cta to="/contatti" tone="dark">{t.services.cta}</Cta>
          </Reveal>
        </div>
      </section>

      {/* 5 · Tipologie di modelli — chiaro */}
      <section data-nav="light">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow eyebrow-line text-leather">{t.models.eyebrow}</p>
              <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.models.title} className="text-leather" /></h2>
            </div>
            <p className="max-w-md text-muted-foreground">{t.models.text}</p>
          </Reveal>
          <div className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {t.models.items.map(([name, alt], i) => (
              <Reveal key={name} delay={(i % 3) * 100} className="min-w-[72%] snap-start sm:min-w-[45%] md:min-w-0">
                <figure className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img src={modelPhotos[i]} alt={alt} loading="lazy" width={1200} height={1092} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between border-b border-border pb-3">
                    <span className="display text-2xl">{name}</span>
                    <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="display text-2xl md:text-3xl">{t.models.bottom}</p>
            <Cta to="/contatti">{t.models.cta}</Cta>
          </Reveal>
        </div>
      </section>

      {/* 6 · Modalità — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow eyebrow-line text-tan">{t.modes.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.modes.title} /></h2>
            <p className="mt-8 text-ink-foreground/60">{t.modes.text}</p>
            <img src={materials} alt={t.modes.alt} loading="lazy" width={1200} height={1200} className="mt-12 hidden aspect-square w-3/4 rounded-sm object-cover md:block" />
          </Reveal>
          <div className="md:col-span-7">
            {t.modes.items.map(([name, headline], i) => (
              <Reveal key={name} delay={i * 100} className="border-t border-ink-foreground/15 py-10">
                <p className="eyebrow text-tan">{name}</p>
                <p className="display mt-4 text-3xl md:text-5xl">{headline}</p>
              </Reveal>
            ))}
            <Reveal className="border-t border-ink-foreground/15 pt-10"><Cta to="/produzione" tone="dark">{t.modes.cta}</Cta></Reveal>
          </div>
        </div>
      </section>

      {/* 7 · FAQ — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-4">
            <p className="eyebrow eyebrow-line text-leather">{t.faq.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.faq.title} className="text-leather" /></h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {t.faq.items.map(([q, a]) => (
                <details key={q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium md:text-2xl [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink transition duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-ink-foreground">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 · Contatti — scuro, come nelle altre pagine */}
      <CtaBand />
    </Layout>
  );
}

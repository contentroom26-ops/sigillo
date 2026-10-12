import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Layout, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import hero from "@/assets/hero-macchina.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";
import classica from "@/assets/cintura-classica.jpg";
import elegante from "@/assets/cintura-elegante.jpg";
import intrecciata from "@/assets/cintura-intrecciata.jpg";
import casual from "@/assets/cintura-casual.jpg";
import bufalo from "@/assets/cintura-bufalo.jpg";
import rossa from "@/assets/cintura-rossa.jpg";
import design from "@/assets/cintura-design.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sigillo — Dalla pelle al prodotto finito" },
      { name: "description", content: "Manifattura toscana di cinture in pelle per brand del lusso e della moda. Private label, conto terzi, piccole serie. Scandicci, dal 1988." },
      { property: "og:title", content: "Sigillo — Dalla pelle al prodotto finito" },
      { property: "og:description", content: "Cinture e piccola pelletteria per le maison. Scandicci, Firenze · dal 1988." },
    ],
  }),
  component: Home,
});

const services = [
  { t: "Prototipia", d: "Dal brief al campione approvato. Sviluppiamo cartamodelli, scegliamo pellami e accessori, costruiamo il prototipo fino alla versione definitiva.", to: "/prototipia" },
  { t: "Produzione", d: "Private label, conto terzi o piccole serie. Una filiera interna che garantisce costanza, tempi chiari e controllo su ogni pezzo.", to: "/produzione" },
  { t: "Materiali", d: "Accesso diretto alle concerie e ai fornitori di accessori del distretto toscano. Selezioniamo con te pellami, finiture e fibbie.", to: "/prototipia", hash: "materiali" },
] as const;

const models = [
  { src: classica, t: "Classica", alt: "Cintura classica in cuoio con fibbia nichel" },
  { src: elegante, t: "Elegante", alt: "Cintura elegante in pelle marrone liscia" },
  { src: intrecciata, t: "Intrecciata", alt: "Cintura intrecciata a mano in pelle marrone" },
  { src: casual, t: "Casual", alt: "Cintura casual in pelle blu" },
  { src: rossa, t: "Donna", alt: "Cintura da donna in pelle rossa con fibbia argento" },
  { src: design, t: "Di design", alt: "Cintura alta in pelle stampata coccodrillo" },
] as const;

const modes = [
  { t: "Private Label", h: "Hai un brand, ti costruiamo il prodotto." },
  { t: "Conto Terzi", h: "Hai il design, noi produciamo." },
  { t: "Piccole Serie", h: "Hai un'idea, partiamo da lì." },
];

const faqs = [
  ["Qual è il quantitativo minimo?", "Dipende dalla modalità di lavoro: le piccole serie partono da 80–100 pezzi, il private label da 100 pezzi per modello, il conto terzi va dai piccoli lotti alle produzioni continuative."],
  ["Posso partire solo da un'idea o da un disegno?", "Sì. Si può partire da un disegno, un campione, una foto o un'idea: la prototipia segue quattro fasi — brief, materiali, campione, approvazione."],
  ["Lavorate in riservatezza?", "Sempre. Nessun nome e nessun logo sui nostri canali, e accordi di riservatezza su ogni progetto."],
  ["Che pellami utilizzate?", "La nostra produzione è quasi interamente in pelle a concia vegetale, scelta con te tra le concerie del distretto toscano."],
  ["Come iniziamo a lavorare insieme?", "Scrivici dalla pagina contatti: raccontaci prodotto, volumi e tempi. Rispondiamo entro due giorni lavorativi."],
] as const;

const ticker = ["Private Label", "Conto Terzi", "Piccole Serie", "Prototipia", "Concia vegetale", "Made in Italy", "Riservatezza assoluta", "Scandicci dal 1988"];

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

function Home() {
  return (
    <Layout>
      {/* 1 · Hero + numeri — scuro, con foto di sfondo e overlay */}
      <section data-nav="dark" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Artigiano che guida un pezzo di pelle sotto una macchina da cucire industriale" width={2000} height={1333} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
          <Reveal><p className="eyebrow eyebrow-line text-tan [text-shadow:0_1px_10px_rgb(28_24_20/0.9)]">Scandicci, Firenze · dal 1988</p></Reveal>
          <Reveal delay={100}>
            <h1 className="display mt-6 text-[clamp(3.2rem,10vw,9.5rem)]">Dalla pelle<br />al prodotto <span className="text-tan">finito.</span></h1>
          </Reveal>
          <Reveal delay={200} className="mt-10 flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <p className="max-w-xl text-lg font-medium text-ink-foreground [text-shadow:0_1px_14px_rgb(28_24_20/0.85)] md:text-xl">
              Manifattura di cinture e piccola pelletteria per brand del lusso e della moda. Prototipi, produzione e materiali — sotto un unico tetto, in totale riservatezza.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta to="/contatti" tone="dark">Parliamo del tuo progetto</Cta>
              <Cta to="/produzione" tone="dark" variant="outline">Scopri come lavoriamo</Cta>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:grid-cols-3 md:px-10">
          {[
            [<Counter key="a" to={40} />, "anni di manifattura", "Dal 1988 nel distretto di Scandicci."],
            [<Counter key="b" to={30} suffix="+" />, "maison servite", "Brand del lusso e della moda, in riservatezza."],
            ["Globale", "presenza", "Europa, USA, Australia."],
          ].map(([v, l, d], i) => (
            <Reveal key={String(l)} delay={300 + i * 120} className="border-t border-ink-foreground/25 py-6 sm:pr-8">
              <p className="display text-5xl md:text-7xl">{v}</p>
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
          <Reveal><img src={lab} alt="Il laboratorio Sigillo a Scandicci" loading="lazy" width={1408} height={1008} className="aspect-[4/5] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow eyebrow-line text-leather">La nostra storia</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Quasi quarant'anni a costruire il prodotto <span className="text-leather">degli altri.</span></h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Sigillo nasce nel 1988 a Scandicci, nel cuore della pelletteria fiorentina. Da allora realizziamo cinture e piccola pelletteria per maison e marchi internazionali — con lo stesso metodo: ascolto, precisione, consegna.
            </p>
            <p className="mt-6 border-l-2 border-ink pl-5 text-foreground">
              Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.
            </p>
            <div className="mt-10"><Cta to="/chi-siamo" variant="outline">Chi siamo</Cta></div>
          </Reveal>
        </div>
      </section>

      {/* 4 · Servizi — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-tan">Servizi</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Tre competenze, <span className="text-tan">una filiera.</span></h2>
          </Reveal>
          <div className="mt-16 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <Link to={s.to} {...("hash" in s ? { hash: s.hash } : {})} className="group grid gap-4 py-10 transition-colors hover:bg-ink-foreground/[0.04] md:grid-cols-12 md:items-center md:px-4">
                  <h3 className="display text-3xl transition-colors group-hover:text-tan md:col-span-5 md:text-5xl">{s.t}</h3>
                  <p className="text-ink-foreground/65 md:col-span-6">{s.d}</p>
                  <span className="hidden h-12 w-12 items-center justify-center justify-self-end rounded-full border border-ink-foreground/40 text-ink-foreground transition group-hover:border-tan group-hover:bg-tan group-hover:text-ink md:col-span-1 md:flex">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="display text-2xl md:text-3xl">Non sai da dove iniziare? Parliamone insieme.</p>
            <Cta to="/contatti" tone="dark">Parliamo</Cta>
          </Reveal>
        </div>
      </section>

      {/* 5 · Tipologie di modelli — chiaro */}
      <section data-nav="light">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow eyebrow-line text-leather">Tipologie di modelli</p>
              <h2 className="display mt-6 text-4xl md:text-6xl">Cinture, <span className="text-leather">in ogni forma.</span></h2>
            </div>
            <p className="max-w-md text-muted-foreground">Alcuni modelli del nostro campionario in showroom: il punto di partenza per costruire il prodotto giusto per il tuo brand.</p>
          </Reveal>
          <div className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {models.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 100} className="min-w-[72%] snap-start sm:min-w-[45%] md:min-w-0">
                <figure className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img src={c.src} alt={c.alt} loading="lazy" width={1200} height={1092} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between border-b border-border pb-3">
                    <span className="display text-2xl">{c.t}</span>
                    <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="display text-2xl md:text-3xl">Hai un modello in mente? Partiamo dal tuo.</p>
            <Cta to="/contatti">Parliamo del tuo modello</Cta>
          </Reveal>
        </div>
      </section>

      {/* 6 · Modalità — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow eyebrow-line text-tan">Modalità di lavoro</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Parti da <span className="text-tan">dove sei.</span></h2>
            <p className="mt-8 text-ink-foreground/60">Che tu abbia un marchio affermato, un disegno pronto o solo un'idea, troviamo il formato giusto. Piccole serie da 80–100 pezzi.</p>
            <img src={materials} alt="Campioni di pellame e fibbie in ottone" loading="lazy" width={1200} height={1200} className="mt-12 hidden aspect-square w-3/4 rounded-sm object-cover md:block" />
          </Reveal>
          <div className="md:col-span-7">
            {modes.map((m, i) => (
              <Reveal key={m.t} delay={i * 100} className="border-t border-ink-foreground/15 py-10">
                <p className="eyebrow text-tan">{m.t}</p>
                <p className="display mt-4 text-3xl md:text-5xl">{m.h}</p>
              </Reveal>
            ))}
            <Reveal className="border-t border-ink-foreground/15 pt-10"><Cta to="/produzione" tone="dark">Scopri la produzione</Cta></Reveal>
          </div>
        </div>
      </section>

      {/* 7 · FAQ — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-4">
            <p className="eyebrow eyebrow-line text-leather">FAQ</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Domande <span className="text-leather">frequenti.</span></h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map(([q, a]) => (
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

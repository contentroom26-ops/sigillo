import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";

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
  { n: "01", t: "Prototipia", d: "Dal brief al campione approvato. Sviluppiamo cartamodelli, scegliamo pellami e accessori, costruiamo il prototipo fino alla versione definitiva.", to: "/prototipia" },
  { n: "02", t: "Produzione", d: "Private label, conto terzi o piccole serie. Una filiera interna che garantisce costanza, tempi chiari e controllo su ogni pezzo.", to: "/produzione" },
  { n: "03", t: "Materiali", d: "Accesso diretto alle concerie e ai fornitori di accessori del distretto toscano. Selezioniamo con te pellami, finiture e fibbie.", to: "/chi-siamo" },
] as const;

const modes = [
  { t: "Private Label", h: "Hai un brand, ti costruiamo il prodotto." },
  { t: "Conto Terzi", h: "Hai il design, noi produciamo." },
  { t: "Piccole Serie", h: "Hai un’idea, partiamo da lì." },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-44">
        <Reveal><p className="eyebrow text-leather">Scandicci, Firenze · dal 1988</p></Reveal>
        <Reveal delay={100}>
          <h1 className="display mt-6 text-[clamp(3.2rem,10vw,9.5rem)]">Dalla pelle<br />al prodotto <span className="text-leather">finito.</span></h1>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Manifattura di cinture e piccola pelletteria per brand del lusso e della moda. Prototipi, produzione e materiali — sotto un unico tetto, in totale riservatezza.
          </p>
          <Link to="/contatti" className="group inline-flex w-fit items-center gap-3 rounded-sm bg-ink px-7 py-4 text-sm font-medium text-ink-foreground transition hover:bg-leather">
            Parliamo del tuo progetto <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
      <Reveal className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <img src={hero} alt="Artigiano che cuce a mano una cintura in pelle" width={1600} height={1072} className="aspect-[16/9] w-full rounded-sm object-cover md:aspect-[21/9]" />
      </Reveal>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 py-20 sm:grid-cols-3 md:px-10 md:py-28">
        {[
          ["40", "anni di manifattura", "Dal 1988 nel distretto di Scandicci."],
          ["30+", "maison servite", "Brand del lusso e della moda, in riservatezza."],
          ["Globale", "presenza", "Europa, USA, Australia."],
        ].map(([v, l, s], i) => (
          <Reveal key={l} delay={i * 120} className="border-t border-border py-8 sm:pr-8">
            <p className="display text-6xl md:text-7xl">{v}</p>
            <p className="eyebrow mt-4 text-leather">{l}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s}</p>
          </Reveal>
        ))}
      </section>

      {/* Storia */}
      <section className="bg-linen-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
          <Reveal><img src={lab} alt="Il laboratorio Sigillo a Scandicci" loading="lazy" width={1408} height={1008} className="aspect-[4/5] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-leather">La nostra storia</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Quasi quarant’anni a costruire il prodotto degli altri.</h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Sigillo nasce nel 1988 a Scandicci, nel cuore della pelletteria fiorentina. Da allora realizziamo cinture e piccola pelletteria per maison e marchi internazionali — con lo stesso metodo: ascolto, precisione, consegna.
            </p>
            <p className="mt-6 border-l-2 border-leather pl-5 text-foreground">
              Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.
            </p>
            <Link to="/chi-siamo" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-leather hover:text-foreground">Chi siamo <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Servizi */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow text-leather">Servizi</p><h2 className="display mt-6 text-4xl md:text-6xl">Tre competenze, una filiera.</h2></div>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <Link to={s.to} className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
                <span className="text-sm text-muted-foreground md:col-span-1">{s.n}</span>
                <h3 className="display text-3xl transition group-hover:text-leather md:col-span-4 md:text-5xl">{s.t}</h3>
                <p className="text-muted-foreground md:col-span-6">{s.d}</p>
                <ArrowUpRight className="hidden h-6 w-6 justify-self-end text-leather transition group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modalità */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-tan">Modalità di lavoro</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Parti da dove sei.</h2>
            <p className="mt-8 text-ink-foreground/60">Che tu abbia un marchio affermato, un disegno pronto o solo un’idea, troviamo il formato giusto. Piccole serie da 80–100 pezzi.</p>
            <img src={materials} alt="Campioni di pellame e fibbie in ottone" loading="lazy" width={1200} height={1200} className="mt-12 hidden aspect-square w-3/4 rounded-sm object-cover md:block" />
          </Reveal>
          <div className="md:col-span-7">
            {modes.map((m, i) => (
              <Reveal key={m.t} delay={i * 100} className="border-t border-ink-foreground/15 py-10">
                <p className="eyebrow text-tan">{m.t}</p>
                <p className="display mt-4 text-3xl md:text-5xl">{m.h}</p>
              </Reveal>
            ))}
            <Reveal><Link to="/produzione" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tan hover:text-ink-foreground">Scopri la produzione <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <Reveal><h2 className="display text-[clamp(4rem,14vw,12rem)]">Parliamo.</h2></Reveal>
        <Reveal delay={120} className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          <p className="text-lg text-muted-foreground md:col-span-2">Raccontaci il tuo progetto: prodotto, volumi, tempi. Rispondiamo entro due giorni lavorativi, con riservatezza.</p>
          <div className="flex flex-col gap-4">
            <a href="mailto:info@sigillosrl.com" className="text-xl font-medium hover:text-leather">info@sigillosrl.com</a>
            <Link to="/contatti" className="group inline-flex w-fit items-center gap-3 rounded-sm bg-leather px-7 py-4 text-sm font-medium text-primary-foreground transition hover:bg-ink">
              Parliamo del tuo progetto <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}

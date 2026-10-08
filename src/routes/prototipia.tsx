import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import prototype from "@/assets/prototype.jpg";
import lab from "@/assets/lab.jpg";

export const Route = createFileRoute("/prototipia")({
  head: () => ({
    meta: [
      { title: "Prototipia — Sigillo, cinture in pelle" },
      { name: "description", content: "Dal brief al campione approvato in quattro fasi: brief, materiali, campione, approvazione." },
      { property: "og:title", content: "Prototipia — Sigillo" },
      { property: "og:description", content: "Brief, materiali, campione, approvazione. Il metodo Sigillo." },
    ],
  }),
  component: Page,
});

const steps = [
  ["Brief", "Partiamo dal tuo riferimento: un disegno, un campione, una foto o un’idea. Definiamo insieme misure, uso, fascia di prezzo e tempi."],
  ["Materiali", "Selezioniamo pellami, fodere, fili e accessori dalle concerie e dai fornitori del distretto. Ricevi le cartelle colore e le opzioni di finitura."],
  ["Campione", "Sviluppiamo il cartamodello e realizziamo il primo prototipo nel nostro laboratorio. Ogni dettaglio — costa, bordo, cucitura — è documentato."],
  ["Approvazione", "Rivediamo il campione con te, correggiamo e approviamo la versione definitiva, con scheda tecnica pronta per la produzione."],
];

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Prototipia" title={<>Dall’idea al campione <span className="text-leather">approvato.</span></>}
        intro="Un processo in quattro fasi, chiaro dall’inizio. Sai sempre a che punto siamo e cosa serve per andare avanti." />
      <Reveal className="mx-auto max-w-7xl px-6 md:px-10">
        <img src={prototype} alt="Cartamodelli e prototipo di cintura" width={1408} height={1008} className="aspect-[16/9] w-full rounded-sm object-cover md:aspect-[21/9]" />
      </Reveal>
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-px md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} className="border-t-2 border-leather pt-8 md:pr-8">
              <p className="display text-6xl text-leather/30">0{i + 1}</p>
              <h3 className="display mt-6 text-3xl">{t}</h3>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal><img src={lab} alt="Laboratorio di prototipia" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-tan">Il laboratorio</p>
            <h2 className="display mt-6 text-4xl md:text-5xl">Il prototipo nasce dove nascerà la produzione.</h2>
            <p className="mt-8 text-ink-foreground/60">Stesse mani, stesse macchine, stessi standard. Così il campione approvato è già il prodotto che riceverai in serie — senza sorprese.</p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
}

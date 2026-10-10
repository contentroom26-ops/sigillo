import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import prototype from "@/assets/prototype.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";

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

const materialsList = [
  ["Pellami", "Dalle concerie del distretto toscano, con cartelle colore e opzioni di finitura. La nostra produzione è quasi interamente in pelle a concia vegetale."],
  ["Accessori", "Fibbie, passanti e minuteria dai fornitori di accessori del distretto, scelti insieme a te in base al modello."],
  ["Fodere e fili", "Fodere, fili e rifiniture abbinati al pellame, per un prodotto coerente in ogni dettaglio."],
];

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Prototipia" title={<>Dall’idea al campione <span className="text-leather">approvato.</span></>}
        intro="Un processo in quattro fasi, chiaro dall’inizio. Sai sempre a che punto siamo e cosa serve per andare avanti." />

      {/* Immagine + fasi — chiaro */}
      <div data-nav="light">
        <Reveal className="mx-auto max-w-7xl px-6 md:px-10">
          <img src={prototype} alt="Cartamodelli e prototipo di cintura" width={1408} height={1008} className="aspect-[16/9] w-full rounded-sm object-cover md:aspect-[21/9]" />
        </Reveal>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t-2 border-ink pt-8">
                <p className="display text-6xl text-leather">0{i + 1}</p>
                <h3 className="display mt-6 text-3xl">{t}</h3>
                <p className="mt-4 text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* Laboratorio — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal><img src={lab} alt="Laboratorio di prototipia" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow eyebrow-line text-tan">Il laboratorio</p>
            <h2 className="display mt-6 text-4xl md:text-5xl">Il prototipo nasce dove nascerà la <span className="text-tan">produzione.</span></h2>
            <p className="mt-8 text-lg text-ink-foreground/65">Stesse mani, stesse macchine, stessi standard. Così il campione approvato è già il prodotto che riceverai in serie — senza sorprese.</p>
          </Reveal>
        </div>
      </section>

      {/* Materiali — chiaro (destinazione del link "Materiali" in home) */}
      <section id="materiali" data-nav="light" className="scroll-mt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow eyebrow-line text-leather">Materiali</p>
            <h2 className="display mt-6 text-4xl md:text-5xl">Pellami e accessori, scelti <span className="text-leather">con te.</span></h2>
            <p className="mt-8 text-lg text-muted-foreground">Accesso diretto alle concerie e ai fornitori del distretto toscano: selezioniamo con te materiali e finiture giuste per il tuo prodotto.</p>
            <img src={materials} alt="Campioni di pellame e fibbie in ottone" loading="lazy" width={1200} height={1200} className="mt-10 hidden aspect-square w-3/4 rounded-sm object-cover md:block" />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            {materialsList.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t border-border py-8">
                <h3 className="display text-3xl md:text-4xl">{t}</h3>
                <p className="mt-4 text-muted-foreground">{d}</p>
              </Reveal>
            ))}
            <Reveal className="border-t border-border pt-8"><Cta to="/contatti">Parliamo dei materiali</Cta></Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
}

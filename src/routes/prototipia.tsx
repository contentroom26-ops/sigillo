import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import prototype from "@/assets/prototype.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";
import detCoccodrillo from "@/assets/det-coccodrillo.jpg";
import detBufalo from "@/assets/det-bufalo.jpg";

export const Route = createFileRoute("/prototipia")({
  head: () => ({
    meta: [
      { title: "Prototipia cinture in pelle — Dal brief al campione | Sigillo" },
      { name: "description", content: "Sviluppo prototipi di cinture in pelle in quattro fasi: brief, selezione materiali, campionatura e approvazione. Manifattura Sigillo, Scandicci." },
      { property: "og:title", content: "Prototipia cinture — Dal brief al campione approvato | Sigillo" },
      { property: "og:description", content: "Quattro fasi, un referente dedicato. Dal brief al campione approvato. Scandicci, Firenze." },
      { property: "og:url", content: "https://sigillosrl.com/prototipia" },
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
      <PageHero
        eyebrow="Prototipia"
        image={prototype}
        alt="Cartamodelli e prototipo di cintura"
        title={<>Dall’idea al campione <span className="text-tan">approvato.</span></>}
        intro="Un processo in quattro fasi, chiaro dall’inizio. Sai sempre a che punto siamo e cosa serve per andare avanti."
      />

      {/* Fasi — chiaro */}
      <section data-nav="light">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-leather">Il metodo</p>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Quattro fasi, <span className="text-leather">nessuna sorpresa.</span></h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-white/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-ink">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-ink-foreground">0{i + 1}</span>
                  <h3 className="display mt-8 text-3xl">{t}</h3>
                  <p className="mt-4 text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal><img src={lab} alt="Laboratorio di prototipia" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow eyebrow-line text-tan">Il laboratorio</p>
            <h2 className="display mt-6 text-4xl md:text-5xl">Il prototipo nasce dove nascerà la <span className="text-tan">produzione.</span></h2>
            <p className="mt-8 text-lg text-ink-foreground/65">Stesse mani, stesse macchine, stessi standard. Così il campione approvato è già il prodotto che riceverai in serie — senza sorprese.</p>
            <div className="mt-10"><Cta to="/produzione" tone="dark" variant="outline">Scopri la produzione</Cta></div>
          </Reveal>
        </div>
      </section>

      {/* Materiali — chiaro (destinazione del link "Materiali" in home) */}
      <section id="materiali" data-nav="light" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow eyebrow-line text-leather">Materiali</p>
              <h2 className="display mt-6 text-4xl md:text-5xl">Pellami e accessori, scelti <span className="text-leather">con te.</span></h2>
              <p className="mt-8 text-lg text-muted-foreground">Accesso diretto alle concerie e ai fornitori del distretto toscano: selezioniamo con te materiali e finiture giuste per il tuo prodotto.</p>
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

          <div className="mt-16 grid gap-4 sm:grid-cols-3 md:gap-6">
            {[
              [materials, "Campioni di pellame e fibbie in ottone", "Cartelle colore"],
              [detCoccodrillo, "Dettaglio di pelle stampata effetto coccodrillo", "Pelle stampata"],
              [detBufalo, "Dettaglio di pelle martellata con fibbia in ottone", "Pelle martellata"],
            ].map(([src, alt, cap], i) => (
              <Reveal key={cap} delay={i * 100}>
                <figure className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="eyebrow mt-3 text-muted-foreground">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}

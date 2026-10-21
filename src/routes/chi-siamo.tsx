import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import lab from "@/assets/lab.jpg";
import arancio from "@/assets/cintura-arancio-larga.jpg";
import intrecciataNera from "@/assets/cintura-intrecciata-nera.jpg";
import detBlu from "@/assets/det-blu.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Manifattura di cinture in pelle dal 1988 | Sigillo, Scandicci" },
      { name: "description", content: "Sigillo Srl: manifattura toscana di cinture e piccola pelletteria fondata nel 1988 a Scandicci, nel distretto della pelletteria fiorentina. Riservatezza, qualità, esperienza." },
      { property: "og:title", content: "Chi siamo — Sigillo Srl, manifattura dal 1988" },
      { property: "og:description", content: "Scandicci, distretto della pelletteria fiorentina, dal 1988. Serviamo brand in Europa, USA e Australia." },
      { property: "og:url", content: "https://sigillosrl.com/chi-siamo" },
    ],
  }),
  component: Page,
});

const pillars = [
  ["Distretto toscano", "Scandicci è il cuore della pelletteria di lusso. Concerie, accessoristi e terzisti sono a pochi chilometri: tempi brevi, controllo diretto."],
  ["Specializzazione verticale", "Facciamo cinture e piccola pelletteria, nient’altro. Questa focalizzazione si traduce in competenza, macchinari dedicati e risultati costanti."],
  ["Riservatezza", "Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo. Lavoriamo con accordi di riservatezza su ogni progetto."],
];

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Chi siamo"
        image={lab}
        alt="Il laboratorio Sigillo a Scandicci"
        title={<>Una manifattura, <span className="text-tan">un mestiere.</span></>}
        intro="Dal 1988 costruiamo cinture per i marchi che le firmano. Lontano dai riflettori, vicino al prodotto."
      />

      {/* Storia — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <Reveal className="md:col-span-6">
            <p className="eyebrow eyebrow-line text-leather">La nostra storia</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Dal 1988, <span className="text-leather">una cintura alla volta.</span></h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Sigillo nasce a Scandicci nel 1988 come laboratorio specializzato in cinture. Negli anni è cresciuto accanto alle maison del lusso e della moda, aggiungendo la piccola pelletteria e un reparto di prototipia interno.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Oggi serviamo clienti in Europa, Stati Uniti e Australia — dalla grande maison allo stilista emergente — con lo stesso approccio: ascolto, precisione, rispetto dei tempi.
            </p>
            <div className="mt-10"><Cta to="/produzione" variant="outline">Come lavoriamo</Cta></div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4 md:col-span-6">
            <img src={intrecciataNera} alt="Cintura intrecciata a mano in pelle nera" loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
            <img src={arancio} alt="Cintura alta in cuoio arancio con doppia fibbia" loading="lazy" className="mt-14 aspect-square w-full rounded-sm object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Perché Sigillo — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-tan">Perché Sigillo</p>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Tre cose che <span className="text-tan">non cambiano.</span></h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {pillars.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t border-tan/40 pt-8">
                <p className="display text-5xl text-tan">0{i + 1}</p>
                <h3 className="display mt-6 text-3xl md:text-4xl">{t}</h3>
                <p className="mt-6 text-ink-foreground/65">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In breve — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal className="divide-y divide-border border-y border-border">
            {[["Sede", "Scandicci (FI)"], ["Fondazione", "1988"], ["Mercati", "Europa · USA · Australia"], ["Specializzazione", "Cinture e piccola pelletteria"]].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-6">
                <span className="eyebrow text-muted-foreground">{k}</span>
                <span className="display text-right text-2xl md:text-3xl">{v}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}><img src={detBlu} alt="Dettaglio di una cintura blu con fibbia e cuciture a vista" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}

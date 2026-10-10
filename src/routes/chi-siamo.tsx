import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Sigillo Srl, Scandicci dal 1988" },
      { name: "description", content: "Manifattura toscana di cinture in pelle fondata nel 1988 a Scandicci. Distretto, specializzazione, riservatezza." },
      { property: "og:title", content: "Chi siamo — Sigillo Srl" },
      { property: "og:description", content: "Scandicci, dal 1988. Europa, USA, Australia." },
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
      <PageHeader eyebrow="Chi siamo" title={<>Una manifattura, <span className="text-leather">un mestiere.</span></>}
        intro="Dal 1988 costruiamo cinture per i marchi che le firmano. Lontano dai riflettori, vicino al prodotto." />
      <section data-nav="light" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-12 md:px-10 md:pb-32">
        <Reveal className="md:col-span-7"><img src={lab} alt="Il laboratorio Sigillo" width={1408} height={1008} className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
        <Reveal delay={120} className="md:col-span-5 md:self-end">
          <p className="text-lg text-muted-foreground">
            Sigillo nasce a Scandicci nel 1988 come laboratorio specializzato in cinture. Negli anni è cresciuto accanto alle maison del lusso e della moda, aggiungendo la piccola pelletteria e un reparto di prototipia interno.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Oggi serviamo clienti in Europa, Stati Uniti e Australia — dalla grande maison allo stilista emergente — con lo stesso approccio: ascolto, precisione, rispetto dei tempi.
          </p>
        </Reveal>
      </section>
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal><p className="eyebrow eyebrow-line text-tan">Perché Sigillo</p></Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {pillars.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t border-tan/40 pt-8">
                <h3 className="display text-3xl md:text-4xl">{t}</h3>
                <p className="mt-6 text-ink-foreground/60">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section data-nav="light" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal className="divide-y divide-border border-y border-border">
          {[["Sede", "Scandicci (FI)"], ["Fondazione", "1988"], ["Mercati", "Europa · USA · Australia"], ["Specializzazione", "Cinture e piccola pelletteria"]].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-6 py-6">
              <span className="eyebrow text-muted-foreground">{k}</span>
              <span className="display text-right text-2xl md:text-3xl">{v}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120}><img src={materials} alt="Pellami e fibbie" loading="lazy" width={1200} height={1200} className="aspect-square w-full rounded-sm object-cover" /></Reveal>
      </section>
      <CtaBand />
    </Layout>
  );
}

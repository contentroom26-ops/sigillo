import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, CtaBand } from "@/components/site/Layout";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/produzione")({
  head: () => ({
    meta: [
      { title: "Produzione — Private label, conto terzi, piccole serie | Sigillo" },
      { name: "description", content: "Tre modalità di produzione di cinture in pelle: private label, conto terzi e piccole serie da 80–100 pezzi." },
      { property: "og:title", content: "Produzione — Sigillo" },
      { property: "og:description", content: "Private label, conto terzi, piccole serie. Manifattura a Scandicci." },
    ],
  }),
  component: Page,
});

const modes = [
  {
    t: "Private Label", h: "Hai un brand, ti costruiamo il prodotto.",
    d: "Ci occupiamo di tutto: sviluppo, materiali, prototipo e produzione. Tu porti l’identità del marchio, noi la traduciamo in una collezione di cinture coerente e pronta alla vendita.",
    porta: ["Brand book o riferimenti visivi", "Target e fascia di prezzo", "Tempistiche di lancio"],
    include: ["Sviluppo modelli e cartamodelli", "Selezione pellami e accessori", "Personalizzazione con il tuo logo", "Confezionamento"],
    vol: "Da 100 pezzi per modello",
  },
  {
    t: "Conto Terzi", h: "Hai il design, noi produciamo.",
    d: "Hai già scheda tecnica e campione approvato? Lo industrializziamo e lo produciamo con costanza, rispettando specifiche, materiali e tempi concordati.",
    porta: ["Scheda tecnica o campione", "Materiali forniti o da reperire", "Volumi e calendario consegne"],
    include: ["Industrializzazione del modello", "Taglio, preparazione, cucitura, rifinitura", "Controllo qualità pezzo per pezzo", "Report di avanzamento"],
    vol: "Da piccoli lotti a produzioni continuative",
  },
  {
    t: "Piccole Serie", h: "Hai un’idea, partiamo da lì.",
    d: "Per stilisti emergenti e capsule collection. Ti accompagniamo dalla prima bozza al primo lotto, con quantitativi accessibili e la stessa cura delle grandi maison.",
    porta: ["Un’idea, uno schizzo o un riferimento", "Budget indicativo", "Disponibilità al confronto"],
    include: ["Consulenza su design e materiali", "Prototipo e campionatura", "Prima produzione", "Supporto per i riassortimenti"],
    vol: "Minimo 80–100 pezzi",
  },
];

function List({ title, items, dark }: { title: string; items: string[]; dark: boolean }) {
  return (
    <div>
      <p className={`eyebrow ${dark ? "text-tan" : "text-leather"}`}>{title}</p>
      <ul className={`mt-4 space-y-2 text-sm ${dark ? "text-ink-foreground/65" : "text-muted-foreground"}`}>
        {items.map((i) => <li key={i} className={`border-b pb-2 ${dark ? "border-ink-foreground/15" : "border-border"}`}>{i}</li>)}
      </ul>
    </div>
  );
}

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Produzione" title={<>Tre modi di lavorare <span className="text-leather">insieme.</span></>}
        intro="Ogni progetto parte da un punto diverso. Scegli la modalità più vicina a te — la qualità resta la stessa." />
      {modes.map((m, i) => {
        const dark = i % 2 === 1;
        return (
          <section key={m.t} data-nav={dark ? "dark" : "light"} className={dark ? "bg-ink text-ink-foreground" : ""}>
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
              <Reveal className="md:col-span-5">
                <p className={`eyebrow eyebrow-line ${dark ? "text-tan" : "text-leather"}`}>0{i + 1} — {m.t}</p>
                <h2 className="display mt-6 text-4xl md:text-6xl">{m.h}</h2>
                <p className={`mt-8 text-lg ${dark ? "text-ink-foreground/65" : "text-muted-foreground"}`}>{m.d}</p>
                <p className={`mt-8 inline-block rounded-full px-5 py-2 text-sm font-medium ${dark ? "bg-linen text-ink" : "bg-ink text-ink-foreground"}`}>{m.vol}</p>
                <div className="mt-8"><Cta to="/contatti" tone={dark ? "dark" : "light"} variant="outline">Parliamo di {m.t}</Cta></div>
              </Reveal>
              <Reveal delay={120} className="grid gap-10 sm:grid-cols-2 md:col-span-6 md:col-start-7 md:self-end">
                <List title="Cosa portare" items={m.porta} dark={dark} />
                <List title="Cosa include" items={m.include} dark={dark} />
              </Reveal>
            </div>
          </section>
        );
      })}
      <CtaBand />
    </Layout>
  );
}

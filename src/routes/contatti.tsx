import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowDot, ctaClasses } from "@/components/site/Cta";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Parliamo del tuo progetto | Sigillo" },
      { name: "description", content: "Scrivi a Sigillo per prototipi, private label, conto terzi o piccole serie di cinture in pelle." },
      { property: "og:title", content: "Contatti — Sigillo" },
      { property: "og:description", content: "Parliamo del tuo progetto. info@sigillosrl.com" },
    ],
  }),
  component: Page,
});

const field = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-lg outline-none transition placeholder:text-muted-foreground/60 focus:border-ink";

function Page() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("done"), 800);
  };

  return (
    <Layout>
      <PageHeader eyebrow="Contatti" title={<>Parliamo<span className="text-leather">.</span></>}
        intro="Raccontaci prodotto, volumi e tempi. Rispondiamo entro due giorni lavorativi, in totale riservatezza." />
      <section data-nav="light" className="mx-auto grid max-w-7xl gap-16 px-6 pb-28 md:grid-cols-12 md:px-10 md:pb-36">
        <Reveal className="md:col-span-7">
          {state === "done" ? (
            <div className="border-t-2 border-ink pt-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ink-foreground"><Check className="h-6 w-6" /></span>
              <h2 className="display mt-8 text-4xl md:text-5xl">Grazie, messaggio ricevuto.</h2>
              <p className="mt-4 text-lg text-muted-foreground">Ti risponderemo entro due giorni lavorativi.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block"><span className="eyebrow text-muted-foreground">Nome *</span><input required name="nome" className={field} /></label>
                <label className="block"><span className="eyebrow text-muted-foreground">Email *</span><input required type="email" name="email" className={field} /></label>
              </div>
              <label className="block"><span className="eyebrow text-muted-foreground">Azienda (opzionale)</span><input name="azienda" className={field} /></label>
              <label className="block"><span className="eyebrow text-muted-foreground">Tipo di richiesta *</span>
                <select required name="tipo" defaultValue="" className={field}>
                  <option value="" disabled>Seleziona</option>
                  <option>Prototipia</option>
                  <option>Private Label</option>
                  <option>Conto Terzi</option>
                  <option>Piccole Serie</option>
                  <option>Altro</option>
                </select>
              </label>
              <label className="block"><span className="eyebrow text-muted-foreground">Messaggio *</span><textarea required name="messaggio" rows={5} className={`${field} resize-none`} /></label>
              <button disabled={state === "sending"} className={`${ctaClasses("solid", "light").box} disabled:opacity-60`}>
                <span>{state === "sending" ? "Invio in corso…" : "Invia richiesta"}</span>
                <ArrowDot className={ctaClasses("solid", "light").dot} />
              </button>
            </form>
          )}
        </Reveal>
        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <div className="space-y-10 bg-linen-deep p-8 md:p-10">
            <div><p className="eyebrow text-leather">Email</p><a href="mailto:info@sigillosrl.com" className="mt-3 block text-xl font-medium hover:text-leather">info@sigillosrl.com</a></div>
            <div><p className="eyebrow text-leather">Sede</p><p className="mt-3">Sigillo Srl<br />Scandicci (FI), Italia</p></div>
            <div><p className="eyebrow text-leather">Mercati</p><p className="mt-3">Europa · USA · Australia</p></div>
            <p className="border-t border-border pt-6 text-sm text-muted-foreground">Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.</p>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}

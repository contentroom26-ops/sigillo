import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
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

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-linen/70 px-4 py-2.5 text-base outline-none transition placeholder:text-muted-foreground/60 focus:border-ink focus:bg-white";

const next = [
  ["Ci racconti il progetto", "Prodotto, volumi, tempi: anche solo un'idea o un riferimento."],
  ["Ti rispondiamo", "Entro due giorni lavorativi, con un referente dedicato."],
  ["Definiamo il passo successivo", "Una call, una visita in showroom o la campionatura."],
] as const;

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linen-deep text-ink">{icon}</span>
      <div>
        <p className="eyebrow text-muted-foreground">{label}</p>
        <div className="mt-1 text-base">{children}</div>
      </div>
    </div>
  );
}

function Page() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      azienda: (form.elements.namedItem("azienda") as HTMLInputElement).value,
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement).value,
      messaggio: (form.elements.namedItem("messaggio") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        setErrorMsg(json.error ?? "Qualcosa è andato storto. Riprova.");
        setState("error");
      } else {
        setState("done");
      }
    } catch {
      setErrorMsg("Connessione interrotta. Riprova o scrivi a info@sigillosrl.com.");
      setState("error");
    }
  };
  const c = ctaClasses("solid", "light");

  return (
    <Layout>
      {/* Intestazione — scura, compatta: il form resta visibile subito */}
      <section data-nav="dark" className="bg-ink text-center text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-28 md:pb-14 md:pt-32">
          <p className="eyebrow reveal is-visible inline-flex items-center gap-4 text-tan">
            <span className="h-px w-10 bg-current" />Contatti<span className="h-px w-10 bg-current" />
          </p>
          <h1 className="display reveal is-visible mt-5 text-4xl sm:text-5xl md:text-6xl">
            Parliamo del <span className="text-tan">tuo progetto.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-foreground/70 md:text-lg">
            Scrivici, chiama o compila il form: rispondiamo entro due giorni lavorativi, in totale riservatezza.
          </p>
        </div>
      </section>

      {/* Contatti + form — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-12 md:px-10 md:py-12">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-white/60 p-8 md:p-9">
              <h2 className="display text-3xl text-leather md:text-4xl">Resta in contatto</h2>
              <div className="mt-8 space-y-6">
                <Row icon={<Mail className="h-5 w-5" />} label="Email">
                  <a href="mailto:info@sigillosrl.com" className="font-medium underline-offset-4 hover:text-leather hover:underline">info@sigillosrl.com</a>
                </Row>
                <Row icon={<Phone className="h-5 w-5" />} label="Telefono">
                  <a href="tel:+39055721175" className="font-medium underline-offset-4 hover:text-leather hover:underline">055 721175</a><br />
                  <a href="tel:+393475175078" className="font-medium underline-offset-4 hover:text-leather hover:underline">+39 347 517 5078</a>
                </Row>
                <Row icon={<MapPin className="h-5 w-5" />} label="Sede">
                  Sigillo Srl<br />Scandicci (FI), Italia
                </Row>
                <Row icon={<Globe className="h-5 w-5" />} label="Mercati">Europa · USA · Australia</Row>
                <Row icon={<Clock className="h-5 w-5" />} label="Tempi di risposta">Entro due giorni lavorativi</Row>
              </div>
              <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                Nessun nome e nessun logo sui nostri canali — solo il prodotto che porta il tuo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 md:order-2 md:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-white/60 p-8 md:p-9">
              {state === "done" ? (
                <div className="flex h-full flex-col justify-center py-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ink-foreground"><Check className="h-6 w-6" /></span>
                  <h2 className="display mt-8 text-4xl md:text-5xl">Grazie, messaggio ricevuto.</h2>
                  <p className="mt-4 text-lg text-muted-foreground">Ti risponderemo entro due giorni lavorativi.</p>
                </div>
              ) : (
                <>
                  <h2 className="display text-3xl text-leather md:text-4xl">Scrivici</h2>
                  <p className="mt-3 text-muted-foreground">Compila il form e ti ricontattiamo con il prossimo passo.</p>
                  <form onSubmit={submit} className="mt-6 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block"><span className="eyebrow text-muted-foreground">Nome *</span><input required name="nome" autoComplete="name" className={field} /></label>
                      <label className="block"><span className="eyebrow text-muted-foreground">Email *</span><input required type="email" name="email" autoComplete="email" className={field} /></label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block"><span className="eyebrow text-muted-foreground">Azienda (opzionale)</span><input name="azienda" autoComplete="organization" className={field} /></label>
                      <label className="block">
                        <span className="eyebrow text-muted-foreground">Tipo di richiesta *</span>
                        <select required name="tipo" defaultValue="" className={field}>
                          <option value="" disabled>Seleziona</option>
                          <option>Prototipia</option>
                          <option>Private Label</option>
                          <option>Conto Terzi</option>
                          <option>Piccole Serie</option>
                          <option>Altro</option>
                        </select>
                      </label>
                    </div>
                    <label className="block"><span className="eyebrow text-muted-foreground">Messaggio *</span><textarea required name="messaggio" rows={5} placeholder="Raccontaci il tuo progetto: prodotto, volumi, tempi…" className={`${field} resize-none`} /></label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input required type="checkbox" name="privacy" className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-ink" />
                      <span className="text-sm text-muted-foreground leading-snug">
                        Ho letto l'<Link to="/privacy" className="underline underline-offset-2 hover:text-leather">informativa sulla privacy</Link> e acconsento al trattamento dei miei dati personali per essere ricontattato. *
                      </span>
                    </label>
                    <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button disabled={state === "sending"} className={`${c.box} disabled:opacity-60`}>
                        <span>{state === "sending" ? "Invio in corso…" : "Invia messaggio"}</span>
                        <ArrowDot className={c.dot} />
                      </button>
                      <p className="text-sm text-muted-foreground">Rispondiamo entro due giorni lavorativi. Nessun impegno.</p>
                    </div>
                    {state === "error" && (
                      <p className="mt-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMsg}{" "}
                        <button type="button" onClick={() => setState("idle")} className="underline underline-offset-2">Riprova</button>
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>

        {/* Cosa succede dopo */}
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28">
          <Reveal><p className="eyebrow eyebrow-line text-leather">Cosa succede dopo</p></Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {next.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t border-ink pt-6">
                <p className="display text-5xl text-leather">0{i + 1}</p>
                <h3 className="display mt-4 text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

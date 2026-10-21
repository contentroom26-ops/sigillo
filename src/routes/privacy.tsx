import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sigillo Srl" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) — Sigillo Srl." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-8">
      <h2 className="display text-2xl text-leather">{title}</h2>
      <div className="mt-4 space-y-3 text-base text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Page() {
  return (
    <Layout>
      <section data-nav="light">
        <div className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-48">

          {/* Intestazione */}
          <p className="eyebrow eyebrow-line text-leather">Trasparenza &amp; GDPR</p>
          <h1 className="display mt-6 text-4xl sm:text-5xl md:text-6xl">Privacy Policy</h1>
          <p className="mt-5 text-muted-foreground">
            Ai sensi del Regolamento UE 2016/679 («GDPR») e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            <br />
            <span className="text-xs">Ultimo aggiornamento: ottobre 2025</span>
          </p>

          <div className="mt-14 space-y-10">

            <Section title="1. Titolare del trattamento">
              <p>
                <strong className="text-ink">Sigillo Srl</strong><br />
                Via Ilio Barontini n. 15/B<br />
                50010 Scandicci (Firenze), Italia<br />
                P. IVA 04536710488
              </p>
              <p>
                Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali scrivi a{" "}
                <a href="mailto:info@sigillosrl.com" className="text-leather underline underline-offset-4 hover:text-ink">
                  info@sigillosrl.com
                </a>
                .
              </p>
            </Section>

            <Section title="2. Dati raccolti e finalità">
              <p>
                Il sito raccoglie dati personali <strong className="text-ink">esclusivamente tramite il form di contatto</strong>.
                I campi acquisiti sono: nome, indirizzo email, nome azienda (facoltativo), tipo di richiesta e testo del messaggio.
              </p>
              <p>
                Tali dati sono trattati al solo scopo di rispondere alla tua richiesta commerciale o informativa e per
                gestire eventuali comunicazioni successive ad essa collegate.
              </p>
              <p>
                Il sito <strong className="text-ink">non utilizza cookie di profilazione, tracker di terze parti né strumenti
                di analisi statistica</strong> che richiedano il consenso ai sensi della normativa vigente.
              </p>
            </Section>

            <Section title="3. Base giuridica">
              <p>
                Il trattamento si fonda sul <strong className="text-ink">consenso espresso</strong> dall'interessato al momento
                dell'invio del modulo (art. 6, par. 1, lett. a del GDPR). Il consenso è revocabile in qualsiasi momento
                scrivendo a{" "}
                <a href="mailto:info@sigillosrl.com" className="text-leather underline underline-offset-4 hover:text-ink">
                  info@sigillosrl.com
                </a>
                ; la revoca non pregiudica la liceità del trattamento effettuato prima di essa.
              </p>
            </Section>

            <Section title="4. Modalità di trattamento e conservazione">
              <p>
                I dati sono trattati con strumenti elettronici e conservati per il tempo strettamente necessario a evadere
                la richiesta ricevuta e a gestire il rapporto commerciale eventualmente instaurato.
                Trascorso tale termine i dati vengono cancellati o anonimizzati.
              </p>
              <p>
                L'invio delle email avviene tramite il servizio <strong className="text-ink">Resend</strong>{" "}
                (Resend Inc. — server nella regione EU, Irlanda), il quale agisce in qualità di responsabile
                del trattamento ai sensi dell'art. 28 GDPR. I dati non vengono trasferiti al di fuori dello
                Spazio Economico Europeo.
              </p>
            </Section>

            <Section title="5. Comunicazione e diffusione">
              <p>
                I dati non sono comunicati a terzi, né diffusi, se non ai soggetti che erogano servizi
                strumentali al funzionamento del sito (ad es. il provider di posta elettronica di cui al
                punto 4) e, nei casi previsti dalla legge, alle Autorità competenti.
              </p>
            </Section>

            <Section title="6. Diritti dell'interessato">
              <p>Hai il diritto di:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>accedere ai tuoi dati personali (art. 15 GDPR);</li>
                <li>richiederne la rettifica (art. 16) o la cancellazione (art. 17);</li>
                <li>opporti al trattamento (art. 21) o richiederne la limitazione (art. 18);</li>
                <li>ricevere i dati in formato strutturato e leggibile — portabilità (art. 20);</li>
                <li>revocare il consenso in qualsiasi momento (art. 7);</li>
                <li>proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer" className="text-leather underline underline-offset-4 hover:text-ink">garanteprivacy.it</a>).</li>
              </ul>
              <p>
                Per esercitare i tuoi diritti scrivi a{" "}
                <a href="mailto:info@sigillosrl.com" className="text-leather underline underline-offset-4 hover:text-ink">
                  info@sigillosrl.com
                </a>
                . Risponderemo entro 30 giorni.
              </p>
            </Section>

            <Section title="7. Modifiche alla presente informativa">
              <p>
                Il Titolare si riserva di aggiornare questa informativa in caso di modifiche normative o
                di variazioni nei servizi utilizzati. La versione aggiornata sarà sempre disponibile a
                questo indirizzo.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </Layout>
  );
}

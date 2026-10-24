import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowDot, ctaClasses } from "@/components/site/Cta";
import { Hl } from "@/components/site/Hl";
import { LocLink } from "@/components/site/LocLink";
import { useLang, useT } from "@/i18n";

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-linen/70 px-4 py-2.5 text-base outline-none transition placeholder:text-muted-foreground/60 focus:border-ink focus:bg-white";

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

export function ContattiPage() {
  const lang = useLang();
  const t = useT();
  const c = t.contatti;
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
      lang,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok || json.error) {
        setErrorMsg(json.error ?? c.form.errGeneric);
        setState("error");
      } else {
        setState("done");
      }
    } catch {
      setErrorMsg(c.form.errNetwork);
      setState("error");
    }
  };
  const btn = ctaClasses("solid", "light");
  const link = "font-medium underline-offset-4 hover:text-leather hover:underline";

  return (
    <Layout>
      {/* Intestazione — scura, compatta: il form resta visibile subito */}
      <section data-nav="dark" className="bg-ink text-center text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-28 md:pb-14 md:pt-32">
          <p className="eyebrow reveal is-visible inline-flex items-center gap-4 text-tan">
            <span className="h-px w-10 bg-current" />{c.hero.eyebrow}<span className="h-px w-10 bg-current" />
          </p>
          <h1 className="display reveal is-visible mt-5 text-4xl sm:text-5xl md:text-6xl">
            <Hl p={c.hero.title} />
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-foreground/70 md:text-lg">{c.hero.lead}</p>
        </div>
      </section>

      {/* Contatti + form — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-12 md:px-10 md:py-12">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-white/60 p-8 md:p-9">
              <h2 className="display text-3xl text-leather md:text-4xl">{c.info.title}</h2>
              <div className="mt-8 space-y-6">
                <Row icon={<Mail className="h-5 w-5" />} label={c.info.email}>
                  <a href="mailto:info@sigillosrl.com" className={link}>info@sigillosrl.com</a>
                </Row>
                <Row icon={<Phone className="h-5 w-5" />} label={c.info.phone}>
                  <a href="tel:+39055721175" className={link}>055 721175</a><br />
                  <a href="tel:+393475175078" className={link}>+39 347 517 5078</a>
                </Row>
                <Row icon={<MapPin className="h-5 w-5" />} label={c.info.seat}>
                  Sigillo Srl<br />{t.footer.address[0]}<br />{t.footer.address[1]}
                </Row>
                <Row icon={<Globe className="h-5 w-5" />} label={c.info.markets}>{c.info.marketsValue}</Row>
                <Row icon={<Clock className="h-5 w-5" />} label={c.info.response}>{c.info.responseValue}</Row>
              </div>
              <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">{c.info.note}</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 md:order-2 md:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-white/60 p-8 md:p-9">
              {state === "done" ? (
                <div className="flex h-full flex-col justify-center py-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ink-foreground"><Check className="h-6 w-6" /></span>
                  <h2 className="display mt-8 text-4xl md:text-5xl">{c.done.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{c.done.text}</p>
                </div>
              ) : (
                <>
                  <h2 className="display text-3xl text-leather md:text-4xl">{c.form.title}</h2>
                  <p className="mt-3 text-muted-foreground">{c.form.intro}</p>
                  <form onSubmit={submit} className="mt-6 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block"><span className="eyebrow text-muted-foreground">{c.form.name}</span><input required name="nome" autoComplete="name" className={field} /></label>
                      <label className="block"><span className="eyebrow text-muted-foreground">{c.form.email}</span><input required type="email" name="email" autoComplete="email" className={field} /></label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block"><span className="eyebrow text-muted-foreground">{c.form.company}</span><input name="azienda" autoComplete="organization" className={field} /></label>
                      <label className="block">
                        <span className="eyebrow text-muted-foreground">{c.form.type}</span>
                        <select required name="tipo" defaultValue="" className={field}>
                          <option value="" disabled>{c.form.select}</option>
                          {c.form.types.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className="block"><span className="eyebrow text-muted-foreground">{c.form.message}</span><textarea required name="messaggio" rows={5} placeholder={c.form.placeholder} className={`${field} resize-none`} /></label>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input required type="checkbox" name="privacy" className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-ink" />
                      <span className="text-sm leading-snug text-muted-foreground">
                        {c.form.consentPre}<LocLink to="/privacy" className="underline underline-offset-2 hover:text-leather">{c.form.consentLink}</LocLink>{c.form.consentPost}
                      </span>
                    </label>
                    <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button disabled={state === "sending"} className={`${btn.box} disabled:opacity-60`}>
                        <span>{state === "sending" ? c.form.sending : c.form.send}</span>
                        <ArrowDot className={btn.dot} />
                      </button>
                      <p className="text-sm text-muted-foreground">{c.form.note}</p>
                    </div>
                    {state === "error" && (
                      <p className="mt-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMsg}{" "}
                        <button type="button" onClick={() => setState("idle")} className="underline underline-offset-2">{c.form.retry}</button>
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
          <Reveal><p className="eyebrow eyebrow-line text-leather">{c.next.eyebrow}</p></Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {c.next.steps.map(([title, text], i) => (
              <Reveal key={title} delay={i * 100} className="border-t border-ink pt-6">
                <p className="display text-5xl text-leather">0{i + 1}</p>
                <h3 className="display mt-4 text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

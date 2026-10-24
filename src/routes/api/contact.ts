import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

type Lang = "it" | "en" | "fr";

const MSG: Record<Lang, { config: string; format: string; missing: string; email: string; send: string }> = {
  it: {
    config: "Configurazione server mancante.",
    format: "Formato richiesta non valido.",
    missing: "Campi obbligatori mancanti.",
    email: "Indirizzo email non valido.",
    send: "Invio fallito. Riprova o scrivi direttamente a info@sigillosrl.com.",
  },
  en: {
    config: "Server configuration missing.",
    format: "Invalid request format.",
    missing: "Required fields are missing.",
    email: "Invalid email address.",
    send: "Sending failed. Please try again or write directly to info@sigillosrl.com.",
  },
  fr: {
    config: "Configuration du serveur manquante.",
    format: "Format de la requête invalide.",
    missing: "Champs obligatoires manquants.",
    email: "Adresse e-mail invalide.",
    send: "L'envoi a échoué. Réessayez ou écrivez directement à info@sigillosrl.com.",
  },
};

const LANG_LABEL: Record<Lang, string> = { it: "Italiano", en: "English", fr: "Français" };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

/** Stringa tagliata a una lunghezza massima (difesa minima contro invii abusivi). */
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json({ error: MSG.it.format }, { status: 400 });
        }

        const lang: Lang = body["lang"] === "en" || body["lang"] === "fr" ? body["lang"] : "it";
        const m = MSG[lang];

        const apiKey = process.env["RESEND_API_KEY"];
        if (!apiKey) {
          return Response.json({ error: m.config }, { status: 500 });
        }

        const nome = str(body["nome"], 200);
        const email = str(body["email"], 254);
        const azienda = str(body["azienda"], 200);
        const tipo = str(body["tipo"], 100);
        const messaggio = str(body["messaggio"], 5000);

        if (!nome || !email || !tipo || !messaggio) {
          return Response.json({ error: m.missing }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ error: m.email }, { status: 400 });
        }

        // Tutto ciò che arriva dal form va escapato prima di finire nell'HTML della mail.
        const n = escapeHtml(nome);
        const e = escapeHtml(email);
        const a = escapeHtml(azienda);
        const t = escapeHtml(tipo);
        const msg = escapeHtml(messaggio);

        const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1c1814">
        <h2 style="font-size:24px;margin-bottom:24px;border-bottom:1px solid #e5e0d6;padding-bottom:12px">
          Nuovo messaggio dal sito — ${t}
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:120px">Nome</td><td style="padding:8px 0;font-weight:500">${n}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${e}" style="color:#6b4c36">${e}</a></td></tr>
          ${a ? `<tr><td style="padding:8px 0;color:#6b7280">Azienda</td><td style="padding:8px 0;font-weight:500">${a}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280">Richiesta</td><td style="padding:8px 0;font-weight:500">${t}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Lingua del sito</td><td style="padding:8px 0;font-weight:500">${LANG_LABEL[lang]}</td></tr>
        </table>
        <div style="margin-top:24px;background:#f5f0e6;border-radius:8px;padding:20px">
          <p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px">Messaggio</p>
          <p style="margin:0;white-space:pre-wrap">${msg}</p>
        </div>
        <p style="margin-top:32px;color:#9ca3af;font-size:12px">
          Inviato da sigillosrl.com (${LANG_LABEL[lang]}) · Rispondi direttamente a questo messaggio per scrivere a ${e}
        </p>
      </div>
    `;

        const resend = new Resend(apiKey);
        const subjectName = nome.replace(/[\r\n]+/g, " ");
        const subjectType = tipo.replace(/[\r\n]+/g, " ");
        const { error } = await resend.emails.send({
          from: "Sigillo SRL <noreply@sigillosrl.com>",
          to: ["info@sigillosrl.com"],
          replyTo: email,
          subject: `Nuovo contatto [${lang.toUpperCase()}]: ${subjectType} — ${subjectName}`,
          html,
        });

        if (error) {
          console.error("Resend error:", error);
          return Response.json({ error: m.send }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});

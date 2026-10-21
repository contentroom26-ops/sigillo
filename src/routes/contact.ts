import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Configurazione server mancante." }, { status: 500 });
    }

    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Formato richiesta non valido." }, { status: 400 });
    }

    const { nome, email, azienda, tipo, messaggio } = body;

    if (!nome?.trim() || !email?.trim() || !tipo?.trim() || !messaggio?.trim()) {
      return Response.json({ error: "Campi obbligatori mancanti." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Indirizzo email non valido." }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1c1814">
        <h2 style="font-size:24px;margin-bottom:24px;border-bottom:1px solid #e5e0d6;padding-bottom:12px">
          Nuovo messaggio dal sito — ${tipo}
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:120px">Nome</td><td style="padding:8px 0;font-weight:500">${nome}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#6b4c36">${email}</a></td></tr>
          ${azienda ? `<tr><td style="padding:8px 0;color:#6b7280">Azienda</td><td style="padding:8px 0;font-weight:500">${azienda}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280">Richiesta</td><td style="padding:8px 0;font-weight:500">${tipo}</td></tr>
        </table>
        <div style="margin-top:24px;background:#f5f0e6;border-radius:8px;padding:20px">
          <p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px">Messaggio</p>
          <p style="margin:0;white-space:pre-wrap">${messaggio}</p>
        </div>
        <p style="margin-top:32px;color:#9ca3af;font-size:12px">
          Inviato da sigillosrl.com · Rispondi direttamente a questo messaggio per scrivere a ${email}
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Sigillo SRL <noreply@sigillosrl.com>",
      to: ["info@sigillosrl.com"],
      replyTo: email,
      subject: `Nuovo contatto: ${tipo} — ${nome}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Invio fallito. Riprova o scrivi direttamente a info@sigillosrl.com." }, { status: 500 });
    }

    return Response.json({ ok: true });
  },
});

import { Layout } from "@/components/site/Layout";
import { Rich } from "@/components/site/Rich";
import { useT } from "@/i18n";

export function PrivacyPage() {
  const t = useT().privacy;
  return (
    <Layout>
      <section data-nav="light">
        <div className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-48">
          <p className="eyebrow eyebrow-line text-leather">{t.eyebrow}</p>
          <h1 className="display mt-6 text-4xl sm:text-5xl md:text-6xl">{t.title}</h1>
          <p className="mt-5 text-muted-foreground">
            {t.legal}
            <br />
            <span className="text-xs">{t.updated}</span>
          </p>

          <div className="mt-14 space-y-10">
            {t.sections.map((s) => (
              <div key={s.title} className="border-t border-border pt-8">
                <h2 className="display text-2xl text-leather">{s.title}</h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                  {s.blocks.map((b, i) =>
                    typeof b === "string" ? (
                      <p key={i} className="whitespace-pre-line"><Rich text={b} /></p>
                    ) : (
                      <ul key={i} className="ml-4 list-disc space-y-1">
                        {b.map((li) => <li key={li}><Rich text={li} /></li>)}
                      </ul>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { Hl } from "@/components/site/Hl";
import { useT } from "@/i18n";
import lab from "@/assets/lab.jpg";
import arancio from "@/assets/cintura-arancio-larga.jpg";
import intrecciataNera from "@/assets/cintura-intrecciata-nera.jpg";
import detBlu from "@/assets/det-blu.jpg";

export function ChiSiamoPage() {
  const t = useT().chiSiamo;
  return (
    <Layout>
      <PageHero
        eyebrow={t.hero.eyebrow}
        image={lab}
        alt={t.hero.alt}
        title={<Hl p={t.hero.title} />}
        intro={t.hero.intro}
      />

      {/* Storia — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <Reveal className="md:col-span-6">
            <p className="eyebrow eyebrow-line text-leather">{t.story.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-6xl"><Hl p={t.story.title} className="text-leather" /></h2>
            <p className="mt-8 text-lg text-muted-foreground">{t.story.p1}</p>
            <p className="mt-6 text-lg text-muted-foreground">{t.story.p2}</p>
            <div className="mt-10"><Cta to="/produzione" variant="outline">{t.story.cta}</Cta></div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4 md:col-span-6">
            <img src={intrecciataNera} alt={t.story.alt1} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
            <img src={arancio} alt={t.story.alt2} loading="lazy" className="mt-14 aspect-square w-full rounded-sm object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Perché Sigillo — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-tan">{t.pillars.eyebrow}</p>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl"><Hl p={t.pillars.title} /></h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {t.pillars.items.map(([title, text], i) => (
              <Reveal key={title} delay={i * 100} className="border-t border-tan/40 pt-8">
                <p className="display text-5xl text-tan">0{i + 1}</p>
                <h3 className="display mt-6 text-3xl md:text-4xl">{title}</h3>
                <p className="mt-6 text-ink-foreground/65">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In breve — chiaro */}
      <section data-nav="light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal className="divide-y divide-border border-y border-border">
            {t.facts.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-6">
                <span className="eyebrow text-muted-foreground">{k}</span>
                <span className="display text-right text-2xl md:text-3xl">{v}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}><img src={detBlu} alt={t.altBlu} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}

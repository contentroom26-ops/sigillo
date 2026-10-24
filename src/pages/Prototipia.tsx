import { Layout, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { Hl } from "@/components/site/Hl";
import { useT } from "@/i18n";
import prototype from "@/assets/prototype.jpg";
import lab from "@/assets/lab.jpg";
import materials from "@/assets/materials.jpg";
import detCoccodrillo from "@/assets/det-coccodrillo.jpg";
import detBufalo from "@/assets/det-bufalo.jpg";

const galleryPhotos = [materials, detCoccodrillo, detBufalo];

export function PrototipiaPage() {
  const t = useT().prototipia;
  return (
    <Layout>
      <PageHero
        eyebrow={t.hero.eyebrow}
        image={prototype}
        alt={t.hero.alt}
        title={<Hl p={t.hero.title} />}
        intro={t.hero.intro}
      />

      {/* Fasi — chiaro */}
      <section data-nav="light">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-line text-leather">{t.method.eyebrow}</p>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl"><Hl p={t.method.title} className="text-leather" /></h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.method.steps.map(([title, text], i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-white/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-ink">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-ink-foreground">0{i + 1}</span>
                  <h3 className="display mt-8 text-3xl">{title}</h3>
                  <p className="mt-4 text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio — scuro */}
      <section data-nav="dark" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal><img src={lab} alt={t.lab.alt} loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow eyebrow-line text-tan">{t.lab.eyebrow}</p>
            <h2 className="display mt-6 text-4xl md:text-5xl"><Hl p={t.lab.title} /></h2>
            <p className="mt-8 text-lg text-ink-foreground/65">{t.lab.text}</p>
            <div className="mt-10"><Cta to="/produzione" tone="dark" variant="outline">{t.lab.cta}</Cta></div>
          </Reveal>
        </div>
      </section>

      {/* Materiali — chiaro (destinazione del link "Materiali" in home) */}
      <section id="materiali" data-nav="light" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow eyebrow-line text-leather">{t.materials.eyebrow}</p>
              <h2 className="display mt-6 text-4xl md:text-5xl"><Hl p={t.materials.title} className="text-leather" /></h2>
              <p className="mt-8 text-lg text-muted-foreground">{t.materials.text}</p>
            </Reveal>
            <div className="md:col-span-6 md:col-start-7">
              {t.materials.list.map(([title, text], i) => (
                <Reveal key={title} delay={i * 100} className="border-t border-border py-8">
                  <h3 className="display text-3xl md:text-4xl">{title}</h3>
                  <p className="mt-4 text-muted-foreground">{text}</p>
                </Reveal>
              ))}
              <Reveal className="border-t border-border pt-8"><Cta to="/contatti">{t.materials.cta}</Cta></Reveal>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3 md:gap-6">
            {t.gallery.map(([alt, cap], i) => (
              <Reveal key={cap} delay={i * 100}>
                <figure className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img src={galleryPhotos[i]} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="eyebrow mt-3 text-muted-foreground">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}

import { Layout, PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { Hl } from "@/components/site/Hl";
import { useT } from "@/i18n";
import hero from "@/assets/hero.jpg";
import marrone from "@/assets/cintura-marrone-scuro.jpg";
import detMarrone from "@/assets/det-marrone-scuro.jpg";
import croco from "@/assets/cintura-coccodrillo-nero.jpg";
import detCroco from "@/assets/det-coccodrillo-nero.jpg";
import bufalo from "@/assets/cintura-bufalo.jpg";
import detBufalo from "@/assets/det-bufalo.jpg";

// Foto delle tre modalità, nello stesso ordine del dizionario.
const photos = [
  { img: marrone, det: detMarrone },
  { img: croco, det: detCroco },
  { img: bufalo, det: detBufalo },
];

function List({ title, items, dark }: { title: string; items: readonly string[]; dark: boolean }) {
  return (
    <div>
      <p className={`eyebrow ${dark ? "text-tan" : "text-leather"}`}>{title}</p>
      <ul className={`mt-4 space-y-2 text-sm ${dark ? "text-ink-foreground/65" : "text-muted-foreground"}`}>
        {items.map((i) => <li key={i} className={`border-b pb-2 ${dark ? "border-ink-foreground/15" : "border-border"}`}>{i}</li>)}
      </ul>
    </div>
  );
}

export function ProduzionePage() {
  const t = useT().produzione;
  return (
    <Layout>
      <PageHero
        eyebrow={t.hero.eyebrow}
        image={hero}
        alt={t.hero.alt}
        title={<Hl p={t.hero.title} />}
        intro={t.hero.intro}
      />

      {t.modes.map((m, i) => {
        const dark = i % 2 === 1;
        const photo = photos[i]!;
        return (
          <section key={m.name} data-nav={dark ? "dark" : "light"} className={dark ? "bg-ink text-ink-foreground" : ""}>
            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
              <div className="grid items-center gap-12 md:grid-cols-12">
                <Reveal className={`md:col-span-5 md:row-start-1 ${dark ? "md:col-start-8" : "md:col-start-1"}`}>
                  <p className={`eyebrow eyebrow-line ${dark ? "text-tan" : "text-leather"}`}>0{i + 1} — {m.name}</p>
                  <h2 className="display mt-6 text-4xl md:text-6xl">{m.headline}</h2>
                  <p className={`mt-8 text-lg ${dark ? "text-ink-foreground/65" : "text-muted-foreground"}`}>{m.text}</p>
                  <p className={`mt-8 inline-block rounded-full px-5 py-2 text-sm font-medium ${dark ? "bg-linen text-ink" : "bg-ink text-ink-foreground"}`}>{m.volume}</p>
                  <div className="mt-8"><Cta to="/contatti" tone={dark ? "dark" : "light"} variant="outline">{m.cta}</Cta></div>
                </Reveal>
                <Reveal delay={120} className={`pb-8 md:col-span-6 md:row-start-1 ${dark ? "md:col-start-1" : "md:col-start-7"}`}>
                  <div className="relative">
                    <img src={photo.img} alt={m.imgAlt} loading="lazy" className="aspect-[11/10] w-full rounded-sm object-cover" />
                    <img
                      src={photo.det} alt={m.detAlt} loading="lazy"
                      className={`absolute -bottom-8 w-[38%] aspect-square rounded-sm border-[6px] object-cover shadow-xl md:border-8 ${dark ? "border-ink -right-2 md:-right-6" : "border-linen -left-2 md:-left-6"}`}
                    />
                  </div>
                </Reveal>
              </div>
              <Reveal className={`mt-14 grid gap-10 border-t pt-10 sm:grid-cols-2 ${dark ? "border-ink-foreground/15" : "border-border"}`}>
                <List title={t.bring} items={m.bring} dark={dark} />
                <List title={t.include} items={m.include} dark={dark} />
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </Layout>
  );
}

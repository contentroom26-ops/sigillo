import { LANGS, SITE, getDict, localePath, type Lang, type RoutePath } from "./index";

export type PageKey = "home" | "prototipia" | "produzione" | "chiSiamo" | "contatti" | "privacy";

const PATHS: Record<PageKey, RoutePath> = {
  home: "/",
  prototipia: "/prototipia",
  produzione: "/produzione",
  chiSiamo: "/chi-siamo",
  contatti: "/contatti",
  privacy: "/privacy",
};

const OG_LOCALE: Record<Lang, string> = { it: "it_IT", en: "en_US", fr: "fr_FR" };

const abs = (lang: Lang, path: string) => {
  const p = localePath(lang, path);
  return p === "/" ? `${SITE}/` : `${SITE}${p}`;
};

/** Title, description, Open Graph, canonical e hreflang di una pagina nella lingua data. */
export function pageHead(page: PageKey, lang: Lang) {
  const m = getDict(lang).meta[page];
  const path = PATHS[page];
  const url = abs(lang, path);

  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { property: "og:title", content: m.ogTitle },
      { property: "og:description", content: m.ogDescription },
      { property: "og:url", content: url },
      { property: "og:locale", content: OG_LOCALE[lang] },
      ...(page === "privacy" ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [
      { rel: "canonical", href: url },
      ...LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: abs(l, path) })),
      { rel: "alternate", hrefLang: "x-default", href: abs("it", path) },
    ],
  };
}

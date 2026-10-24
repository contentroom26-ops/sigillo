import { useRouterState } from "@tanstack/react-router";
import { it, type Dict } from "./it";
import { en } from "./en";
import { fr } from "./fr";

export const LANGS = ["it", "en", "fr"] as const;
export type Lang = (typeof LANGS)[number];

/** Rotte "canoniche" (italiane). Le versioni EN/FR sono /en/... e /fr/... */
export type RoutePath = "/" | "/prototipia" | "/produzione" | "/chi-siamo" | "/contatti" | "/privacy";

export const SITE = "https://sigillosrl.com";

const dicts: Record<Lang, Dict> = { it, en, fr };

export const getDict = (lang: Lang): Dict => dicts[lang];

export function isLang(v: unknown): v is Lang {
  return v === "it" || v === "en" || v === "fr";
}

/** L'italiano non ha prefisso; inglese e francese sì. */
export function langFromPath(pathname: string): Lang {
  const m = /^\/(en|fr)(?=\/|$)/.exec(pathname);
  return m ? (m[1] as Lang) : "it";
}

/** "/en/prototipia" → "/prototipia" */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "/";
}

export function localePath(lang: Lang, path: string): string {
  if (lang === "it") return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return langFromPath(pathname);
}

export function useT(): Dict {
  return dicts[useLang()];
}

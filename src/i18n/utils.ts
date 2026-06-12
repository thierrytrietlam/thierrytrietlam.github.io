// Lightweight i18n helpers. English is the default and lives at the root (/).
// French lives under /fr/. Each component reads the language from the URL, so
// there is no global state and the site stays fully static.

export const languages = { en: "EN", fr: "FR" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

/** Read the active language from a URL. `/fr/...` is French, everything else is English. */
export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split("/").filter(Boolean)[0];
  return first === "fr" ? "fr" : "en";
}

/** Drop a leading `/fr` so the path is language neutral. Always starts with `/`. */
export function stripLangFromPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "fr") parts.shift();
  return "/" + parts.join("/");
}

/** Prefix a language neutral path with the locale. English stays at the root. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : "/" + path;
  if (lang === "en") return clean;
  return clean === "/" ? "/fr/" : "/fr" + clean;
}

/** The same page in the other language, for the language switcher and hreflang. */
export function getAltPath(url: URL, target: Lang): string {
  return localizePath(stripLangFromPath(url.pathname), target);
}

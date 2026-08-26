// CV-SYNC | CV source of truth: c:/Users/lammi/endeavor/en.tex (EN), c:/Users/lammi/endeavor/fr.tex (FR).
// CV-SYNC | This file repeats CV facts. Edit the .tex first, then propagate here.
// CV-SYNC | Full propagation list: search CV-SYNC-REGISTRY inside either .tex file.

import type { Lang } from "../i18n/utils";

// Quotes lifted verbatim from the four recommendation letters in reclet/
// (git ignored, they hold the referees' personal contact details).
//
// Two deliberate rules:
//   1. Referees are identified by role and company only, never by name.
//   2. A quote is always shown in the language it was written in. When the
//      page language differs, a translation is printed underneath and clearly
//      labelled as such, so the original wording is never misrepresented.

export type Recommendation = {
  role: string;
  company: string;
  /** Reporting line to me during the engagement. */
  relationship: string;
  logo?: string;
  quote: string;
  /** Set only when the quote language differs from the page language. */
  translation?: string;
  /** Language the quote was actually written in. */
  sourceLang: Lang;
};

type RawRecommendation = {
  company: string;
  logo?: string;
  role: Record<Lang, string>;
  relationship: Record<Lang, string>;
  /** Verbatim, exactly as written in the letter. Never edited. */
  quote: string;
  sourceLang: Lang;
  /** Translation shown when the page language is not `sourceLang`. */
  translation: Partial<Record<Lang, string>>;
};

const recommendations: RawRecommendation[] = [
  {
    company: "Colonies",
    logo: "/img/logos/colonies.jpg",
    role: { en: "Tech Lead", fr: "Tech Lead" },
    relationship: { en: "Direct manager", fr: "Manager direct" },
    sourceLang: "en",
    quote:
      "He was not simply keeping the lights on; he improved what he inherited. Any organisation looking for a data engineer who can own a modern stack and speak credibly to the business at the same time would be fortunate to have him.",
    translation: {
      fr: "Il ne s'est pas contenté de maintenir l'existant ; il a amélioré ce dont il a hérité. Toute organisation cherchant un data engineer capable de piloter une stack moderne tout en parlant avec crédibilité au métier aurait de la chance de l'avoir.",
    },
  },
  {
    company: "Kering Technologies",
    logo: "/img/logos/kering.jpg",
    role: { en: "Lead, Data Analytics", fr: "Lead Data Analytics" },
    relationship: { en: "Direct manager", fr: "Manager direct" },
    sourceLang: "en",
    quote:
      "His initiative has helped the commercial teams make data-driven decisions to optimize sales processes. His ability to combine technical rigor with business understanding makes him a valuable asset to any data team.",
    translation: {
      fr: "Son initiative a aidé les équipes commerciales à prendre des décisions fondées sur la donnée pour optimiser les processus de vente. Sa capacité à combiner rigueur technique et compréhension du métier en fait un atout précieux pour toute équipe data.",
    },
  },
  {
    company: "Accenture Song",
    logo: "/img/logos/accenture.jpg",
    role: {
      en: "Delivery Market Lead, Senior Manager",
      fr: "Delivery Market Lead, Senior Manager",
    },
    relationship: { en: "Direct manager", fr: "Manager direct" },
    sourceLang: "en",
    quote:
      "Always focused on the task at hand, quick and diligent and with a very pleasant personality. Any venture who will consider Triet as an employee will get an excellent individual who is hard working with profound data science knowledge that will strengthen the team's performance.",
    translation: {
      fr: "Toujours concentré sur la tâche en cours, rapide et rigoureux, et d'un contact très agréable. Toute entreprise qui envisagera de recruter Triet obtiendra un excellent profil, travailleur, doté d'une solide connaissance de la data science qui renforcera la performance de l'équipe.",
    },
  },
  {
    company: "Dassault Systèmes",
    logo: "/img/logos/dassault-systemes.jpg",
    role: {
      en: "R&D Software Engineering Director",
      fr: "Directeur R&D Software Engineering",
    },
    relationship: { en: "Manager's manager (N+2)", fr: "Manager de mon manager (N+2)" },
    sourceLang: "fr",
    quote:
      "Minh Triet LAM est très volontaire et organisé dans les missions qui lui sont confiées. Il va de l'avant et surmonte les difficultés avec persévérance.",
    translation: {
      en: "Minh Triet LAM is highly committed and organised in the assignments entrusted to him. He moves things forward and overcomes difficulties with perseverance.",
    },
  },
];

/** Newest employer first, matching the order of the experience timeline. */
export function getRecommendations(lang: Lang): Recommendation[] {
  return recommendations.map((r) => ({
    role: r.role[lang],
    company: r.company,
    relationship: r.relationship[lang],
    logo: r.logo,
    quote: r.quote,
    sourceLang: r.sourceLang,
    translation: r.sourceLang === lang ? undefined : r.translation[lang],
  }));
}

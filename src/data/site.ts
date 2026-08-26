// CV-SYNC | CV source of truth: c:/Users/lammi/endeavor/en.tex (EN), c:/Users/lammi/endeavor/fr.tex (FR).
// CV-SYNC | This file repeats CV facts. Edit the .tex first, then propagate here.
// CV-SYNC | Full propagation list: search CV-SYNC-REGISTRY inside either .tex file.

import type { Lang } from "../i18n/utils";

// Language invariant facts.
const shared = {
  name: "Thierry Triet LAM",
  firstName: "Thierry",
  email: "thierrylam.aifr@gmail.com",
  location: "Paris, France",
  calendly: "https://calendly.com/thierrylam-aifr/30min",
  // Google Search Console ownership token. Paste the value from the "HTML tag"
  // verification method; the meta tag below renders only when this is set.
  googleSiteVerification: "",
  links: {
    linkedin: "https://www.linkedin.com/in/thierrytrietlam",
    github: "https://github.com/thierrytrietlam",
    // One CV per language: visitors pick EN or FR without switching the site
    // language. These are the real LaTeX CVs copied from the endeavor root by
    // scripts/gen_assets.py; the explicit filename is what the browser saves,
    // so recruiters immediately see whose CV it is.
    cvEn: "/CV_full_Thierry_Triet_LAM_en.pdf",
    cvFr: "/CV_full_Thierry_Triet_LAM_fr.pdf",
  },
};

// Localized facts. Text mirrors the CV (api_freew/cv_detail.md).
const byLang = {
  en: {
    role: "Senior Analytics Engineer · Data Platform & Business Impact",
    eyebrow: "Senior Analytics Engineer",
    headline: "I turn raw data into platforms teams trust.",
    subhead:
      "Data and analytics engineer based in Paris, France. Five years designing and owning analytics platforms end to end, from cloud architecture and dbt modeling to BI delivery and business adoption, with AI integrated into my daily workflow.",
    yearsExperience: "5+ years",
    languages: ["French", "English", "Vietnamese"],
    aboutLead:
      "Five years designing and owning analytics platforms end to end, from cloud architecture to the dashboards leadership actually opens: nearly 60 dbt data projects for 9 companies across France, the UK, the US and Germany.",
    aboutClose:
      "What you get is a platform that is tested, documented and self service, so your team spends less time fixing data and more time deciding with it. Building or fixing a data platform? I would like to hear about it.",
  },
  fr: {
    role: "Ingénieur Analytics Senior · Plateforme de Données & Impact Métier",
    eyebrow: "Ingénieur Analytics Senior",
    headline: "Je transforme la donnée brute en plateformes de confiance.",
    subhead:
      "Ingénieur data et analytics basé à Paris, France. Cinq ans à concevoir et piloter des plateformes analytiques de bout en bout, de l'architecture cloud et la modélisation dbt à la livraison BI et l'adoption métier, avec l'IA intégrée à mon quotidien.",
    yearsExperience: "5+ ans",
    languages: ["Français", "Anglais", "Vietnamien"],
    aboutLead:
      "Cinq ans à concevoir et piloter des plateformes analytiques de bout en bout, de l'architecture cloud aux tableaux de bord que la direction ouvre vraiment : près de 60 projets data dbt pour 9 entreprises en France, au Royaume-Uni, aux États-Unis et en Allemagne.",
    aboutClose:
      "Au final, vous obtenez une plateforme testée, documentée et self service : votre équipe passe moins de temps à réparer la donnée et plus de temps à décider avec. Vous construisez ou réparez une plateforme data ? J'aimerais en parler.",
  },
} satisfies Record<Lang, unknown>;

export function getSite(lang: Lang) {
  return { ...shared, ...byLang[lang] };
}

export type Site = ReturnType<typeof getSite>;

import type { Lang } from "../i18n/utils";

// Language invariant facts.
const shared = {
  name: "Thierry Triet LAM",
  firstName: "Thierry",
  email: "thierrylam.aifr@gmail.com",
  location: "Paris, France",
  calendly: "https://calendly.com/thierrylam-aifr/30min",
  links: {
    linkedin: "https://www.linkedin.com/in/thierrytrietlam",
    github: "https://github.com/thierrytrietlam",
    // One CV per language: visitors pick EN or FR without switching the site
    // language. These are the real LaTeX CVs copied from the job2026 root by
    // scripts/gen_assets.py; the explicit filename is what the browser saves,
    // so recruiters immediately see whose CV it is.
    cvEn: "/CV_full_Thierry_Triet_LAM_en.pdf",
    cvFr: "/CV_full_Thierry_Triet_LAM_fr.pdf",
  },
};

// Localized facts. Text mirrors the CV (en.MD / fr.md).
const byLang = {
  en: {
    role: "Senior Analytics Engineer · Data Platform & Architecture Specialist",
    eyebrow: "Senior Analytics Engineer",
    headline: "I turn raw data into platforms teams trust.",
    subhead:
      "Data and analytics engineer based in Paris, France. Five years designing and owning analytics platforms end to end, from cloud architecture and dbt modeling to BI delivery, with AI integrated into my daily workflow.",
    yearsExperience: "5+ years",
    languages: ["French", "English", "Vietnamese"],
    aboutLead:
      "For five years I have designed and owned analytics platforms end to end, from cloud architecture to the dashboards leadership actually opens. I turn fragmented sources into tested, reconciled data marts for Finance, Marketing, Supply Chain and Sales: nearly 60 dbt data projects for 9 clients across 5 countries, France, the UK, the US, Germany and Vietnam.",
    platformsIntro: "I have rebuilt three data platforms from scratch:",
    platforms: [
      { name: "Colonies", text: "225 production dbt models, solo, from Finance to Asset Management." },
      { name: "Kering", text: "a 3,000 line SQL monolith broken into clean dbt models, and the Refused Store project that recovered 92% of a nearly €2M revenue shortfall." },
      { name: "Connecty AI", text: "a full stack (Snowflake, dbt, Power BI) with an LLM semantic layer." },
    ],
    aboutClose:
      "What you get is a platform that is tested, documented and self service, so your team spends less time fixing data and more time deciding with it. Building or fixing a data platform? I would like to hear about it.",
  },
  fr: {
    role: "Ingénieur Analytics Senior · Spécialiste Plateforme & Architecture de Données",
    eyebrow: "Ingénieur Analytics Senior",
    headline: "Je transforme la donnée brute en plateformes de confiance.",
    subhead:
      "Ingénieur data et analytics basé à Paris, France. Cinq ans à concevoir et piloter des plateformes analytiques de bout en bout, de l'architecture cloud et la modélisation dbt à la livraison BI, avec l'IA intégrée à mon quotidien.",
    yearsExperience: "5+ ans",
    languages: ["Français", "Anglais", "Vietnamien"],
    aboutLead:
      "Depuis cinq ans, je conçois et pilote des plateformes analytiques de bout en bout, de l'architecture cloud jusqu'aux tableaux de bord que la direction ouvre vraiment. Je transforme des sources éclatées en data marts testés et réconciliés pour la Finance, le Marketing, la Supply Chain et les Ventes : près de 60 projets data en dbt pour 9 clients dans 5 pays, France, Royaume-Uni, États-Unis, Allemagne et Vietnam.",
    platformsIntro: "J'ai reconstruit trois plateformes data depuis zéro :",
    platforms: [
      { name: "Colonies", text: "225 modèles dbt en production, en solo, de la Finance à l'Asset Management." },
      { name: "Kering", text: "un monolithe SQL de 3 000 lignes découpé en modèles dbt propres, et le projet Refused Store qui a récupéré 92 % d'un manque à gagner de près de 2 M€." },
      { name: "Connecty AI", text: "une stack complète (Snowflake, dbt, Power BI) avec couche sémantique LLM." },
    ],
    aboutClose:
      "Au final, vous obtenez une plateforme testée, documentée et self service : votre équipe passe moins de temps à réparer la donnée et plus de temps à décider avec. Vous construisez ou réparez une plateforme data ? J'aimerais en parler.",
  },
} satisfies Record<Lang, unknown>;

export function getSite(lang: Lang) {
  return { ...shared, ...byLang[lang] };
}

export type Site = ReturnType<typeof getSite>;

import type { Lang } from "../i18n/utils";

// Value proposition: six cards, each one a shipped result from the CV.
// Four business domains (the profile's stated specialties) plus the two
// differentiators: platform rebuilds and AI leverage. Colors are literal
// Tailwind classes (keyed per card) so the JIT compiler emits them and no
// inline style is needed.
export type ValueCard = {
  icon: string;
  chip: string;
  metricColor: string;
  kicker: string;
  title: string;
  body: string;
  metric: string;
};

type RawCard = {
  icon: string;
  chip: string;
  metricColor: string;
  kicker: { en: string; fr: string };
  title: { en: string; fr: string };
  body: { en: string; fr: string };
  metric: { en: string; fr: string };
};

const cards: RawCard[] = [
  {
    icon: "lucide:landmark",
    chip: "text-[#059669] bg-[#059669]/10",
    metricColor: "text-[#059669] dark:text-[#34D399]",
    kicker: { en: "Finance", fr: "Finance" },
    title: { en: "Payment reconciliation", fr: "Réconciliation des paiements" },
    body: {
      en: "Multi entity, multi currency payments consolidated into one Finance mart, safeguarded by reconciliation and automated quality tests.",
      fr: "Des paiements multi-entités et multi-devises consolidés dans un Data Mart Finance unique, fiabilisé par réconciliation et tests qualité automatisés.",
    },
    metric: {
      en: "35 Stripe accounts · 6 entities · 4 countries",
      fr: "35 comptes Stripe · 6 entités · 4 pays",
    },
  },
  {
    icon: "lucide:boxes",
    chip: "text-[#E97627] bg-[#E97627]/10",
    metricColor: "text-[#C2410C] dark:text-[#FDBA74]",
    kicker: { en: "Supply chain", fr: "Supply chain" },
    title: { en: "Stock distribution", fr: "Distribution des stocks" },
    body: {
      en: "The Refused Store project: OMS, Salesforce and SAP crossed to expose in store order refusals and drive corrective action.",
      fr: "Le projet Refused Store : OMS, Salesforce et SAP croisés pour révéler les refus de commandes en magasin et déclencher les actions correctives.",
    },
    metric: {
      en: "€2M annual revenue loss, cut by 92%",
      fr: "2 M€ de manque à gagner annuel, réduit de 92 %",
    },
  },
  {
    icon: "lucide:target",
    chip: "text-[#DB2777] bg-[#DB2777]/10",
    metricColor: "text-[#DB2777] dark:text-[#F472B6]",
    kicker: { en: "Marketing", fr: "Marketing" },
    title: { en: "Lead attribution", fr: "Attribution des leads" },
    body: {
      en: "CRMs and marketing spend matched into one attribution model, with funnel models that follow every euro from acquisition to revenue.",
      fr: "CRM et dépenses marketing rapprochés dans un modèle d'attribution unique, avec des funnels qui suivent chaque euro de l'acquisition au revenu.",
    },
    metric: {
      en: "Salesforce · Pipedrive · GA4 · Meta Ads, unified",
      fr: "Salesforce · Pipedrive · GA4 · Meta Ads, unifiés",
    },
  },
  {
    icon: "lucide:shopping-bag",
    chip: "text-[#2D5BFF] bg-[#2D5BFF]/10",
    metricColor: "text-[#2D5BFF] dark:text-[#5B82FF]",
    kicker: { en: "Sales", fr: "Ventes" },
    title: { en: "Omnichannel reporting", fr: "Reporting omnicanal" },
    body: {
      en: "International sales consolidated with forex conversion and order lifecycle control: one trusted view of group performance.",
      fr: "Des ventes internationales consolidées avec conversion de devises et contrôle du cycle de vie des commandes : une vue groupe fiable.",
    },
    metric: {
      en: "4 luxury brands · group wide KPIs",
      fr: "4 maisons de luxe · KPIs à l'échelle du groupe",
    },
  },
  {
    icon: "lucide:layers",
    chip: "text-[#7C3AED] bg-[#7C3AED]/10",
    metricColor: "text-[#7C3AED] dark:text-[#A78BFA]",
    kicker: { en: "Platform", fr: "Plateforme" },
    title: { en: "Rebuilds, from scratch or legacy", fr: "Refontes, de zéro ou sur legacy" },
    body: {
      en: "Three platforms rebuilt in three contexts: solo greenfield, a legacy monolith broken down, and a startup stack stood up from nothing.",
      fr: "Trois plateformes reconstruites dans trois contextes : greenfield en solo, un monolithe legacy découpé, et une stack de startup montée de zéro.",
    },
    metric: {
      en: "3 platforms · 225 models solo in production",
      fr: "3 plateformes · 225 modèles en solo en production",
    },
  },
  {
    icon: "lucide:sparkles",
    chip: "text-[#D97706] bg-[#D97706]/10",
    metricColor: "text-[#B45309] dark:text-[#FBBF24]",
    kicker: { en: "AI & LLM", fr: "IA & LLM" },
    title: { en: "AI accelerated engineering", fr: "Ingénierie accélérée par l'IA" },
    body: {
      en: "AI agents run in parallel to analyze context, verify, develop and test automatically, with Claude Code at the core of the workflow.",
      fr: "Des agents IA en parallèle pour analyser le contexte, vérifier, développer et tester automatiquement, avec Claude Code au cœur du workflow.",
    },
    metric: {
      en: "~80% of working time saved",
      fr: "~80 % de temps de travail économisé",
    },
  },
];

export function getValueCards(lang: Lang): ValueCard[] {
  return cards.map((c) => ({
    icon: c.icon,
    chip: c.chip,
    metricColor: c.metricColor,
    kicker: c.kicker[lang],
    title: c.title[lang],
    body: c.body[lang],
    metric: c.metric[lang],
  }));
}

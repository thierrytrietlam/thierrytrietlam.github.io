import type { Lang } from "../i18n/utils";

// Core stack: 8 tiles, two rows of four on desktop. Each tile carries the
// brand color of the tool and a short proof line drawn from the CV: a hard
// number plus the architecture or method behind it. The old tag-wall groups
// were removed; their essential concepts are folded into these notes, and the
// tooling long tail lives in the Platform section.
export type CoreSkill = { name: string; icon: string; color: string; note: string };

type RawCore = { name: string; icon: string; color: string; en: string; fr: string };

const core: RawCore[] = [
  {
    name: "BigQuery",
    icon: "simple-icons:googlebigquery",
    color: "#4386FA",
    en: "4 years · Medallion at scale · Data Mesh at Kering",
    fr: "4 ans · Médaillon à l'échelle · Data Mesh chez Kering",
  },
  {
    name: "dbt",
    icon: "simple-icons:dbt",
    color: "#FF694A",
    en: "~1,000 models across 60 projects · Medallion · 3NF",
    fr: "~1 000 modèles sur 60 projets · Médaillon · 3NF",
  },
  {
    name: "SQL",
    icon: "lucide:database",
    color: "#64748B",
    en: "A 3,000 line monolith refactored · star schema · data marts",
    fr: "Monolithe de 3 000 lignes refondu · schéma en étoile · data marts",
  },
  {
    name: "Tableau",
    icon: "simple-icons:tableau",
    color: "#E97627",
    en: "LOD · the Refused Store dashboard · quality monitoring",
    fr: "LOD · dashboard Refused Store · monitoring qualité",
  },
  {
    name: "Power BI",
    icon: "simple-icons:powerbi",
    color: "#F2C811",
    en: "DAX & Power Query · migrated into dbt, versioned and tested",
    fr: "DAX & Power Query · migrés en dbt, versionnés et testés",
  },
  {
    name: "Snowflake",
    icon: "simple-icons:snowflake",
    color: "#29B5E8",
    en: "Full stack from zero · LLM semantic layer · resource monitors",
    fr: "Stack complète de zéro · couche sémantique LLM · resource monitors",
  },
  {
    name: "AWS",
    icon: "simple-icons:amazonwebservices",
    color: "#FF9900",
    en: "Athena · Redshift · S3 · a dbt platform migrated to GCP",
    fr: "Athena · Redshift · S3 · plateforme dbt migrée vers GCP",
  },
  {
    name: "Git & AI",
    icon: "lucide:sparkles",
    color: "#8B5CF6",
    en: "Claude Code daily · parallel AI agents · LLM benchmarking",
    fr: "Claude Code au quotidien · agents IA en parallèle · benchmark de LLM",
  },
];

export function getCoreSkills(lang: Lang): CoreSkill[] {
  return core.map((c) => ({ name: c.name, icon: c.icon, color: c.color, note: c[lang] }));
}

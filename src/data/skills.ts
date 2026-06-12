import type { Lang } from "../i18n/utils";

// Core stack: 8 tiles, two rows of four on desktop. Each tile carries the
// brand color of the tool and a one line proof point drawn from the CV.
export type CoreSkill = { name: string; icon: string; color: string; note: string };
export type SkillGroup = { title: string; items: string[] };

type RawCore = { name: string; icon: string; color: string; en: string; fr: string };
type RawGroup = { title: { en: string; fr: string }; items: { en: string; fr?: string }[] };

const core: RawCore[] = [
  {
    name: "BigQuery",
    icon: "simple-icons:googlebigquery",
    color: "#4386FA",
    en: "4 years · Medallion at scale",
    fr: "4 ans · Médaillon à l'échelle",
  },
  {
    name: "dbt",
    icon: "simple-icons:dbt",
    color: "#FF694A",
    en: "~1,000 models across 60 projects",
    fr: "~1 000 modèles sur 60 projets",
  },
  {
    name: "SQL",
    icon: "lucide:database",
    color: "#64748B",
    en: "A 3,000 line monolith, refactored",
    fr: "Un monolithe de 3 000 lignes, refondu",
  },
  {
    name: "Tableau",
    icon: "simple-icons:tableau",
    color: "#E97627",
    en: "LOD · the €2M Refused Store dashboard",
    fr: "LOD · le dashboard Refused Store (2 M€)",
  },
  {
    name: "Power BI",
    icon: "simple-icons:powerbi",
    color: "#F2C811",
    en: "DAX and Power Query, versioned in dbt",
    fr: "DAX et Power Query, versionnés en dbt",
  },
  {
    name: "Snowflake",
    icon: "simple-icons:snowflake",
    color: "#29B5E8",
    en: "Full stack with an LLM semantic layer",
    fr: "Stack complète avec couche sémantique LLM",
  },
  {
    name: "AWS",
    icon: "simple-icons:amazonwebservices",
    color: "#FF9900",
    en: "Athena, Redshift, S3 · migrated to GCP",
    fr: "Athena, Redshift, S3 · migrés vers GCP",
  },
  {
    name: "Git & AI",
    icon: "lucide:sparkles",
    color: "#8B5CF6",
    en: "Claude Code in the daily workflow",
    fr: "Claude Code dans le quotidien",
  },
];

const groups: RawGroup[] = [
  {
    title: { en: "Warehouses & lakehouse", fr: "Entrepôts et lakehouse" },
    items: [{ en: "Databricks" }, { en: "AWS Athena" }, { en: "Redshift" }, { en: "Azure Synapse" }],
  },
  {
    title: { en: "Pipelines & ingestion", fr: "Pipelines et ingestion" },
    items: [{ en: "Airflow" }, { en: "PySpark" }, { en: "Airbyte" }, { en: "Fivetran" }, { en: "Python" }],
  },
  {
    title: { en: "Infrastructure & DevOps", fr: "Infrastructure et DevOps" },
    items: [{ en: "Terraform" }, { en: "Docker" }, { en: "Git" }, { en: "CI/CD" }, { en: "Linux / Bash" }],
  },
  {
    title: { en: "BI & visualization", fr: "BI et visualisation" },
    items: [{ en: "Looker (LookML)" }, { en: "Looker Studio" }, { en: "Plotly" }, { en: "Excel" }],
  },
  {
    title: { en: "AI & data platform", fr: "IA et plateforme data" },
    items: [
      { en: "Natural language to SQL", fr: "Langage naturel vers SQL" },
      { en: "LLM benchmarking", fr: "Benchmark de LLM" },
      { en: "Prompt engineering" },
      { en: "AI generated SQL validation", fr: "Validation de SQL généré par IA" },
      { en: "Claude Code" },
      { en: "RAG" },
      { en: "MCP" },
    ],
  },
  {
    title: { en: "Modeling & methods", fr: "Modélisation et méthodes" },
    items: [
      { en: "Dimensional modeling", fr: "Modélisation dimensionnelle" },
      { en: "Star schema", fr: "Schéma en étoile" },
      { en: "Data mart design", fr: "Conception de data marts" },
      { en: "Normalization (3NF)", fr: "Normalisation (3NF)" },
      { en: "Conceptual / Logical / Physical models", fr: "Modèles conceptuels / logiques / physiques" },
      { en: "Semantic layers", fr: "Couches sémantiques" },
      { en: "Medallion architecture", fr: "Architecture Médaillon" },
      { en: "ELT" },
      { en: "Data governance", fr: "Gouvernance des données" },
      { en: "UML" },
    ],
  },
];

export function getCoreSkills(lang: Lang): CoreSkill[] {
  return core.map((c) => ({ name: c.name, icon: c.icon, color: c.color, note: c[lang] }));
}

export function getSkillGroups(lang: Lang): SkillGroup[] {
  return groups.map((g) => ({
    title: g.title[lang],
    items: g.items.map((i) => (lang === "fr" && i.fr ? i.fr : i.en)),
  }));
}

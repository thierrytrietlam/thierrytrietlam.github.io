import type { Lang } from "../i18n/utils";

// The reference pipeline: source systems → managed ingestion → governed
// warehouse modeled in dbt → BI tools → business domains. Every node comes
// from a real mission (Colonies, Kering, Connecty AI); Okaneo is the PIM in
// the current scope. Chip colors are literal Tailwind classes (JIT-safe);
// edge colors are SVG stroke attributes set by the overlay script.
export type PlatformNode = {
  id: string;
  name: string;
  icon: string;
  chip: string;
  tag: string;
};

export type PlatformEdge = {
  from: string;
  to: string;
  color: string;
  width?: number;
};

type L = { en: string; fr: string };
type RawNode = { id: string; name: string | L; icon: string; chip: string; tag: L };

const sources: RawNode[] = [
  {
    id: "sap",
    name: "SAP S/4HANA",
    icon: "simple-icons:sap",
    chip: "text-[#0FAAFF] bg-[#0FAAFF]/10",
    tag: { en: "ERP · Finance", fr: "ERP · Finance" },
  },
  {
    id: "oms",
    name: "OMS Manhattan",
    icon: "lucide:warehouse",
    chip: "text-[#D22630] bg-[#D22630]/10",
    tag: { en: "Order management", fr: "Gestion des commandes" },
  },
  {
    id: "pim",
    name: "Okaneo",
    icon: "lucide:tags",
    chip: "text-[#0EA5A4] bg-[#0EA5A4]/10",
    tag: { en: "PIM · Product", fr: "PIM · Produit" },
  },
  {
    id: "sfdc",
    name: "Salesforce",
    icon: "simple-icons:salesforce",
    chip: "text-[#00A1E0] bg-[#00A1E0]/10",
    tag: { en: "CRM", fr: "CRM" },
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: "simple-icons:stripe",
    chip: "text-[#635BFF] bg-[#635BFF]/10",
    tag: { en: "Payments", fr: "Paiements" },
  },
  {
    id: "ga4",
    name: "GA4",
    icon: "simple-icons:googleanalytics",
    chip: "text-[#E37400] bg-[#E37400]/10",
    tag: { en: "Web analytics", fr: "Analytics web" },
  },
  {
    id: "s3",
    name: "Amazon S3",
    icon: "simple-icons:amazons3",
    chip: "text-[#569A31] bg-[#569A31]/10",
    tag: { en: "Files · object storage", fr: "Fichiers · stockage objet" },
  },
];

const alsoSources = ["Pipedrive", "Shopify", "Typeform", "Airtable", "Meta Ads", "Search Console"];

const ingestionTools: RawNode[] = [
  {
    id: "fivetran",
    name: "Fivetran",
    icon: "lucide:plug-zap",
    chip: "text-[#0073FF] bg-[#0073FF]/10",
    tag: { en: "Managed EL", fr: "EL managé" },
  },
  {
    id: "airbyte",
    name: "Airbyte",
    icon: "simple-icons:airbyte",
    chip: "text-[#615EFF] bg-[#615EFF]/10",
    tag: { en: "Open connectors", fr: "Connecteurs open source" },
  },
];

const ingestionNote: L = {
  en: "Incremental syncs · Python & PySpark for the long tail",
  fr: "Syncs incrémentales · Python & PySpark pour le reste",
};

// The layer funnel: narrowing bars, names only — refinement shown by shape
// instead of words. Names follow dbt's project structure convention (not the
// Bronze/Silver/Gold medallion vocabulary), identical in both languages.
// Raw is the landing zone written by the EL tools and read by dbt as sources,
// so it gets a dashed outline; dbt builds the three solid layers below it.
// Colors and widths are literal Tailwind classes so the JIT emits them.
const layers: { name: string; dot: string; bar: string; w: string }[] = [
  { name: "Raw", dot: "bg-[#B45309]", bar: "border-dashed border-[#B45309]/40 bg-[#B45309]/5", w: "w-full" },
  { name: "Staging", dot: "bg-[#94A3B8]", bar: "border-transparent bg-[#94A3B8]/15", w: "w-[85%]" },
  { name: "Intermediate", dot: "bg-[#38BDF8]", bar: "border-transparent bg-[#38BDF8]/10", w: "w-[70%]" },
  { name: "Marts", dot: "bg-[#EAB308]", bar: "border-transparent bg-[#EAB308]/15", w: "w-[55%]" },
];

// Career-wide counts (60 dbt projects across 9 companies), not one warehouse.
const badges: L[] = [
  { en: "~1,000 models · 60 projects", fr: "~1 000 modèles · 60 projets" },
  { en: "139 SCD2 snapshots", fr: "139 snapshots SCD2" },
  { en: "CI-tested on every PR", fr: "CI à chaque PR" },
];

const bi: RawNode[] = [
  {
    id: "tab",
    name: "Tableau",
    icon: "simple-icons:tableau",
    chip: "text-[#E97627] bg-[#E97627]/10",
    tag: { en: "LOD · exec dashboards", fr: "LOD · dashboards direction" },
  },
  {
    id: "pbi",
    name: "Power BI",
    icon: "simple-icons:powerbi",
    chip: "text-[#F2C811] bg-[#F2C811]/10",
    tag: { en: "DAX · Power Query", fr: "DAX · Power Query" },
  },
  {
    id: "lkr",
    name: "Looker Studio",
    icon: "simple-icons:looker",
    chip: "text-[#4285F4] bg-[#4285F4]/10",
    tag: { en: "Self-service reporting", fr: "Reporting self-service" },
  },
];

const domains: RawNode[] = [
  {
    id: "fin",
    name: "Finance",
    icon: "lucide:landmark",
    chip: "text-[#059669] bg-[#059669]/10",
    tag: { en: "Payments reconciled to the cent", fr: "Paiements réconciliés au centime" },
  },
  {
    id: "mkt",
    name: "Marketing",
    icon: "lucide:target",
    chip: "text-[#DB2777] bg-[#DB2777]/10",
    tag: { en: "Every lead tied to revenue", fr: "Chaque lead relié au revenu" },
  },
  {
    id: "sup",
    name: "Supply Chain",
    icon: "lucide:boxes",
    chip: "text-[#E97627] bg-[#E97627]/10",
    tag: { en: "Stock aligned with demand", fr: "Le stock aligné sur la demande" },
  },
  {
    id: "sal",
    name: { en: "Sales", fr: "Ventes" },
    icon: "lucide:shopping-bag",
    chip: "text-[#2D5BFF] bg-[#2D5BFF]/10",
    tag: { en: "4 brands · forex consolidated", fr: "4 maisons · consolidé en devises" },
  },
];

// Every edge is a real flow: which source feeds the platform, which BI tool
// serves which domain on my missions. Colors follow the upstream brand.
const edges: PlatformEdge[] = [
  { from: "sap", to: "el", color: "#0FAAFF" },
  { from: "oms", to: "el", color: "#D22630" },
  { from: "pim", to: "el", color: "#0EA5A4" },
  { from: "sfdc", to: "el", color: "#00A1E0" },
  { from: "stripe", to: "el", color: "#635BFF" },
  { from: "ga4", to: "el", color: "#E37400" },
  { from: "s3", to: "el", color: "#569A31" },
  { from: "el", to: "wh", color: "#2D5BFF", width: 2.6 },
  { from: "wh", to: "tab", color: "#E97627" },
  { from: "wh", to: "pbi", color: "#F2C811" },
  { from: "wh", to: "lkr", color: "#4285F4" },
  { from: "tab", to: "sup", color: "#E97627" },
  { from: "tab", to: "sal", color: "#E97627" },
  { from: "pbi", to: "mkt", color: "#F2C811" },
  { from: "lkr", to: "fin", color: "#4285F4" },
  { from: "lkr", to: "mkt", color: "#4285F4" },
];

const crosscut: { icon: string; title: L; items: L[] }[] = [
  {
    icon: "lucide:workflow",
    title: { en: "Orchestration & CI/CD", fr: "Orchestration & CI/CD" },
    items: [
      { en: "Airflow", fr: "Airflow" },
      { en: "dbt Cloud", fr: "dbt Cloud" },
      { en: "GitHub Actions", fr: "GitHub Actions" },
      { en: "Terraform", fr: "Terraform" },
      { en: "Docker", fr: "Docker" },
    ],
  },
  {
    icon: "lucide:shield-check",
    title: { en: "Quality & observability", fr: "Qualité & observabilité" },
    items: [
      { en: "Freshness & volume tests", fr: "Tests fraîcheur & volume" },
      { en: "Reconciliation to source", fr: "Réconciliation à la source" },
      { en: "Monitoring dashboards", fr: "Dashboards de monitoring" },
    ],
  },
  {
    icon: "lucide:gauge",
    title: { en: "Governance & FinOps", fr: "Gouvernance & FinOps" },
    items: [
      { en: "Documentation & lineage", fr: "Documentation & lignage" },
      { en: "IAM & access", fr: "IAM & accès" },
      { en: "Warehouse cost control", fr: "Coûts warehouse maîtrisés" },
    ],
  },
];

const mapNode = (n: RawNode, lang: Lang): PlatformNode => ({
  id: n.id,
  name: typeof n.name === "string" ? n.name : n.name[lang],
  icon: n.icon,
  chip: n.chip,
  tag: n.tag[lang],
});

export function getPlatform(lang: Lang) {
  return {
    sources: sources.map((n) => mapNode(n, lang)),
    alsoSources,
    ingestionTools: ingestionTools.map((n) => mapNode(n, lang)),
    ingestionNote: ingestionNote[lang],
    layers,
    badges: badges.map((b) => b[lang]),
    bi: bi.map((n) => mapNode(n, lang)),
    domains: domains.map((n) => mapNode(n, lang)),
    edges,
    crosscut: crosscut.map((g) => ({
      icon: g.icon,
      title: g.title[lang],
      items: g.items.map((i) => i[lang]),
    })),
  };
}

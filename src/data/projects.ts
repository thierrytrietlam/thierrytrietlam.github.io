import type { Lang } from "../i18n/utils";

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  website?: string;
  logo?: string;
  sector?: string;
  role: string;
  period: string;
  team?: string;
  summary: string;
  metrics: CaseMetric[];
  approach: string[];
  stack: string[];
};

type Localized = {
  sector?: string;
  role: string;
  period: string;
  team?: string;
  summary: string;
  metrics: CaseMetric[];
  approach: string[];
};

type RawCaseStudy = {
  slug: string;
  client: string;
  website?: string;
  logo?: string;
  stack: string[];
  en: Localized;
  fr: Localized;
};

// Every role since 2021 (consulting and permanent), newest first. Facts and
// figures mirror the CV (en.MD / fr.md) in both languages. Stack tags stay
// language invariant.
const caseStudies: RawCaseStudy[] = [
  {
    slug: "colonies",
    client: "Colonies",
    website: "https://www.livecolonies.com",
    logo: "/img/logos/colonies.jpg",
    stack: ["dbt Cloud", "BigQuery", "Looker Studio", "Fivetran", "Stripe", "Salesforce", "Pipedrive", "SQL", "GitHub"],
    en: {
      sector: "Real estate · PropTech",
      role: "Senior Analytics Engineer Consultant",
      period: "Since March 2026",
      team: "Solo",
      summary:
        "Solo rebuild of the analytics platform of a European real estate operator: eight fragmented source systems turned into one tested BigQuery foundation covering Finance, Ops, Sales, Marketing and Asset Management.",
      metrics: [
        { value: "225", label: "production dbt models, owned solo, across five business domains" },
        { value: "1 + 35", label: "Stripe Connect: platform plus connected accounts (6 entities, 4 countries), reconciled in the Finance Data Mart" },
        { value: "139", label: "SCD2 snapshots tracking history, plus 16 automated quality tests" },
      ],
      approach: [
        "Reconciled payments across the Stripe Connect platform and 35 connected accounts, auditing fund routing through the Express to Standard migration.",
        "Attributed leads by matching Salesforce, Pipedrive and marketing spend; modeled the lease lifecycle and occupancy as reusable dimensions.",
        "Orchestrated dbt Cloud pipelines and rebuilt Looker Studio into self service reporting.",
      ],
    },
    fr: {
      sector: "Immobilier · PropTech",
      role: "Consultant Ingénieur Analytics Senior",
      period: "Depuis mars 2026",
      team: "En solo",
      summary:
        "Refonte en solo de la plateforme analytique d'un opérateur immobilier européen : huit systèmes sources fragmentés transformés en un socle BigQuery testé couvrant Finance, Opérations, Ventes, Marketing et Asset Management.",
      metrics: [
        { value: "225", label: "modèles dbt en production, en solo, sur cinq domaines métier" },
        { value: "1 + 35", label: "Stripe Connect : plateforme et comptes connectés (6 entités, 4 pays), réconciliés dans le Data Mart Finance" },
        { value: "139", label: "snapshots SCD2 pour l'historisation, plus 16 tests qualité automatisés" },
      ],
      approach: [
        "Réconciliation des paiements entre la plateforme Stripe Connect et 35 comptes connectés, avec audit du fund routing pendant la migration Express vers Standard.",
        "Attribution des leads par rapprochement de Salesforce, Pipedrive et des dépenses marketing ; cycle de vie des baux et occupation modélisés en dimensions réutilisables.",
        "Orchestration des pipelines dbt Cloud et refonte de Looker Studio en reporting self service.",
      ],
    },
  },
  {
    slug: "connecty-ai",
    client: "Connecty AI",
    website: "https://www.getconnectyai.com",
    logo: "/img/logos/connecty-ai.jpg",
    stack: ["Snowflake", "dbt", "Power BI", "Semantic layer", "GA4", "Facebook Ads", "Shopify", "LLM prompt engineering"],
    en: {
      sector: "Agentic AI startup · Remote, USA",
      role: "Founding AI Data Analyst",
      period: "Dec 2025 to Mar 2026",
      team: "Solo",
      summary:
        "First analytics hire at an agentic AI startup: stood up the internal data stack (Snowflake, dbt, Power BI) and validated the LLM natural language to SQL engine.",
      metrics: [
        { value: "20 → 10 min", label: "SQL generation time, halved by the semantic layer redesign" },
        { value: "3 axes", label: "LLM benchmark (accuracy, latency, cost) that guided the engine choice" },
        { value: "DAX → dbt", label: "measures extracted from TMDL files into versioned, testable models" },
      ],
      approach: [
        "Designed the JSON semantic layer and marketing funnel templates.",
        "Unified Facebook Ads, GA4 and Shopify in dbt, from acquisition to revenue.",
        "Tuned Snowflake warehouses and deployed resource monitors to keep costs under control.",
      ],
    },
    fr: {
      sector: "Startup IA agentique · Remote, USA",
      role: "Analyste de Données IA Fondateur",
      period: "Déc 2025 à mars 2026",
      team: "En solo",
      summary:
        "Premier profil analytics d'une startup d'IA agentique : mise en place de la stack data interne (Snowflake, dbt, Power BI) et validation du moteur LLM de génération SQL en langage naturel.",
      metrics: [
        { value: "20 → 10 min", label: "de temps de génération SQL, divisé par deux par la refonte de la couche sémantique" },
        { value: "3 axes", label: "de benchmark LLM (précision, latence, coût) qui ont orienté le choix du moteur" },
        { value: "DAX → dbt", label: "mesures extraites des fichiers TMDL en modèles versionnés et testables" },
      ],
      approach: [
        "Conception de la couche sémantique (JSON) et des templates de funnel marketing.",
        "Unification de Facebook Ads, GA4 et Shopify dans dbt, de l'acquisition au revenu.",
        "Dimensionnement des warehouses Snowflake et resource monitors pour maîtriser les coûts.",
      ],
    },
  },
  {
    slug: "kering",
    client: "Kering",
    website: "https://www.kering.com",
    logo: "/img/logos/kering.jpg",
    stack: ["BigQuery", "dbt", "AWS (Athena, Redshift, S3)", "PySpark", "Airflow", "Airbyte", "Tableau", "Power BI", "Terraform", "Docker"],
    en: {
      sector: "Luxury retail",
      role: "Senior Analytics Engineer Consultant",
      period: "Feb 2023 to Dec 2025",
      team: "Platform team of 14",
      summary:
        "Inside Kering Technologies, I helped modernize the group analytics platform for global reporting, and my own initiative, the Refused Store project, turned stock distribution insight into recovered revenue.",
      metrics: [
        { value: "€2M", label: "revenue shortfall (2022 global sales): 92% recovered by the Refused Store project" },
        { value: "3,000", label: "line SQL monolith refactored into modular, tested dbt models" },
        { value: "4", label: "brands consolidated with forex conversion for group wide KPIs" },
      ],
      approach: [
        "Launched the Refused Store project on my own initiative: a Tableau dashboard crossing OMS, Salesforce and SAP on in store order refusals.",
        "Migrated the platform from AWS (Athena, S3) to BigQuery under a Medallion architecture.",
        "Implemented dbt checks (freshness, volume thresholds, parameter consistency) across all pipelines.",
      ],
    },
    fr: {
      sector: "Luxe",
      role: "Consultant Ingénieur Analytics Senior",
      period: "Fév 2023 à déc 2025",
      team: "Équipe plateforme de 14",
      summary:
        "Au sein de Kering Technologies, j'ai contribué à moderniser la plateforme analytique du groupe pour le reporting mondial, et mon initiative, le projet Refused Store, a transformé l'analyse de la distribution des stocks en revenu récupéré.",
      metrics: [
        { value: "2 M€", label: "de manque à gagner (ventes mondiales 2022) : 92 % résorbés par le projet Refused Store" },
        { value: "3 000", label: "lignes de SQL monolithique refondues en modèles dbt modulaires et testés" },
        { value: "4", label: "maisons consolidées avec conversion de devises pour les KPIs du groupe" },
      ],
      approach: [
        "Lancement, de ma propre initiative, du projet Refused Store : un dashboard Tableau croisant OMS, Salesforce et SAP sur les refus de commandes en magasin.",
        "Migration de la plateforme d'AWS (Athena, S3) vers BigQuery selon une architecture Médaillon.",
        "Mise en place de contrôles dbt (freshness, seuils de volume, cohérence des paramètres) sur l'ensemble des pipelines.",
      ],
    },
  },
  {
    slug: "accenture",
    client: "Accenture",
    website: "https://www.accenture.com",
    logo: "/img/logos/accenture.jpg",
    stack: ["SAP S/4HANA", "Salesforce SFMC", "SQL", "Tableau", "UML", "Data integration & ETL"],
    en: {
      sector: "Automotive CRM · Jaguar Land Rover",
      role: "CRM Data Architecture Consultant",
      period: "Aug 2022 to Jan 2023",
      team: "Team of 3 + offshore ops",
      summary:
        "CRM data architecture and integration for Jaguar Land Rover: SAP S/4HANA and Salesforce Marketing Cloud, serving sales, customer service and campaigns across five continents.",
      metrics: [
        { value: "5", label: "continents served by the CRM data integration" },
        { value: "95%", label: "incident resolution rate with SAP R&D through go live and hyper care" },
      ],
      approach: [
        "Built SQL extraction and segmentation pipelines automating de duplication, normalization and cleansing.",
        "Guaranteed data integrity across multiple sources and geographies, stabilizing operations through go live.",
      ],
    },
    fr: {
      sector: "CRM automobile · Jaguar Land Rover",
      role: "Consultant en Architecture de Données CRM",
      period: "Août 2022 à janv 2023",
      team: "Équipe de 3 + ops offshore",
      summary:
        "Architecture et intégration des données CRM pour Jaguar Land Rover : SAP S/4HANA et Salesforce Marketing Cloud, au service des ventes, du service client et des campagnes sur cinq continents.",
      metrics: [
        { value: "5", label: "continents servis par l'intégration des données CRM" },
        { value: "95 %", label: "de taux de résolution d'incidents avec la R&D SAP durant go live et hyper care" },
      ],
      approach: [
        "Construction de pipelines d'extraction et de segmentation SQL automatisant dédoublonnage, normalisation et nettoyage.",
        "Intégrité des données garantie sur des sources et géographies multiples, opérations stabilisées durant le go live.",
      ],
    },
  },
  {
    slug: "veepee",
    client: "Veepee",
    website: "https://www.veepee.com",
    logo: "/img/logos/veepee.jpg",
    stack: ["dbt", "BigQuery", "SQL Server", "GCP", "Airflow", "Python", "Docker", "GitLab"],
    en: {
      sector: "E commerce",
      role: "Data Governance Engineer",
      period: "Feb 2022 to Jun 2022",
      team: "Team of 6",
      summary:
        "Unified the data of companies acquired by Veepee into one centralized cloud warehouse, with shared analytics layers and governance.",
      metrics: [
        { value: "1", label: "governed, centralized warehouse unifying every acquired company" },
        { value: "E2E", label: "quality and governance rules across the whole data lifecycle" },
      ],
      approach: [
        "Developed dbt transformation models delivering business ready datasets.",
        "Established quality and governance rules, ensuring reliability across the data lifecycle.",
      ],
    },
    fr: {
      sector: "E commerce",
      role: "Ingénieur en Gouvernance de Données",
      period: "Fév 2022 à juin 2022",
      team: "Équipe de 6",
      summary:
        "Unification des données des sociétés acquises par Veepee au sein d'un entrepôt cloud centralisé, avec des couches analytiques et une gouvernance communes.",
      metrics: [
        { value: "1", label: "entrepôt centralisé et gouverné unifiant toutes les sociétés acquises" },
        { value: "E2E", label: "règles de qualité et de gouvernance sur tout le cycle de vie de la donnée" },
      ],
      approach: [
        "Développement de modèles de transformation dbt livrant des jeux de données prêts pour le métier.",
        "Définition des règles de qualité et de gouvernance, fiabilisant l'ensemble du cycle de vie.",
      ],
    },
  },
  {
    slug: "dassault-systemes",
    client: "Dassault Systèmes",
    website: "https://www.3ds.com",
    logo: "/img/logos/dassault-systemes.jpg",
    stack: ["SQL", "XML", "JSON", "C++", "WebAssembly", "Emscripten", "JavaScript", "Linux"],
    en: {
      sector: "Industrial software · R&D",
      role: "Data Architecture Engineer",
      period: "Apr 2021 to Dec 2021",
      team: "Team of 6",
      summary:
        "R&D role on the 3DEXPERIENCE platform, owning the data architecture of scalable SaaS systems.",
      metrics: [
        { value: "Data lake", label: "data models, metadata frameworks and storage layers: its groundwork" },
        { value: "WASM", label: "components integrated via Emscripten, aligned with application constraints" },
      ],
      approach: [
        "Engineered data models, metadata frameworks and storage layers for the data lake foundation.",
        "Integrated components via WebAssembly (Emscripten), aligning the data system with application constraints.",
      ],
    },
    fr: {
      sector: "Logiciel industriel · R&D",
      role: "Ingénieur en Architecture de Données",
      period: "Avr 2021 à déc 2021",
      team: "Équipe de 6",
      summary:
        "Rôle de R&D sur la plateforme 3DEXPERIENCE, en charge de l'architecture de données de systèmes SaaS scalables.",
      metrics: [
        { value: "Data lake", label: "modèles de données, frameworks de métadonnées et couches de stockage : ses fondations" },
        { value: "WASM", label: "composants intégrés via Emscripten, alignés sur les contraintes applicatives" },
      ],
      approach: [
        "Élaboration des modèles de données, des frameworks de métadonnées et des couches de stockage du data lake.",
        "Intégration de composants via WebAssembly (Emscripten), alignant le système de données sur les contraintes applicatives.",
      ],
    },
  },
];

export function getCaseStudies(lang: Lang): CaseStudy[] {
  return caseStudies.map((c) => ({
    slug: c.slug,
    client: c.client,
    website: c.website,
    logo: c.logo,
    stack: c.stack,
    ...c[lang],
  }));
}

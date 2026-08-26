// CV-SYNC | CV source of truth: c:/Users/lammi/endeavor/en.tex (EN), c:/Users/lammi/endeavor/fr.tex (FR).
// CV-SYNC | This file repeats CV facts. Edit the .tex first, then propagate here.
// CV-SYNC | Full propagation list: search CV-SYNC-REGISTRY inside either .tex file.

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
    stack: ["dbt Cloud", "BigQuery", "Data Studio", "Fivetran", "Stripe", "Salesforce", "Pipedrive", "SQL", "GitHub"],
    en: {
      sector: "Real estate · PropTech",
      role: "Senior Analytics Engineer Consultant",
      period: "Since March 2026",
      team: "Solo",
      summary:
        "Solo rebuild of the analytics platform of a European real estate operator across four countries: eight fragmented source systems turned into one tested BigQuery foundation covering Finance, Ops, Sales, Marketing and Asset Management.",
      metrics: [
        { value: "225", label: "production dbt models, owned solo, across five business domains" },
        { value: "35", label: "Stripe accounts under one Stripe Connect platform account (6 entities, 4 countries), reconciled in the Finance Data Mart" },
        { value: "139", label: "SCD2 snapshots tracking history, plus 16 automated quality tests" },
      ],
      approach: [
        "Payments consolidated: 35 Stripe accounts under one Connect platform account reconciled, with fund routing audited through the Express to Standard migration.",
        "Acquisition cost and rental revenue tracked: Salesforce, Pipedrive and marketing spend matched, lease lifecycle and occupancy modeled as reusable dimensions.",
        "Reporting industrialized: dbt Cloud pipelines orchestrated, 139 SCD2 snapshots for history, Data Studio rebuilt as self service.",
      ],
    },
    fr: {
      sector: "Immobilier · PropTech",
      role: "Consultant Ingénieur Analytics Senior",
      period: "Depuis mars 2026",
      team: "En solo",
      summary:
        "Refonte en solo de la plateforme analytique d'un opérateur immobilier européen sur quatre pays : huit systèmes sources fragmentés transformés en un socle BigQuery testé couvrant Finance, Opérations, Ventes, Marketing et Asset Management.",
      metrics: [
        { value: "225", label: "modèles dbt en production, en solo, sur cinq domaines métier" },
        { value: "35", label: "comptes Stripe sous un compte plateforme Stripe Connect (6 entités, 4 pays), réconciliés dans le Data Mart Finance" },
        { value: "139", label: "snapshots SCD2 pour l'historisation, plus 16 tests qualité automatisés" },
      ],
      approach: [
        "Encaissements consolidés : 35 comptes Stripe sous un compte plateforme Connect réconciliés, avec audit du fund routing pendant la migration Express vers Standard.",
        "Coût d'acquisition et revenu locatif pilotés : Salesforce, Pipedrive et dépenses marketing rapprochés, cycle de vie des baux et occupation modélisés en dimensions réutilisables.",
        "Reporting industrialisé : pipelines dbt Cloud orchestrés, 139 snapshots SCD2 pour l'historisation, Data Studio refondu en self service.",
      ],
    },
  },
  {
    slug: "connecty-ai",
    client: "Connecty AI",
    website: "https://www.connectyai.com",
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
        { value: "−80%", label: "SQL generation time, cut by the semantic layer restructure" },
        { value: "3 axes", label: "LLM benchmark (accuracy, latency, cost) that guided the engine choice" },
        { value: "Power BI (DAX) → dbt", label: "measures extracted from TMDL files into versioned, testable models" },
      ],
      approach: [
        "Generation time reduced by 80%: semantic layer structure and marketing funnel templates optimized.",
        "Acquisition-to-revenue chain unified: Facebook Ads, GA4 and Shopify centralized in dbt.",
        "Cloud budget controlled: warehouse sizing, query profiles and resource monitors catching cost drift before billing.",
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
        { value: "−80 %", label: "de temps de génération SQL, grâce à la refonte de la structure de la couche sémantique" },
        { value: "3 axes", label: "de benchmark LLM (précision, latence, coût) qui ont orienté le choix du moteur" },
        { value: "Power BI (DAX) → dbt", label: "mesures extraites des fichiers TMDL en modèles versionnés et testables" },
      ],
      approach: [
        "Temps de génération réduit de 80 % : structure de la couche sémantique et templates de funnel marketing optimisés.",
        "Chaîne acquisition-revenu unifiée : Facebook Ads, GA4 et Shopify centralisés dans dbt.",
        "Budget cloud maîtrisé : dimensionnement des warehouses, query profiles et resource monitors pour détecter les dérives avant facturation.",
      ],
    },
  },
  {
    slug: "kering",
    client: "Kering",
    website: "https://www.kering.com",
    logo: "/img/logos/kering.jpg",
    stack: ["BigQuery", "dbt", "AWS (Athena, Redshift, S3)", "PySpark", "Airflow", "Airbyte", "Tableau", "Power BI", "Terraform", "Docker", "Agile (Scrum)"],
    en: {
      sector: "Luxury retail",
      role: "Senior Analytics Engineer Consultant",
      period: "Feb 2023 to Dec 2025",
      team: "Team of 14 · Digital Business Intelligence (DBI)",
      summary:
        "Inside Kering Technologies, I helped modernize the group analytics platform for global reporting across Sales, Omnichannel, Consumer Journey, Supply Chain and Marketing, and my own initiative, the Refused Store project, turned stock distribution insight into recovered revenue.",
      metrics: [
        { value: "€2M", label: "annual revenue loss (2022 global sales): cut by 92% with the Refused Store project" },
        { value: "3,000", label: "line SQL monolith refactored into modular, tested dbt models" },
        { value: "4", label: "brands consolidated with forex conversion and order lifecycle control for group wide KPIs" },
      ],
      approach: [
        "Revenue loss reduced by 92%: launched the Refused Store project on my own initiative, a Tableau dashboard crossing OMS, Salesforce and SAP on in store order refusals.",
        "Platform migrated to BigQuery: the dbt project moved off AWS Athena and S3 under a Medallion architecture, applying the group's Data Mesh strategy.",
        "Data quality industrialized: dbt checks for freshness, volume thresholds and parameter consistency, plus a Tableau dashboard letting business teams validate the metrics themselves.",
      ],
    },
    fr: {
      sector: "Luxe",
      role: "Consultant Ingénieur Analytics Senior",
      period: "Fév 2023 à déc 2025",
      team: "Équipe de 14 · Digital Business Intelligence (DBI)",
      summary:
        "Au sein de Kering Technologies, j'ai contribué à moderniser la plateforme analytique du groupe pour le reporting mondial, sur les domaines Ventes, Omnicanal, Parcours Consommateur, Supply Chain et Marketing, et mon initiative, le projet Refused Store, a transformé l'analyse de la distribution des stocks en revenu récupéré.",
      metrics: [
        { value: "2 M€", label: "de manque à gagner annuel (ventes mondiales 2022) : réduit de 92 % par le projet Refused Store" },
        { value: "3 000", label: "lignes de SQL monolithique refondues en modèles dbt modulaires et testés" },
        { value: "4", label: "maisons consolidées avec conversion de devises et contrôle du cycle de vie des commandes pour les KPIs du groupe" },
      ],
      approach: [
        "Manque à gagner réduit de 92 % : lancement à mon initiative du projet Refused Store, un dashboard Tableau croisant OMS, Salesforce et SAP sur les refus de commandes en magasin.",
        "Plateforme migrée vers BigQuery : projet dbt sorti d'AWS Athena et S3 selon une architecture Médaillon, en application de la stratégie Data Mesh du groupe.",
        "Qualité des données industrialisée : contrôles dbt (freshness, seuils de volume, cohérence des paramètres) et dashboard Tableau permettant aux équipes métier de valider elles-mêmes les indicateurs.",
      ],
    },
  },
  {
    slug: "accenture",
    client: "Accenture",
    website: "https://www.accenture.com",
    logo: "/img/logos/accenture.jpg",
    stack: ["SAP S/4HANA", "Salesforce Marketing Cloud", "SQL", "Tableau", "UML", "Data integration & ETL"],
    en: {
      sector: "Automotive CRM · Jaguar Land Rover",
      role: "CRM Data Architecture Consultant",
      period: "Aug 2022 to Jan 2023",
      team: "Team of 3 in Paris + offshore ops in Mumbai",
      summary:
        "International CRM transformation program for Jaguar Land Rover: SAP S/4HANA and Salesforce Marketing Cloud integrated to serve sales, customer service and campaigns across five continents.",
      metrics: [
        { value: "5", label: "continents served by the CRM data integration" },
        { value: "95%", label: "incident resolution rate with SAP R&D through go live and hyper care" },
      ],
      approach: [
        "CRM data reliability at international scale: SQL extraction and segmentation pipelines automating de duplication, normalization and cleansing.",
        "Stakeholder and incident management: 95% resolution rate with SAP R&D, stabilizing operations through go live and hyper care.",
      ],
    },
    fr: {
      sector: "CRM automobile · Jaguar Land Rover",
      role: "Consultant en Architecture de Données CRM",
      period: "Août 2022 à janv 2023",
      team: "Équipe de 3 à Paris + ops offshore à Mumbai",
      summary:
        "Programme international de transformation CRM pour Jaguar Land Rover : intégration des données entre SAP S/4HANA et Salesforce Marketing Cloud, au service des ventes, du service client et des campagnes sur cinq continents.",
      metrics: [
        { value: "5", label: "continents servis par l'intégration des données CRM" },
        { value: "95 %", label: "de taux de résolution d'incidents avec la R&D SAP durant go live et hyper care" },
      ],
      approach: [
        "Données CRM fiabilisées à l'échelle internationale : pipelines SQL d'extraction et de segmentation automatisant dédoublonnage, normalisation et nettoyage.",
        "Pilotage des parties prenantes et des incidents : 95 % de résolution avec la R&D SAP, opérations stabilisées durant le go live et l'hyper care.",
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
        "Post acquisition integration: unified the data of acquired companies into one centralized cloud warehouse, with shared analytics layers and governance.",
      metrics: [
        { value: "1", label: "governed, centralized warehouse unifying every acquired company" },
        { value: "End to End", label: "quality and governance rules across the whole data lifecycle" },
      ],
      approach: [
        "Business-oriented dbt models: transformation models delivering business ready datasets to the teams.",
        "Data quality and governance: rules established across the full data lifecycle, ensuring reliability.",
      ],
    },
    fr: {
      sector: "E commerce",
      role: "Ingénieur en Gouvernance de Données",
      period: "Fév 2022 à juin 2022",
      team: "Équipe de 6",
      summary:
        "Intégration post acquisition : unification des données des sociétés rachetées au sein d'un entrepôt cloud centralisé, avec des couches analytiques et une gouvernance communes.",
      metrics: [
        { value: "1", label: "entrepôt centralisé et gouverné unifiant toutes les sociétés acquises" },
        { value: "De bout en bout", label: "règles de qualité et de gouvernance sur tout le cycle de vie de la donnée" },
      ],
      approach: [
        "Modèles dbt orientés métier : modèles de transformation livrant des jeux de données directement exploitables.",
        "Qualité et gouvernance des données : règles définies sur l'ensemble du cycle de vie, avec fiabilisation de la donnée.",
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
        "Data lake foundations: data models, metadata frameworks and storage layers engineered for scalable SaaS systems.",
        "Data and application integration: components integrated through WebAssembly and Emscripten, aligning the data system with application constraints.",
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
        "Fondations du data lake : modèles de données, frameworks de métadonnées et couches de stockage pour des systèmes SaaS scalables.",
        "Intégration data et applicative : composants intégrés via WebAssembly et Emscripten, alignant le système de données sur les contraintes applicatives.",
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

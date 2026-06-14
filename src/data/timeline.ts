import type { Lang } from "../i18n/utils";

export type TimelineOrg = { name: string; url?: string; logo?: string };

export type TimelineItem = {
  kind: "work" | "education";
  title: string;
  org: string;
  url?: string;
  logo?: string;
  orgs?: TimelineOrg[];
  period: string;
  location?: string;
  detail: string;
};

// Per language org, used when an entry lists more than one institution
// (each renders on its own line) or needs a different link per language.
type RawOrg = { logo?: string; en: { name: string; url?: string }; fr: { name: string; url?: string } };

type RawTimeline = {
  kind: "work" | "education";
  org: string;
  url?: string;
  logo?: string;
  orgs?: RawOrg[];
  location?: string;
  en: { title: string; period: string; detail: string };
  fr: { title: string; period: string; detail: string };
};

// Newest first. Dates and facts taken from the CV (cv_detail.md), both languages.
const timeline: RawTimeline[] = [
  {
    kind: "work",
    org: "Colonies",
    url: "https://www.livecolonies.com",
    logo: "/img/logos/colonies.jpg",
    location: "Paris, France",
    en: {
      title: "Senior Analytics Engineer Consultant (Data Platform & Reporting)",
      period: "Since March 2026",
      detail:
        "Solo rebuild of the analytics platform for a European real estate operator. 225 production dbt models on BigQuery, from Finance to Asset Management.",
    },
    fr: {
      title: "Consultant Ingénieur Analytics Senior (Plateforme de Données & Reporting)",
      period: "Depuis mars 2026",
      detail:
        "Refonte en solo de la plateforme analytique d'un opérateur immobilier européen. 225 modèles dbt en production sur BigQuery, de la Finance à l'Asset Management.",
    },
  },
  {
    kind: "work",
    org: "Connecty AI",
    url: "https://www.connectyai.com",
    logo: "/img/logos/connecty-ai.jpg",
    location: "California, USA (Remote)",
    en: {
      title: "Founding AI Data Analyst",
      period: "Dec 2025 to Mar 2026",
      detail:
        "First analytics hire at an agentic AI startup. Stood up Snowflake, dbt and Power BI, and validated the LLM SQL engine.",
    },
    fr: {
      title: "Analyste de Données IA Fondateur",
      period: "Déc 2025 à Mars 2026",
      detail:
        "Premier profil analytics d'une startup IA agentique. Mise en place de Snowflake, dbt et Power BI, et validation du moteur SQL LLM.",
    },
  },
  {
    kind: "work",
    org: "Kering",
    url: "https://www.kering.com",
    logo: "/img/logos/kering.jpg",
    location: "Paris, France",
    en: {
      title: "Senior Analytics Engineer Consultant (Data Platform)",
      period: "Feb 2023 to Dec 2025",
      detail:
        "Led the migration from AWS to BigQuery on a Medallion architecture. Refactored a 3,000+ line SQL monolith into dbt. The Refused Store project cut a nearly €2M annual revenue loss by 92%. Team of 14.",
    },
    fr: {
      title: "Consultant Ingénieur Analytics Senior (Plateforme de Données)",
      period: "Fév 2023 à Déc 2025",
      detail:
        "Migration d'AWS vers BigQuery sur architecture Médaillon. Refonte d'un monolithe SQL de plus de 3 000 lignes en dbt. Le projet Refused Store a réduit de 92 % un manque à gagner annuel de près de 2 M€. Équipe de 14.",
    },
  },
  {
    kind: "work",
    org: "Accenture",
    url: "https://www.accenture.com",
    logo: "/img/logos/accenture.jpg",
    location: "Paris, France",
    en: {
      title: "CRM Data Architecture Consultant",
      period: "Aug 2022 to Jan 2023",
      detail:
        "CRM data architecture for Jaguar Land Rover across five continents. SAP S/4HANA and Salesforce Marketing Cloud. 95% incident resolution.",
    },
    fr: {
      title: "Consultant en Architecture de Données CRM",
      period: "Août 2022 à Janv 2023",
      detail:
        "Architecture de données CRM pour Jaguar Land Rover sur cinq continents. SAP S/4HANA et Salesforce Marketing Cloud. 95 % de résolution d'incidents.",
    },
  },
  {
    kind: "work",
    org: "Veepee",
    url: "https://www.veepee.com",
    logo: "/img/logos/veepee.jpg",
    location: "Paris, France",
    en: {
      title: "Data Governance Engineer",
      period: "Feb 2022 to Jun 2022",
      detail:
        "Unified multi company data into a centralized warehouse. dbt models with data quality and governance frameworks.",
    },
    fr: {
      title: "Ingénieur en Gouvernance de Données",
      period: "Fév 2022 à Juin 2022",
      detail:
        "Unification de données de plusieurs entités dans un entrepôt centralisé. Modèles dbt avec cadres de qualité et de gouvernance.",
    },
  },
  {
    kind: "work",
    org: "Dassault Systèmes",
    url: "https://www.3ds.com",
    logo: "/img/logos/dassault-systemes.jpg",
    location: "Vélizy-Villacoublay, France",
    en: {
      title: "Data Architecture Engineer",
      period: "Apr 2021 to Dec 2021",
      detail:
        "R&D on the 3DEXPERIENCE platform. Data models, metadata frameworks and storage layers for the data lake. WebAssembly integration.",
    },
    fr: {
      title: "Ingénieur en Architecture de Données",
      period: "Avr 2021 à Déc 2021",
      detail:
        "R&D sur la plateforme 3DEXPERIENCE. Modèles de données, frameworks de métadonnées et couches de stockage du data lake. Intégration WebAssembly.",
    },
  },
  {
    kind: "education",
    org: "ISAE-ENSMA",
    orgs: [
      { logo: "/img/logos/isae-ensma.jpg", en: { name: "ISAE-ENSMA", url: "https://www.ensma.fr/en/" }, fr: { name: "ISAE-ENSMA", url: "https://www.ensma.fr" } },
    ],
    location: "Poitiers, France",
    en: {
      title: "Master of Software Engineering in Big Data & Embedded Systems",
      period: "2020 to 2021",
      detail: "Master focused on Big Data and embedded systems.",
    },
    fr: {
      title: "Master en Ingénierie Logicielle Big Data & Systèmes Embarqués",
      period: "2020 à 2021",
      detail: "Master axé Big Data et systèmes embarqués.",
    },
  },
  {
    kind: "education",
    org: "ISAE-ENSMA",
    orgs: [
      { logo: "/img/logos/isae-ensma.jpg", en: { name: "ISAE-ENSMA", url: "https://www.ensma.fr/en/" }, fr: { name: "ISAE-ENSMA", url: "https://www.ensma.fr" } },
      {
        logo: "/img/logos/hcmut.jpg",
        en: { name: "Ho Chi Minh City University of Technology", url: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City_University_of_Technology" },
        fr: { name: "Université polytechnique de Hô Chi Minh-Ville", url: "https://fr.wikipedia.org/wiki/Université_polytechnique_de_Hô_Chi_Minh-Ville" },
      },
    ],
    location: "France · Vietnam",
    en: {
      title: "Double Aeronautical Engineering Degree in Data and Systems",
      period: "2015 to 2021",
      detail:
        "Eiffel Excellence, ERASMUS+ and SEED fully funded scholarships. Second prize, Vietnam Mathematics Contest 2017.",
    },
    fr: {
      title: "Double Diplôme d'Ingénieur Aéronautique en Données et Systèmes",
      period: "2015 à 2021",
      detail:
        "Bourses Eiffel Excellence, ERASMUS+ et SEED, entièrement financées. Deuxième prix au concours national de mathématiques du Vietnam 2017.",
    },
  },
];

export function getTimeline(lang: Lang): TimelineItem[] {
  return timeline.map((t) => ({
    kind: t.kind,
    org: t.org,
    url: t.url,
    logo: t.logo,
    orgs: t.orgs?.map((o) => ({ name: o[lang].name, url: o[lang].url, logo: o.logo })),
    location: t.location,
    ...t[lang],
  }));
}

export type Certification = { name: string; issuer: string; when: string; url?: string };

type RawCertification = { name: string; issuer: string; date: string; until?: string; url?: string };

// Official certificate titles, language invariant. `date` is the month the
// certificate was earned (YYYY-MM); `until` the expiry when there is one.
const rawCertifications: RawCertification[] = [
  { name: "Databricks Fundamentals", issuer: "Databricks", date: "2026-06", url: "https://credentials.databricks.com/a15bc340-3a1b-49cc-90ae-e0268cf223ff#acc.jE1Mm6bo" },
  { name: "Claude Code in Action", issuer: "Anthropic", date: "2026-05", url: "https://verify.skilljar.com/c/h2atcz498dwf" },
  { name: "SQL Advanced Certificate", issuer: "HackerRank", date: "2026-03", url: "https://www.hackerrank.com/certificates/b0b7ade4eb52" },
  { name: "ITIL® v4 Foundation", issuer: "PeopleCert", date: "2026-03", until: "2029-03", url: "https://www.peoplecert.org/for-candidates/certificate-verification-service" },
  { name: "Looker Certification Path", issuer: "Google", date: "2026-03", url: "https://www.skills.google/public_profiles/f0c95410-ced0-4e31-a78c-c64180e8ddd3" },
  { name: "GitHub Foundations", issuer: "GitHub", date: "2024-03", until: "2027-03", url: "https://www.credly.com/badges/afa3c137-fb8d-4e7c-b497-348e91e8e793/public_url" },
  { name: "dbt Fundamentals", issuer: "dbt Labs", date: "2023-09", url: "https://credentials.getdbt.com/50709795-4c1b-4798-b050-17fbed3a19a5" },
  { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", issuer: "Microsoft", date: "2023-09", url: "https://learn.microsoft.com/api/credentials/share/en-us/Thierrytrietlam/8ED467943C14A238?sharingId=BEEFDDDEBF23D4E3" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", date: "2022-01", url: "https://www.coursera.org/account/accomplishments/professional-cert/8S8G6LHN63CA/" },
  { name: "Computational Thinking using Python", issuer: "MITx (Massachusetts Institute of Technology)", date: "2020-11", url: "https://credentials.edx.org/credentials/ae7769c417154da1bedce41ea4ba8c41/" },
];

const monthNames: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
};

function formatMonth(iso: string, lang: Lang): string {
  const [y, m] = iso.split("-").map(Number);
  return `${monthNames[lang][m - 1]} ${y}`;
}

/** Certifications sorted by achievement month, newest first, with localized month labels. */
export function getCertifications(lang: Lang): Certification[] {
  return [...rawCertifications]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((c) => ({
      name: c.name,
      issuer: c.issuer,
      url: c.url,
      when: c.until ? `${formatMonth(c.date, lang)} → ${formatMonth(c.until, lang)}` : formatMonth(c.date, lang),
    }));
}

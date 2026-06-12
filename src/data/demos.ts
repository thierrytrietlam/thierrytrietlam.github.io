import type { Lang } from "../i18n/utils";

export type Demo = {
  title: string;
  tagline: string;
  description: string;
  stack: { name: string; icon?: string }[];
  links: { label: string; url: string; icon?: string }[];
  image?: string;
};

type RawDemo = {
  title: string;
  stack: { name: string; icon?: string }[];
  links: { label: string; url: string; icon?: string }[];
  image?: string;
  en: { tagline: string; description: string };
  fr: { tagline: string; description: string };
};

// Public builds. Titles, stack and links are language invariant.
const demos: RawDemo[] = [
  {
    title: "api_freew",
    stack: [
      { name: "Python", icon: "simple-icons:python" },
      { name: "Claude" },
      { name: "Playwright" },
      { name: "BeautifulSoup" },
    ],
    links: [],
    en: {
      tagline: "AI job matching pipeline",
      description:
        "A daily pipeline that scrapes mission boards, scores each posting against my CV with Claude, and writes a ranked Markdown report. Resumable by design: body hash caching, a circuit breaker, and per source isolation keep token cost low.",
    },
    fr: {
      tagline: "Pipeline IA de matching d'offres",
      description:
        "Un pipeline quotidien qui scrape les plateformes de missions, score chaque annonce face à mon CV avec Claude, et produit un rapport Markdown classé. Reprise sur incident par conception : cache par hash de contenu, circuit breaker et isolation par source maîtrisent le coût en tokens.",
    },
  },
  {
    title: "viec_prospect",
    stack: [
      { name: "React", icon: "simple-icons:react" },
      { name: "Vite", icon: "simple-icons:vite" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
    ],
    links: [],
    en: {
      tagline: "Job hunt tracker",
      description:
        "A single page app that imports postings, scores fit against my profile, and tracks every opportunity through the funnel. Ships as one self contained HTML file from a Vite and React build.",
    },
    fr: {
      tagline: "Suivi de recherche d'emploi",
      description:
        "Une application monopage qui importe les annonces, évalue l'adéquation avec mon profil, et suit chaque opportunité dans le funnel. Livrée en un seul fichier HTML autonome depuis un build Vite et React.",
    },
  },
];

export function getDemos(lang: Lang): Demo[] {
  return demos.map((d) => ({
    title: d.title,
    stack: d.stack,
    links: d.links,
    image: d.image,
    ...d[lang],
  }));
}

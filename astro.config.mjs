import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// User/organization GitHub Pages site (served at the root, no base path).
// If you ever move this to a project repo, set `base: "/REPO"` and prefix
// internal asset paths with import.meta.env.BASE_URL.
export default defineConfig({
  site: "https://thierrytrietlam.github.io",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
    sitemap({
      // Adds <xhtml:link rel="alternate" hreflang> pairs between / and /fr/.
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr" },
      },
    }),
  ],
});

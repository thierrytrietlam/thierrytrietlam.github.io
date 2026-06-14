import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// Served at the root on the custom domain thierrylam.fr (GitHub Pages).
// public/CNAME pins the domain so a deploy never resets it; base stays "/".
export default defineConfig({
  site: "https://thierrylam.fr",
  experimental: {
    // Astro auto computes SHA-256 hashes for every inline script and style and
    // emits a <meta> CSP, so the policy never drifts on rebuild. These extra
    // directives lock down everything else. font-src needs data: because the
    // self hosted fonts are inlined as data: URIs in the bundled CSS.
    csp: {
      directives: [
        "default-src 'self'",
        "font-src 'self' data:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
      ],
      // The theme script uses is:inline so it runs before first paint and
      // avoids a flash, which means Astro does not hash it. Pin its hash here.
      // Recompute it if that inline script in Base.astro ever changes.
      scriptDirective: {
        hashes: ["sha256-fucWZAlFuvhk5ms9/e0Dq4bjdrODks9rd3whmRmiVio="],
      },
    },
  },
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

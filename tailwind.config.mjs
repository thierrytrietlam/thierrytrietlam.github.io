/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Light theme (primary)
        paper: "#FBFBFD",
        ink: "#0B1220",
        muted: "#5B6472",
        line: "#E6E8EE",
        accent: {
          DEFAULT: "#2D5BFF",
          soft: "#EAF0FF",
          dark: "#5B82FF",
        },
        // Dark theme
        dark: {
          bg: "#0A0F1A",
          surface: "#111827",
          text: "#E6E9EF",
          muted: "#94A3B8",
          line: "#1F2937",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        lift: "0 2px 4px rgba(11,18,32,0.06), 0 18px 44px rgba(11,18,32,0.12)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

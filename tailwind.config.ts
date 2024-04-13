import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "500px",
    },
    extend: {
      keyframes: {
        "button-loading": {
          "0%": { background: "hsl(216, 91%, 25%)" },
          "100%": { background: "hsl(216, 91%, 65%)" },
        },
      },
      animation: {
        loading: "button-loading 700ms linear infinite alternate",
      },
      backgroundImage: {
        "bg-color": "var(--bg-color)",
      },
      colors: {
        "icon-warning": "var(--icon-warning)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-icons-secondaty-text": "var(--text-icons-secondaty-text)",
        "text-warning": "var(--text-warning)",
        "surface-primary": "var(--surface-primary)",
        "surface-secondary": "var(--surface-secondary)",
        "surface-accent": "var(--surface-accent)",
        "surface-error-secondary": "var(--surface-error-secondary)",
        "text-primary-on-color": "var(--text-primary-on-color)",
        "text-disabled": "var(--text-disabled)",
        "text-tertiary": "var(--text-tertiary)",
        "text-error": "var(--text-error)",
        "surface-tertiary": "var(--surface-tertiary)",
        "surface-accent-hover": "var(--surface-accent-hover)",
        "surface-primary-invese": "var(--surface-primary-invese)",
        "text-accent": "var(--text-accent)",
        "text-success": "var(--text-success)",
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "surface-warning-secondary": "var(--surface-warning-secondary)",
        "surface-accent-secondary": "var(--surface-accent-secondary)",
      },

      borderRadius: {
        "corners-round": "var(--corners-round)",
        "corners-lg": "var(--corners-lg)",
      },
      boxShadow: {
        default: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
        box: " 0px 4px 8px 0px rgba(32, 117, 245, 0.16)",
        qr: "0px 16px 33px 0px rgba(78, 159, 220, 0.08), -16px -16px 32px 0px rgba(255, 228, 2, 0.08), 16px 0px 32px 0px rgba(242, 106, 165, 0.08);",
        currency: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

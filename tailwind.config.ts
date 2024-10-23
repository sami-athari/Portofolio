import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            borderRadius: "50% 50% 50% 50%",
          },
          "25%": {
            borderRadius: "60% 40% 65% 35%",
          },
          "50%": {
            borderRadius: "70% 30% 50% 50%",
          },
          "75%": {
            borderRadius: "50% 60% 35% 65%",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

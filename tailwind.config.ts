import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "serif"],
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: "620px",
      md: "800px",
      lg: "950px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
export default config;

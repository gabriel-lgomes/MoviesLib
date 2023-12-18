import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-banner":
          "url('https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg')",
      },
      colors: {
        primary: "#820ad1",
        "--darkbg": "#0d0d0d",
        "gradient-1": "rgba(11, 11, 14, 0.95)",
        "gradient-2": "rgba(7, 6, 10, 0.75)",
      },
      fontFamily: {
        primary: ["var(--font-inter)"],
        secundary: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};
export default config;

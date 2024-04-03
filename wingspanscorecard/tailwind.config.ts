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
        seagull: {
          '50': '#f1f9fe',
          '100': '#e2f3fc',
          '200': '#bfe5f8',
          '300': '#75cbf0',
          '400': '#47bbe9',
          '500': '#1fa2d8',
          '600': '#1283b7',
          '700': '#0f6895',
          '800': '#11587b',
          '900': '#144a66',
          '950': '#0d2f44',
        },
      },
      boxShadow: {
        'menu': '0 4px 4px 0px rgba(13,47, 68, 0.25)'
      },
    },
  },
  plugins: [],
};
export default config;

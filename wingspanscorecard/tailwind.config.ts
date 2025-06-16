import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			seagull: {
  				'50': '#E9F6FC',
  				'100': '#CEECF8',
  				'200': '#9DD8F1',
  				'300': '#70C7EB',
  				'400': '#44B5E4',
  				'500': '#1FA2D8',
  				'600': '#187FA9',
  				'700': '#125E7D',
  				'800': '#0C3C50',
  				'900': '#061E28',
  				'950': '#031116'
  			},
			sirocco: {
  				'0': '#FFFFFF',
				'50': '#F1F3F4',
  				'100': '#E3E7E8',
  				'200': '#C7CED1',
  				'300': '#ABB6BA',
  				'400': '#8F9DA3',
  				'500': '#73858C',
  				'600': '#5C6A70',
  				'700': '#455054',
  				'800': '#2E3538',
  				'900': '#171B1C',
  				'950': '#0B0D0E',
				'1000': '#000000',
  			},
  			surface: {
				DEFAULT: 'hsl(var(--bg-default))',
				card: 'hsl(var(--bg-card))',
				button_primary_start: 'hsl(var(--bg-button-primary-start))',
				button_primary_end: 'hsl(var(--bg-button-primary-end))',
				button_secondary_start: 'hsl(var(--bg-button-secondary-start))',
				button_secondary_end: 'hsl(var(--bg-button-secondary-end))',
			},
			foreground: {
				DEFAULT: 'hsl(var(--fg-default))',
				accent: 'hsl(var(--fg-accent))',
				button_primary: 'hsl(var(--fg-button-primary))',
				button_primary_subtle: 'hsl(var(--fg-button-primary-subtle))',
				button_secondary: 'hsl(var(--fg-button-secondary))',
			},
  		},
  		boxShadow: {
  			card: 'var(--shadow-card)',
			button_card: 'var(--shadow-button-card)',
			button_secondary: 'var(--shadow-button-secondary)',
  		},
  		borderRadius: {
  			card: 'var(--radius-card)',
			button: 'var(--radius-button)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

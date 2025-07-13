import { table } from "console";
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
				DEFAULT: 'hsl(var(--surface-default))',
				card: 'hsl(var(--surface-card))',
				buttonPrimaryStart: 'hsl(var(--surface-button-primary-start))',
				buttonPrimaryEnd: 'hsl(var(--surface-button-primary-end))',
				buttonSecondaryStart: 'hsl(var(--surface-button-secondary-start))',
				buttonSecondaryEnd: 'hsl(var(--surface-button-secondary-end))',
				well: 'hsl(var(--surface-well))',
				skeleton: 'hsl(var(--surface-skeleton))',
			},
			foreground: {
				DEFAULT: 'hsl(var(--foreground-default))',
				accent: 'hsl(var(--foreground-accent))',
				buttonPrimary: 'hsl(var(--foreground-button-primary))',
				buttonPrimarySubtle: 'hsl(var(--foreground-button-primary-subtle))',
				buttonSecondary: 'hsl(var(--foreground-button-secondary))',
				label: 'hsl(var(--foreground-label))',
				tableText: 'hsl(var(--foreground-table-text))',
				subtle: 'hsl(var(--foreground-subtle))',
			},
			border: {
				DEFAULT: 'hsl(var(--border-default))',
				table: 'hsl(var(--border-table))',
				input: 'hsl(var(--border-input))',
				focus: 'hsl(var(--border-focus))',
			},
  		},
  		boxShadow: {
  			card: 'var(--shadow-card)',
			buttonCard: 'var(--shadow-button-card)',
			buttonSecondary: 'var(--shadow-button-secondary)',
  		},
  		borderRadius: {
  			card: 'var(--radius-card)',
			button: 'var(--radius-button)',
  		},
		keyframes: {
      		shimmer: {
        		'100%': {
          		transform: 'translateX(100%)',
        		},
      		},
    	},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Roboto"', 'system-ui', 'sans-serif'],
				mono: ['"Roboto Mono"', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Cores básicas
				amber: {
					50: '#FFF8E1',
					100: '#FFECB3',
					200: '#FFE082',
					300: '#FFD54F',
					400: '#FFCA28',
					500: '#FFC107',
					600: '#FFB300',
					700: '#FFA000',
					800: '#FF8F00',
					900: '#FF6F00',
				},
				blue: {
					50: '#E3F2FD',
					100: '#BBDEFB',
					200: '#90CAF9',
					300: '#64B5F6',
					400: '#42A5F5',
					500: '#2196F3',
					600: '#1E88E5',
					700: '#1976D2',
					800: '#1565C0',
					900: '#0D47A1',
				},
				amicci: {
					50: '#EDF9F8',
					100: '#D9F4F2',
					200: '#ACE0DD',
					300: '#6FE0DC',
					400: '#37D4D1',
					500: '#10C2C0',
					600: '#199BA0',
					700: '#127279',
					800: '#285E70',
					900: '#062630',
				},
				amicciDark: {
					50: '#E6F7FA',
					100: '#CCEEF5',
					200: '#99DCEA',
					300: '#66CBE0',
					400: '#33B9D5',
					500: '#00A8CB',
					600: '#0086A2',
					700: '#00657A',
					800: '#004351',
					900: '#002229',
				},
				magenta: {
					50: '#FCE4EC',
					100: '#F8BBD0',
					200: '#F48FB1',
					300: '#F06292',
					400: '#EC407A',
					500: '#E91E63',
					600: '#D81B60',
					700: '#C2185B',
					800: '#AD1457',
					900: '#880E4F',
				},
				green: {
					50: '#E8F5E9',
					100: '#C8E6C9',
					200: '#A5D6A7',
					300: '#81C784',
					400: '#66BB6A',
					500: '#4CAF50',
					600: '#43A047',
					700: '#388E3C',
					800: '#2E7D32',
					900: '#1B5E20',
				},
				gray: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#EEEEEE',
					300: '#E0E0E0',
					400: '#BDBDBD',
					500: '#9E9E9E',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121',
				},
				orange: {
					50: '#FFF3E0',
					100: '#FFE0B2',
					200: '#FFCC80',
					300: '#FFB74D',
					400: '#FFA726',
					500: '#FF9800',
					600: '#FB8C00',
					700: '#F57C00',
					800: '#EF6C00',
					900: '#E65100',
				},
				red: {
					50: '#FFEBEE',
					100: '#FFCDD2',
					200: '#EF9A9A',
					300: '#E57373',
					400: '#EF5350',
					500: '#F44336',
					600: '#E53935',
					700: '#D32F2F',
					800: '#C62828',
					900: '#B71C1C',
				},
				yellow: {
					50: '#FFFDE7',
					100: '#FFF9C4',
					200: '#FFF59D',
					300: '#FFF176',
					400: '#FFEE58',
					500: '#FFEB3B',
					600: '#FDD835',
					700: '#FBC02D',
					800: '#F9A825',
					900: '#F57F17',
				},
				
				// Paletas compostas
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
					main: 'var(--primary-main)',
					dark: 'var(--primary-dark)',
					light: 'var(--primary-light)',
					contrast: 'var(--primary-contrast)',
					hover: 'var(--primary-hover)',
					selected: 'var(--primary-selected)',
					focusVisible: 'var(--primary-focusVisible)',
					outlinedBorder: 'var(--primary-outlinedBorder)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)',
					main: 'var(--secondary-main)',
					dark: 'var(--secondary-dark)',
					light: 'var(--secondary-light)',
					contrast: 'var(--secondary-contrast)',
					hover: 'var(--secondary-hover)',
					selected: 'var(--secondary-selected)',
					focusVisible: 'var(--secondary-focusVisible)',
					outlinedBorder: 'var(--secondary-outlinedBorder)',
				},
				tertiary: {
					main: 'var(--tertiary-main)',
					dark: 'var(--tertiary-dark)',
					light: 'var(--tertiary-light)',
					contrast: 'var(--tertiary-contrast)',
					hover: 'var(--tertiary-hover)',
					selected: 'var(--tertiary-selected)',
					focusVisible: 'var(--tertiary-focusVisible)',
					outlinedBorder: 'var(--tertiary-outlinedBorder)',
				},
				action: {
					main: 'var(--action-main)',
					dark: 'var(--action-dark)',
					light: 'var(--action-light)',
					contrast: 'var(--action-contrast)',
					hover: 'var(--action-hover)',
					selected: 'var(--action-selected)',
					focusVisible: 'var(--action-focusVisible)',
					outlinedBorder: 'var(--action-outlinedBorder)',
				},
				error: {
					DEFAULT: 'var(--error)',
					foreground: 'var(--error-foreground)',
					main: 'var(--error-main)',
					dark: 'var(--error-dark)',
					light: 'var(--error-light)',
					contrast: 'var(--error-contrast)',
					hover: 'var(--error-hover)',
					selected: 'var(--error-selected)',
					focusVisible: 'var(--error-focusVisible)',
					outlinedBorder: 'var(--error-outlinedBorder)',
				},
				warning: {
					main: 'var(--warning-main)',
					dark: 'var(--warning-dark)',
					light: 'var(--warning-light)',
					contrast: 'var(--warning-contrast)',
					hover: 'var(--warning-hover)',
					selected: 'var(--warning-selected)',
					focusVisible: 'var(--warning-focusVisible)',
					outlinedBorder: 'var(--warning-outlinedBorder)',
				},
				info: {
					main: 'var(--info-main)',
					dark: 'var(--info-dark)',
					light: 'var(--info-light)',
					contrast: 'var(--info-contrast)',
					hover: 'var(--info-hover)',
					selected: 'var(--info-selected)',
					focusVisible: 'var(--info-focusVisible)',
					outlinedBorder: 'var(--info-outlinedBorder)',
				},
				success: {
					main: 'var(--success-main)',
					dark: 'var(--success-dark)',
					light: 'var(--success-light)',
					contrast: 'var(--success-contrast)',
					hover: 'var(--success-hover)',
					selected: 'var(--success-selected)',
					focusVisible: 'var(--success-focusVisible)',
					outlinedBorder: 'var(--success-outlinedBorder)',
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				mui: {
					primary: '#007FFF',
					background: '#FFFFFF',
					paper: '#FFFFFF',
					border: '#E0E0E0',
					divider: '#E5E8EC',
					sidebar: '#F3F6F9',
					hover: '#F5F7FA',
					text: {
						primary: '#1A2027',
						secondary: '#3E5060',
						disabled: '#6F7E8C',
					},
				}
			},
			boxShadow: {
				'mui-sm': '0px 2px 4px -1px rgba(0,0,0,0.08)',
				'mui-md': '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 5px 8px 0px rgba(0,0,0,0.04)',
				'mui-lg': '0px 8px 10px -5px rgba(0,0,0,0.1), 0px 16px 24px 2px rgba(0,0,0,0.05)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				'slide-in': {
					from: { transform: 'translateY(10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-out': {
					from: { transform: 'translateY(0)', opacity: '1' },
					to: { transform: 'translateY(10px)', opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.2s ease-out',
				'fade-out': 'fade-out 0.2s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-out': 'slide-out 0.3s ease-out',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			},
			transitionTimingFunction: {
				'elastic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
			},
			transitionDuration: {
				'250': '250ms',
				'300': '300ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

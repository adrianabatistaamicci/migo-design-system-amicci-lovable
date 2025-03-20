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
				blue: {
					50: '#EBF5FF',
					100: '#D6E8FF',
					200: '#ADC8FF',
					300: '#84A9FF',
					400: '#5A8CF8',
					500: '#2970FF',
					600: '#1F5AE8',
					700: '#0057B2',
					800: '#0C41A0',
					900: '#093186',
					950: '#072B7A',
				},
				amicci: {
					50: '#F1FDFC',
					100: '#E3FAF9',
					200: '#C7F5F3',
					300: '#93EDEA',
					400: '#51DEDA',
					500: '#10C2C0',
					600: '#0EA3A1',
					700: '#0C8482',
					800: '#096665',
					900: '#074A47',
					950: '#062630',
				},
				amicciDark: {
					50: '#E6F5F5',
					100: '#C7E8E9',
					200: '#A1D6D8',
					300: '#72BEC2',
					400: '#3A9CA1',
					500: '#14818A',
					600: '#0D646D',
					700: '#06454A',
					800: '#043A3E',
					900: '#033034',
					950: '#02282A',
				},
				magenta: {
					50: '#FDF5FA',
					100: '#F9E5F4',
					200: '#F2CAEB',
					300: '#E7A4DD',
					400: '#C963BA',
					500: '#9B247F',
					600: '#841E6C',
					700: '#6D1959',
					800: '#571447',
					900: '#49123C',
					950: '#3E0F32',
				},
				green: {
					50: '#ECFDF3',
					100: '#D1FADF',
					200: '#A6F4C5',
					300: '#6CE9A6',
					400: '#32D583',
					500: '#12B76A',
					600: '#039855',
					700: '#027A48',
					800: '#05603A',
					900: '#055735',
					950: '#054F31',
				},
				gray: {
					50: '#F9FBFB',
					100: '#F3F6F5',
					200: '#EAEFF0',
					300: '#CED6D6',
					400: '#AFB9BA',
					500: '#808586',
					600: '#656969',
					700: '#4A4F4F',
					800: '#313536',
					900: '#292C2D',
					950: '#212323',
				},
				orange: {
					50: '#FFFAEB',
					100: '#FEF0C7',
					200: '#FEDF89',
					300: '#FEC84B',
					400: '#FDB022',
					500: '#F79009',
					600: '#DC6803',
					700: '#B54708',
					800: '#93370D',
					900: '#86320D',
					950: '#7A2E0E',
				},
				red: {
					50: '#FEF3F2',
					100: '#FEE4E2',
					200: '#FECDCA',
					300: '#FDA29B',
					400: '#F97066',
					500: '#F04438',
					600: '#D92D20',
					700: '#B42318',
					800: '#912018',
					900: '#862017',
					950: '#7A271A',
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
					900: '#F78F1E',
					950: '#F57F17',
				},
				
				// Common colors
				common: {
					white: {
						main: '#FFFFFF'
					}
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
				'sm': '0px 2px 4px -1px rgba(0,0,0,0.08)',
				'md': '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 5px 8px 0px rgba(0,0,0,0.04)',
				'lg': '0px 8px 10px -5px rgba(0,0,0,0.1), 0px 16px 24px 2px rgba(0,0,0,0.05)',
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

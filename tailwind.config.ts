
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
			boxShadow: {
        'neumorphic-out': '6px 6px 12px #e6d7c3, -6px -6px 12px #ffffff',
        'neumorphic-in': 'inset 6px 6px 12px #e6d7c3, inset -6px -6px 12px #ffffff',
        'neumorphic-out-sm': '4px 4px 8px #e6d7c3, -4px -4px 8px #ffffff',
        'neumorphic-in-sm': 'inset 4px 4px 8px #e6d7c3, inset -4px -4px 8px #ffffff',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// An Lành brand colors
				sage: {
					50: '#f6f7f4',
					100: '#e9ebe3',
					200: '#d4d9c9',
					300: '#b8c0a7',
					400: '#9ca586',
					500: '#A3B18A', // Primary sage green
					600: '#829270',
					700: '#69775a',
					800: '#545f49',
					900: '#454e3d',
				},
				ivory: {
					50: '#fefae0', // Primary off-white
					100: '#fdf6c3',
					200: '#fded89',
					300: '#fcdc45',
					400: '#f9c513',
					500: '#e9ab06',
					600: '#c98302',
					700: '#a05c05',
					800: '#84480c',
					900: '#703b10',
				},
				sandy: {
					50: '#faf9f7',
					100: '#f2ede6',
					200: '#e6d7c3',
					300: '#D4A373', // Secondary sandy beige
					400: '#c99159',
					500: '#bc7a3f',
					600: '#ae6635',
					700: '#91532e',
					800: '#75442a',
					900: '#603925',
				},
				coral: {
					50: '#fef5f4',
					100: '#fde8e6',
					200: '#fcd5d2',
					300: '#f9b7b1',
					400: '#f48f85',
					500: '#E98074', // Accent coral
					600: '#dd4f3e',
					700: '#c93c2a',
					800: '#a63426',
					900: '#882f26',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				'serif': ['Lora', 'serif'],
				'sans': ['Poppins', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
				'anton': ['Anton', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'mono': ['IBM Plex Mono', 'monospace'],
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
				// Brand colors
				base: 'hsl(var(--base))',
				graphite: 'hsl(var(--graphite))',
				ink: 'hsl(var(--ink))',
				lime: 'hsl(var(--lime))',
				red: 'hsl(var(--red))',
				mint: 'hsl(var(--mint))',
				off: 'hsl(var(--off))'
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
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 0.75rem hsl(var(--lime) / 0.45)'
					},
					'50%': { 
						boxShadow: '0 0 1.5rem hsl(var(--lime) / 0.8)'
					}
				},
				'magnetic-pull': {
					'0%': { 
						transform: 'translateY(0)'
					},
					'100%': { 
						transform: 'translateY(-2px)'
					}
				},
				'bottle-float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)'
					},
					'50%': { 
						transform: 'translateY(-8px) rotate(1deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'magnetic-pull': 'magnetic-pull 0.3s ease-out',
				'bottle-float': 'bottle-float 3s ease-in-out infinite'
			},
			maxWidth: {
				'container': '1320px'
			},
			spacing: {
				'section-mobile': 'var(--space-section-mobile)',
				'section-desktop': 'var(--space-section-desktop)',
				'grid-gutter': 'var(--space-grid-gutter)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

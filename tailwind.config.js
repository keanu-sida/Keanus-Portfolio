/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				ink: {
					DEFAULT: '#0b0c0a',
					raised: '#141613',
					overlay: '#1b1e18'
				},
				paper: {
					DEFAULT: '#eceae3',
					muted: '#9a9d93'
				},
				leaf: {
					DEFAULT: '#c6e05c',
					dim: '#a8c247'
				},
				copper: '#e08a5a',
				line: '#2a2f26'
			},
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
				mono: ['IBM Plex Mono', 'ui-monospace', 'monospace']
			},
			maxWidth: {
				page: '72rem'
			}
		}
	},
	plugins: []
};

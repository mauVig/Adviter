/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'slide-right': {
					'0%': { transform: 'translateX(-150%)' },
					'100%': { transform: 'translateX(150vw)' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(150vw)' },
					'100%': { transform: 'translateX(-150%)' }
				},
				'slide-loop': {
                    '0%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(250%)' },
                    '50.1%': { transform: 'translateX(-250%)' },
                    '100%': { transform: 'translateX(0)' }
                }
			},
			animation: {
				'slide-right': 'slide-right 15s linear infinite',
				'slide-left': 'slide-left 15s linear infinite',
				'slide-loop': 'slide-loop 1s  infinite'
			}
		},
		colors:{
			AdBlue:'#0078ff',
			AdDarkBlue:'#000755',
			red:"#ff0000",
			textGray:'#ededed',
			textBlack:'#151515',
			black:'#000000',
		}
	},
	plugins: [],
}

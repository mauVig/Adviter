/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'slide-right': {
					'0%': { transform: 'translateX(150vw)' },
					'100%': { transform: 'translateX(150vw)' }
				  },
				  'slide-left': {
					'0%': { transform: 'translateX(150vw)' },
					'100%': { transform: 'translateX(-150vw)' } 
				},
				'slide-loop': {
                    '0%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(250%)' },
                    '50.1%': { transform: 'translateX(-250%)' },
                    '100%': { transform: 'translateX(0)' }
                },
			 
			},
			animation: {
				'slide-right': 'slide-right 15s linear infinite',
				'slide-left': 'slide-left 15s linear infinite',
				'slide-loop': 'slide-loop 1s  infinite',
				'pulse-custom': 'pulse-custom 2s ease-in-out forwards'
			}
		},
		colors:{
			AdBlue:'#0078ff',
			AdDarkBlue:'#000755',
			red:"#ff0000",
			textGray:'#ededed',
			textBlack:'#151515',
			black:'#000000',
		},
		screens: {
			'xs': '375px',
			'mid':'475px',
			'mid2':'564px',
			'sm': '640px',			
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1616px'
		},
	},
	plugins: [],
}

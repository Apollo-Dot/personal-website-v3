/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        body: ['Noto Sans', ...defaultTheme.fontFamily.sans],
				heading: ['Chakra Petch', ...defaultTheme.fontFamily.sans],
      },
			boxShadow: {
				'inset-div': ' inset 5px 5px 5px 3px rgba(0,0,0,0.25)'
			},
			aspectRatio: {
				'19/10': '19 / 10'
			}
    },
	},
	plugins: [
		require('tailwindcss-hero-patterns'),
	],
}

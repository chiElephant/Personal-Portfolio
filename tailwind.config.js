/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				mocha: '#201E1D',
				ramble: '#334155',
				buffs: '#B5A281',
				dust: '#E7DED9',
				ice: '#E2E8F0',
				moon: '#121212',
				transparent: 'transparent',
				oginGray: '#D9D9D9',
				search: '#8A8A8A',
				login: 'rgb(168,205,99)',
			},
			boxShadow: {
				well: 'inset 0 2px 5px 0 $404040',
				wellShadow: 'inset 0 10px 4px 0 rgb(0 0 0 / 0.25)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}

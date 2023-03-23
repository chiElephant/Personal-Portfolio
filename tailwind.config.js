/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				mocha: '#201E1D',
				ramble: '#334155',
				buffs: '#B5A281',
				dust: '#E7DED9',
				ice: '#E2E8F0',
			},
		},
	},
	plugins: [],
};

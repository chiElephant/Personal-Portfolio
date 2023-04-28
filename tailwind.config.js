/** @type {import('tailwindcss').Config} */
const color = 'blue'
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

				// bg: '#fafafa', // zinc-50
				// bgd: '#18181b', // zinc-900
				// p: '#f4f4f5', // zinc-100
				// pd: '#27272a', // zinc-800
				// s: '#e4e4e7', // zinc-200
				// sd: '#52525b', // zinc-600
				// t: '#a1a1aa', // zinc-400
				// td:'#a1a1aa', // zinc-500

				//zinc
				// p0: '#fafafa',
				// p1: '#f4f4f5',
				// p2: '#e4e4e7',
				// p3: '#d4d4d8',
				// p4: '#a1a1aa',
				// p5: '#71717a',
				// p6: '#52525b',
				// p7: '#3f3f46',
				// p8: '#27272a',
				// p9: '#18181b',
				// p10: '#09090b',

				// slate
				// p0: '#f8fafc',
				// p1: '#f1f5f9',
				// p2: '#e2e8f0',
				// p3: '#cbd5e1',
				// p4: '#94a3b8',
				// p5: '#64748b',
				// p6: '#475569',
				// p7: '#334155',
				// p8: '#1e293b',
				// p9: '#0f172a',
				// p10: '#020617',

				// stone
				// p0: '#fafaf9',
				// p1: '#f5f5f4',
				// p2: '#e7e5e4',
				// p3: '#d6d3d1',
				// p4: '#a8a29e',
				// p5: '#78716c',
				// p6: '#57534e',
				// p7: '#44403c',
				// p8: '#292524',
				// p9: '#1c1917',
				// p10: '#0c0a09',

				// neutral
				p0: '#fafafa',
				p1: '#f5f5f5',
				p2: '#e5e5e5',
				p3: '#d4d4d4',
				p4: '#a3a3a3',
				p5: '#737373',
				p6: '#525252',
				p7: '#404040',
				p8: '#262626',
				p9: '#171717',
				p10: '#0a0a0a',

				// purple
				// s0: '#faf5ff',
				// s1: '#f3e8ff',
				// s2: '#e9d5ff',
				// s3: '#d8b4fe',
				// s4: '#c084fc',
				// s5: '#a855f7',
				// s6: '#9333ea',
				// s7: '#7e22ce',
				// s8: '#6b21a8',
				// s9: '#581c87',
				// s10: '#3b0764',

				// sky
				// s0: '#f0f9ff',
				// s1: '#e0f2fe',
				// s2: '#bae6fd',
				// s3: '#7dd3fc',
				// s4: '#38bdf8',
				// s5: '#0ea5e9',
				// s6: '#0284c7',
				// s7: '#0369a1',
				// s8: '#6b21a8',
				// s9: '#075985',
				// s10: '#082f49',

				// emerald
				s0: '#ecfdf5',
				s1: '#d1fae5',
				s2: '#a7f3d0',
				s3: '#6ee7b7',
				s4: '#34d399',
				s5: '#10b981',
				s6: '#059669',
				s7: '#047857',
				s8: '#065f46',
				s9: '#064e3b',
				s10: '#022c22',

				// violet
				// s0: '#f5f3ff',
				// s1: '#ede9fe',
				// s2: '#ddd6fe',
				// s3: '#c4b5fd',
				// s4: '#a78bfa',
				// s5: '#8b5cf6',
				// s6: '#7c3aed',
				// s7: '#6d28d9',
				// s8: '#5b21b6',
				// s9: '#4c1d95',
				// s10: '#2e1065',

				// // orange
				// s0: '#fff7ed',
				// s1: '#ffedd5',
				// s2: '#fed7aa',
				// s3: '#fdba74',
				// s4: '#fb923c',
				// s5: '#f97316',
				// s6: '#ea580c',
				// s7: '#c2410c',
				// s8: '#9a3412',
				// s9: '#7c2d12',
				// s10: '#431407',

				// green
				// s0: '#f0fdf4',
				// s1: '#dcfce7',
				// s2: '#bbf7d0',
				// s3: '#86efac',
				// s4: '#4ade80',
				// s5: '#22c55e',
				// s6: '#16a34a',
				// s7: '#15803d',
				// s8: '#166534',
				// s9: '#14532d',
				// s10: '#052e16',

				// cyan
				// s0: '#ecfeff',
				// s1: '#cffafe',
				// s2: '#a5f3fc',
				// s3: '#67e8f9',
				// s4: '#22d3ee',
				// s5: '#06b6d4',
				// s6: '#0891b2',
				// s7: '#0e7490',
				// s8: '#155e75',
				// s9: '#164e63',
				// s10: '#083344',

				// indigo
				// s0: '#eef2ff',
				// s1: '#e0e7ff',
				// s2: '#c7d2fe',
				// s3: '#a5b4fc',
				// s4: '#818cf8',
				// s5:'#6366f1',
				// s6:'#4f46e5',
				// s7:'#4338ca',
				// s8:'#3730a3',
				// s9:'#312e81',
				// s10:'#1e1b4b',
			},
			boxShadow: {
				well: 'inset 0 2px 5px 0 $404040',
				wellShadow: 'inset 0 10px 4px 0 rgb(0 0 0 / 0.25)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}

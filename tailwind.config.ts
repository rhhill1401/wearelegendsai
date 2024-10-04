import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'lg-desktop': '1900px',
				mobile: '380px',
				tablet: '768px',
				desktop: '1024px',
			},
			colors: {
				LegendsSkyBlue: '#3F90F6',
				LegendsOrange: '#F6A541',
				LegendsLimeGreen: '#40F57F',
				LegendsYellow: '#F8DB45',
				LegendsLightBlue: '#40B0F5',
				LegendsViolet: '#C840F5',
				LegendsBluePurple: '#4B40F5',
				LegendsPurple: '#6841F6',
				LegendsTurquoise: '#2DD0D2',
				LegendsUltraDarkBlue: '#010A15',
				LegendsMediumBlue: '#063D7F',
				LegendsGreenBlue: '#40CFF5',
				LegendsLightGrey: '#DDDFE1',
				LegendsPowderGrey: '#EEEEEE',
				LegendsExtraLightGrey: '#EFF0F1',
				LegendsSubtitleGrey: '#5A5F65',
				LegendsRed: '#F54040',
			},
			fontFamily: {
				georgia: ['Georgia', 'serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;

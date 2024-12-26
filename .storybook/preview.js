import {themes} from '@storybook/theming';
import '../src/tailwind.css';

/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		darkMode: {
			dark: {
				...themes.dark,
				brandImage:
					'https://raw.githubusercontent.com/cybrowl/poro-components/main/src/lib/assets/poro_logo.png'
			},
			light: {...themes.normal, appBg: 'white'},
			stylePreview: true,
			current: 'dark'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: 'poro_dark',
			values: [
				{
					name: 'poro_dark',
					value: '#0A0A0B'
				},
				{
					name: 'poro_grey',
					value: '#1E1E1E'
				}
			]
		}
	}
};

export default preview;

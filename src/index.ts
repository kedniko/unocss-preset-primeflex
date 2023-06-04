
import type { Preset } from 'unocss'
import rules from './_rules'

export const presetPrimeFlex = (): Preset => {
	return {
		name: 'unocss-preset-primeflex',
		preflights: [
			{
				getCSS: ({ theme }: any) => `
					:root {
						color-scheme: ${theme['color-scheme'] || "light"};
						--border-radius: ${theme['--border-radius'] || "6px"};
						--text-color: ${theme.colors?.['--text-color'] || "#495057"};
						--text-color-secondary: ${theme.colors?.['--text-color-secondary'] || "#6c757d"};
						--primary-color: ${theme.colors?.['--primary-color'] || "#3B82F6"};
						--primary-color-text: ${theme.colors?.['--primary-color-text'] || "#ffffff"};
						--surface-ground: ${theme.colors?.['--surface-ground'] || "#eff3f8"};
						--surface-section: ${theme.colors?.['--surface-section'] || "#ffffff"};
						--surface-card: ${theme.colors?.['--surface-card'] || "#ffffff"};
						--surface-overlay: ${theme.colors?.['--surface-overlay'] || "#ffffff"};
						--surface-border: ${theme.colors?.['--surface-border'] || "#dfe7ef"};
						--surface-hover: ${theme.colors?.['--surface-hover'] || "#f6f9fc"};
						--surface-0: ${theme.colors?.['--surface-0'] || "#ffffff"};
						--surface-50: ${theme.colors?.['--surface-50'] || "#FAFAFA"};
						--surface-100: ${theme.colors?.['--surface-100'] || "#F5F5F5"};
						--surface-200: ${theme.colors?.['--surface-200'] || "#EEEEEE"};
						--surface-300: ${theme.colors?.['--surface-300'] || "#E0E0E0"};
						--surface-400: ${theme.colors?.['--surface-400'] || "#BDBDBD"};
						--surface-500: ${theme.colors?.['--surface-500'] || "#9E9E9E"};
						--surface-600: ${theme.colors?.['--surface-600'] || "#757575"};
						--surface-700: ${theme.colors?.['--surface-700'] || "#616161"};
						--surface-800: ${theme.colors?.['--surface-800'] || "#424242"};
						--surface-900: ${theme.colors?.['--surface-900'] || "#212121"};
						--blue-50: ${theme.colors?.['--blue-50'] || "#f5f9ff"};
						--blue-100: ${theme.colors?.['--blue-100'] || "#d0e1fd"};
						--blue-200: ${theme.colors?.['--blue-200'] || "#abc9fb"};
						--blue-300: ${theme.colors?.['--blue-300'] || "#85b2f9"};
						--blue-400: ${theme.colors?.['--blue-400'] || "#609af8"};
						--blue-500: ${theme.colors?.['--blue-500'] || "#3b82f6"};
						--blue-600: ${theme.colors?.['--blue-600'] || "#326fd1"};
						--blue-700: ${theme.colors?.['--blue-700'] || "#295bac"};
						--blue-800: ${theme.colors?.['--blue-800'] || "#204887"};
						--blue-900: ${theme.colors?.['--blue-900'] || "#183462"};
						--green-50: ${theme.colors?.['--green-50'] || "#f4fcf7"};
						--green-100: ${theme.colors?.['--green-100'] || "#caf1d8"};
						--green-200: ${theme.colors?.['--green-200'] || "#a0e6ba"};
						--green-300: ${theme.colors?.['--green-300'] || "#76db9b"};
						--green-400: ${theme.colors?.['--green-400'] || "#4cd07d"};
						--green-500: ${theme.colors?.['--green-500'] || "#22c55e"};
						--green-600: ${theme.colors?.['--green-600'] || "#1da750"};
						--green-700: ${theme.colors?.['--green-700'] || "#188a42"};
						--green-800: ${theme.colors?.['--green-800'] || "#136c34"};
						--green-900: ${theme.colors?.['--green-900'] || "#0e4f26"};
						--yellow-50: ${theme.colors?.['--yellow-50'] || "#fefbf3"};
						--yellow-100: ${theme.colors?.['--yellow-100'] || "#faedc4"};
						--yellow-200: ${theme.colors?.['--yellow-200'] || "#f6de95"};
						--yellow-300: ${theme.colors?.['--yellow-300'] || "#f2d066"};
						--yellow-400: ${theme.colors?.['--yellow-400'] || "#eec137"};
						--yellow-500: ${theme.colors?.['--yellow-500'] || "#eab308"};
						--yellow-600: ${theme.colors?.['--yellow-600'] || "#c79807"};
						--yellow-700: ${theme.colors?.['--yellow-700'] || "#a47d06"};
						--yellow-800: ${theme.colors?.['--yellow-800'] || "#816204"};
						--yellow-900: ${theme.colors?.['--yellow-900'] || "#5e4803"};
						--cyan-50: ${theme.colors?.['--cyan-50'] || "#f3fbfd"};
						--cyan-100: ${theme.colors?.['--cyan-100'] || "#c3edf5"};
						--cyan-200: ${theme.colors?.['--cyan-200'] || "#94e0ed"};
						--cyan-300: ${theme.colors?.['--cyan-300'] || "#65d2e4"};
						--cyan-400: ${theme.colors?.['--cyan-400'] || "#35c4dc"};
						--cyan-500: ${theme.colors?.['--cyan-500'] || "#06b6d4"};
						--cyan-600: ${theme.colors?.['--cyan-600'] || "#059bb4"};
						--cyan-700: ${theme.colors?.['--cyan-700'] || "#047f94"};
						--cyan-800: ${theme.colors?.['--cyan-800'] || "#036475"};
						--cyan-900: ${theme.colors?.['--cyan-900'] || "#024955"};
						--pink-50: ${theme.colors?.['--pink-50'] || "#fef6fa"};
						--pink-100: ${theme.colors?.['--pink-100'] || "#fad3e7"};
						--pink-200: ${theme.colors?.['--pink-200'] || "#f7b0d3"};
						--pink-300: ${theme.colors?.['--pink-300'] || "#f38ec0"};
						--pink-400: ${theme.colors?.['--pink-400'] || "#f06bac"};
						--pink-500: ${theme.colors?.['--pink-500'] || "#ec4899"};
						--pink-600: ${theme.colors?.['--pink-600'] || "#c93d82"};
						--pink-700: ${theme.colors?.['--pink-700'] || "#a5326b"};
						--pink-800: ${theme.colors?.['--pink-800'] || "#822854"};
						--pink-900: ${theme.colors?.['--pink-900'] || "#5e1d3d"};
						--indigo-50: ${theme.colors?.['--indigo-50'] || "#f7f7fe"};
						--indigo-100: ${theme.colors?.['--indigo-100'] || "#dadafc"};
						--indigo-200: ${theme.colors?.['--indigo-200'] || "#bcbdf9"};
						--indigo-300: ${theme.colors?.['--indigo-300'] || "#9ea0f6"};
						--indigo-400: ${theme.colors?.['--indigo-400'] || "#8183f4"};
						--indigo-500: ${theme.colors?.['--indigo-500'] || "#6366f1"};
						--indigo-600: ${theme.colors?.['--indigo-600'] || "#5457cd"};
						--indigo-700: ${theme.colors?.['--indigo-700'] || "#4547a9"};
						--indigo-800: ${theme.colors?.['--indigo-800'] || "#363885"};
						--indigo-900: ${theme.colors?.['--indigo-900'] || "#282960"};
						--teal-50: ${theme.colors?.['--teal-50'] || "#f3fbfb"};
						--teal-100: ${theme.colors?.['--teal-100'] || "#c7eeea"};
						--teal-200: ${theme.colors?.['--teal-200'] || "#9ae0d9"};
						--teal-300: ${theme.colors?.['--teal-300'] || "#6dd3c8"};
						--teal-400: ${theme.colors?.['--teal-400'] || "#41c5b7"};
						--teal-500: ${theme.colors?.['--teal-500'] || "#14b8a6"};
						--teal-600: ${theme.colors?.['--teal-600'] || "#119c8d"};
						--teal-700: ${theme.colors?.['--teal-700'] || "#0e8174"};
						--teal-800: ${theme.colors?.['--teal-800'] || "#0b655b"};
						--teal-900: ${theme.colors?.['--teal-900'] || "#084a42"};
						--orange-50: ${theme.colors?.['--orange-50'] || "#fff8f3"};
						--orange-100: ${theme.colors?.['--orange-100'] || "#feddc7"};
						--orange-200: ${theme.colors?.['--orange-200'] || "#fcc39b"};
						--orange-300: ${theme.colors?.['--orange-300'] || "#fba86f"};
						--orange-400: ${theme.colors?.['--orange-400'] || "#fa8e42"};
						--orange-500: ${theme.colors?.['--orange-500'] || "#f97316"};
						--orange-600: ${theme.colors?.['--orange-600'] || "#d46213"};
						--orange-700: ${theme.colors?.['--orange-700'] || "#ae510f"};
						--orange-800: ${theme.colors?.['--orange-800'] || "#893f0c"};
						--orange-900: ${theme.colors?.['--orange-900'] || "#642e09"};
						--bluegray-50: ${theme.colors?.['--bluegray-50'] || "#f7f8f9"};
						--bluegray-100: ${theme.colors?.['--bluegray-100'] || "#dadee3"};
						--bluegray-200: ${theme.colors?.['--bluegray-200'] || "#bcc3cd"};
						--bluegray-300: ${theme.colors?.['--bluegray-300'] || "#9fa9b7"};
						--bluegray-400: ${theme.colors?.['--bluegray-400'] || "#818ea1"};
						--bluegray-500: ${theme.colors?.['--bluegray-500'] || "#64748b"};
						--bluegray-600: ${theme.colors?.['--bluegray-600'] || "#556376"};
						--bluegray-700: ${theme.colors?.['--bluegray-700'] || "#465161"};
						--bluegray-800: ${theme.colors?.['--bluegray-800'] || "#37404c"};
						--bluegray-900: ${theme.colors?.['--bluegray-900'] || "#282e38"};
						--purple-50: ${theme.colors?.['--purple-50'] || "#fbf7ff"};
						--purple-100: ${theme.colors?.['--purple-100'] || "#ead6fd"};
						--purple-200: ${theme.colors?.['--purple-200'] || "#dab6fc"};
						--purple-300: ${theme.colors?.['--purple-300'] || "#c996fa"};
						--purple-400: ${theme.colors?.['--purple-400'] || "#b975f9"};
						--purple-500: ${theme.colors?.['--purple-500'] || "#a855f7"};
						--purple-600: ${theme.colors?.['--purple-600'] || "#8f48d2"};
						--purple-700: ${theme.colors?.['--purple-700'] || "#763cad"};
						--purple-800: ${theme.colors?.['--purple-800'] || "#5c2f88"};
						--purple-900: ${theme.colors?.['--purple-900'] || "#432263"};
						--red-50: ${theme.colors?.['--red-50'] || "#fff5f5"};
						--red-100: ${theme.colors?.['--red-100'] || "#ffd0ce"};
						--red-200: ${theme.colors?.['--red-200'] || "#ffaca7"};
						--red-300: ${theme.colors?.['--red-300'] || "#ff8780"};
						--red-400: ${theme.colors?.['--red-400'] || "#ff6259"};
						--red-500: ${theme.colors?.['--red-500'] || "#ff3d32"};
						--red-600: ${theme.colors?.['--red-600'] || "#d9342b"};
						--red-700: ${theme.colors?.['--red-700'] || "#b32b23"};
						--red-800: ${theme.colors?.['--red-800'] || "#8c221c"};
						--red-900: ${theme.colors?.['--red-900'] || "#661814"};
						--primary-50: ${theme.colors?.['--primary-50'] || "#f5f9ff"};
						--primary-100: ${theme.colors?.['--primary-100'] || "#d0e1fd"};
						--primary-200: ${theme.colors?.['--primary-200'] || "#abc9fb"};
						--primary-300: ${theme.colors?.['--primary-300'] || "#85b2f9"};
						--primary-400: ${theme.colors?.['--primary-400'] || "#609af8"};
						--primary-500: ${theme.colors?.['--primary-500'] || "#3b82f6"};
						--primary-600: ${theme.colors?.['--primary-600'] || "#326fd1"};
						--primary-700: ${theme.colors?.['--primary-700'] || "#295bac"};
						--primary-800: ${theme.colors?.['--primary-800'] || "#204887"};
						--primary-900: ${theme.colors?.['--primary-900'] || "#183462"};
						--gray-50: ${theme.colors?.['--gray-50'] || "#FAFAFA"};
						--gray-100: ${theme.colors?.['--gray-100'] || "#F5F5F5"};
						--gray-200: ${theme.colors?.['--gray-200'] || "#EEEEEE"};
						--gray-300: ${theme.colors?.['--gray-300'] || "#E0E0E0"};
						--gray-400: ${theme.colors?.['--gray-400'] || "#BDBDBD"};
						--gray-500: ${theme.colors?.['--gray-500'] || "#9E9E9E"};
						--gray-600: ${theme.colors?.['--gray-600'] || "#757575"};
						--gray-700: ${theme.colors?.['--gray-700'] || "#616161"};
						--gray-800: ${theme.colors?.['--gray-800'] || "#424242"};
						--gray-900: ${theme.colors?.['--gray-900'] || "#212121"};
					}
				`
			}
		],
		rules: rules,
	}
}
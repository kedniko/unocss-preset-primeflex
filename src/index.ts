
import type { Preset } from 'unocss'
import rules from './_rules'

export const presetPrimeFlex = (): Preset => {
	return {
		name: 'unocss-preset-primeflex',
		rules: rules,
	}
}
const fontSize = [
  ["text-xs", { "font-size": ".75rem" }],
  ["text-sm", { "font-size": ".875rem" }],
  ["text-base", { "font-size": "1rem" }],
  ["text-lg", { "font-size": "1.125rem" }],
  ["text-xl", { "font-size": "1.25rem" }],
  ["text-2xl", { "font-size": "1.5rem" }],
  ["text-3xl", { "font-size": "1.75rem" }],
  ["text-4xl", { "font-size": "2rem" }],
  ["text-5xl", { "font-size": "2.5rem" }],
  ["text-6xl", { "font-size": "3rem" }],
  ["text-7xl", { "font-size": "4rem" }],
  ["text-8xl", { "font-size": "6rem" }],
]

const fontWeight = [
  ["font-light", { "font-weight": "300" }],
  ["font-normal", { "font-weight": "400" }],
  ["font-medium", { "font-weight": "500" }],
  ["font-semibold", { "font-weight": "600" }],
  ["font-bold", { "font-weight": "700" }],
]

const fontStyle = [
  ["font-italic", { "font-style": "italic" }],
]

const textColor = [
  ['text-primary', { 'color': 'var(--primary-color)' }],
  ['text-white', { 'color': '#ffffff' }],
  ['text-color', { 'color': 'var(--text-color)' }],
  ['text-color-secondary', { 'color': 'var(--text-color-secondary)' }],
  [/^text-(50|100|200|300|400|500|600|700|800|900)$/, ([, c]: any) => ({ 'color': `var(--surface-${c})` }), { autocomplete: 'text-(50|100|200|300|400|500|600|700|800|900)' }],
  [/^text-(blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray|red|primary)-(50|100|200|300|400|500|600|700|800|900)$/, ([, c, d]: any) => ({ 'color': `var(--${c}-${d})` }), { autocomplete: 'text-(blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray|red|primary)-(50|100|200|300|400|500|600|700|800|900)' }],
  [/^text-white-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ 'color': `rgba(255,255,255,${d / 100})` }), { autocomplete: 'text-white-alpha-(10|20|30|40|50|60|70|80|90)' }],
  [/^text-black-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ 'color': `rgba(0,0,0,${d / 100})` }), { autocomplete: 'text-black-alpha-(10|20|30|40|50|60|70|80|90)' }],
]

const textAlign = [
  ["text-center", { "text-align": "center" }],
  ["text-justify", { "text-align": "justify" }],
  ["text-left", { "text-align": "left" }],
  ["text-right", { "text-align": "right" }],
]

const textDecoration = [
  ["underline", { "text-decoration": "underline" }],
  ["line-through", { "text-decoration": "line-through" }],
  ["no-underline", { "text-decoration": "no-underline" }],
]

const textOverflow = [
  ["text-overflow-clip", { "text-overflow": "clip" }],
  ["text-overflow-ellipsis", { "text-overflow": "ellipsis" }],
]

const textTransform = [
  ["lowercase", { "text-transform": "lowercase" }],
  ["uppercase", { "text-transform": "uppercase" }],
  ["capitalize", { "text-transform": "capitalize" }],
]

const lineHeight = [
  ["line-height-1", { "line-height": "1" }],
  ["line-height-2", { "line-height": "1.25" }],
  ["line-height-3", { "line-height": "1.5" }],
  ["line-height-4", { "line-height": "2" }],
]

const whiteSpace = [
  ["white-space-normal", { "white-space": "normal" }],
  ["white-space-nowrap", { "white-space": "nowrap" }],
]

const listStyle = [
  ["list-none", { "list-style": "none" }],
  ["list-disc", { "list-style": "disc" }],
  ["list-decimal", { "list-style": "decimal" }],
]

const verticalAlign = [
  ["vertical-align-baseline", { "vertical-align": "baseline" }],
  ["vertical-align-top", { "vertical-align": "top" }],
  ["vertical-align-middle", { "vertical-align": "middle" }],
  ["vertical-align-bottom", { "vertical-align": "bottom" }],
  ["vertical-align-text-top", { "vertical-align": "text-top" }],
  ["vertical-align-text-bottom", { "vertical-align": "text-bottom" }],
  ["vertical-align-sub", { "vertical-align": "sub" }],
  ["vertical-align-super", { "vertical-align": "super" }],
]

export default [
  ...fontSize,
  ...fontWeight,
  ...fontStyle,
  ...textColor,
  ...textAlign,
  ...textDecoration,
  ...textOverflow,
  ...textTransform,
  ...lineHeight,
  ...whiteSpace,
  ...listStyle,
  ...verticalAlign,
] as any
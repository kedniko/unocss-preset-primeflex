
const backgroundColor = [
  ['bg-primary', { 'background-color': 'var(--primary-color)', color: 'var(--primary-color-text)' }],
  ['bg-primary-reverse', { 'background-color': 'var(--primary-color-text)', color: 'var(--primary-color)' }],
  ['bg-white', { 'background-color': 'var(--white)' }],
  [/^bg-(blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray|red|primary)-(50|100|200|300|400|500|600|700|800|900)$/, ([, c, d]: any) => ({ 'background-color': `var(--${c}-${d})` }), { autocomplete: 'bg-(blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray|red|primary)-(50|100|200|300|400|500|600|700|800|900)' }],
  [/^surface-(50|100|200|300|400|500|600|700|800|900|ground|section|card|overlay|hover)$/, ([, d]: any) => ({ 'background-color': `var(--surface-${d})` }), { autocomplete: 'surface-(50|100|200|300|400|500|600|700|800|900|ground|section|card|overlay|hover)' }],
  [/^bg-white-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ 'background-color': `rgba(255,255,255,${d / 100})` }), { autocomplete: 'bg-white-alpha-(10|20|30|40|50|60|70|80|90)' }],
  [/^bg-black-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ 'background-color': `rgba(0,0,0,${d / 100})` }), { autocomplete: 'bg-black-alpha-(10|20|30|40|50|60|70|80|90)' }],
]

const backgroundRepeat = (() => {
  return [
    ['bg-repeat', { 'background-repeat': 'repeat' }],
    ['bg-no-repeat', { 'background-repeat': 'no-repeat' }],
    ['bg-repeat-x', { 'background-repeat': 'repeat-x' }],
    ['bg-repeat-y', { 'background-repeat': 'repeat-y' }],
    ['bg-repeat-round', { 'background-repeat': 'round' }],
    ['bg-repeat-space', { 'background-repeat': 'space' }],
  ]
})();

const backgroundSize = (() => {
  return [
    ['bg-auto', { 'background-size': 'auto' }],
    ['bg-cover', { 'background-size': 'cover' }],
    ['bg-contain', { 'background-size': 'contain' }],
  ]
})();

const backgroundPosition = (() => {
  return [
    ['bg-bottom', { 'background-position': 'bottom' }],
    ['bg-center', { 'background-position': 'center' }],
    ['bg-left', { 'background-position': 'left' }],
    ['bg-left-bottom', { 'background-position': 'left bottom' }],
    ['bg-left-top', { 'background-position': 'left top' }],
    ['bg-right', { 'background-position': 'right' }],
    ['bg-right-top', { 'background-position': 'right top' }],
    ['bg-right-bottom', { 'background-position': 'right bottom' }],
    ['bg-top', { 'background-position': 'top' }],
  ]
})();


export default [
  ...backgroundColor,
  ...backgroundRepeat,
  ...backgroundSize,
  ...backgroundPosition,
] as any
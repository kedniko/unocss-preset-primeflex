
const backgroundcolor = (() => {
  return [
    ['bg-primary', { backgroundColor: 'var(--primary-color)', color: 'var(--primary-color-text)' }],
    ['bg-primary-reverse', { backgroundColor: 'var(--primary-color-text)', color: 'var(--primary-color)' }],
    ['bg-white', { backgroundColor: 'var(--white)' }],
    [/^bg-(blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray|red|primary)-(50|100|200|300|400|500|600|700|800|900)$/, ([, c, d]: any) => ({ backgroundColor: `var(--${c}-${d})` })],
    [/^surface-(50|100|200|300|400|500|600|700|800|900|ground|section|card|overlay|hover)$/, ([, d]: any) => ({ backgroundColor: `var(--surface-${d})` })],
    [/^bg-white-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ backgroundcolor: `rgba(255,255,255,${d / 100})` })],
    [/^bg-black-alpha-(10|20|30|40|50|60|70|80|90)$/, ([, d]: any) => ({ backgroundcolor: `rgba(0,0,0,${d / 100})` })],
  ]
})();

export default [
  ...backgroundcolor,
] as any
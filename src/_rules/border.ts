
const borderRadius = []

const borderWidth = []

const borderStyle = [
  [/^border-(solid|dashed|dotted|double)$/, ([, c]) => ({ 'border-style': c }), { autocomplete: 'border-(solid|dashed|dotted|double)' }],
]
const borderColor = []

export default [
  ...borderRadius,
  ...borderWidth,
  ...borderStyle,
  ...borderColor,
] as any
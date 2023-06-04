
const transitionProperty = [
  ["transition-none", { "transition-property": "none" }],
  ["transition-all", { "transition-property": "all" }],
  ["transition-colors", { "transition-property": "background-color,border-color,color" }],
  ["transition-transform", { "transition-property": "transform" }],
]

const transitionDuration = [
  [/^transition-duration-(100|150|200|300|400|500|1000|2000|3000)$/, ([, d]: any) => ({ 'transition-duration': `${d}ms` }), { autocomplete: 'transition-duration-(100|150|200|300|400|500|1000|2000|3000)' }],
]

const transitionTimingFunction = [
  ["transition-linear", { "transition-timing-function": "linear" }],
  ["transition-ease-in", { "transition-timing-function": "cubic-bezier(0.4, 0, 1, 1)" }],
  ["transition-ease-out", { "transition-timing-function": "cubic-bezier(0, 0, 0.2, 1)" }],
  ["transition-ease-in-out", { "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)" }],
]

const transitionDelay = [
  [/^transition-delay-(100|150|200|300|400|500|1000)$/, ([, d]: any) => ({ 'transition-delay': `${d}ms` }), { autocomplete: 'transition-delay-(100|150|200|300|400|500|1000)' }],
]

export default [
  ...transitionProperty,
  ...transitionDuration,
  ...transitionTimingFunction,
  ...transitionDelay,
] as any
import { mapUnitToRem, range } from "../_utils"

const flexdirection = [
  ['flex-row', { 'flex-direction': 'row' }],
  ['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
  ['flex-column', { 'flex-direction': 'column' }],
  ['flex-column-reverse', { 'flex-direction': 'column-reverse' }],
]

const flexwrap = [
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
]

const flex = [
  ['flex-1', { 'flex': '1 1 0%' }],
  ['flex-auto', { 'flex': '1 1 auto' }],
  ['flex-initial', { 'flex': '0 1 auto' }],
  ['flex-none', { 'flex': 'none' }],
]

const flexgrow = [
  ['flex-grow-0', { 'flex-grow': '0' }],
  ['flex-grow-1', { 'flex-grow': '1' }],
]

const flexshrink = [
  ['flex-shrink-0', { 'flex-shrink': '0' }],
  ['flex-shrink-1', { 'flex-shrink': '1' }],
]

const gap = (() => {
  const values = range(0, 8, n => [
    [`gap-${n}`, { 'gap': mapUnitToRem[n] }],
    [`row-gap-${n}`, { 'row-gap': mapUnitToRem[n] }],
    [`column-gap-${n}`, { 'column-gap': mapUnitToRem[n] }],
  ])
  return values.flat()
})()

const order = range(0, 6, n => [`flex-order-${n}`, { 'order': `${n}` }])

const justifycontent = [
  ['justify-content-start', { 'justify-content': 'flex-start' }],
  ['justify-content-end', { 'justify-content': 'flex-end' }],
  ['justify-content-center', { 'justify-content': 'center' }],
  ['justify-content-between', { 'justify-content': 'space-between' }],
  ['justify-content-around', { 'justify-content': 'space-around' }],
  ['justify-content-evenly', { 'justify-content': 'space-evenly' }],
]

const aligncontent = [
  ['align-content-start', { 'align-content': 'flex-start' }],
  ['align-content-end', { 'align-content': 'flex-end' }],
  ['align-content-center', { 'align-content': 'center' }],
  ['align-content-between', { 'align-content': 'space-between' }],
  ['align-content-around', { 'align-content': 'space-around' }],
  ['align-content-evenly', { 'align-content': 'space-evenly' }],
]

const alignitems = [
  ['align-items-stretch', { 'align-items': 'stretch' }],
  ['align-items-start', { 'align-items': 'flex-start' }],
  ['align-items-center', { 'align-items': 'center' }],
  ['align-items-end', { 'align-items': 'flex-end' }],
  ['align-items-baseline', { 'align-items': 'baseline' }],
]

const alignself = [
  ['align-self-auto', { 'align-self': 'auto' }],
  ['align-self-start', { 'align-self': 'flex-start' }],
  ['align-self-center', { 'align-self': 'center' }],
  ['align-self-end', { 'align-self': 'flex-end' }],
  ['align-self-stretch', { 'align-self': 'stretch' }],
  ['align-self-baseline', { 'align-self': 'baseline' }],
]

export default [
  ...flexdirection,
  ...flexwrap,
  ...flex,
  ...flexgrow,
  ...flexshrink,
  ...gap,
  ...order,
  ...justifycontent,
  ...aligncontent,
  ...alignitems,
  ...alignself,
] as any
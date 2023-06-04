import { mapUnitToRem, range } from "../_utils"

const padding = (() => {
  const values = range(0, 8, n => [
    [`p-${n}`, { 'padding': mapUnitToRem[n] }],
    [`pt-${n}`, { 'padding-top': mapUnitToRem[n] }],
    [`pr-${n}`, { 'padding-right': mapUnitToRem[n] }],
    [`pb-${n}`, { 'padding-bottom': mapUnitToRem[n] }],
    [`pl-${n}`, { 'padding-left': mapUnitToRem[n] }],
    [`px-${n}`, { 'padding-left': mapUnitToRem[n], 'padding-right': mapUnitToRem[n] }],
    [`py-${n}`, { 'padding-top': mapUnitToRem[n], 'padding-bottom': mapUnitToRem[n] }],
  ])
  return values.flat()
})()
const margin = (() => {
  const values = range(0, 8, n => [
    [`m-${n}`, { 'margin': mapUnitToRem[n] }],
    [`mt-${n}`, { 'margin-top': mapUnitToRem[n] }],
    [`mr-${n}`, { 'margin-right': mapUnitToRem[n] }],
    [`mb-${n}`, { 'margin-bottom': mapUnitToRem[n] }],
    [`ml-${n}`, { 'margin-left': mapUnitToRem[n] }],
    [`mx-${n}`, { 'margin-left': mapUnitToRem[n], 'margin-right': mapUnitToRem[n] }],
    [`my-${n}`, { 'margin-top': mapUnitToRem[n], 'margin-bottom': mapUnitToRem[n] }],
  ])
  return values.flat()
})()

export default [
  ...padding,
  ...margin,
] as any
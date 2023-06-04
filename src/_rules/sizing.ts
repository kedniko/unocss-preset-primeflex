import { range } from "../_utils";

const minWidth = [
  ["min-w-0", { "min-width": "0px" }],
  ["min-w-full", { "min-width": "100%" }],
  ["min-w-screen", { "min-width": "100vw" }],
  ["min-w-min", { "min-width": "min-content" }],
  ["min-w-max", { "min-width": "max-content" }],
]

const width = [
  ...range(1, 30, n => [`w-${n + 1}rem`, { 'width': `${n + 1}rem` },]),
  ["w-full", { "width": "100%" }],
  ["w-screen", { "width": "100vw" }],
  ["w-auto", { "width": "auto" }],
  ["w-min", { "width": "min-content" }],
  ["w-max", { "width": "max-content" }],
]

const maxWidth = [
  ...range(1, 30, n => [`max-w-${n + 1}rem`, { "max-width": `${n + 1}rem` },]),
  ["max-w-full", { "max-width": "100%" }],
  ["max-w-screen", { "max-width": "100vw" }],
  ["max-w-auto", { "max-width": "auto" }],
  ["max-w-min", { "max-width": "min-content" }],
  ["max-w-max", { "max-width": "max-content" }],
]



const minHeight = [
  ["min-h-0", { "min-height": "0px" }],
  ["min-h-full", { "min-height": "100%" }],
  ["min-h-screen", { "min-height": "100vw" }],
  ["min-h-min", { "min-height": "min-content" }],
  ["min-h-max", { "min-height": "max-content" }],
]

const height = [
  ...range(1, 30, n => [`h-${n + 1}rem`, { 'height': `${n + 1}rem` },]),
  ["h-full", { "height": "100%" }],
  ["h-screen", { "height": "100vw" }],
  ["h-auto", { "height": "auto" }],
  ["h-min", { "height": "min-content" }],
  ["h-max", { "height": "max-content" }],
]

const maxHeight = [
  ...range(1, 30, n => [`max-h-${n + 1}rem`, { "max-height": `${n + 1}rem` },]),
  ["max-h-full", { "max-height": "100%" }],
  ["max-h-screen", { "max-height": "100vw" }],
  ["max-h-auto", { "max-height": "auto" }],
  ["max-h-min", { "max-height": "min-content" }],
  ["max-h-max", { "max-height": "max-content" }],
]


export default [
  ...minWidth,
  ...width,
  ...maxWidth,
  ...minHeight,
  ...height,
  ...maxHeight,
] as any
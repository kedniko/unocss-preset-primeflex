import { range } from "../_utils";

const height = [
  ...range(1, 30, n => [`h-${n + 1}rem`, { 'height': `${n + 1}rem` },]),
  ["h-auto", { "height": "auto" }],
  ["h-screen", { "height": "100vh" }],
  ["h-full", { "height": "100%" }],
]

export default [
  ...height,
] as any
const display = [
  ["hidden", { display: "none" }],
  ["block", { display: "block" }],
  ["inline", { display: "inline" }],
  ["inline-block", { display: "inline-block" }],
  ["flex", { display: "flex" }],
  ["inline-flex", { display: "inline-flex" }],
]

const overflow = (() => {
  const values = ["auto", "hidden", "visible", "scroll"]
  const result = []
  for (const value of values) {
    result.push([`overflow-${value}`, { overflow: value }])
    result.push([`overflow-x-${value}`, { "overflow-x": value }])
    result.push([`overflow-y-${value}`, { "overflow-y": value }])
  }
  return result
})();

const position = [
  ["static", { position: "static" }],
  ["fixed", { position: "fixed" }],
  ["absolute", { position: "absolute" }],
  ["relative", { position: "relative" }],
  ["sticky", { position: "sticky" }],
]

const placement = (() => {
  const values = ["auto", "0", "50", "100"]
  const result = []
  for (const value of values) {
    result.push([`top-${value}`, { top: value === "auto" ? "auto" : `${value}%` }])
    result.push([`right-${value}`, { right: value === "auto" ? "auto" : `${value}%` }])
    result.push([`bottom-${value}`, { bottom: value === "auto" ? "auto" : `${value}%` }])
    result.push([`left-${value}`, { left: value === "auto" ? "auto" : `${value}%` }])
  }
  return result
}
)();

const zindex = (() => {
  const values = ["auto", "0", "1", "2", "3", "4", "5"]
  const result = []
  for (const value of values) {
    result.push([`z-${value}`, { "z-index": value === "auto" ? "auto" : `${value}` }])
  }
  return result
}
)();


export default [
  ...display,
  ...overflow,
  ...position,
  ...placement,
  ...zindex,
] as any
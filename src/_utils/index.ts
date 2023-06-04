export const range = (start: number, end: number, fn: (i: number) => any, options?: { step: number }) => {
  const result: any = [];
  for (let i = start; i <= end; i += (options?.step || 1)) {
    result.push(fn(i));
  }
  return result as any[];
}

export const mapUnitToRem = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '1rem',
  '4': '1.5rem',
  '5': '2rem',
  '6': '3rem',
  '7': '4rem',
  '8': '5rem',
}
export const range = (start: number, end: number, fn: (i: number) => any, options?: { step: number }) => {
  const result: any = [];
  for (let i = start; i <= end; i += (options?.step || 1)) {
    result.push(fn(i));
  }
  return result as any[];
}
export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export function seedFor(id: string) {
  return [...id].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 17);
}
/** Stable approach vectors, perspective shrink and a definite landing point. */
export function depthFlight(id: string, age: number, target: { x: number; y: number }, spread = 1) {
  const s = seedFor(id),
    t = clamp01(age),
    near = s % 3 === 0;
  const routes = [
    [-12, 28],
    [112, 34],
    [18, -15],
    [85, -12],
    [4, 108],
    [98, 108],
    [28, 82],
    [78, 79],
    [48, 15],
  ];
  const start = routes[s % routes.length],
    end = { x: target.x + ((s % 29) - 14) * spread, y: target.y + ((s % 23) - 11) * spread };
  const control = { x: (start[0] + end.x) / 2 + ((s % 17) - 8), y: (start[1] + end.y) / 2 - 8 };
  const x = (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * control.x + t * t * end.x,
    y = (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * control.y + t * t * end.y;
  const startScale = near ? 2.4 : 1.1,
    finish = 0.22;
  return {
    x,
    y,
    scale: 1 / ((1 - t) / startScale + t / finish),
    rotation: ((s % 51) - 25) * (1 - t) + ((s % 13) - 6) * t,
    opacity: 1 - clamp01((t - 0.86) / 0.14),
    near,
    end,
  };
}

import { snapToStem } from "./stemAnalysis";
/** Atlas moon landmarks, measured in local panel percentages. Pin the same world
 * landmark while forward travel continues through each dissolve. */
export const infinityLandmarks = [
  [51.5, 28.4, 7.9],
  [50.8, 40.9, 6.3],
  [53.2, 33.5, 7.5],
  [52.1, 27.5, 9.2],
  [50.6, 27.2, 12.6],
  // Final portal has no moon: use its central destination and retain wide framing.
  [50.3, 24, 10.5],
];
export function infinityCamera(time: number, start: number, index: number) {
  const [x, y, diameter] = infinityLandmarks[Math.min(5, index)];
  const travel = Math.exp(Math.max(0, time - start) * 0.045);
  return {
    scale: (1.18 * travel * 10.5) / diameter,
    x: 50 - x,
    y: 50 + (32 - 50) * travel - y,
    originX: x,
    originY: y,
  };
}
export function infinityCuts(start: number, end: number, hash: string) {
  const spaceEnd = end - 3.2;
  return Array.from({ length: 7 }, (_, i) =>
    i === 0 ? start - 0.08 : snapToStem(start + ((spaceEnd - start) * i) / 6, hash),
  );
}

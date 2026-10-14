import type { Annotation } from "./audioAnnotation";
import { snapToStem } from "./stemAnalysis";
export const outdoorFrames = [
  {
    x: 50,
    head: 34,
    height: 61,
    people: [
      [50, 34],
      [27, 43],
      [75, 38],
      [63, 43],
    ],
  },
  {
    x: 48.5,
    head: 39.5,
    height: 58.5,
    people: [
      [48.5, 39.5],
      [27.5, 45],
      [75, 42],
      [61.5, 44],
    ],
  },
  {
    x: 45.5,
    head: 59.5,
    height: 38.5,
    people: [
      [45.5, 59.5],
      [31.5, 61],
      [65, 60],
      [55.5, 60],
    ],
  },
  {
    x: 50,
    head: 64,
    height: 32,
    people: [
      [50, 64],
      [39, 63],
      [61.5, 65],
      [56, 59],
    ],
  },
  {
    x: 47.3,
    head: 73,
    height: 21,
    people: [
      [47.3, 73],
      [43, 72],
      [53.7, 73],
      [50.5, 66],
    ],
  },
];
export function outdoorShotCuts(a: Annotation, start: number) {
  return Array.from({ length: 5 }, (_, i) =>
    i ? snapToStem(start + ((a.duration - start) * i) / 5, a.audioHash, 0.1) : start,
  );
}
export function outdoorProjection(time: number, start: number, end: number, view: number) {
  const p = Math.max(0, Math.min(1, (time - start) / (end - start))),
    eased = p * p * (3 - 2 * p);
  const frame = outdoorFrames[view],
    height = 21 + (61 * 2.1 - 21) * Math.pow(1 - p, 1.1),
    head = 35 + (73 - 35) * eased;
  const scale = height / frame.height;
  return {
    scale,
    x: 50 - 2.7 * eased - frame.x * scale,
    y: head - frame.head * scale,
    head,
    height,
  };
}

export type Vec3 = [number, number, number];
export const add = (a: Vec3, b: Vec3): Vec3 => a.map((n, i) => n + b[i]) as Vec3;
export const blend = (a: Vec3, b: Vec3, t: number): Vec3 =>
  a.map((n, i) => n + (b[i] - n) * t) as Vec3;
const ease = (f: number, a: number, b: number) => {
  const t = Math.max(0, Math.min(1, (f - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
export function spatialToasterState(frame: number) {
  const inserted = frame >= 5136,
    powered = frame >= 5254;
  let bread: Vec3 = [-0.42, 1.18, 0.32];
  if (frame >= 5069 && frame < 5122) bread = blend(bread, [0, 1.79, 0], ease(frame, 5069, 5122));
  else if (frame >= 5122 && frame < 5136)
    bread = blend([0, 1.79, 0], [0, 1.48, 0], ease(frame, 5122, 5136));
  else if (inserted) bread = [0, 1.48, 0];
  if (frame >= 5680) bread = blend([0, 1.48, 0], [0, 1.79, 0], ease(frame, 5680, 5711));
  if (frame > 5711) bread = blend([0, 1.79, 0], [-0.42, 1.85, 0.25], ease(frame, 5711, 5755));
  const plug = blend([0.66, 1.2, -0.05], [0.66, 1.2, -0.61], ease(frame, 5169, 5253));
  const dial = ease(frame, 5292, 5306) * Math.PI * 0.48;
  const breadGrip = add(bread, [0.13, 0.08, 0.015]);
  let wrist: Vec3 = [0.3, 1.08, 0.56];
  if (frame >= 5034 && frame < 5069) wrist = blend(wrist, breadGrip, ease(frame, 5034, 5069));
  if (frame >= 5069 && frame < 5150)
    wrist = blend(breadGrip, [0.3, 1.08, 0.56], ease(frame, 5136, 5150));
  if (frame >= 5150 && frame < 5169)
    wrist = blend(wrist, add(plug, [0, 0, 0.075]), ease(frame, 5150, 5169));
  if (frame >= 5169 && frame < 5255) wrist = add(plug, [0, 0, 0.075]);
  if (frame >= 5255 && frame < 5307)
    wrist = blend(add(plug, [0, 0, 0.075]), [0.23, 1.26, 0.245], ease(frame, 5255, 5291));
  if (frame >= 5307 && frame < 5328)
    wrist = blend([0.23, 1.26, 0.245], [0.3, 1.08, 0.56], ease(frame, 5306, 5328));
  if (frame >= 5658 && frame < 5680) wrist = blend(wrist, breadGrip, ease(frame, 5658, 5680));
  if (frame >= 5680) wrist = breadGrip;
  return {
    bread,
    plug,
    wrist,
    dial,
    inserted,
    powered,
    model: frame >= 5576 ? "C" : "B",
    toastReady: frame >= 5711,
  };
}

// Two equal-length limb segments; the pole points the elbow down and sideways.
export function elbowFor(shoulder: Vec3, wrist: Vec3, length = 0.65, pole: Vec3 = [1, 0, 0.25]): Vec3 {
  const d = wrist.map((n, i) => n - shoulder[i]) as Vec3;
  const distance = Math.hypot(...d);
  const direction = d.map((n) => n / Math.max(distance, 0.0001)) as Vec3;
  const dot = direction.reduce((n, v, i) => n + v * pole[i], 0);
  let perpendicular = pole.map((n, i) => n - dot * direction[i]) as Vec3;
  const norm = Math.hypot(...perpendicular) || 1;
  perpendicular = perpendicular.map((n) => n / norm) as Vec3;
  const height = Math.sqrt(Math.max(0, length * length - (distance * distance) / 4));
  return add(blend(shoulder, wrist, 0.5), perpendicular.map((n) => n * height) as Vec3);
}

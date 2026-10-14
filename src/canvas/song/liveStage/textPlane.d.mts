import type { SceneObject } from "./scene.mjs";
type Plane = NonNullable<SceneObject["textPlane"]>;
export function coefficients(p: Plane): number[];
export function projectPoint(p: Plane, x: number, y: number): { x: number; y: number };
export function projectedBounds(
  p: Plane,
  n: { x: number; y: number; width: number; height: number },
): { x: number; y: number; width: number; height: number };
export function planeMatrix(p: Plane): string;
export function validateTextPlane(p: unknown): void;
export function unprojectPoint(p: Plane, x: number, y: number): { x: number; y: number };
export function planeDragDelta(
  p: Plane,
  local: { x: number; y: number },
  dx: number,
  dy: number,
): { x: number; y: number };

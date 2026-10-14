import type { Scene, SceneObject } from "./scene.mjs";
export type RhythmMotion = {
  enabled: boolean;
  pattern: "beat" | "offbeat";
  every: number;
  phase: number;
  offsetFrames: number;
  amplitude: number;
  intensity?: number;
  decayFrames: number;
  axis: "x" | "y";
};
export function pulseFrames(project: Scene, config: RhythmMotion): number[];
export function rhythmOffset(
  project: Scene,
  object: SceneObject,
  frame: number,
): { x: number; y: number };
export function validateRhythm(project: Scene): void;

export function pulseCues(
  project: Scene,
  config: RhythmMotion,
): { frame: number; strength: number; observed: boolean }[];

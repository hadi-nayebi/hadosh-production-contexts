import type { Scene, Setting, Evaluated } from "./scene.mjs";
export type Camera = { zoom: number; tx: number; ty: number };
export function cameraAt(scene: Setting, frame: number): Camera;
export function cameraPose(p: Evaluated, camera: Camera): Evaluated;
export function cameraPreset(project: Scene, id: string, preset: string): Scene;

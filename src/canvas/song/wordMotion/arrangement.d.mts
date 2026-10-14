import type { Project } from "./project.mjs";
export function validateArrangement(project: Project): void;
export function sourceFrameAt(project: Project, frame: number): number | null;

export function mediaPathAt(project: Project, frame: number): string | null;

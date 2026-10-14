import type { RhythmMotion } from "./rhythm.mjs";
import type { Asset, ViewOwner } from "./views.mjs";
import type { Project } from "../wordMotion/project.mjs";
export type SceneObject = ViewOwner & {
  id: string;
  kind: string;
  parentId: string | null;
  hidden?: boolean;
  spatial?: {
    role: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
  };
  limb?: {
    polygon: { x: number; y: number }[];
    pivot: { x: number; y: number };
    degrees: number;
    inverse: boolean;
    pinnedSeam?: [{x:number;y:number},{x:number;y:number}];
  };
  fade?: { in?: [number, number]; out?: [number, number] };
  performanceClock?: {
    timelineStart: number;
    timelineEnd: number;
    sourceStart: number;
    sourceEnd: number;
  };
  animation?: { startFrame: number; endFrame: number };
  allowOverflow?: boolean;
  placementTransitionFrames?: number;
  motion?: { frame: number; x: number; y: number }[];
  textColor?: string;
  textBackground?: boolean;
  contentPlane?: { width: number; height: number; corners: { x: number; y: number }[] };
  textPlane?: { width: number; height: number; corners: { x: number; y: number }[] };
  textOutline?: string;
  textSurface?: "wooden-sign" | "newspaper";
  newspaper?: { date: string; context: string };
  role?: "lyric" | "explanatory";
  text?: string;
  textStyle?: { family: "serif" | "sans" | "mono"; fontSize: number; weight: number };
  wordRoute?: {entryId: string; exitId: string; intent: string};
  wordJourney?: {mouthObjectId: string; targetGroupId: string};
  textFlow?: {
    group: string;
    role: "action" | "speech" | "question";
    speakerId?: string;
    target?: { objectId?: string; x: number; y: number };
  };
  textAnchor?: { objectId: string; dx: number; dy: number };
  rhythm?: RhythmMotion;
  screenFor?: string;
  actionCues?: { add: number; block: number; inspect: number; change: number };
  fit?: "fill" | "contain";

  attachment?: { settingId: string; anchor: string; offsetX: number; offsetY: number };
  scale?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  enterFrame: number;
  exitFrame: number;
  timeOffset: number;
  label?: string;
  wordId?: string;
  cue: { wordId: string; edge: string; offset: number } | null;
  noteFrame?: number;
  note: string;
  suggestion: string;
};
export type Scene = Project & {
  lyricBoundaryPolicy?: "word-start-scene";
  opening?: { passStart: number; passCut: number; passEnd: number };
  browserHistory?: {
    frame: number;
    year: number;
    title: string;
    symbol: string;
    label: string;
    note: string;
    sources: string[];
  }[];
  rhythm?: {
    sourceSha256: string;
    estimatedBpm: number;
    status: string;
    beatFrames: number[];
    detectedBeatFrames: number[];
    method: string;
    [key: string]: unknown;
  };
  production?: {
    durationMs: number;
    islands: {
      id: string;
      startMs: number;
      endMs: number;
      status: string;
      description: string;
      documentId?: string;
    }[];
  };
  assets?: Asset[];
  documentId: string;
  origin: string;
  objects: SceneObject[];
  scenes: Setting[];
};
export type Evaluated = SceneObject & { enter: number; exit: number };
export const SCENE_KEY: string;
export function createScene(p: Project): Scene;
export function validateScene(p: unknown): Scene;
export function ancestors(p: Scene, id: string): SceneObject[];
export function evaluateObject(p: Scene, id: string): Evaluated;
export function descendants(p: Scene, id: string): SceneObject[];
export function editObject(p: Scene, id: string, patch: Partial<SceneObject>): Scene;
export function shiftTiming(p: Scene, id: string, scope: string, delta: number): Scene;
export function groupObjects(p: Scene, ids: string[]): Scene;
export function ungroup(p: Scene, id: string): Scene;
export function applySuggestion(p: Scene, id: string): Scene;

export type Setting = ViewOwner & {
  spatialCamera?: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
  };
  cutEvidence?: {
    status: "estimated";
    sourceSha256: string;
    sourceMapping: string;
    measuredFrame: number;
    score: number;
    beatSeconds: number;
    beatDistanceMs: number;
    frequencyBands: { low: number; mid: number; high: number };
    lyricPhraseIds: string[];
  };
  boundaryIntent?: {kind: "hold"; reason: string; source: string};
  boundaryTransitionFrames?: number;
  approachCamera?: boolean;
  camera?: { frame: number; zoom: number; x: number; y: number }[];
  id: string;
  start: number;
  end: number;
  title: string;
  description: string;
  assetStatus: string;
  objectIds: string[];
};
export function splitScene(p: Scene, id: string, frame: number, description: string): Scene;
export function sceneAt(p: Scene, frame: number): Setting;

export function addSceneIsland(p: Scene, start: number, end: number, description: string): Scene;

import type { Scene } from "./scene.mjs";
export type Asset = {
  id: string;
  path: string;
  libraryId: string;
  sha256: string;
  width: number;
  height: number;
};
export type ImageView = {
  id: string;
  name: string;
  assetId: string;
  anchors?: Record<string, { x: number; y: number }>;
  rect?: { x: number; y: number; width: number; height: number };
  aperture?: { x: number; y: number; width: number; height: number };
  rig?: {
    headAssetId: string;
    headRatio: number;
    bodyAspect?: number;
    floorAnchor?: { x: number; y: number };
    bodyAnchor: { x: number; y: number };
    headAnchor: { x: number; y: number };
  };
};
export type ViewOwner = {
  transitionFrames?: number;
  views?: ImageView[];
  defaultView?: string;
  viewCues?: { frame: number; viewId: string }[];
};
export function validateViews(owner: ViewOwner, assets: Asset[], duration?: number): void;
export function validateAssets(assets?: Asset[]): Asset[];
export function viewAt(owner: ViewOwner, frame: number): ImageView | null;
export function setViewCue(project: Scene, id: string, frame: number, viewId: string): Scene;

export function imagePose(
  p: Scene,
  id: string,
  frame: number,
  applyPlane?: boolean,
): import("./scene.mjs").Evaluated;

export function cueFrame(p: Scene, id: string, frame: number): number;

export function setDancePattern(project: Scene, id: string): Scene;

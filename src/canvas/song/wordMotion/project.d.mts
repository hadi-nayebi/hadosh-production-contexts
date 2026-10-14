export type Word = {
  id: string;
  phraseId: string;
  text: string;
  originalText: string;
  enterFrame: number;
  exitFrame: number;
  x: number;
  y: number;
  width: number;
  fontSize: number;
  sourceStart: number;
  sourceEnd: number;
  confidence: number;
  timingStatus: string;
  textStatus: string;
};
export type Project = {
  arrangement?: {
    startFrame: number;
    endFrame: number;
    sourceStartFrame: number | null;
    label: string;
    media?: { path: string; sha256: string; durationFrames: number };
  }[];
  schema: string;
  revision: number;
  source: {
    take: string;
    url: string;
    sha256: string;
    inMs: number;
    outMs: number;
    transcriptSha256: string;
    timing: string;
  };
  composition: { width: number; height: number; fps: number; durationInFrames: number };
  words: Word[];
  phrases: { id: string; label: string; wordIds: string[] }[];
};
export const AUDIO_HASH: string;
export function validateProject(p: unknown): Project;
export function frameFromSource(seconds: number): number;
export function visibleAt(w: Word, frame: number): boolean;
export function wordPose(w: Word, frame: number): { visible: boolean; dy: number; scale: number };
export function reviseWord(p: Project, id: string, patch: Partial<Word>): Project;
export function phraseRange(p: Project, id: string): [number, number];
export function clampWord(w: Word, patch: Partial<Word>): Word;

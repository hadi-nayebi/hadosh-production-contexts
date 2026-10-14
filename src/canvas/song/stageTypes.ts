import type { RefObject, Dispatch, SetStateAction } from "react";
import type { SongProject, Stage, Take, Scene, Cue } from "./model";
export interface StageProps {
  project: SongProject;
  files: Record<string, File>;
  edit: (stage: Stage, change: Partial<SongProject>) => void;
  commit: (p: SongProject) => void;
  setStatus: Dispatch<SetStateAction<string>>;
  busy: boolean;
  requestLyrics: () => Promise<void>;
  urls: Record<string, string>;
  attach: (f: File, t?: Take) => void;
  audio: RefObject<HTMLAudioElement | null>;
  clock: number;
  setClock: Dispatch<SetStateAction<number>>;
  seedTiming: () => void;
  currentScene: Scene | undefined;
  currentCue: Cue | undefined;
  exportHTML: (embed: boolean) => Promise<void>;
}

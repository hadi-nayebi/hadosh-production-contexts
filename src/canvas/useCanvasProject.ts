import { useCallback, useEffect, useRef, useState } from "react";
import { createProject, normalizeProject } from "./model";
import type { CanvasProject } from "./types";

const STORAGE_KEY = "canvas:production-project:v1";
const HISTORY_LIMIT = 100;

type ProjectUpdate = CanvasProject | ((current: CanvasProject) => CanvasProject);

export function useCanvasProject() {
  const [project, setProject] = useState<CanvasProject>(loadStoredProject);
  const projectRef = useRef(project);
  const [history, setHistory] = useState<CanvasProject[]>([]);
  const [future, setFuture] = useState<CanvasProject[]>([]);
  const [saveStatus, setSaveStatus] = useState("Saved locally");

  useEffect(() => {
    projectRef.current = project;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
      setSaveStatus("Saved locally");
    } catch {
      setSaveStatus("Browser storage unavailable");
    }
  }, [project]);

  const commit = useCallback((update: ProjectUpdate) => {
    const current = projectRef.current;
    const next = normalizeProject(typeof update === "function" ? update(current) : update);
    setHistory((items) => [...items.slice(-(HISTORY_LIMIT - 1)), structuredClone(current)]);
    setFuture([]);
    projectRef.current = next;
    setProject(next);
  }, []);

  const undo = useCallback(() => {
    setHistory((items) => {
      if (!items.length) return items;
      const previous = items.at(-1)!;
      const current = projectRef.current;
      setFuture((futureItems) =>
        [structuredClone(current), ...futureItems].slice(0, HISTORY_LIMIT),
      );
      projectRef.current = previous;
      setProject(previous);
      return items.slice(0, -1);
    });
  }, []);

  const redo = useCallback(() => {
    setFuture((items) => {
      if (!items.length) return items;
      const [next, ...remaining] = items;
      const current = projectRef.current;
      setHistory((historyItems) => [
        ...historyItems.slice(-(HISTORY_LIMIT - 1)),
        structuredClone(current),
      ]);
      projectRef.current = next;
      setProject(next);
      return remaining;
    });
  }, []);

  const reset = useCallback((nextProject = createProject()) => {
    const normalized = normalizeProject(nextProject);
    projectRef.current = normalized;
    setProject(normalized);
    setHistory([]);
    setFuture([]);
  }, []);

  return {
    project,
    commit,
    undo,
    redo,
    reset,
    canUndo: history.length > 0,
    canRedo: future.length > 0,
    saveStatus,
  };
}

function loadStoredProject() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? normalizeProject(JSON.parse(stored)) : createProject();
  } catch {
    return createProject();
  }
}

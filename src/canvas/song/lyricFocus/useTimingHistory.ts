import { saveTimingBeforeNavigation } from "./timingNavigation";
import { useEffect, useRef } from "react";
export type TimingView = {
  selected: number | null;
  target: { first: number; last: number; label: string; kind: string; rhythmId?: string } | null;
  edge: "start" | "end";
  picking: boolean;
  full?: boolean;
  origin?: "full" | "section";
};
export function timingDepth(v: TimingView) {
  return v.full ? 1 : v.selected === null ? 0 : v.picking ? 1 : 2;
}
export function timingParent(v: TimingView, depth: number): TimingView {
  return depth === 0
    ? { ...v, selected: null, target: null, picking: false, full: false, origin: "section" }
    : v.origin === "full"
      ? { ...v, selected: null, target: null, picking: false, full: true }
      : { ...v, picking: true, full: false };
}
type Entry = { scope: string; view: TimingView; depth: number };
/** A section is the parent even when word carets cross a section boundary. */
export function useTimingHistory(
  scope: string,
  ready: boolean,
  view: TimingView,
  dirty: boolean,
  restore: (v: TimingView) => void,
  blocked: () => void,
) {
  const current = useRef<Entry | null>(null),
    callbacks = useRef({ dirty, restore, blocked }),
    skip = useRef(false),
    reverting = useRef(false);
  callbacks.current = { dirty, restore, blocked };
  const signature = JSON.stringify(view);
  const rendered = useRef(signature);
  rendered.current = signature;
  useEffect(() => {
    if (!ready) return;
    const next = { scope, view, depth: timingDepth(view) };
    const write = (entry: Entry, push = false) =>
      history[push ? "pushState" : "replaceState"](
        { ...history.state, canvasTiming: entry },
        "",
        location.href,
      );
    if (!current.current || current.current.scope !== scope) {
      const existing = history.state?.canvasTiming;
      if (existing?.scope === scope && existing.depth === next.depth) write(next);
      else {
        write({ ...next, view: timingParent(view, 0), depth: 0 });
        for (let depth = 1; depth <= next.depth; depth++)
          write(
            { ...next, view: depth === next.depth ? view : timingParent(view, depth), depth },
            true,
          );
      }
      current.current = next;
      return;
    }
    if (skip.current) {
      skip.current = false;
      current.current = next;
      return;
    }
    const old = current.current;
    if (next.depth < old.depth) {
      // UI Back/Escape already selected the parent. Traverse the same browser stack.
      history.go(next.depth - old.depth);
      return;
    }
    if (next.depth > old.depth) {
      for (let depth = old.depth + 1; depth <= next.depth; depth++)
        write(
          { ...next, view: depth === next.depth ? view : timingParent(view, depth), depth },
          true,
        );
    } else write(next);
    current.current = next;
  }, [ready, scope, signature]);
  useEffect(() => {
    if (!ready) return;
    const pop = (e: PopStateEvent) => {
      const old = current.current,
        incoming = e.state?.canvasTiming as Entry | undefined;
      if (!old || incoming?.scope !== scope || ![0, 1, 2].includes(incoming.depth)) return;
      if (reverting.current) {
        reverting.current = false;
        return;
      }
      if (callbacks.current.dirty && !saveTimingBeforeNavigation()) {
        const delta = old.depth - incoming.depth;
        if (delta) {
          reverting.current = true;
          history.go(delta);
        } else history.pushState({ ...history.state, canvasTiming: old }, "", location.href);
        callbacks.current.blocked();
        return;
      }
      const next =
        incoming.depth < old.depth
          ? { ...incoming, view: timingParent(old.view, incoming.depth) }
          : incoming;
      current.current = next;
      skip.current = JSON.stringify(next.view) !== rendered.current;
      history.replaceState({ ...history.state, canvasTiming: next }, "", location.href);
      callbacks.current.restore(next.view);
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, [ready, scope]);
}

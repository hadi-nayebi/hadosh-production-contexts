import { createContext, useContext, type ReactNode } from "react";
import type { Annotation } from "./audioAnnotation";
import { sceneContainers } from "./sceneContainers";
import { roomArrival, roomBounds } from "./roomDirection";

export type SceneLifetime = {
  id: string;
  start: number;
  end: number;
  effectsEnd: number;
  sections: number[];
  persistence?: string;
};
export const insideLifetime = (time: number, start: number, end: number) =>
  Number.isFinite(time) && time >= start && time < end;

/** One shared, half-open lifetime contract. Carrying an outgoing background requires a reason;
 * its lyric/effect layer still expires at the owning boundary. All values are derived, never saves. */
export function sceneLifetimes(a: Annotation): SceneLifetime[] {
  const nodes = sceneContainers(a),
    room = roomBounds(a),
    arrival = roomArrival(a);
  if (!room || !arrival) return [];
  const start = (n: number) =>
    nodes.find((x) => x.id.endsWith(":section:" + n))?.start ?? a.duration;
  const scope = (
    id: string,
    from: number,
    end: number,
    sections: number[],
    effectsEnd = end,
    persistence?: string,
  ): SceneLifetime => ({
    id,
    start: from,
    end,
    effectsEnd,
    sections,
    ...(persistence ? { persistence } : {}),
  });
  return [
    scope(
      "opening",
      0,
      arrival.end,
      [1, 2],
      arrival.start,
      "Only the outgoing Earth background dissolves during the 340ms room arrival.",
    ),
    scope("room", arrival.start, room.end, [3]),
    scope(
      "infinity",
      room.end,
      start(5) + 0.55,
      [4],
      start(5),
      "Only the registered window-return background dissolves for 550ms into the same occupied room.",
    ),
    scope(
      "phone",
      start(5),
      start(7),
      [5, 6],
      start(7),
      "The same bedroom deliberately evolves into the held-phone close-up; upgrade events have their own shorter lifetimes.",
    ),
    scope(
      "social-ai",
      start(7),
      start(9),
      [7, 8],
      start(9),
      "Phone background pulls back to the bedroom; app-verse effects are explicitly disabled. AI milestones then replace the room.",
    ),
    scope(
      "cortex",
      start(9),
      start(12),
      [9, 10, 11],
      start(12),
      "The growing personal harness intentionally survives the intervening instrumental passage and instruction verse.",
    ),
    scope("ownership", start(12), start(13), [12]),
    scope(
      "kitchen",
      start(13),
      start(15),
      [13, 14],
      start(15),
      "Kitchen preparation continues into the toaster analogy; only retained harness identity crosses settings.",
    ),
    scope(
      "outdoor",
      start(15),
      a.duration,
      [15, 16],
      a.duration,
      "The same outdoor world and distinct owned networks intentionally continue through the outro.",
    ),
  ];
}
const EffectsActive = createContext(true);
export function SceneEffects({ children }: { children: ReactNode }) {
  return useContext(EffectsActive) ? children : null;
}
export function SceneScope({
  lifetime,
  time,
  children,
}: {
  lifetime: SceneLifetime;
  time: number;
  children: ReactNode;
}) {
  if (!insideLifetime(time, lifetime.start, lifetime.end)) return null;
  return (
    <div
      data-scene-owner={lifetime.id}
      data-owner-start={lifetime.start}
      data-owner-end={lifetime.end}
      data-effects-end={lifetime.effectsEnd}
      data-owned-sections={lifetime.sections.join(",")}
      data-persistence={lifetime.persistence}
      style={{ display: "contents" }}
    >
      <EffectsActive.Provider value={insideLifetime(time, lifetime.start, lifetime.effectsEnd)}>
        {children}
      </EffectsActive.Provider>
    </div>
  );
}

import { roomDefaults, roomBounds, validateRoom, type RoomDirection } from "./roomDirection";
import { validatePhoneEra, type PhoneEraDirection } from "./phoneEra";
import {
  openingDefaults,
  openingBounds,
  validateOpening,
  type OpeningDirection,
} from "./openingDirection";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
export type SceneContainer = {
  id: string;
  parentId: string | null;
  label: string;
  start: number;
  end: number;
  kind: "video" | "section" | "scene" | "silence";
  itemIds: string[];
};
export type SceneLook = {
  description: string;
  style: "light" | "ink" | "sculpture";
  background: string;
  image?: string;
};
export type ScenePlan = {
  schema: 1;
  source: string;
  annotationRevision: number;
  wordRevision: number;
  looks: Record<string, SceneLook>;
  opening?: OpeningDirection;
  room?: RoomDirection;
  phoneEra?: PhoneEraDirection;
};
export const defaultLook: SceneLook = {
  description:
    "Dim room emerging from a void, with soft directional light and floor shadows. Dimensional serif words: Come appears and stays fixed; closer appears on its anchor, grows toward the viewer in place, then both linger briefly before the next word.",
  style: "light",
  background: "",
};
export function sceneSource(a: Annotation) {
  return `${a.audioHash}:${a.lyricStamp}`;
}
export function newScenePlan(a: Annotation): ScenePlan {
  return {
    schema: 1,
    source: sceneSource(a),
    annotationRevision: a.revision,
    wordRevision: wordTiming(a).revision,
    looks: { invitation: { ...defaultLook } },
    ...(openingBounds(a)
      ? { opening: structuredClone(openingDefaults), room: structuredClone(roomDefaults) }
      : {}),
  };
}
/** Every item has one owner. Root children partition the whole recording, including empty spans. */
export function sceneContainers(
  a: Annotation,
  labels: Record<string, string> = {},
): SceneContainer[] {
  const root: SceneContainer = {
    id: "video",
    parentId: null,
    label: "Full video",
    start: 0,
    end: a.duration,
    kind: "video",
    itemIds: [],
  };
  const nodes = [root];
  let i = 0;
  while (i < a.items.length) {
    const first = i,
      g = a.items[i].groupId;
    while (i < a.items.length && a.items[i].groupId === g) i++;
    nodes.push({
      id: g,
      parentId: "video",
      label: labels[g] || (a.items[first].kind === "lyric" ? "Vocal passage" : a.items[first].text),
      start: a.boundaries[first],
      end: a.boundaries[i],
      kind: a.items.slice(first, i).every((x) => x.kind === "unassigned") ? "silence" : "section",
      itemIds: a.items.slice(first, i).map((x) => x.id),
    });
  }
  const words = wordTiming(a).intervals;
  const come = words.find((w) => a.items.find((x) => x.id === w.id)?.text.toLowerCase() === "come");
  const idx = come ? words.indexOf(come) : -1;
  const closer = words[idx + 1];
  if (
    come &&
    closer &&
    a.items
      .find((x) => x.id === closer.id)
      ?.text.toLowerCase()
      .replace(/[^a-z]/g, "") === "closer"
  ) {
    const owner = nodes.find((n) => n.itemIds.includes(come.id) && n.itemIds.includes(closer.id));
    if (owner) {
      owner.itemIds = owner.itemIds.filter((id) => id !== come.id && id !== closer.id);
      nodes.push({
        id: "invitation",
        parentId: owner.id,
        label: "Come closer",
        start: come.start,
        end: Math.min(a.duration, words[idx + 2]?.start ?? a.duration, closer.end + 0.35),
        kind: "scene",
        itemIds: [come.id, closer.id],
      });
    }
  }
  const opening = openingBounds(a);
  if (opening) {
    const verse = nodes.find(
      (n) =>
        n.parentId === "video" &&
        a.items.find((i) => i.groupId === n.id)?.groupId.endsWith(":section:3"),
    );
    if (verse) verse.start = opening.end;
    const sections = nodes.filter((n) => n.parentId === "video" && n.end <= opening.end + 1e-6);
    if (sections.length) {
      sections.forEach((n) => (n.parentId = "opening"));
      nodes.push({
        id: "opening",
        parentId: "video",
        label: "Book → Window → Earth → Web",
        start: 0,
        end: opening.end,
        kind: "scene",
        itemIds: [],
      });
    }
  }
  const room = roomBounds(a);
  if (room) {
    const verse = nodes.find((n) => n.id.endsWith(":section:3"));
    if (verse) {
      verse.parentId = "room";
      verse.start = room.start;
      nodes.push({
        id: "room",
        parentId: "video",
        label: "Bedroom → browser upgrades → doorway",
        start: room.start,
        end: room.end,
        kind: "scene",
        itemIds: [],
      });
    }
    const chorus = nodes.find((n) => n.id.endsWith(":section:4"));
    if (chorus) chorus.start = room.end;
    for (const [suffix, id, label] of [
      [":section:4", "chorus-infinity", "Doorway → infinity zoom"],
      [":section:5", "room-return-2015", "Bedroom return →2015 homePC and phone"],
      [":section:6", "phone-app-verse", "Open up the app · phone scene"],
      [":section:7", "social-choice-chorus", "My choices and hidden sorting"],
      [":section:8", "ai-evolution-bridge", "Transformer → ChatGPT → owned workspace"],
      [":section:9", "instruction-cortex", "Instructions → files → digital cortex"],
      [":section:10", "cortex-hold", "Retained instruction network"],
      [":section:11", "personal-harness", "Personal memory, tools, rules and model portability"],
      [
        ":section:12",
        "harness-ownership-chorus",
        "My words build the harness · inspect, change, final say",
      ],
      [
        ":section:13",
        "harness-ownership-hold",
        "Retained harness keeps working · kitchen preparation",
      ],
      [":section:14", "kitchen-toaster-bridge", "Toaster · power, model and rules"],
      [":section:15", "outdoor-final-say", "Personal cortex travels into the world · final say"],
      [":section:16", "outdoor-outro", "Distinct personal cortexes · selected exchange"],
    ] as const) {
      const section = nodes.find((n) => n.id.endsWith(suffix));
      if (section) {
        section.parentId = id;
        nodes.push({
          id,
          parentId: "video",
          label,
          start: section.start,
          end: section.end,
          kind: "scene",
          itemIds: [],
        });
      }
    }
  }
  return [root, ...nodes.filter((n) => n !== root).sort((a, b) => a.start - b.start)];
}
export function parseScenePlan(raw: string, a: Annotation): ScenePlan {
  const p = JSON.parse(raw);
  if (
    p?.schema !== 1 ||
    p.source !== sceneSource(a) ||
    !p.looks ||
    typeof p.looks !== "object" ||
    Array.isArray(p.looks) ||
    !Number.isInteger(p.annotationRevision) ||
    !Number.isInteger(p.wordRevision)
  )
    throw Error("Scene data does not match this recording. Existing data retained.");
  for (const l of Object.values(p.looks) as SceneLook[]) {
    if (
      !l ||
      typeof l.description !== "string" ||
      !["light", "ink", "sculpture"].includes(l.style) ||
      typeof l.background !== "string" ||
      (l.background !== "" && !/^#[0-9a-f]{6}$/i.test(l.background)) ||
      (l.image !== undefined && !/^data:image\/(png|jpeg|webp);base64,/.test(l.image))
    )
      throw Error("Invalid scene look. Existing data retained.");
  }
  if (p.opening) validateOpening(p.opening);
  if (p.room) validateRoom(p.room);
  if (p.phoneEra) validatePhoneEra(p.phoneEra);
  return p;
}

import { addStoryOptions } from "./additionOptions";
import type { Draft, Unit, Revision } from "./model";
import seed from "./seed.json";
export type Variant = {
  id: string;
  name: string;
  text: string;
  revision: number;
  history: Revision[];
};
export const legacyHarnessAlternatives = [
  {
    id: "harness-a",
    name: "A",
    text: "My words take shape, my harness grows,\nIt keeps the paths my thinking chose.\nChange the model, keep what’s mine—\nThe work, the rules, the whole design.",
  },
  {
    id: "harness-b",
    name: "B",
    text: "My words build the harness I call my own,\nFrom every seed of thought I’ve sown.\nLet models change; let my work stay,\nThis grows with me, in my own way.",
  },
  {
    id: "harness-c",
    name: "C",
    text: "My words become the notes and rules,\nThe memory linking all my tools.\nI choose the model, keep what I’ve grown—\nThis harness here should be my own.",
  },
];
const sourceVerse = seed.units.find(
  (u) => u.id === "r7-section-12-passage-01",
)!;
export const invariantRefrain = sourceVerse.originalText.split("\n").slice(2);
export const harnessAlternatives = legacyHarnessAlternatives.map((a) => ({
  ...a,
  text: [...a.text.split("\n").slice(0, 2), ...invariantRefrain].join("\n"),
}));
export const refrainConflict = (u: Unit) =>
  u.id === sourceVerse.id &&
  (u.text.split("\n").length !== 4 ||
    u.text.split("\n").slice(2).join("\n") !== invariantRefrain.join("\n"));
export function migrateVariants(d: Draft): Draft {
  for (const u of [d.title, ...d.units]) {
    if (!u.variants) {
      u.selectedVariantId = "original";
      u.variants = [
        {
          id: "original",
          name: "Original",
          text: u.text,
          revision: u.revision,
          history: structuredClone(u.history),
        },
      ];
    }
    const v = u.variants.find((x) => x.id === u.selectedVariantId);
    if (
      !v ||
      v.text !== u.text ||
      v.revision !== u.revision ||
      JSON.stringify(v.history) !== JSON.stringify(u.history) ||
      new Set(u.variants.map((x) => x.id)).size !== u.variants.length ||
      u.variants.some(
        (x) =>
          typeof x.name !== "string" ||
          !x.name ||
          typeof x.text !== "string" ||
          !x.text.trim() ||
          x.text.length > 10000 ||
          !Array.isArray(x.history) ||
          x.history.length !== x.revision ||
          x.history.at(-1)?.text !== x.text ||
          x.history.some(
            (h, i) => h.revision !== i + 1 || typeof h.text !== "string",
          ),
      )
    )
      throw new Error("Invalid lyric versions. Existing draft was preserved.");
    if (u.approval && !u.approval.variantId)
      u.approval.variantId = u.selectedVariantId;
    if (
      u.id === sourceVerse.id &&
      u.originalText === sourceVerse.originalText
    ) {
      u.refrainConstraint = {
        sourceId: sourceVerse.id,
        lines: [...invariantRefrain],
        conflicts: [],
      };
      for (const a of harnessAlternatives) {
        let existing = u.variants.find((x) => x.id === a.id);
        if (!existing) {
          u.variants.push({
            ...a,
            revision: 1,
            history: [
              {
                revision: 1,
                text: a.text,
                reason:
                  "Hadi corrected alternative: only lines 1–2 vary; exact original refrain retained. Sentinel_800d1b04e6a0819183637ede8882374d",
                at: "2026-10-12T04:20:00Z",
              },
            ],
          });
          continue;
        }
        const legacy = legacyHarnessAlternatives.find((x) => x.id === a.id)!;
        if (
          existing.revision === 1 &&
          existing.history.length === 1 &&
          existing.text === legacy.text
        ) {
          existing.text = a.text;
          existing.revision++;
          existing.history.push({
            revision: existing.revision,
            text: a.text,
            reason:
              "Refrain correction from Hadi; previous proposal preserved. Sentinel_800d1b04e6a0819183637ede8882374d",
            at: new Date().toISOString(),
          });
          if (u.selectedVariantId === a.id) {
            u.text = existing.text;
            u.revision = existing.revision;
            u.history = structuredClone(existing.history);
            u.approval = null;
            u.approvedRevision = null;
          }
        } else if (
          existing.text.split("\n").length !== 4 ||
          existing.text.split("\n").slice(2).join("\n") !==
            invariantRefrain.join("\n")
        )
          u.refrainConstraint.conflicts.push(existing.name);
      }
      if (refrainConflict(u)) {
        u.approval = null;
        u.approvedRevision = null;
      }
    }
  }
  return addStoryOptions(d);
}
export function syncVariant(u: Unit) {
  const v = u.variants?.find((x) => x.id === u.selectedVariantId);
  if (v) {
    v.text = u.text;
    v.revision = u.revision;
    v.history = structuredClone(u.history);
  }
}
export function selectVariant(d: Draft, id: string, variantId: string): Draft {
  const next = migrateVariants(structuredClone(d)),
    u = [next.title, ...next.units].find((x) => x.id === id);
  if (!u) throw new Error("Passage not found.");
  const v = u.variants!.find((x) => x.id === variantId);
  if (!v) throw new Error("Version not found.");
  if (u.selectedVariantId === variantId) return next;
  u.selectedVariantId = variantId;
  u.text = v.text;
  u.revision = v.revision;
  u.history = structuredClone(v.history);
  u.approval = null;
  u.approvedRevision = null;
  return next;
}
export function addVariant(d: Draft, id: string): Draft {
  const next = migrateVariants(structuredClone(d)),
    u = [next.title, ...next.units].find((x) => x.id === id);
  if (!u) throw new Error("Passage not found.");
  const vid = crypto.randomUUID();
  u.variants!.push({
    id: vid,
    name: `Alternative ${u.variants!.length}`,
    text: u.text,
    revision: 1,
    history: [
      {
        revision: 1,
        text: u.text,
        reason: "New alternative copied from selected wording; pending review",
        at: new Date().toISOString(),
      },
    ],
  });
  return selectVariant(next, id, vid);
}

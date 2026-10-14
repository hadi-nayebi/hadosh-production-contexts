import { isRejectedAddition, optionContext, finalSelectionCurrent } from "./additionOptions";
import { approved, type Draft } from "./model";
import {
  structureConflicts,
  harnessSelectionConflict,
} from "./structureMigration";
export function lyricHandoff(d: Draft) {
  const counts = [1, 2, 3, 4].map(
    (v) => d.units.filter((u) => u.section === `Verse ${v}`).length,
  );
  return [
    finalSelectionCurrent(d) ? "# Who Owns Your Toaster? — final selected lyric for generation" : "# Who Owns Your Toaster? — working lyric; final selection snapshot changed or conflicted",
    "",
    `Structure: ${counts.join("/")}; closing = 1 verse part + 1 final chorus; ${d.units.length} vocal units; 3 ordinary choruses; final chorus included in 2-unit closing; ${d.gaps.length} intended instrumental markers.`,
    "Source: retained R7 intended lyrics, not a verified recording transcript. New draft IDs are agent-authored under Hadi's explicit structure instruction.",
    `Source metadata: ${JSON.stringify(d.source, (k, v) => (k === "originalLyrics" ? undefined : v))}`,
    `Conflicts: ${
      structureConflicts(d)
        .map((c) => c.id)
        .join(", ") || "no closing conflicts"
    }; harness B conflict: ${harnessSelectionConflict(d) ? "yes" : "no"}.`,
    `Final selection instruction: ${d.finalSelections?.instruction || "none"}. Current exact snapshot: ${finalSelectionCurrent(d) ? "yes" : "no"}. Selection evidence is separate from earlier dashboard approval clicks.`,
    "",
    ...[d.title, ...d.units].flatMap((u) => [
      `## ${u.section} · ${u.id} · r${u.revision}`,
      `Status: ${isRejectedAddition(u) ? "REJECTED ORIGINAL — choose or revise; excluded from final generation" : approved(u) ? `${u.approval!.actor} approved at ${u.approval!.at}` : finalSelectionCurrent(d) ? "FINAL USER SELECTION — no new dashboard approval click" : "PENDING REVIEW"} · version ${u.selectedVariantId ?? "original"}`,
      `Role: ${optionContext(u.id, u.selectedVariantId || "") || u.purpose}`,
      `Provenance: ${u.history.at(-1)?.reason}`,
      "",
      u.text,
      "",
      ...d.gaps
        .filter((g) => g.afterUnit === u.id)
        .map(
          (g) => `[${g.label} — intended, duration provisional; after ${u.id}]`,
        ),
      "",
    ]),
    "## Retained outside active lyrics",
    ...(d.archivedUnits ?? []).map(
      (u) =>
        `${u.id} · r${u.revision} · retained wording/history and prior approval in draft archive; excluded from generation.`,
    ),
    "",
    "## Readiness",
    finalSelectionCurrent(d) ? "Ready for the existing Suno generation task under Hadi's final selection instruction. Preserve all four verse groups. No remaining content-count decision is inferred from prior shorthand. No measured timing or generated-audio approval is implied. Earlier dashboard approval evidence remains distinct from this direct final-selection receipt." : "The current lyric differs from the final selected snapshot or contains a conflict. Reconcile before generation.",
  ].join("\n");
}

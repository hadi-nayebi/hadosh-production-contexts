import blocking from "./foundation-harness-blocking.json";
export const harnessEvents = Object.fromEntries(blocking.shots.map((s) => [s.id, s.eventFrame]));
export function harnessStateAt(frame: number) {
  const after = (n: number) => frame >= harnessEvents[`harness-${String(n).padStart(2, "0")}`];
  return {
    request: after(2),
    notesAttached: after(3),
    draft: after(4),
    corrected: after(5),
    checked: after(6),
    published: after(7),
    instructionSaved: after(9),
    instructionEdited: after(10),
    toolProposal: after(11),
    scopeChosen: after(12),
    reachLimited: after(13),
    model: after(14) ? "B" : "A",
    pending: after(14) && !after(18),
    finalEdit: after(17),
    confirmed: after(18),
  };
}

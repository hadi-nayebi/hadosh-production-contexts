import type { Draft } from "./model";
import { selectVariant } from "./variants";
export function withStoryChoices(d: Draft) {
  for (const u of d.units.filter((u) => u.id.startsWith("draft-")))
    d = selectVariant(d, u.id, "story-revised-1");
  return d;
}

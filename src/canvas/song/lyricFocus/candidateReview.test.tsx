import { expect, it } from "vitest";
import sources from "./v0Candidates.json";
import { candidateLyricUnits } from "./candidateLyrics";
import {
  newLyricReview,
  parseLyricReview,
  selectedWording,
  reviseWording,
  approveWording,
  wordingApproved,
  reviewReady,
  pendingWording,
  addWording,
  selectWording,
} from "./candidateReview";
const units = candidateLyricUnits(sources[0].sections),
  hash = "a".repeat(64);
it("keeps all25 current units, original wording, unrestricted position and distinct variants", () => {
  const a = newLyricReview(hash, units);
  expect(a.units).toHaveLength(25);
  a.active = 24;
  expect(parseLyricReview(JSON.stringify(a), hash, units).active).toBe(24);
  expect(a.sourceUnits).toEqual(units);
  expect(reviewReady(a)).toBe(false);
});
it("binds approval to exact variant/revision/text and invalidates saved edits without discarding history", () => {
  let a = approveWording(newLyricReview(hash, units), true);
  expect(wordingApproved(selectedWording(a))).toBe(true);
  a = reviseWording(a, selectedWording(a).text + " test");
  expect(wordingApproved(selectedWording(a))).toBe(false);
  expect(selectedWording(a).history).toHaveLength(1);
  expect(a.sourceUnits[0].text).toBe(units[0].text);
  a = approveWording(a, true);
  const alternate = addWording(a);
  expect(wordingApproved(selectedWording(alternate))).toBe(false);
  const returned = selectWording(alternate, "source");
  expect(wordingApproved(selectedWording(returned))).toBe(false);
  expect(selectedWording(returned).approval).not.toBeNull();
  expect(reviewReady(returned, true)).toBe(false);
  expect(wordingApproved(selectedWording(approveWording(returned, true)))).toBe(true);
  expect(parseLyricReview(JSON.stringify(alternate), hash, units)).toEqual(alternate);
});
it("audio readiness needs every lyric approval, never instrumental labels; source-wide receipt does not approve edits or alternatives", () => {
  let a = newLyricReview(hash, units);
  expect(reviewReady(a, true)).toBe(true);
  a = addWording(a);
  expect(reviewReady(a, true)).toBe(false);
  for (let i = 0; i < units.length; i++) {
    a.active = i;
    if (units[i].text) a = approveWording(a, true);
  }
  expect(reviewReady(a)).toBe(true);
  a.active = 0;
  a = reviseWording(a, selectedWording(a).text + " changed");
  expect(reviewReady(a)).toBe(false);
});
it("rejects cross-source and malformed history without overwriting saved state", () => {
  const a = newLyricReview(hash, units);
  expect(() => parseLyricReview(JSON.stringify(a), "b".repeat(64), units)).toThrow("mismatch");
  a.units[0].variants[0].history = [{ text: "x", revision: 1, at: "bad" }];
  expect(() => parseLyricReview(JSON.stringify(a), hash, units)).toThrow("history");
});

it("switching invalidates both approval directions and survives reload while a same-selection click is harmless", () => {
  let a = approveWording(newLyricReview(hash, units), true);
  a = selectWording(a, "source");
  expect(wordingApproved(selectedWording(a))).toBe(true);
  a = approveWording(addWording(a), true);
  const receipt = selectedWording(a).approval;
  a = selectWording(a, "source");
  a = selectWording(a, "draft-2");
  a = parseLyricReview(JSON.stringify(a), hash, units);
  expect(wordingApproved(selectedWording(a))).toBe(false);
  expect(selectedWording(a).approval).toEqual(receipt);
  expect(() => selectWording(a, "missing")).toThrow();
});

it("locates pending lyrics with the same approval rules as the audio gate", () => {
  let a = newLyricReview(hash, units);
  expect(pendingWording(a)).not.toContain(1);
  expect(pendingWording(a)).not.toContain(24);
  expect(pendingWording(a, true)).toEqual([]);
  a.active = 2;
  a = reviseWording(a, selectedWording(a).text + " revised");
  expect(pendingWording(a, true)).toEqual([2]);
  a = approveWording(a, true);
  expect(pendingWording(a, true)).toEqual([]);
  expect(reviewReady(a, true)).toBe(true);
});

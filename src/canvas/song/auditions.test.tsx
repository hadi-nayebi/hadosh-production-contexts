import { expect, test } from "vitest";
import { parseAuditions } from "./auditions";
const round = {
  schema: "canvas-auditions-v1",
  title: "Fixture",
  lyricRevision: "R2",
  creditsBefore: 2430,
  creditsAfter: 2400,
  takes: [
    {
      title: "A1",
      style: "Funk",
      duration: "4:34",
      url: "https://suno.com/song/4347f796-fea7-4e67-888d-29422ecca5d9",
    },
  ],
};
test("audition metadata round-trips without granting song approval", () => {
  const parsed = parseAuditions(JSON.stringify({ ...round, verified: true }));
  expect(parsed).toEqual(round);
  expect(parsed).not.toHaveProperty("verified");
});
test("rejects unsafe links and malformed balances before import", () => {
  for (const url of [
    "javascript:alert(1)",
    "https://suno.com.evil.test/song/4347f796-fea7-4e67-888d-29422ecca5d9",
    "http://suno.com/song/4347f796-fea7-4e67-888d-29422ecca5d9",
  ])
    expect(() =>
      parseAuditions(JSON.stringify({ ...round, takes: [{ ...round.takes[0], url }] })),
    ).toThrow();
  for (const creditsAfter of [-1, 2500, NaN])
    expect(() => parseAuditions(JSON.stringify({ ...round, creditsAfter }))).toThrow();
  for (const takes of [[], [null]])
    expect(() => parseAuditions(JSON.stringify({ ...round, takes }))).toThrow();
});

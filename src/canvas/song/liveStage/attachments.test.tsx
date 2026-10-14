import { describe, it, expect } from "vitest";
// @ts-expect-error geometry-only contract is consumed when assets are integrated
import { attachPart } from "./attachments.mjs";
describe("future character attachment contract — synthetic dimensions only", () => {
  it("joins face/body through randomized supported sizes, positions and pose switches", () => {
    let rand = 391;
    const random = () => {
      rand = (rand * 1664525 + 1013904223) >>> 0;
      return rand / 2 ** 32;
    };
    for (let i = 0; i < 160; i++) {
      const pose = ["standing", "seated", "walking"][i % 3],
        orientation = ["front", "left", "right"][i % 3];
      const body = {
        id: "test-body",
        width: 100 + random() * 400,
        height: 100 + random() * 400,
        anchor: { x: random(), y: random() },
        pose,
        orientation,
      };
      const part = {
        id: "test-head",
        width: 30 + random() * 100,
        height: 30 + random() * 100,
        anchor: { x: random(), y: random() },
        pose,
        orientation,
      };
      const result = attachPart(body, part, {
        x: i % 2 ? 0 : 1280,
        y: i % 2 ? 0 : 720,
        scale: i < 2 ? [0.1, 4][i] : 0.1 + random() * 3.9,
      });
      expect(result.part.x + result.part.width * part.anchor.x).toBeCloseTo(result.joint.x, 8);
      expect(result.part.y + result.part.height * part.anchor.y).toBeCloseTo(result.joint.y, 8);
    }
  });
  it("rejects incompatible orientations, pose and malformed anchors", () => {
    const body = {
      id: "b",
      width: 100,
      height: 200,
      anchor: { x: 0.5, y: 0.1 },
      pose: "standing",
      orientation: "front",
    };
    const transform = { x: 0, y: 0, scale: 1 };
    expect(() => attachPart(body, { ...body, orientation: "left" }, transform)).toThrow(/matching/);
    expect(() => attachPart(body, { ...body, pose: "seated" }, transform)).toThrow();
    expect(() => attachPart(body, { ...body, anchor: { x: 2, y: 0 } }, transform)).toThrow();
    expect(() => attachPart(body, body, { ...transform, scale: 0 })).toThrow();
  });
});

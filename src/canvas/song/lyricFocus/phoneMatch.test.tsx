import { it, expect } from "vitest";
import { phoneMatch, phoneEraDefaults as d } from "./phoneEra";
it("keeps both phone projections coincident and never reverses the approach size", () => {
  let width = 0,
    height = 0;
  for (let t = d.zoomStart; t <= d.zoomEnd + 0.01; t += 0.01) {
    const p = phoneMatch(t, d);
    expect(p.width).toBeGreaterThanOrEqual(width - 1e-8);
    expect(p.height).toBeGreaterThanOrEqual(height - 1e-8);
    width = p.width;
    height = p.height;
    expect(50 + (51.1 - 50) * p.outgoing.sx + p.outgoing.x).toBeCloseTo(49.2 + p.incoming.x, 5);
    expect(50 + (46.6 - 50) * p.outgoing.sy + p.outgoing.y).toBeCloseTo(47.2 + p.incoming.y, 5);
    expect(5.62 * p.outgoing.sx).toBeCloseTo(24.8 * p.incoming.sx, 5);
    expect(15.84 * p.outgoing.sy).toBeCloseTo(87 * p.incoming.sy, 5);
  }
  expect(phoneMatch(d.zoomEnd, d).incoming.sx).toBeCloseTo(phoneMatch(d.zoomEnd, d).artScale);
});

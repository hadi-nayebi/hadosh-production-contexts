import { it, expect, vi, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import ToolArc from "./ToolArc";
import { validateScene } from "./scene.mjs";
import seed from "./illustrated-seed.json";
afterEach(cleanup);
it("shows five tools, rotates without applying a tool and selects explicitly", () => {
  const choose = vi.fn();
  render(
    <ToolArc
      object={validateScene(seed).objects[0]}
      hasViews
      active=""
      choose={choose}
      dismiss={() => {}}
    />,
  );
  expect(screen.getAllByRole("button").filter((b) => b.hasAttribute("aria-pressed"))).toHaveLength(
    5,
  );
  expect(screen.queryByRole("button", { name: "group" })).toBeNull();
  const toolbar = screen.getByRole("toolbar");
  fireEvent.wheel(toolbar, { deltaY: 100 });
  expect(screen.getByRole("button", { name: "group" })).toBeTruthy();
  expect(choose).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: "group" }));
  expect(choose).toHaveBeenCalledWith("group");
  fireEvent.keyDown(toolbar, { key: "ArrowDown" });
  expect(choose).toHaveBeenCalledTimes(1);
});

import { arcPosition } from "./arc.mjs";
it("anchors outside transformed bounds when possible and clamps on narrow screens", () => {
  const p = { x: 850, y: 200, width: 200, height: 100 };
  const a = arcPosition(p, { left: 20, top: 100, width: 1000 }, { width: 1100, height: 800 });
  expect(a.x + 250).toBeLessThan(20 + (850 * 1000) / 1280);
  const b = arcPosition(p, { left: 8, top: 250, width: 374 }, { width: 390, height: 844 });
  expect(b.x).toBeGreaterThanOrEqual(10);
  expect(b.x + 250).toBeLessThanOrEqual(380);
  expect(b.y).toBeGreaterThanOrEqual(60);
  expect(b.y + 290).toBeLessThanOrEqual(714);
});

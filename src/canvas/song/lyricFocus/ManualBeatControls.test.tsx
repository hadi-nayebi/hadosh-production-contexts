import { it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import ManualBeatControls from "./ManualBeatControls";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
afterEach(cleanup);
it("requires explicit mode, lane and save; failed saves retain the fields and dirty guard", async () => {
  const p = packages[0] as Performance,
    save = vi.fn(() => false),
    dirty = vi.fn(),
    added = vi.fn();
  render(
    <ManualBeatControls
      annotation={p.annotation}
      sections={p.containers}
      lanes={p.lanes}
      initialTime={2}
      disabled={false}
      onSave={save}
      onAdded={added}
      onDirty={dirty}
    />,
  );
  expect(save).not.toHaveBeenCalled();
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Add beat" }));
  });
  expect(dirty).toHaveBeenLastCalledWith(true);
  expect(
    (screen.getByRole("button", { name: "Save manual beat" }) as HTMLButtonElement).disabled,
  ).toBe(true);
  fireEvent.change(screen.getByRole("combobox"), { target: { value: p.lanes[0].id } });
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "-1" } });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Save manual beat" }));
  });
  expect(save).not.toHaveBeenCalled();
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "2" } });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Save manual beat" }));
  });
  expect(screen.getByRole("alert").textContent).toContain("fields are retained");
  expect((screen.getByRole("spinbutton") as HTMLInputElement).value).toBe("2");
  expect(added).not.toHaveBeenCalled();
  save.mockReturnValue(true);
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Save manual beat" }));
  });
  expect(added).toHaveBeenCalledWith(expect.stringContaining(p.annotation.audioHash), 2);
  expect(dirty).toHaveBeenLastCalledWith(false);
});

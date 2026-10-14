import { afterEach, expect, it, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { saveTimingBeforeNavigation, useTimingNavigationSave } from "./timingNavigation";
afterEach(cleanup);
it("permits navigation only after the active editor reports a successful durable save", async () => {
  const commit = vi.fn(() => false);
  function Editor() {
    useTimingNavigationSave(true, commit);
    return null;
  }
  expect(await saveTimingBeforeNavigation()).toBe(false);
  const view = render(<Editor />);
  expect(await saveTimingBeforeNavigation()).toBe(false);
  commit.mockReturnValue(true);
  expect(await saveTimingBeforeNavigation()).toBe(true);
  view.unmount();
  expect(await saveTimingBeforeNavigation()).toBe(false);
  expect(commit).toHaveBeenCalledTimes(2);
});

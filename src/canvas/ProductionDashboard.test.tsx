import { beforeEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductionDashboard from "./ProductionDashboard";

describe("Canvas production dashboard", () => {
  beforeEach(() => {
    cleanup();
    window.localStorage.clear();
  });

  test("maps the six production stages and builds editable source components", async () => {
    const user = userEvent.setup();
    render(<ProductionDashboard />);

    expect(screen.getAllByRole("tab")).toHaveLength(6);
    expect(
      screen.getByRole("heading", {
        name: "Turn the source audio into editable production components.",
      }),
    ).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "Load demo components" }));

    expect(screen.getByDisplayValue("The performers introduce the first character.")).toBeTruthy();
    expect(screen.getByLabelText("Project statistics").textContent).toContain("3 active");
    expect(screen.getByRole("button", { name: "Export project" })).toBeTruthy();
  });

  test("keeps Stage 1 state while the user inspects later production stages", async () => {
    const user = userEvent.setup();
    render(<ProductionDashboard />);

    await user.click(screen.getByRole("button", { name: "Load demo components" }));
    await user.click(screen.getByRole("tab", { name: /Identity/ }));

    expect(screen.getByRole("heading", { name: "Component identity" })).toBeTruthy();
    expect(screen.getByText(/mapped, not implemented/i)).toBeTruthy();

    await user.click(screen.getByRole("tab", { name: /Source/ }));
    expect(screen.getByDisplayValue("The performers introduce the first character.")).toBeTruthy();
  });
});

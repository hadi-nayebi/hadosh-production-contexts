import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WordNavigation from "./WordNavigation";
afterEach(cleanup);
it("carets and keyboard respect first/last or unsaved-disabled navigation", () => {
  const move = vi.fn();
  const view = render(
    <WordNavigation previous={false} next move={move}>
      <h2>one · end</h2>
    </WordNavigation>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Previous word" }));
  expect(move).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: "Next word" }));
  expect(move).toHaveBeenLastCalledWith(1);
  view.rerender(
    <WordNavigation previous next={false} move={move}>
      <h2>two · end</h2>
    </WordNavigation>,
  );
  fireEvent.keyDown(window, { key: "ArrowLeft" });
  expect(move).toHaveBeenLastCalledWith(-1);
  move.mockClear();
  view.rerender(
    <WordNavigation previous={false} next={false} move={move}>
      <h2>two · end</h2>
    </WordNavigation>,
  );
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(move).not.toHaveBeenCalled();
});
it("does not take arrow keys from text editing or spectrogram sliders", () => {
  const move = vi.fn();
  render(
    <WordNavigation previous next move={move}>
      <input aria-label="Edit time" />
      <div role="slider" tabIndex={0} aria-label="Frequency anchor" />
    </WordNavigation>,
  );
  fireEvent.keyDown(screen.getByRole("textbox"), { key: "ArrowLeft" });
  fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" });
  expect(move).not.toHaveBeenCalled();
});

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import TimingJsonInput from "./TimingJsonInput";
afterEach(cleanup);
it("stages a selected backup and keeps import disabled while reading", async () => {
  let finish!: (text: string) => void;
  const onChange = vi.fn(),
    onLoading = vi.fn();
  render(
    <TimingJsonInput value="previous" onChange={onChange} onLoading={onLoading} disabled={false} />,
  );
  const input = screen.getByLabelText("Open a timing backup");
  fireEvent.change(input, {
    target: {
      files: [
        {
          name: "timing.json",
          text: () =>
            new Promise<string>((resolve) => {
              finish = resolve;
            }),
        },
      ],
    },
  });
  expect(onLoading).toHaveBeenLastCalledWith(true);
  expect((screen.getByLabelText("Annotation JSON") as HTMLTextAreaElement).disabled).toBe(true);
  expect(onChange).not.toHaveBeenCalled();
  finish('{"revision":2}');
  await waitFor(() => expect(onChange).toHaveBeenCalledWith('{"revision":2}'));
  expect(onLoading).toHaveBeenLastCalledWith(false);
  expect(screen.getByRole("status").textContent).toContain("No timing has changed yet");
});
it.each(["malformed", "unreadable"])("preserves prior text for a %s file", async (failure) => {
  const onChange = vi.fn(),
    onLoading = vi.fn();
  render(
    <TimingJsonInput value="previous" onChange={onChange} onLoading={onLoading} disabled={false} />,
  );
  fireEvent.change(screen.getByLabelText("Open a timing backup"), {
    target: {
      files: [
        {
          name: "bad.json",
          text: async () => {
            if (failure === "unreadable") throw Error("read failed");
            return "{";
          },
        },
      ],
    },
  });
  await waitFor(() => expect(screen.getByRole("status").textContent).toContain("unchanged"));
  expect(onChange).not.toHaveBeenCalled();
  expect(onLoading).toHaveBeenLastCalledWith(false);
  expect((screen.getByLabelText("Annotation JSON") as HTMLTextAreaElement).value).toBe("previous");
});

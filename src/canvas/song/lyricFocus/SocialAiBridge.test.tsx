import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import SocialAiBridge from "./SocialAiBridge";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("uses the live clock during pullback and keeps prior-verse words and new icon cues out of the chorus", () => {
  const before = JSON.stringify(a);
  const end = Math.max(
    ...wordTiming(a)
      .intervals.filter((w) => a.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:6"))
      .map((w) => w.end),
  );
  const start = end;
  const r = render(
    <SocialAiBridge
      annotation={a}
      time={start + 0.1}
      start={start}
      chorusEnd={start + 6}
      end={start + 18}
    />,
  );
  for (const time of [start + 0.1, start + 0.3, start + 0.6]) {
    r.rerender(
      <SocialAiBridge
        annotation={a}
        time={time}
        start={start}
        chorusEnd={start + 6}
        end={start + 18}
      />,
    );
    expect(
      Number(
        document.querySelector("[data-phone-stage-time]")?.getAttribute("data-phone-stage-time"),
      ),
    ).toBe(time);
    expect(document.querySelectorAll("[data-phone-word]")).toHaveLength(0);
    expect(
      document.querySelectorAll(
        "[data-phone-icon-onset], [data-phone-hand-action], [data-private-data-trace]",
      ),
    ).toHaveLength(0);
    for (const icon of document.querySelectorAll("[data-phone-icon-onset]")) {
      const onset = Number(icon.getAttribute("data-phone-icon-onset"));
      expect(onset).toBeLessThan(end);
      expect(onset).toBeLessThanOrEqual(time);
    }
  }
  r.rerender(
    <SocialAiBridge
      annotation={a}
      time={start + 2.8}
      start={start}
      chorusEnd={start + 6}
      end={start + 18}
    />,
  );
  expect(document.querySelectorAll("[data-phone-stage-time]")).toHaveLength(0);
  expect(JSON.stringify(a)).toBe(before);
});
it("replaces the static room bridge with different AI worlds and returns only one occupied performance", () => {
  const before = JSON.stringify(a);
  const r = render(
    <SocialAiBridge annotation={a} time={113} start={104.6} chorusEnd={110.66} end={122.66} />,
  );
  expect(document.querySelector("[data-ai-infinity-journey]")).toBeTruthy();
  expect(document.querySelector("[data-ai-journey-image]")).toBeTruthy();
  expect(r.getByText("Text calculator")).toBeTruthy();
  const first = document
    .querySelector("[data-ai-journey-image]")
    ?.getAttribute("data-ai-journey-image");
  r.rerender(
    <SocialAiBridge annotation={a} time={116} start={104.6} chorusEnd={110.66} end={122.66} />,
  );
  expect(
    document.querySelector("[data-ai-journey-image]")?.getAttribute("data-ai-journey-image"),
  ).not.toBe(first);
  const lanes = [...document.querySelectorAll("[data-logo-lane]")].map((e) =>
    e.getAttribute("data-logo-lane"),
  );
  expect(new Set(lanes).size).toBeGreaterThan(2);
  r.rerender(
    <SocialAiBridge annotation={a} time={122.4} start={104.6} chorusEnd={110.66} end={122.66} />,
  );
  expect(document.querySelectorAll("[data-ai-workspace-return]")).toHaveLength(1);
  expect(document.querySelectorAll("[data-ai-logo]")).toHaveLength(0);
  expect(document.querySelector("[data-ai-language-metaphor]")).toBeNull();
  expect((document.querySelector("[data-ai-camera-view]") as HTMLElement).style.transform).toBe(
    "scale(1)",
  );
  expect(JSON.stringify(a)).toBe(before);
});

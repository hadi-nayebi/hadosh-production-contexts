import { afterEach, expect, it, vi } from "vitest";
import { StampPractice, practiceContext, type PracticeMedia } from "./stampPractice";
afterEach(() => vi.useRealTimers());
function setup() {
  vi.useFakeTimers();
  const media = {
    currentTime: 0,
    duration: 20,
    paused: true,
    ended: false,
    seeking: false,
    readyState: 4,
    play: vi.fn(async () => {
      media.paused = false;
    }),
    pause: vi.fn(() => {
      media.paused = true;
    }),
  };
  const notify = vi.fn(),
    capture = vi.fn();
  const session = new StampPractice(
    media as PracticeMedia,
    { min: 4, max: 6, fixed: false },
    notify,
    capture,
  );
  return { media, session, notify, capture };
}
it("adapts a three second source context to both edges and short sources", () => {
  expect(practiceContext(0.2, 20)).toEqual({ start: 0, end: 3 });
  expect(practiceContext(19.9, 20)).toEqual({ start: 17, end: 20 });
  expect(practiceContext(0.3, 1)).toEqual({ start: 0, end: 1 });
});
it("counts down without audio or early capture, captures actual media time once, pauses and replays identical context with green media-clock cue", async () => {
  const { media, session, capture } = setup();
  session.start(5);
  expect(session.state.count).toBe(3);
  expect(session.stamp("keyboard")).toBe(false);
  await vi.advanceTimersByTimeAsync(2000);
  expect(session.state.count).toBe(1);
  expect(media.play).not.toHaveBeenCalled();
  await vi.advanceTimersByTimeAsync(1000);
  expect(session.state.phase).toBe("practice");
  expect(media.currentTime).toBe(3.5);
  media.currentTime = 5.123456;
  expect(session.stamp("touch")).toBe(true);
  expect(media.paused).toBe(true);
  expect(session.stamp("click")).toBe(false);
  expect(capture).toHaveBeenCalledTimes(1);
  expect(capture.mock.calls[0][0].mediaTime).toBe(5.123456);
  await vi.advanceTimersByTimeAsync(450);
  expect(session.state.phase).toBe("replay");
  expect(media.currentTime).toBe(3.5);
  media.currentTime = 5.12;
  await vi.advanceTimersByTimeAsync(16);
  expect(session.state.flash).toBe(false);
  media.currentTime = 5.125;
  await vi.advanceTimersByTimeAsync(16);
  expect(session.state.flash).toBe(true);
  expect(session.state.cueDelayMs).toBeCloseTo(1.544);
  media.currentTime = 6.5;
  await vi.advanceTimersByTimeAsync(16);
  expect(media.paused).toBe(true);
  expect(session.state.phase).toBe("done");
  session.dispose();
});
it("rejects paused, seeking, late and out-of-neighbour taps without saving", async () => {
  const { media, session, capture } = setup();
  session.start(5);
  await vi.advanceTimersByTimeAsync(3000);
  media.currentTime = 5;
  media.paused = true;
  expect(session.stamp("mouse")).toBe(false);
  media.paused = false;
  media.seeking = true;
  expect(session.stamp("mouse")).toBe(false);
  media.seeking = false;
  media.currentTime = 6.5;
  expect(session.stamp("mouse")).toBe(false);
  media.currentTime = 3.8;
  expect(session.stamp("mouse")).toBe(false);
  expect(session.state.message).toContain("neighbour");
  expect(capture).not.toHaveBeenCalled();
  session.dispose();
});
it("cancels countdown and automatic replay on disposal and reports readiness failure", async () => {
  const { media, session } = setup();
  session.start(5);
  session.dispose();
  await vi.advanceTimersByTimeAsync(3500);
  expect(media.play).not.toHaveBeenCalled();
  session.start(5);
  media.readyState = 0;
  await vi.advanceTimersByTimeAsync(8100);
  expect(session.state.phase).toBe("error");
  expect(media.paused).toBe(true);
  session.dispose();
});
it("fixed recording edges, ended audio and cancelled retaps never write a receipt", async () => {
  const { media, capture } = setup();
  const fixed = new StampPractice(media, { min: 0, max: 0, fixed: true }, () => {}, capture);
  fixed.start(0);
  await vi.advanceTimersByTimeAsync(3000);
  media.currentTime = 0.5;
  expect(fixed.stamp("keyboard")).toBe(false);
  expect(capture).not.toHaveBeenCalled();
  fixed.dispose();
  const session = new StampPractice(media, { min: 4, max: 6, fixed: false }, () => {}, capture);
  session.start(5);
  await vi.advanceTimersByTimeAsync(3000);
  media.currentTime = 5;
  media.ended = true;
  expect(session.stamp("touch")).toBe(false);
  media.ended = false;
  expect(session.stamp("touch")).toBe(true);
  session.dispose();
  const count = media.play.mock.calls.length;
  await vi.advanceTimersByTimeAsync(1000);
  expect(media.play).toHaveBeenCalledTimes(count);
});
it("invalid readiness and rejected play are visible errors, not pending infinite sessions", async () => {
  const { media, session } = setup();
  media.duration = NaN;
  session.start(5);
  expect(session.state.phase).toBe("error");
  media.duration = 20;
  media.play.mockRejectedValueOnce(new Error("Playback blocked"));
  session.start(5);
  await vi.advanceTimersByTimeAsync(3000);
  expect(session.state.phase).toBe("error");
  expect(session.state.message).toContain("blocked");
  session.dispose();
});

export type TapReceipt = {
  mediaTime: number;
  capturedAt: string;
  input: string;
  contextStart: number;
  contextEnd: number;
};
export type PracticeState = {
  phase: "idle" | "countdown" | "preparing" | "practice" | "stamped" | "replay" | "done" | "error";
  count: number;
  flash: boolean;
  message: string;
  captured: number | null;
  cueDelayMs: number | null;
  context: { start: number; end: number } | null;
};
export type PracticeMedia = Pick<
  HTMLAudioElement,
  "currentTime" | "duration" | "paused" | "ended" | "seeking" | "readyState" | "play" | "pause"
>;
export function practiceContext(time: number, duration: number) {
  if (!Number.isFinite(time) || !Number.isFinite(duration) || duration <= 0)
    throw new Error("Audio is not ready. Try again.");
  const length = Math.min(3, duration);
  const start = Math.max(0, Math.min(duration - length, time - 1.5));
  return { start, end: start + length };
}
export class StampPractice {
  state: PracticeState = {
    phase: "idle",
    count: 0,
    flash: false,
    message: "",
    captured: null,
    cueDelayMs: null,
    context: null,
  };
  private generation = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private tick: ReturnType<typeof setInterval> | undefined;
  private flashTimer: ReturnType<typeof setTimeout> | undefined;
  private cue: number | null = null;
  private crossed = false;
  constructor(
    private media: PracticeMedia,
    private limits: { min: number; max: number; fixed: boolean },
    private notify: (state: PracticeState) => void,
    private onStamp: (receipt: TapReceipt) => void,
  ) {}
  private emit(p: Partial<PracticeState>) {
    this.state = { ...this.state, ...p };
    this.notify({ ...this.state });
  }
  private clear() {
    clearTimeout(this.timer);
    clearInterval(this.tick);
    clearTimeout(this.flashTimer);
  }
  stop() {
    this.generation++;
    this.clear();
    this.media.pause();
    this.emit({ phase: "idle", count: 0, flash: false });
  }
  dispose() {
    this.generation++;
    this.clear();
    this.media.pause();
  }
  start(time: number) {
    this.stop();
    if (
      !Number.isFinite(time) ||
      !Number.isFinite(this.media.duration) ||
      this.media.duration <= 0
    ) {
      this.emit({ phase: "error", message: "Audio is not ready. Try again." });
      return;
    }
    const token = this.generation;
    this.cue = null;
    this.emit({
      phase: "countdown",
      count: 3,
      message: "",
      captured: null,
      cueDelayMs: null,
      context: practiceContext(time, this.media.duration),
    });
    const next = () => {
      if (token !== this.generation) return;
      if (this.state.count > 1) {
        this.emit({ count: this.state.count - 1 });
        this.timer = setTimeout(next, 1000);
      } else void this.play(false, token);
    };
    this.timer = setTimeout(next, 1000);
  }
  replay(time: number) {
    if (
      !Number.isFinite(time) ||
      !Number.isFinite(this.media.duration) ||
      this.media.duration <= 0
    ) {
      this.stop();
      this.emit({ phase: "error", message: "Audio is not ready. Try again." });
      return;
    }
    const context = this.state.context ?? practiceContext(time, this.media.duration);
    this.stop();
    this.cue = time;
    this.emit({ context, message: "", cueDelayMs: null });
    void this.play(true, this.generation);
  }
  private async play(replay: boolean, token: number) {
    const context = this.state.context!;
    this.emit({ phase: "preparing", count: 0, flash: false });
    this.crossed = false;
    try {
      this.media.pause();
      this.media.currentTime = context.start;
      // Wait for the actual seek/readiness, with a bounded failure. No synthetic audio.
      const began = Date.now();
      while (this.media.seeking || this.media.readyState < 2) {
        if (token !== this.generation) return;
        if (Date.now() - began > 5000) throw new Error("Audio is not ready. Try again.");
        await new Promise((r) => setTimeout(r, 20));
      }
      let timeout: ReturnType<typeof setTimeout> | undefined;
      await Promise.race([
        this.media.play(),
        new Promise<never>((_, reject) => {
          timeout = setTimeout(
            () => reject(new Error("Playback could not start. Try again.")),
            5000,
          );
        }),
      ]).finally(() => clearTimeout(timeout));
      if (token !== this.generation) {
        this.media.pause();
        return;
      }
      this.emit({ phase: replay ? "replay" : "practice" });
      const startWall = Date.now();
      this.tick = setInterval(() => {
        if (token !== this.generation) return;
        const t = this.media.currentTime;
        if (replay && this.cue !== null && !this.crossed && t >= this.cue) {
          this.crossed = true;
          this.emit({ flash: true, cueDelayMs: (t - this.cue) * 1000 });
          this.flashTimer = setTimeout(() => this.emit({ flash: false }), 240);
        }
        if (t >= context.end || this.media.ended || this.media.paused) {
          clearInterval(this.tick);
          this.media.pause();
          this.emit({ phase: "done", message: replay ? "" : "Try again when you’re ready." });
        } else if (Date.now() - startWall > 15000) {
          this.stop();
          this.emit({ phase: "error", message: "Playback stalled. Try again." });
        }
      }, 16);
    } catch (e) {
      if (token !== this.generation) return;
      this.stop();
      this.emit({
        phase: "error",
        message: e instanceof Error ? e.message : "Playback failed. Try again.",
      });
    }
  }
  stamp(input: string) {
    const c = this.state.context;
    const t = this.media.currentTime;
    if (
      this.state.phase !== "practice" ||
      this.media.paused ||
      this.media.ended ||
      this.media.seeking ||
      !c ||
      t < c.start ||
      t >= c.end
    )
      return false;
    this.generation++;
    this.clear();
    this.media.pause();
    if (this.limits.fixed || !Number.isFinite(t) || t < this.limits.min || t > this.limits.max) {
      this.emit({
        phase: "done",
        message: this.limits.fixed
          ? "Recording edge stays fixed."
          : "That crossed a neighbouring boundary. Try again.",
      });
      return false;
    }
    this.emit({ phase: "stamped", captured: t, message: "" });
    this.onStamp({
      mediaTime: t,
      capturedAt: new Date().toISOString(),
      input,
      contextStart: c.start,
      contextEnd: c.end,
    });
    const token = this.generation;
    this.timer = setTimeout(() => {
      if (token === this.generation) this.replay(t);
    }, 450);
    return true;
  }
}

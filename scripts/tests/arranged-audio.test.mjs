import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { audioExportPlan, audioExportArgs, verifyAudioSources } from "../arranged-audio.mjs";
import { sourceFrameAt, mediaPathAt } from "../../src/canvas/song/wordMotion/arrangement.mjs";
const seed = JSON.parse(
  fs.readFileSync(
    new URL("../../src/canvas/song/liveStage/earth-upgrade-seed.json", import.meta.url),
  ),
);
const options = { source: "/fixtures/original.mp3", publicRoot: "/fixtures/public" };
const fixture = () => {
  const p = structuredClone(seed);
  p.arrangement[0].sourceStartFrame = 15;
  p.arrangement[0].media = {
    path: "/previews/opening.mp3",
    sha256: "a".repeat(64),
    durationFrames: 885,
  };
  return p;
};
test("export segments agree with dashboard mapping in arbitrary frame order, including joins and gaps", () => {
  const p = fixture(),
    plan = audioExportPlan(p, options);
  for (const frame of [2672, 870, 0, 2313, 869, 2312, 300, 871]) {
    const s = plan.segments.find((s) => frame >= s.startFrame && frame < s.endFrame);
    const mapped =
      s.input === null ? null : (s.offsetSamples + (frame - s.startFrame) * 1600) / 1600;
    assert.equal(mapped, sourceFrameAt(p, frame));
    if (s.input !== null)
      assert.equal(
        plan.sources[s.input].file,
        mediaPathAt(p, frame)
          ? path.resolve(options.publicRoot, "." + mediaPathAt(p, frame))
          : options.source,
      );
  }
  assert.equal(
    plan.segments.reduce((n, s) => n + s.samples, 0),
    2673 * 1600,
  );
  const args = audioExportArgs(plan, "/fixtures/out.wav");
  assert.ok(args.includes("-n"));
  const graph = args[args.indexOf("-filter_complex") + 1];
  assert.match(graph, /atrim=start_sample=24000:end_sample=1416000/);
  assert.match(graph, /atrim=start_sample=1152000:end_sample=3460800/);
  assert.match(graph, /anullsrc=r=48000:cl=stereo,atrim=end_sample=576000/);
  assert.match(graph, /concat=n=3:v=0:a=1/);
});
test("rejects out-of-bounds, incomplete coverage, unsafe paths and bad media before export", () => {
  for (const mutate of [
    (p) => p.arrangement[0].media.durationFrames--,
    (p) => p.arrangement[1].startFrame++,
    (p) => (p.arrangement[0].media.path = "/previews/../../secret.mp3"),
  ]) {
    const p = fixture();
    mutate(p);
    assert.throws(() => audioExportPlan(p, options));
  }
  const plan = audioExportPlan(fixture(), options);
  assert.throws(
    () =>
      verifyAudioSources(plan, () => {
        throw Error("missing fixture");
      }),
    /missing fixture/,
  );
  assert.throws(
    () => verifyAudioSources(plan, () => ({ sha256: "b".repeat(64), durationSeconds: 90 })),
    /hash mismatch/,
  );
  assert.throws(
    () =>
      verifyAudioSources(plan, (file) => ({
        sha256: plan.sources.find((s) => s.file === file).sha256,
        durationSeconds: 1,
      })),
    /trim exceeds/,
  );
  assert.doesNotThrow(() =>
    verifyAudioSources(plan, (file) => {
      const s = plan.sources.find((s) => s.file === file);
      return { sha256: s.sha256, durationSeconds: s.requiredSamples / 48000 };
    }),
  );
});
test("simple excerpt retains original source offset without arrangement", () => {
  const p = structuredClone(seed);
  delete p.arrangement;
  p.source.inMs = 36300;
  p.composition.durationInFrames = 1074;
  const plan = audioExportPlan(p, options);
  assert.equal(plan.segments[0].offsetSamples, 36300 * 48);
  assert.equal(plan.segments[0].samples, 1074 * 1600);
  assert.equal(plan.sources.length, 1);
});

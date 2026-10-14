import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  previewOptions,
  phoneStoragePlan,
  verifyPhoneStorage,
  inspectVolume,
  phoneFrameRanges,
} from "../phone-preview.mjs";
const seed = JSON.parse(
  fs.readFileSync(
    new URL("../../src/canvas/song/liveStage/earth-upgrade-seed.json", import.meta.url),
  ),
);
test("phone options are explicit, bounded and exclude incidental stills", () => {
  assert.deepEqual(previewOptions([]), { phone: false, renderStills: true });
  const p = previewOptions(["--project", "fixture.json", "--phone-preview", "--audio-reviewed"]);
  assert.deepEqual([p.width, p.height, p.fps, p.concurrency], [854, 480, 30, 1]);
  assert.equal(p.renderStills, false);
  assert.equal(p.codec, "h264");
  assert.equal(p.audioCodec, "aac");
  assert.equal(p.videoBitrate, "2M");
  assert.equal(p.audioBitrate, "96k");
  for (const flag of ["--audio-only", "--stills-only", "--frames"])
    assert.throws(() => previewOptions(["--phone-preview", flag]), /cannot be combined/);
});
test("reserves source copies, bounded sequential scratch, all encoded output and per-volume safety margin", () => {
  const plan = phoneStoragePlan(seed, 66276992, {
    temp: "/fixture/temp",
    output: "/fixture/output",
    scratch: "/tmp",
  });
  assert.equal(plan.length, 3);
  assert.ok(plan[1].bytes > 900 * 854 * 480 * 4);
  assert.ok(plan[1].bytes < 1_600_000_000);
  assert.throws(
    () => verifyPhoneStorage(plan, () => ({ id: "same", availableBytes: 112455680 })),
    /No output created/,
  );
  const reserve = 512 * 1024 ** 2;
  const needed = plan.reduce((n, p) => n + p.bytes, reserve);
  assert.equal(
    verifyPhoneStorage(plan, () => ({ id: "same", availableBytes: needed }))[0].required,
    needed,
  );
  assert.throws(() => verifyPhoneStorage(plan, () => ({ id: "same", availableBytes: needed - 1 })));
  const split = verifyPhoneStorage(plan, (p) => ({ id: p, availableBytes: 10_000_000_000 }));
  assert.equal(split.length, 3);
  assert.equal(
    split.reduce((n, v) => n + v.required, 0),
    needed + 2 * reserve,
  );
});
test("phone chunks cover the full timeline exactly with inclusive renderer frame ranges", () => {
  for (const frames of [1, 899, 900, 901, 1800, 6804]) {
    const ranges = phoneFrameRanges(frames);
    assert.equal(ranges[0][0], 0);
    assert.equal(ranges.at(-1)[1], frames - 1);
    let count = 0;
    for (const [i, [start, end]] of ranges.entries()) {
      assert.ok(end - start + 1 <= 900);
      if (i) assert.equal(start, ranges[i - 1][1] + 1);
      count += end - start + 1;
    }
    assert.equal(count, frames);
  }
  assert.deepEqual(phoneFrameRanges(901), [
    [0, 899],
    [900, 900],
  ]);
  for (const frames of [0, -1, 1.5, NaN, Infinity])
    assert.throws(() => phoneFrameRanges(frames), /Invalid phone frame count/);
});
test("volume inspection resolves a nonexistent destination without creating it", () => {
  const target = new URL("../../.origin/phone-preview-preflight-not-created/child", import.meta.url)
    .pathname;
  assert.equal(fs.existsSync(target), false);
  assert.ok(Number.isFinite(inspectVolume(target).availableBytes));
  assert.equal(fs.existsSync(target), false);
});

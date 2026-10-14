import fs from "node:fs";
import path from "node:path";

export function previewOptions(args) {
  const phone = args.includes("--phone-preview");
  if (phone && args.some((a) => ["--audio-only", "--stills-only", "--frames"].includes(a)))
    throw Error("--phone-preview cannot be combined with audio-only or still-frame options");
  return phone
    ? {
        phone,
        renderStills: false,
        width: 854,
        height: 480,
        fps: 30,
        codec: "h264",
        audioCodec: "aac",
        videoBitrate: "2M",
        audioBitrate: "96k",
        encodingMaxRate: "2500k",
        encodingBufferSize: "5M",
        concurrency: 1,
      }
    : { phone: false, renderStills: true };
}

// Sequential renders release raw-frame scratch between chunks. Keep the same
// partition for execution and reservation so a newer draft cannot silently fall
// back to reserving/rendering the entire song at once.
export function phoneFrameRanges(frames) {
  if (!Number.isSafeInteger(frames) || frames < 1) throw Error("Invalid phone frame count");
  const ranges = [];
  for (let start = 0; start < frames; start += 900)
    ranges.push([start, Math.min(frames - 1, start + 899)]);
  return ranges;
}

// Conservative reservation, not a measured renderer peak or a promise of capacity.
export function phoneStoragePlan(project, assetBytes, { temp, output, scratch }) {
  const frames = project.composition.durationInFrames;
  const firstRange = phoneFrameRanges(frames)[0];
  const scratchFrames = firstRange[1] - firstRange[0] + 1;
  const pcm = Math.ceil((frames / 30) * 48000 * 4) + 4096;
  const final = Math.ceil((((frames / 30) * 2596000) / 8) * 1.1) + 1048576;
  return [
    {
      path: temp,
      bytes: 2 * (assetBytes + pcm) + 256 * 1024 ** 2,
      purpose: "inputs, bundle copies and bundle allowance",
    },
    {
      path: scratch,
      bytes: scratchFrames * 854 * 480 * 4 + pcm,
      purpose: "one sequential chunk (at most 900 raw frames) plus full-song audio scratch",
    },
    { path: output, bytes: final * 2, purpose: "encoded output, mux allowance and receipt" },
  ];
}

export function inspectVolume(target) {
  let existing = path.resolve(target);
  while (!fs.existsSync(existing)) existing = path.dirname(existing);
  const stat = fs.statSync(existing),
    volume = fs.statfsSync(existing);
  return { id: String(stat.dev), availableBytes: volume.bavail * volume.bsize };
}

export function verifyPhoneStorage(plan, inspect = inspectVolume) {
  const volumes = new Map();
  for (const item of plan) {
    const v = inspect(item.path),
      previous = volumes.get(v.id);
    volumes.set(v.id, {
      required: (previous?.required || 512 * 1024 ** 2) + item.bytes,
      available: Math.min(previous?.available ?? Infinity, v.availableBytes),
    });
  }
  for (const v of volumes.values())
    if (v.available < v.required)
      throw Error(
        `Phone preview storage preflight failed: need ${Math.ceil(v.required / 1024 ** 2)} MiB including reserve; available ${Math.floor(v.available / 1024 ** 2)} MiB. No output created.`,
      );
  return [...volumes.values()];
}

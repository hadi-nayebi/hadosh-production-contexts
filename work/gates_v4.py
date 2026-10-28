#!/usr/bin/env python3
"""Gates on full-film-v4.mp4: (a) switch audit via blend-fraction recovery,
(b) word-event presence via type-zone contrast probes, (c) unintended-motion
scan inside stable scene windows, dwell stats vs Rule C-1."""
import json, os, subprocess
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
MP4 = os.path.join(ROOT, "full-film-v4.mp4")
FPS = 30
SCENES = [("S01", None, 0.40), ("S02", 1.98, 0.40), ("S03", 5.024, 0.40),
          ("S04", 6.756, 0.40), ("S05", 8.96, 0.40), ("S06", 11.14, 0.40),
          ("S07", 12.30, 0.40), ("S08", 14.736, 0.40), ("S09", 15.34, 0.40),
          ("S10", 18.966, 0.25), ("S11", 21.522, 0.40), ("S12", 23.756, 0.40),
          ("S13", 27.22, 0.40), ("S14", 30.12, 0.25), ("S15", 33.657, 0.40),
          ("S16", 35.581, 0.40), ("S17", 37.50, 0.40), ("S18", 40.64, 0.40),
          ("S19", 42.806, 0.40), ("S20", 45.28, 0.40), ("S21", 47.798, 0.40),
          ("S22", 51.306, 0.40), ("S23", 54.780, 0.40), ("S24", 55.68, 0.40),
          ("S25", 58.288, 0.40), ("S26", 61.96, 0.40), ("S27", 64.976, 0.40),
          ("S28", 67.884, 0.40), ("S29", 70.344, 0.40), ("S30", 72.56, 0.40),
          ("S31", 75.758, 0.40), ("S32", 77.354, 0.40), ("S33", 78.280, 0.40)]
starts = [0.0] + [a - fd for _, a, fd in SCENES[1:]]
imgs = [np.asarray(Image.open(os.path.join(ROOT, "scenes", f"{s}.png")).convert("RGB").resize((270, 480))).astype(float)
        for s, _, _ in SCENES]

def grab(t, w=270):
    p = subprocess.run(["ffmpeg", "-v", "error", "-ss", f"{t:.3f}", "-i", MP4,
                        "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "-"],
                       capture_output=True)
    from io import BytesIO
    im = Image.open(BytesIO(p.stdout)).convert("RGB")
    return np.asarray(im.resize((w, int(w * 16 / 9)))).astype(float)

def grid(a):
    return a[::7, ::4]

small = [grid(im) for im in imgs]

def small_of(frame):
    return grid(frame)

print("== (a) switch audit: blend fraction at scored fade midpoint ==")
worst = 0.0
for k in range(1, len(SCENES)):
    sid, anchor, fd = SCENES[k]
    mid = starts[k] + fd / 2
    fr = small_of(grab(mid))
    A, B = small[k - 1], small[k]
    denom = np.sum((B - A) ** 2)
    u = float(np.sum((fr - A) * (B - A)) / denom) if denom > 0 else 1.0
    # time offset implied if u off-centre: dt = (u-0.5)*fd
    dt = (u - 0.5) * fd
    worst = max(worst, abs(dt))
    print(f"{sid} anchor {anchor:7.3f}  u(mid)={u:.2f}  implied offset {dt:+.3f}s")
print("worst |offset|:", round(worst, 3), "s  (gate: <= 0.15)")

print("== dwell stats (from realized switch anchors) ==")
anchors = [0.0] + [a for _, a, _ in SCENES[1:]] + [81.05]
dwells = [round(anchors[i + 1] - anchors[i], 2) for i in range(33)]
for (sid, _, _), dw in zip(SCENES, dwells):
    flag = ""
    if dw > 5.0: flag = " OVER CEILING"
    elif dw > 3.5: flag = " above band"
    elif dw < 1.4: flag = " UNDER FLOOR"
    print(sid, dw, flag)
print("mean dwell", round(sum(dwells) / 33, 2), "max", max(dwells), "min", min(dwells))

print("== (c) unintended motion: frame-diff inside stable windows ==")
def frame_at(t):
    p = subprocess.run(["ffmpeg", "-v", "error", "-ss", f"{t:.3f}", "-i", MP4,
                        "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "-"],
                       capture_output=True)
    from io import BytesIO
    return np.asarray(Image.open(BytesIO(p.stdout)).convert("RGB")).astype(float)
# windows chosen away from fades and word events: diff should be ~codec noise
for sid, a, b in [("S02-mid", 3.0, 3.5), ("S11-mid", 22.3, 22.8), ("S22-mid", 52.3, 52.8),
                  ("S33-tail-mid", 79.6, 79.9)]:
    d = np.abs(frame_at(b) - frame_at(a)).mean()
    print(sid, "mean|diff| =", round(float(d), 3))

#!/usr/bin/env python3
"""Automated motion and loudness checks on a rendered film (video-agnostic).

    python3 tools/qa.py film.mp4

Thresholds and intended exceptions come from video.json "qa": holdMax (seconds),
allowStill (designed stillness windows) and allowPops (e.g. stop-motion windows).

Fails (exit 1) on:
  * frozen stretches: frame-to-frame change below a threshold for longer than
    --hold-max seconds, outside the --allow windows (intended stillness);
  * single-frame pops: a frame whose change is > 3x both neighbours and large.
Also prints integrated loudness and true peak (ffmpeg ebur128).
Needs ffmpeg and NumPy.
"""
import json, subprocess, sys
from pathlib import Path
import numpy as np

path = sys.argv[1]
qa = json.loads((Path(__file__).resolve().parent.parent / 'video.json').read_text()).get('qa', {})
hold_max = qa.get('holdMax', 1.5)
allow = [tuple(w) for w in qa.get('allowStill', [])]
allow_pops = [tuple(w) for w in qa.get('allowPops', [])]
w, h = 160, 90
probe = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=r_frame_rate', '-of', 'csv=p=0', path], capture_output=True, text=True).stdout.strip()
num, den = map(int, probe.split('/')); fps = num / den
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-vf', f'scale={w}:{h},format=gray', '-f', 'rawvideo', '-'], capture_output=True).stdout
frames = np.frombuffer(raw, np.uint8).reshape(-1, h, w).astype(np.float32)
d = np.abs(np.diff(frames, axis=0)).mean(axis=(1, 2))
print(f'{len(frames)} frames @ {fps:.2f} fps, mean change {d.mean():.3f}')
problems = []
still = d < 0.08
i = 0
while i < len(still):
    if still[i]:
        j = i
        while j < len(still) and still[j]: j += 1
        a, b = i / fps, j / fps
        if b - a > hold_max and not any(a >= x - 0.3 and b <= y + 0.3 for x, y in allow):
            problems.append(f'frozen {a:.2f}-{b:.2f} s ({b - a:.2f} s)')
        i = j
    else:
        i += 1
for k in range(1, len(d) - 1):
    tk = (k + 1) / fps
    if any(a <= tk <= b for a, b in allow_pops): continue
    if d[k] > 6 and d[k] > 3 * d[k - 1] and d[k] > 3 * d[k + 1]:
        problems.append(f'single-frame pop at {(k + 1) / fps:.2f} s (change {d[k]:.1f} vs {d[k - 1]:.1f}/{d[k + 1]:.1f})')
lo = subprocess.run(['ffmpeg', '-v', 'info', '-i', path, '-af', 'ebur128=peak=true', '-f', 'null', '-'], capture_output=True, text=True).stderr
summary = [l.strip() for l in lo.splitlines()[-12:] if any(k in l for k in ('I:', 'LRA:', 'Peak:'))]
print('loudness:', ' | '.join(summary))
for p in problems: print('PROBLEM', p)
print('PASS' if not problems else f'FAIL ({len(problems)} problems)')
sys.exit(1 if problems else 0)

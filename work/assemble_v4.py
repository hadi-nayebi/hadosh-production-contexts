#!/usr/bin/env python3
"""Assemble the v4 master: shipped Academy full-audio.wav with its L8 block
replaced by (new L8 v4 take over a bed patch of its own length + the locked
0.80 s post-L8 gap), using the Academy programme's own splice treatment
(take + bed patch, 0.010 s splice crossfades — full-film assembly method).
Bed patch = the programme's own gap material looped (programme.wav gaps,
0.30 s loop crossfade), exactly as the A7 replacements were made.
Constructed positions are sample-exact; Whisper anchors are measured on
THIS master afterwards (work/measure_v4.py)."""
import numpy as np, json, os
from scipy.io import wavfile

SR = 48000
HERE = os.path.dirname(os.path.abspath(__file__))
ACAD = os.path.join(HERE, "..", "..", "soa01-academy", "specimen")

def load(path):
    sr, d = wavfile.read(path)
    assert sr == SR, (path, sr)
    if d.dtype == np.int16: d = d.astype(np.float32) / 32768.0
    if d.ndim > 1: d = d[:, 0]
    return d
def segf(d, a, b): return d[int(round(a * SR)):int(round(b * SR))].copy()
def xfade_join(a, b, xf=0.010):
    n = int(xf * SR)
    t = np.linspace(0, 1, n, dtype=np.float32)
    mid = a[-n:] * np.cos(t * np.pi / 2) + b[:n] * np.sin(t * np.pi / 2)
    return np.concatenate([a[:-n], mid, b[n:]])

master = load(os.path.join(ACAD, "full-film", "work", "full-audio.wav"))
prog = load(os.path.join(ACAD, "full-segment", "work", "programme.wav"))
take = load(os.path.join(HERE, "line-L08-v4-48k.wav"))

# Bed loop unit from the programme's own gap material (assembly of record)
gaps = [segf(prog, 16.956, 18.156), segf(prog, 19.912, 20.712),
        segf(prog, 26.983, 27.783), segf(prog, 29.683, 30.223)]
loop = gaps[0]
for g in gaps[1:]: loop = xfade_join(loop, g, 0.30)
def bedpatch(dur):
    need = int(round(dur * SR)); out = loop
    while len(out) < need + SR: out = xfade_join(out, loop, 0.30)
    return out[:need].copy()

# Match the dry take to the programme's voice level: scale so the take's
# active-speech RMS equals the shipped master's L8 v3 active-speech RMS.
def active_rms(x, a, b):
    s = x[int(a * SR):int(b * SR)]
    n = int(0.02 * SR)
    rms = np.array([np.sqrt(np.mean(s[i:i + n] ** 2)) for i in range(0, len(s) - n, n)])
    return float(np.sqrt(np.mean(rms[rms > 0.01] ** 2)))
ref = active_rms(master, 23.756, 27.60)
got = active_rms(take, 0.0, len(take) / SR)
gain = ref / got
take = take * gain
print(f"voice match: shipped L8 RMS {ref:.4f} · take raw {got:.4f} · gain {gain:.3f} ({20*np.log10(gain):+.2f} dB)")

L8_START, L9_START_OLD = 23.756, 28.593
# Post-L8 gap of record: the Academy marked-text record gives L8's gap as
# 0.80 s after the replaceable span; the shipped master's measured span
# (v3 voice offset ~27.72 to the span end 28.593) is 0.873 s — the block
# keeps the span whole so L9+ shift by the take delta only.
GAP8 = 0.873
pad = np.zeros(int(round(GAP8 * SR)), dtype=np.float32)
block = np.concatenate([take, pad]) + bedpatch(len(take) / SR + GAP8)
pre = segf(master, 0.0, L8_START)
post = segf(master, L9_START_OLD, len(master) / SR)
raw = xfade_join(xfade_join(pre, block, 0.010), post, 0.010)
delta = len(raw) / SR - len(master) / SR
print(f"take {len(take)/SR:.3f}s · block {len(block)/SR:.3f}s · old block {L9_START_OLD-L8_START:.3f}s")
print(f"delta {delta:+.3f}s · new total {len(raw)/SR:.3f}s (old {len(master)/SR:.3f}s)")
wavfile.write(os.path.join(HERE, "v4-raw.wav"), SR,
              (np.clip(raw, -1, 1) * 32767).astype(np.int16))
json.dump({"l8_start": L8_START, "gap8": GAP8, "take_dur": len(take) / SR,
           "take_gain": round(float(gain), 4), "delta": round(float(delta), 4),
           "total": round(len(raw) / SR, 3)},
          open(os.path.join(HERE, "timeline.json"), "w"), indent=1)
print("v4-raw.wav + timeline.json written")

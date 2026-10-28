#!/usr/bin/env python3
"""Master the v4 raw assembly with the shipped deterministic chain (fixed
gain + fixed-ceiling lookahead limiter, ceiling 0.805 — the Academy chain
of record). Gain solved to land ≈ -14.35 LUFS with TP <= -1.02 dBTP.
The scored final fade (last 1.0 s cosine) is applied before mastering."""
import numpy as np, subprocess, json, re, os
from scipy.io import wavfile
from scipy.ndimage import maximum_filter1d

SR = 48000
HERE = os.path.dirname(os.path.abspath(__file__))
sr, d = wavfile.read(os.path.join(HERE, "v4-raw.wav"))
x = (d.astype(np.float32) / 32768.0) if d.dtype == np.int16 else d.astype(np.float32)
if x.ndim > 1: x = x[:, 0]
n = int(1.0 * SR); t = np.linspace(0, 1, n, dtype=np.float32)
x[-n:] *= np.cos(t * np.pi / 2)

def measure_arr(a, tag):
    p = os.path.join(HERE, f"_m{tag}.wav")
    wavfile.write(p, SR, (np.clip(a, -1, 1) * 32767).astype(np.int16))
    out = subprocess.run(["ffmpeg", "-i", p, "-af", "loudnorm=print_format=json",
                          "-f", "null", "-"], capture_output=True, text=True).stderr
    os.remove(p)
    j = json.loads(re.search(r'\{\s*"input_i".*?\}', out, re.S).group(0))
    return float(j["input_i"]), float(j["input_tp"])

def lookahead_limit(a, gain_db, ceiling=0.805, look_ms=5.0, rel_ms=50.0):
    y = a * (10 ** (gain_db / 20))
    env = maximum_filter1d(np.abs(y), size=int(look_ms * SR / 1000), mode="nearest")
    gr = np.minimum(1.0, ceiling / np.maximum(env, 1e-9))
    a_rel = 1.0 - np.exp(-1.0 / (rel_ms * SR / 1000))
    out_gr = np.empty_like(gr); cur = 1.0
    for i in range(len(gr)):
        cur = gr[i] if gr[i] < cur else cur + (1.0 - cur) * a_rel
        out_gr[i] = cur
    return y * out_gr, float(20 * np.log10(1.0 / max(out_gr.min(), 1e-9)))

TARGET = -14.35
L, TP = measure_arr(x, "0")
print("raw:", L, TP)
gain = TARGET - L
best = None
for i in range(4):
    master, maxgr = lookahead_limit(x, gain)
    L2, TP2 = measure_arr(master, str(i + 1))
    print(f"iter gain {gain:+.2f} -> {L2} LUFS, TP {TP2}, maxGR {maxgr:.2f}")
    if TP2 <= -1.02 and abs(L2 - TARGET) < 0.25:
        best = (master, L2, TP2, gain, maxgr); break
    gain += (TARGET - L2) - (0.25 if TP2 > -1.05 else 0.0)
    best = (master, L2, TP2, gain, maxgr)
master, L2, TP2, gain_used, maxgr = best
wavfile.write(os.path.join(HERE, "v4-master.wav"), SR,
              (np.clip(master, -1, 1) * 32767).astype(np.int16))
json.dump({"lufs": L2, "tp": TP2, "gain_db": round(float(gain_used), 3),
           "ceiling": 0.805, "max_gr_db": round(float(maxgr), 3)},
          open(os.path.join(HERE, "master-record.json"), "w"), indent=1)
print("v4-master.wav:", L2, "LUFS /", TP2, "dBTP")

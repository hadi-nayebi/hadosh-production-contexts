#!/usr/bin/env python3
"""Synthesize a unit's music bed, radio-dial cold open and sound effects.

Everything is generated from the unit's `sound_design` block, so the stems are
license-clear and reproducible: edit unit.json, rerun this script.

    python3 tools/make_audio.py units/01-scale/unit.json

Needs Python 3 and NumPy. Writes 48 kHz mono 16-bit WAVs into the unit's assets/.
The music is ducked under the narration clip's actual loudness envelope.
"""
import json, sys, wave
from pathlib import Path
import numpy as np

SR = 48000


def db(x):
    return 10 ** (x / 20)


def read_wav(path):
    with wave.open(str(path)) as w:
        sr, n = w.getframerate(), w.getnframes()
        x = np.frombuffer(w.readframes(n), dtype=np.int16).astype(np.float32) / 32768
        if w.getnchannels() > 1:
            x = x.reshape(-1, w.getnchannels()).mean(1)
    return x, sr


def write_wav(path, x):
    x = np.clip(x, -1, 1)
    with wave.open(str(path), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((x * 32767).astype(np.int16).tobytes())


def fast_lowpass(x, cutoff):
    # FFT brick-ish low-pass with a soft roll-off (fast for long buffers)
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (f / cutoff) ** 4)
    return np.fft.irfft(X, len(x))


def bandpass(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (lo / np.maximum(f, 1)) ** 4) / (1 + (f / hi) ** 4)
    return np.fft.irfft(X, len(x))


def env_follow(x, sr, win=0.12):
    n = max(1, int(sr * win))
    k = np.ones(n) / n
    return np.sqrt(np.convolve(x * x, k, mode='same'))


def main(unit_path):
    unit_path = Path(unit_path); u = json.loads(unit_path.read_text())
    sd = u['sound_design']; dur = u['duration']; N = int(dur * SR)
    out = unit_path.parent / 'assets'; out.mkdir(exist_ok=True)
    t = np.arange(N) / SR
    rng = np.random.default_rng(42)

    # --- narration envelope on the unit timeline (for ducking) ---
    nar = next(c for c in u['audio'] if c['id'] == sd['music']['duck_follows'])
    x, sr = read_wav((unit_path.parent / nar['src']).resolve())
    x = x[int(nar.get('from', 0) * sr):int(nar.get('to', len(x) / sr) * sr)]
    e = env_follow(x, sr, 0.25)
    speech = np.zeros(N)
    idx = (np.arange(len(e)) / sr + nar['at'])
    speech_vals = (e > 0.02).astype(float)
    speech[np.clip((idx * SR).astype(int), 0, N - 1)] = speech_vals
    # hold & smooth the gate: attack 80 ms, release 600 ms
    g = np.zeros(N); acc = 0.0
    up, down = 1 - np.exp(-1 / (0.08 * SR)), 1 - np.exp(-1 / (0.6 * SR))
    filled = np.maximum.accumulate(np.where(speech > 0, np.arange(N), 0))
    gate = ((np.arange(N) - filled) < 0.35 * SR) & (filled > 0)
    gate = gate.astype(float)
    for i in range(0, N, 48):
        tgt = gate[i]; acc += (tgt - acc) * (up * 48 if tgt > acc else down * 48)
        g[i:i + 48] = min(max(acc, 0), 1)

    # --- music: slow evolving pad ---
    m = sd['music']; pad = np.zeros(N)
    for k, f in enumerate(m['chord_hz']):
        det = 1 + 0.0025 * np.sin(2 * np.pi * (0.05 + 0.013 * k) * t)
        ph = 2 * np.pi * np.cumsum(f * det) / SR
        amp = 0.55 + 0.45 * np.sin(2 * np.pi * (0.07 + 0.021 * k) * t + k)
        pad += amp * (np.sin(ph) + 0.25 * np.sin(2 * ph) + 0.08 * np.sin(3 * ph)) / (1 + 0.35 * k)
    pad += 0.4 * fast_lowpass(rng.standard_normal(N), 300) * (0.5 + 0.5 * np.sin(2 * np.pi * 0.03 * t))
    pad = fast_lowpass(pad, 1600)
    pad /= np.sqrt(np.mean(pad ** 2)) + 1e-9
    level = db(m['level_db']) * (1 - g + g * db(m['duck_db']))
    fi0, fi1 = m['fade_in']; fo0, fo1 = m['fade_out']
    fade = np.clip((t - fi0) / (fi1 - fi0), 0, 1) * np.clip((fo1 - t) / (fo1 - fo0), 0, 1)
    write_wav(out / 'music.wav', pad * level * fade)

    # --- radio dial cold open ---
    r = sd['radio']; a0, a1 = r['span']; lock = r['lock_at']
    seg = (t >= a0) & (t < a1); radio = np.zeros(N)
    n = rng.standard_normal(N)
    sweep = 900 + 700 * np.sin(2 * np.pi * 0.45 * t) + 400 * np.sin(2 * np.pi * 1.3 * t)
    hiss = bandpass(n, 500, 4500) * (0.6 + 0.4 * np.sin(2 * np.pi * 7 * t) ** 2)
    whistle = np.sin(2 * np.pi * np.cumsum(sweep) / SR) * 0.25 * (np.sin(2 * np.pi * 0.9 * t) > 0.55)
    chatter = bandpass(rng.standard_normal(N), 250, 2200) * (np.sin(2 * np.pi * 3.1 * t) > 0.2) * 0.5
    radio = (hiss * 0.5 + whistle + chatter) * seg
    ramp = np.clip((t - a0) / 0.4, 0, 1) * np.clip((lock - t) / 0.25, 0, 1)
    radio *= ramp
    radio /= np.max(np.abs(radio)) + 1e-9
    click = np.zeros(N); i0 = int(lock * SR); L = int(0.03 * SR)
    click[i0:i0 + L] = np.sin(2 * np.pi * 1800 * np.arange(L) / SR) * np.exp(-np.arange(L) / (0.006 * SR))
    write_wav(out / 'radio.wav', radio * db(r['level_db']) + click * db(r['level_db'] + 4))

    # --- sound effects ---
    fx = np.zeros(N)
    def place(sig, at, gain_db):
        i = int(at * SR); j = min(N, i + len(sig)); fx[i:j] += sig[:j - i] * db(gain_db)
    for ev in sd['sfx']:
        k = ev['kind']
        if k == 'thump':
            L = int(0.35 * SR); tt = np.arange(L) / SR
            sig = np.sin(2 * np.pi * (70 - 30 * tt) * tt) * np.exp(-tt / 0.08) + 0.3 * fast_lowpass(rng.standard_normal(L), 900) * np.exp(-tt / 0.02)
        elif k == 'page':
            L = int(0.45 * SR); tt = np.arange(L) / SR
            sig = bandpass(rng.standard_normal(L), 1200, 7000) * np.exp(-((tt - 0.18) / 0.09) ** 2) * 0.8
        elif k == 'flip':
            L = int(0.25 * SR); tt = np.arange(L) / SR
            sig = bandpass(rng.standard_normal(L), 1500, 8000) * np.exp(-((tt - 0.07) / 0.04) ** 2)
        elif k == 'whoosh':
            L = int(0.9 * SR); tt = np.arange(L) / SR
            sig = bandpass(rng.standard_normal(L), 300, 3000) * np.sin(np.pi * tt / 0.9) ** 2
        elif k == 'tick':
            L = int(0.12 * SR); tt = np.arange(L) / SR
            sig = np.sin(2 * np.pi * 1320 * tt) * np.exp(-tt / 0.018) * 0.7
        elif k == 'chime':
            L = int(2.2 * SR); tt = np.arange(L) / SR
            sig = sum(np.sin(2 * np.pi * f * tt) * np.exp(-tt / d) * a for f, d, a in [(659.25, .9, .6), (987.77, .7, .35), (1318.5, .5, .2)])
        else:
            raise SystemExit('unknown sfx ' + k)
        sig = sig / (np.max(np.abs(sig)) + 1e-9)
        place(sig, ev['at'], ev['db'])
    write_wav(out / 'sfx.wav', fx)
    print('wrote', *(p.name for p in sorted(out.glob('*.wav'))))


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'units/01-scale/unit.json')

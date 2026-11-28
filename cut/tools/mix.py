#!/usr/bin/env python3
"""Mix the film's audio exactly as the JSON places it (video-agnostic).

    python3 tools/mix.py out.wav [--report]

Reads video.json and every unit.json: places each clip (asset, at, from, to,
fades, gain, optional band-pass) on its bus, applies each unit's ducking rules
(music under voice), bus gains and bus peak limits, and writes a 48 kHz mono
float WAV. The final loudness normalisation happens in `render.mjs mux`.
--report prints the speech-to-music separation over every voice clip.
"""
import json, sys, wave
from pathlib import Path
import numpy as np

SR = 48000
root = Path(__file__).resolve().parent.parent


def read(path):
    with wave.open(str(path)) as w:
        sr, ch, sw, n = w.getframerate(), w.getnchannels(), w.getsampwidth(), w.getnframes()
        raw = w.readframes(n)
    x = np.frombuffer(raw, dtype={2: np.int16, 4: np.int32}[sw]).astype(np.float64) / {2: 32768, 4: 2147483648}[sw]
    if ch > 1: x = x.reshape(-1, ch).mean(1)
    if sr != SR: x = np.interp(np.arange(0, len(x) * SR / sr) * sr / SR, np.arange(len(x)), x)
    return x


def bandpass(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (lo / np.maximum(f, 1)) ** 4) / (1 + (f / hi) ** 4)
    return np.fft.irfft(X, len(x))


def rms_db(x, win=0.05):
    n = int(win * SR); k = np.ones(n) / n
    return 10 * np.log10(np.convolve(x * x, k, 'same') + 1e-12)


def smooth_gate(g, attack, release):
    out = np.empty_like(g); a = 1 - np.exp(-1 / (attack * SR)); r = 1 - np.exp(-1 / (release * SR)); y = 0.0
    for i, v in enumerate(g):
        y += (v - y) * (a if v > y else r); out[i] = y
    return out


def main():
    out_path = sys.argv[1]; report = '--report' in sys.argv
    video = json.loads((root / 'video.json').read_text())
    units, start = [], 0.0
    for ref in video['units']:
        u = json.loads((root / ref['src']).read_text()); u['_base'] = (root / ref['src']).parent; u['_start'] = start; start += u['duration']; units.append(u)
    N = int(start * SR) + SR
    buses = {b: np.zeros(N) for b in video['audioBus'] if b != 'master'}
    cache, voice_windows = {}, []
    for u in units:
        unit_bus = {b: np.zeros(N) for b in buses}
        for c in u['audio']:
            p = (u['_base'] / c['asset']).resolve()
            if p not in cache: cache[p] = read(p)
            x = cache[p]; a = int(c.get('from', 0) * SR); b = int(c['to'] * SR) if 'to' in c else len(x); x = x[a:b].copy()
            if 'filter' in c: x = bandpass(x, c['filter']['lo'], c['filter']['hi'])
            fi, fo = int(c.get('fadeIn', 0) * SR), int(c.get('fadeOut', 0) * SR)
            if fi: x[:fi] *= np.linspace(0, 1, fi)
            if fo: x[-fo:] *= np.linspace(1, 0, fo)
            x *= 10 ** ((c['gain_dB'] + video['audioBus'][c['bus']].get('gain_dB', 0)) / 20)
            i = int((u['_start'] + c['at']) * SR); j = min(N, i + len(x)); unit_bus[c['bus']][i:j] += x[:j - i]
            if c['bus'] == 'voice': voice_windows.append((i, j, c['id']))
        for d in u.get('duck', []):
            g = (rms_db(unit_bus[d['under']]) > d['threshold_dB']).astype(float)
            g = smooth_gate(g, d['attack'], d['release'])
            unit_bus[d['bus']] *= 1 - g * (1 - 10 ** (d['depth_dB'] / 20))
        for b in buses: buses[b] += unit_bus[b]
    for b, x in buses.items():
        lim = video['audioBus'][b].get('limit_dBTP')
        if lim is not None:
            L = 10 ** (lim / 20); pk = np.max(np.abs(x))
            if pk > L: x[:] = np.tanh(x / L) * L
    mix = sum(buses.values())[:int(start * SR)]
    if report:
        sep = []
        for i, j, cid in voice_windows:
            v = buses['voice'][i:j]; m = buses['music'][i:j]
            vd = 10 * np.log10(np.mean(v * v) + 1e-12); md = 10 * np.log10(np.mean(m * m) + 1e-12); sep.append((cid, vd - md))
        print('speech-to-music separation (dB):', ', '.join(f'{c} {s:.1f}' for c, s in sep))
        print('minimum separation: %.1f dB' % min(s for _, s in sep))
    with wave.open(out_path, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(4); w.setframerate(SR)
        w.writeframes((np.clip(mix, -1, 1) * 2147483647).astype(np.int32).tobytes())
    print('wrote', out_path, f'{len(mix) / SR:.2f} s, peak {20 * np.log10(np.max(np.abs(mix)) + 1e-12):.1f} dBFS')


main()

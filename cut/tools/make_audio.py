#!/usr/bin/env python3
"""Synthesize a unit's music and effect stems from its audio-spec.json (asset layer).

    python3 tools/make_audio.py units/01-scale/assets/audio-spec.json [...more specs]

Video-agnostic: the instruments and effect recipes below are generic sound
primitives. Every note, chord, time, duration, frequency and gain comes from
the spec. Writes 48 kHz mono 16-bit WAV files next to the spec (stem "file").
Needs Python 3 and NumPy.
"""
import json, sys, wave
from pathlib import Path
import numpy as np

SR = 48000
NOTE = {'C': -9, 'C#': -8, 'Db': -8, 'D': -7, 'D#': -6, 'Eb': -6, 'E': -5, 'F': -4, 'F#': -3, 'Gb': -3, 'G': -2, 'G#': -1, 'Ab': -1, 'A': 0, 'A#': 1, 'Bb': 1, 'B': 2}


def hz(note):
    name, octave = note[:-1], int(note[-1])
    return 440.0 * 2 ** ((NOTE[name] + 12 * (octave - 4)) / 12)


def write(path, x):
    x = np.clip(x, -1, 1)
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((x * 32767).astype(np.int16).tobytes())


def spectral(x, lo=None, hi=None, order=4):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    if lo: X *= 1 / (1 + (lo / np.maximum(f, 1)) ** order)
    if hi: X *= 1 / (1 + (f / hi) ** order)
    return np.fft.irfft(X, len(x))


def env(n, attack, release):
    e = np.ones(n); a = min(n, int(attack * SR)); r = min(n, int(release * SR))
    if a: e[:a] = np.linspace(0, 1, a)
    if r: e[-r:] *= np.linspace(1, 0, r)
    return e


def norm(x):
    p = np.max(np.abs(x)) if len(x) else 0
    return x / p if p > 0 else x


class Synth:
    def __init__(self, seed):
        self.rng = np.random.default_rng(seed)

    def noise(self, n):
        return self.rng.standard_normal(n)

    # ---------------- instruments ----------------
    def instrument(self, inst, ev):
        dur = ev['dur']; kind = inst['kind']; rel = inst.get('release', 0.5)
        n = int((dur + (inst['decay'] * 4 if kind == 'pluck' else rel)) * SR); t = np.arange(n) / SR; out = np.zeros(n)
        if kind == 'noise':
            lo, hi = inst['bandHz']
            out = spectral(self.noise(n), lo, hi) * (0.6 + 0.4 * np.sin(2 * np.pi * inst['lfoHz'][0] * t))
            return norm(out) * 0.5 * env(n, 1.0, 1.0)
        for k, note in enumerate(ev['notes']):
            f0 = hz(note)
            if kind == 'additive':
                lfo = inst['lfoHz'][0] + (inst['lfoHz'][1] - inst['lfoHz'][0]) * (k / max(1, len(ev['notes']) - 1))
                amp = 0.7 + 0.3 * np.sin(2 * np.pi * lfo * t + k)
                for mult, a in inst['partials']:
                    for d in (-1, 1):
                        f = f0 * mult * 2 ** (d * inst['detuneCents'] / 2400)
                        out += a * amp * np.sin(2 * np.pi * f * t + self.rng.uniform(0, 6.28)) / (1 + 0.25 * k)
            elif kind == 'pluck':
                dec = np.exp(-t / inst['decay'])
                for h in range(1, 9):
                    out += (inst['brightness'] ** (h - 1)) * np.sin(2 * np.pi * f0 * h * t) * dec ** (1 + 0.35 * (h - 1)) / h ** 0.5
                a = int(0.004 * SR); out[:a] *= np.linspace(0, 1, a)
        if inst.get('lowpassHz'): out = spectral(out, None, inst['lowpassHz'], 2)
        if kind == 'additive':
            e = np.ones(n); a = int(inst.get('attack', 0.01) * SR); hold = int(dur * SR)
            e[:a] = np.linspace(0, 1, a); e[hold:] = np.linspace(1, 0, n - hold); out *= e
        return norm(out) * 0.5

    # ---------------- effect recipes ----------------
    def fx(self, ev):
        k = ev['kind']; dur = ev.get('dur', 0.3); n = max(1, int(dur * SR)); t = np.arange(n) / SR; N = self.noise
        def burst(lo, hi, tau, length):
            m = int(length * SR); tt = np.arange(m) / SR
            return spectral(N(m), lo, hi) * np.exp(-tt / tau)
        def swell(x, shape):
            u = np.linspace(0, 1, len(x))
            w = {'swell': np.sin(np.pi * u) ** 2, 'resolve': np.sin(np.pi * np.minimum(1, u * 1.6)) ** 2 * (1 - u * 0.6),
                 'rise': u ** 2 * np.minimum(1, (1 - u) * 8)}.get(shape, np.sin(np.pi * u) ** 2)
            return x * w
        if k in ('tick', 'pop', 'click', 'ping'):
            f = ev.get('hz', 1500); L = {'tick': .06, 'pop': .05, 'click': .03, 'ping': .6}[k]; m = int(L * SR); tt = np.arange(m) / SR
            tau = {'tick': .012, 'pop': .008, 'click': .004, 'ping': .18}[k]
            x = np.sin(2 * np.pi * f * tt) * np.exp(-tt / tau)
            if k == 'pop': x += 0.4 * burst(1500, 6000, .004, L)
            return x
        if k in ('thump', 'thunk', 'pulse', 'bookThump', 'stampThump'):
            f0, f1 = ev.get('hz', {'bookThump': [90, 45], 'stampThump': [120, 50]}.get(k, [70, 40]))
            m = int(0.6 * SR); tt = np.arange(m) / SR; f = f1 + (f0 - f1) * np.exp(-tt / 0.08)
            x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt / (0.25 if k == 'pulse' else 0.12))
            if k in ('bookThump', 'stampThump', 'thunk'): x += 0.5 * burst(200, 2500, 0.015, 0.6)
            return x
        if k == 'relay':
            a = burst(1000, 7000, 0.003, 0.05); b = burst(1000, 7000, 0.003, 0.038)
            return a + 0.6 * np.concatenate([np.zeros(len(a) - len(b)), b])
        if k in ('whoosh', 'wind', 'gust', 'breath', 'airSwarm'):
            lo, hi = ev.get('bandHz', {'gust': [300, 2500], 'breath': [400, 3000]}.get(k, [300, 3000]))
            x = spectral(N(n), lo, hi)
            if k == 'wind': x *= 0.7 + 0.3 * np.sin(2 * np.pi * 0.7 * t)
            return swell(x, ev.get('shape', 'swell'))
        if k == 'riser':
            f0, f1 = ev['hz']; f = f0 * (f1 / f0) ** (t / dur)
            return np.sin(2 * np.pi * np.cumsum(f) / SR) * (t / dur) ** 1.5 * np.minimum(1, (dur - t) * 10)
        if k == 'tone':
            f0, f1 = ev['hz']; f = f0 + (f1 - f0) * (t / dur)
            return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / dur) ** 2
        if k == 'shimmer':
            f0, f1 = ev['hz']; x = np.zeros(n)
            for i in range(12):
                f = self.rng.uniform(f0, f1); st = int(self.rng.uniform(0, dur * 0.6) * SR); tt = np.arange(n - st) / SR
                x[st:] += np.sin(2 * np.pi * f * tt) * np.exp(-tt / 0.35)
            return x
        if k == 'clack':
            m = int(.08 * SR); tt = np.arange(m) / SR
            return burst(800, 5000, 0.006, .08) + 0.5 * np.sin(2 * np.pi * 1900 * tt) * np.exp(-tt / .01)
        if k == 'chalkTap': return burst(1500, 7000, 0.004, 0.06)
        if k == 'unfold': return burst(1200, 8000, 0.03, 0.25)
        if k == 'chuff': return burst(150, 1500, 0.05, 0.3)
        if k in ('pen', 'sand', 'paperSlide', 'flutter', 'creak', 'chalkScratch', 'eraser'):
            band = {'pen': (2500, 8000), 'sand': (3000, 10000), 'paperSlide': (1500, 7000), 'flutter': (1000, 6000), 'creak': (300, 1200), 'chalkScratch': (1800, 9000), 'eraser': (500, 4000)}[k]
            x = spectral(N(n), *band)
            if k in ('pen', 'chalkScratch'):
                writing = ev.get('texture') == 'writing'
                grit = (self.rng.random(n) < (0.004 if writing else 0.002)).astype(float)
                x = x * (0.5 + 0.5 * np.abs(np.sin(2 * np.pi * (9 if writing else 4) * t))) + spectral(grit, 2000, None) * 3
            if k == 'flutter': x *= 0.5 + 0.5 * (np.sin(2 * np.pi * 14 * t) > 0)
            if k == 'creak': x *= 0.6 + 0.4 * np.sin(2 * np.pi * 23 * t)
            return x * np.sin(np.pi * t / max(dur, 1e-3)) ** 0.5
        if k == 'chatter':
            lo, hi = ev['bandHz']; return spectral(N(n), lo, hi) * (np.sin(2 * np.pi * 11 * t) > 0.3) * np.sin(np.pi * t / dur)
        if k == 'warble':
            f0 = 140 + 30 * np.sin(2 * np.pi * 3 * t); src = np.sign(np.sin(2 * np.pi * np.cumsum(f0) / SR)) * 0.5
            x = sum(spectral(src, f * 0.8, f * 1.25, 2) for f in ev['formantsHz'])
            return x * (0.5 + 0.5 * np.abs(np.sin(2 * np.pi * 4 * t))) * np.sin(np.pi * t / dur)
        if k == 'hum':
            x = sum(a * np.sin(2 * np.pi * ev['hz'] * (i + 1) * t) for i, a in enumerate(ev['harmonics']))
            return x * env(n, ev.get('fadeIn', .5), ev.get('fadeOut', .5))
        if k == 'whistle':
            f0, f1 = ev['hz']; f = f0 * (f1 / f0) ** (t / dur)
            return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / dur)
        if k == 'roomtone':
            return spectral(N(n), 60, 900) * 0.6
        # radio layers
        if k == 'static':
            lo, hi = ev['bandHz']; x = spectral(N(n), lo, hi) * (0.6 + 0.4 * np.sin(2 * np.pi * ev['flutterHz'] * t) ** 2)
            return x * env(n, ev.get('fadeIn', .3), ev.get('fadeOut', .2))
        if k == 'whistleLayer':
            r0, r1 = ev['sweepRate']; a0, a1 = ev['sweepHz']
            f = ev['baseHz'] + a0 * np.sin(2 * np.pi * r0 * t) + a1 * np.sin(2 * np.pi * r1 * t)
            gate = (np.sin(2 * np.pi * ev['gate'][0] * t) > ev['gate'][1]).astype(float)
            return np.sin(2 * np.pi * np.cumsum(f) / SR) * spectral(gate, None, 40, 2)
        if k == 'tuneSweep':
            f = 300 + 2600 * (t / dur); return np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.6 + spectral(N(n), 800, 5000) * 0.6
        raise SystemExit('unknown sound kind ' + k)


def render_spec(spec_path):
    spec_path = Path(spec_path); spec = json.loads(spec_path.read_text()); dur = spec['duration']; S = Synth(sum(map(ord, str(spec_path))))
    for name, stem in spec['stems'].items():
        out = np.zeros(int((dur + 8) * SR))
        def place(x, t, gain):
            i = int(t * SR); j = min(len(out), i + len(x))
            if j > i: out[i:j] += x[:j - i] * gain
        if 'instruments' in stem:
            for ev in stem['events']:
                place(S.instrument(stem['instruments'][ev['inst']], ev), ev['t'], ev['gain'])
        elif 'layers' in stem:
            for ev in stem['layers']:
                e = dict(ev); e['kind'] = 'whistleLayer' if ev['kind'] == 'whistle' else ev['kind']
                place(norm(S.fx(e)), ev['t'], ev['gain'])
        else:
            for ev in stem['events']:
                place(norm(S.fx(ev)), ev['t'], ev['gain'])
        out = out[:int(dur * SR)]
        peak = np.max(np.abs(out)) or 1
        write(spec_path.parent / stem['file'], out / peak * 0.89)
        print('wrote', spec_path.parent / stem['file'], f'{len(out) / SR:.1f} s')


if __name__ == '__main__':
    for p in sys.argv[1:]: render_spec(p)

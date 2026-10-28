"""Whisper-measure the v4 master; write work/anchors-v4.json with the word
anchors the scene plan locks switches and events to."""
import numpy as np, json, os
from scipy.io import wavfile
from scipy.signal import resample_poly
from faster_whisper import WhisperModel

HERE = os.path.dirname(os.path.abspath(__file__))
sr, d = wavfile.read(os.path.join(HERE, "v4-master.wav"))
x = (d.astype(np.float32) / 32768.0) if d.dtype == np.int16 else d.astype(np.float32)
if x.ndim > 1: x = x[:, 0]
x16 = resample_poly(x, 1, 3).astype(np.float32)
m = WhisperModel("small", device="cpu", compute_type="int8")
segs, _ = m.transcribe(x16, word_timestamps=True, language="en")
words = [{"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)}
         for s in segs for w in (s.words or [])]
json.dump(words, open(os.path.join(HERE, "words-v4.json"), "w"), indent=0)

def F(w, lo, hi):
    r = [(v["w"], v["s"]) for v in words
         if v["w"].lower().strip(".,") == w and lo <= v["s"] <= hi]
    return r[0][1] if r else None

SPEC = {
    "L1_billion": ("billion", 1.0, 4.5), "L2_them": ("them", 4.5, 7.0),
    "L3_accumulating": ("accumulating", 6.0, 11.5),
    "L4_instructions": ("instructions", 10.3, 13.5), "L4_memory": ("memory", 11.0, 14.5),
    "L4_files": ("files", 12.0, 15.5),
    "L5_closed": ("closed", 14.0, 18.5), "L5_yours": ("yours", 14.0, 19.5),
    "L6_nothing": ("nothing", 18.0, 21.5), "L6_rented_clause": ("rented", 19.0, 23.0),
    "L7_the": ("the", 20.5, 23.0),
    "L8_start": ("everything", 23.0, 25.5), "L8_harness": ("harness", 26.0, 29.5),
    "L8_distilled": ("distilled", 28.5, 32.5), "L8_sessions": ("sessions", 30.0, 34.0),
    "L9_two": ("two", 32.5, 36.5), "L10_from": ("from", 35.5, 42.0),
    "L10_and_keeps": ("and", 37.5, 43.5),
    "L11_own": ("own", 41.5, 46.5), "L11_dash_same": ("same", 43.5, 48.5),
    "L12_two": ("two", 47.0, 51.0), "L13_rented": ("rented", 50.0, 54.5),
    "L14_stays": ("stays", 54.0, 59.0),
    "L15_adds": ("adds", 58.0, 62.5), "L15_sharper": ("sharper", 59.5, 64.5),
    "L15_grows": ("grows", 60.5, 66.5),
    "L16_yours": ("yours", 64.0, 68.0), "L17_start": ("on", 66.5, 70.0),
    "L17_nothing": ("nothing", 67.0, 71.5),
    "L18_open": ("open", 70.0, 73.0), "L18_read": ("read", 70.5, 74.0),
    "L18_change": ("change", 71.0, 75.0), "L18_any": ("any", 71.5, 76.0),
    "L19_start": ("understand", 74.5, 77.5),
    "L20_build": ("build", 76.0, 79.0),
    "L21_keep": ("keep", 78.0, 80.0), "L21_eye": ("eye", 78.2, 80.2),
    "L21_it": ("it", 78.4, 80.4)}
out = {}
for k, (w, lo, hi) in SPEC.items():
    v = F(w, lo, hi); out[k] = v; print(k, v)
json.dump(out, open(os.path.join(HERE, "anchors-v4.json"), "w"), indent=1)

#!/usr/bin/env python3
"""Measured-fit leg data for T91 attempt 2 — PIL, Liberation Serif stand-ins.
Georgia (typeface) absent from this seat -> GEORGIA-UNVERIFIED.
Wrap model identical to the recreation's fit contract (greedy word wrap on the
same metric basis; role text carries letterspacing)."""
import json
from PIL import ImageFont

ITAL = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
_cache = {}
def font(path, px):
    k = (path, px)
    if k not in _cache: _cache[k] = ImageFont.truetype(path, px)
    return _cache[k]
def width(text, px, kind):
    f = font(ITAL if kind == "quote" else REG, px)
    w = f.getlength(text)
    if kind == "role": w += len(text) * 0.14 * px
    return w
def ink_h(text, px, kind):
    f = font(ITAL if kind == "quote" else REG, px)
    b = f.getbbox(text)
    return round(b[3] - b[1], 1)
def wrap(text, maxw, px, kind):
    lines, cur = [], ""
    for w_ in text.split():
        trial = (cur + " " + w_) if cur else w_
        if cur and width(trial, px, kind) > maxw: lines.append(cur); cur = w_
        else: cur = trial
    if cur: lines.append(cur)
    return lines

CARDS = [
    {"quote": "Every AI can do both. It is a power-enhancing technology.", "speaker": "Bruce Schneier", "role": "SECURITY TECHNOLOGIST, HARVARD KENNEDY SCHOOL", "year": 2026},
    {"quote": "A doctor, a lawyer — someone whose loyalty is to you.", "speaker": "Tim Berners-Lee", "role": "INVENTOR OF THE WEB", "year": 2026},
    {"quote": "I'm here with my son, and I'd love you to tutor him on this math problem, but don't give him the answer.", "speaker": "Sal Khan", "role": "FOUNDER, KHAN ACADEMY", "year": 2024},
    {"quote": "Teach him how to ask, not what to answer.", "speaker": "Ada Lovelace", "role": "FOUNDER, KHAN ACADEMY", "year": 2024},
]
QUOTE_PX, SPK_PX, ROLE_PX, LH, RLH, SLH = 24, 20, 15, 1.32, 1.3, 1.15
ZONE = 412 - 18 - 104 - 64  # cardH - attrBottom - attrH - quoteY = 226
out = {}
for vw, s in [(360, 1.0), (320, 320 / 360)]:
    quote_w, attr_w = 256 * s, (328 - 20 - 20 - 14) * s
    rows = []
    for i, c in enumerate(CARDS):
        px, lines = QUOTE_PX, wrap(c["quote"], quote_w, QUOTE_PX, "quote")
        block = len(lines) * px * LH
        while block > ZONE and px > 20:
            px -= 1; lines = wrap(c["quote"], quote_w, px, "quote"); block = len(lines) * px * LH
        spk = wrap(c["speaker"], attr_w, SPK_PX, "speaker")
        role = wrap(c["role"] + " · " + str(c["year"]), attr_w, ROLE_PX, "role")
        attr_h = SPK_PX * SLH + 3 + len(role) * ROLE_PX * RLH
        rows.append({"card": i, "px": px, "quoteLines": len(lines), "blockH": round(block, 1),
                     "quoteInkH": ink_h("Ag", px, "quote"), "spkLines": len(spk), "spkInkW": round(width(c["speaker"], SPK_PX, "speaker"), 1),
                     "spkInkH": ink_h(c["speaker"], SPK_PX, "speaker"), "roleLines": len(role),
                     "roleInkH": ink_h("A", ROLE_PX, "role"), "attrH": round(attr_h, 1),
                     "fit": block <= ZONE and len(spk) == 1 and len(role) <= 4 and attr_h <= 104})
    out[str(vw)] = {"quoteW": round(quote_w, 1), "attrW": round(attr_w, 1), "zone": ZONE, "rows": rows}
out["hud"] = {"lineW": round(width("2037 · A POSSIBLE TUESDAY", 15, "regular") + len("2037 · A POSSIBLE TUESDAY") * 0.18 * 15, 1),
              "lineInkH": ink_h("2037 · A POSSIBLE TUESDAY", 15, "regular"),
              "clockInkH": ink_h("19:00", 34, "regular"),
              "tagInkW": round(width("QUOTE", 12, "regular") + 5 * 0.32 * 12, 1),
              "tagInkH": ink_h("QUOTE", 12, "regular"),
              "markInkH": ink_h("“", 46, "regular")}
print(json.dumps(out, indent=1))

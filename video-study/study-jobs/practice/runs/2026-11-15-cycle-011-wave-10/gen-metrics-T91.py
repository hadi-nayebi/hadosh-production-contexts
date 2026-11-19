#!/usr/bin/env python3
"""Char-width tables (per 100px) for the stand-in serif metrics used by the
T91 attempt-2 harness and fit leg. Georgia (the typeface) is absent from this
seat; Liberation Serif is the metric basis. GEORGIA-UNVERIFIED."""
import json, string
from PIL import ImageFont

FONTS = {
    "quote": "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf",
    "regular": "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
}
SIZE = 100
chars = set(string.printable) | set("“”‘’—–·…")
out = {}
for kind, path in FONTS.items():
    f = ImageFont.truetype(path, SIZE)
    table = {}
    for ch in sorted(chars):
        if ch in "\x0b\x0c\r\n\t":
            continue
        try:
            table[ch] = round(f.getlength(ch), 3)
        except Exception:
            pass
    out[kind] = {"font": path, "size": SIZE, "widths": table,
                 "space": round(f.getlength(" "), 3),
                 "default": round(f.getlength("x"), 3)}
print(json.dumps(out))

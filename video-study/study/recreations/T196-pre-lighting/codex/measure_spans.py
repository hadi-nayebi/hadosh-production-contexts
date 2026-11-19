#!/usr/bin/env python3
"""Span ink measurer for the T196 Cycle-036 harness.
Reads a JSON request {words:[...], sizes:[...]} from argv[1] (a file path),
writes metrics JSON to argv[2]: {"word|px": {"w": inkWidthPx, "h": inkHeightPx}}.
Instrument: PIL ImageFont, Liberation Sans Regular (named stand-in font,
metric-compatible with Arial/Helvetica in the CONFIG font stack), rendered
at 4x supersample; ink bounds are the rendered glyphs' actual textbbox."""
import json, sys
from PIL import Image, ImageDraw, ImageFont

SS = 4
FONT = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

req = json.load(open(sys.argv[1]))
out = {}
img = Image.new("L", (8, 8), 0)
dr = ImageDraw.Draw(img)
cache = {}
for px in req["sizes"]:
    cache[px] = ImageFont.truetype(FONT, int(px * SS))
for word in req["words"]:
    for px in req["sizes"]:
        f = cache[px]
        x0, y0, x1, y1 = dr.textbbox((0, 0), word, font=f)
        out[f"{word}|{px}"] = {"w": round((x1 - x0) / SS, 2), "h": round((y1 - y0) / SS, 2)}
json.dump(out, open(sys.argv[2], "w"))
print(f"measured {len(out)} word/size pairs, font=Liberation Sans Regular, supersample x{SS}")

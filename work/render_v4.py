#!/usr/bin/env python3
"""Render full-film-v4.mp4: 33 still scenes switching on measured word
anchors (crossfades 0.40 s standard / 0.25 s at the two verdict joints /
1.00 s final fade to black) + word events E1-E22 exactly per scene-plan.md
S7. No image motion of any kind. Scenes are crossfaded A->B linearly over
the fade duration ending AT the anchor (the switch centres within ~half a
fade of the anchor; measured per-switch in the report)."""
import json, os, math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
W, H, FPS = 1080, 1920, 30
TOTAL = 81.050
NFRAMES = int(round(TOTAL * FPS))
FONT_PATH = "/usr/share/fonts/truetype/noto/NotoSerifDisplay-Bold.ttf"
CREAM = (241, 231, 206); GOLD = (217, 169, 78)

SCENES = [  # (id, switch_anchor or None for S1, fade)
    ("S01", None, 0.40), ("S02", 1.98, 0.40), ("S03", 5.024, 0.40),
    ("S04", 6.756, 0.40), ("S05", 8.96, 0.40), ("S06", 11.14, 0.40),
    ("S07", 12.30, 0.40), ("S08", 14.736, 0.40), ("S09", 15.34, 0.40),
    ("S10", 18.966, 0.25), ("S11", 21.522, 0.40), ("S12", 23.756, 0.40),
    ("S13", 27.22, 0.40), ("S14", 30.12, 0.25), ("S15", 33.657, 0.40),
    ("S16", 35.581, 0.40), ("S17", 37.50, 0.40), ("S18", 40.64, 0.40),
    ("S19", 42.806, 0.40), ("S20", 45.28, 0.40), ("S21", 47.798, 0.40),
    ("S22", 51.306, 0.40), ("S23", 54.780, 0.40), ("S24", 55.68, 0.40),
    ("S25", 58.288, 0.40), ("S26", 61.96, 0.40), ("S27", 64.976, 0.40),
    ("S28", 67.884, 0.40), ("S29", 70.344, 0.40), ("S30", 72.56, 0.40),
    ("S31", 75.758, 0.40), ("S32", 77.354, 0.40), ("S33", 78.280, 0.40)]

ZONES = {"Z-TL": (300, 480), "Z-TC": (540, 480), "Z-TR": (780, 480),
         "Z-ML": (300, 800), "Z-C": (540, 800), "Z-MR": (780, 800),
         "Z-LL": (300, 1250), "Z-LC": (540, 1250), "Z-LR": (780, 1250)}
CAP = {"HERO": 120, "STANDARD": 72, "SMALL": 48}

# events: id, text layout [(segment, gold?)], zone or explicit centre,
# direction, scale, anchor, exit-time-or-None, entry seconds
EV = [
    ("E1", [("1.2 ", 0), ("BILLION", 1)], "Z-TC", "GROW", "HERO", 1.98, 4.90, 0.35),
    ("E2", [("ONE OF THEM", 0)], "Z-LC", "RISE", "STANDARD", 5.024, 6.246, 0.35),
    ("E3", [("ACCUMULATING", 0)], "Z-MR", "RISE", "STANDARD", 8.96, 10.496, 0.35),
    ("E4a", [("Your ", 0), ("INSTRUCTIONS.", 1)], "Z-LL", "SLIDE-R", "STANDARD", 11.14, 14.20, 0.35),
    ("E4b", [("Your ", 0), ("MEMORY.", 1)], "Z-C", "RISE", "STANDARD", 12.30, 14.20, 0.35),
    ("E4c", [("Your ", 0), ("FILES.", 1)], "Z-LR", "SLIDE-L", "STANDARD", 13.32, 14.50, 0.35),
    ("E5", [("YOURS?", 0)], "Z-LC", "GROW", "STANDARD", 17.24, 18.46, 0.60),
    ("E6a", [("NOTHING.", 0)], "Z-C", "STAMP", "HERO", 18.78, 21.10, 0.35),
    ("E6b", [("IT WAS ALL ", 0), ("RENTED", 1)], "Z-LC", "FALL", "SMALL", 20.28, 21.10, 0.35),
    ("E7", [("DISTILLED", 0)], "Z-MR", "RISE", "STANDARD", 30.12, 27.22, 0.35),
    ("E8", [("the ", 0), ("HARNESS", 1)], "Z-TC", "GROW", "HERO", 27.22, 32.324, 0.35),
    ("E9", [("TWO ", 0), ("PLACES", 1)], "Z-TC", "GROW", "STANDARD", 34.28, 35.28, 0.35),
    ("E10", [("YOUR OWN ", 0), ("SESSIONS", 1)], "Z-ML", "RISE", "SMALL", 37.50, 40.64, 0.35),
    ("E11", [("THEIR ", 0), ("SIDE", 1)], "Z-LR", "FALL", "STANDARD", 40.64, 42.38, 0.35),
    ("E12", [("YOUR ", 0), ("OWN", 1), (" COMPUTER", 0)], "Z-LC", "RISE", "STANDARD", 44.24, 45.28, 0.35),
    ("E13a", [("SAME ", 0), ("INTELLIGENCE.", 1)], "Z-ML", "SLIDE-R", "STANDARD", 47.80, 49.14, 0.35),
    ("E13b", [("TWO DIFFERENT ", 0), ("HOMES.", 1)], "Z-MR", "SLIDE-L", "STANDARD", 49.14, 50.88, 0.35),
    ("E14", [("RENTED", 1)], "Z-TC", "GROW", "STANDARD", 51.40, 54.36, 0.35),
    ("E15", [("STAYS", 1)], "Z-LC", "FALL", "STANDARD", 57.20, 58.28, 0.35),
    ("E16a", [("ADDS", 1)], "Z-LL", "RISE", "SMALL", 58.94, 63.28, 0.35),
    ("E16b", [("SHARPER", 1)], "Z-C", "RISE", "SMALL", 60.96, 63.28, 0.35),
    ("E16c", [("GROWS · MATURES", 0)], "Z-LR", "RISE", "SMALL", 61.96, 63.58, 0.35),
    ("E17", [("YOURS", 1)], "Z-C", "GROW", "HERO", 66.22, 67.34, 0.35),
    ("E18", [("NOTHING ", 0), ("HIDDEN", 1)], "Z-TC", "RISE", "STANDARD", 68.50, 70.28, 0.35),
    ("E19a", [("OPEN IT", 0)], "Z-LL", "STAMP", "SMALL", 70.40, 74.28, 0.35),
    ("E19b", [("READ IT", 0)], "Z-C", "STAMP", "SMALL", 71.08, 74.28, 0.35),
    ("E19c", [("CHANGE IT", 0)], "Z-LR", "STAMP", "SMALL", 72.16, 74.28, 0.35),
    ("E19d", [("WITHOUT ASKING ", 0), ("ANYONE", 1)], "Z-LC", "RISE", "SMALL", 72.56, 74.58, 0.35),
    ("E20a", [("UNDERSTAND", 1)], "Z-TC", "GROW", "HERO", 75.14, 76.44, 0.35),
    ("E20b", [("the ", 0), ("harness", 1)], (540, 600), "RISE", "STANDARD", 75.29, 76.44, 0.35),
    ("E21a", [("BUILD", 1)], "Z-ML", "GROW", "HERO", 76.94, 78.26, 0.35),
    ("E21b", [("your own ", 0), ("harness", 1)], (830, 800), "RISE", "STANDARD", 77.09, 78.26, 0.35),
    ("E22a", [("KEEP", 1)], "Z-TL", "GROW", "HERO", 78.38, None, 0.35),
    ("E22b", [("AN EYE", 1)], "Z-C", "GROW", "HERO", 78.62, None, 0.35),
    ("E22c", [("ON IT", 1)], "Z-LR", "GROW", "HERO", 78.92, None, 0.35)]

imgs = {sid: Image.open(os.path.join(ROOT, "scenes", f"{sid}.png")).convert("RGB")
        for sid, _, _ in SCENES}
starts = [0.0] + [a - fd for _, a, fd in SCENES[1:]]  # fade begins so it completes at anchor

def type_img(segs, cap_px):
    """Render one event's text at its scale class; the font shrinks only
    until the single-line box fits the 1000 px plan-catalogue cap."""
    size = int(round(cap_px / 0.70))
    while size > 20:
        f = ImageFont.truetype(FONT_PATH, size)
        tmp = ImageDraw.Draw(Image.new("RGBA", (8, 8)))
        wsum, asc, desc = 0, 0, 0
        for txt, _ in segs:
            bb = tmp.textbbox((0, 0), txt, font=f)
            wsum += bb[2] - bb[0]; asc = max(asc, -bb[1]); desc = max(desc, bb[3])
        bb = tmp.textbbox((0, 0), "H", font=f); cap_meas = bb[3] - bb[1]
        if wsum <= 1000 and cap_meas <= cap_px * 1.06:
            break
        size = int(size * 0.94)
    pad = 12
    img = Image.new("RGBA", (int(wsum) + 2 * pad, int(asc + desc) + 2 * pad), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    x = pad
    for txt, gold in segs:
        dr.text((x, pad), txt, font=f, fill=(GOLD if gold else CREAM) + (255,))
        x += dr.textbbox((0, 0), txt, font=f)[2] - dr.textbbox((0, 0), txt, font=f)[0]
    return img, cap_meas

def scene_at(t):
    k = 0
    for i in range(1, len(SCENES)):
        if t >= starts[i]: k = i
    return k

def band_bright(sid, cx, cy, w, capm):
    """Bright fraction (luminance >= 0.42) and brightest quartile inside the
    glyph row band of the event's text box on a scene — the scrim probe
    (plan: scrim behind an event whose zone's measured luminance is high)."""
    a = np.asarray(imgs[sid]).astype(float) / 255.0
    lum = 0.299 * a[..., 0] + 0.587 * a[..., 1] + 0.114 * a[..., 2]
    hh = max(8, int(capm))
    box = lum[cy - hh // 2:cy + hh // 2, max(0, cx - w // 2):cx + w // 2]
    if box.size == 0: return 0.0, 0.0
    return float((box >= 0.42).mean()), float(np.quantile(box, 0.75))

rendered = {}
for ev in EV:
    eid, segs, zone, direc, scale, anchor, exit_t, entry = ev
    centre = ZONES[zone] if isinstance(zone, str) else zone
    img, capm = type_img(segs, CAP[scale])
    # frame-fit rule (uniform, recorded): an event's box never leaves the
    # frame; if the scored scale class would clip at its seat, the type is
    # scaled down just enough to fit inside a 40 px frame margin. Seat
    # centre, direction, timing and text are never moved.
    maxw = min(centre[0], W - centre[0]) * 2 - 80
    if img.width > maxw:
        f = maxw / img.width
        img = img.resize((int(img.width * f), int(img.height * f)), Image.LANCZOS)
        capm = capm * f
    mid = anchor + (0.6 if exit_t is None else (exit_t - anchor) / 2)
    sid = SCENES[scene_at(mid)][0]
    bf, bq = band_bright(sid, centre[0], centre[1], img.width, capm)
    needs = bf >= 0.10 or bq >= 0.55
    rendered[eid] = (img, centre, direc, anchor, exit_t, entry, needs, round(capm, 1))
    print(eid, "cap", round(capm, 1), "w", img.width, "brightFrac", round(bf, 3),
          "BQ", round(bq, 3), "scrim" if needs else "-", "scene", sid)

def ease_out_cubic(u): return 1 - (1 - u) ** 3

def draw_event(base, ev, t):
    eid, segs, zone, direc, scale, anchor, exit_t, entry = ev
    img, (cx, cy), _, _, _, _, scrim, _ = rendered[eid]
    if t < anchor: return
    u = min(1.0, (t - anchor) / entry)
    e = ease_out_cubic(u)
    alpha, sc, dx, dy = e, 1.0, 0.0, 0.0
    if direc == "RISE": dy = 90 * (1 - e)
    elif direc == "FALL": dy = -90 * (1 - e)
    elif direc == "SLIDE-R": dx = -120 * (1 - e)
    elif direc == "SLIDE-L": dx = 120 * (1 - e)
    elif direc == "GROW": sc = 0.80 + 0.20 * e
    elif direc == "STAMP": sc = 1.18 - 0.18 * e
    if exit_t is not None:
        if t >= exit_t + 0.30: return
        if t >= exit_t: alpha *= 1 - (t - exit_t) / 0.30
    if sc != 1.0:
        img2 = img.resize((max(1, int(img.width * sc)), max(1, int(img.height * sc))),
                          Image.LANCZOS)
    else:
        img2 = img
    if alpha < 1.0:
        a = img2.getchannel("A").point(lambda v: int(v * alpha))
        img2 = img2.copy(); img2.putalpha(a)
    x = int(cx + dx - img2.width / 2); y = int(cy + dy - img2.height / 2)
    if scrim:
        scr = Image.new("RGBA", (img2.width + 60, img2.height + 44), (0, 0, 0, 0))
        sd = ImageDraw.Draw(scr)
        sd.rounded_rectangle([0, 0, scr.width, scr.height], radius=26, fill=(0, 0, 0, 89))
        scr = scr.filter(ImageFilter.GaussianBlur(14))
        base.alpha_composite(scr, (x - 30, y - 22))
    base.alpha_composite(img2, (x, y))

import subprocess, sys
if "--measure" in sys.argv:
    sys.exit(0)
cmd = ["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
       "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
       "-i", os.path.join(HERE, "v4-master.wav"),
       "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "17", "-preset", "medium",
       "-c:a", "aac", "-b:a", "192k", "-shortest",
       os.path.join(ROOT, "full-film-v4.mp4")]
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
for fi in range(NFRAMES):
    t = fi / FPS
    k = scene_at(t)
    sid = SCENES[k][0]
    frame = imgs[sid].copy()
    if k > 0 and t < SCENES[k][1]:
        u = (t - starts[k]) / SCENES[k][2]
        frame = Image.blend(imgs[SCENES[k - 1][0]], imgs[sid], min(1.0, max(0.0, u)))
    base = frame.convert("RGBA")
    for ev in EV:
        draw_event(base, ev, t)
    out = base.convert("RGB")
    if t >= TOTAL - 1.0:  # final fade to black, 1.00 s
        f = (t - (TOTAL - 1.0)) / 1.0
        out = Image.fromarray((np.asarray(out).astype(float) * (1 - f)).astype(np.uint8))
    proc.stdin.write(out.tobytes())
    if fi % 300 == 0: print("frame", fi, flush=True)
proc.stdin.close(); proc.wait()
print("render done, exit", proc.returncode)

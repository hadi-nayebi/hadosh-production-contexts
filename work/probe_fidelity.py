#!/usr/bin/env python3
"""Presence probes + switch audit for the fidelity-repaired film.
Method (plan appendix rule 10, PRESENCE BY PROBE): for every event in
render_v5.py's EV table, sample the film at a probe time inside the
event's residence; build the scene-only composite for that instant
(same SCENES anchors/fades/blend math as the renderer, no word layer);
measure the fraction of pixels inside the event's seat box whose
max-channel |diff| vs the film frame exceeds 25. A control probe at
anchor-0.45 s (before entry) gives the codec/scene noise floor for
the same box. Presence = probe fraction clearly above the floor.
Switch audit: for each scene, project window frames onto the
prev->new scene axis and locate the 50% mix point; expected at
anchor - fade/2."""
import ast, json, os, subprocess, sys
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
FILM = os.path.join(ROOT, "full-film-v4.mp4")
TMP = os.path.join(HERE, "probe-frames")
os.makedirs(TMP, exist_ok=True)

src = open(os.path.join(HERE, "render_v5.py")).read()
tree = ast.parse(src)
EV = SCENES = ZONES = None
for node in tree.body:
    if isinstance(node, ast.Assign) and len(node.targets) == 1:
        name = getattr(node.targets[0], "id", None)
        if name in ("EV", "SCENES", "ZONES"):
            val = ast.literal_eval(node.value)
            if name == "EV": EV = val
            elif name == "SCENES": SCENES = val
            else: ZONES = val
assert EV and SCENES and ZONES, "parse failed"

imgs = {sid: Image.open(os.path.join(ROOT, "scenes", f"{sid}.png")).convert("RGB")
        for sid, _, _ in SCENES}
starts = [0.0] + [a - fd for _, a, fd in SCENES[1:]]

def composite(t):
    k = 0
    for i in range(1, len(SCENES)):
        if t >= starts[i]: k = i
    if k > 0 and t < SCENES[k][1]:
        u = (t - starts[k]) / SCENES[k][2]
        return Image.blend(imgs[SCENES[k - 1][0]], imgs[SCENES[k][0]],
                           min(1.0, max(0.0, u)))
    return imgs[SCENES[k][0]].copy()

def film_frame(t, tag):
    p = os.path.join(TMP, f"{tag}.png")
    if os.path.exists(p):
        try:
            im = Image.open(p).convert("RGB"); im.load(); return im
        except Exception:
            os.remove(p)
    subprocess.run(["ffmpeg", "-v", "error", "-ss", f"{t:.3f}", "-i", FILM,
                    "-frames:v", "1", p], check=True)
    return Image.open(p).convert("RGB")

def box_of(zone):
    cx, cy = ZONES[zone] if isinstance(zone, str) else zone
    return (max(0, cx - 510), max(0, cy - 190), min(1080, cx + 510), min(1920, cy + 190)), (cx, cy)

def frac(frame, comp, box):
    x0, y0, x1, y1 = box
    a = np.asarray(frame.crop(box)).astype(int)
    b = np.asarray(comp.crop(box)).astype(int)
    d = np.abs(a - b).max(axis=2)
    return float((d > 25).mean())

results = []
crops = []
for ev in EV:
    eid, segs, zone, direc, scale, anchor, exit_t, entry = ev
    box, centre = box_of(zone)
    if exit_t is None:
        tp = anchor + 0.75
    else:
        tp = min((anchor + entry + exit_t) / 2, exit_t - 0.08)
    tc = anchor - 0.45
    fp = frac(film_frame(tp, f"p-{eid}"), composite(tp), box)
    fc = frac(film_frame(tc, f"c-{eid}"), composite(tc), box)
    present = fp >= 0.001 and fp >= 3 * max(fc, 0.0002)
    results.append({"event": eid, "text": " ".join(s for s, _ in segs),
                    "seat": zone if isinstance(zone, str) else list(zone),
                    "probe_t": round(tp, 2), "frac": round(fp, 5),
                    "control_t": round(tc, 2), "control_frac": round(fc, 5),
                    "present": bool(present)})
    fr = film_frame(tp, f"p-{eid}").crop(box)
    fr.thumbnail((340, 127))
    crops.append((eid, fr.copy()))

# contact strips of probe crops (18 + 17)
for si, chunk in enumerate([crops[:18], crops[18:]]):
    cols, rows = 3, 6
    cw, chh = 348, 150
    strip = Image.new("RGB", (cols * cw, rows * chh), (20, 20, 20))
    from PIL import ImageDraw
    dr = ImageDraw.Draw(strip)
    for i, (eid, im) in enumerate(chunk):
        x, y = (i % cols) * cw, (i // cols) * chh
        strip.paste(im, (x + 4, y + 18))
        dr.text((x + 6, y + 3), eid, fill=(255, 255, 120))
    strip.save(os.path.join(TMP, f"strip-{si+1}.png"))

# switch audit
switches = []
for i in range(1, len(SCENES)):
    sid, anchor, fade = SCENES[i]
    prev = np.asarray(imgs[SCENES[i - 1][0]]).astype(float)
    new = np.asarray(imgs[sid]).astype(float)
    axis = new - prev
    denom = float((axis * axis).sum())
    best_t, best_u = None, None
    t = anchor - 0.65
    while t <= anchor + 0.35:
        fr = np.asarray(film_frame(round(t, 3), f"s-{sid}-{t:.2f}")).astype(float)
        u = float(((fr - prev) * axis).sum() / denom) if denom else 0.0
        if best_u is None or abs(u - 0.5) < abs(best_u - 0.5):
            best_u, best_t = u, t
        t += 2 / 30
    expected = anchor - fade / 2
    switches.append({"scene": sid, "anchor": anchor, "fade": fade,
                     "mix50_t": round(best_t, 3), "expected_mix50": round(expected, 3),
                     "offset": round(best_t - expected, 3)})

out = {"events": results, "switches": switches,
       "worst_switch_offset": max(abs(s["offset"]) for s in switches),
       "events_present": sum(r["present"] for r in results),
       "events_total": len(results)}
json.dump(out, open(os.path.join(TMP, "probe-results.json"), "w"), indent=1)
print(json.dumps({"events_present": out["events_present"],
                  "events_total": out["events_total"],
                  "worst_switch_offset": out["worst_switch_offset"]}, indent=1))
for r in results:
    if not r["present"]:
        print("NOT PRESENT:", r)

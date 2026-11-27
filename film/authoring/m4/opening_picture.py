"""Opening picture and spoken-word cues for the Quadrillions film."""

import numpy as np
from scipy.interpolate import PchipInterpolator


def build_opening(unit):
    timeline = np.array(unit["visualTimeline"]).T

    def visit(node):
        yield node
        for child in node.get("children", []):
            yield from visit(child)

    def visual_time(seconds):
        return round(float(np.interp(seconds - 2.5, *timeline)), 7)

    def keys(pairs):
        return [[visual_time(t), value] for t, value in pairs]

    nodes = {node["id"]: node for node in visit(unit["root"])}
    seconds = [2.5, 2.74, 3.00, 3.55, 3.95, 4.20, 4.65, 5.20, 6.15, 6.75, 7.80, 8.75, 9.60, 10.25]
    lens = [2.32, 2.32, 2.135, 1.66, 1.40, 1.302, 1.212, 1.150, 1.118, 1.102, 1.075, 1.047, 1.016, 1]
    focus_x = [182, 182, 213, 290, 325, 328, 333, 390, 485, 500, 500, 500, 500, 500]
    focus_y = [184, 184, 186, 195, 204, 215, 224, 232, 240, 250, 260, 269, 278, 281]
    size, fx, fy = [PchipInterpolator(seconds, channel) for channel in (lens, focus_x, focus_y)]
    samples = sorted(set([frame / 24 for frame in range(60, 247)] + seconds))
    tracks = {"scale": [], "x": [], "y": []}
    for t in samples:
        scale = float(size(t))
        values = [scale, float((1 - scale) * fx(t)), float((1 - scale) * fy(t))]
        for key, value in zip(tracks, values):
            tracks[key].append([visual_time(t), round(value, 7), "linear"])
    for key, track in tracks.items():
        unit["tracks"]["opening-camera-" + key] = track

    plates = nodes["word-plates"]
    plates["origin"] = [0, 0]
    plates.setdefault("tracks", {}).update({key: {"use": "opening-camera-" + key} for key in tracks})

    # Distant grains share the lens with depth-dependent parallax.
    field = nodes["resident-swarm"]
    depth = []
    for t in samples:
        raw = visual_time(t)
        if raw < 5.6:
            strength = float(np.clip((5.6 - raw) / .72, 0, 1))
            motion = .85 * (float(size(t)) - 1) * strength
            depth.append([raw, round(motion, 7), "linear"])
    field["depthTravel"] = depth + [point for point in field["depthTravel"] if point[0] >= 5.6]

    onsets = [
        2.735, 3.0, 3.16, 3.55, 3.95, 4.13, 4.4, 4.65, 4.88, 5.04, 5.365, 5.55, 5.8,
        6.745, 6.96, 7.165, 7.4, 7.61, 8.755, 8.94, 9.165, 9.345, 9.545,
    ]
    words = [f"{part}-word-{i:02}" for part, count in [("opening", 13), ("read", 5), ("write", 5)]
             for i in range(1, count + 1)]
    for name, t in zip(words, onsets):
        node = nodes[name]
        a, b = visual_time(t), visual_time(t + .075)
        node["time"][0] = a
        tail = [point for point in node["tracks"]["opacity"][2:] if point[0] > b]
        node["tracks"]["opacity"] = [[a, 0], [b, 1]] + tail
    for name, start in [("read-continuation", 13), ("write-continuation", 18)]:
        node = nodes[name]
        node["time"][0] = visual_time(onsets[start])
        if isinstance(node["tracks"].get("opacity"), list):
            node["tracks"]["opacity"][0][0] = visual_time(onsets[start])

    for group in field["targets"]:
        mask = group.get("mask", "")
        if len(group["weight"]) <= 1:
            continue
        if mask.startswith(("R01-", "R02-read-")):
            if mask.startswith("R01-"):
                times = [(8.91, 0), (9.10, .18), (9.31, .65), (9.57, 0)]
            else:
                times = [(9.19, 0), (9.40, .22), (9.57, .61), (9.79, 0)]
            group["weight"] = keys(times)
            group["displayAlpha"] = keys([(8.91, .38), (9.49, .24), (9.79, .16)])
        elif mask.startswith("R02-write-"):
            group["weight"] = keys([(9.83, 0), (9.93, .66), (10.04, 0)])
            group["displayAlpha"] = keys([(9.83, .2), (9.93, .52), (10.04, .12)])

    grain = nodes["opening-handoff-grain"]
    grain["time"][1] = visual_time(2.98)
    grain["tracks"]["opacity"] = keys([(2.50, 1), (2.73, .86), (2.98, 0)])
    return unit

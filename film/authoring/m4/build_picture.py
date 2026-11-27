"""Rebuild the M4 opening, rack, desk and board picture tracks from an unpacked M3 runtime.

Usage: python build_picture.py base-runtime output-runtime
Requires Python 3, NumPy and SciPy. Writes the three edited units under output-runtime/units.
"""
import argparse
import json
from pathlib import Path

import numpy as np

from opening_picture import build_opening


def nodes(root):
    yield root
    for child in root.get("children", []):
        yield from nodes(child)


def find(unit, name):
    return next(node for node in nodes(unit["root"]) if node["id"] == name)


def ramp_integral(time, radius):
    """Antiderivative of a raised-cosine change in velocity centered around zero."""
    out = np.maximum(time, 0).copy()
    inside = np.abs(time) < radius
    v = time[inside]
    out[inside] = (v + radius) / 2 - radius / np.pi * np.cos(v * np.pi / (2 * radius))
    return out


def camera_move(samples, times, points, radius):
    """Blend consecutive velocity vectors within each waypoint's shoulder."""
    t = np.array(times, dtype=float)
    p = np.array(points, dtype=float)
    t[0] += radius[0]
    t[-1] -= radius[-1]
    slopes = np.diff(p, axis=0) / np.diff(t)[:, None]
    vectors = np.concatenate([np.zeros_like(slopes[:1]), slopes, np.zeros_like(slopes[:1])])
    out = np.broadcast_to(p[0], (len(samples), len(p[0]))).copy()
    for tick, r, change in zip(t, radius, np.diff(vectors, axis=0)):
        out += ramp_integral(samples - tick, r)[:, None] * change
    out[samples <= times[0]] = p[0]
    out[samples >= times[-1]] = p[-1]
    return out


def clock(unit, extra):
    timeline = np.array(unit["visualTimeline"]).T
    duration = unit["duration"]
    times = np.unique(np.round(np.clip(np.r_[np.arange(0, duration + 1 / 48, 1 / 48),
                                              timeline[0], extra], 0, duration), 8))
    return times, np.interp(times, *timeline)


def keys(raw, values):
    rounded = np.round(values, 7)
    changed = np.diff(rounded) != 0
    keep = np.r_[True, changed[:-1] | changed[1:], True]
    return [[float(round(t, 9)), float(value), "linear"] for t, value in zip(raw[keep], rounded[keep])]


def set_axes(tracks, raw, scale, x, y):
    for name, values in zip(("scale", "x", "y"), (scale, x, y)):
        tracks[name] = keys(raw, values)


def rack_camera(unit):
    tracks = unit["tracks"]
    rack_foot = np.array([230, 423])
    poses = []
    for x, y, scale in [(465, -350, 2.4), (170, -550, 2.4), (118.35, 272.835, .355), (-306.65, 272.835, .355)]:
        poses.append(np.r_[np.log(scale), [x, y] + scale * rack_foot])
    moves = [(9.05, 10.38, .18), (12.95, 15.42, .34), (18.65, 21.65, .36)]
    times, raw = clock(unit, [t for a, b, _ in moves for t in [a, b]])
    path = np.broadcast_to(poses[0], (len(times), 3)).copy()
    for i, (start, end, radius) in enumerate(moves):
        path += camera_move(times, [start, end], poses[i:i + 2], [radius, radius]) - poses[i]
    scale = np.exp(path[:, 0])
    xy = path[:, 1:] - scale[:, None] * rack_foot
    for key, values in zip(("camera-scale", "camera-x", "camera-y"), (scale, xy[:, 0], xy[:, 1])):
        tracks[key] = keys(raw, values)

    start, end, radius = moves[1]
    for name in ["cabinet-reflection", "original-rack-reflection", "original-chassis"]:
        track = find(unit, name)["tracks"]
        ends = [np.log(track["scale"][i][1]) for i in (0, -1)]
        curve = camera_move(times, [start, end], [[value] for value in ends], [radius, radius])
        track["scale"] = keys(raw, np.exp(curve[:, 0]))


def base_camera(unit, node):
    """Sample the M3 camera exactly as the 24 fps player evaluates its authored linear tracks."""
    duration = unit["duration"]
    t = np.arange(0, duration + 1 / 24, 1 / 24).clip(0, duration)
    visual_time = np.interp(t, *np.array(unit["visualTimeline"]).T)
    axes = []
    for key in ("scale", "x", "y"):
        track = node["tracks"][key]
        values = np.zeros_like(visual_time) + track[0][1]
        for a, b in zip(track, track[1:]):
            assert b[2] == "linear"
            inside = (visual_time >= a[0]) & (visual_time <= b[0])
            f = np.clip((visual_time[inside] - a[0]) / (b[0] - a[0]), 0, 1)
            values[inside] = a[1] + (b[1] - a[1]) * f
        values[visual_time >= track[-1][0]] = track[-1][1]
        axes.append(values)
    scale, x, y = axes
    return t, np.stack((np.log(scale), (500 - x) / scale, (281.25 - y) / scale), axis=1)


def reading_camera(unit, chapter):
    desk = chapter == "03"
    camera = find(unit, "table-reading-camera" if desk else "chalk-reading-camera")
    base_t, base_pose = base_camera(unit, camera)

    def pose_at(t):
        return np.array([np.interp(t, base_t, axis) for axis in base_pose.T])

    if desk:
        shots = [
            ([0, 4.83], [.56, .53]),
            ([5.83, 8.65, 10.83, 13.1, 15.35, 17.25, 21.96], [.36, .7, .64, .68, .66, .67, .44]),
            ([23.42, 25.27, 28.17], [.36, .70, .46]),
        ]
    else:
        shots = [
            ([2.16, 5.00], [.38, .44]),
            ([6.62, 8.15, 10.59, 12.48, 14.77, 16.14, 18.47], [.34, .50, .58, .55, .43, .47, .56]),
        ]
    anchors = [t for times, _ in shots for t in times]
    samples, raw = clock(unit, anchors + [12.0, 13.82, 14.99, 16.30])
    path = np.broadcast_to(base_pose[0], (len(samples), 3)).copy()
    for times, radii in shots:
        poses = np.array([pose_at(t) for t in times])
        if not desk and len(times) > 2:
            # The opening of the inset must clear the chalk heading on the left.
            poses[-2] = pose_at(16.82)
        poses[0] = path[-1]
        path += camera_move(samples, times, poses, radii) - poses[0]
    scale = np.exp(path[:, 0])
    set_axes(camera["tracks"], raw, scale, 500 - scale * path[:, 1], 281.25 - scale * path[:, 2])
    if not desk:
        inset = find(unit, "fixed-writing-area")["tracks"]
        poses = np.array([[np.log(1), 23., 19.], [np.log(.88), 118., 37.]])
        values = camera_move(samples, [12.0, 13.82], poses, [.34, .34])
        values += camera_move(samples, [14.99, 16.30], poses[::-1], [.24, .24]) - poses[1]
        set_axes(inset, raw, np.exp(values[:, 0]), values[:, 1], values[:, 2])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("base_runtime", type=Path)
    parser.add_argument("output_runtime", type=Path)
    args = parser.parse_args()
    for chapter in ("01-scale", "03", "04"):
        relative = Path("units") / chapter / "unit.json"
        unit = json.loads((args.base_runtime / relative).read_text(encoding="utf-8"))
        if chapter == "01-scale":
            build_opening(unit)
            rack_camera(unit)
        else:
            reading_camera(unit, chapter)
        target = args.output_runtime / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(json.dumps(unit, separators=(",", ":"), ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()

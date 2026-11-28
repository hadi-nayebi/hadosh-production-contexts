"""Build M5 Unit Two from the pinned M4 scene. The M5 camera and audio are supplied separately."""
import argparse
import json
import math
from pathlib import Path

FPS = 24
RACK_FRAMES = 321
CAMERA_FRAMES = 432


def build(source, destination):
    unit = json.loads(source.read_text())
    original = unit['root']['children']
    by_id = {n['id']: n for n in original}
    stage = by_id['reading-camera-on-server-examples']['children'][0]['children']
    backdrop, floor, bank, hero = stage[:4]
    assert [n['id'] for n in stage[:4]] == ['image-3', 'image-4', 'group-2', 'image-315']
    end = (RACK_FRAMES + CAMERA_FRAMES) / FPS
    cue = RACK_FRAMES / FPS
    # Start with exactly the M4 arrangement shared with the last Unit One frame.
    objects = bank['children'] + [hero]
    for node in [backdrop, floor, *objects]:
        node['time'] = [0, cue]
        node['tracks'] = {}
    # Target the blue-lit upper slot of the near cabinet. The same transform
    # moves all surrounding objects, so adjacent cabinets retain their spacing.
    # This framing move stays inside the rack bank; the journey starts at cue.
    x, y, width, height = hero['box']
    focus = (x + width * .47, y + height * .21)
    scales, xs, ys = [], [], []
    for frame in range(RACK_FRAMES + 1):
        p = frame / RACK_FRAMES
        progress = p * p * (3 - 2 * p)
        scale = math.exp(math.log(14) * progress)
        t = round(frame / FPS, 9)
        scales.append([t, round(scale, 8), 'linear'])
        for points, coordinate, size in [(xs, focus[0], 1000), (ys, focus[1], 562.5)]:
            target = coordinate + (size / 2 - coordinate) * progress
            points.append([t, round(target - coordinate * scale, 7), 'linear'])
    rack = {
        'id': 'rack-bank', 'type': 'group', 'time': [0, cue], 'box': [0, 0, 1000, 562.5],
        'origin': [0, 0], 'tracks': {'scale': scales, 'x': xs, 'y': ys},
        'children': [backdrop, floor, *objects],
    }
    camera = by_id['blade-through-orbit']
    source_camera_end = camera['time'][1]
    camera['time'] = [cue, end]
    grains = [by_id[key] for key in ('m1-orbit-leather-grain', 'orbit-to-leather')]
    for node in grains:
        offset = end - source_camera_end
        node['time'] = [round(t + offset, 9) for t in node['time']]
        for name, keys in node['tracks'].items():
            node['tracks'][name] = [[round(t + offset, 9), *values] for t, *values in keys]
    stems = [by_id[k] for k in ('m1-speech', 'm1-music')]
    for node in stems:
        node['time'] = [0, end]
    unit['root']['children'] = [rack, camera, *grains, *stems]
    unit['root']['time'] = [0, end]
    unit['duration'] = end
    unit.pop('visualTimeline', None)
    unit['audioCues'] = {'electron': cue}
    unit['cameraPath'] = {'fps': FPS, 'startsAtLocalFrame': RACK_FRAMES, 'playbackFrames': CAMERA_FRAMES}
    used = {n['asset'] for n in [backdrop, floor, *objects, camera, *grains, *stems]}
    unit['assets'] = {k: v for k, v in unit['assets'].items() if k in used}
    destination.parent.mkdir(exist_ok=True, parents=True)
    destination.write_text(json.dumps(unit, ensure_ascii=False, separators=(',', ':')))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('m4_unit', type=Path)
    parser.add_argument('m5_unit', type=Path)
    args = parser.parse_args()
    build(args.m4_unit, args.m5_unit)

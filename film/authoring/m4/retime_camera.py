"""Rebuild the 364-frame Unit 2 camera and its source-registration map.

Requires Python 3.11+, OpenCV, NumPy, SciPy, and FFmpeg with libx264.
"""
import argparse
import hashlib
import json
import subprocess
from pathlib import Path

import cv2
import numpy as np
from scipy.interpolate import PchipInterpolator
from scipy.ndimage import gaussian_filter1d


SOURCE_TO_OUTPUT = [
    (0, 0), (18, 18), (52, 50), (65, 61), (119, 82), (166, 95),
    (278, 163), (335, 194), (405, 205), (446, 219), (485, 252),
    (501, 269), (530, 295), (580, 326), (623, 363),
]
# A small optical push continues while the hand reaches across the stationary camera plate.
OPTICAL_SCALE = PchipInterpolator(
    [0, 150, 183, 209, 229, 249, 255, 274, 302, 363],
    [1, 1, 1.004, 1.023, 1.046, 1.068, 1.069, 1.040, 1, 1],
)
CENTER = (.72, .62)
FRAME_COUNT = 364


def source_time(profile):
    measurements = np.genfromtxt(profile, delimiter=',', names=True)
    edge_speed = np.r_[measurements['p75Edge'][0], measurements['p75Edge']]
    camera_speed = np.r_[measurements['sim'][0], measurements['sim']]
    speed = gaussian_filter1d(np.clip(.72 * edge_speed + .28 * camera_speed, .12, 13), 2.5)
    # The moving hand occupies a small part of the frame. Reserve time for its gesture.
    speed[444:489] = np.maximum(speed[444:489], 1.05)
    distance = np.cumsum(.32 + speed ** .72)
    distance -= distance[0]
    source, output = np.array(SOURCE_TO_OUTPUT).T
    distance_at_output = PchipInterpolator(output, distance[source])
    frame_at_distance = PchipInterpolator(distance, np.arange(len(distance)))

    def frame_at(output_frame):
        return float(frame_at_distance(distance_at_output(np.clip(output_frame, 0, 363))))

    return frame_at


def registered_frames(camera, pylon, kitchen):
    base = cv2.VideoCapture(str(camera))
    inserts = [(120, 166, cv2.VideoCapture(str(pylon))), (488, 502, cv2.VideoCapture(str(kitchen)))]
    try:
        if int(base.get(cv2.CAP_PROP_FRAME_COUNT)) != 660:
            raise ValueError('Expected 660 source camera frames')
        for index in range(660):
            ok, frame = base.read()
            if not ok:
                raise ValueError(f'Could not decode camera frame {index}')
            for start, end, insert in inserts:
                if start <= index < end:
                    ok, frame = insert.read()
                    if not ok:
                        raise ValueError(f'Could not decode optical insert at camera frame {index}')
            yield index, frame
    finally:
        base.release()
        for _, _, insert in inserts:
            insert.release()


class Camera:
    def __init__(self, width, frames):
        self.width = width
        self.height = round(width * 9 / 16)
        self.frames = iter(frames)
        self.latest = -1
        self.cache = {}
        self.flow_cache = {}
        self.estimator = cv2.DISOpticalFlow_create(cv2.DISOPTICAL_FLOW_PRESET_FAST)
        self.estimator.setFinestScale(1)
        self.y, self.x = np.indices((self.height, self.width), dtype=np.float32)

    def frame(self, index):
        while index > self.latest:
            current, picture = next(self.frames)
            self.latest = current
            if self.width != 1280:
                picture = cv2.resize(picture, (self.width, self.height), interpolation=cv2.INTER_AREA)
            self.cache[current] = picture
            for cache, keep in [(self.cache, 12), (self.flow_cache, 9)]:
                for old in list(cache):
                    if old < current - keep:
                        del cache[old]
        return self.cache[index]

    def flow(self, index):
        if index not in self.flow_cache:
            a, b = self.frame(index), self.frame(index + 1)
            small = [
                cv2.resize(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), (480, 270), interpolation=cv2.INTER_AREA)
                for frame in (a, b)
            ]
            self.flow_cache[index] = [
                cv2.resize(self.estimator.calc(small[k], small[1-k], None), (self.width, self.height),
                           interpolation=cv2.INTER_LINEAR) * self.width / 480
                for k in (0, 1)
            ]
        return self.flow_cache[index]

    def interpolated_frame(self, time):
        index = int(np.floor(time))
        fraction = time - index
        before = self.frame(index)
        if fraction < .025:
            return before
        after = self.frame(index + 1)
        if fraction > .975:
            return after
        forward, backward = self.flow(index)
        first = cv2.remap(before, self.x - fraction * forward[:, :, 0], self.y - fraction * forward[:, :, 1],
                          cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        second = cv2.remap(after, self.x - (1 - fraction) * backward[:, :, 0],
                           self.y - (1 - fraction) * backward[:, :, 1],
                           cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        return cv2.addWeighted(first, 1 - fraction, second, fraction, 0)

    def optical_push(self, image, scale):
        if abs(scale - 1) < .00004:
            return image
        center = (CENTER[0] * self.width, CENTER[1] * self.height)
        transform = cv2.getRotationMatrix2D(center, 0, scale)
        return cv2.warpAffine(image, transform, (self.width, self.height),
                              flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)


def render(width, output, profile, frames):
    camera = Camera(width, frames)
    at = source_time(profile)
    output.parent.mkdir(exist_ok=True, parents=True)
    command = [
        'ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'bgr24',
        '-s', f'{width}x{camera.height}', '-r', '24', '-i', 'pipe:', '-an',
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '13', '-preset', 'veryfast',
        '-threads', '2', '-g', '24', '-movflags', '+faststart', str(output),
    ]
    positions, scales = [], []
    with subprocess.Popen(command, stdin=subprocess.PIPE) as encoder:
        for frame in range(FRAME_COUNT):
            source = at(frame)
            picture = camera.interpolated_frame(source)
            # A short shutter interval suppresses judder during the faster moves.
            if 18 < frame < 363 and source - at(frame-1) > 1.38:
                before = camera.interpolated_frame(at(frame-.13))
                after = camera.interpolated_frame(at(frame+.13))
                shutter = cv2.addWeighted(before, .5, after, .5, 0)
                picture = cv2.addWeighted(picture, .60, shutter, .40, 0)
            scale = float(OPTICAL_SCALE(frame))
            encoder.stdin.write(camera.optical_push(picture, scale).tobytes())
            positions.append(round(source, 5))
            scales.append(round(scale, 7))
        encoder.stdin.close()
        if encoder.wait() != 0:
            raise RuntimeError('FFmpeg could not finish the camera encode')
    mapping = dict(outputFps=24, sourceFps=24, outputToSource=positions, opticalScale=scales,
                   opticalCenter=list(CENTER), scaleMapping='xOut = cx+(xIn-cx)*scale, yOut = cy+(yIn-cy)*scale',
                   oldToNewLandmarks=SOURCE_TO_OUTPUT)
    (output.parent / 'camera-map.json').write_text(json.dumps(mapping, separators=(',', ':')))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('camera', type=Path, help='Original 660-frame M3 camera-pass.mp4')
    parser.add_argument('pylon', type=Path, help='Corrected pylon insert covering original frames 120–165')
    parser.add_argument('kitchen', type=Path, help='Corrected kitchen insert covering original frames 488–501')
    parser.add_argument('output', type=Path, help='Output movie and directory for camera-map.json')
    parser.add_argument('--profile', type=Path, default=Path(__file__).with_name('motion-profile.csv'))
    parser.add_argument('--width', type=int, choices=[640, 1280], default=1280)
    args = parser.parse_args()
    if args.output.resolve() in {path.resolve() for path in (args.camera, args.pylon, args.kitchen)}:
        parser.error('Choose an output path separate from each input')
    for path, digest in [
        (args.camera, '99f4f455e68372e6d57630f767c2e8428523812b8ef606b8ec1489e5e41b658a'),
        (args.pylon, 'c6879b8ecd5d7bcf7a193b7c43d95f2a49eb45db5f5137a412ccc561ea15a5e1'),
        (args.kitchen, '64fd55781c4b75e22274460fb4eae58bf76c1db322a0a34450ac8643d7af6178'),
    ]:
        with path.open('rb') as src:
            if hashlib.file_digest(src, 'sha256').hexdigest() != digest:
                parser.error(f'The supplied source differs from the registered M3 media: {path}')
    cv2.setNumThreads(1)
    render(args.width, args.output, args.profile, registered_frames(args.camera, args.pylon, args.kitchen))


if __name__ == '__main__':
    main()

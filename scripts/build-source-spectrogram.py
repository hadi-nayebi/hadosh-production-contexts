"""Build local, hash-bound frequency data; never uploads or changes source audio.
Usage: python scripts/build-source-spectrogram.py /absolute/source.mp3 [...]
Requires local ffmpeg and NumPy. Produces adjacent .spectrogram.bin/.json.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import numpy as np

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('sources', nargs='+', type=Path)
args = parser.parse_args()
for source in args.sources:
    raw = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', str(source),
                                   '-f', 'f32le', '-ac', '1', '-ar', '16000', '-'])
    samples = np.frombuffer(raw, np.float32)
    fft_size, hop = 512, 160
    window = np.hanning(fft_size)
    padded = np.pad(samples, (fft_size // 2, fft_size // 2))
    frames = np.lib.stride_tricks.sliding_window_view(padded, fft_size)[::hop]
    chunks = []
    for offset in range(0, len(frames), 512):
        magnitude = np.abs(np.fft.rfft(frames[offset:offset + 512] * window, axis=1))
        magnitude /= window.sum() / 2
        magnitude[:, 0] /= 2
        magnitude[:, -1] /= 2
        db = 20 * np.log10(np.maximum(magnitude, 1e-8))
        chunks.append(np.clip((db + 90) / 90 * 255, 0, 255).astype(np.uint8))
    values = np.concatenate(chunks)
    data = values.tobytes()
    source.with_suffix('.spectrogram.bin').write_bytes(data)
    meta = {'sourceHash': hashlib.sha256(source.read_bytes()).hexdigest(),
            'dataHash': hashlib.sha256(data).hexdigest(), 'frames': len(values),
            'bins': 257, 'hopSeconds': .01, 'sampleRate': 16000, 'fftSize': 512,
            'minDb': -90, 'maxDb': 0, 'window': 'hann', 'channels': 'mono mix',
            'duration': len(samples) / 16000}
    source.with_suffix('.spectrogram.json').write_text(json.dumps(meta, indent=2) + '\n')
    print(f'{source.name}: {len(data)} frequency bytes, {meta["duration"]:.3f}s')

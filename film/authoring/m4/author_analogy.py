"""Restore the continuous physical/cognitive comparison and shorten Unit 02.

Run against the previous cut's 24 kHz mono 16-bit stems. Relative paths:
    python author_analogy.py units/02/m1/speech.wav units/02/m1/music.wav revised
The original single take sits beside this script. Music crosses between two
points in the same score under the latter half of the line, preserving both ends.
"""
import argparse
import json
from pathlib import Path

import numpy as np
from scipy.io import wavfile


def read(path, rate):
    actual, audio = wavfile.read(path)
    if actual != rate or audio.ndim != 1 or audio.dtype != np.int16:
        raise ValueError(f'Expected {rate} Hz mono PCM16 audio at {path}')
    return audio


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('old_voice', type=Path)
    parser.add_argument('old_music', type=Path)
    parser.add_argument('output_directory', type=Path)
    parser.add_argument('--take', type=Path, default=Path(__file__).with_name('industrial-cognitive-take.wav'))
    parser.add_argument('--cues', type=Path, default=Path(__file__).with_name('analogy-cues.json'))
    args = parser.parse_args()
    cue = json.loads(args.cues.read_text())
    sr, fps = cue['sampleRate'], cue['frameRate']
    if sr % fps:
        raise ValueError('The edit expects an integral number of samples per film frame')
    per_frame = sr // fps
    start_frame = cue['unitStartFrame']
    old_length = (cue['oldDeskStartFrame'] - start_frame) * per_frame
    new_length = (cue['newDeskStartFrame'] - start_frame) * per_frame
    insert = (cue['narrationTakeStartFrame'] - start_frame) * per_frame
    voice, music = read(args.old_voice, sr), read(args.old_music, sr)
    take = read(args.take, sr)
    if len(voice) != old_length or len(music) != old_length:
        raise ValueError('Input unit size does not match the source edit')
    if insert + len(take) > new_length:
        raise ValueError('The comparison does not fit inside its unit')
    new_voice = np.zeros(new_length, dtype='<i2')
    new_voice[:insert] = voice[:insert]
    new_voice[insert:insert+len(take)] = np.rint(take * cue['narrationGain']).astype('<i2')

    # The outgoing and incoming score must meet at their original rate. Use
    # an equal-power crossfade at the measured spectral/level match; the
    # following unit continues at the same music sample as in the prior cut.
    crossfade = round(cue['musicCrossfadeSeconds'] * sr)
    cross = round((cue['musicCrossfadeCenterSeconds'] - start_frame/fps) * sr) - crossfade//2
    jump = old_length - new_length
    i = np.linspace(0, np.pi/2, crossfade)
    front = music[cross:cross+crossfade] * np.cos(i)
    back = music[cross+jump:cross+jump+crossfade] * np.sin(i)
    overlap = np.rint(front + back).astype('<i2')
    new_music = np.concatenate([music[:cross], overlap, music[cross+jump+crossfade:]])
    if len(new_music) != new_length:
        raise ValueError('Edited score length differs from the edited voice')
    args.output_directory.mkdir(parents=True,exist_ok=True)
    wavfile.write(args.output_directory/'speech.wav', sr, new_voice)
    wavfile.write(args.output_directory/'music.wav', sr, new_music)


if __name__=='__main__':
    main()

"""Render an offline English narration from an approved mono PCM16 voice reference."""
import argparse
from pathlib import Path
import wave
import numpy as np
import sherpa_onnx as so

TEXT = 'The Transformer was born. A language model is formed through training on vast collections of text.'


def render(model_dir, reference, out, text):
    paths = [str(model_dir/k) for k in ('lm_flow.int8.onnx', 'lm_main.int8.onnx', 'encoder.onnx', 'decoder.int8.onnx', 'text_conditioner.onnx', 'vocab.json', 'token_scores.json')]
    model = so.OfflineTtsModelConfig(pocket=so.OfflineTtsPocketModelConfig(*paths), num_threads=3)
    tts = so.OfflineTts(so.OfflineTtsConfig(model=model))
    with wave.open(str(reference)) as wav:
        assert wav.getsampwidth() == 2 and wav.getnchannels() == 1
        rate = wav.getframerate()
        ref = np.frombuffer(wav.readframes(wav.getnframes()), dtype='<i2').astype(np.float32)/32768
    g = so.GenerationConfig()
    g.reference_audio = ref
    g.reference_sample_rate = rate
    g.num_steps = 6
    g.speed = 1
    audio = tts.generate(text, config=g)
    with wave.open(str(out), 'wb') as wav:
        wav.setparams((1, 2, audio.sample_rate, 0, 'NONE', 'not compressed'))
        wav.writeframes((np.clip(audio.samples,-1,0.999969)*32768).astype('<i2').tobytes())
    print(len(audio.samples)/audio.sample_rate, 'seconds', flush=True)

if __name__ == '__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for name in ['model_dir','reference','out']:p.add_argument(name,type=Path)
    p.add_argument('--text',default=TEXT)
    a=p.parse_args()
    render(a.model_dir,a.reference,a.out,a.text)

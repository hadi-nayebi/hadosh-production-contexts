# Unit Three formation take

The approved wording is “The Transformer was born. A language model is formed through training on vast collections of text.” The M5 mix retains M4's performance of the first sentence. The second sentence was generated locally. The offline edit uses the checked PCM take as an input so it can reproduce the mix without repeated stochastic inference.

## Reference and model

The voice prompt is the full 8.040 s of `authoring/m4/industrial-cognitive-take.wav` in the M4 editable source. Its SHA-256 is `2c5fcaccbd9ee4f613f31c34fe223396bf2e9013ac21f2116a001a535529c529`. M4's analogy cue sheet traces it to L r4 at 105.471666667 s. Only the model weights were downloaded. Inference, transcription, and embedding comparisons ran locally.

The speech model is Kyutai Pocket TTS (CC BY 4.0), exported to ONNX by KevinAHM and packaged by csukuangfj2. Download the seven inference files from [the pinned model version](https://huggingface.co/csukuangfj2/sherpa-onnx-pocket-tts-int8-2026-01-26/tree/4145e1e8ec6c81dc73a28641c6ab031ab57ea5b3). The filenames are listed in `render_take.py`. The sherpa-onnx runtime is Apache-2.0. [Pocket TTS](https://huggingface.co/kyutai/pocket-tts) · [Weight license](https://creativecommons.org/licenses/by/4.0/)

```sh
python -m pip install sherpa-onnx==1.13.8 numpy
python render_take.py model-dir authoring/m4/industrial-cognitive-take.wav candidate.wav
```

The checked source take has SHA-256 `0f3cab0375fd32441560497332bc9b9c8f53e90ee657cc2753f0a76d171ffcfd`, mono PCM16 at 24 kHz. The full candidate duration is 4.8375 s. The editor keeps the continuous second sentence, beginning the sample selection at 1.35 s. The production audio script sets splice and gain.

## Verification

The local speaker-timbre comparison used the WeSpeaker ResNet34 backbone via [Alkd's CC BY 4.0 ONNX export](https://huggingface.co/Alkd/speaker-embedding-onnx/tree/edf8e8c67f02ad879326f49af2bd17d56612e88c). Values depend on the utterance, duration, recording and model.

### Preserving the unchanged ending of the sentence

The source voice already spoke “vast collections of text.” For the M5 hybrid performance, `restore_tail.py` inserts those M4 samples at the quiet onset of “vast” in the candidate. The equal-gain 14 ms join is in the low-energy transition before the vowel. The first clause keeps M4's take via the mix script. Only “A language model is formed through training on” needs new audio.

```sh
python -m pip install scipy
python restore_tail.py candidate.wav /path/to/unpacked-M4/units/03/m1/speech.wav hybrid.wav
```

The hybrid take runs 4.740 s. Against separate adjacent M4 speech, the WeSpeaker cosine increased from 0.624 to 0.728. Against the unrelated radio voice the hybrid scored 0.071. The three original M4 speech windows scored 0.837–0.876 against each other. The direct comparison with the superseded sentence shares samples after this edit and is not independent. Unprompted automated transcription recovered the full revised second sentence. These checks do not establish perceptual identity.

The archived M4 Unit Three speech stem has SHA-256 `f790448f68ad808d89ad834fd5aa55de377e5dc15a8edb8150db2bc2c38da2c4`. The hybrid take has SHA-256 `6c5d0f3ec559a7edd6abe5995eb8c501c72824ec5e330aaf8c3f2f1f2c41f6b4`.

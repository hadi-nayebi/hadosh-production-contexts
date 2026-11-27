"""Render the agent's opening and the radio handoff from the reviewed mono Unit 01 speech stem.

Requires Python 3, NumPy and SciPy. Usage:
    python author_opening.py original-speech.wav revised-speech.wav
The companion opening-cues.json records global film times and the unit offset.
"""
import argparse
import json
from pathlib import Path

import numpy as np
from scipy import ndimage, signal
from scipy.io import wavfile

RATE = 24_000
WINDOW = 768
HOP = 96


def pcm16(floats):
    return np.clip(np.rint(floats * 32768), -32768, 32767).astype('<i2')


def envelope(samples, span):
    energy = ndimage.uniform_filter1d(samples * samples, span, mode='nearest')
    return np.sqrt(np.maximum(energy, 1e-14))


def articulate_agent(source):
    """Replace the vocal-fold excitation with a tuned electronic oscillator.

    A smoothed spectral envelope carries the original formants. Unvoiced
    consonants use the source's noise excitation to stay clear on a phone.
    """
    t = np.arange(len(source)) / RATE
    f, time, spec = signal.stft(source, RATE, nperseg=WINDOW, noverlap=WINDOW-HOP)
    # Coherent vowels receive the electronic source. Fricatives retain their
    # real consonant attacks; no extra time is inserted between syllables.
    low = signal.sosfiltfilt(signal.butter(3, [75, 2400], fs=RATE, btype='bandpass', output='sos'), source)
    padded = np.pad(low, WINDOW // 2)
    voiced = []
    for i in range(len(time)):
        frame = padded[i*HOP:i*HOP+WINDOW]
        frame = np.pad(frame, (0, max(0, WINDOW-len(frame)))) * np.hanning(WINDOW)
        a = signal.correlate(frame, frame, 'full', method='fft')[WINDOW-1:]
        peak = np.max(a[75:295]) / max(a[0], 1e-10)
        voiced.append(np.clip((peak-.19)/.48, 0, 1))
    voiced = ndimage.gaussian_filter1d(voiced, 1.35)
    # A restrained electronic pitch contour follows three independent thoughts.
    # Harmonics are phase coherent, so this is distinct from ring modulation.
    accents = [[0,179],[.26,181],[.48,192],[.81,184],[1.30,175],
               [1.48,182],[1.77,180],[2.10,173],[2.39,186],[2.86,178],
               [3.12,167],[3.44,160],[3.84,165],[4.00,175],[4.16,192],
               [4.44,178],[4.78,173],[5.14,166],[5.43,159],[5.88,173],
               [6.10,189],[6.34,184],[6.56,176],[6.80,171],[7.08,161],[7.43,154]]
    knots, pitches = np.array(accents).T
    pitch = ndimage.gaussian_filter1d(np.interp(t, knots, pitches), RATE*.008)
    phi = np.cumsum(2*np.pi*pitch/RATE)
    carrier = np.zeros_like(source)
    for n in range(1, 57):
        carrier += (np.cos(n*phi + .07*np.sqrt(n)) +
                    .085*np.sin(n*phi*1.0045+.36*n)) / n**.58
    _, _, carrier_spec = signal.stft(carrier,RATE,nperseg=WINDOW,noverlap=WINDOW-HOP)
    def smooth_power(z):
        return ndimage.gaussian_filter1d(np.abs(z)**2, 4.5, axis=0, mode='nearest')
    vocal_power = smooth_power(spec)
    # Lift the formants by about a semitone. This separates the agent's identity
    # from the returning narrator without obscuring vowels.
    grid = np.arange(len(f))
    lo = np.floor(grid/1.065).astype(int)
    hi = np.minimum(lo+1,len(f)-1)
    mix = (grid/1.065-lo)[:,None]
    shifted = vocal_power[lo]*(1-mix) + vocal_power[hi]*mix
    electronic = carrier_spec * np.sqrt(np.maximum(shifted,0)/np.maximum(smooth_power(carrier_spec),1e-11))
    # Nothing rings across word gaps. The strongest sibilants remain mostly
    # direct even during mixed voiced/unvoiced syllables.
    broadband = .16 + .84*np.exp(-(f/4200)**3)
    amount = (.10 + .86*voiced[None,:]) * broadband[:,None]
    combined = electronic * amount + spec * (1-amount)
    _, voice = signal.istft(combined,RATE,nperseg=WINDOW,noverlap=WINDOW-HOP)
    voice = voice[:len(source)]
    # Bring the new timbre to the same local delivery before applying distance.
    original_env = envelope(source, 780)
    synth_env = envelope(voice, 780)
    correction = ndimage.gaussian_filter1d(np.clip((original_env+.00012)/(synth_env+.00012),.72,1.72),96)
    return voice*correction


def perspective(dry, global_t, gain_points):
    t = global_t
    distances,gains = np.array(gain_points).T
    gain = np.interp(t,distances,gains)
    near = signal.sosfiltfilt(signal.butter(2,9000,fs=RATE,output='sos'),dry)
    far = signal.sosfiltfilt(signal.butter(2,5450,fs=RATE,output='sos'),dry)
    mix = np.clip((1-gain)/.55,0,1)
    # First reflections establish a small acoustic distance, remaining below
    # the consonants and ending inside the sentence's own decay.
    reflected = np.zeros_like(dry)
    for delay,weight in [(.018,.055),(.034,.034)]:
        d=round(delay*RATE)
        reflected[d:] += dry[:-d]*weight
    return gain*((1-mix)*near + mix*far + mix*reflected)


def switch_sound(length):
    """Two detents, a narrow tuning sweep and a short squelch. Fixed take."""
    rng=np.random.default_rng(3200)
    t=np.arange(length)/RATE
    noise=rng.standard_normal(length)
    tuning = signal.sosfilt(signal.butter(3,[690,4150],btype='bandpass',fs=RATE,output='sos'),noise)
    gate = np.clip(t/.018,0,1) * np.clip((.164-t)/.051,0,1)
    static = .028*tuning*gate*(.63+.37*np.sin(2*np.pi*16*t)**2)
    freq=np.interp(t,[0,.041,.115,.159,.21],[1220,1830,960,720,720])
    heterodyne=.0095*np.sin(np.cumsum(2*np.pi*freq/RATE))*np.sin(np.pi*np.clip(t/.161,0,1))**1.4
    click=np.zeros_like(t)
    for at,peak in [(.005,.063),(.165,.049)]:
        local=np.maximum(t-at,0)
        click += (t>=at)*np.exp(-local/.0048)*peak*(np.sin(2*np.pi*1840*local)+.38*np.sin(2*np.pi*3290*local))
    result=1.55*(static+heterodyne+click)
    return result*np.clip(t/.002,0,1)*np.clip((t[-1]-t)/.014,0,1)


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('input',type=Path)
    p.add_argument('output',type=Path)
    p.add_argument('--cues',type=Path,default=Path(__file__).with_name('opening-cues.json'))
    args=p.parse_args()
    if args.input.resolve()==args.output.resolve():
        p.error('Choose a separate output path for the revised speech stem.')
    cue=json.loads(args.cues.read_text())
    sr,base=wavfile.read(args.input)
    if sr!=RATE or base.dtype!=np.int16 or base.ndim!=1:
        p.error('Input must be the reviewed 24 kHz mono PCM16 speech stem.')
    index=lambda s:round((s-cue['unit01Start'])*RATE)
    begin,end=cue['amplitudeCurve'][0][0],cue['amplitudeCurve'][-1][0]
    a,b=index(begin),index(end)
    old=base[a:b]/32768.
    new=articulate_agent(old)
    new=perspective(new,begin+np.arange(len(old))/RATE,cue['amplitudeCurve'])
    blend=np.minimum(np.clip(np.arange(len(old))/(RATE*.008),0,1),np.clip((len(old)-1-np.arange(len(old)))/(RATE*.015),0,1))
    result=base.copy()
    result[a:b]=pcm16(new*blend+old*(1-blend))
    sa,sb=index(cue['radioSwitch']['start']),index(cue['radioSwitch']['end'])
    result[sa:sb]=pcm16(result[sa:sb]/32768.+switch_sound(sb-sa))
    wavfile.write(args.output,RATE,result)


if __name__=='__main__':
    main()

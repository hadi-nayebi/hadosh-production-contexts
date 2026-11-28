"""Retain the original M4 performance of the identical words 'vast collections of text'."""
import argparse
from pathlib import Path
import numpy as np
from scipy.io import wavfile

def restore(candidate, original, destination):
    sr,y=wavfile.read(candidate)
    source_sr,x=wavfile.read(original)
    assert source_sr==sr==24000 and x.ndim==y.ndim==1
    def section(a,start,stop):return a[round(start*sr):round(stop*sr)].astype(float)
    a=section(y,0,3.264)
    b=section(x,28.140,29.63)
    # Align the very quiet breath before /v/. Match amplitude on the first stressed vowel.
    ratio=np.sqrt(np.mean(section(y,3.3,3.45)**2)/np.mean(section(x,28.19,28.34)**2))
    b*=ratio
    n=round(.014*sr)
    ramp=np.linspace(0,1,n)
    out=np.r_[a[:-n],a[-n:]*(1-ramp)+b[:n]*ramp,b[n:]]
    wavfile.write(destination,sr,np.round(out).astype('int16'))
    print('gain',ratio,'duration',len(out)/sr)
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for a in ('candidate','original','destination'):p.add_argument(a,type=Path)
    a=p.parse_args();restore(a.candidate,a.original,a.destination)

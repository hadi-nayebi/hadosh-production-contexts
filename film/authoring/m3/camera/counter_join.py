"""Carry the same socket, cable and toaster through the reversible change of kitchen angle."""
import cv2 as cv
import numpy as np
from scipy.spatial import Delaunay

class CounterJoin:
    def __init__(self, frame):
        self.w,self.h=1280,720; self.a=frame(417);self.b=frame(448)
        # Vertices clockwise around the outlet, plug, wire sag, toaster profile, utensil pot, counter.
        self.ka=np.array([[.347,.346],[.395,.346],[.395,.502],[.347,.502],[.393,.575],[.490,.590],[.568,.563],
            [.578,.405],[.610,.382],[.703,.385],[.727,.409],[.733,.592],[.654,.609],[.578,.589],
            [.822,.421],[.895,.416],[.891,.578],[.821,.577],[.12,.618],[.40,.630],[.76,.633],[.98,.635]],'f4')
        self.kb=np.array([[.10,.166],[.201,.185],[.202,.604],[.10,.633],[.230,.774],[.406,.814],[.632,.698],
            [.639,.398],[.674,.344],[.887,.340],[.945,.398],[.946,.748],[.826,.791],[.635,.738],
            [.569,.412],[.637,.408],[.635,.582],[.559,.598],[.08,.926],[.42,.923],[.77,.877],[.98,.775]],'f4')
        self.ka=np.delete(self.ka, [14,15,16,17], axis=0); self.kb=np.delete(self.kb, [14,15,16,17], axis=0)
        self.edge=np.float32([[-.1,-.1],[.5,-.1],[1.1,-.1],[-.1,.5],[1.1,.5],[-.1,1.1],[.5,1.1],[1.1,1.1]])
        self.x=np.linspace(0,1,self.w,dtype='f4')[None,:];self.y=np.linspace(0,1,self.h,dtype='f4')[:,None];gx,gy=150,85
        yy,xx=np.mgrid[:gy,:gx];self.field=np.float32(np.c_[xx.ravel()/(gx-1),yy.ravel()/(gy-1)]);self.gw=gx;self.gh=gy
    @staticmethod
    def smooth(z):
        z=np.clip(z,0,1);return z*z*(3-2*z)
    def __call__(self,i):
        if i==417:return self.a.copy()
        if i==448:return self.b.copy()
        q=self.smooth((i-417)/31); a=np.vstack([self.ka,self.edge]); b=np.vstack([self.kb,self.edge]); tar=(1-q)*a+q*b
        tri=Delaunay(tar); ids=tri.find_simplex(self.field); transform=tri.transform[ids]; uv=(transform[:,:2]@(self.field-transform[:,2])[:,:,None])[:,:,0];wt=np.c_[uv,1-uv.sum(axis=1)]
        def warp(im,points):
            uv=(points[tri.simplices[ids]]*wt[:,:,None]).sum(1).reshape(self.gh,self.gw,2).astype('f4');uv=cv.resize(uv,(self.w,self.h),interpolation=cv.INTER_LINEAR)
            return cv.remap(im,uv[:,:,0]*(self.w-1),uv[:,:,1]*(self.h-1),cv.INTER_CUBIC,borderMode=cv.BORDER_REFLECT_101)
        va=warp(self.a,a);vb=warp(self.b,b)
        # Resolve the foreground counter first, pass the wipe up the backsplash, and leave each side solid.
        alpha=self.smooth((q-(.10+.56*(1-self.y)+.13*self.x))/.18)[:,:,None]
        return np.uint8(va*(1-alpha)+vb*alpha)

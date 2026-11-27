"""Resolve the plate-37 approach against one intact plate-39 disc. Inputs BGR, 1280x720."""
import cv2 as cv
import numpy as np
from scipy.interpolate import PchipInterpolator

class OrbitRepair:
    def __init__(self, plate, final_frame, end=624):
        self.near = plate(37)
        self.globe = plate(39)
        self.final = final_frame
        self.end = end
        self.h, self.w = self.globe.shape[:2]
        self.y = np.linspace(0,1,self.h,dtype='float32')[:,None]
        self.x = np.linspace(0,1,self.w,dtype='float32')[None,:]
        self.fl = np.array([.495, .396], dtype='float32')
        self.near_fl = np.array([.623,.796], dtype='float32')
        self.globe_center = np.array([397.35/800,211.77/450],dtype='float32')
        self.final_center = np.array([398.19/800,317.22/450],dtype='float32')
        self.ratio = 97.5/186.5
        end=self.final_center+self.ratio*(self.fl-self.globe_center)
        keys=[580,583,587,592,598,604]
        self.path=PchipInterpolator(keys,np.c_[np.log([4.05,3.72,2.80,1.65,.86,self.ratio]),[.623,.61,.575,.531,.502,end[0]],[.796,.772,.692,.584,.575,end[1]]],axis=0)
    @staticmethod
    def smooth(x):
        x=np.clip(x,0,1); return x*x*(3-2*x)
    def sample(self,im,x,y):
        return cv.remap(im,np.broadcast_to(np.asarray(x*(self.w-1),dtype='float32'),(self.h,self.w)),np.broadcast_to(np.asarray(y*(self.h-1),dtype='float32'),(self.h,self.w)),cv.INTER_CUBIC,borderMode=cv.BORDER_CONSTANT,borderValue=(12,2,2))
    def __call__(self,i):
        if i==580:return self.near.copy()
        if i>=self.end:return self.final.copy()
        i = 580 + (i-580)*24/(self.end-580)
        lg,fx,fy=self.path(i).astype('float32'); k=float(np.exp(lg)); wx=(self.x-fx)/k+self.fl[0]; wy=(self.y-fy)/k+self.fl[1]
        # Tilt the northern latitudes toward the shallow horizon of the near plate. Eastern US stays registered.
        vx=(wx-self.fl[0])*4.05+self.near_fl[0]
        cx,cy=self.globe_center; rr=186.5/800; ry=186.5/450
        native_rim=cy-ry*np.sqrt(np.maximum(0,1-((wx-cx)/rr)**2))
        cap=.015+.54*(np.clip(vx,-.1,1.1)-.5)**2
        virtual_rim=(cap-self.near_fl[1])/4.05+self.fl[1]
        visible=self.smooth((vx+.20)/.16)*self.smooth((1.20-vx)/.16)
        initial_cap=(.015-self.near_fl[1])/4.05+self.fl[1]-(cy-ry)
        target_cap=np.interp(i,[580,586,592,597],[.015,.024,.048,.065]); baseline=max(0,(target_cap-fy)/k+self.fl[1]-(cy-ry))
        curved_weight=np.clip(1-((wx-cx)/rr)**8,0,1)
        offset=curved_weight*baseline+(virtual_rim-native_rim-initial_cap*curved_weight)*visible*(1-self.smooth((i-580)/9))
        projected_rim=native_rim+offset
        anchor=np.maximum(.300,projected_rim+.025)
        blend=np.clip((anchor-wy)/np.maximum(anchor-projected_rim,.025),0,1)
        uy=wy-offset*blend
        far=self.sample(self.globe,wx,uy)
        if i<590:
            vy=(wy-self.fl[1])*4.05+self.near_fl[1]
            near=self.sample(self.near,vx,vy)
            edge=np.minimum(np.minimum(vx,1-vx),np.minimum(vy,1-vy))
            # First pose is full-bleed. Then retire its nearest boundaries as the full globe enters view.
            near_alpha=self.smooth((edge+.002)/.09)*(1-self.smooth((i-580)/10))
            near_alpha*=self.smooth((vy-cap-.04)/.12)
            far=np.uint8(near*near_alpha[:,:,None]+far*(1-near_alpha[:,:,None]))
        # Apply the same centre and radius to the complete endpoint disc, so native black never streaks.
        if i>=594:
            sx=self.final_center[0]+self.ratio*(wx-cx); sy=self.final_center[1]+self.ratio*(wy-cy)
            final=self.sample(self.final,sx,sy); a=float(self.smooth((i-594)/10));far=cv.addWeighted(far,1-a,final,a,0)
        return far

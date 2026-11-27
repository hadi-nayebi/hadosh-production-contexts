"""One material window frame moves past the lens while the city remains behind it."""
import cv2 as cv
import numpy as np

class WindowExit:
    def __init__(self, plate):
        self.room=plate(24);self.city=plate(29); h,w=self.room.shape[:2];self.h=h;self.w=w
        y,x=np.mgrid[:h,:w].astype('float32');x/=w-1;y/=h-1
        # The dark mullions, sill and nearest woodwork come from the physical source plate.
        glass=np.float32((x>.536)&(x<.985)&(y<.523))
        for cx,half in ((.573,.007),(.63,.004),(.689,.008),(.760,.0045),(.825,.0046),(.906,.0105),(.987,.006)):
            glass[np.abs(x-cx)<half]=0
        glass[np.abs(y-(.094-.058*(x-.53)/.47))<.014]=0
        glass[np.abs(y-(.24-.035*(x-.53)/.47))<.0065]=0
        self.matte=cv.GaussianBlur(1-glass,(0,0),.9)
        self.entry=np.array([.793,.365],dtype='float32');self.tgt=np.array([.50,.50],dtype='float32')
        self.office=np.array([.662,.333],dtype='float32')
    @staticmethod
    def smooth(a):
        a=np.clip(a,0,1);return a*a*(3-2*a)
    def project(self,im,scale,src,dst,mode=cv.BORDER_CONSTANT):
        t=(dst-scale*src)*[self.w-1,self.h-1];return cv.warpAffine(im,np.float32([[scale,0,t[0]],[0,scale,t[1]]]),(self.w,self.h),flags=cv.INTER_LINEAR,borderMode=mode)
    def __call__(self,i,original):
        if i<=507:return original
        if i>=530:return self.city.copy()
        q=(i-507)/23;v=.973*(.75*q+.25*q*q);fg_scale=1/(1-v)
        aimed=self.entry+(self.tgt-self.entry)*self.smooth(q)**1.45
        near=self.project(self.room,fg_scale,self.entry,aimed);mask=self.project(self.matte,fg_scale,self.entry,aimed)
        nz=float(self.smooth(q));bg_scale=1.12-.12*nz
        point=(1-nz)*np.array([.791,.386])+nz*self.office
        far=self.project(self.city,bg_scale,self.office,point,cv.BORDER_REPLICATE)
        # Match the low kitchen exposure during entry, lifting the exterior as the viewer clears the pane.
        exp=.57+.43*self.smooth((q-.17)/.83)
        formed=np.uint8((near*mask[:,:,None]+far*(1-mask[:,:,None]))*exp)
        fade=float(self.smooth((i-507)/7));return cv.addWeighted(original,1-fade,formed,fade,0)

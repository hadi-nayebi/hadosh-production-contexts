"""Build the single registered table view from the chapter's own approved art.

The library plate supplies its original shelves, rug and rear feet. The
registered desk cutout supplies the complete upper surface and front feet,
including their wood grain. Objects keep their original desk coordinates.
"""
import argparse, json
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps
from scipy.ndimage import gaussian_filter

def build_plate(unit_dir):
    root=unit_dir/'approved'
    # Work at the library photograph's native 1280 x 720.
    room=Image.open(root/'approved-library.webp').convert('RGB').resize((1280,720),Image.Resampling.LANCZOS)
    k=1.28
    # Lower surface of the rug is clean between the original front legs.
    # Sample and project it over the old apron/leg area before mounting the
    # registered table. The feathered mask respects the rug/wood floor edge.
    original=np.asarray(room).astype(float)
    h,w=original.shape[:2]
    yy,xx=np.mgrid[:h,:w];x=xx/k;y=yy/k
    # Retire the photographed foreground legs where they ran below the source
    # crop. Neighboring strips of the actual rug replace just those legs.
    # Keep the photographed rear feet and their floor shadows.
    clean=original.copy()
    for cx,side in [(187,-1),(810,1)]:
        distance=np.abs(x-cx)
        alpha=np.clip((38-distance)/8,0,1)*np.clip((y-464)/9,0,1)
        shifted=np.clip(xx+round(side*72*k),0,w-1)
        clean=clean*(1-alpha[:,:,None])+original[yy,shifted]*alpha[:,:,None]
    # The low rug plane and its two rear feet share the perspective of the
    # static foreground. Blend it inside the carpet, retaining original
    # shelves and the two visible strips of wooden floor on either side.
    ix=np.clip(np.rint((500+(x-500)/1.10)*k),0,w-1).astype(int)
    iy=np.clip(np.rint((478+(y-402)/1.91)*k),0,h-1).astype(int)
    edge=500-(np.maximum(y-275,0)*1.9+237)
    # Side weighting fades to zero outside the rug. Upper edge is hidden
    # behind the newly mounted desktop.
    mask=np.clip((y-385)/17,0,1)*np.clip((447-np.abs(x-500))/45,0,1)
    bg=original*(1-mask[:,:,None])+clean[iy,ix]*mask[:,:,None]
    # Contact shadows sit underneath the complete foreground feet.
    shadow=Image.new('L',(1280,720),0);d=ImageDraw.Draw(shadow)
    for cx,cy,rx,ry in [(151,536,46,6),(841,536,46,6),(497,479,296,17)]:
        d.ellipse(((cx-rx)*k,(cy-ry)*k,(cx+rx)*k,(cy+ry)*k),fill=128)
    sh=np.asarray(shadow.filter(ImageFilter.GaussianBlur(5))).astype(float)/255
    bg*=1-.48*sh[:,:,None]
    room=Image.fromarray(np.uint8(np.clip(bg,0,255))).convert('RGBA')

    cut=Image.open(root/'registered-desk-silhouette.webp').convert('RGBA')
    # The source cutout ends midway down the two front legs; finish the
    # existing grain into narrow lower faces with beveled bottom edges.
    desk=Image.new('RGBA',(1000,593))
    desk.alpha_composite(cut,(0,44))
    for left,right,bottom_left,bottom_right in [(70,132,75,127),(868,924,872,919)]:
        leg=cut.crop((left,488,right,515)).resize((right-left,31),Image.Resampling.BICUBIC)
        leg=ImageOps.flip(leg)
        rgb=np.asarray(leg.convert('RGB')).astype(float)
        for row in range(31):
            f=row/30
            a=round(left+(bottom_left-left)*f)
            b=round(right+(bottom_right-right)*f)
            brightness=1-.14*f
            if row>27:brightness-=.14*(row-27)/3
            stripe=Image.fromarray(np.uint8(np.clip(rgb[row]*brightness,0,255))[None,:,:]).resize((b-a,1),Image.Resampling.LANCZOS)
            desk.paste(stripe.convert('RGBA'),(a,562+row))
    # This same affine registration is applied once to every live prop.
    scale=.85; x0=75; y0=30
    desk=desk.resize((round(1000*scale*k),round(593*scale*k)),Image.Resampling.LANCZOS)
    room.alpha_composite(desk,(round(x0*k),round(y0*k)))
    return room.convert('RGB')

def update(runtime,overlay):
    source=runtime/'units/03'
    u=json.loads((source/'unit.json').read_bytes())
    target=overlay/'units/03'
    target.mkdir(parents=True,exist_ok=True)
    plate=build_plate(source);plate.save(target/'whole-table-library.webp',lossless=True,method=4)
    end=u['visualTimeline'][-1][1]+.001
    def walk(n):
        yield n
        for c in n.get('children',[]): yield from walk(c)
    all_nodes={n['id']:n for n in walk(u['root'])}
    camera=all_nodes['table-reading-camera'];desk=all_nodes['registered-desk']
    camera['tracks']={};camera['time'][1]=end
    desk['tracks']={'scale':.85,'x':75,'y':30};desk['time'][1]=end
    desk['children']=[n for n in desk['children'] if n['id'] not in ('approved-empty-desk','registered-desk-silhouette')]
    bg=all_nodes['approved-library'];bg.update(asset='whole-table-library',box=[0,0,1000,562.5],time=[80.7,end],tracks={})
    camera['children']=[bg,desk]
    u['root']['children']=[n for n in u['root']['children'] if n['id']!='registered-library-move']
    # Retain the final resolved word, paper and orb throughout the authored
    # 12-frame transition hold. The old baked lift covered this interval.
    for n in walk(desk):
        if n.get('time',[0,0])[1]==119.671:
            n['time'][1]=end
    u['assets']['whole-table-library']={'type':'image','src':'whole-table-library.webp','size':[1280,720]}
    for ident in ('approved-library','approved-mezzanine','registered-lift','approved-empty-desk','registered-desk-silhouette'):
        u['assets'].pop(ident,None)
    (target/'unit.json').write_text(json.dumps(u,ensure_ascii=False,separators=(',',':')))

if __name__=='__main__':
    a=argparse.ArgumentParser(description=__doc__);a.add_argument('runtime',type=Path);a.add_argument('overlay',type=Path)
    v=a.parse_args();update(v.runtime,v.overlay)

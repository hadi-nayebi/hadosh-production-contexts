import {useEffect, useRef, useState} from 'react';

/** A retained render keeps failed WebGL previews visible without losing draft edits. */
export default function RenderedPreviewFallback({frame}:{frame:number}) {
  const video=useRef<HTMLVideoElement>(null);
  const [missing,setMissing]=useState(false);
  const seek=()=>{if(video.current?.readyState) video.current.currentTime=frame/30;};
  useEffect(seek,[frame]);
  return <div data-preview-fallback="retained-v28" style={{position:'absolute',inset:0,background:'#122a2d'}}>
    <video ref={video} src="/previews/foundation-depth-fallback-v28.mp4" muted playsInline preload="auto" onLoadedData={seek} onError={()=>setMissing(true)} style={{width:'100%',height:'100%',objectFit:'contain'}} aria-label="Rendered depth scene fallback"/>
    <span role="status" style={{position:'absolute',bottom:8,left:8,padding:'4px 8px',background:'#122a2de6',color:'#f3e9d0',fontSize:12}}>
      {missing?'Saved preview unavailable. Open the latest version above.':'Saved v28 render · depth preview unavailable · draft edits are not shown here'}
    </span>
  </div>;
}

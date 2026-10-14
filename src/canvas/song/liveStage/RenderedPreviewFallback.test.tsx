import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,render} from '@testing-library/react';
import project from './registeredSequenceStudy';
import SceneArtwork from './SceneArtwork';
vi.mock('three',async importOriginal=>{
 const actual=await importOriginal<typeof import('three')>();
 return {...actual,WebGLRenderer:class {constructor(){throw new Error('WebGL unavailable');}}};
});
afterEach(cleanup);
it('keeps editable SVG artwork when WebGL fails instead of using a video',()=>{
 const view=render(<SceneArtwork project={project} frame={531}/>);
 expect(view.container.querySelector('video')).toBeNull();
 expect(view.container.querySelector('[data-preview-fallback="editable-svg"]')).not.toBeNull();
 expect(view.container.querySelector('svg image')).not.toBeNull();
 expect(view.container.querySelector('[data-lyric-word]')).toBeNull();
});
it('returns to editable artwork when leaving the failed depth scene',()=>{
 const view=render(<SceneArtwork project={project} frame={531}/>);
 view.rerender(<SceneArtwork project={project} frame={2349}/>);
 expect(view.container.querySelector('video')).toBeNull();
 expect(view.container.querySelector('svg')).not.toBeNull();
});

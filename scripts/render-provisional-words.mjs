import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia} from '@remotion/renderer';

const [propsFile,output]=process.argv.slice(2);
if(!propsFile||!output)throw Error('Usage: node scripts/render-provisional-words.mjs <downloaded-preview.json> <new-output.mp4>');
try{await fs.access(output);throw Error('Output already exists; choose a new version filename.');}catch(e){if(e.code!=='ENOENT')throw e;}
const props=JSON.parse(await fs.readFile(propsFile,'utf8'));
const url=new URL(props.audioUrl);
if(url.origin!=='http://127.0.0.1:5187')throw Error('Expected retained local dashboard audio.');
const response=await fetch(url,{signal:AbortSignal.timeout(15000)});
if(!response.ok)throw Error('Local source is unavailable; start dashboard on port5187.');
const bytes=Buffer.from(await response.arrayBuffer());
if(createHash('sha256').update(bytes).digest('hex')!==props.annotation.audioHash)throw Error('Audio hash mismatch.');
const serveUrl=await bundle({entryPoint:path.resolve('src/canvas/song/lyricFocus/word-video-entry.tsx')});
const browserExecutable=process.env.CHROMIUM_EXECUTABLE;
const composition=await selectComposition({serveUrl,id:'WordPreview',inputProps:props,browserExecutable});
await renderMedia({serveUrl,composition,inputProps:props,codec:'h264',outputLocation:path.resolve(output),browserExecutable,concurrency:2});
await fs.writeFile(`${output}.props.json`,JSON.stringify(props,null,2),{flag:'wx'});

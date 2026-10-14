import {Component,Suspense,lazy,type ReactNode} from 'react';
const FullWords=lazy(()=>import('./FullWordMotionStage'));
const Toaster=lazy(()=>import('./IllustratedToasterStage'));
const Reprise=lazy(()=>import('./OwnershipRepriseStage'));
const Speech=lazy(()=>import('./SpeechCortexStage'));
const Readable=lazy(()=>import('./ReadableBrowserStage'));
const Candidate=lazy(()=>import('./BrowserCandidateStage'));
class CandidateBoundary extends Component<{children:ReactNode},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<main style={{padding:32}}><h1>This experimental draft could not load</h1><p>Your saved working versions are unaffected.</p><a href="/songs/live-foundation-v29">Open the previous working editor · v29</a></main>:this.props.children;}
}
export default function ExperimentalBrowser({readable=false,speech=false,fullWords=false,toaster=false,reprise=false}:{readable?:boolean;speech?:boolean;fullWords?:boolean;toaster?:boolean;reprise?:boolean}){const Stage=reprise?Reprise:toaster?Toaster:fullWords?FullWords:speech?Speech:readable?Readable:Candidate;return <CandidateBoundary><Suspense fallback={<p>Loading the isolated browser candidate…</p>}><Stage/></Suspense></CandidateBoundary>;}

import {Component,Suspense,lazy,type ReactNode} from 'react';
const Candidate=lazy(()=>import('./OpeningCandidateStage'));
class CandidateBoundary extends Component<{children:ReactNode},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<main style={{padding:32}}><h1>This experimental draft could not load</h1><p>Your saved working versions are unaffected.</p><a href="/songs/live-foundation-v29">Open the previous working editor · v29</a></main>:this.props.children;}
}
export default function ExperimentalOpening(){return <CandidateBoundary><Suspense fallback={<p>Loading the isolated opening candidate…</p>}><Candidate/></Suspense></CandidateBoundary>;}

import {wordJourneyCoverage} from './wordJourneyCoverage';
import type {Scene} from './scene.mjs';
import {foundationGate} from './foundationGate';
import {foundationMetrics} from './foundationMetrics';
import review from './visual-review-status.json';
export default function FoundationGateReview({project,frame}:{project:Scene;frame:number}){
 const metrics=foundationMetrics(project),journeys=wordJourneyCoverage(project);
 const gate=foundationGate(project),scene=project.scenes.find(s=>frame>=s.start&&frame<s.end),cue=scene?.cutEvidence;
 return <details><summary>Foundation gate · {gate.detailsUnlocked?'passed':'visual review failed · details locked'}</summary>
  <p><strong>Hadi’s assessment: {review.assessment}</strong> {review.reason} This review is unresolved. The measured beat score below is not a video-quality score.</p>
  <p>{review.context}</p>
  <p><strong>Actual schedule:</strong> {metrics.seconds.toFixed(1)} seconds · {metrics.shots} timed segments · {metrics.cuts} scheduled boundaries, including {metrics.declaredHolds} declared camera holds. Segment lengths {metrics.minimum?.toFixed(2)}–{metrics.maximum?.toFixed(2)} seconds, mean {metrics.mean?.toFixed(2)}. {metrics.outsideCadence} outside the required 2–4 seconds.</p>
  <p><strong>Word display:</strong> at most one lyric word at a time; no phrase subtitle plates. {metrics.timedWords}/{metrics.words} words have provisional timing for this source. {metrics.sourceMatches?'Timing remains unapproved by listening.':'Source changed: word timing is unavailable.'} Earlier exported videos are separate artifacts and may retain the rejected subtitle treatment.</p>
  <p><strong>Word-motion implementation:</strong> {journeys.journey}/{journeys.total} words have a complete entrance/read/join treatment. {journeys.shortHold} short cues deliberately hold full size; {journeys.static} still use fixed placement; {journeys.mixed} cross different treatments; {journeys.hidden} are hidden; {journeys.missing} lack complete scene coverage. {journeys.crossingBoundaries} words straddle a scene boundary. {project.lyricBoundaryPolicy==='word-start-scene'?'Their original route continues until the word ends.':'Boundary motion remains to be reviewed.'} These counts inspect the current draft, including edits. They are not readability or creative scores.</p>
  <p><strong>Full-film foundation is incomplete:</strong> one-word display alone does not satisfy independently motivated word motion. All unreviewed scenes below still require evidence.</p>
  <p><strong>Remaining gap:</strong> scheduled cuts are not verified changes in action or viewpoint. Meaningful scene changes, lyric meaning, readable staging and visual coherence remain unmeasured below. They cannot inherit the beat score.</p>
  <p>Current draft {project.documentId}, revision {project.revision}. Beat estimates are source-bound measurements, not listening or visual approval. No foundation creative review is registered for this draft.</p>
  <table style={{width:"100%",tableLayout:"fixed",fontSize:12,overflowWrap:"anywhere"}}><caption>Separate scores; missing evidence prevents a pass</caption><thead><tr><th>Dimension</th><th>Score and evidence</th></tr></thead><tbody>{gate.dimensions.map(d=><tr key={d.id}><th style={{textAlign:'left',padding:'7px 5px'}}>{d.label}</th><td style={{padding:'7px 5px'}}>{d.mean===null?'Unmeasured':`${d.mean.toFixed(2)} mean / ${d.minimum!.toFixed(2)} minimum`}<br/>{d.measured}/{d.expected} reviewed · {d.passed?'Numerical pass':d.hardFailures.length?'Failed':'Unreviewed'}</td></tr>)}</tbody></table>
  <p>Required means must exceed 90/100; every item must reach 80. Missing evidence, stale source timing or any hard failure keeps refinement locked. A planned camera change is not proof of a meaningful visible change.</p>
  <details><summary>How visual storytelling will be reviewed</summary><p>{review.rubricStatus}</p><ul>{review.criteria.map(c=><li key={c.id}>{c.label}: {c.weight}%</li>)}</ul><p>{review.anchors.join(' · ')}. Weighted score = sum of weight × rating /4; unreviewed criteria are not zero and prevent an overall score.</p><p>{review.evidenceRule}</p><p>Hard failures override averages: {review.hardFailures.join('; ')}.</p></details>
  {gate.dimensions.flatMap(d=>d.hardFailures).map((failure,i)=><p key={i}>{failure}</p>)}
  <p>Current scene: {scene?.title} · frames {scene?.start}–{scene?.end}. {scene?.description}</p>
  {cue&&<p>{scene?.boundaryIntent?'Internal action boundary during intentional hold':'Scheduled cut'} at frame {cue.measuredFrame}: {cue.score.toFixed(2)}/100; nearest observed beat {cue.beatSeconds}s; distance {cue.beatDistanceMs}ms. Frequency-band values: low {cue.frequencyBands.low}, mid {cue.frequencyBands.mid}, high {cue.frequencyBands.high}. Lyric cues: {cue.lyricPhraseIds.join(', ')}.</p>}
  <p><a href="https://github.com/hadi-nayebi/hadosh-production-contexts" target="_blank" rel="noreferrer">Layer dependencies and scoring rubrics</a> · <a href="https://github.com/hadi-nayebi/hadosh-production-contexts" target="_blank" rel="noreferrer">Canonical decisions and review evidence</a></p>
 </details>;
}

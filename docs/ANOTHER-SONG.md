# Build the context for a different song

This is a recommended workflow derived from the example, not a claim that the original work followed a perfect linear sequence. Expect to revisit earlier decisions.

## Start with a small owner brief

Bring the intended audience, one central idea, a few concrete examples, preferred musical feel, constraints, and any existing lyrics or authorized audio. Say what success would feel like and which decisions you want to make yourself. You do not need a finished lyric or a complete tool specification.

Ask your agent:

> Study this repository as evidence of a project-specific tool. Explain what is historical, what can run here, and what you would change for my project. Help me build the context and review the choices. Start with one passage. Preserve my files and distinguish my decisions from your proposals.

## Work through reviewable handoffs

| Handoff | Work together | Keep | Move on when |
|---|---|---|---|
| Brief → lyric exploration | Translate the idea into concrete images, plain language and possible refrains. Compare alternatives aloud. | Brief, lyric versions, authorship, rejected options and reasons | Owner chooses a working direction; unresolved choices stay visible |
| Lyrics → musical request | Explore rhythm, diction, instrumental space and delivery. Build only the controls needed to compare them. | Selected lyric revision, style request, reference provenance | Owner approves the exact packet before external generation/spend |
| Returned takes → chosen recording | Import authorized files. Listen for omitted/replaced words, phrasing and useful pauses. Compare without overwriting older takes. | Take IDs, source hashes, notes and selected recording | The chosen audio actually carries the intended song |
| Recording → annotation | Estimate word timings and rhythm from the exact mix/stems. Correct by ear. | Manual anchors, provisional estimates, source identity | One passage is synchronized and readable; no mistaken reuse across takes |
| Scene description → visual plan | Describe action, camera direction, word placement and scene boundary. Create an infographic, then correct it together. | Plan versions, accepted decisions, open questions | Both understand what the scene communicates |
| Plan → live scene | Add backgrounds, cutouts and continuous clock-driven animation. Match hands, device geometry and exits. | Assets/provenance, layer positions, cue bindings | Playback shows the intended action; screenshots alone are insufficient |
| Scene review → selected checkpoint | Record timestamp, observed defect, desired change and comparison result. Preserve good passages. | Small review log and reproducible snapshot | Owner accepts the chosen version, with limitations explicit |
| Checkpoint → release | Render a short sample, inspect it, then export the full piece. Review with sound. | Master hash, source/snapshot hashes, thumbnails, copy and checklist | Owner approves the actual export and separately authorizes publication |

## Choose and adapt software deliberately

Use [song-production](https://github.com/hadi-nayebi/hadosh-production-contexts/tree/song-production) to study broad exploration, listening and prototype visual tools. Use [video-production](https://github.com/hadi-nayebi/hadosh-production-contexts/tree/video-production) to study passage review, source-bound timing and later scenes. Read the branch's WORKFLOW before running anything: their data models and export paths differ.

Create your own working branch or project. Replace lyrics, candidate metadata, source hashes, media URLs, scene boundaries and timing as a coherent set. Historical IDs and hard-coded scene schedules are not a generic import format. Ask the agent to trace one passage through the implementation and identify assumptions before expanding to a whole song.

A simpler new dashboard may be the right result. Keep only controls that help you make a decision, see a problem or preserve useful state. The durable context can outlive the temporary interface.

## Leave the next person a useful handoff

Include the chosen source and its license, decisions and unresolved questions, branch/commit, exact start command, required dependencies, exported state, asset manifest, last reviewed timestamps and next concrete action. Separate “implemented,” “technically checked,” “watched,” and “approved.” Keep private media and account state out of the public example.

See the video branch's [publication checklist](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/video-production/PUBLISHING.md). There is no automatic final product: the owner remains involved in constructing and selecting the context throughout.

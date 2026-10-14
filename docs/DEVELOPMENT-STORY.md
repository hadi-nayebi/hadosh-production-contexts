# How the context grew around the song

[Watch Who Owns the Toaster?](https://youtu.be/fg2cV8sh3kY) · [Try the workflow with another project](ANOTHER-SONG.md) · [Evidence and limits](EVIDENCE.md)

The film is one output of a larger body of work: lyric alternatives, listening decisions, timing corrections, illustrated plans, rejected shots, source code, and review notes. Hadi actively built that context with the model. He chose what the song should mean, listened, corrected what the visuals communicated, and decided when the result was good enough.

The dashboards changed around those decisions. They were personal tools for this project, not a plan to build a complete production platform. Another creator can study the context and ask an agent to build different software around a different project. There is no measured percentage of “context versus deliverable,” and the repository does not promise an automatic finished song.

## 1. Find words that carry the idea

The initial pilot used the toaster as a concrete analogy for power, models and human choice. Retained lyric data includes an early “Who owns your toaster? Who owns your toast?” opening and five iteration passes. This was exploration, not the final recording's lyric sheet. [E1]

The message broadened into a journey through the web, social feeds and AI. Hadi asked for more verses and simpler vocabulary so the meaning would land without requiring the listener to decode the metaphor. Musical direction became part of the context too: diction, groove, rests and room for visual transitions mattered alongside the words. [E2]

The later closing was much shorter: “Who owns the toaster?” followed by choosing the power, model and rules. Older artifacts retained the working title *Who Owns Your Toaster?*. The public title was corrected to *Who Owns the Toaster?* after Hadi explicitly asked why the title did not match the lyric at 01:51 UTC on October 14 (October 13 in America/Detroit). The closing revision and title correction are separate recorded decisions; the former does not establish the cause of the latter. Historical drafts remain evidence, not contradictory instructions for a new song. [E3]

## 2. Build machinery, then learn by using it

The first dashboard separated context, lyrics, musical direction, candidate recordings, timing, scenes and review. It retained revisions and made upstream changes invalidate downstream approval. Music generation happened in an external provider; the resulting audio had to return to the workspace. [E1, E4]

A listening room added cached audio, timestamped notes, pause-and-describe controls and short-passage playback. Hadi explicitly asked whether the generated recording contained all the intended words. A successful generation or download was not sufficient evidence. [E2, E4]

The first visual machinery developed editable words, layered objects, camera movement, a live stage and rough full-song previews. It helped expose concrete problems: competing versions, uncertain timing, difficult object placement and the gap between a still image looking good and a transition reading clearly in motion. The earlier public branch contains these visual experiments as well as song development; it is not a lyrics-only app. [E4]

## 3. Restart with a narrower interface

On October 12, Hadi requested an isolated lyrics-first restart. The new interface began with the title and one passage at a time. It preserved alternatives and revision history instead of treating the restart as permission to discard prior work. Arrangement and later audio work followed explicit review of the words. [E3]

An intermediate handoff, labelled “final” at that checkpoint, reports 22 approved vocal units plus six intended instrumental markers and preserves a lyric-packet hash. Those markers described desired structure, not measured timestamps. Later human decisions superseded that packet: the V0 scope record and posted candidate lyrics omit the added fourth parts of the social, workshop and harness verses, giving a 4–3–3–3–1 verse-part structure with intro, choruses and instrumental intentions separate. The intermediate approval remains historical evidence; it is not the final film’s lyric identity. [E3]

The later source reconciliation distinguished posted lyrics from embedded performance lyrics and raw recognition. Both V0 baseline performance packages contain 16 sections; the 3:51 baseline records 77 phrases/401 words and the 3:58 baseline records 79 phrases/414 words. Their performance representations retain refrain repetitions absent from the common posted text. These are source-bound baseline annotation counts, not an assertion that every word was listening-verified or that the later rendered annotation never changed. This was a focused second pass informed by using the first tool, followed by further human and source-driven revisions. [E3, E5]

## 4. Bind the work to the actual recording

Different takes did not share a clock. The later work retained separate 3:51 and 3:58 candidates, native WAV sources and isolated stems. Source hashes, word anchors and rhythm candidates made it possible to reason about a particular recording rather than a song title. Human corrections remained separate from estimates. [E5]

Hadi repeatedly corrected what happened at a sung word: words needed to arrive where they could be read, linger with their phrase, and move smoothly. Stem onsets informed visual rhythm, but they did not establish that every gesture or lyric was correctly aligned. Those were listening and viewing decisions. [E5, E6]

## 5. Direct scenes through visible examples

Hadi described a small scene; an illustrated plan consolidated it; artwork and independent layers implemented it; playback exposed the next correction. The opening evolved from separate words and a book on a stool to a normal open book leading into the sky and Earth. The room evolved through computers and phones. Doorway and window journeys needed continuous motion rather than unrelated fades. [E6]

Other recurring corrections were spatial and causal: hands needed to meet a keyboard, fingers needed to cover a phone screen correctly, the character could not disappear during a return to the room, and words belonging to one phrase needed a shared path. The digital cortex had to grow from instructions into files and connections, with multiple origins near the head and readable lyrics. These choices were part of the context, not incidental decoration. [E6]

The retained visual-plan library shows alternatives, not a universal specification. Reusing its method means producing and revising your own plans, not pasting the same bedroom, dates or network into another song.

## 6. Freeze a reviewed result and deliver it

The release snapshot connected the chosen source audio, annotations, visual timing and scene plan to a 1920×1080, 60 fps export. The retained receipt binds the snapshot and native audio by hash. Technical decoding and visual sampling were followed by Hadi's own viewing approval. The video link came from Hadi after his YouTube upload. [E7]

The final handoff also included thumbnails, title/description options, public source branches and a website project PR. Approval of the film did not automatically approve every later publication or account action. The reusable value is the chain of decisions and working patterns that made the output possible.

## What the public branches mean

`main` introduces the example. `song-production` preserves the earlier broad dashboard and its prototype visual machinery. `video-production` preserves the later lyrics-first and scene workspace. These are curated public snapshots created on October 13, not the original private development commit history. Public commit dates therefore cannot reconstruct the October 8–12 work. [E8]

They also do not include the original audio, private browser state or every conversation. Read the evidence register for what can be inspected publicly and what is a bounded historical account.

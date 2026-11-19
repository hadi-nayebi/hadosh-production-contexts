# Naive-Consumer Return — Video-Digestion Cycle-012

Cold-open test of packet only: `hidden_files/study/video-digests/2026-11-15-yt-l2pkb1ebmq/digest.md`
Tester stance: cold production reader, no other specimen or cycle material read.
Production record: not needed — all five tests were answerable from `digest.md` alone.

## Summary lines

Test 1 — PASS: Specimen and technical facts are named in under a minute from §1.
Test 2 — PASS: Three randomly picked techniques are each findable with timestamps, mechanics, and frame/clip evidence.
Test 3 — PASS: §5 gives an honest, timestamp-priced goods/bads list.
Test 4 — PASS: §6 maps liftable lessons to named containers with build-cost notes.
Test 5 — PASS: §2 names the consumers and production surfaces on the packet's face.

## Test 1 — Specimen and technical facts

Test 1 — PASS: Specimen and technical facts are named in under a minute from §1.

- Specimen: "I Made a Full Documentary Using ONLY Claude AI (No Editing!)" by Grow With Kaz, YouTube, ID l2_pKB1EbMQ — https://youtu.be/l2_pKB1EbMQ, uploaded 2026-11-13, entered as owner send #5 on 2026-11-15.
- Form class / category: workflow tutorial — a Claude plugin/skill that assembles documentaries from a script + script-named image files + a voiceover; packet classifies it as a "skill-as-harness assembly tutorial" and catalogues three objects: [TUT] tutorial craft, [ARC] automation architecture, [PRD] embedded documentary craft.
- Duration / format: 638.494 s (ffprobe) / 639 s (platform metadata), 10.63 min, LONG FORM; AV1 1920×1012 @ 25 fps, 367 kbps video + Opus audio 156 kbps; file 42,096,999 B.
- Transcript / delivery: full timestamped transcript, 120 segments, 1,888 words, local ASR (faster-whisper base) after the platform caption route returned HTTP 429; measured delivery 1,888 words / 10.63 min ≈ 178 wpm overall, with the embedded documentary slower/even and the tutorial voice faster/list-driven.
- Evidence stated on the face: 31 full-resolution evidence frames in `ev/`, 64 net frames + 8 scene frames in `frames/`, 3 clips in `clips/`; >5 min length tier, so beat-level evidence.
- Reason for PASS: §1 alone answers title, creator, platform, ID/URL, date, duration, codec/format, bitrate, file size, transcript provenance and word count, and delivery tempo, without hunting through the packet.

## Test 2 — Techniques findable with timestamps, mechanics, frame evidence

Test 2 — PASS: Three randomly picked techniques are each findable with timestamps, mechanics, and frame/clip evidence.

Three entries picked at random from §3's catalogue (P6-T05, P6-T12, P6-T18):

1. P6-T05 — Conversational revision loop (editing by instruction) · 07:38–09:32 — FINDABLE AND USABLE.
   - Mechanics: state the rule first ("tell Claude exactly which parts of the video I want to animate… then paste that part of the script", 07:49–08:05), then the round is modelled in full: prompt "Can you add 2D animation scenes into this video?" + exact script excerpt pasted + style instruction "make sure the animation has a vintage vibe" (07:49–08:18); delta is a vintage-style 2D animated assassination scene inserted at the named script location (playback 08:46–09:14); verdict accepted on camera ("that perfectly matches our video", 09:09–09:14).
   - Evidence: ev/t485.jpg; clip `clips/c475-revision-prompt.mp4` (475–495 s). Attribution (PLATFORM-DEFAULT mechanism / AUTHOR-DESIGN usage pattern) is also stated.

2. P6-T12 — Strikethrough negation list · ~05:08–05:19 — FINDABLE AND USABLE, with the weakest evidence binding of the three.
   - Mechanics: the value claim is drawn as a list of manual tasks being cancelled — "You don't need to manually… Arrange the images (struck through) · Create animations" — under the §P6-T10 headline grammar, while narration lists what the viewer will NOT do: "You don't need to manually arrange the images, create animations, or edit anything on a timeline" (05:08–05:14).
   - Evidence: transcript 05:08–05:19; designed card in the net frame at ~320 s (`frames/net0033.jpg`). Usable as a build instruction, but note the timestamp is approximate (~) and the evidence is a net frame, not a full-resolution `ev/` frame — findable, slightly less directly verifiable than the other two.

3. P6-T18 — Vintage 2D diagram animation (the revision's product) · 08:46–09:14 — FINDABLE AND USABLE.
   - Mechanics: inserted animation is a top-down street diagram — "SARAJEVO · 28 JUNE 1914" — beige paper ground, building blocks, the car's route drawn as a line; deliberately flat vintage register, cut against the photographic exhibits so the mechanism (route, wrong turn, stop) is visible as geometry rather than described; result then shown as a collage under the verdict card "It perfectly matches the video".
   - Evidence: clip `clips/c545-2d-animation.mp4` (545–565 s); ev/t555.jpg (result collage as labelled).

- Reason for PASS: the catalogue is a single numbered list (P6-T01–P6-T19) in three labelled namespaces, every sampled entry carries a timestamp range at its heading, a Mechanics paragraph a builder could act on, and a named frame or clip evidence bind.

## Test 3 — Honest goods / bads pricing

Test 3 — PASS: §5 gives an honest, timestamp-priced goods/bads list.

- One good, quoted — G1: "The claim is verified inside the video (00:00–01:47)." §5 expands it: the absolutist title is treated as a hypothesis the first two sections test, product shown before process, at length, uninterrupted.
- One bad, quoted — B1: "'No Editing!' is contradicted by the video's own best section (07:38–09:32)." §5 expands it: the revision round is editing by instruction (§P6-T05), and a viewer who believes the title misunderstands where their labour went — into specification and judgment.
- Reason for PASS: §5 is not a praise list. It carries 7 goods (G1–G7) and 6 bads (B1–B6), each timestamp-bound and priced against the specimen's own claims — including bads that cut against the packet's consumers' interests, e.g. B2 (the script step, 01:47–01:52, is skipped and untaught), B3 (success-only demonstration, no failure ever shown), B4 (the "free" frame omits Claude/ElevenLabs running costs), B5 (repeated narration, ~40 s duplication), and B6 (load-bearing Claude Code screens illegible at watch size).

## Test 4 — Lesson mapped to a named container, with build-cost note

Test 4 — PASS: §6 maps liftable lessons to named containers with build-cost notes.

- Named lesson lifted: L10 — "Evidence-board composition: map as ground, exhibits pinned at story positions, route drawn, verdicts stamped (FAILED)."
  - Mapped container: diagram (class: technique (product); §6 row L10, "Container / consumer: diagram").
  - Implied change, as printed in §6: "A diagram-container pattern for DLC explainers: spatial argument the viewer reads off the board."
  - Build-cost note, as printed in §6: "moderate — one HTML scene pattern".
  - Source technique it lifts from: §P6-T17 — Evidence-board composition (map + route + exhibits), 06:09–07:38, evidence ev/t95.jpg, ev/t425.jpg, ev/t435.jpg.
- Corroboration that this is not a one-off row: §6's table gives the same container + cost treatment throughout, e.g. L6 (result-first cold open → opening, "cheap — sequencing") and L8 (designed shell around screen work → transition · diagram, "moderate — design pass per demo").
- Reason for PASS: a cold reader can lift L10 directly into a diagram-container build knowing what it costs (one HTML scene pattern, moderate) without re-watching the specimen.

## Test 5 — Named consumer + production surface on the face

Test 5 — PASS: §2 names the consumers and production surfaces on the packet's face.

- Consumer 1 — "HQ / the Kaz-like HTML-video production" (owner-ordered 2026-11-15: a video like this one for our HTML-style videos, designated the style library's first consumption vehicle).
  - Production surface: "assembly-architecture design — how a skill/plugin + a metadata layer assembles a film from script + named assets + voiceover, and how the workflow is then taught on camera."
  - Intended use printed in §2: in that production's Observe, decide what of the Kaz architecture to adopt, adapt, or reject for our own context-production machinery (one HTML scene per piece from a metadata layer, not from filenames).
- Consumer 2 — "DLC assembler / production jobs' Observe."
  - Production surface: "the script-semantic filename convention as a metadata-layer pattern for one-HTML scene builds."
  - Intended use printed in §2: price what a filename can carry (subject, scene affinity) against what our scene metadata carries (timing, motion, layering, provenance), with the comparison table in §6 (lesson L1).
- Reason for PASS: §2 is headed "Consumer + production surface", stands second in the packet before the technique catalogue, and §6's lessons are tagged per consumer — a cold reader does not have to infer who this packet is for or where it will be used.

## Overall

5/5 PASS. The packet works cold: identity and technical facts in §1, consumers and surfaces in §2, a timestamped, evidence-bound technique catalogue in §3, priced goods/bads in §5, and container-mapped, cost-noted lessons in §6. The only softness found was inside a PASS: P6-T12's evidence is an approximate-timestamp net frame rather than a full-resolution evidence frame.

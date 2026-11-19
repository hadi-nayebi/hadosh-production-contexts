# Motion Graphics Deep Study — 2026-11-08

_Owner-ordered (~3 h of research work, three parallel legs + consolidation). Question set: (Q1) can a Muse agent produce motion graphics the owner's way — one HTML file as assembly layer, an asset layer, and a metadata layer INSIDE the HTML that eliminates randomness? (Q2) Has anything similar been done that we can learn from directly? (Q3) What concrete upgrades make our machine as bug-free and effective as the best demonstrated practice?_

_Evidence rule applied throughout: a capability claim counts only when tied to a demonstrated artifact (repo, demo, doc, shipped video) read from a primary source. Legs: A = skill harvest · B = demonstrated systems · C = determinism engineering against our measured bug record._

Full leg notes: [leg-a-skill-harvest.md](leg-a-skill-harvest.md) · [leg-b-demonstrated-systems.md](leg-b-demonstrated-systems.md) · [leg-c-determinism.md](leg-c-determinism.md)

---

## 1. The capability verdict (Q1)

**YES — the owner's architecture is within a Muse agent's demonstrated capabilities, and most of it is not speculative: independent agent-skill systems already ship this exact family of machine, with artifacts that pass their own gates. The one component nobody else has built is the full decision layer inside the HTML — our extension is novel, and it sits on a proven render half.**

Evidence strength per claim:

| Claim | Verdict | Evidence |
|---|---|---|
| An agent can build a film whose source is ONE HTML file, rendered to MP4 | **STRONG — demonstrated repeatedly** | opus-visual-motion-engine (single self-contained HTML per piece; reference reel passing its own QA at 0 WARN) · frame-motion (one HTML page per piece under a `seek(t)` contract, bundled renderer) · motionmaxxing (film = `index.html`, delivered beside the MP4) · HyperFrames (HeyGen's product: plain HTML compositions) |
| The render can be made deterministic — derived from data, never improvised | **STRONG — demonstrated, field-wide convergence** | Every serious source states the same contract independently: frame as a pure function of time (`useCurrentFrame()` / paused GSAP timeline / `window.seek(t)`), with identical bans (no unseeded `Math.random`, no wall clock, no CSS animations/timers, no infinite repeats). Two systems *verify* determinism mechanically (frame-motion's seek-a-b-a pixel-identical probe; opus's out-of-order revisit check). Production capture architecture (Leg B): Remotion, HyperFrames and Replit's renderer converge on seek + `beginFrame` stepping |
| Metadata can live INSIDE the HTML and drive the render | **STRONG for timing/score/audio data; UNPROVEN for the full decision layer** | opus embeds its sound cue sheet as a JSON script block inside the composition and injects measured audio data as `window.AUDIO` into the same file; its `SCENES`/`HANDOFFS` tables are in-file. HyperFrames declares timing as `data-*` attributes in the file. **No source read puts objective + transcript + per-asset reasoning + checklists inside the file** — plans live in sibling files everywhere (PLAN.md, BRIEF.md, SHOTBOOK, storyboards). Our one-HTML law goes one step past the field; nothing in the field contradicts it, and the render half it extends is proven |
| Word-timing can be the single source of time truth, with animation anchored to spoken words | **STRONG — one deep demonstrated implementation** | video-talkcraft: CPU word/character timestamps → SHOTBOOK layer matrix → every beat looked up from `timing.json` (hand-typed seconds forbidden, lint enforces \|Δ\| ≤ 0.1 s); alignment accuracy measured against a GPU forced aligner (median deviation 20–40 ms on a 110 s mixed-language sample). Secondary: motionmaxxing's `sync.mjs` (words land 0–2 frames before they are heard) |
| An agent can run the whole loop (plan → build → verify → deliver) without the human becoming the QA department | **STRONG — demonstrated, with a structural caveat** | Scripted exit-non-zero batteries + clean-context independent reviewers are the ecosystem's centre of gravity (opus, frame-motion, motionmaxxing, shotcraft, talkcraft). Caveat the best authors state themselves: the agent must never certify the film as *good* — it reports measurements and what was NOT verified; taste verdicts stay with the owner. Our owner-10% doctrine already matches this |

**What this means for us:** we are not attempting something beyond the demonstrated frontier — we are behind it on capture and pipeline engineering (Leg C), level on detection rigour, and ahead of it on exactly one axis (the decision layer inside the file). The owner's frustration target — days of gated work producing no visible delta — is not a capability limit; Legs B and C show it is an architecture gap (realtime verification of a construct that should be frame-stepped) plus a reporting gap (micro-metrics presented as progress), both with published cures.

---

## 2. The similar-work map (Q2)

### Agent skills read in full (Leg A — 11 in full, 1 in large part)

| System | What it is | URL |
|---|---|---|
| opus-visual-motion-engine | Single-HTML motion engine; embedded score + audio data; scripted QA battery exiting 1 on fail | https://github.com/Lob0Garou/opus-visual-motion-engine |
| frame-motion | `seek(t)` contract; four-key-stills gate; determinism probe; 7-axis critique loop to ≥8 | https://github.com/venthewise/frame-motion |
| motionmaxxing | Craft rules *measured* from 53 professional films; gates G0–G5 with scripted numbers quoted in NOTE.md | https://github.com/Tejashmakwana/motionmaxxing |
| charlie947/motion-graphics-skills | `brand.md`/`MOTION.md` read-first context layer; closed facts list | https://github.com/charlie947/motion-graphics-skills |
| OpenMontage | Rule Zero pipelines; **code-enforced** human-approval checkpoints; locked render runtime; append-only decision log | OpenMontage AGENT_GUIDE (Leg A §5) |
| remotion-best-practices (official) | Knowledge skill only — the most-installed and the thinnest verification in the harvest | remotion-dev/skills (Leg A §6) |
| HyperFrames entry skill + motion-graphics workflow | BRIEF.md as sole routing artifact; `shot-plan.json` as schema'd IR between planner and builder subagents | https://github.com/heygen-com/hyperframes |
| video-shotcraft | 124 recipe cards with runnable demos; demo-source-as-truth; clean-context final review with frame-numbered evidence | https://github.com/Vincentwei1021/video-shotcraft |
| video-talkcraft | Word timestamps → SHOTBOOK; six machine gates + fresh-context reviewer; the deepest word-timing system found | https://github.com/Vincentwei1021/video-talkcraft |
| iart-ai remotion-video | Stills → inspect → encode; ffprobe assertion on the file — "renders lie; the file doesn't" | https://github.com/iart-ai/motion-design-skills |

### Demonstrated systems studied from primary sources (Leg B)

Remotion (remotion.dev docs) · HeyGen HyperFrames engineering post · Replit's renderer / WebVideoCreator lineage · puppeteer-capture + Chromium headless source (`--virtual-time-budget`, `--deterministic-mode`) · Playwright Clock API (verdict: a testing clock, NOT a capture clock) · GSAP seek docs · Manim Community (SceneFileWriter; hash-named partial renders) · Revideo · Editly (JSON5 spec as the whole edit) · Lottie/Bodymovin · FFmpeg practice · Motion Canvas / FFCreator / htmlrec (partial evidence — see §6).

### The five transferable techniques (Leg A findings, condensed)

1. **Determinism by construction** — pure frame function + the identical ban list everywhere + a determinism probe in the battery; never the instruction alone.
2. **Decisions locked in a file before building** — a schema'd plan artifact with a gate that blocks the build; OpenMontage enforces the checkpoint in code, not in prose.
3. **Recipe libraries with demo-source-as-truth** — copy the runnable demo, don't paraphrase the recipe; fidelity checked by script (talkcraft's ≥ 0.55 similarity lint); motionmaxxing reaches the same place via measured precedent (716 rule rows from 53 pro films).
4. **Scripted, numeric, exit-non-zero frame batteries** — small single-question scripts, contact sheets as the review surface, delivery notes quoting numbers and stating what was not verified; a clean-context independent reviewer (never a fork of the maker — "a self-proving loop") with frame-numbered evidence.
5. **Real material, closed fact sets, word timestamps as time truth** — never redraw what exists; the showable claims are a closed list fixed in advance; narration beats are looked up from timestamps, never hand-typed.

---

## 3. Determinism findings per bug class (Leg C, condensed)

Cross-cutting pattern: **in every class our detection is at field level but lives in verification (censuses, gates, poll watches); the field's pattern is construction-time guarantees (pure frame function, premultiply-only pipeline, hash-addressed URLs) with cheap invariant checks after.** The upgrades in §5 are, one by one, moves from detection to construction.

**(a) Realtime capture + Chrome trapping (SIGTRAP rc133).** Ours: verification samples a *playing* page (measured 25/29-beats sampling-miss class; A5 audio-clock environmental failures). Field cure: deterministic frame stepping — Chromium `--deterministic-mode` + CDP `HeadlessExperimental.beginFrame` driving a pure frame function (Remotion/HyperFrames seek-never-play pattern), which deletes both failure classes by construction; SIGTRAP gets one pinned launch recipe (private port, `--no-sandbox --disable-dev-shm-usage` / shm sizing, environment census, automatic fallback ladder) instead of per-job rediscovery.

**(b) Magenta keying / premultiplied alpha.** Ours: the key itself (three-strip system: ground-shadow / DARK-PLUM / PALE-GLOW) is *ahead of the field* — no library keys generator-painted magenta grounds better; our losses are in the resize stage (artistic per-script premultiply; PIL `RGBa` does not premultiply on this build) and in census placement. Field cure: one premultiplied-resize library function (libvips float pipeline) as the ONLY resize path, red-bar synthetic control as its unit test, census on the placed file at placed size. Sub-class found by Leg C that neither leg of our bar could see until a new instrument was invented: the saturated key-rim (7,593 core-rim px on digit-3).

**(c) Word-timing drift.** Ours: faster-whisper native DTW word times, ends inferred, table unversioned against the audio. Field cure: forced alignment of the known transcript (MFA: 10 ms grid, 72.8% of boundaries within 25 ms on TIMIT vs WhisperX 52.7%; WhisperX fallback), stored as `[start, end, aligned|interpolated, confidence]`, **hash-locked to the narration audio** so a re-take cannot silently inherit the old table.

**(d) Served-vs-tested byte drift.** Ours: named asset URLs + human poll watches; measured worst case — a served shard asset that never flipped in 30 min / 15 polls, i.e. a mixed-generation chimera page. Field cure: content-hash the asset URLs at push (`name.<sha8>.webp`) so a stale edge can only serve a complete old version, and make one `MANIFEST.sha256` check over served bytes the sole "LIVE" verdict.

**(e) Provenance / cleanliness.** Ours: the two-leg bar's *rule* matches the field's intent and our cleanliness censuses (halo / stray / rim) are **more rigorous than common field practice — no external standard defines "object only, no baked shadow"**; our mechanism is weaker in three ways: provenance is prose-bound (a file copied out of its folder leaves its provenance behind), two coexisting bars (strict vs characterisation) make "passes" ambiguous, and there is no completeness leg (a clean-but-eaten asset passed). Field cure: adopt C2PA's *data model* without its PKI — one `provenance.json` per asset (verbatim description, raw + keyed sha256, ingredient hashes, transform, census results) enforced by the gate; name ONE bar; add Leg 0 completeness.

---

## 4. The best-practice capture architecture (Leg B findings, condensed)

**Seek, don't play — and pull each frame synchronously.** Three independent production systems (Remotion, HyperFrames, Replit/WebVideoCreator) converge on:

1. **Author against a seek contract** — every visual a pure function of an integer frame; time computed as `frame / fps` and quantised to the frame grid, never accumulated, never read from a clock.
2. **Step the browser, never record it** — `chrome-headless-shell` + `--deterministic-mode --enable-begin-frame-control` + `HeadlessExperimental.beginFrame` per frame (atomic layout → paint → composite → screenshot). Screencast is documented only as a failure mode.
3. **Gate every frame on readiness** — delayRender-style blocking (fonts local and loaded, data fetched once up front), compositor warmup during load, and `<video>` never decoding in-browser (frames extracted by FFmpeg/compositor and substituted as images).
4. **Assemble in FFmpeg against the same arithmetic timeline** — delays computed from the composition's timing data, two-pass loudnorm per clip, outputs probed (duration, frame count, loudness) rather than trusted.

Leg B's consolidated cure list for capture flakiness (15 items: flicker, blank frames, screenshot races, font variance, beginFrame load hangs, stale first frames, decoder stalls, seek side-effects, sub-frame mismatches, worker-thread bypass, memory pressure, screencast loss, Lottie specifics, FFmpeg silent wrongness) is in [leg-b-demonstrated-systems.md](leg-b-demonstrated-systems.md) §"Published cure list".

---

## 5. The gap list (Q3) — where our machine diverges from best demonstrated practice

1. **Capture architecture (largest gap).** We verify by sampling a playing page; the field frame-steps a pure function atomically. Our `rnPose(frame/fps)` is already the right shape — the capture never steps it deterministically, so our verification evidence itself is unreliable (sampling misses, audio-clock races).
2. **No determinism probe.** The field's batteries test determinism itself (seek a-b-a pixel-identical). We assert determinism from code shape; nothing in our battery would catch a construct that quietly stopped being a pure function.
3. **Timing table provenance.** Recogniser-native word times, ends inferred, no binding to the audio file. The field (forced alignment + hash-lock) makes span drift after a re-take impossible by construction; ours makes it silent.
4. **Resize path is artisanal.** Premultiply is remembered per script; the field pattern is one library function, unit-tested, as the only path. Our recurring magenta-residue waves are this gap, repeated.
5. **Serving identity.** Named URLs + poll watches vs content-hashed URLs + one manifest verdict. Our chimera-page incident (a stale asset never flipping across 15 polls) is impossible under the field's pattern.
6. **Provenance binding.** Our two-leg bar is prose + sidecar JSONs in-folder; the field's data model (C2PA-shaped `provenance.json`, hash-bound, ingredient lists) travels with the asset and is gate-enforced. Plus our two coexisting bars (strict vs characterisation) — the field names one gate and treats the rest as advisory.
7. **No completeness leg.** Cleanliness censuses passed a file that had lost its subject. The field's equivalent (presence measured against the asset's own description) is a named, mechanical check; ours was a hand catch.
8. **Metadata is prose-checked, not schema-checked.** Our one-HTML decision layer is ahead of the field in *existence* and behind it in *enforcement*: OpenMontage's checkpoints are code-enforced; shot-plan/SHOTBOOK artifacts are schema'd IRs. Our tabs and checklists are read by agents, not validated by a build step — a malformed or silently incomplete decision table does not stop our render.
9. **No motion recipe library.** We re-derive every motion (grow, zoom, burst) per piece in the decision table — the "mechanics trap" the owner named. Shotcraft/talkcraft demonstrate the alternative: named, parameterised, *runnable* recipes copied as source (demo-as-truth, similarity-linted), selected by machine-filtered candidates with recorded rejection reasons. Our word-ladder decisions should compile into such a library instead of being re-invented per unit.
10. **Review shape.** We have reviewer panels; the field's sharpest form is a clean-context reviewer (explicitly never a fork of the maker) given an anchored evidence pack and required to cite frame numbers, exactly one round after machine gates pass. Our panels grade from context the maker also holds.
11. **Browser robustness is folklore.** Launch flags, ports and fallbacks are rediscovered per job in our records; the field pins one recipe. (Our private-port rule is one such fragment, already learned the hard way.)

**Where we are AHEAD of the field (recorded so the upgrades don't bulldoze them):** the full decision layer inside the one HTML file (nobody read does this); the key itself (three-strip magenta system); cleanliness censuses stricter than any external standard; description-first generation as a contract; elements-live-only-for-their-moment and the word-ladder decision table as the basis of the render.

---

## 6. Draft skills produced by this study (Leg D)

Both are DRAFTS — pending Archer review; adoption is the main agent's call with the owner. Neither edits the governing skills.

1. **NEW — HTML Assembly Layer (the one-file construct):** [~/workspace/custom-skills/html_assembly_layer_draft/SKILL.md](sandbox://workspace/custom-skills/html_assembly_layer_draft/SKILL.md)
   The construct (metadata blocks inside the HTML + schema gate) · the frame contract (pure `renderFrame(n)`, the ban list) · the timing table (forced alignment, audio hash-lock) · the asset registry contract (`provenance.json`, one named bar, Leg 0, premultiply-only resize) · the capture recipe (pinned flags, beginFrame stepping, readiness gate, fallback ladder, determinism probe) · serving (content-hashed URLs, manifest verdict) · the exit-non-zero battery.
2. **UPGRADE — Motion Graphics Preproduction Gate v2 draft:** [~/workspace/custom-skills/motion_graphics_preproduction_gate_draft_v2/SKILL.md](sandbox://workspace/custom-skills/motion_graphics_preproduction_gate_draft_v2/SKILL.md)
   v1 kept whole; added: frame-contract confirmation + determinism probe before any specimen is judged · hardest-unit-first specimen order (the sample-shot rule) · the **visible-delta rule** — a version is presented as progress only when its difference is statable in one plain sentence a first-time viewer would say unprompted, shown as before/after frames at phone size; micro-metrics are internal evidence, never the headline.

## 7. Honest limits of this study

- **No leg came up empty.** But Leg A has empty *areas*, stated plainly: no skill anywhere puts the full decision layer inside the single HTML file (opus comes closest — score + audio data embedded, plan still a sibling file); no Cursor-native ruleset for motion graphics exists as a primary artifact; no standalone ffmpeg skill of depth was found; no Manim skill was read in full; ~20 credible candidates (demovie, motionsmith, qiaomu-cut, mrrajrumel/motion-skill…) were located but UNREAD and are assessed nowhere.
- Leg B partial evidence: FFCreator and Motion Canvas internals rest on docs/research-mirror level material; no maintained project literally named "html5webm" was found; the Manim cross-machine reproducibility critique rests partly on an interested source; the FFmpeg section rests on convergent practitioner references.
- Leg C: on two points the field has **no better answer than ours** — the magenta key itself, and cleanliness checking. Anyone selling us a library or standard for those two is selling vapor.
- Registry inflation is real: the same skills are republished across ≥9 registries with drifting counts; install/star numbers measure distribution, not depth (the most-installed skill in the harvest is also the thinnest).
- One cosmetic defect in Leg A's notes (a leaked Chinese token in the talkcraft Gate 1 line) is flagged in that file's report-back and left as-is rather than silently rewritten.

_Conversion record (per study/AGENTS.md): this study converts into two draft skills (§6) and the gap list (§5); adoption decisions belong to the main agent with the owner._

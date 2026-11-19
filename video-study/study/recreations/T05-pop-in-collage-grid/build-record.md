# T05 — Pop-in Collage Grid · BUILD RECORD

Technique: T05 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 005 Wave 3 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T05-pop-in-collage-grid/`
Consumer: transitions · diagram containers — a loose collage grid that assembles panel-by-panel on the beat can open a diagram container or bridge two containers by accumulating evidence panels instead of cutting to a finished layout.

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T05: "panels pop into a loose grid one at a time on the beat; the grid is discovered, never shown empty." Feeds: transition · diagram — P1 @ 0:24–0:35 — ev/t27.jpg.
- digest.md T05: "Over the dark field, rectangular panels (waveform, sequencer, 3D scene stills, a golden spiral card) pop into a loose grid one at a time, each arrival a small reveal, while the lyric line keeps typing below. The grid is never shown empty first — it is discovered panel by panel." Why it works: each pop is a micro-reveal on the beat, so a static layout gains rhythm; density rewards rewatching.
- Evidence viewed firsthand this run:
  - `ev/t27.jpg` (0:27): five panels already discovered in a loose 3-over-2 grid on the right ~58% of the dark frame — top row: waveform panel ("agent-1 look_what_i_can_do.wav", orange-played / grey-unplayed bars + green playhead), sequencer panel ("agent-2 beat.mid", dim green cells), puppet scene still ("agent-1.1 asking_for_a_frien…"); bottom row: dark room still ("agent-1.2 omg_in_the_walls.mp4"), planet/moon still ("agent-2.1 the_promptress.mp4"). Each panel carries a small orange monospace filename label + ✓ at its top edge. Left/bottom: lyric lines accumulate with a green "›" prompt, typed with a green block cursor ("I made a song, I made a beat / I made a movie in my seat / I made a ghost, I made a witch / A ▊"). Top edge: faint terminal-style header ("adita@studio ~/look-what-i-can-do" · "claude · verse 1 · 0:27").
  - `ev/t23.jpg` (0:23, context): only the waveform + sequencer panels exist yet, slightly overlapping — the grid at its first discovery step; one lyric line typed so far.
  - `ev/t31.jpg` (0:31, context — T06 territory): the grid has grown denser (3 rows, ~8 panels incl. new scene stills), lyric list at 6+ lines. Confirms the T05 grid is the seed of the later tile wall; T05's own window closes at 0:35 before the counter badge arrives.
- Source: `source.mp4` 1916×1078, 30 fps, VP9, 198.41 s (ffprobe, this run). Segment cut 0:23.5–0:35.5 (§3).
- Sub-beats (within 0:24–0:35): (a) dark field + header + typing lyric line already running; (b) panels pop in ONE at a time, roughly on the beat (~1–1.2 s apart at the piece's tempo), each arrival a small scale/opacity reveal, not a slide or wipe; (c) between pops the discovered panels HOLD static (waveform playhead / sequencer are the only internal motion, inherited from T04); (d) lyric lines keep typing and ACCUMULATE below-left throughout; (e) no empty grid outline, placeholder, or skeleton is ever shown — undiscovered positions are just dark field.
- Variables (§1.3): panel count · panel labels · panel content types (waveform / sequencer / scene / room / planet / spiral) · per-panel pop timing · pop duration + pop start scale · grid position/size/columns/rows/gap · palette (bg, panel bg/border, accent orange, accent green, spiral gold, text) · lyric lines + per-line start + per-char typing speed · lyric font size · brand header strings · loop duration · RNG seed for code-drawn waveform/sequencer detail.
- Phase guards: jev-observe-exit SKIPPED-WITH-REASON (BUILT-NOT-FIRED per guards/guards.md) · jev-plan-exit SKIPPED-WITH-REASON (BUILT-NOT-FIRED) · jev-prewave SKIPPED-WITH-REASON (UNBUILT) · codex-observe SKIPPED-WITH-REASON (BUILT-NOT-FIRED) · codex-plan-review SKIPPED-WITH-REASON (BUILT-NOT-FIRED). The five-lens Codex scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `12000` | loop length = segment length |
| `bg` / `panelBg` / `panelBorder` | string | `#050607` / `#101216` / `#232a26` | dark field + panel chrome |
| `textColor` / `mutedColor` | string | `#e8e6df` / `#8b928c` | lyric + secondary text |
| `accentOrange` / `accentGreen` / `spiralColor` | string | `#e8a04c` / `#79c96f` / `#d9b45c` | label/waveform · cursor/playhead/sequencer · spiral card |
| `brandLeft` / `brandRight` | string | `maker@studio ~/look-what-i-can-do` / `verse 1` | faint header dressing (genericized — no specimen handle) |
| `popScaleFrom` / `popMs` | number | `0.82` / `180` | pop reveal: start scale + duration |
| `gridLeftPct/TopPct/WidthPct/HeightPct` | number | `40.5 / 22 / 56.5 / 40` | loose-grid placement (right-of-frame, above lyric zone) |
| `gridCols / gridRows / gridGapPx` | number | `3 / 2 / 5` | grid geometry |
| `panels[]` | {label,type,popAtMs}[] | 6 panels: waveform 200 · sequencer 1300 · scene 2400 · room 3500 · planet 4600 · spiral 5700 | contents + pop schedule |
| `lyricLines[]` | {text,startMs}[] | 4 specimen lines @ 300/2600/4900/7200 | accumulating typed lyric lines |
| `lyricCharMs` / `lyricFontPxAt960` | number | `42` / `17` | typing speed + lyric size |
| `seed` | number | `7` | deterministic detail in code-drawn waveform/sequencer |

URL overrides: `?labels=A|B|…&lyrics=X|Y&pop<i>=ms&accentOrange=%23…&bg=%23…&durationMs=n` — parsed at load; CONFIG remains the single source.

**Computed fit (declared, 360px phone-first):** stage 16:9 → 360×202.5px. Grid x 40.5%..97% (right edge 349.2 ≤ 360), y 22%..62%; panels 64.5×38.0px with 5px gaps. Lyric block (4 lines, ≥9px font, 1.65 line-height, bottom 6%) tops out at ~65% — below the grid's 62% bottom, so lyric and grid zones never overlap; label font floors at 7px, lyric font at 9px. All sizes derive from stage size in `layout()`; no fixed panel pixels.

### Construction choice

**DOM loose grid + code-drawn panel contents (chosen):** absolutely-positioned panel divs inside the stage, each hidden (`visibility:hidden; opacity:0; scale(popScaleFrom)`) until its `popAtMs`, then a 180 ms overshoot-ease pop to full. Contents are generated per panel type: waveform + sequencer on `<canvas>` with a seeded RNG; scene / room / planet / golden-spiral as inline SVG shapes. A single rAF clock renders pop state + typed lyric characters from elapsed time; `seek(ms)` makes the clock slaveable (comparison sync). Lyric lines type char-by-char and accumulate; only the actively-typing line shows the green block cursor.

Rejected alternatives:
- CSS keyframe timeline per panel — REJECTED: timings would live in CSS, not CONFIG; seek/sync and the swap test need one JS clock reading config.
- Canvas whole-scene rendering — REJECTED: panel labels + lyric text are crisper as DOM text, and per-panel DOM nodes make the pop transform trivial and inspectable.
- Generated raster images for the scene stills — REJECTED: unnecessary weight; abstract SVG shapes carry "3D-scene still" at collage scale without specimen resemblance (also avoids traced-still purity risk).
- Skeleton/placeholder grid that fills in — REJECTED explicitly: the mechanic is discovery; an empty grid shown first is the named anti-form.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Cut segment 0:23.5–0:35.5, re-encode h264/yuv420p/faststart, ffprobe-verify.
- [x] Build recreation.html: CONFIG at top, DOM grid, code-drawn contents, pop schedule, typing lyrics, seekable clock, postMessage controls.
- [x] Build comparison.html: matched 16:9 sides, exact labels, one control set, 200 ms currentTime sync, vertical stacking ≤640px.
- [x] Self-verify legs 1–3 (below) before any Codex run.

### Verify checklist
- Swap test: labels + lyric words + one timing (`pop2`) + one palette value (`accentOrange`) via URL params, node DOM-stub harness — PASS required.
- Purity grep: `segment.mp4|source.mp4|t27.jpg|<video|<img|http(s)://` in recreation.html — 0 hits required.
- Syntax: `node --check` on both inline scripts.
- Comparison check: labels verbatim, both durations 12 s, sync method present, phone stacking rule present.
- Five-lens Codex wave: motion · timing · purity · reusability · readability, separate runs, verbatim returns.

### Failure points priced
- **Phone-fit / zone collision:** lyric block rising into the grid's bottom row — caught in my own fit math during Execute (grid bottom was 72% vs lyric top ~65% at 360px) and cured pre-wave by moving the grid to y 22%..62% (panel height 43.1→38.0px). Residual risk stands as a readability-lens question.
- **Pop vs. specimen reveal:** the digest says only "small reveal"; scale+opacity pop is an interpretation — motion lens prices it.
- **Panel-content abstraction:** SVG scene stills are abstract stand-ins, not likenesses — deliberate (purity) but motion/readability lenses may price recognizability of panel types.
- **Beat alignment:** pop spacing 1.1 s is derived from frame evidence (2 panels @0:23 → 5 @0:27 → denser @0:31), not from an audio beat grid — timing lens prices it.
- **Plateau:** n/a — first attempt, no prior average.

## §3 Execute notes

- Segment: `ffmpeg -ss 23.5 -t 12` from the archived source, scaled 960×540, libx264/yuv420p/+faststart, audio stripped. ffprobe: h264, 960×540, 12.000 s, 1,028,666 bytes — browser-playable, moov at front.
- recreation.html (11,845 bytes pre-fix; geometry fix applied in-place): one self-contained file, no external assets, no `<video>`/`<img>`, no specimen media. Header dressing genericized ("maker@studio") so no specimen handle is reproduced outside the labeled comparison.
- comparison.html: video + iframe at matched 16:9; controls Play/Pause/Restart + Swap; sync = shared commands + 200 ms interval posting `seek` with `vid.currentTime*1000` (both sides 12 s, so the recreation clock is slaved to the original's).
- Incident (self-caught, cured pre-wave): first-pass grid geometry (top 27%, height 45%) put the grid bottom at 72% while the 4-line lyric block tops at ~65% on a 360px stage — a real zone collision. Cured by grid top 22% / height 40% (bottom 62%); fit re-verified by harness (panel 64.5×38.0px, right edge 349.2/360). Recorded here, not on any delivery face.

## §5 Verify — legs 1–3 (own checks, before Codex)

1. **Swap test — PASS** (node DOM-stub harness executing the recreation's real script):
   - Swap URL: `?labels=alpha.wav|beta.mid|gamma_scene|delta_room|epsilon_moon|zeta_spiral&lyrics=We built a tool, we built a stage|We built a map in a single page&pop2=900&accentOrange=%23ff5fa2`
   - Labels: all 6 replaced exactly. Lyrics: lines 1–2 replaced exactly. Palette: `accentOrange #e8a04c → #ff5fa2`. Timing: `popAtMs[2] 2400 → 900`, and the simulated pop state at t=1000ms flips from `[on,off,off,…]` (defaults) to `[on,off,ON,…]` (swap) — the timing change measurably reorders discovery, proving the schedule is config-driven, not baked.
   - Default sequencing sanity: t=100 → 0 panels; t=1000 → 1; t=2000 → 2; t=6500 → all 6.
   - Fit at 360px stage: grid right edge 349.2 ≤ 360; panel 64.5×38.0px; grid bottom 62% vs lyric top ~65% — no zone overlap.
2. **Purity grep — PASS, 0 hits:** patterns `segment.mp4`, `source.mp4`, `t27.jpg`, `<video`, `<img`, `http://`, `https://` in recreation.html (checked pre- and post-fix). Asset inventory: everything drawn by canvas (waveform, sequencer) or inline SVG (scene, room, planet, spiral) or DOM text; zero external loads.
3. **Comparison check — PASS:** labels verbatim per charge ("ORIGINAL — “Look What I Can Do” (P1) @ 0:24–0:35" / "RECREATION — T05 Pop-in collage grid, parameterized"); both sides 12 s; one control set; seek-sync at 200 ms; `@media (max-width:640px)` stacks panels vertically, controls above. `node --check` clean on both inline scripts.
- Pixel/render proof: NOT exercisable from this seat (no browser binary; standing fleet limitation) — logic-level proof stands; comparison.html is the render surface.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT per guards/guards.md; the five-lens wave is the armed gate).
- Leg 4 (five-lens Codex wave) + leg 5 (consolidation): filed in scores.md with verbatim returns under `codex/`.
- **Post-wave BODY-WRITE addendum (2026-11-14):** motion (76) + reusability (62) converged on a real defect my own checks missed: the inline `style.transform=scale(.82)` overrides `.panel.on`'s `scale(1)`, so the scale half of the pop never animates (opacity does). My swap/purity/syntax legs had no computed-transform check — that instrument gap is the lesson: a pop/scale technique needs a computed-style assertion in its own Verify checklist. Scores: motion 76 · timing 74 · purity 97 · reusability 62 · readability 78 → avg 77.4, min 62 → **FAIL**, tier IN PROGRESS; full priced cures in scores.md.

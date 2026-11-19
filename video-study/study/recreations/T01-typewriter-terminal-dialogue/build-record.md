# T01 — Typewriter Terminal Dialogue · BUILD RECORD (attempt 1)

Job: recreation, Cycle 003 Wave 1 (2026-11-14). Governing: `study-jobs/recreation/INSTRUCTION.md` §1–§6.
Artifact dir: `hidden_files/study/recreations/T01-typewriter-terminal-dialogue/`
Wave record: `study-jobs/recreation/runs/2026-11-14-cycle-003-wave-1/RUN.md` (opened before building).

## §1 — Observe

**Catalogue mechanics (TECHNIQUES.md T01 + digest.md P1 §T01):** "dialogue types char-by-char with block cursor inside a fake terminal; lines accumulate and scroll." Digest: banner card ('Welcome to the studio', cwd ~/look-what-i-can-do, model name) types itself in, then a dialogue types character-by-character with a block cursor. User lines prefixed with a chevron; AI replies prefixed with a dot in orange. Lines accumulate like a chat log; when the script outgrows the screen the whole log scrolls up and the banner scrolls away.

**Evidence viewed firsthand (this run):**
- `ev/t3.jpg` (t=0:03): top status line — left `adita@studio ~/look-what-i-can-do`, right `claude · intro · 0:03`. Centered banner card, orange rounded border: `✳ Welcome to the studio` (white bold), subline `cwd: ~/look-what-i-can-do · model: claude-opus-5.5` (grey). Dialogue lower in frame: green chevron + light text `Hey Claude?`; orange dot + orange text `Yes?`; third line mid-type `Can you help me writ` + solid green block cursor.
- `ev/t8.jpg` (t=0:08): banner has SCROLLED AWAY. Accumulated lines: `Hey Claude?` / `Yes?` / `Can you help me write a song?` / `Of course.` / `Can you make it catchy?` / `Absolutely.` / `Can you make me` + block cursor. Confirms scroll mechanic + line order + speaker styling.

**Sub-beats:** (1) status line present from start; (2) banner types in ≈0–2 s; (3) dialogue lines type one at a time, char-by-char, short pause between lines; (4) once content exceeds the viewport the log scrolls up (banner exits top); (5) typing continues to the window end (0:14).

**Dialogue text:** lines 1–7 are frame-evidenced (t3/t8). The 4th exchange is priced from the digest's own summary — "the escalating requests (song -> catchy -> famous) compress the whole premise into four exchanges" — so line 8 is user `Can you make it famous?` and line 9 is a short AI reply `Watch me.` (reply wording NOT frame-evidenced; flagged here as the one inferred value).

**Variables (§1.3):** dialogue lines (speaker + text per line) · banner title + subline · char typing speed (banner vs dialogue) · inter-line pause · end hold · palette (bg, user prompt/text, AI prompt/text, banner border/title/sub, cursor, status text, window-dot colors) · terminal chrome (window title, status-left, status-right, dots on/off) · font family/size · visible-line capacity (scroll threshold) · loop on/off.

**Consumer:** openings — the cold-open-in-a-familiar-UI pattern for production shorts (DLC/multilingual openings surface).

**Guards SKIPPED-WITH-REASON (per wave RUN.md):** jev-observe-exit · jev-plan-exit · jev-prewave · codex-observe · codex-plan-review — all BUILT-NOT-FIRED / UNBUILT in this seat; no browser/Codex phase-guard runner stands. The five-lens scoring wave (§5.4) IS the armed deliverable gate and fires for this item. Render-proof limitation: no Chrome binary in this seat — swap test runs at LOGIC level (node harness over the recreation's pure timeline functions), per the T15 precedent in guards.md.

## §2 — Plan

### CONFIG table (every variable = named key; specimen value = default)

| Key | Default | Role |
|---|---|---|
| `lines[]` | 8 lines: user `Hey Claude?` · ai `Yes?` · user `Can you help me write a song?` · ai `Of course.` · user `Can you make it catchy?` · ai `Absolutely.` · user `Can you make it famous?` · ai `Watch me.` | dialogue content + speaker per line |
| `bannerTitle` | `Welcome to the studio` | banner card line 1 (with ✳ glyph) |
| `bannerSub` | `cwd: ~/look-what-i-can-do · model: claude-opus-5.5` | banner card line 2 |
| `bannerCharMs` | 28 | banner typing speed |
| `charMs` | 55 | dialogue typing speed per char |
| `linePauseMs` | 380 | pause between completed line and next line start |
| `startDelayMs` | 250 | beat before banner starts |
| `endHoldMs` | 1800 | hold on finished log before stop/loop |
| `palette.bg` | `#070807` | frame background |
| `palette.userPrompt` | `#4ade80` | chevron color |
| `palette.userText` | `#d9d9d6` | user line text |
| `palette.aiPrompt` | `#e8930c` | dot color |
| `palette.aiText` | `#f0a832` | AI line text |
| `palette.bannerBorder` | `#a86f14` | banner card border |
| `palette.bannerTitle` | `#f2f2ee` | banner title text |
| `palette.bannerSub` | `#8f9296` | banner subline text |
| `palette.cursor` | `#57d977` | block cursor |
| `palette.statusText` | `#6d7276` | top status line |
| `palette.chromeBg` | `#101210` | title-bar background |
| `palette.dotRed/dotYellow/dotGreen` | `#e5534b` / `#d9a514` / `#57d977` | window dots |
| `chrome.title` | `adita@studio: ~/look-what-i-can-do` | window title-bar text |
| `chrome.statusLeft` | `adita@studio  ~/look-what-i-can-do` | status line left |
| `chrome.statusRight` | `claude · intro` | status line right (clock appended live) |
| `fontFamily` | `ui-monospace, 'SF Mono', Menlo, Consolas, monospace` | terminal type |
| `fontSizePx` | 30 | dialogue size at 960-wide stage (scales via container) |
| `visibleLines` | 7 | log capacity; beyond it the log scrolls (banner scrolls away) |
| `loop` | false | restart at end when true |

Line count: 7 frame-evidenced lines (t3/t8) + the digest-priced 4th exchange (user `Can you make it famous?` + ai `Watch me.`) = **8 lines** (4 user + 4 AI).

### Construction choice
**DOM construction with a deterministic timeline (chosen):** pure functions `buildTimeline(cfg)` → per-line start/end ms and `stateAt(cfg, timeline, t)` → banner substring, per-line substrings, cursor line, scroll shift. DOM rendering is a pure function of elapsed ms, so play/pause/restart/seek (comparison sync) and the node logic swap test all drive the same code path. Lines accumulate in a scroll viewport; when accumulated height exceeds `visibleLines`, the content translates up so the active line stays in view — the banner, as first content, scrolls away exactly as in t8.jpg.
- Rejected: CSS keyframes per line — timing becomes stylesheet literals, not config; cannot seek/sync.
- Rejected: canvas 2D text rendering — text layout/wrap re-implementation for no gain; DOM text is crisper at phone size.
- Rejected: typing via setInterval char-appends (stateful) — pause/seek/restart drift; deterministic `stateAt(t)` is strictly stronger and node-testable.
- Terminal chrome: title bar with three dots + title (colors/text from CONFIG) ABOVE the status line, per the item charge ("title bar/dots from config"); banner card is in-log content (it scrolls), status line is fixed chrome (it persists in both frames).

### Execute checklist (§3)
- [ ] Cut `segment.mp4`: `ffmpeg -ss 0 -i source.mp4 -t 14.5 -vf scale=960:-2 -c:v libx264 -an` + ffprobe verify.
- [ ] Build `recreation.html`: self-contained, CONFIG at top, no external assets/references, URL overrides (`?lines=…&charMs=…&bg=…` etc.).
- [ ] Build `comparison.html`: ORIGINAL + RECREATION labeled exactly `ORIGINAL — P1 @ 0:00–0:14` / `RECREATION — T01, parameterized`; one shared play/pause/restart driving both (recreation seek-synced to video currentTime); vertical stacking on phone width.
- [ ] No captions/subtitles anywhere (§6.5) — typed dialogue IS the technique subject.

### Verify checklist (§5 legs 1–3 + wave)
- [ ] Swap test (node, logic level): different dialogue lines + changed `charMs` + changed palette (cursor/bg) → technique still computes correctly; exact values recorded below.
- [ ] Purity grep over recreation.html: patterns `segment`, `source.mp4`, `<video`, `<img`, `ev/`, `frames/`, `.jpg`, `.mp4`, `http://`, `https://`, `url(` → 0 hits required.
- [ ] Asset inventory: recreation loads ZERO external assets (single inline `<style>` + inline `<script>`).
- [ ] Comparison check: labels, shared controls, sync method, phone stacking (CSS inspection + logic).
- [ ] Five-lens Codex wave: motion · timing · purity · reusability · readability — separate runs, verbatim returns in `codex/`, standing header per lens.
- [ ] scores.md: arithmetic shown (sum/5, min), bar avg ≥85 AND min ≥70, verdict, priced gap.

### Failure points (priced for this item)
- **Fitting limits:** a long swapped line can overflow horizontally → mitigation: `overflow-wrap:anywhere` + font size from config; priced as a readability risk, not solved by shrinking defaults.
- **Scroll mis-timing:** scroll must track the ACTIVE line, not jump at line completion → scroll shift computed continuously from accumulated line heights in `stateAt`.
- **Phase overlap:** banner and dialogue must not type simultaneously (sequenced timeline by construction — dialogue starts at banner end + pause).
- **Render-proof limitation:** no Chrome binary in this seat — pixel render is not exercised here; the comparison page is the render surface and the swap test is logic-level (T15 precedent, guards.md command 2).
- **Convergent freeze / intensity collapse:** not applicable to DOM typing (no particle field); named and dismissed with reason.

## §3 — Execute (record)

- Segment: cut with the charged ffmpeg command; ffprobe facts recorded in the Verify section below.
- Builds: `recreation.html` + `comparison.html` in this directory (see Verify for checks).

## §5 — Verify (record)

**Segment binding (guard 5):** `segment.mp4` cut with the charged command (`-ss 0 -t 14.5 -vf scale=960:-2 libx264 -an`) from P1 `source.mp4`. ffprobe: h264, 960×540, duration **14.5 s**, 717,693 B — matches the catalogue window 0:00–0:14 (+0.5 s handle).

**Leg 1 — Swap test (node, logic level; `/tmp/t01-swaptest.js` over the recreation's pure `buildTimeline`/`stateAt`): PASS, 7/7 assertions.**
- Baseline: durationMs = **13,854** (fits the 14 s window); at t=9000 ms lines 1–5 complete, line 6 mid-type, `shiftUnits=2` (scroll engaged).
- Swapped dialogue lines: `user:"Teach me a chord?"` · `ai:"Start with G."` · `user:"Now a melody?"` → all render verbatim at completion; mid-type state at line-0 start + 5 chars = `Teach` (char-by-char intact).
- Changed timing: `charMs 55 → 20` → durationMs 13,854 → **9,654**; line-0 typing span = text length × 20 exactly.
- Changed palette: `palette.cursor #57d977 → #ff3355`, `palette.bg #070807 → #101018` → values land in CONFIG; render path verified to read cursor/bg only from `cfg.palette` (no literals).

**Leg 2 — Construction purity: PASS.** Grep over `recreation.html` for `segment|source.mp4|<video|<img|ev/|frames/|.jpg|.mp4|http://|https://|url(` → **0 hits**. Asset inventory: recreation loads ZERO external assets — one inline `<style>`, one inline `<script>`, all text drawn from CONFIG. Syntax: `node --check` clean on both recreation and comparison inline scripts.

**Leg 3 — Comparison check (logic/CSS level):** labels exact (`ORIGINAL — P1 @ 0:00–0:14` / `RECREATION — T01, parameterized`); one shared control set (Play/Pause/Restart) drives the video (master clock) and the recreation via `REC_API` with seek-sync to `video.currentTime` + 500 ms drift correction (>350 ms re-seeks); `@media (max-width:640px)` stacks panes vertically, controls remain above the panes (tappable). No captions/subtitles in either file (§6.5) — the typed dialogue is the technique subject.

**Leg 3b — jev-prewave: SKIPPED-WITH-REASON** (UNBUILT in this seat, per guards.md + wave RUN.md).

**Leg 4 — Codex five-lens wave:** fired after legs 1–3 passed; returns filed verbatim in `codex/lens-*.md`; verdict in `scores.md`.

# Leg B — Demonstrated Systems: HTML / Code → Video Motion Graphics

**Study:** Motion-graphics deep study, 2026-11-08 · **Leg:** B — Demonstrated systems
**Question served:** What working systems render video from HTML or code, and how do they make timing frame-accurate, rendering deterministic, and assets manageable?
**Method:** Multiple search rounds; primary sources read in full where available — official docs (Remotion, Playwright, GSAP, Manim Community, Revideo/Midrender), vendor engineering posts read end-to-end (HeyGen HyperFrames research post, Replit Frontier post, puppeteer-capture author post), and Chromium source switches. Snippets/marketing pages were used only to locate primary sources, never as the sole evidence for a mechanism claim. Where only secondary evidence exists, that is flagged in-line.

**Cost line (standing rule):** full-file reads planned: ~8 primary pages in full · agents spawned: 0 (this leg is a single researcher) · the specific risk this pass retires: choosing a capture architecture on folklore instead of on published, shipped-system evidence — especially the screencast-vs-stepping decision, which determines whether frame-exactness is even possible.

---

## The one pattern every demonstrated system converges on

Before the per-system detail, the shared architecture — stated identically, in different words, by Remotion, HyperFrames, Motion Canvas/Revideo, Manim, and the generic playbooks that survey them:

> **Express every frame as a pure function of its frame index: `frame → pixels`, with `time = frame / fps`. The renderer *seeks* to a timestamp and captures; it never *plays* in real time and records.**

A surveyed playbook (zvoque/docs, *Code-Rendered Video Playbook*, June 2026, read via GitHub) puts it exactly: "The renderer *seeks* to a timestamp and screenshots — it doesn't play in real time and record. That's the source of both the superpower (determinism, testability, parallelism) and the #1 footgun (anything driven by the wall clock flickers)." Everything below is variations on how each system enforces that contract, and what breaks when it is violated.

---

## 1. Remotion — React → video

**Primary sources read:** remotion.dev/docs/delay-render (full), remotion.dev/docs/flickering (full), remotion.dev/docs/troubleshooting/css-animations, remotion.dev/docs/offthreadvideo + Video-vs-OffthreadVideo comparison, Remotion 3.0 / Lambda announcement.

### Source-of-truth model
- **Code, not a timeline file.** A video is a React component tree. A `<Composition>` registers id, component, `durationInFrames`, `fps`, width/height, and default props. There is no separate EDL/timeline JSON; timing lives in code structure: `<Sequence from durationInFrames>`, `<Series>`, and values derived from `useCurrentFrame()`.
- **Metadata does NOT live inside a single source file by default.** Props are passed in at render time (JSON input props), and `calculateMetadata()` — an async function on the Composition — can fetch/derive duration, dimensions and props *once* before rendering. Remotion's own docs recommend `calculateMetadata()` over in-component fetching precisely because it "runs only once, rather than the amount of concurrency" and needs no `delayRender` bookkeeping. A Remotion project is a normal React app (many files + a `public/` asset folder); decisions/reasoning are not carried inside the render file unless the author puts them there. This is a real contrast with a one-HTML-file model: Remotion gives you a *component* as source of truth, not a self-describing document.

### Timing mechanism — frame stepping, massively parallel
- Remotion spawns headless Chromium, loads the bundled app, and for each frame sets the current frame, lets React render that exact state, and screenshots it. Frames are then stitched/encoded with FFmpeg (bundled since v4; a Rust compositor handles media in current versions — see OffthreadVideo below).
- Crucially, frames are **rendered out of order in parallel**: multiple browser tabs (local concurrency) or many Lambda functions (Remotion Lambda) each render a slice. Docs, Flickering page: *"We open multiple tabs to render the video to speed up the process dramatically. Tabs don't share state… Frames don't render in order and frames can be skipped [in playback terms]."* The 3.0 announcement quantifies the payoff: the Lambda trailer rendered in 15 s instead of 60 s; a 2-hour video in 12 minutes; Lambda described as "mature and used in production by companies like Combo and Jupitrr" at announcement time.
- Therefore the frame number is the *only* clock. Any animation not derived from `useCurrentFrame()` is definitionally wrong.

### Determinism techniques
1. **Pure function of frame:** "Think of your component as a function that transforms a frame number into an image." Official criteria (Flickering doc): same visual when called multiple times; must not rely on frames rendering in order; must not animate when paused; must not rely on randomness.
2. **Seeded randomness:** use Remotion's `random(seed)` (deterministic per seed, string seeds allowed) — never `Math.random()`. `random(null)` is the explicit opt-out to true randomness.
3. **`interpolate()` / `spring()`** computed from frame, not from elapsed real time; no `setTimeout`/`setInterval`/`requestAnimationFrame`/CSS transitions for motion (dedicated doc: *Don't use CSS animations in Remotion* — CSS `@keyframes`/`transition` "don't know which frame Remotion is currently rendering").
4. **`delayRender()` / `continueRender(handle)` / `cancelRender(err)`** — the canonical block-until-ready gate (full doc read):
   - `delayRender(label?, {retries, timeoutInMilliseconds})` returns a handle and *pauses screenshotting of that frame* until `continueRender(handle)` clears it; multiple handles all must clear.
   - Default timeout ~30 s (error text shows 28 s clearing window); on timeout the tab is closed and, if `retries` were requested, the frame is retried from scratch.
   - Preferred modern form is the `useDelayRender()` hook (avoids the two documented handle bugs — see Bug Classes) and is required for browser rendering.
   - Built-in media components (`<Img>`, `<Video>`, `<Audio>`, `<Html5Video>`, `<Html5Audio>`, `<IFrame>`, `<Gif>`) call this internally, with `delayRenderRetries` / `delayRenderTimeoutInMilliseconds` props.
5. **Fonts:** wait for fonts to load before screenshot and before calling text-measurement APIs (`fitText()`, `fillTextBox()`, `measureText()`) — otherwise metrics are computed against a fallback font and then change.

### Asset management model
- `staticFile()` resolves files from the project's `public/` folder; remote URLs are allowed but are the flaky path (hence retries on delayRender for CDN 5xx). Input props (JSON) select data/assets per render for personalised/batch video — this props-driven model is why Remotion dominates data-driven/personalised video (canonical shipped example: **GitHub Unwrapped**, the personalised year-in-review; also a Fireship video, per Remotion's showcase as surveyed in 2026 comparisons).
- Embedded video is the hard asset class, solved *outside* the browser: **`<OffthreadVideo>`** "extracts the exact frame from the video and displays it in an `<Img>` tag. This extraction process happens outside the browser using FFmpeg" (during preview it is a `<video>`; during render it is an `<Img>`). Docs: "Prefer `<OffthreadVideo>` whenever possible." Newer `@remotion/media` `<Video>` uses the same philosophy via a Rust compositor decoding on demand (named as such in HeyGen's comparative write-up).

### Known bug classes with published cures
| Bug class | Published cause | Published cure |
|---|---|---|
| Flicker / choppiness | Multi-threading: stateful or wall-clock animation breaks when tabs render frames out of order | Rewrite as pure `useCurrentFrame()` function; seeded `random()` only. `--concurrency=1` is documented as a *bypass, not a fix*: slower, blocks Lambda, and "the correct timing… is still not guaranteed… results will differ across machines… looks okay only because of coincidence" |
| Blank / half-loaded frames | Renderer screenshots a loading state because it didn't know an asset was pending | Use the Remotion media components (they delayRender internally); `delayRender()` for data; wait for fonts |
| Flicker from `background-image` / `mask-image` | "Impossible to determine" when a CSS-loaded image finished, so Remotion cannot wait for it | Use `<Img>` instead; workaround: render a hidden adjacent `<Img>` with the same `src` to force the download to complete |
| CSS animation desync | CSS animations/timers have no knowledge of the Remotion frame | Ban CSS transitions/keyframes/setTimeout as motion drivers; derive everything from frame (dedicated troubleshooting doc) |
| delayRender handle leaks | Handle created at module top level blocks *other* compositions and even composition listing; handle re-created on every React re-render never clears reliably | Keep handles inside components; create once via `useState(() => delayRender())`; prefer `useDelayRender()` |
| delayRender timeout on flaky CDN | Asset fetch intermittently 5xx | `delayRender(label, {retries: 1})` — tab closed, frame retried from scratch; or raise per-call `timeoutInMilliseconds` |
| Player/Studio-only flicker (not in render) | A `<Video>` only starts loading when its Sequence mounts | Premounting (`premountFor`), preloading, prefetch as blob/Base64, or `pauseWhenBuffering` — docs explicitly say rendered output does *not* have this defect, so don't "fix" the render for a preview artefact |
| Many `<Html5Video>` stutter | Browser video-element decoding/seeking in-page | Use `<OffthreadVideo>` / `@remotion/media` `<Video>` (FFmpeg/compositor extraction) |

### Demonstrated output
GitHub Unwrapped (personalised, at scale), Fireship video (showcase), Remotion's own trailers (Lambda trailer 15 s render), production use at Combo and Jupitrr (vendor announcement — treat company names as vendor-claimed), and a large public corpus of data-driven/personalised renders via Lambda. Licence caveat for adopters: source-available Remotion licence, not MIT/Apache; free for individuals/small teams, paid company licences above the threshold — verify current terms before committing a commercial pipeline.

---

## 2. GSAP-driven capture pipelines

**Primary sources read:** GSAP official docs for `seek()` / `totalTime(time, suppressEvents)` (gsap.com/docs), HeyGen HyperFrames research post (GSAP adapter section, full), plus the surveyed generic `render_frames.py` / `window.__seek` contract in the HTML-frames stack reference (jaiskills, verified 2026-09-26 against live docs).

### Source-of-truth model
GSAP itself is **not a video system** — it is an animation engine inside a page. The source of truth is the page (HTML/CSS/JS) plus a GSAP **timeline object**: a declarative-ish, build-once structure of tweens placed at absolute times/labels. GSAP has no file format, no timeline JSON, and carries no production metadata. In a capture pipeline the *contract* added on top is what becomes the source of truth, conventionally:

```js
const tl = gsap.timeline({paused: true});
// build all tweens…
window.__seek = t => tl.seek(t);          // or tl.totalTime(t, false)
window.__meta = {width, height, fps, duration};
```

### Timing mechanism — seek-based stepping (the good path)
- GSAP timelines are **paused-and-seekable by design**. Official docs: `seek(time, suppressEvents=true)` "jumps to a specific time (or label) without affecting whether or not the instance is paused or reversed"; intermediate callbacks are *not* fired by default when seeking — exactly the semantics a frame renderer needs, because rendering frame 900 must not replay the side-effects of frames 0–899. `totalTime(t, suppressEvents)` is the same jump measured against totalDuration including repeats.
- HyperFrames (primary post): *"GSAP is the default because its timelines are already paused-and-seekable by design. `timeline.pause()` followed by `timeline.totalTime(t, false)` is the exact functionality we need."* Its capture loop is `seek(0) → capture → seek(1/30) → capture → …` — 300 seeks for a 10 s / 30 fps clip.
- Because a seek *computes* state from `t` (interpolation of from/to values through an easing function), seeking is order-independent and repeatable **provided** the timeline was built deterministically and no tween reads wall-clock/external state in its callbacks. GSAP's normal playback uses a rAF-driven global timeline — that playback path must never be used for capture; only the paused+seek path is deterministic.
- The generic DIY pipeline is identical in shape: Puppeteer/Playwright `page.evaluate(t => window.__seek(t))` then CDP `Page.captureScreenshot`, looped, then FFmpeg. The HTML-frames stack reference (tested on M1 Pro) rates `__seek + CDP Page.captureScreenshot` as its **default, deterministic** approach for DOM/SVG/Canvas/WebGL.

### Determinism techniques
- Timeline created `{paused: true}`; never `play()` during capture.
- Seek with events suppressed (`seek(t)` default, or `totalTime(t, false)` in HyperFrames' adapter — note the differing default: `seek` defaults suppress=true, `totalTime` defaults suppress=false in GSAP docs, so pipelines must pass it explicitly; a callback with side effects firing on seek is a classic silent-desync source).
- All tweens' start/end values fixed at build time; no `Date.now()`, no unseeded `Math.random()` in value functions — HyperFrames states this as an author rule for the whole composition, not just GSAP.
- Time quantisation at the renderer: `quantizeTimeToFrame(time, fps) = Math.round(time*fps)/fps` so two code paths computing "the same" time cannot land a microsecond apart and produce a one-pixel diff (HeyGen, verbatim rationale).

### Asset management model
None in GSAP. Fonts/images/video are the page's problem, handled by the capture layer's readiness gates (see §3/§7). GSAP pipelines inherit the web's asset model — which is precisely why every serious GSAP capture system adds a ready-signal + localised fonts (HyperFrames rewrites Google Fonts `@import`s to local base64-embedded `@fontsource` copies).

### Known bug classes with published cures
| Bug class | Cause | Cure |
|---|---|---|
| Animation "runs ahead"/differs per run | Capturing while the timeline plays on rAF/wall clock (screencast or timed screenshots) | Pause the timeline; drive only by seek. Never capture a playing page for frame-exact work |
| Callbacks fire during capture (sounds, state mutations, analytics) | Seek with `suppressEvents=false`, or `totalTime()`'s default | Seek with events suppressed; make callbacks pure/idempotent anyway |
| First-frame/default-value flash | Tween not yet initialised / lazy-init on first render | GSAP renders lazy tweens on seek internally; in practice force an initial `seek(0)` render before capture loop and gate on page-ready |
| Sub-frame time drift | Renderer computes `t` by accumulating `+= 1/fps` in floating point, or two paths compute `t` differently | Compute `t = frame / fps` from the integer frame each time; quantise to the frame grid |
| CSS transitions / WAAPI / rAF loops alongside GSAP desync | Those subsystems own their own clocks | Route *every* animation through adapters that take the clock away (HyperFrames FrameAdapter model), or bake them offline to frames |

### Demonstrated output
GSAP is the default animation runtime inside HyperFrames (HeyGen production, §7), and the seek+screenshot loop is the documented core of multiple shipped HTML→video stacks. GSAP alone ships no video — any claim of a "GSAP video exporter" is a capture pipeline someone built around it.

---

## 3. Virtual-time / deterministic browser rendering

This is the substrate layer. Four distinct mechanisms exist in the wild; they are **not interchangeable**, and conflating them is the most common architecture error in this space.

### 3a. Chrome `--virtual-time-budget` (old headless / `--dump-dom` era)
- **What it is (Chromium source, `headless_shell_switches.cc`, read directly):** *"If set the system waits the specified virtual milliseconds before deeming the page to be ready. For determinism virtual time does not advance while there are pending network fetches (i.e no timers will fire). Once all network fetches have completed, timers fire and if the system runs out of virtual time [it] is fastforwarded so the next timer fires immediately, until the specified virtual time budget is exhausted."*
- **What it is for:** making a page *settle* deterministically for DOM extraction/screenshot-once — not for per-frame video capture. It fast-forwards timers; it does not give you a stepped frame clock, and animation state at budget expiry is "whatever the fast-forward landed on."
- **Verdict for video:** a settling tool, not a capture clock. No demonstrated video system in this study uses `--virtual-time-budget` as its frame mechanism.

### 3b. `HeadlessExperimental.beginFrame` + `--deterministic-mode` — the demonstrated best capture primitive
**Primary sources read in full:** HeyGen research post §"Capture", puppeteer-capture author post (Alexey Pelykh, 2026-02-21), Replit Frontier post, Chromium switches source.

- CDP `HeadlessExperimental.beginFrame({frameTimeTicks, interval, screenshot:{…}})` runs **exactly one layout → paint → composite → screenshot cycle, atomically**, and returns the frame buffer plus `hasDamage`. Between calls the browser is frozen. Pelykh: *"You send a CDP command. Chrome runs exactly one layout-paint-composite cycle. You get the frame buffer back. Nothing happens until you send the next command."*
- Required setup (HeyGen, verbatim flag list): binary must be **`chrome-headless-shell`** (not `--headless=new` on regular Chrome), flags `--deterministic-mode --enable-begin-frame-control --run-all-compositor-stages-before-draw --disable-threaded-animation --disable-threaded-scrolling --disable-checker-imaging --disable-image-animation-resync --enable-surface-synchronization`. Each flag disables an async scheduling source (threaded compositor/scrolling, incremental image decode, image-animation resync, vsync surface timing). With `--deterministic-mode`, `performance.now()` is driven by the `frameTimeTicks` you pass, not the system clock.
- **Platform limit, stated by both HeyGen and Pelykh:** reliable on **Linux**; macOS/Windows either crash or misbehave under deterministic mode, so production renders run in Linux/Docker and other platforms fall back to `Page.captureScreenshot` + heuristics. Chrome 117–120 had intermittent deterministic-mode crashes (Pelykh, documented with workarounds).

### 3c. JS virtual-clock injection (monkey-patching time) — for arbitrary pages
**Primary source read in full:** Replit, *"We Built a Video Rendering Engine by Lying to the Browser About What Time It Is"* (2026-02-26), crediting Vinlic's **WebVideoCreator** as the pioneer of "time virtualization + BeginFrame capture."

- A ~1,200-line injected script replaces `setTimeout`, `setInterval`, `requestAnimationFrame`, `Date`, `Date.now()`, `performance.now()` *before* page code runs. Time advances by exactly `1000/fps` ms per frame and only on the renderer's command. Per-frame loop (their pseudocode): seek CSS animations → sync media → advance clock → fire interval callbacks → fire timeout callbacks → fire rAF callbacks → capture frame.
- Why Replit built this instead of using Remotion (their words, paraphrased tightly): Remotion gives "determinism by design, but requires you to build inside its component framework"; Replit needed "determinism from the outside, applied to arbitrary web content" (any URL, any animation library). This is the fundamental fork: **constrain the authoring model (Remotion/HyperFrames) vs. virtualise time for unconstrained pages (Replit/WebVideoCreator/puppeteer-capture).** The second path is strictly harder and leakier (see bug classes).
- **htmlrec (`hrec`, Rust, dsplce-co)** is a small open-source instance of the same idea: "a virtual clock overrides `performance.now`, `Date.now`, `rAF`, `setTimeout`, `setInterval`, and CSS animations so every frame is deterministic," driving headless Chromium frame-by-frame to MP4. Good existence proof that the pattern is reproducible outside large vendors.

### 3d. Playwright Clock API — a testing clock, not a capture clock
**Primary source:** playwright.dev/docs/clock (full).
- `page.clock` overrides `Date`, `Date.now()`, `setTimeout/clearTimeout`, `setInterval/clearInterval`, `requestAnimationFrame`, `clearImmediate`, `performance.now()` for the whole BrowserContext. Methods: `setFixedTime` (recommended for most cases), `install({time})`, `pauseAt(time)`, `fastForward(tick)`, `runFor(duration)`, `resume()`, `setSystemTime`.
- Caveats from the docs themselves: `install` **must** happen before any other clock-related call or behaviour is undefined; install before navigation; `pauseAt` fires due timers "at most once" (laptop-lid semantics — it is modelling time *jumps* for tests, not stepping a render clock).
- **Verdict for video:** Playwright Clock is designed for deterministic *tests* of time-dependent UI. It can freeze `Date.now()` for a capture harness, but it does not step Chrome's compositor, does not control CSS animation painting per frame, and its `pauseAt` semantics are wrong for frame stepping. No demonstrated video renderer in this study uses Playwright Clock as its frame mechanism; Playwright/Puppeteer in video pipelines are used as *drivers* for seek+screenshot or beginFrame loops. Treating "Playwright has a clock API" as "Playwright gives deterministic video" is a category error this study explicitly warns against.

### 3e. Screencast — the anti-pattern, documented as such
- CDP `Page.startScreencast` / Puppeteer `page.screencast()` (now superseded by `page.record()` / `Page.startScreenRecording` in current Puppeteer docs) *subscribe* to frames Chrome produces in real time. Pelykh's post is the clearest published autopsy: racing the renderer yields (1) non-reproducible output, (2) lost frames under load — "the output degrades exactly when you need it most," (3) no timing control ("you can't say capture exactly 60 fps for exactly 5 seconds").
- Independent corroboration from a renderer experiment log (Helios, PERF-181, GitHub): replacing beginFrame with `startScreencast` *"does not provide synchronous, deterministic frame guarantees like beginFrame"* — the pipeline starved/deadlocked waiting for pushed frames and the experiment was recorded as **failed/discarded**.
- `Page.captureScreenshot` sits in between: it is a pull, not a push, but HeyGen documents that it *"returns an image as soon as the compositor is willing to hand one over. That is not the same moment as 'layout is done, fonts are loaded, the GSAP tween has committed its final style, and the GPU has finished painting'"* — yielding frames where text hasn't rendered, SVG fills are still defaults, or a `<video>` still shows its 300×150 default box. Their macOS/Windows fallback still uses it, with "did the frame land" heuristics (poll `fonts.ready`, check computed styles, compare pixel hashes) — explicitly called "not how you want to run production at scale."

### Deterministic layout — the rest of the checklist (all sources agree)
- **Fonts:** self-host/embed; never network-fetch at render time (HyperFrames: rewrite Google Fonts imports to local base64 `@fontsource` copies; Remotion: wait-for-fonts gate; Manim's LaTeX/Pango stack is the non-browser equivalent risk).
- **Frozen/seeded everything:** seeded PRNG reseeded per frame/time (HyperFrames' audited producer switches `Math.random` to a Mulberry32 PRNG "reseeded from the current virtual time on every seek" and rewrites `crypto.getRandomValues` — per the TensorVue static audit of the HyperFrames repo; treat audit details as secondary-source, the author-rule itself is primary from HeyGen's post); no `Date.now()`; no render-time network fetches.
- **Workers/threads that bypass the main thread must be disabled or contained:** Replit disables `OffscreenCanvas`/`transferControlToOffscreen` outright because worker-thread rendering "bypasses our main-thread capture pipeline." Single-flight rendering (concurrency 1) in Replit's service because "memory pressure causes frame corruption."
- **Compositor warmup:** both HeyGen and Replit independently hit the same bug — with frame-by-frame driving, an idle gap before capture leaves Chrome's compositor/event loop stale or hung. Cures: HeyGen fires `beginFrame` every 33 ms with `noDisplayUpdates:true` during load (also unblocks `document.fonts.ready`, whose promise never resolves when nothing ticks, and replaces `page.waitForFunction`, which polls via rAF that never fires in beginFrame mode, with a manual `evaluate`+`setTimeout` poll); Replit issues ~30 fps "skip frames" while waiting for the ready signal. **If your capture hangs at load or your first frames are corrupt, this is the published first suspect.**

### Demonstrated output (this layer)
WebVideoCreator (open source, the origin), Replit's production URL→MP4 renderer, puppeteer-capture (npm/GitHub, deterministic demo/tutorial/visual-regression capture), HyperFrames' Linux production path (§7), htmlrec.

---

## 4. Manim — code → video, deterministic by construction

**Primary sources:** Manim Community docs — `SceneFileWriter` API reference (docs.manim.community, stable), plus a source-level deep dive against ManimCommunity/manim v0.20.1 (`scene.py` / `cairo_renderer.py` / `scene_file_writer.py`, file:line cited) read via the Sparkles research mirror. Where the two disagree on internals (newer versions moving to PyAV segment encoders), the docs' *contract* (partial files, hashing, caching) is stable across versions.

### Source-of-truth model
- **A Python file.** You subclass `Scene` and write one method, `construct()`, which builds Mobjects (vector objects) and calls `self.play(Animation(...), run_time=…)`, `self.wait(duration)`, `self.add()/remove()`. The triad is Scene (orchestration + timeline clock) × Mobject (state) × Animation (timed interpolation between states). There is no timeline file and no metadata layer — the code *is* the edit, readable top-to-bottom as a script. Reasoning/decisions live only in code/comments unless the author adds them.
- Specialised scenes (`MovingCameraScene`, `ThreeDScene`, `ZoomedScene`) are still the same model.

### Timing mechanism — sampled interpolation, no browser, no real time
- `construct()` runs **once to script the timeline; there is no realtime loop.** For each `play()`, the renderer computes `times = np.arange(0, run_time, 1/frame_rate)` and for each `t`: `alpha = t / run_time` → reshape through the animation's rate function (easing) → `animation.interpolate(alpha)` (lerps points/colours of every submobject) → run updaters → rasterise the scene graph with **Cairo** (default; cubic-Bézier VMobjects) → encode the frame. `wait()` emits still frames for its duration.
- Because state at frame *n* is computed from `alpha`, not accumulated from frame *n−1* (updaters with `dt` are the exception — see costs), the sampling is deterministic by construction: same scene code + same config → same frames, on any machine fast or slow. Rendering speed is irrelevant to output timing — the exact property browser capture has to fight for.

### Determinism techniques / what determinism buys
1. **No wall clock anywhere in the model** — authors are told explicitly: never use wall-clock time or unseeded randomness in `construct()`.
2. **Content-hash caching of partial movie files — Manim's signature asset/efficiency mechanism.** Each `play()`/`wait()` invocation is hashed (`get_hash_from_play_call` over scene, camera, animations, mobjects); the hash *is the partial file's name*. `SceneFileWriter.is_already_cached(hash)` is a path-exists check; a hit skips rendering that segment entirely. `finish()` concatenates the partials (FFmpeg concat list via PyAV in current code) into the final MP4. Editing the last scene of a 40-scene video re-renders only the changed tail — no other system in this study has incremental, content-addressed segment caching this clean.
3. **Cheap verification loop from determinism:** `-s` saves the last frame as PNG with no encode; `-n a,b` renders only an animation-index range; `-ql` iterates at low quality before `-qh` finals. "Render frames first, verify, then commit to full video" is a viable strategy *only because* frames are reproducible.

### Asset management model
- Assets are files referenced from code (images, SVGs, LaTeX/Pango typesetting generated at render time). Output is organised: `media/videos/<file>/<quality>/<Scene>.mp4`, partials in a cache directory with LRU cleaning (`clean_cache`) and full flush (`flush_cache_directory`). No asset registry, no in-file asset manifest — provenance is whatever the code says.

### Known bug classes / costs (published + source-evident)
| Issue | Substance |
|---|---|
| Updaters fighting animations | A mobject updater keeps firing every frame after its animation ends unless `clear_updaters()` is called — documented as "a classic source of Manim bugs": silent, visual, and order-dependent |
| `dt`-updaters reintroduce accumulation | Physics-style updaters integrate `dt` step-by-step, so their state *is* history-dependent — the one place Manim's pure `alpha` model leaks; seeded/deterministic still, but not seekable to an arbitrary frame without replaying |
| Cross-machine bit-identity is **not** guaranteed in stock Manim | The renderer is deterministic in *sampling*, but rasterisation/encoding depend on local Cairo/Pango/LaTeX/FFmpeg builds. A 2026 clean-room critique (franken_manim README, a hostile-but-technical source — flagged as such) charges stock Manim with: no reproducibility across machines ("two machines rendering the same scene routinely produce different output"), frame-clock float drift, inconsistent arc-length conventions, `MoveAlongPath` not constant-speed. Its remedy list is instructive even if you discount the advocacy: drift-free rational clock, one seeded RNG (PCG64), bundled fonts (delete LaTeX from the pipeline), content-hashed input closure, `--reproducible` = bit-identical frames/PNG/WAV across a certified platform matrix |
| Toolchain weight | Full LaTeX distribution + Pango/Cairo native stack = painful installs, no clean WASM/serverless story; `manim checkhealth` exists precisely because toolchain failure is routine |
| Aborted-render cache poisoning (newer docs) | A truncated partial left on disk is "structurally valid but truncated," producing an erroneous cache hit later — hence current writers delete/validate partials on abort. General lesson: content-hash caches must never cache an interrupted write |
| Expressiveness cost | Everything must be built as vector mobjects in Python. No DOM/CSS, no real web layouts, no easy photographic/UI content. Iteration is render-bound (mitigated by `-ql`/`-s`/`-n` and the partial cache) |

### Demonstrated output
The strongest demonstrated-output record of any system here: **3Blue1Brown** — Grant Sanderson's channel is built on Manim (his original ManimGL; the Community Edition is the 2020 fork), with the video code itself published in the `3b1b/videos` repository. Hundreds of long-form explainer videos over a decade are the existence proof for deterministic-by-construction code→video at the highest craft level.

---

## 5. Lottie / Bodymovin — JSON as the source of truth

**Primary sources:** lottie-web (Airbnb) README/wiki as cited in production guidance checked 2026-07-12 against the official Lottie specification; HyperFrames Lottie adapter documentation (HeyGen skills repo); StageFlip Lottie runtime notes (seek discipline + determinism contract, GitHub).

### Source-of-truth model
- **A JSON document is the animation.** Root Animation object carries dimensions, frame rate (`fr`), in/out points (`ip`/`op`), layers, assets, and animated properties; keyframes are ordered by frame with hold or cubic-Bézier easing; layers parent like an After Effects comp. Produced almost always by **exporting an After Effects composition via the Bodymovin plugin** — so the *authoring* source of truth is really the AE project, and the JSON is a baked, portable interchange artefact. Hand-authoring JSON is possible (small payloads are readable) but not the demonstrated workflow.
- **dotLottie** packages one or more Lottie JSONs + resources into a deflate-compressed ZIP (`.lottie`) — the asset-bundle format.
- Metadata/decisions do **not** live in the JSON beyond the animation data itself; there is no place for rationale. It is a *print* of an AE decision process, closer to an MP4 than to a buildable source — you can seek and composite it, you cannot meaningfully re-author it.

### Timing mechanism — data-described, frame-indexed, seekable
- Timing is *in the data*: every property value is a function of frame number via its keyframes. Any compliant player therefore renders frame *n* identically by interpolation — no clock needed at all.
- In video pipelines the player is driven exactly like GSAP: load with `autoplay:false`, never call `play()`, and per output frame call `anim.goToAndStop(frame, true)` (frame-based) or `goToAndStop(ms, false)` (time-based; HyperFrames adapter uses the ms form for lottie-web and frame/percentage APIs for dotLottie). StageFlip's runtime states the contract verbatim: "Same seek discipline as the GSAP runtime: load with `autoplay:false`, drive via `goToAndStop` on every frame… No rAF, no timers."

### Determinism techniques / limits
- Deterministic *given the same player*: the JSON fixes keyframes/easing, so a given player's frame *n* is stable and seekable in any order — which is why production guidance lists Lottie as suitable for "deterministic frame capture into another video compositor."
- **Player variance is the limit:** lottie-web (SVG/Canvas/HTML renderers), dotLottie players, and native mobile players implement *subsets* of AE features differently. The official-spec status is literally "work in progress." **Expressions are the named determinism/portability risk** — lottie-web can disable expressions via a renderer setting; guidance is to avoid or pre-bake them. Fonts: text layers depend on font availability/glyph handling per player; images are external assets referenced by the JSON unless embedded.
- **Off-by-one trap (field-verified in a production commit, SandeshKale/video-generator):** seek with `e * (anim.totalFrames - 1)`, not `e * totalFrames` — valid indices are `0..totalFrames-1`; asking for `totalFrames` makes lottie-web hold an unexpected in-between value at exactly `e=1`, "a visibly wrong" final frame in a scale-keyframe animation.
- **Loading trap (same source):** inline the JSON as `animationData`, never load via `path` — `path` triggers an XHR that hangs under `file://`/capture contexts. Generalised: at render time, *no network-shaped asset loading, for any format*.

### Asset management model
JSON + referenced/embedded image assets + fonts; dotLottie bundles them into one archive. No audio: lottie-web's Bodymovin path does not support audio/video/image-sequences (AE feature-support matrix) — audio is always a separately synchronised asset in the host composition.

### Known bug classes
Unsupported AE effects/features silently changing meaning on export; expression-driven motion differing per player; missing-asset/font substitution; payload blow-up on complex illustrated scenes (>1 MB JSON); the two traps above (off-by-one seek, `path` loading). Cure pattern: test the exact JSON in the exact target player, pin exporter+player versions in the record, bake expressions, embed assets.

### Demonstrated output
Lottie is the industry-standard interchange for designer-authored vector animation across web/mobile product UI (Airbnb-originated, ubiquitous in apps), and — relevant here — a supported, seekable layer type inside HyperFrames and Remotion (`@remotion/lottie`) compositions for rendered video. Its demonstrated strength is *portable playback of a fixed animation*, not programmable generation.

---

## 6. FFmpeg assembly practice

**Primary sources:** FFmpeg filter/concat documentation as codified in multiple independently-maintained production references cross-checked against each other (TwelveLabs jockey-ffmpeg cheatsheet, clapper ffmpeg skill, cstack research — recipes marked as locally run/verified there), plus the assembly roles FFmpeg plays inside Remotion/Manim/HyperFrames/Replit above. *Flag: this section rests on convergent practitioner references rather than a single full read of ffmpeg.org filter docs; every command pattern below appears in at least two independent sources.*

### Source-of-truth model
FFmpeg has no project format. The source of truth in an FFmpeg pipeline is **the command/script (or the spec that generates it)** — an edit decision list expressed as shell, a concat list file, or a filter graph string. Systems that need a durable, reviewable source wrap it: Editly's JSON5 spec (§7), Manim's hashed partials + concat manifest, Remotion's compositor. Raw FFmpeg commands pasted in a terminal are the video equivalent of an unrecorded decision.

### Timing / determinism practice
1. **Frame-exact cuts require re-encoding.** `-ss` *before* `-i` = fast input seek, snaps to keyframes; `-ss` *after* `-i` = decode-accurate. `-c copy` (stream copy) can only cut on keyframe boundaries (GOP, typically 2–10 s) — "if the cut point looks off by a second or two, that's why." Production rule: stream-copy only for assembly of already-exact segments; re-encode (`libx264` etc.) wherever a cut must land on a named frame.
2. **Concat demuxer vs concat filter — pick by input uniformity.** Demuxer (`-f concat -safe 0 -i list.txt -c copy`): same codec/resolution/fps/timebase only; mismatched inputs "produce garbled output without warning" — preflight with `ffprobe`. Filter (`concat=n=…:v=1:a=1`): re-encodes, tolerates mixed inputs. **Normalise before concat** is the standing recipe: scale/pad or crop to common W:H, `setsar=1`, fixed fps, `yuv420p` — then the demuxer path is safe and lossless.
3. **Deterministic encode settings:** fixed fps (`-r`), fixed codec/preset/CRF, no timestamp passthrough surprises (`-video_track_timescale` / `settb` discipline in filter chains), `-movflags +faststart` understood as a second pass that rewrites the moov atom. Same input + same FFmpeg build + same flags = same bytes in practice; cross-version/cross-build bit-identity is not promised (encoders change), so pipelines pin the FFmpeg build (Remotion bundles its own for exactly this reason).
4. **Audio sync:** audio is never captured from the browser in any demonstrated system — it is **muxed/mixed at the FFmpeg stage against the same frame-derived timeline**. Replit's published filter pattern is representative: per track `atrim → aloop → adelay → volume → afade`, final `amix=inputs=N:normalize=0`, video stream copied (`-c:v copy`) in the audio pass. `adelay` values come from the composition's own timing data, so sync is arithmetic, not measured-after-the-fact.
5. **Loudness — two-pass `loudnorm` is the production standard.** Pass 1 measures (`loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null -`); pass 2 applies with the measured values fed back (`measured_I/TP/LRA/thresh`, `offset`, `linear=true`, explicit `-ar 48000`). Single-pass loudnorm is documented by every reference as approximate/pumping-prone ("NEVER use single-pass — it causes audible pumping" is the strongest formulation; the measured consensus is: one-pass acceptable for quick streaming output, two-pass required where clips are compared back-to-back). Targets: −14 LUFS (YouTube/streaming), −16 (podcast/online default in several recipes), −23 (EBU broadcast). Normalise **per clip before concat**, or volume jumps at every cut. Verify after with an `ebur128`/loudnorm measurement pass.

### Known bug classes
Keyframe-snapped cuts mistaken for frame-accurate ones; concat-demuxer silent corruption from mismatched inputs; single-pass loudnorm pumping; loudness jumps at joins from skipping per-clip normalisation; timestamp/timebase drift on long concats from un-normalised inputs. All have the same shape: **FFmpeg fails silently and plausibly** — the output plays, it's just wrong — so every demonstrated pipeline probes outputs (`ffprobe` stream/duration checks, loudness measurement, frame counts) rather than trusting exit codes.

### Demonstrated output
FFmpeg is the assembly/encode layer inside every other system in this study (Remotion, Manim via PyAV/FFmpeg, HyperFrames, Editly, FFCreator, Revideo's `@revideo/ffmpeg`). It is not a competitor to them; it is their shared floor.

---

## 7. Other "HTML / code as the video source" systems

### 7a. HyperFrames (HeyGen) — plain HTML as source, the closest relative to a one-file model
**Primary source:** HeyGen research post read in full (mechanisms in §2/§3 above); repo-level details cross-checked against the TensorVue static audit (secondary, flagged where used).

- **Source of truth: a plain `.html` file.** No bundler, no JSX, no proprietary timeline format. Timing lives **in the file itself** as `data-start`, `data-duration`, `data-track-index` attributes on ordinary DOM elements; the composition exposes one runtime contract: `window.__hf = {duration, seek(timeSeconds)}`. Open the file in Chrome and it plays; the same file is the render source. Of every system studied, this is the only one where *the HTML file is simultaneously the authoring surface, the preview, and the render source* — and where timing metadata lives inside the source file as data attributes. (Production reasoning/decision metadata still lives outside — in skills/prompts/manifests; the renderer verifies a **sha256 of the runtime bundle against a manifest** before rendering, so preview code and render code are provably identical.)
- **Timing:** seek-don't-play (§2). Animation libraries plug in via a 3-method FrameAdapter (`init`, `getDurationFrames`, `seekFrame`): GSAP default; Lottie, CSS-via-WAAPI, Three.js clocks also fit. Anything that "insists on owning the clock" must be wrapped or baked offline.
- **Capture:** beginFrame on Linux (production, Docker), `Page.captureScreenshot`+heuristics fallback elsewhere (§3b/3e). Parallel rendering splits frames across N Chrome processes and FFmpeg-concatenates per-worker chunks — with the published gotcha that video-heavy compositions time out in parallel (decoder exhaustion) and must drop to a single worker.
- **Video-in-video:** solved by *removing decoding from Chrome entirely* — FFmpeg pre-extracts every `<video>` to numbered JPEGs at target fps before capture; at capture time an `<img>` with the exact frame's data-URI replaces the hidden `<video>`, inheriting its computed styles so tweens/transforms/object-fit keep working. "We hand it the exact frame we want, like a flipbook, and take a picture." (Remotion's compositor and Replit's WebCodecs demux are the two alternative demonstrated solutions to the identical problem — three shipped systems, three implementations, one shared conclusion: **never let a browser `<video>` element decode during capture.**)
- **Other traps published:** Google-Fonts network variance (→ local base64 fonts); time quantisation (→ frame-grid quantizer); author rules (no `Date.now()`, no unseeded `Math.random()`, no render-time fetches) as *contract*, violations = nondeterministic output "even with everything else we just built."
- **Demonstrated output:** HeyGen production pipeline (built after running Remotion in production for months — their stated reason for leaving was authoring-model fit for LLM agents, not render quality); open-sourced Apache-2.0; community examples from tldraw and TanStack per its README (vendor-listed). Also notable: it was deliberately shaped so a *small* model (Gemini Flash) could author compositions reliably, then tightened via evals across models — the only system here designed agent-first from day one.

### 7b. Motion Canvas — generator-function scenes + live editor
**Primary/secondary sources:** Motion Canvas docs via Revideo's guide (which instructs readers to read the Motion Canvas guide), source-level research mirror (Sparkles, v3.17.2), surveyed playbooks.

- **Source of truth: TypeScript code** — scenes are **generator functions** (`function*`) using JSX node trees rendered to **HTML5 Canvas2D** (not DOM). Signals (reactive values) drive properties; `yield*` delegates animation steps. A real-time editor (Stage with final/current/previous canvas buffers) is a first-class part of the system — you scrub and fine-tune live, then export.
- **Timing:** the generator *is* the timeline — execution advances the playhead step by step (`yield* waitFor(1)`, `yield* node().position.x(200, 2)`), so scene code reads top-to-bottom as a script. Export seeks: the renderer reloads scenes and seeks playback to an integer frame, then reads the Stage canvas — "frame output is deterministic as a function of the frame index" (research mirror).
- **Determinism limits, stated plainly by the research mirror:** "Determinism is per-machine, not bit-identical across machines" — pixels come from the browser's Canvas2D rasteriser (and WebGL drivers for shader nodes), so AA/blending can differ across browsers/OS/GPU. **No content-hash segment caching** (the Manim contrast is drawn explicitly in the source) — every export re-renders the whole range.
- **Metadata:** project/scene `.meta` files sit *beside* the code (editor state, voice/text data) — decisions are not inside the scene source.
- **Status:** last npm release v3.17.2 (Dec 2024); surveyed sources call it dormant for new feature work and steer new projects to Revideo. Demonstrated output: a large body of explainer videos by its community/creator (the aarthificial ecosystem); its niche is voice-over-synchronised vector explainers.

### 7c. Revideo — Motion Canvas, productised for headless/API rendering
**Primary sources:** Midrender Revideo docs read directly (Scene Flow, Project Structure, Transitions, Moving Objects).

- **Source of truth:** same generator-scene TypeScript model as Motion Canvas (`makeScene2D('scene', function*(view){…})`), plus **variables**: `useScene().variables.get('video', default)` — per-render data injected through `renderVideo({projectFile, settings})` from `@revideo/renderer`, enabling templated/personalised batch renders (the Remotion-props pattern, in generator clothing). MIT licence (Motion Canvas copyright retained).
- **Timing subtleties worth stealing (docs, Scene Flow):** the three yield forms have distinct frame semantics — `yield somePromise` awaits without producing a frame (e.g. `yield view.add(<Img …/>)` waits for the image/font load and *doesn't render a frame* — a built-in delayRender analogue); a bare expression without yield also produces no frame; `yield* waitFor(1)` consumes time and produces frames. Asset-readiness is thus expressed in the timeline language itself.
- **Rendering:** headless via Puppeteer (`@revideo/renderer` split client/server), FFmpeg package for stitching/audio, parallel rendering, Vite plugin acting as quasi-backend for the editor (FFmpeg export over WebSocket, `.meta` file I/O). Caveat from prior-art survey: the team pivoted to Midrender and OSS engine updates are "no longer upstreamed — semi-stalled" (survey claim, flagged as such; docs were still live and updated July 2026 when read).
- **Demonstrated output:** engine behind Midrender's product; positioned for programmatic/data-driven explainer video on servers/Lambda/Cloud Run.

### 7d. Editly — declarative JSON spec over FFmpeg (assembly, not animation)
**Primary source:** mifi/editly GitHub README (full spec structure).
- **Source of truth: a JSON/JSON5 edit spec** — `{outPath, width, height, fps, defaults{layer, layerType}, clips:[{duration, transition, layers:[{type, path/text, start, …}]} ], audioFilePath, …}`. Layer types: video, image, image-overlay, title/text, audio, canvas/Fabric.js custom draw functions, GLSL shader, fill-color. The spec *is* the metadata — the most literally "decisions inside the source file" model in this study, at the cost of expressing only assembly-level decisions.
- **Timing:** clip durations and layer `start` offsets in seconds, resolved by editly into a streaming FFmpeg pipeline (no intermediate files — its speed claim vs ffmpeg-concat); GL transitions via headless-gl (~90 gl-transitions). No per-frame animation engine — custom motion means a canvas layer function called per frame.
- **Determinism:** inherits FFmpeg's (same spec + same assets + same build → same output); no browser, so no browser bug classes. Its failure classes are FFmpeg's (§6) plus headless-gl build fragility (documented macOS ARM compile pain) and Cairo/Pango text-render dependencies.
- **Demonstrated output:** widely used for programmatic slideshows/montages/social assembly; the README's own demo GIF/video is produced by `editly commonFeatures.json5` — the spec file is published as the reproducible source.

### 7e. FFCreator / FFCreatorLite — Node canvas scene graph → FFmpeg
**Primary sources:** FFCreator README/docs (tnfe/FFCreator, via unpkg) and FFCreatorLite output/cache docs (DeepWiki from source).
- **Source of truth: imperative Node.js code** building a scene graph — `FFCreator{cacheDir, outputDir, width, height}` ← `FFScene` ← `FFNode` subclasses (`FFImage`, `FFVideo`, `FFText`, `FFAlbum`, `FFChart`, subtitles with `frameBuffer`). Rendering is node-canvas/headless-gl drawing frames (parallel frame batches configurable), cached as raw streams or jpg/png frame caches (`cacheType`, `cacheQuality`, `cacheClarity` for transition sharpness), piped to FFmpeg. Lite version drops GL for FFmpeg-only.
- **Timing/determinism:** frame counts derive from scene durations × fps in code; no browser clock involved, so output is as deterministic as its canvas rasteriser + FFmpeg build. No published frame-stepping literature comparable to the browser systems — evidence here is documentation-level only (flagged).
- **Demonstrated output:** Tencent-ecosystem (tnfe) short-video/album generators and drag-and-drop H5-to-video builders (shida) built on it. A useful existence proof of the non-browser Node-canvas route; not a demonstrated *HTML* route.

### 7f. Small/experimental HTML→video projects worth naming
- **htmlrec / hrec** (Rust) — virtual-clock Chromium capture CLI (§3c). Demonstrates the pattern at hobby scale with the full API-override list published.
- **WebVideoCreator** (Vinlic, open source) — the origin of time-virtualisation + BeginFrame for arbitrary pages; Replit's engine is a TypeScript rewrite of its architecture for chrome-headless-shell (old-headless removal in Chrome 132 forced the rewrite — a maintenance-risk data point for *every* beginFrame system: you are coupled to an experimental CDP domain and a special binary).
- **"html5webm"-style experiments / puppeteer recorders generally** — uniformly screencast-based; no primary evidence found of any such project achieving frame-exact output, and the published evidence (§3e) explains why none can. **No primary evidence was found for a maintained project literally named "html5webm"** — reported plainly as not evidenced rather than surveyed from memory.

### Source-of-truth / metadata comparison (the study's cross-cutting question)
| System | Source of truth | Timing expressed as | Decisions/metadata inside the source? |
|---|---|---|---|
| Remotion | React/TSX code + input props | Frame numbers (`from`/`durationInFrames`, `useCurrentFrame`) | No — props/`calculateMetadata` alongside code; no rationale layer |
| HyperFrames | **One HTML file** | `data-start`/`data-duration`/`data-track-index` attributes in the file + `window.__hf.seek` | **Timing yes** (in-file attributes); rationale no (skills/manifests outside) |
| GSAP pipeline | HTML page + JS timeline | Seconds on a paused timeline, seeked | No |
| Motion Canvas / Revideo | TS generator code (+ `.meta` sidecars; Revideo variables) | Generator yield sequence (seconds) | Partial — editor state in sidecar `.meta` files, not in scene code |
| Manim | Python scene file | `play(run_time)` / `wait()` sequence in code | No — code only |
| Lottie | JSON (exported from AE) | Keyframes by frame number in the data | The animation data only; authoring decisions remain in the AE project |
| Editly | **JSON5 spec file** | Clip durations / layer starts in the spec | **Yes, most literally** — the spec is the whole edit; but only assembly-level decisions |
| FFCreator | Node.js code | Scene durations in code | No |
| Raw FFmpeg | Shell/filter-graph text | Seconds/frames in commands | Only if the commands are kept as a script/spec — otherwise nothing is kept |

**Pattern:** the two systems that put timing *inside* the source file as data (HyperFrames' attributes, Editly's spec) are also the two most directly agent-authorable. Every code-first system keeps timing as *code structure*, which is precise but must be read, not queried. No demonstrated system embeds *reasoning/decision rationale* inside its source by default — that layer is everywhere an authoring discipline added on top, never a framework feature. (This is the gap a one-HTML-file-with-metadata-tabs model would be filling; the demonstrated systems prove the render half of that idea and leave the metadata half unbuilt.)

---

## Leg B findings

### The demonstrated best-practice capture architecture for frame-exact HTML→video
**Seek, don't play — and pull each frame synchronously.** Concretely, the architecture three independent production systems (Remotion, HyperFrames, Replit/WebVideoCreator lineage) converge on:

1. **Author against a seek contract:** every visual is a pure function of an integer frame (Remotion: `useCurrentFrame()`; HyperFrames: `window.__hf.seek(t)` with paused GSAP timelines; generic: `window.__seek(t)`). Time is computed as `frame / fps` from the integer each time and quantised to the frame grid — never accumulated, never read from a clock.
2. **Step the browser, never record it:** on Linux, `chrome-headless-shell` + `--deterministic-mode --enable-begin-frame-control` + `HeadlessExperimental.beginFrame` per frame (one atomic layout→paint→composite→screenshot); off Linux, seek + CDP `Page.captureScreenshot` with frame-landed heuristics is the accepted degraded fallback. Screencast/real-time recording is demonstrated *only* as a failure mode.
3. **Gate every frame on readiness:** a delayRender-style block-until-assets-ready mechanism (fonts loaded and local, images via wait-aware components, data fetched once up front), a compositor warmup loop during load, and **video elements never decode in-browser** — their frames are extracted by FFmpeg/compositor/WebCodecs and substituted as images.
4. **Assemble in FFmpeg against the same arithmetic timeline:** frames + audio mixed/muxed with delays computed from the composition's timing data, per-clip loudness normalised two-pass, outputs probed (duration, frame count, loudness) rather than trusted.

Where the authoring model can be constrained, Remotion's variant (frame-as-pure-function + parallel out-of-order rendering) is the most battle-tested; where the source must be plain HTML, HyperFrames' variant (same seek contract + beginFrame) is the demonstrated equivalent. Manim proves the limiting case: remove the browser entirely and determinism stops being a fight — at the price of the entire web platform as a design surface.

### Published cure list for capture flakiness (consolidated)
1. **Flicker/desync** → animation wasn't a pure function of frame. Cure: derive all motion from frame/seek time; seeded `random(seed)` only; ban CSS transitions/keyframes, `setTimeout`, rAF as motion drivers (or wrap them in clock-taking adapters). `--concurrency=1` masks, never cures.
2. **Blank/half-loaded frames** → renderer didn't know an asset was pending. Cure: delayRender-style gating; wait-aware media components; fetch data once in a metadata phase, not per frame.
3. **Un-trackable image loads (CSS `background-image`/`mask-image`)** → use real `<Img>` elements; hidden-`<Img>` preload workaround where unavoidable.
4. **Screenshot races compositor** (`Page.captureScreenshot` returns before paint settles) → `HeadlessExperimental.beginFrame` (Linux/headless-shell); else poll `fonts.ready` + computed styles + pixel-hash comparison.
5. **Font variance** → self-host/embed fonts (base64 `@fontsource` rewrite); wait for `fonts.ready` before capture *and* before measuring text.
6. **Load-time hangs in beginFrame mode** (`fonts.ready`/`waitForFunction` never resolve — rAF is frozen) → warmup beginFrame loop with `noDisplayUpdates:true` during load; hand-rolled `evaluate` polling instead of `waitForFunction`.
7. **Stale compositor / corrupt first frames after an idle gap** → continuous ~30 fps skip-frame warmup until the ready signal (Replit + HeyGen, independently).
8. **`<video>` frame drops / decoder stalls / cross-machine variance** → take decoding out of Chrome: FFmpeg pre-extraction to per-frame images + `<img>` substitution (HyperFrames), compositor extraction (Remotion `OffthreadVideo`), or mp4box+WebCodecs demux-to-canvas (Replit). Parallel renders of video-heavy comps → single worker (decoder exhaustion).
9. **Callback side-effects during seek** → seek with events suppressed (GSAP `seek(t)` default / explicit `totalTime(t,false)`); keep callbacks idempotent.
10. **Sub-frame time mismatches (1-pixel diffs)** → quantise every seek time to the frame grid: `Math.round(t*fps)/fps`.
11. **Worker-thread rendering bypassing capture** (OffscreenCanvas) → disable it in the capture shim (Replit).
12. **Frame corruption under memory pressure** → single-flight rendering; isolation over throughput (Replit); per-worker chunking with FFmpeg concat where the content allows (HyperFrames).
13. **Screencast frame loss under load** → do not use screencast for frame-exact work at all; it is a push/real-time channel with no delivery guarantee (puppeteer-capture autopsy; Helios PERF-181 failed experiment).
14. **Lottie-specific:** inline JSON as `animationData` (never XHR `path` at render time); seek to `totalFrames-1` max; bake/disable expressions; pin player+exporter versions.
15. **FFmpeg-stage silent wrongness** → frame-exact cuts only via re-encode (`-ss` after `-i`); concat demuxer only on normalised, probed-uniform inputs; two-pass loudnorm with measured values, per clip before joining; probe every output.

### Evidence gaps (stated plainly)
- **FFCreator** and **Motion Canvas internals**: documentation/research-mirror level evidence only; no full primary engineering write-up of their capture determinism was found (Motion Canvas export is editor-integrated, not a published pipeline).
- **"html5webm"**: no primary evidence of a maintained project under that name achieving frame-exact capture — not studied beyond confirming the screencast class it would belong to.
- **Manim cross-machine reproducibility critique** rests partly on a hostile clean-room project's README (franken_manim) — its specific charges (float drift, LaTeX-dependent variance) are plausible and consistent with Manim's architecture, but they are one interested party's claims, not a Manim-team publication.
- **Remotion's current Rust compositor internals** are evidenced via HeyGen's comparative description + Remotion's own OffthreadVideo docs, not via a Remotion engineering post read in full for this leg.
- Vendor production claims (company names, render-time figures) are cited as vendor claims where they appear.

### Sources (primary first)
- Remotion docs: delayRender/continueRender; Flickering; Don't use CSS animations; OffthreadVideo; Video vs OffthreadVideo; Remotion 3.0/Lambda announcement — remotion.dev
- HeyGen: *HTML to Video: How HyperFrames Solved AI Video Rendering* — heygen.com/research/html-to-video (read in full)
- Replit: *We Built a Video Rendering Engine by Lying to the Browser About What Time It Is* — frontier.replit.com (read in full)
- Alexey Pelykh: *Why I Built puppeteer-capture* — alexey-pelykh.com (read in full)
- Chromium source: `headless/app/headless_shell_switches.cc` (virtual-time-budget, deterministic-mode, begin-frame-control definitions)
- Playwright docs: Clock API — playwright.dev/docs/clock
- GSAP docs: `seek()`, `totalTime()` — gsap.com/docs
- Manim Community docs: SceneFileWriter reference — docs.manim.community; source deep-dive vs v0.20.1 (Sparkles research mirror)
- Revideo docs: Scene Flow, Project Structure — midrender.com/revideo/docs
- Editly README / edit spec — github.com/mifi/editly
- FFCreator README/docs — tnfe/FFCreator
- Lottie: lottie-web README/spec via production guidance verified 2026-07-12; HyperFrames Lottie adapter (HeyGen skills); StageFlip Lottie runtime notes
- FFmpeg practice: TwelveLabs jockey-ffmpeg cheatsheet; clapper ffmpeg skill; cstack research (locally verified recipes) — convergent practitioner references
- Surveys used for location/cross-check only: zvoque *Code-Rendered Video Playbook*; jaiskills *Stack: HTML frames*; TensorVue HyperFrames audit; Helios PERF-181 experiment log

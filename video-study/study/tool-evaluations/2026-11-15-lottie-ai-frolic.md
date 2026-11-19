# Tool evaluation — Lottie AI + Frolic (the motion vector language)

_Seat evaluation, Video Study lane, 2026-11-15. Owner-directed: Hadi sent the launch film in the
Video Study chat 2026-11-15 17:09 EST ("Learn about this lottie ai and the motion vector language,
and how it can be used in our projects, and push it up with main for integration if useful with
existing jobs"). Consumer: HQ (integration decisions) + this lane (study/recreation substrate
questions). Verdict up front: **USEFUL — as an element factory and an agent tool, not as a scene
engine or a substrate replacement. Bounded scored trial proposed; adoption decisions are HQ's.**_

## What the owner sent

- "Introducing Lottie AI" — LottieFiles launch film, YouTube jUEUaCFINro, 74 s, published
  2026-11-09 (LottieFiles Launch Week), 54,304 views at capture. Music-only film, no narration;
  its claims live in the description + the product pages below.

## What Lottie AI is (primary sources)

- Standalone text→Lottie generator at lottie.ai. Describe the motion in plain language; it
  returns an editable **vector** Lottie animation (kilobytes, sharp at any size).
- Two modes: **Turbo** (fast draft) and **Quality** (multi-agent planning/refinement pass).
- Every generation ships with a **generated control panel** (sliders for that animation's colors,
  speed, size — retune without regenerating), named/grouped layers, layer-level prompt edits,
  version history. You can also upload your own SVG/image and have it animated.
- Exports: Lottie JSON · dotLottie · GIF · MP4 · WebM (PNG stills via the MCP route).
- Terms (lottie.ai FAQ): outputs belong to the user, full commercial AI license, prompts/imports/
  outputs are NOT used to train their models. Pricing: its own credit plans, separate from
  LottieFiles plans; free start (launch coverage: 10 free generations).

## What Frolic is

- Frolic is LottieFiles' purpose-built **motion language**: "a motion-trained language."
  Pipeline per their blog: prompt → **Frolic script** → compiler → animation blueprint + motion
  logic → standard Lottie / dotLottie.
- The Frolic code behind any generation can be viewed and **hand-edited in the Studio**. Layers
  in the output are named by function ("smart layering"), not "Shape 47".
- **Unverified / not found:** no public language specification, grammar, or standalone
  compiler/CLI/SDK surfaced in docs.lottiefiles.com or web search as of 2026-11-15. Today Frolic
  reads as a platform-hosted representation: authored by their AI (or by hand in their Studio),
  compiled by their compiler. The compiled output (Lottie JSON) is the open, ownable artifact.

## The agent route: Creator MCP

- LottieFiles hosts a **Creator MCP** server (`https://creator.mcp.lottiefiles.com/mcp`, docs
  updated 2026-11-10): connect once with a LottieFiles account; an AI agent can then create,
  preview, and export animations from a brief, make targeted edits, and download Lottie JSON,
  dotLottie, MP4, WebM, GIF, AVIF, WebP, or PNG — no editor session. This is the programmatic
  integration surface for our agents (same shape as our other connectors).

## Fit against our system (priced per surface)

1. **Doctrine fit — strong.** Frolic is the Academy thesis arriving from industry: motion as
   readable, editable *code* that an AI writes and a compiler turns into the deliverable —
   representation chosen so agents can author it. Raw Lottie JSON is the counterexample (verbose,
   keyframe-dense, machine-written only). This is curriculum-grade material for Hadosh Academy
   independent of whether we adopt the tool.
2. **Study lane (this seat).** Two concrete uses: (a) digestion can study Frolic scripts as a new
   specimen layer — motion described in a language, not just frames; (b) a **substrate trial**
   for recreation: several catalogue techniques are natively Lottie-shaped (icon-scale
   micro-motion, HUD stamps, count-ups, loaders). Recreating 2–3 of them as Lottie/dotLottie and
   running the same five-lens wave against their HTML counterparts prices the substrate question
   with evidence instead of opinion. NOTE: the RECREATED tier's consumed artifact is ratified as
   recreation.html + scores.md — a second substrate is an HQ architecture decision, not a lane
   act. The trial informs it; it does not pre-empt it.
3. **Production (DLC / Academy videos).** Lottie elements compose WITH the HTML assembly layer
   rather than replacing it: a dotLottie element plays inside the HTML stage via the web player,
   stays parameterized (recolor/retime = our CONFIG discipline), is resolution-independent at
   phone size, and can also be baked to MP4/WebM where a flat element is wanted. Candidate
   element classes: animated icons, checkmarks/loaders, HUD stamps, small diagram accents.
   It is an **element factory, not a scene engine** — full scenes with typography systems,
   multilingual content, and diagram choreography stay in our substrate.
4. **Dashboards / web surfaces.** dotLottie's home turf: micro-interactions and state
   animations on the review boards Hadi uses daily — tiny files, native web playback.
5. **Creator MCP as a job tool.** If HQ approves a connection (custom-connector route), agents
   could generate/iterate elements conversationally inside existing jobs (recreation trial first),
   with outputs filed as artifacts like any other build.

## Bads / limits (priced, not waved)

- **The language layer is rented, not owned.** Frolic has no public spec or standalone compiler
  found; hand-editing lives inside their Studio. That runs against the Academy's own-the-harness
  principle. Mitigation: treat Frolic as THEIR internal representation; our source of truth stays
  in artifacts we own (HTML substrate; Lottie JSON where a Lottie element is adopted — text,
  diff-able, open standard, playable everywhere).
- **Scope ceiling.** The tool targets product micro-motion (loaders, icons, onboarding,
  micro-interactions) on small canvases. Nothing in the launch material prices scene-length,
  typography-led, or multi-element choreography work — our core production shape.
- **Quality unpriced.** Launch-week claims only; "Quality mode" output has not been measured
  against our bar (five-lens average ≥85, no lens <70). Adoption without a scored trial would be
  exactly the unverified-claim pattern this lane exists to prevent.
- **Cost shape.** Credit-based generations on separate plans; free tier is trial-sized. Any
  production-volume use is a spend decision for HQ/owner.
- **Platform dependency for generation.** The AI and the MCP are hosted services; if they change
  or vanish, generation stops (owned outputs already exported keep playing — Lottie runtimes are
  open).

## Proposed bounded trial (for HQ to charge or decline)

1. Recreation: pick 3 already-RECREATED HTML techniques of the Lottie-shaped class; produce
   Lottie counterparts (Lottie AI free tier and/or Creator MCP if connected); score both forms
   in one five-lens wave; file the comparison in the style library as a substrate note.
2. Production surface: embed ONE dotLottie element inside an HTML recreation/stage and verify
   phone-size playback + containment with the existing checks (PIXEL-UNVERIFIED limitation
   applies as it does to all lane artifacts).
3. Report to HQ with scores; substrate adoption, MCP connection, and any spend remain HQ/owner
   decisions, priced on the trial's evidence.

## Sources

- Owner-sent film: https://www.youtube.com/watch?v=jUEUaCFINro
- LottieFiles blog, "What is Lottie AI?" (2026-11-09, updated 2026-11-13):
  https://lottiefiles.com/blog/working-with-lottie-animations/what-is-lottie-ai
- Product: https://lottie.ai/
- Creator MCP docs: https://docs.lottiefiles.com/en/creator-mcp
- Help: "Create an animation with Lottie AI": https://help.lottiefiles.com/create-an-animation-with-lottie-ai

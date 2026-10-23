# Production Board — Design Log

Hadi's law: iterate at least 5 times, asking "is this the best you can do?"
after every round. Aesthetic brief: the year 2300 — calm, not noisy. A dark
void with light as the interface; glass layers and depth instead of bordered
boxes; typography as the hero; one luminous accent; the interface appears
when attention arrives and dissolves when it leaves. Banned: dense grids,
table layouts, skeuomorphic panels, default-framework look.

Build under design: `files/production-board.html`
(generator: `hidden_files/production-board/build_board.py`,
state: `hidden_files/production-board/production-state.json`).

---

## Round 1 — Structure: void, glass, focus, drawers, compare

What was built: the whole interaction model in one pass.
- Overview = a near-black void with two soft radial glows. Huge thin
  headline ("Everything in flight.") as the hero; counts as one quiet line.
- "Waiting on you" strip: the three open input requests as luminous glass
  rows (kind, title, what the answer governs) — clicking one routes
  straight to that piece's compare or focus view.
- Stage columns are borderless glass slabs; stages with zero pieces
  collapse to slim ghost columns. Cards are slim: title, one meta line,
  a 2px light-progress line, owner dot (glowing cyan = waiting on Hadi),
  compact OPEVC chip ("C2 · Verify · waiting on you").
- Focus view: one artifact fills the view — the video (portrait, glow
  shadow) or, for script-stage pieces, the opening beat set as a huge
  light line. Everything else lives in a toolbox rail (Checks / Script /
  Listen / Links / Comment) that opens a blurred glass drawer.
- Compare mode: Ep.2 v2 vs v3 side by side, autoplay muted, looping,
  drift-corrected sync, one shared play/pause pill.
- Style Lab section + Asset Library screen (6 real assets) in the same
  visual language.

Verdict — **No.** It is 2026-clean, not 2300 yet: the accent is spent twice
(two solid filter pills), the phone header burns ~40% of the first screen on
filter chips before any content, and the columns still read as boxes sitting
on a page rather than light in a void. What works: hero type, the quiet
counts line, the luminous request rows, ghost columns for empty stages.
Shots: `qc/r1-overview-desktop.png`, `qc/r1-overview-phone.png`.
Round 2 takes chrome away.

## Round 2 — Light discipline

Changes: selected filter pills lose the solid accent fill (glass + accent
ring instead — the accent is spent once, not twice); phone filters become
two swipeable one-line rows instead of wrapped walls; column glass softens
toward transparency so cards float rather than sit in boxes.

Verdict — **Closer, not there.** The phone's first screen now reaches the
actual requests (filter walls became two swipeable lines, the next chip
peeking at the edge to signal the swipe), and the accent now reads as light
rather than paint. But the overview is still a well-behaved page — the 2300
claim has to be proven in focus view, where one artifact should own the
screen outright. Shots: `qc/r2-overview-desktop.png`, `qc/r2-overview-phone.png`.
Round 3 judges focus.

## Round 3 — Focus view dominance

The artifact must own the screen: bigger video, title quieter, cycle
track as a light-line with one glowing node. Drawer typography pass.

Verdict — **Yes for focus.** The beat view is the first moment that feels
like 2300: one line of light in a void, everything else dissolved until
summoned. The video focus is close behind — the piece owns the centre,
the toolbox floats at the edge, the cycle track glows at the current node
("VERIFY · WAITING ON YOU"). Carried to polish: the desktop video could
grow a touch; the stage tag reads a little cryptic letterspaced.
Shots: `qc/r3-focus-desktop.png`, `qc/r3-focus-phone.png`,
`qc/r3-focus-beat-phone.png`. Round 4 judges compare.

## Round 4 — Compare as a single instrument

Labels dissolve into the glow; one shared control; verify both players
actually loop in sync at phone width. Drawers also become deep-linkable
(#/p/<id>/checks) so any input request can land Hadi directly on the
exact toolbox it needs.

Verdict — **Compare works, one geometry defect.** Desktop: both players
run the same frame in sync under one shared control ("PLAYING TOGETHER ·
LOOPING"). Phone is the money shot: v2's caption plate sits visibly on the
fire scene while v3 runs clean below it — the whole Action #19 argument on
one screen. The checklist drawer (deep-linked, `#/p/dir-01/checks`) reads
calmly: grouped stages, evidence in faint type, 19 of 27 at a glance.
Defect: on desktop the portrait videos sit inside wide black slabs — the
slab is sized, not the video. Shots: `qc/r4-compare-desktop.png`,
`qc/r4-compare-phone.png`, `qc/r4-drawer-checks-phone.png`.
Round 5 fixes the geometry and takes the final set.

## Round 5 — Final polish + the 2300 test

Fixes: compare cells sized by the video's own portrait geometry (no black
slabs); focus video grows slightly (58→62vh). Then the full final
screenshot set — overview, focus, compare, library, asset view — and the
closing judgment: is this the best we can do, and does it feel like 2300?

Verdict — **Yes, this is the best we can do today — and it does feel like
2300.** The evidence is in the frames, not in adjectives:

- `qc/r5-compare-desktop.png` — both players caught at the *same second*:
  left, v2's caption plate sitting on the fire scene; right, v3's single
  word "thousand" floating in open sky. The whole Action #19 argument,
  visible in one glance, under one shared control. The black slabs are
  gone; the videos size themselves.
- `qc/r3-focus-beat-phone.png` — a script-stage piece is one line of light
  in a void. Nothing else exists until summoned.
- `qc/r2-overview-phone.png` — the phone's first screen reaches real work
  in two quiet rows of glass; the accent is spent like light — one glow at
  a time (owner dots, the current cycle node, the progress hairline).
- `qc/r5-library-phone.png` + `qc/r5-asset-phone.png` — the library is the
  same calm: built once, used everywhere, every asset carrying its
  decision note and the pieces it lives in.

How we know it meets the brief: no bordered boxes anywhere (glass +
shadow only), no table or grid-of-panels energy, typography is the hero
on every screen, and every control is discoverable rather than displayed
(hover-quiet filters, edge toolbox, drawers and sheets that slide in on
demand and dissolve on close). Progressive disclosure held at every level:
overview → focus → drawer; board → library → asset.

Honest limits, logged for the next round (when the board goes live on
GitHub Pages): motion is CSS-eased, not physics-based; library previews
are still frames, not living loops; the asset view lets the library ghost
through its backdrop (reads as depth, costs a little readability);
Discussion threads are linked at repo level until per-item threads exist.

---

## The five verdicts, one line each

1. **R1 — No.** 2026-clean, not 2300: accent spent twice, phone header
   burned on filters, columns read as boxes on a page.
2. **R2 — Closer, not there.** Light instead of paint, phone reaches the
   work — but the claim had to be proven in focus view.
3. **R3 — Yes for focus.** One line of light in a void (the beat view);
   the video piece owns its screen; toolboxes wait at the edge.
4. **R4 — Compare works, one defect.** Same frame, two philosophies, one
   control — but portrait videos sat inside wide black slabs.
5. **R5 — Yes.** Geometry fixed, library calm, the accent spent like
   light. This is the version Hadi should see.

---

## Round 6 — The Layer Rule + the Law of Three (Hadi's confirmed system)

Hadi used v1 and rejected its disclosure model: the waiting-cards showed
title + "governs" description at rest (three descriptions competing at
once), and the focus toolbox rail was clipped outside his phone's width.
He confirmed a visual plan instead — the Layer Rule — and added the Law
of Three. Round 6 rebuilds the board to that system; nothing else about
the state model changed.

**The Layer Rule, implemented literally.** L0 at rest = names only: the
DOM does not even render a description until its card is tapped (the
interaction suite asserts the "governs" texts, every piece's next-move
text, and every playlist job line are absent from the page's visible
text at rest). L1: one tap reveals exactly one card — board-wide, a
single `openKey` — with its description + at most three options, in
place, while every neighbour stays a name. L2: a second tap on the open
card, or its enter affordance, opens the full focus interface. The rule
applies to every list: asks, pieces, playlists, assets, style-lab tests.

**The Law of Three, implemented literally.** The main page is now
exactly three sections: (1) **Current asks** — the three open input
requests across all projects; (2) **Projects & videos** — three pieces
at rest (closest to published first), the rest behind an expand
affordance; filters live *inside* the expansion, and the playlist
filter hides behind its own expansion toggle; (3) **Playlists** —
three at rest, all nine behind expansion. Each playlist is a repeating
job: expanding it speaks the job in one line and shows its current
pieces as nodes on a horizontal stage timeline (Idea → … → Published,
all ten stages always drawn), scrollable on phone, tappable into the
piece. Section headers carry zero actions; the page header carries
exactly three (Library, Style Lab, Discussions). The old stage-column
board, the always-on filter rows, and the Style Lab strip are gone from
the main page — the Lab is its own layered view now. Kept intact: the
void, focus view, drawers, the synced looping compare, OPEVC tracks,
deep links, and the video as its HTML-canvas artifact in focus.

**Interaction QC — the new evidence standard.** Screenshot QA is what
let v1's clipped toolbox ship, so round 6 drives the page in a real
headless-Chromium session at 390×844 and 1440×900 and *opens
everything*: 102 assertions (`qc/r6-interaction-report.md`), all
passing on the final build. Highlights: both compare videos verified
playing, in sync (drift 0.01s), and wrapping past their ends; every
drawer (Checks/Script/Listen/Links/Comment) opened and measured fully
inside the viewport on both widths; the timeline verified scrollable
(scrollLeft 0→300) with its container in-viewport; three separate
no-horizontal-overflow audits. First run was 93/100, and the failures
earned their keep — one was a **real bug no assertion had caught**: after
any focus visit, the toolbox rail stayed painted across the overview's
bottom (author `display:flex` defeats the UA `[hidden]` rule). The proof
screenshots showed it; the fix (`#rail[hidden]{display:none}`) plus a
computed-style guard assertion closed it, and the tainted frames were
re-shot and re-inspected by eye. A second real gap the tests exposed:
Ep.1's Listen drawer was a file link that would 404 on Pages — its
script-read is now embedded and plays in place.

Verdict — **Yes, this is the best we can do — and this time "best" is
measured, not asserted.** The rest frame (`qc/r6-rest-phone.png`) is the
plan Hadi approved, pixel for pixel: three sections, names only, the
asks as three big titles in the void. The L1 frames show one card lit
and its neighbours still names. The honest limits that remain: reveal
motion is still a fade, not physics; playlist node titles truncate at
phone width (the full title is one tap away, in the piece); the desktop
timeline fits whole at 1440px, so its scroll is a phone behaviour.
None of these compete with the two laws — and the laws are the design.

6. **R6 — Yes.** The Layer Rule + Law of Three, interaction-tested:
   names only at rest, one reveal at a time, three sections — and every
   control opened and measured, not photographed closed.


## Round 6 — addendum (same day): multi-view, stage-attached A/Bs, comment flow

Three confirmed inputs from Hadi landed after the round-6 build above
and were folded in before the re-push. The verdict at the end of the
round stands; this records what changed and the adaptations made.

**Multi-view principle (Hadi).** The per-piece JSON object is the
single truth; the board renders it through deliberate views the user
moves between: (1) the 3-section main page, (2) a **Kanban view** —
pieces as cards across the ten stage columns, names-only at rest, the
same L1/L2 behaviour as everywhere else (it reuses the one card
component, so there is nothing new to learn), (3) the per-piece
**Timeline** inside focus view — the piece's cycles as a scrollable
horizontal history: finished cycles read as past, the current node
glows, future cycles are ghosted, and each cycle carries its O·P·E·V·C
phase pips. Views are modes, not sections: the header now holds a
segmented **Board / Kanban** switch as ONE of its three controls
(the Discussions header button yielded its slot; Discussions lives on
inside asks and drawers), and Timeline lives inside focus, per the
brief. Adaptations, noted per instructions: the main page's playlist
stage-timelines and the focus Timeline are two different timelines
and stay distinct (playlist = where pieces sit across stages; focus
Timeline = one piece's own history). The future-ghost treatment is
implemented but no piece in the current records carries a planned
future cycle, so it is unexercised by live data — recorded honestly
rather than dressed up.

**A/Bs attach to stages/cycles (Hadi).** `input_requests` now carry
optional `piece_id` + `cycle` + `stage` (set on all three open
requests, in both the state file and its generator). A piece's
Timeline shows a marker where a cycle carries an open A/B or verdict:
the Ep.2 A/B sits on the v3's cycle 1 (`⚖ A/B open · Action #19`,
clicking opens the compare in place); the DIR verdict — attached by
stage, not cycle — marks each DIR piece's current cycle
(`✦ Input open · Action #16`, clicking routes home and opens the ask).

**Comment flow (Hadi's correction).** Archer never creates
discussion threads and never needs a GitHub login. Every item's
Comment affordance is now a **"Comment on GitHub →"** link to the
repo's new-discussion composer with the item's title prefilled
(`.../discussions/new?title=...`); Hadi, signed in as himself, writes
the first comment — the thread is born — and Archer only reads
threads afterward (public repo, readable without a login). No board
copy implies threads are created for him. The `?category=` parameter
was deliberately omitted: no Discussions category slug is on record,
and a guessed slug risks a dead composer; the plain fallback is the
same composer one tap earlier. The pushed README's feedback sentence
was reworded to match this flow. Also added in this push, on the
`dashboard` branch only: a root-level `index.html` that redirects
`./dashboard/`, so the Pages site root lands on the board.

**Evidence update.** The suite grew 102 → 132 assertions with the
fold-ins (Kanban open/reveal/scroll/enter, Timeline pips + both
marker styles + their click routes, both Comment-link checks, the
3-control header) and the final build passes **132/132** at both
widths (`qc/r6-interaction-report.md`, addendum). One timing flake
(compare loop-wrap, cold profile) failed once and passed on re-run
of the identical build; it is classified in the report, not hidden.

Verdict, reaffirmed — **R6: Yes.** One truth, three views, two laws;
every control opened and measured; comments flow out to GitHub and
decisions flow back — nothing pretend in between.

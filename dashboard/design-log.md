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


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

## Round 6 — addendum 2 (same day): media wiring, giscus, the gate generalized

Four more confirmed inputs landed before this push and are all in it.

**Media rule, wired.** Every piece now carries `youtube_id` and/or
`audio_file` in the state (and in `gen_state.py`, so regeneration
keeps them). Focus view embeds the YouTube player when an ID exists;
the compare does the same per side. Wired IDs — published/public:
intro v3 `7x-m1idAKPU`, WO-A `YvMMTOwXeGY`, WO-B `IRHIduGQun4`,
vocab v3 `xX4-60ily0Y`, Ep.1 i7 `sbLhrz2e6lw`, Ep.2 plate
`0JspT5oOgsk`, Earth One trailer `4ovgwcMxGxk`. Unlisted review
copies: Ep.2 v3 `U_PAgerHCSg`, DIR-01 `5l9Ix4ei1fc`, DIR-02
`OMGCSeKFPcY`, DIR-03 `mAKlyG8rItI`, WD-01 `qMkp23FBAGU`, SOA-01
`FqKaqYxvw_8`. NOT wired, deliberately: the stale Studio draft IDs
(the fixed copies replace them), and WS01 v2 + the Lesson 1 pair —
their public IDs were searched for in the state and every upload
package on 2026-10-23 and are recorded nowhere; they sit on the
Bench as media-pending until the IDs are supplied. Ear-stage audio
ships as files (`dashboard/assets/audio/`, 5 mp3s) and the Listen
drawer plays them in place from the relative link; the base64 embeds
are gone (page: 3.82 MB → 0.20 MB). The compare keeps sync-looping
where the platform allows: YouTube sides load through the IFrame API
as muted autoplaying players under one Play/Pause/Restart control
set with a 1.2s drift corrector; if the API cannot load, each side
falls back to a plain looping embed and the note on the compare says
so — recorded here per the brief, not hidden.

**Comments in place (giscus).** The outbound-link design (addendum
1) is superseded: the Comment drawer carries the giscus box itself.
Config, obtained from giscus.app's own categories API for this repo
(the config form could not be driven from this VM's headless browser
— its proxy tunnel refuses external sites — so the values come from
giscus's API + the public REST repo object, cross-checked):
repo `hadi-nayebi/hadosh-production-contexts`, repo-id
`R_kgDOVIbF0A`, category **General** (`DIC_kwDOVIbF0M4DJdf7`;
Announcements/Ideas/Q&A also exist — General is the open-posting
default), mapping `specific`, term = piece id, reactions off, input
on top, theme `transparent_dark`. Hadi installed the giscus app on
the repo 2026-10-23; Discussions was already enabled. Zero outbound
discussion links remain anywhere on the board (asserted).

**Context completeness — the audit.** Each seeded ask was audited
against (question / artifacts / record / comment box): all three
reveals now state THE QUESTION first, then governs, then context
lines (Ep.2: the law's origin + both copies playable in the compare;
DIR: the Oneness verdict + fix lines — stereo re-wrap, dynaudnorm
removal, parity 1.30/1.91/2.29 dB, label collisions, DIR-01 cover —
plus the stale-draft warning; teaser: v1's 10/100 and why, v2's
rebuild logic, where the text and audio live). Each piece's focus
view carries a waiting panel with the same question + context and a
Comment button — the box sits in the same view as the artifacts it
judges.

**The gate, generalized — checklist-gated visibility.** Every ask
carries an `ask_checklist` (per type: ab_test / verdict /
script_score), evaluated from evidence only. At this push: Ep.2 A/B
5/5 pass, DIR verdict 4/4 pass (its media item crossed the hour the
unlisted IDs landed), teaser script_score 5/5 pass — so all three
render as waiting. The DIR ask spent part of the day on the Bench
with "Artifact playable in focus" pending; the mechanism, not the
outcome, is the deliverable. Pieces show their stage gate
(open/blocked) and published pieces carry their checklist debt
visibly — the debt list at this push (open checks, of total):
intro-v3 15/28 · ws01-v2 20/28 · wo-a 20/28 · wo-b 21/28 ·
lesson1-poster 22/28 · lesson1-board 21/27 · vocab-v3 20/29 ·
eo-ep1-i7 14/30 (3 failing) · eo-ep2-v2 18/30 (3 failing). Debt is
visibility, not remediation — retro-QC cycles work it off.

**Thresholds + audience views + completion filters.** The generator
stamps a `gate` on every node: for asks and lab tests,
`gate.required` = the ids of the whole package checklist (the
threshold IS full crossing for anything that asks for his judgment);
for pieces, the name gate is `identity` alone (title/channel/
playlist/stage — all 30 cross it, so the catalogue never vanishes),
while the stage gate, debt, media and compare gates stamp separately
and bite on surfaces, not on the piece's existence. The two audience
views are the view switch itself: Board/Kanban = Hadi's view
(gate-crossed only), Bench = everything, missing named — the hash
carries the mode (`#/bench`). Completion filters (Completed /
Active / Pending — exactly three chips, inside the pieces expansion)
classify by checklist: all crossed = completed (4 pieces), none =
pending (0), else active (26).

Evidence: the interaction suite now runs **170 assertions, 170
passing** at both widths (report addendum 2), including data-driven
gate tests — the waiting set is compared against the state's own
derived visibility, so a future ask that fails its checklist fails
the suite if it ever renders as waiting.

## Round 6 — addendum 3: audio delivery (blocker + flag), live state

The five ear-stage mp3s are staged at `dashboard/assets/audio/` in
the push tree, and the state's `audio_file` fields point at them —
but they are NOT on Pages: the connector's snapshot pusher accepts
UTF-8 text only, the MCP exposes no blob/tree API, and this machine
holds no git credential. Rather than ship dead links, the generator
embeds the staged bytes into the page (`AUDIO_DELIVERY = "embed"`,
web-sized re-encodes kept under `assets-web/` so the snapshot stays
under the pusher's body limit — a first attempt at full size was
refused with HTTP 413). The Listen drawer plays in place, locally
and on Pages, from the exact files that will ship. When any
binary-capable path exists (app-token git push, or a connector
update), the follow-up is mechanical: push the five staged mp3s,
flip `AUDIO_DELIVERY` to `"file"`, rebuild, push. Recorded as a
tooling debt, not a design change — the media rule's intent (real
files, relative links) stands in the state and the staging tree.

Live at close of round: root redirect ✓, new board at /dashboard/
✓, new state served ✓, unlisted review copies resolve via oEmbed
✓. Pushes this round: `ebe1f463` (structure) → `d09477a9` (media /
giscus / gates) → `bd5daf75` (audio delivery).

## Round 7 — Exhaustion run state update (2026-10-23 evening, Archer)

Hadi driving; ordered ALL unblocked work exhausted. Landed in state this round:
- Ep.1 v3 HTML rebuild complete + QC-passed (cycle on eo-ep1-i7; replacement gated on the Ep.2 template verdict, #19).
- WD-01 + SOA-01 v3 HTML rebuilds complete (stage → qc; overflow defect impossible by construction — asserts + pixel scan, 0 violation frames).
- Ep.3 + Ep.4: scripts v2 (signature fixes, Ep.3 claim resolved honestly) + HTML-scene builds QC-passed (stage → qc; publish verdicts Hadi's).
- Script factory: SOA-02..05 Phase 0 + scripts (facts live-verified), speech teaser v2, WD-02..05 v2 polish (canon flags untouched), intro v4 draft (new piece, 31 total).
- Production contexts shipped: Ep.2 v3 scene (branch wordanim/eo-ep2-v3, 0b9aa4c), trailer v2 scene (wordanim/eo-trailer-v2, d53f790).
- Per-scene segmented renderer proven (one-scene fix ≈40s vs ~17 min).
- Published-debt audit: 171 open items (143 crossable now, 6 time-gated, 9 rebuild/blocked, 13 historical) — crossings in progress (retro-QC job), land next round.
- Process law added by Hadi: GitHub writes batched — local staging, ONE push per repo per round.

## Round 8 — context layer lands on the board (2026-10-23, late evening)

Hadi's directive: every element of every video — transcript line, scene count,
prose per scene, image changes, visual elements, packaging — carries a written
rationale from a named source (Hadi / rule / content / pattern / Archer), and
anything without one counts as random. Job Q1 audited all 31 pieces (497
elements); Job Q2 filled 46 of 56 random elements from the pieces' own records;
Job Q3 converted the Hadi-side gaps into 8 new board input spaces (Actions
#27–#34). Result: board context completeness 98.0%, randomness 0.020 (10
elements left: 3 await Hadi's answers below, 3 are build-time counts for
unbuilt scripts, 1 lives only in Studio, 3 belong to the rejected teaser v1).
State now carries a per-piece `context` object (scores, random elements named,
five structural parameters each marked follows / deviation-with-reason /
deviation-without-reason). Also this round: retro-QC crossings applied (49
checks crossed with evidence, 16 marked na with reasons — Job G); SOA-02…05
titles set from their drafted scripts; Lesson 1's public YouTube IDs recovered
from the 2026-10-22 A/B review record and wired in; trailer scene link fixed
to v2. New ask kind: "question" (canon rulings + the Lesson 1 pair).

## Round 9 — context COVERAGE: the denominator gets audited (2026-10-23, night)

Hadi's challenge: Q1 counted the decisions already listed (~16/piece) — but
what about decisions never surfaced at all (his example: subscribe/like symbol
overlays, pause lengths)? Job R1 built a reference decision model (73 classes;
practice-triangulated): a short of ours embodies ~240–450 auditable decisions
(Tier 1+2). Job R2 re-audited three pieces instance-by-instance: eo-ep2-v3
406 instances, 87.2% covered · dir-01 225, 84.0% · vocab-v3 137, 81.0% — and
found 3 record-vs-deliverable MISMATCHES (the context layer as a verification
instrument): Ep.2's end-card tease carried Ep.3's old working title (FIXED,
re-rendered, verified on the delivered file: "OUTLIVED", −14.02/−1.82), the
DIR annex named wrong ghost labels (record corrected), vocab's spec promises
~3.5s/language vs ~2.0s delivered (Hadi's call — Action #40). State now
carries `context_v2` for the three audited pieces (instance coverage,
mismatch count, absent classes open). Job R3 packaged the 9 taste decisions
the model located as Actions #35–#43 — #35 is the engagement-overlay
adopt-or-waive A/B with real comparison clips (the class had 0 instances in
every piece ever built and was never decided). Ten absent-by-default classes
are on record (SFX layer, publish time-of-day, loop seam, auto-captions…),
held open on the Bench until decided or consciously waived.

## Round 11 — review copies live + bestness audit lands (2026-10-23, late night)

All five unlisted review copies uploaded and wired in (Ep.1 v3 gIgK52z_TB4,
Ep.3 5qK98qCAkA0, Ep.4 sygadAbKPg8, WD-01 v3 5fW7G5UvRoM, SOA-01 v3
3B7Bvbc30rg); Ep.3/Ep.4 publish verdicts are Actions #44/#45; #33 is fully
ask-ready now that Ep.4 plays in focus. Hadi's BESTNESS DOCTRINE (said =
shown; no obvious improvement left unmade) produced Job B1: 10
said-but-not-shown moments across 11 built pieces (intro v3's context lines
are the founding case), logged as open bestness cycles on the affected
pieces, and a full intro v4 visual plan (real description + repo screenshots
at the lines that name them). One script decision rides with it — Action
#46: the proposed "point your agent at it" line for intro v4 (full vs
compact vs none, runtime ledger shown).

Round 11 addendum — Studio sweep (read-only, 2026-10-23 late): WS01 v2's
public ID recovered (4C2Tfyx2JYc, 8 views); intro v3 at 9 views, 85.0%
average viewed, +1 subscriber; Lesson 1 poster/board at 11/14 views;
vocab v3 at 26 views with its live description recovered verbatim into the
context annex. Scoreboard and link checks crossed with that evidence.

## Round 12 — the board plays the HTML scenes (2026-10-24)

Hadi's phone hit YouTube's bot wall on the board ("Sign in to confirm
you're not a bot" — signed-out embeds are walled, unlisted copies
hardest). His ruling, same night: the board must PLAY THE HTML SCENE
itself, not a rendered MP4 and not a YouTube embed. The scene is the
actual production file (H-01) — self-contained text with embedded audio,
so it pushes through the text-only connector and plays from Pages with
no sign-in. Supersedes the unlisted-embed review scheme for scene-built
pieces; rendered MP4s live on YouTube only (publishing) + locally.

Implementation: scenes staged under dashboard/scenes/ (8 pieces:
eo-ep1-i7's v3 rebuild, eo-ep2-v3, eo-ep3, eo-ep4, eo-trailer v2, wd-01
v3, soa-01 v3, intro-v3). The focus player prefers the scene (iframe in
the 9:16 frame + caption "Playing the HTML scene — the actual
production file" + a Watch-on-YouTube link when an ID exists), then the
YouTube embed, then the local render. State carries "scene" per piece;
build_board's SCENES map mirrors the VIDEO pattern. A scene counts as
the web-playable copy everywhere media is gated (media_missing,
compare visibility). The Ep.2 A/B compare goes simple side-by-side for
this pair — v3 plays its scene, v2 plays its YouTube copy; the dual-sync
controls retire for scene pairs (nothing to sync — each side plays
itself) and stay intact for any future non-scene pairing.

KNOWN GAP: the DIR trio has NO scenes — those pieces were rendered in
Python before the scene pipeline, so they still play via YouTube embed
tonight. DIR scene rebuild is queued; until it lands, #16/#38/#43 carry
that caveat.

Round 12 addendum — the second wall (same night): the giscus comment box
demands "Sign in with GitHub" inside the phone's in-app browser, so the
feedback door was walled too. Every ask reveal, the focus "Waiting on
you" panel, and the Your-input drawer now carry a first-class no-sign-in
path — "No sign-in needed — answer in your chat with Archer: just send
this item's number (#NN) and your pick" — and the giscus box is demoted
below it under the heading "…or comment here (needs GitHub sign-in)"
(it still works when he's signed in on desktop). Verdicts by stable
action number in chat are the primary channel; Archer logs/closes them
against the board items.

Round 12 addendum — chunked scene delivery (Job S2, same night): round
12 as built could not ship. The GitHub connector rejects any single
file over 1,779,898 bytes (measured at the push attempt), and every
scene HTML is 2–7 MB — so the monolithic scenes under dashboard/scenes/
could never land, and the remote branch still held round 11.

Design: split each scene at build time into connector-safe text
chunks of at most 1,500,000 bytes (scene_chunks.py, driven by
stage_push.py). UTF-8 safety rule: a cut lands only immediately before
an ASCII byte (< 0x80) — never a UTF-8 continuation byte — so every
chunk is independently valid UTF-8 and concatenation restores the
source byte-for-byte; the chunker asserts per-chunk decodability and
sha256(concat) == sha256(source) on every build. Parts are staged as
dashboard/scenes/<base>.p00, .p01, … — part counts: eo-ep1-v3 4,
eo-ep2-v3 3, eo-ep3 3, eo-ep4 3, eo-trailer-v2 2, wd-01-v3 5,
soa-01-v3 5, intro-v3 2 (27 parts, 33,366,253 bytes total). A tiny
scenes/manifest.json maps each scene file name to {parts, sha256,
bytes} — the verification record; the player itself takes the part
count from the page data (the "scene_parts" field build_board stamps
from the same chunker, next to the existing "scene" base name).

Player: scene iframes no longer point at the scene file. On first
open, the board fetches the parts in order (relative URLs from the
dashboard folder), joins them, builds a Blob (text/html) and sets the
iframe src to the object URL; object URLs are cached per scene for
the session. A quiet "Loading the scene…" line fills the frame until
the scene document loads. No page reference to any monolithic scene
URL remains. Focus player and the compare's v3 side both go through
this loader; captions, the Watch-on-YouTube link, and the no-sign-in
chat path are unchanged.

## Round 13 — structural verdicts on the records (2026-10-24)

JOB STRUCT-2-APPLY landed a chosen story structure, with its reason, on
all 18 board records — the structure layer of the decision model stopped
being implicit. The same round absorbed two verdict outcomes into the
records: Action #16 (the DIR trio's i2 scripts) was answered by Hadi —
NOT approved — and closed, and Action #43 (the DIR geometry proposal)
was invalidated by its own audit and closed. Ask #36 was split so its
parts could be judged separately, and #38 was re-based onto the two
pieces its specimens actually live in (ws01-v2 + wd-01).

## Round 14 — SOA-01 closing bridge (2026-10-24)

SOA-01's scene gained its closing-bridge edition and DIR-01 gained its
script cycle note. The round landed in three sub-batches (board, then
state + manifest + first scene part, then the remaining parts), and the
first sub-batch briefly preceded its state — a half-applied window Hadi
hit on his phone. The lesson became standing law and shaped every round
since: rounds ship consolidated, index + state + manifest move as the
first atomic unit, and a round is never left half-applied.

## Round 15 — scenes actually play on the phone (2026-10-24)

JOB BOARD-PLAY fixed phone playback properly: the scene player fits the
whole stage inside the player (fit-to-player transform, house border
visible, no page-level scrolling to reach the controls), the focus
layout stacks on phone widths, and the tap-to-play overlay forwards to
the scene's own play button instead of swallowing the tap. Suite r17
479/479. The push was index-only — state and manifest were already
byte-identical to live — and verification was byte-identity plus the
phone suite against the identical bytes.

## Round 16 — the consolidated round (2026-10-24)

Hadi's one-package directive: one packaged round per work session,
fired by the main chat with his approval taps, never a drip of
per-file pushes. Contents: the printing teaser v2 integrated as a
board piece with Action #20 re-pointed at the built video; JOB
ASK-GATE's four judgment fields on every ask checklist (objective
stated / alternatives exhausted / value vs blocking footprint /
specimen verified playing), with readiness derived generically from
them — an ask that fails the judgment gate waits on the Bench with the
missing field named, which is where the two bare canon asks (#27/#28)
sit by Hadi's own ruling; SOA-02/04/05 scenes staged at QC stage.
Suite r18 499/499; final head e944fdeb.

## Round 17 — decision format, the mandate payload, and zero non-HTML (2026-10-24)

The biggest round so far, shipped in two pushes in one sitting (b24,
then b25; final head 5441721c, verified byte-identical staged == repo
== Pages both times). It consolidated everything staged since round 16:

- JOB BOARD-INFO: every piece carries an info panel — verbatim
  objective, weighted-randomness score, decision counts, and the
  checklist split into waiting / bookkeeping / open — so the numbers
  Hadi judges by sit on the page where he decides.
- JOB ASK-FORMAT: the decision-format law applied to every ask on the
  board — one plain line of what this is, the question in one
  sentence, the options side by side with their full exact text and
  what each pick does, Archer's recommendation, and how to answer.
  Process prose no longer stands between the reader and the choice.
- The 4–5-hour mandate payload: Track A (SOA facts refreshed to the
  current Gallup 52% / 15% everywhere; the Non-HTML counter built and
  shown on home and Bench; cold-audit fixes F1–F5), Track B/C (the
  v4 scenes wired as the asks' specimens; new asks #55/#56/#57), and
  JOB BOARD-WIRING's scene backfill, which took the census to
  23 playable · 23 HTML · 0 non-HTML.
- JOB B24-EP4-REFRESH: the corrected Ep.4 v4 scene (scrim ordering
  fixed, full ink depth restored) replaced the first render.
- b25: OBS-01-A gained its decision ask (Action #59), and the stale
  pointers left by #16's closing were repointed (DIR trio → #53;
  vocab v3 → #40/#41).

Suite: r31/r32 — 860/860, R21 gate green.

## Final-form pass — b26 (2026-10-25)

Hadi, driving: "do everything remaining that needs to be fixed… make
the dashboard into its final form… so that when I'm reviewing I'm
reviewing almost the final forms." JOB FINAL-BOARD audited the live
round-17 build end to end — every view, all 31 focus pages, all 25
open asks — and fixed everything fixable without his verdict:

- Stale version pointers corrected: Ep.2's replacement is the v4
  build everywhere it is named (piece next-move and the v3 piece's
  title now read v4); Ep.1's next move names its real gate (Action
  #54, the v4 script — the superseded v3 rebuild no longer named).
- Evidence that described the pre-round-17 world corrected: the DIR
  trio's ear-checklist lines now record that #16 was answered (not
  approved, closed) instead of "queued/pending"; four specimen
  evidence lines now say the build they verified is live as round 17;
  the Ep.2 compare evidence no longer claims a YouTube embed — both
  sides play scenes.
- Records that lagged their own filed evidence brought current:
  ws01-v2's 48-hour scoreboard read (filed 2026-10-24) is marked read
  with its numbers; WO-A/WO-B next moves record the first A/B
  comparison read as done; wd-01 and soa-01 next moves describe their
  actual state (QC-passed, in the Tuesday set) instead of a rebuild
  that already happened.
- Two publish asks' action references normalized to the board's
  "Action #NN" form (#44, #45).
- The footer now tells the truth about how verdicts arrive: through
  the chat with Archer — the Discussions wording dated from before
  the chat-verdict doctrine.
- This log itself was two rounds behind; rounds 13–17 are recorded
  above from the push manifests and job records.

Suite r33 on the staged b26 tree (see the job record for the count);
the Bench still holds exactly the two gated canon asks. Staged only —
the main chat fires b26 with Hadi's approval taps when he parks.

## Top-3 focus (Hadi's rule, 2026-10-25 — JOB TOP3-FOCUS)

Twenty open asks were overwhelming. The home asks surface now shows
only the TOP 3 crossed asks, in rank order, in full Decision Format;
the rest park under a collapsed "N parked" head as compact rows
(number + title) that open in place, and surface as the ranked ones
clear. The ranking is state data — a `focus_rank` field on the ask
record, read by the render — so promotion is a state edit (close the
cleared asks, re-rank the pool), never a code change. Initial ranking
(Archer's, by the priority doctrine — the Monday-build unlockers):
#54 Ep.1 v4 script = 1, #53 Direction trio scripts = 2, #29 SOA-03
fact line = 3. The counters read focus-first ("3 waiting on you" +
the parked count); piece pages keep their own asks; the Bench is
unchanged (the two gated canon asks are holds, not part of the pool).
Two records were created so the ranking has real asks to point at:
#54 and #53 existed only as piece next_move lines — req-ep1-v4-script
and req-dir-trio-scripts now carry their full Decision Format blocks,
grounded in the v4 script draft (C1–C5) and the three rebuild script
docs; as a side effect dir-02 and dir-03 focus pages gain the #53
wait panel (they had none). Waiting pool: 20 crossed asks — 3 in
focus, 17 parked. Folded into the same staged round as the
final-form pass; still staged only, fired by the main chat with
Hadi's taps.

## Round 18 — the badge gate (Hadi's rule, 2026-10-25 — JOB BADGE-GATE)

A question now has to EARN its place in front of Hadi. Every ask
carries an eight-item dyslexic-friendly badge checklist (one plain
line says what this is; the question is one sentence; options side
by side in full with what each pick does; the recommendation before
any context; no process jargon before the choice; the specimen shows
at phone size; decidable in under five minutes, measured; the deep
link lands on this ask), and the badge is DERIVED by the generator,
never hand-set: three items are verified computationally (the WHAT
is one line of ≤35 words; the question carries exactly one
sentence-ending mark; the measured load — decision-block words at
the 120 wpm planning rate plus the recorded specimen seconds —
totals under 300 s). The home focus draws only from badged asks;
parked asks without the badge carry a plain "not ready yet" marker.
All 22 open asks were iterated against the checklist (wording only —
no substance, option, or recommendation changed): 20 earn the
badge. Two stay honestly unbadged, both on the specimen item: #33
(the Ep.4 ink choice is visual and the ask itself carries no frame)
and #35 (the subscribe-overlay B side cannot be seen on the board —
its bell loop is a local file; the ask's earlier claim that both
loops play in the compare did not survive verification and was
removed, and #56's answer line was corrected to its own
recommendation, B).

The same round adds the per-ask deep link: #/ask/<request-id> opens
the board with that exact ask expanded in place — focus, parked, or
Bench — so a chat link can never land on the home page by mistake
(the failure Hadi hit with #54's link).

Folded in the same day (Hadi, ~12:03 ET): the EDITOR PASS badge for
transcript-bearing asks — script approvals, re-scores, publish
calls, spoken-line verdicts (11 of the 22). Five items: a written
editor simulation whose objections are resolved or honestly
carried; a pause map whose sizes come from the researched doctrine;
no question answered in the same breath; a measured navigation
budget (~10%, 20% hard cap); one learning sentence the piece
teaches. A transcript-bearing ask without it does not surface in
the top 3. First audit: none of the 11 could earn it — no editor
simulation existed for any version, and the pause-map item stood
pending-doctrine. JOB EP1-EDITOR-PASS then landed the doctrine,
the Ep.1 pause map, and Editor Simulation #2 = PASS on the v5
draft, so Action #54 was re-pointed from v4 to v5 (11 performance
lines, 204 words; content 82 / delivery 78 against v4's 80 / 35)
and carries the first earned editor badge, back at focus rank 1.
The other ten stay parked on the editor marker with their missing
items named; their turns follow Ep.1's pattern. Focus as staged:
#54 (v5 script) + #29 (SOA-03 fact line); #53 parks on the editor
badge despite its dyslexic badge. Suite qc/r38 on the staged tree:
876/876, exit 0 — R21 green, census 23 playable / 0 non-HTML. Staged
only as b27; the main chat fires it without a "go" pause.

## Round 19 — b28: #53 returns with its editor badge; WD builds folded (2026-10-25)

JOB DIR-EDITOR-PASS gave the Direction trio its Stage-2 delivery
layer: the v2 drafts (files/short-dir01-rebuild-script-v2.md,
-dir02-, -dir03-) inherit the reworked Stage-1 content word-for-word
and add a recorded pause map (8,400 / 6,900 / 6,300 ms), intonation
intent per line, and Editor Simulations #1 + #2. Simulation #2
returns PASS on all three (delivery ≈76 / 74 / 78, up from
≈40 / 38 / 45), so Action #53's editor badge is EARNED and the ask
returns to the focus at rank 2 — the focus is again exactly three:
#54 (Ep.1 v5), #53 (DIR trio v2), #29 (SOA-03 fact line). Carried
honestly in the ask's record: the navigation item passes on the
hard cap, not the target — DIR-01 is clean at 11/136 = 8.1%;
DIR-02's closing referral recounts to 13/128 = 10.2% (the badge-gate
audit's 0% does not survive the recount) and DIR-03's to 12/88 =
13.6% by the full-line count, both recorded as content note CN-1; a
1–2 word referral trim is Hadi's content call inside the ask
(Option B), not an editor-pass fix. DIR-03's Projector capture
stays a build-phase dependency (CN-2, DR-EVIDENCE). The ask's load
was recomputed from the v2 drafts and re-stamped: decision block
235 words = 118 s + specimen 176 s = 294 s, under the 300 s bar.

The two Word Definitions builds fold in from their packets: WD-02
'What Is a Prompt?' and WD-05 'What Is a Tool?' move from script
stubs to full qc-stage records (checklists 17 pass / 1 bookkeeping /
5 waiting / 3 open of 26, and 15 / 2 / 5 / 5 of 27; scene element
audits 56/56 and 65/65; WD-05's L6 Skills-vs-Tools ruling and
cover-phrase flag ride as recorded open items). Every audio figure
in the three WD records is the POST-silence-fix measurement from
JOB TEMPLATE-SILENCE-FIX (WD-01 −14.34 / −1.01, WD-02 −14.20 /
−1.55, WD-05 −14.27 / −1.01; durations unchanged), and WD-01's
cycle log gains the CB-01 silence-fix cycle. Both new scenes are
wired (SCENES + SCENE_SOURCES) and play on the board; all three WD
scene masters were re-embedded with the FIXED programme audio in
this round (the files/ HTMLs still carried the pre-fix holed MP3s)
and their board editions regenerated — verified on the staged
bytes: no silence run ≥0.25 s below −50 dBFS anywhere in the three
staged scenes. Suite qc/r39 on the staged tree: 916/916, exit 0 —
R21 green, census 25 playable / 25 HTML / 0 non-HTML. Staged only
as b28; the main chat fires it without a "go" pause.

## Round 20 — b29: catalogue rebuilds on the record; Ep.2's dwell stop; two specimens carried (2026-10-25 — JOB B29)

The catalogue-application round reaches the board. The seven
fastlane rebuilds (WD-01/02/05, SOA-01/02/04/05 — carry-over dwell
under amended C-05(a), V-17 re-measured clean, audio byte-identical)
gain a verify cycle each with the measured numbers; SOA-01's audio
evidence is corrected to the fresh −1.17 dBTP peak, and SOA-01's one
residual (phrase #9 hold 0.46 s) is recorded as ACCEPTED —
bound-capped, the form's maximum — matching the acceptance Archer
wrote into QC v2.17's C-05 row and the craft-baseline CB-14
register in the same job. The three SOA scenes' stale in-scene
DR-BRIDGE wording ("silent bridge") is corrected in the masters:
the bridge is a no-narration span the bed carries under (CB-01);
PLAN + embedded audio proven identical per file.

Ep.2 v4 gains two cycles. First, the catalogue §3 backing-chip
re-render folds in (the 10 failing amber words now 5.85–6.41:1;
cover rebuilt; PLAN + audio proven unchanged). Second, the honest
stop: JOB B29 rebuilt the v4 PLAN through the ported carry-over
builder — every plan invariant held and plan dwell fell 44 → 1 —
but the delivered-file render QC caught the EO engine rendering
only the first phrase whose window contains t, so carried-over
holds suppress the next phrase's words past their spoken starts.
The rebuild was stopped, the delivered files restored
byte-identical, and the shipped v4 stands as an open C-05(a) miss
(44/56, median 0.38 s), recorded not-accepted in the CB-14
register. The engine's overlap behaviour is now an explicit open
decision on Archer's side of the record, and it gates every EO
carry-over (the Ep.1/Ep.3/Ep.4/teaser builders share the pattern).

Two parked asks gain their specimens. #33 (Ep.4 ink verdict) now
carries the measured contrast evidence in its record: rust #92400e
on the gold field measures 2.52:1 against the 3.0 floor — the
pairing fails, not the ink (it passes at 3.85–13.10 everywhere
else on the card). Its badge stays open: the image-in-ask half is
a listing-time apparatus step, recorded as such on the item.
#35 (engagement overlays) gains a specimen of its own: a new board
scene (scenes/spec-ep2-endcards.html) carrying both 3.0 s end-card
loops byte-for-byte, side by side, rendered at the top of the
ask's Context & record — the board's first ask-carried specimen
scene (generator stamps specimen_parts from the record's
specimen_scene; renderAll hydrates scenes on the home view too).
With the bell actually playing on the board, #35's specimen badge
item passes and the ask stands badged in the parked pool; focus
ranks do not move (#54 / #53 / #29 stand). A G-12 pre-push sweep
re-verified every staged field against the on-disk records before
staging (count in the JOB B29 report). Suite + phone-size eyeball
on the staged tree are recorded in the same report. Staged only
as b29; the main chat fires it without a "go" pause.

## Round 21 — b30: Ep.2's dwell fix ships — the engine overlap repair (2026-10-25 — JOB EO-ENGINE-OVERLAP)

Round 20 recorded the stop: JOB B29's carry-over plan for Ep.2 v4
measured clean on paper (dwell 44 → 1) but the EO scene engine
rendered only the first phrase whose window contains t, so the
render broke word-sync and the delivered files were restored
byte-identical. This round carries the repair, and only that.

The first-match loop is removed from all nine EO build sources
(the shared `engine_v4.js` and the Ep.1 / Ep.2 / Ep.3 / Ep.4 /
printing-teaser / trailer builders, including the Ep.2 builder's
embedded engine copy): every phrase whose [start, end) window
contains t now renders, the two co-visible phrases sit in
alternate bands so they never share one, and z-order follows
phrase start — the semantics the fastlane template already
proved in the catalogue rebuilds. A permanent guard joins the
checklist as **C-06 BOUNDARY SYNC** (v2.18): a boundary probe on
the scene plus a pixel proof on the delivered file, required on
any build whose plan carries overlapping phrase windows; the
missing compartment is recorded in the decision model as 9.12
(phrase co-visibility semantics).

Ep.2 v4 is re-rendered through the fixed engine from B29's plan
— only the 55 carry-over phrase ends and the engine change;
audio stream, word starts, prose, duration and frame count are
byte-invariant — and the delivered file passes the full proof:
DOM probe and delivered-file pixel proof both 56 boundaries /
55 overlaps / 0 failures (the DOM probe fails 119 checks on a
negative control with the loop restored); dwell stands at the
one named residual (#55, the final phrase, content-end-capped —
craft-baseline CB-14 register), median hold 1.46 s; V-17 clean
(amber 5.85–10.27:1; `dies;` 4.10:1 at rendered geometry; cover
6.08 / 5.81); loudness unchanged at −14.02 LUFS / TP −1.82 dBTP.
Ep.2's record gains the closing verify cycle (n=6); the C-05(a)
miss recorded at b29 is closed, and the piece stands ready for
the publish wave. The pre-fix render is kept in files/ as
`*_postchip`. No other record changes; focus ranks do not move
(#54 / #53 / #29 stand). Staged only as b30; the main chat fires
it with the b29 round, without a "go" pause.

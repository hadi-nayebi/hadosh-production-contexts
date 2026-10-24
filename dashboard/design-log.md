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

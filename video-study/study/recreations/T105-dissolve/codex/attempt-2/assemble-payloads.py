#!/usr/bin/env python3
import pathlib
A = pathlib.Path("/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T105-dissolve")
SHA = "425553f3738f1e8803047c51ddbabd3ccb5e5e79e323bb67ea10f24446ba74fd"
blind = (A / "build-record-blind-attempt2.md").read_text()
fit = (A / "fit-table-attempt2.md").read_text()
rec = (A / "recreation.html").read_text()

FACTS = """NEUTRAL TECHNIQUE FACTS (Packet #5, School of Motion, digest T07 + register T105): Dissolve, at about 23-30 s in an 81 s film. Mechanics: the webpage scene cross-fades into the logo imagery over roughly a second (packet wording) - both scenes coexist at partial opacity at the midpoint - ending on the mark. The article's when-to-use: passage of time, change of location, flashback/retrospection, scene-end fades. Why it works: the overlap duration IS the meaning (lingering = time passing). Evidence: ev/26.0-dissolve-mid.jpg, ev/29.5-dissolve-logo.jpg, clips/25.0-dissolve.mp4. The build record's own finer census (0.05 s sampling, luminance proxy) measured the actual blend at about 0.22 s with midpoint at source about 30.68 s and NO midpoint hold, and the packet clip ends before the blend executes - those measurements are part of the packet below; price the build against the technique's mechanic (a cross-fade with a co-visible midpoint), with the measured facts as evidence."""

LENSES = {
"motion": """YOUR LENS: motion fidelity - does the recreation's movement equal the technique's described movement? Price: the single-clock cross-fade (both layers driven by ONE progress value), both scenes co-visible at partial rendered weight at the midpoint with no cut and no intermediate state, phase exclusivity outside the dissolve (the lawful overlap exception), the declared loop-fade return, and the compositing behaviour at midpoint (rendered weights, as the build record models them - price them as you find them).""",
"timing": """YOUR LENS: timing/tempo - phase timings vs the original's measured window, priced against the named t=0 allocation basis. Price: the measured census in the build record (dissolve about 0.22 s active blend, midpoint source about 30.68 s, no midpoint hold), the dissolveMs 250 default against that measurement, the hold durations as an allocation inside the 14 s cycle, the smoothstep trajectory vs the sampled opacity curve (proxy: 1.00 / 0.93 / 0.61 / 0.45 / 0.13 / 0.00 at 0.05 s steps), and the loop-fade return's duration relative to the forward dissolve.""",
"purity": """YOUR LENS: construction purity - parameterized construction vs tracing/embedding (a refusal-class judgment). Price: whether every element is generated in code from CONFIG, whether any specimen media, frame, or traced redraw is embedded or referenced, the asset inventory, and whether the scene fixtures are generic constructions or copies of the specimen's artwork.""",
"reusability": """YOUR LENS: reusability/parameterization - could production drive this machinery from CONFIG alone for a different piece (different scenes, different dissolve duration, different palette)? Price: CONFIG coverage of content/timing/palette/geometry, the swap-test evidence in the build record (labels, dissolveMs to 2000, fieldA palette, structural kind swap, residuals derived and non-negative), the in-code validation behaviour, any literal or unapplied key you can find in the source, and the config-census leg filed in the build record.""",
"readability": """YOUR LENS: readability - formed text legible at phone size (360 px stage) during its reading state. Price: the fit table's measured ink widths/heights and margins for every subject text element, the about-11 px ink-height floor, the wordmark/label hierarchy, text legibility during the holds, the pairwise-overlap row block in the fit table, and what happens to both scenes' text at the dissolve midpoint (partial opacity is the technique - price whether the incoming scene's subject reads as it arrives and whether the outgoing scene's fade is clean, not whether midpoint text is at full contrast).""",
}

for lens, lens_text in LENSES.items():
    payload = f"""# Codex scoring wave - lens run (practice re-score), T105 attempt 2
Standing header: (1) Consumer: practice job's Verify (tier recommendation: RECREATED requires a five-lens average at the bar AND no lens under the floor) + the cycle's Condense cure list; the decision priced is whether this attempt is RECREATED-tier on THIS lens and what the next attempt must cure. (2) Working record: the artifact directory hidden_files/study/recreations/T105-dissolve/ (codex/attempt-2/ returns). (3) Your return must end with `SCORE: <integer>` and a `BODY-WRITE:` line naming what it filed (read-only run: "BODY-WRITE: none (read-only run)").
Scores are integers from 0 to 100.
Binding: recreation.html SHA-256 = {SHA} (identical for all five lens runs of this wave).
Score-blind packet: you see no prior score and no other lens's return.
Schedule basis: t=0 allocation (named in the build record) - the dissolve lifecycle is re-based to build zero inside a 14 s cycle; price timing against that named basis and the measured census the record carries, not against segment anchoring.

{FACTS}

{lens_text}
Score ONLY this lens, 0-100, with priced findings. Judge the recreation source + the score-blind build record + fit table below.

===== build-record-blind-attempt2.md =====
{blind}
===== fit-table-attempt2.md =====
{fit}
===== recreation.html =====
{rec}
"""
    out = A / "codex" / "attempt-2" / f"payload-{lens}.txt"
    assert not out.exists(), f"create-once violation: {out} exists"
    out.write_text(payload)
    print(lens, len(payload))

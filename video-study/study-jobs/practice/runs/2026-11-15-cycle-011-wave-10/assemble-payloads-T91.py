#!/usr/bin/env python3
"""Assemble the five lens payloads for T91 attempt 2 (allowlist only) and
anchor-scan the assembled files. Create-once: refuses to overwrite."""
import os, re, sys, hashlib

ART = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T91-qa-quote-cards"
RUN = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/runs/2026-11-15-cycle-011-wave-10"
OUT = os.path.join(ART, "codex", "attempt-2")
os.makedirs(OUT, exist_ok=True)

source = open(os.path.join(ART, "recreation.html")).read()
sha = hashlib.sha256(source.encode()).hexdigest()
record = open(os.path.join(ART, "build-record-attempt2.md")).read()
ownchecks = open(os.path.join(RUN, "own-checks-T91-attempt2-output.txt")).read()

HEADER = """Consumer: the practice seat's Verify step for this attempt, and the artifact's permanent scores record.
Decision priced: whether this build of the Q&A quote-card technique is faithful and reusable enough to leave the practice pool, judged on the single lens named below.
Working record: this payload is the whole record for the run — the neutral specimen facts, the score-blind build record, the own-check packet, and the full recreation source bound to sha256 {sha}.
BODY-WRITE: return your findings and end with the score line; the consumer files your return verbatim.
Scores are integers from 0 to 100. Judge only the lens named below, on the build in front of you.
""".replace("{sha}", sha)

FACTS = """## Neutral specimen facts (observations only)
Technique: full-screen quote cards anchoring answers inside a Q&A chapter of a 2037 explainer video. Card anatomy: a QUOTE tag chip at the card's top-left, a large gold open-quote mark at the quote's left, the quote in large serif italic, and an attribution block at the foot (gold vertical rule, speaker name, role and year line). A heads-up display (year + day line over a large clock) stands over the card.
Observed segment (source 498-512s, 14.000s; segment time t=0 is source 498s):
- One card (speaker: Sal Khan) is present and settled in form from t=0 through t=10: frame, tag, mark, and attribution all present from the first frame; the quote shows 1 wrapped line at t=0.
- The quote grows inside the settled card: 2 lines at t=2, 4 lines at t=8. The displayed text at t=8 continues past the first sentence (about 39 words visible); the card's first sentence (22 words) is verified character-for-character: "I'm here with my son, and I'd love you to tutor him on this math problem, but don't give him the answer."
- The card is gone by t=12 (a different graphic stands in its place; the HUD is unchanged). Its exit therefore brackets between source 508s and 510s; no frame resolves the exit's shape or exact duration.
- Card bounds on the 1920x1080 source: about x 205-1725, y 155-1010 (10.7-89.8% of width, 14.3-93.5% of height).
- The HUD ("2037 · A POSSIBLE TUESDAY" over "19:00") is unchanged across the card's whole life and still stands at t=12 over the next graphic.
Chapter and chronology: the Q&A chapter runs 05:44-08:38 in the source; the three recordings appear in transcript order Schneier [05:51], Berners-Lee [07:15], Sal Khan [08:16]. Word counts (counted from the build's card texts): Schneier quote 10 words, Berners-Lee quote 10 words, Sal Khan quote 22 words. Attribution token counts (speaker + role + year): Schneier 8, Berners-Lee 7, Sal Khan 6.
Evidence limits (priced knowingly): only the Sal Khan card is frame-evidenced; the other two cards' settled forms are digest-level. The Berners-Lee wording is digest-level (the transcript at [07:15] is narration paraphrase, not the displayed text). No dialogue cue timestamps exist in the packet, so alignment of cards to spoken claims cannot be evidenced either way. The graphic that follows the card is a different technique's surface and is not part of this one. Any exit shape or exact exit duration inside the 508-510s bracket is an allocation, disclosed as such in the build record.
Reading basis used by the build: comfortable display reading about 200 words per minute, counting the quote plus its attribution, which is present from the first frame.
Modes (labeled claims): the build's default "specimen" mode carries the window claim (the one evidenced card, settled at t=0, cycle 14000ms matching the segment). Its "sequence" mode is a separately labeled three-card demonstration in transcript order with per-card slots (derived cycle 26500ms). Its "uniform" mode is a legacy equal-slot mode, labeled as such. Judge each mode against its own labeled claim.
Verification limits: PIXEL-UNVERIFIED (no browser in this seat; all checks are logic-level) and GEORGIA-UNVERIFIED (the configured Georgia typeface is absent; fitting used stand-in serif metrics on the same basis as the rendering logic, and the browser path measures in the rendered font string itself).
"""

LENSES = {
    "motion": "Lens: MOTION FIDELITY. Price how faithfully the build's movement reproduces the observed specimen behaviour: the whole-card entrance as one unit with attribution present from the first frame, the in-card line growth against the observed 1-2-4 line anchors, the explicit exit and card-free interval against the observed bracket (gone by 12s), and the absence of competing motion. Allocated forms (entrance shape, exit shape) are disclosed; price them as allocations, not as observations.",
    "timing": "Lens: TIMING / TEMPO. Price the schedule against the observed window: the evidenced card settled from t=0, sustained through about 10s, gone by 12s, with a card-free interval before the loop; the per-card reading intervals (quote plus attribution) against the 200 wpm basis in the facts; the internal reveal pacing; and each labeled mode against its own claim. Note the disclosed evidence limits (no claim-cue timestamps exist).",
    "purity": "Lens: CONSTRUCTION PURITY. Price whether the build is constructed purely from its CONFIG: every content, timing, palette, font, and geometry value reachable through the configuration surface; no specimen media, traced assets, or external references; no subject-shaping literal standing outside CONFIG. Structural constants (bounds, indices, identities) are not impurity.",
    "reusability": "Lens: REUSABILITY. Price whether production can safely drive this build with new content: list replacement semantics (including the empty-list policy), validation behaviour on malformed supplies (does it stop with an actionable message?), the deterministic fit contract for longer quotes and attributions, per-card timing control, and geometry derivation for narrower viewports. Verify claims against the source and the own-check packet.",
    "readability": "Lens: READABILITY. Price whether the text can actually be read at phone size: type sizes and measured ink heights, contrast, the reading time each card's full load (quote plus attribution) receives, fit at both the 360px stage and a 320px viewport on the shared metric basis, attribution clearance, and the disclosed GEORGIA-UNVERIFIED / PIXEL-UNVERIFIED limits.",
}

for lens, focus in LENSES.items():
    dest = os.path.join(OUT, "instr-" + lens + ".txt")
    if os.path.exists(dest):
        print("STOP: exists", dest); sys.exit(1)
    payload = (HEADER + "\n" + focus + "\n\n" + FACTS +
               "\n## Build record (score-blind)\n" + record +
               "\n## Own-check packet (check names and results only)\n" + ownchecks +
               "\n## Full recreation source (sha256 " + sha + ")\n" + source +
               "\nEnd your return with exactly one line: SCORE: <integer>\n")
    with open(dest, "x") as f: f.write(payload)
    print("wrote", dest, len(payload))

# anchor scan of the assembled payloads
FORBIDDEN = [r"76\.4", r"\b85\b", r"\b62\b", r"target", r"cure", r"plateau", r"delta", r"\bWHY\b", r"verdict", r"scores\.md"]
bad = 0
for lens in LENSES:
    p = os.path.join(OUT, "instr-" + lens + ".txt")
    text = open(p).read()
    for pat in FORBIDDEN:
        hits = re.findall(pat, text, flags=re.I if pat.isalpha() or pat in ("cure", "target", "plateau", "delta", "verdict") else 0)
        if hits:
            print("ANCHOR HIT", lens, pat, len(hits)); bad += 1
print("anchor scan:", "CLEAN" if bad == 0 else str(bad) + " HITS")
print("sha:", sha)

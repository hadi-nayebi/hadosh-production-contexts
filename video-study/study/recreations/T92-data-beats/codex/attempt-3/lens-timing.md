Verdict: **95/100 — strong Act-1 timing fidelity; the two-act cycle is coherent, with Act-2 tempo explicitly allocated rather than measured.**

Findings:

1. **Act-1 anchors match the supplied observations.** In `recreation.html`, `CONFIG.beats[0]` and `stateAt()` produce absence before 3000 ms, border entrance during 3000–4000 ms, text fill during 4000–5000 ms, settled display during 5000–10000 ms, and clearance during 10000–11000 ms. At 4000 ms, `bp=1` and `tp=0`: the border stands without text. The settled hold is computed as 10000−5000 = **5000 ms**.

2. **The restoration anchor is implemented explicitly.** `stateAt()` enters `restore` at 11000 ms; `frame()` hides the card, numeral and units, while `hudYearAt()` returns the scene year, **2037**. The restoration lasts 11500−11000 = **500 ms**, preserving the supplied “gone by seg 11 s” anchor.

3. **The longer cycle preserves the measured anchors but does not establish original Act-2 pacing.** From `CONFIG`, 11500+7500+1000 = **20000 ms**, exceeding the supplied 14000 ms segment by **6000 ms**. Act 2 constructs during 11500–13000 ms, holds during 13000–19000 ms, then remains settled through 20000 ms: **7000 ms continuously settled**, including end hold. This is an honestly labeled demonstration allocation; the supplied Act-2 still supports its form, not these durations.

Next-attempt cure: **No Act-1 timing correction is indicated.** To close the remaining timing-evidence gap, supply measured Act-2 entrance, construction, hold and transition anchors, then align its allocation and end hold with those observations.

Limits: Assessment uses only the supplied payload and source. The own-check PASS statements were not independently executed; browser playback, rendered transitions and synchronization with spoken dialogue remain unverified. The supplied SHA-256 binding was not independently recomputed.

SCORE: 95
BODY-WRITE: none (read-only run)
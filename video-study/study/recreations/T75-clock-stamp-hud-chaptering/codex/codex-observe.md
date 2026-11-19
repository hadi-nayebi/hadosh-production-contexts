CONFIRMED-WITH-GAPS

The supplied record is sufficient to begin Observe, but its universal persistence and transition claims conflict with the supplied firsthand frame notes. Chapter-turn behavior remains a source claim, not something established by the selected window.

Findings:

- **Packet and technique agree, but overstate persistence.** Both say “every frame” carries the year line and clock (digest.md P4-T02, Mechanics; TECHNIQUES.md T75, Mechanics). The supplied 1fps observations instead show a title-card tail at segment 0–1 s, a year line without a clock at approximately segment 2–4 s, and the full HUD only by approximately segment 6 s. The digest’s “no title cards” claim also conflicts with that title-card tail (digest.md P4-T02, Mechanics; supplied priced note c).
- **Evidence references agree.** Both entries cite ev/t12.jpg, ev/t81.jpg, ev/t191.jpg, and ev/t312.jpg. The digest identifies their clock states as 06:15, 07:30, 12:00, and 19:00; TECHNIQUES does not independently specify those states. Neither entry specifies the selected window; RUN.md supplies it.
- **Window arithmetic and evidence scope are correct.** Source duration is recorded as 619.914 s by ffprobe. The 5–19 s window lasts exactly **14.000 s**. ev/t12.jpg falls inside it; frames at 81, 191, and 312 s fall outside and evidence later HUD states only. Those stills do not establish exact chapter-boundary timing.
- **Window behavior supports qualified persistence.** The supplied observations establish full HUD presence by approximately segment 6 s and persistence across the city-to-interior cut at approximately segment 12–13 s. That scene cut qualifies the digest’s assertion that there are “no transitions other than the clock flipping” (digest.md P4-T02, Mechanics; supplied priced note c).
- **CONFIG is explicitly an allocation model.** RUN.md correctly separates the window’s first-state/persistence evidence from the digest’s throughout chapter-turn claim. Its recreation clocks—06:15, 07:00, 08:30—differ from the source list—06:15, 07:30, 09:00, 12:00, 16:00, 19:00, 22:30. This is acceptable as labeled allocation-model CONFIG, but must not be filed as observed source timing.
- **Caption exclusion is explicit.** The bottom narration caption is banned from the recreation under the supplied fleet-law note; the HUD is the subject.
- **Prior-attempt arithmetic is confirmed.** T75 has no prior attempt according to the supplied census record. T38 is family context only:
  - Attempt 1: 380 ÷ 5 = **76.0**, minimum **68**, recorded FAIL.
  - Attempt 2: 386 ÷ 5 = **77.2**, minimum **62**, recorded FAIL.
  - Attempt 3: 434 ÷ 5 = **86.8**, minimum **82**, recorded PASS.

  All sums, averages, and minima are correct. The supplied record contains no pass rule with which to independently validate the outcome labels.

Named gaps Observe must close firsthand:

- **Opening and HUD assembly:** Locate the title-card exit, year-only interval, clock entrance, and tick entrance precisely; establish when the complete HUD becomes persistent.
- **HUD geometry and appearance:** Record placement, typography, spacing, clock scale, tick dimensions/color, and behavior across the scene cut.
- **Chapter-boundary verification:** Inspect around clock changes beyond the selected window to test the digest’s exact-boundary claim and distinguish clock changes from scene cuts. Otherwise retain that behavior as unverified source-claim CONFIG.
- **Caption separation:** Identify the narration-caption region so it is excluded while the HUD remains faithfully observed.

BODY-WRITE: This return files the T75 Observe source-record audit, arithmetic checks, scope limitations, and named firsthand gaps at hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/codex/codex-observe.md.

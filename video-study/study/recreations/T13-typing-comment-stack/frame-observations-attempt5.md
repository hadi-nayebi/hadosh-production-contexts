# T13 attempt 5 — segment frame observations (R7 evidence record)

Source: `segment.mp4` in this directory (13.000 s, 1916×1078, 30 fps, 390 frames; window t =
segment t − 0.5 s handle). Frames extracted with ffmpeg 8.1.2 to /tmp (intermediates; this record
is the citation that survives). Stills at segment 0.5 / 1.8 / 4.5 / 7.2 / 9.3 / 10.5 / 12.0 s;
consecutive sequences (0.1 s spacing) around the card-3 entrance (seg 1.65–2.05), a landing +
card-4 entrance (seg 3.71–4.11), the final-card zone (seg 9.16–9.56) and the post-transition zone
(seg 10.38–10.78). Every frame below was viewed firsthand by the Execute agent.

## Observations

1. **Opening state (seg 0.5 = window 0)** — card 1 complete, card 2 typing with "Chief Executive"
   shown. Confirms the standing opening anchor.
2. **Fresh-word gradient (typing indication is on the TEXT, not the card)** — the word currently
   being typed renders in a white→blue vertical gradient; completed words are plain white.
   Instances: card 2 "Next" (seg 1.65, still in its settle), card 3 "VP" (seg 1.85), card 3
   "of" (seg 2.05), card 4 "Director" (seg 3.81), card 6 "Chief" (seg 7.2). In NO frame does a
   typing or landed card's background differ from any other card's dark background; the left
   border stays blue throughout. The digest's "pale-blue tint on the active card" is this text
   gradient, misread at digest time as a card tint.
3. **Caret** — a thin vertical bar at the typing frontier (seg 2.05 after "VP of"; seg 3.81 after
   "Director"; a gold-coloured bar at the highlight boundary in seg 1.65), accent-coloured,
   roughly 0.06× the title size wide. Not a block caret.
4. **Entrance** — an incoming card fades in (opacity ramp on the order of the configured entrance
   durations) while its first graphemes already type: card 3 at seg 1.65 is visibly dimmed
   (≈half opacity) with "VP" already shown; full opacity by seg 1.85. No vertical slide is
   separable from the simultaneous camera pan.
5. **Landing** — on completion a card gains per-card content: a pill row under the title
   (card 1: blue "Verified by: herself"; card 2: yellow "Scheduled · posts tomorrow" and its
   timestamp changes "· now" → "· tomorrow"; card 3: green "100% complete" plus grey placeholder
   bars; card 5: tag chips "vibes / synergy / alignment"; card 6: blue "AI-generated"). The
   header count increments by exactly one per landing: "Comments 4" at window start (one card
   landed) → 5 after card 2 lands → 6 after card 3 → 8 after card 5 (count = landed + 3).
6. **Highlights (title content)** — card 2: "What's" · card 3: "Look" AND "Complete" (two marked
   ranges) · card 5: "Vibes" AND "Synergy" · card 6: "Artificial". Card 1: "Slopcore" (already
   configured). Card 4: no marked range visible in any frame where it appears.
7. **Stamp** — the red RECEIPT stamp sits on the post card's right side, rotated ≈ −9°, fully
   inside the card, over the body's free zone (right of the wrapped lines' ink at its height);
   it does not cover body ink and does not reach the footer row.
8. **Camera / scene** — the view pans continuously over the scene (earlier cards leave the top
   of the view; the post card drifts left and crops). From ≈ window 8.5 s a profile card slides
   in over the post and the scene transitions away from the stack shot for the rest of the
   segment (the profile card then types the same titles as a checklist, incl. a seventh,
   "Thought Leader", which is outside this technique's card set).

## Dispositions (priced in the build record)

- In-attempt (token/render level): fresh-word gradient replaces the card-background typing tint
  and the landed colour interpolation (observation 2); caret re-priced to the thin bar in the
  accent colour (3); entrance-overlap token — typing begins before the entrance fade completes
  (4); header count derived as base + landed (5, count form only); multi-range highlights from
  the frames (6); stamp re-priced under the ink-rect check (7).
- Deferred (rebuild-class, returned through Plan per the plan-review bound): the camera pan and
  the scene transition, the per-card landed pill rows + timestamp changes, and photo avatars
  (specimen media — barred by the purity law in any case) (5, 8).

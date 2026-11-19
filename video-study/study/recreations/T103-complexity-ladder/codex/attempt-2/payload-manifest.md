# T103 attempt 2 — payload manifest (filed BEFORE any lens firing)

Frozen scored source: recreation.html sha256 `04a53914f71e55eb8a777d6abddc72c2a54cea8f195f9607a2b5d88f5260e38a`. Every return must bind this sha; any later source change requires a fresh preserved wave.

## Allowlist (exact, per lens — identical except the lens instruction)
1. Lens instruction: `codex/attempt-2/instr-<lens>.txt` — standing header (consumer = practice §5 Verify; decision priced; working record; BODY-WRITE line), the explicit line "Scores are integers from 0 to 100", the lens charge, the act-delivery specification, and the closing SCORE requirement.
2. Standalone neutral facts: `codex/attempt-2/neutral-facts.md` — measured frame table (500 ms census + 250 ms densified sampling, segment time origin stated), Act 1 phase table, Act 2 interval table labelled ALLOCATION, allocation disclosures, and BOTH schedule bases with the dispute printed (digest basis: ladder at source 14–17 s with revisits at 29–30 s / 44 s; measured segment basis: ladder at source ≈19.25–22.25 s — the measured basis governs the build, the dispute is printed, per the evidence-basis binding rule).
3. Neutral own-check packet: `codex/attempt-2/own-check-packet.md` — check names + results only, no interpretation.
4. Neutral build record: `codex/attempt-2/neutral-build-record.md` — construction + measured-fit model + configuration surface, score-blind.
5. The full frozen recreation.html.

## Act delivery (specified per W-T103, also carried inside each lens instruction + the neutral facts)
Act 1 (default, segment act) is the scored act; timing judgment is governed by Act 1 alone. Act 2 (configuration-selected stepping act) is a separately identified allocation act: lenses inspect its construction in the source; its pacing is not measured behaviour and Act 1 is not priced as if it claimed stepping. Each lens instruction states how that lens inspects each act.

## Exclusions (never in any payload)
RUN.md · plan-T103.md · scores.md (content) · prior lens returns · prior scores · target scores · cure labels / cure-to-check mappings · amendment labels · the seat's build record (build-record-attempt2.md).

## Assembled payloads (create-once, hash-bound before firing)
| Lens | Payload | sha256 |
|---|---|---|
| motion | codex/attempt-2/payload-motion.txt (22125 bytes) | c61f39c02e1cfd5cf2d5b7c616308b4949a627e4a2da95ac1ebd8dd2645cf4c1 |
| timing | codex/attempt-2/payload-timing.txt (21882 bytes) | dc795718cfb6d857185d4103d8c687656fcdda5ab8eb278675f0a5c18d5e4ccc |
| purity | codex/attempt-2/payload-purity.txt (21876 bytes) | 2496720d543b22ab9842ba8d1f46dc6092fbbf6ff5dae2efd400341f65a97d81 |
| reusability | codex/attempt-2/payload-reusability.txt (21843 bytes) | 6131a9dc3ab04e2a5b8b43bc8f6c0db6bb6b390c1d9b445c1eca83ea36a23a7f |
| readability | codex/attempt-2/payload-readability.txt (21948 bytes) | 707a895657cc2545e0dccbd999db2c08416790c72f0506fa36234cf1a1703be6 |

## Anchor scan of the ASSEMBLED payloads (including filenames + the recreation source's own comments)
Patterns scanned in every assembled payload: prior average/score values, the prior floor-lens score as a standalone number, target language, cure labels and codes, amendment labels, plateau/WHY language, attempt numbering of the prior attempt, delta language. Result: **0 hits in all five payloads**. Legitimate timing/configuration numbers (phase boundaries, totals, palette values, the 0–100 scale line, the ≥85/≥70 bar context carried in the standing lens form) were reviewed in context and retained. Source-comment check: the frozen source's comments are neutral construction notes only (grep-verified: no cure codes, amendment labels, cycle references, or lens-target language). A contaminated payload would have been regenerated, never fired — none was.

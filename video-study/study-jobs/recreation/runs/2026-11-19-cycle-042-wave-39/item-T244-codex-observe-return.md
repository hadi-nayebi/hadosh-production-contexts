**CONFIRMED-WITH-GAPS — T244’s packet and family filings are sufficient for Observe. The archived cut is viable, but the caption boundaries and highlight timing need firsthand source checks.**

### Findings

1. **Packet agreement and evidence scope.** Packet #14 `digest.md` §T05 (lines 47–51) and `style-library/techniques-word-animation.md` §T244 (lines 163–166) agree on the fixed bottom band, voice-linked word highlighting in reading order, the “throughout” timestamp, and the two evidence frames and clip. `style-library/TECHNIQUES.md:159` corroborates the classification, timing as the mechanic, and T195 as precedent. The cited `clips/000-bayes-board-build.mp4` probes at 12.000 s and is identified as source 0–12 s in `digest.md:33`. It can illustrate the general technique. The 74.00–81.58 s house/clock passage requires its own source citation. The packet’s “currently spoken word” wording also leaves open whether completed words stay lit. A same-line sequence from the archived source would resolve that distinction.

2. **First attempt and family score binding.** T244’s artifact directory has census material and a `codex/` directory containing only `AGENTS.md`. There is no `scores.md` or T244 row in recreation or practice `verdict-history.md`. For the named family, the first-attempt `scores.md` tables and filed `codex/lens-*.md` score lines match recreation `verdict-history.md:8`, `:12`, `:79`, and `:113`. All four cited averages are bound to five filed returns each.

   | Sibling | Filed lens scores | Recomputed average | Verdict |
   |---|---|---:|---|
   | T195 | 83, 86, 100, 86, 88 | 443 ÷ 5 = 88.6 | PASS |
   | T03 | 83, 55, 100, 78, 80 | 396 ÷ 5 = 79.2 | FAIL |
   | T12 | 83, 64, 94, 74, 62 | 377 ÷ 5 = 75.4 | FAIL |
   | T132 | 76, 82, 100, 76, 82 | 416 ÷ 5 = 83.2 | FAIL |

   The first-attempt label matters. The later `scores.md` tables and their cited lens returns agree with practice `verdict-history.md:8`, `:10`, `:76`, and `:77`: T12 A2 is 435 ÷ 5 = 87.0, T03 A2 is 416 ÷ 5 = 83.2 and A3 is 445 ÷ 5 = 89.0, and T132 A2 is 454 ÷ 5 = 90.8. The cited first attempts support a historical timing weakness. Later filed timing scores of 95 for T12 and 100 for T132 qualify any claim that the family is still stuck on timing. The T15 calibration entry in recreation `verdict-history.md:7` is a separate four-lens result, 314 ÷ 4 = 78.5.

3. **Archived window and firsthand gaps.** Packet #14 `source.mp4` independently probes at 155.617279 s, 5,880,806 bytes, H.264 at 720×1280 and 30 fps, with AAC at 44.1 kHz. The proposed 73.50–82.10 s range decoded without reported errors. Its duration is 82.10 − 73.50 = 8.600 s, with 0.50 s leading and 0.52 s trailing the 7.58 s ASR span. The four speech chunks are filed in `asr-segments.json:145–165`. The cycle’s census shows why those speech timestamps need separate visual anchors:
   - `census-t244/f-73.5.jpg` shows the preceding caption already visible. `item-T244-observe-plan.md:40` assigns that frame to 500 ms and calls the band empty or dim. Source 73.50 s maps to 0 ms. Observe should record the preceding-caption carry-in and identify the first visible L1 frame.
   - `census-t244/f-77.5.jpg` still shows L2, 500 ms after ASR places the L2/L3 boundary at source 77.00 s. The stated 340 ms hold from that boundary ends at 77.34 s, 160 ms before the filed L2 frame. Observe should bracket the actual visual handoff around 77.50 s. The ASR boundary and visual replacement need separate timestamps.
   - `census-t244/f-80.5.jpg` visibly shows the three-word chunk «قرض گرفته بود», while the corresponding ASR segment contains five words. Observe should map the burned-in caption chunks and their visible transitions separately from the utterance, then measure or bound highlight changes from consecutive source frames. Word-length allocation remains a derived timing model.

**Limits** — File and decode checks establish the proposed cut’s feasibility. The sampled census frames establish the visual discrepancies above. Exact frame-level caption handoffs, the highlight transition duration, and word-level voice alignment remain unverified.

**Body-write: none (read-only run)**

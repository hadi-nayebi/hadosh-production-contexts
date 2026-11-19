# Jev — jev-observe-exit — reception-analysis Cycle 008
Specimen: P10, "Watchtower of Turkey", Vimeo 108018156, Leonardo Dalessandri
Judge scope: Observe record only, against guard §2. Reception promise is not judged; only whether the context is earned.

## Verdict
ADVANCE-WITH-GAPS

No floor is breached. Separation is clean, packet state is certain, absences are named in the main body, and every inventory claim is traced to a source read this cycle. The gaps are real and must be carried into Plan as Execute-gated tests / limits, not silently assumed away — principally the imprecise capture-1 stamp and the fact that all numeric reception is still NOT DISPLAYED on the only route on file.

## Dimension scores (0–1)
- packet-state certainty: 1.0
- source coverage: 0.8
- absence completeness: 1.0
- separation-at-source: 1.0
- freshness: 0.6

## Pricing, in charge order

(1) PACKET STATE — 1.0
Packet was actually read this cycle: digest.md 21,807 B, sha256 8e260b59... re-read this cycle; digest.pdf and production-record.md noted standing. Completeness is stated from the record, not assumed: LANDED and ADOPTED CLEAN, video-digestion Cycle-016 RUN records ADOPTED CLEAN on a jev-packet re-firing. Craft verdict is cited by pointer only — digest.md §§1–7, and §8 "Reception link" quoted verbatim for the reception slot. No reception.md beside the packet, listing verified; no prior reception.md for this specimen/creator. This entitles reliance on the packet.

(2) EVIDENCE INVENTORY / SOURCE COVERAGE — 0.8
Inventory covers the classes that exist for Vimeo / this specimen, each traced to a captured source read this cycle: displayed counts (views / likes / comments — all NOT DISPLAYED, post.json counts object verbatim), access route (player-embed via yt-dlp, metadata exit 0, download exit 0), comment text access (none on file), velocity possibility (no second capture on file — named, Execute-gated), follower/subscriber base at capture (none anywhere in packet — named), upload date (NOT DISPLAYED, post.json). No meta.json / source.info.json in packet dir, listing verified, so no heatmap field exists to check — correctly printed as a checked absence for a Vimeo, not YouTube, specimen. Gap lowering the score: no canonical watch-page route result on file for P10, explicitly untested at Observe (P9's login-wall result correctly not imported). Coverage is therefore complete as an inventory of what is on file, incomplete as platform coverage — Plan must price the untested route as a test, not as a finding.

(3) SEPARATION AT THE SOURCE — 1.0
Craft enters Observe only as citation: §§1–7 pointer, never restated, paraphrased as finding, or priced. Duration / resolution / fps / codec from probe.json are technical facts, not craft findings, and are labelled as such. No sentence in the record re-judges the work's craft. Floor separation-at-source < 1.0 is not triggered.

(4) ABSENCE COMPLETENESS — 1.0
Every non-existent data class is named as an absence in the main body, numbered 1–8: views NOT DISPLAYED, likes NOT DISPLAYED, comment count and text NOT DISPLAYED / none on file, upload date NOT DISPLAYED, base NOT ON FILE, velocity — NO SECOND CAPTURE ON FILE, retention-shaped evidence ABSENT on file (no retention data, no heatmap file — checked, no comment text for time-references), repost/adjacent surfaces NONE ON FILE. No silent absence found.

(5) FRESHNESS — 0.6
Weakest dimension, and the named gap. Capture 1 does NOT carry a capture-date field in post.json — the original misattribution was found by codex-observe hunt 3 and corrected in place this cycle, which is credited. What remains is date-level attribution only: attributed to video-digestion Cycle-016, run dir and packet dir dated 2026-11-16, source = post.json, no time-of-day anywhere. That is a date + source, so it is not STALE-CAPTURE and not SIGNAL-WITHOUT-SOURCE, and 2026-11-16 is one day before this 2026-11-17 cycle. It is, however, an imprecise baseline stamp: any future delta must be priced as date-level against a non-numeric baseline (all counts NOT DISPLAYED), i.e. velocity is not computable from capture 1 as it stands. Plan must state that limit explicitly.

(6) ROUTING — pass (no separate dimension score)
Owner-only data needs: NONE identified; routing: none required — explicitly printed, not omitted. No unrouted owner data need is visible on this record: the missing classes are platform-display / access-route questions, correctly left as Execute-gated tests for Plan, not owner-only data.

## Named gaps to carry into Plan
1. Freshness / baseline stamp: capture 1 is date-level only (2026-11-16, via Cycle-016), no time-of-day, no timestamp field in post.json — corrected attribution must be retained verbatim in Plan and in any reception.md.
2. All displayed counts NOT DISPLAYED on the sole route on file (player-embed via yt-dlp); canonical watch-page route untested for P10 — Plan must set it as an Execute-gated test, with no count assumed.
3. Velocity not computable: no second capture, and capture 1 is non-numeric — Plan must not promise a delta from this baseline.
4. No follower/subscriber base, no upload date, no comment count/text, no retention-shaped evidence on file — all named absences above; any analysis must be bounded to what a fresh capture actually yields.

Primary defect class (RETURN only): none — verdict is not RETURN-TO-OBSERVE.

## Exemplar classifications
(a) ADVANCE-WITH-GAPS — founding inventory with dated counts in post.json (6,680 likes · 226 comments · 1,039 followers, captured 2026-11-13), retention ABSENT named, packet in-flight; gap = packet state.
(b) ADVANCE — packet cited by pointer, full inventory, absences named, fresh captures.
(c) RETURN-TO-OBSERVE, CRAFT-REJUDGED-IN-OBSERVE — packet's goods/bads restated in its own words as "context" contaminates separation at the source.
(d) RETURN-TO-OBSERVE, SILENT-ABSENCE — Instagram reel Observe that never mentions retention data at all leaves a data class silently absent.

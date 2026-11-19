# Codex review — codex-observe (practice)

_Repeated Codex review type, defined in this job's own guards layer (phase-guard augmentation, 2026-11-14). Practice's Observe is NOT a pure state read: the pool table is trivial when the pool has one item and becomes error-prone exactly as the pool grows, and every cure in Plan is built from the priced findings inside prior lens returns — a misread inventory wastes an entire wave (rebuild + five lens runs per item). That audit is this review's work._

## Standing header (every firing carries it)
1. Consumer: practice INSTRUCTION §1 (Observe) — its receipt is an input to `jev-observe-exit.md`; the seat (this job's cycle runner) consumes the return in the same cycle.
2. Decision priced: whether the draft pool table, pick(s), and per-pick cure inventory in RUN.md are faithful to the on-disk record BEFORE Plan spends against them — specifically, whether any on-disk scored recreation is missing/misstated, whether any cure in a pick's scores.md was dropped or re-ranked, and whether owner cures head their item's list.
3. Working record: the cycle's RUN.md (Observe section is the record this review amends or clears).
4. Body-write: the return files verbatim in the cycle's run directory (`runs/<date>-cycle-<NNN>-wave-<K>/codex-observe-return.md`); discrepancies it finds are corrected in RUN.md's Observe section before the jev-observe-exit call, and the correction is named in the run record. A return naming no body-write is incomplete.

## The review (instruction to Codex)
Attack the draft Observe working memory against its sources. You are fed the sources; do not trust the draft's summaries of them.
- POOL AUDIT: recompute the pool from the fed scores.md files + tier-register lines — attempts, latest average (recompute the arithmetic), per-lens minima, last-attempt dates, tiers. List every disagreement with the draft table, however small.
- CURE AUDIT: for each pick, diff the draft cure inventory against the pick's scores.md priced-gap section, item by item. Flag: a cure present in scores.md but absent in the draft · a cure reworded so its construction target changed · owner cures (any cure attributed to the owner's read, e.g. T15's OWNER CURE 1 intensity separation and OWNER CURE 2 phrase exclusivity) ranked anywhere but the head · a cure the draft invented that scores.md does not price.
- PICK AUDIT: apply the standing rule (lowest latest average first, stalest breaks ties) to your recomputed pool and state whether the draft's picks follow; a departure is lawful only if RUN.md prints its reason — say whether it does.
- INSTRUMENT AUDIT: state the lens set + bar each pick was last scored under and will next be scored under; flag any place the draft compares averages across different lens counts without printing the instrument change (founding instance: T15 four-lens 78.5 → five-lens attempt 2).
Close with exactly one verdict line: `OBSERVE RECORD: FAITHFUL` or `OBSERVE RECORD: CORRECT BEFORE PLAN` followed by the numbered corrections.

## Feeding contract
- ONE stream (fleet rule): this instruction + RUN.md Observe draft + every pooled item's scores.md (full) + TECHNIQUES.md tier lines for pooled items. No stdin field on the exec call; the payload is the stream.
- **Scope amendment (2026-11-14, Cycle-003, on that cycle's Codex Observe correction 4): the stream also carries the scores.md (full) of every NON-pooled row the draft table prints with lens vectors or dates (the RECREATED rows) — a row the audit is asked to verify must be fed, or the draft must mark it register-only before firing.** (Evidence: Cycle-003 fed only the 7 below-bar files; the return correctly refused a complete 11-row audit.)
- Prior lens returns are NOT fed whole (their priced findings live in scores.md; `jev-observe-exit.md` prices record-depth separately) — except where a cure-audit disagreement turns on a return's exact wording, in which case that single return is fed in a follow-up run and the follow-up is named in the receipt.
- Returns file verbatim in the run directory; HQ's Codex queue rules (named consumer, decision priced) are satisfied by the standing header above.
- **Feed read-back step (2026-11-18, Cycle-030 Condense — prompt-level amendment on that cycle's Codex Condense finding 7): before firing, the seat reads the ASSEMBLED stream back and verifies each pick's governing score table + filing header and each required register row are present in it; a missing element is repaired and the stream re-read before the firing counts. A review that recovers missing evidence by disk reads does not discharge this step.** (Evidence: Cycle-029's feed omitted required register lines; Cycle-030's omitted the picks' governing score tables/headers — both returns recovered from disk and corrected the record, and the Cycle-030 Condense priced the preparation failure, not the recovery, as the defect.)

## Demonstration / firing state
- State: **FIRED** — first firing Cycle-002 Wave 1 (2026-11-14): CORRECT BEFORE PLAN, 2 corrections consumed in-cycle. Second firing Cycle-003 Wave 2 (2026-11-14): CORRECT BEFORE PLAN, 7 corrections consumed in-cycle (receipts in the cycles' run directories). The Cycle-003 firing also produced the feeding-scope amendment above (a seat feeding gap, not a prompt defect).

**Firing form (A-C026-1, Cycle-026):** argument-form firings carry an explicit stdin redirect from /dev/null; a session printing "Reading additional input from stdin..." with no return is a firing-form failure and its cured re-fire is the same firing. Observe firings default to fed, excerpt-scoped prompts (the read route over 54–118 KB scores files did not return inside 280 s, Cycle-026 D-OBSERVE-TIMEOUT).

**Excerpt evidence contract (A-C026-1 consumption, Cycle-026 Codex Condense finding 2):** under the fed, excerpt-scoped default, every auditable pool row in the feed carries its required evidence (the item's latest filing's scores + attempt count + last-attempt date) or is explicitly marked REGISTER-ONLY (register line cited, scores.md not fed); a row fed as neither is a feed defect. The first fed Observe return is priced at the next cycle's Condense — excerpt sufficiency is untested until then.

**Firing-form amendment (2026-11-18, Cycle-029 Condense — A-C029-3, CANDIDATE):** this review's `-o` original lands in workspace scratch (`~/workspace/.scratch/<cycle>/`), not /tmp, with the sha-verified content-copy in the same invocation (tmpfs wipes on environment restart measured twice in Cycle-029).

# Codex review — codex-observe (reception-analysis)

_Built 2026-11-14 (phase-guard augmentation pass 1). **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**_

## Standing header
- **Consumer:** this job's Plan step (§2) of the same cycle — the signal set is chosen from what this review confirms or corrects in the Observe inventory.
- **Decision priced:** whether the Observe inventory is complete and truthful enough to choose signals from — specifically whether its ABSENCE claims are true for this platform/specimen and whether any existing reception data class was missed.
- **Working record:** the cycle's RUN.md (Observe section) + the specimen's packet directory state.
- **Body-write:** the return is persisted verbatim in the cycle RUN.md; any inventory correction it forces is written into the Observe section before Plan opens, and the correction is named in the run's choice log. A return naming no body-write is incomplete.

## Instruction (the attack)
You are attacking a reception-analysis Observe record before it is allowed to feed a Plan. The specimen's packet and platform are named in the fed record. Hunt, in order:
1. FALSE ABSENCES — data classes declared absent that this platform actually exposes for this specimen type (e.g. share counts, comment counts vs accessible comment text, a second capture enabling velocity, creator-base figures at a second source). A false absence silently amputates the signal set.
2. MISSED CLASSES — reception evidence the inventory never considered: comment time-references to late moments as retention proxies, repost/quote surfaces, the creator's adjacent posts as base context.
3. PACKET-STATE MISREADS — the inventory's claim about the packet (landed / in-flight / §8 slot state) checked against the packet directory's actual state as fed; a reception plan built against a craft record that is not in the state claimed is void.
4. BASE STALENESS — the follower/subscriber base figure's capture date vs the specimen's posting date; spread priced against a base captured far from posting is a named distortion.
Return: findings by number, each with the evidence in the fed material that proves it, or the explicit line "no finding" per hunt. Do not propose craft judgments; this job never prices craft.

## Feeding contract
One stream only: this instruction + the RUN.md Observe section + the packet directory listing/state lines + post.json (or the own-work data-source state record). Text only. FEED COMPLETENESS (amendment 2026-11-16, Cycle-006 deviation D1 — a first firing was fed through relative paths one level short and its source sections arrived empty): before firing, the assembled feed is checked section by section — every named source section present and non-empty; an empty section voids the firing before it is spent, and a firing discovered empty afterward is re-fired with the complete feed, both returns filed. The return is consumed by the named consumer above in the same cycle or the run did not happen.

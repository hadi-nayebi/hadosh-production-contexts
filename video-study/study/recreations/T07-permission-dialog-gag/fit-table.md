# T07 — measured-fit leg · Attempt 3 (practice Cycle 022 Wave 21)

Guard: recreation guards/guard-measured-fit.md (by reference, practice A-C008). Source: `recreation.html` sha256 `bf55ad56e85ba46b4305e7efa590095dd440e16d8fdafd3f1d515709f2ec3f7d`. Model: source-bound displayed-state model (deterministic measure stub in the own-check suite; PIXEL-UNVERIFIED — no rendered-pixel route, A-C002-2).

Fit basis construction (named): font = injected canvas measure at the CONFIG family and the state's own weight (title weight for the title; selected weight for a selected row, normal weight otherwise) · marker box = (markerEm + markerGapEm) × optPx exactly, the rendered span width · horizontal padding = modal padding (both sides) + border (both sides) + option-row padding (both sides, at its rendered size) subtracted from the available text width · box = modal border box at the computed width.

## Default layouts

| Stage | Modal W | Modal H | Top offset | reqPx | optPx | Offset-aware fitsHeight | Hierarchy | Policy |
|---|---|---|---|---|---|---|---|---|
| 360×640 | 338 | 172 | 179 | 20 | 16 | YES (179+172 ≤ 640) | YES | wrapped (request 3 wraps to 2 lines) |
| 960×540 | 645 | 333 | 151 | 40 | 31 | YES (151+333 ≤ 540) | YES | wrapped (request 3 wraps to 2 lines) |
| 360×200 | 338 | 172 | 56 | 20 | 16 | NO — heightBlocked, recorded, modal withheld | YES | wrapped |

Phone type floor: optPx 16 ≥ 14 at 360 px — HIT.

## Wrap-state enumeration (every reachable state: per request title + per option × selected/unselected)

360×640 and 960×540 (identical state outcomes): req1 1-line fits · req2 1-line fits · req3 2-line wrapped · opt0 selected 1-line fits · opt0 unselected 1-line fits · opt1 selected 1-line fits · opt1 unselected 1-line fits · opt2 selected 1-line fits · opt2 unselected 1-line fits. Total enumerated states per layout: 9.

## Fixtures

- Expand-wrap long request ("Allow Adita to direct the whole show?"): wraps within the 2-line cap at the expanded width, no overflow — HIT.
- Reject policy long request: lines marked rejected with validation-record entries; the render path skips rejected rows / substitutes the fallback request — HIT.
- Oversized single token (87-char option): flagged oversizedToken at the enforced phone floor size — HIT.
- Resize fixtures (320/360/480/720/960 widths): modal width never exceeds the 94% stage cap — HIT.
- Hierarchy floor: title ≥ option + min gap at stage heights 200/260/320/480/640, cap notwithstanding (option size yields at the cap) — HIT.
- Stillness (C6): the layout is computed from global maxima over all requests/options/states, so one modal box serves every request and selection boundary — model-level invariance HIT; pixel route blocked, PIXEL-UNVERIFIED.

Leg verdict (advisory): all named fit assertions HIT in the model; rendered evidence outstanding.

# T07 — config-census leg · Attempt 3 (practice Cycle 022 Wave 21)

Guard: recreation guards/guard-config-census.md (by reference, practice A-C008). Source: `recreation.html` sha256 `bf55ad56e85ba46b4305e7efa590095dd440e16d8fdafd3f1d515709f2ec3f7d`. Suite: run dir `own-checks-T07-attempt3.js` — 57 pass, 0 fail.

## Consumption census (A-C006-2, mutation-proven)

106 leaf keys walked (attempt-2 baseline: 79); every key's mutation changed a computed or rendered effect in the census snapshot (layouts at five stage geometries, timeline events, tile geometry, modal/row style strings, font specs, message validation against fixed envelopes, elapsed-processing exhaustion, fallback fixtures, long-text policy outcomes, swap row styles): **106 consumed, 0 unconsumed — HIT.**

## Literal census (A-C008-3)

Source scan outside the CONFIG block:
- Hex colour literals: **none**.
- Quoted `"transparent"`: exactly 1 occurrence, inside CONFIG.
- Numeric literals outside CONFIG, all whitelisted structural constants: `0, 1, 2, 3` (indices, counts, pair/modulo arithmetic, regex colour bounds {3,8}), `8` (regex colour bound), `24` (validation-record detail truncation length), `960, 540` (bootstrap fallback stage dimensions when the stage reports no size). No technique value (timing, palette, geometry, type) appears outside CONFIG.

## Validation + magnitude (A-C021-3)

- Adversarial set HIT: string final "bad" (recorded rejection, valid row), string arrivalFlashMs (strict parse), flash ≥ land delay (recorded rejection), negative timing (recorded, replaced), runs 0/−1/1.5 (recorded rejection), malformed colour (recorded default), missing finals [0,0]→previous policy.
- Magnitude sweep: a 400-nines-class value probed against **every** numeric field (67 fields): no field resolves to Infinity/NaN and the derived cycle stays finite — HIT.

Leg verdict (advisory): census HIT 106/106; literal census HIT with the named whitelist above.

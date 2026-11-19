Construction purity: **68/100**. This lens fails the 70-point floor.

- **−25 — overrides can introduce external assets.** Palette values reach `.style.background` without validation. A JSON override such as `{"palette":{"card":"url(https://example.com/image.png)"}}` can load an image into the recreation. Text uses `textContent`, which prevents markup injection through titles, labels, and lines.
- **−5 — construction parameters remain outside CONFIG.** The first-line delay (`600`), padding, corner radii, bullet dimensions, stage offsets, and motion distances/scales are hardcoded. The principal dimensions and content are parameterized, but the claim that all geometry derives from CONFIG is too broad.
- **−2 — unsafe override merge.** Arbitrary keys, including `__proto__`, are accepted, and inherited objects can be recursively mutated. The override boundary needs an explicit schema.

The supplied source contains no specimen media references, frame sequences, traced artwork, or default external assets. Both shapes are constructed with DOM/CSS. Visual claims remain **PIXEL-UNVERIFIED**.

Next attempt: validate overrides against an allowlisted schema; reject prototype-related keys; restrict palette values to validated colors; move remaining adjustable construction constants into CONFIG.

BODY-WRITE: No file written. The execution tool failed to start (`codex-code-mode-host` missing), preventing creation of `codex/lens-purity.md`; the complete lens return is provided here.
SCORE: 68

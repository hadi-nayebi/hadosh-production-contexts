# T54 — Reusability lens

Bound build: `00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704`

**Score: 76/100.** Passes the lens minimum of 70. Production can replace the roster, state anchors, palette entries, and zoom schedule through CONFIG, but complete reuse still requires code and CSS edits. This lens alone cannot establish RECREATED tier.

Credit: `chips`, `states`, and `zooms` provide useful data schemas; rendering generates chips from the roster; `fullAtMs` is derived rather than stored. The recorded 56-chip swap demonstrates cardinality changes and compressed timing without rewriting logic. These findings come from the supplied source and record; independent execution was unavailable because the tool host failed to start.

Deductions and required cures:

- **−8 — Presentation values remain outside CONFIG.** Elect wording and tag dimensions, label padding/heights/radii, pop scale, easing exponent, font family, stage dimensions/aspect, and full-plate styling remain literals in rendering or CSS. Several CSS colors also bypass the palette. **Cure:** expose these as configuration fields or documented style tokens; derive initial SVG and container geometry from the configured viewBox.

- **−5 — Completion does not guarantee a usable full-roster hold.** Default `fullAtMs` equals `durationMs` at 14,000 ms, leaving no playback interval for the completed view. Appending one chip at unchanged cadence moves completion to 14,240 ms, beyond playback. The compressed swap avoids this dependency rather than resolving it generally. **Cure:** configure a post-completion hold and derive duration from completion plus that hold, or explicitly reject insufficient playback duration before rendering.

- **−4 — Same-state cardinality eventually duplicates positions.** `chipOffsets[ord % chipOffsets.length]` repeats after five chips at one anchor; the sixth occupies the first chip’s position. The 56th-chip fixture tests total count but not this boundary. **Cure:** generate additional offsets deterministically from configured spacing, or validate and document a per-state capacity with a clear error.

- **−4 — Schema validation is incomplete and unenforced at startup.** Unknown zoom state IDs are silently ignored; duplicate state IDs overwrite earlier entries. Empty offsets, nonpositive cadence/durations, and invalid geometry are insufficiently guarded. Rendering does not invoke `checkpointsOk`. **Cure:** validate the complete configuration before creating DOM elements and return field-specific errors.

- **−3 — Initials assume Latin-script names.** The ASCII filter removes other scripts and alters accented names; the fallback `"??"` is embedded in logic. **Cure:** permit a configured initials field with a Unicode-aware fallback and configurable missing-name treatment.

For the next attempt, production should be able to change electorate, language, container geometry, cadence, and palette entirely through configuration. Verify an unchanged-cadence 56-chip roster, six chips sharing one state, a non-Latin roster, and a changed viewBox.

This return supplies the consumer-ready text for `codex/lens-reusability.md`; no local file was written because the execution host was unavailable.

SCORE: 76
BODY-WRITE: Consumer-ready assessment for codex/lens-reusability.md, containing the bound hash, priced deductions, and next-attempt cures; filesystem filing remains with the consumer.

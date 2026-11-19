Verdict: Readability provisionally passes at 86/100. It does not beat its predecessor on this lens: text geometry is unchanged, while the completed hold is shorter. Overall tier movement is NOT ASSESSED by this lens alone.

Findings:

- **Header has ample fit reserve.** `recreation.html:23–24` specifies bold white 20 px header text and 16 px labels against the dark void (`:21`). The fit-table estimates leave 336 − 244.8 = **91.2 px** header clearance. However, `fit-table.md` derives ink bounds from character-class approximations, rather than browser font measurements; its stated 14.4 px header and 11.5 px label ink heights remain pixel-unverified.
- **Bars preserve label space.** `.rlab{flex:none}` and the separate flexible track (`recreation.html:10–13, 83–88`) reserve a 92 px label column. At 360 px width, the track receives 360 − 2×24 − 92 = **220 px**. The estimated Red Dwarf label clearance is 92 − 81.3 = **10.7 px**. No source-level overlap is evident.
- **Rows remain contained.** The final row ends at 84 + 8×24 + 14 = **290 px**, inside the derived **300 px** minimum stage (`recreation.html:24, 62, 81–82`). Text stays stationary and opaque; only bar widths change (`:94–96`). Dim background specks present limited apparent competition, subject to rendered verification.
- **The shortened hold reduces reading reserve.** Completion is 9800 + 2000 + 800 + 6×250 = **14,100 ms**, leaving **900 ms** before reset. The dwarf header is nevertheless visible for 15,000 − 11,000 = **4000 ms**, and labels persist throughout. This supports readability but provides less time to inspect the completed comparison than Schedule 1’s 2800 ms hold.
- **Further-attempt cure:** obtain a rendered 360 px playback check, especially during 14,100–15,000 ms. Verify actual font fit, label clarity and speck overlap. If the completed comparison resets before it can be comfortably read, extend its hold through a disclosed schedule allocation. No mandatory text-layout change is established at source level.

Limits: Source/logic assessment only; no rendered frames or playback inspected. Artifact SHA-256 independently matches the supplied hash. The unresolved schedule-basis question is not decided here.

SCORE: 86
BODY-WRITE: none (read-only run); consumer files this return verbatim as codex/attempt-2/lens-readability.md and extracts its SCORE into scores.md.
# T18 — measured-fit table · attempt 3

Source: recreation.html sha256 c6d88d1afdd7a222817f1ed4caf05bea52130569fa798a6ee08cc80a766cab97 (frozen for the scoring wave).
Method: widths from the configured glyph table (Arial/Helvetica advance fractions) at the 360px reference width; upper column = nominal x glyphErrorFactor 1.15. Ink height = CSS size x 0.716 (Arial cap height). Sizes are modelled from the source, not rendered — PIXEL-UNVERIFIED.

| Element | Container | CSS size @360px | Measured ink width (nominal / upper) | Container inner width | Ink height | Binding margin |
|---|---|---|---|---|---|---|
| title line 0 (2 wrapped rows) | title column | 18.72px | 322.4 / 370.8px (unwrapped) | 179.7px | 13.4px | wraps inside column; single-word bound checked against screen width |
| title line 1 (1 wrapped rows) | title column | 18.72px | 92.6 / 106.4px (unwrapped) | 179.7px | 13.4px | wraps inside column; single-word bound checked against screen width |
| title line 2 (1 wrapped rows) | title column | 18.72px | 82.2 / 94.5px (unwrapped) | 179.7px | 13.4px | wraps inside column; single-word bound checked against screen width |
| chat 0 text (1 wrapped rows) | chat column | 14.50px | 50.8px (unwrapped) | 110.4px | 10.4px | 59.6px on the binding row |
| chat 0 sender/time row | chat column | 12.00px | 55.2px (upper, +avatar+gap) | 110.4px | 8.6px | 33.2px |
| chat 1 text (1 wrapped rows) | chat column | 14.50px | 86.4px (unwrapped) | 110.4px | 10.4px | 24.0px on the binding row |
| chat 1 sender/time row | chat column | 12.00px | 58.3px (upper, +avatar+gap) | 110.4px | 8.6px | 30.1px |
| chat 2 text (2 wrapped rows) | chat column | 14.50px | 138.0px (unwrapped) | 110.4px | 10.4px | 0.0px on the binding row |
| chat 2 sender/time row | chat column | 12.00px | 62.1px (upper, +avatar+gap) | 110.4px | 8.6px | 26.3px |
| chat 3 text (3 wrapped rows) | chat column | 14.50px | 223.2px (unwrapped) | 110.4px | 10.4px | 0.0px on the binding row |
| chat 3 sender/time row | chat column | 12.00px | 54.5px (upper, +avatar+gap) | 110.4px | 8.6px | 33.9px |
| stat label MINUTES | stat card | 12.00px | 61.3px (upper) | card width = text + padding | 8.6px | card-sized |
| stat value 18 | stat card | 16.00px | 20.5px (upper) | card width = text + padding | 11.5px | card-sized |
| stat label SLIDES | stat card | 12.00px | 47.5px (upper) | card width = text + padding | 8.6px | card-sized |
| stat value 0 | stat card | 16.00px | 10.2px (upper) | card width = text + padding | 11.5px | card-sized |
| slide counter | screen bottom-right zone | 11.00px | 27.5px | zone from title right edge to counter right offset | 7.9px | fits zone (fit leg asserts) |
| accumulated chat stack | screen (vertical) | — | stack 264.9px nominal / 264.9px upper at 568px stage height | screen height 420.3px | — | bottom at 72.0% of screen (bound 98%) |

## HIT list (4)

- HIT: chat body ink height 10.4px < ~11px ink floor (CSS size 14.50px)
- HIT: chat sender/time ink height 8.6px < ~11px ink floor (CSS size 12.00px)
- HIT: stat label ink height 8.6px < ~11px ink floor (CSS size 12.00px)
- HIT: counter ink height 7.9px < ~11px ink floor (CSS size 11.00px)

Disposition (advisory leg): the binding size floors for this build are stated in CSS-effective terms (size after the worst framing scale and the perspective factor): chat 13.4px, sender/time 11.1px, stat label 11.1px, stat value 14.7px — all at or above their floors in the build record. On the stricter ink-height basis the secondary surfaces (chat body, sender/time, stat labels, counter) remain under the ~11px ink floor; that residue is carried into the scoring wave as this leg's advisory finding, with rendered verification unavailable (PIXEL-UNVERIFIED).

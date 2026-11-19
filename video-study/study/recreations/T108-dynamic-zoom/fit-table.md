# T108 — guard-measured-fit output (A6 leg 1, FINAL build, pre-wave)

Method: font-metric geometry measurement (Liberation Sans — metric-compatible with the CONFIG Arial stack — advance widths + cap-height ink bounds via PIL ImageFont at 200 px, scaled) at the 360 px stage. Two states measured per element: the DISTANT state (camera start pose, scale = CONFIG startScale 0.65) and the HOLD state (camera end pose, endScale = 360/177 = 2.034) — the hold is the inner scene's reading state, where the camera reveals the full screenRect width (visible local width 177 px) and 203/2.034 = **99.8 of 113 local px of height**; the content group is centred on that visible window and fitScale (= 1 on this build) is re-derived from it on every load, so nothing crops at end scale (T101 cure 1).

| Element | Container | Ink width (local) | Visible width at hold | Margin at hold | Ink height: distant / hold (stage px) |
|---|---|---|---|---|---|
| inner.title "Webpage" @9 px bold | screen 177×113 | 39.8 px | 177 px | 137.2 px | 5.3 / **16.5** |
| pill text "Motion Design Training" @6.5 px | pill 118×13 | 66.5 px | 118 px | 51.5 px | 3.8 / **11.8** |
| row "Result one" @6.5 px | row 130×11 (124 usable) | 31.1 px | 124 px | 92.9 px | 3.8 / **11.9** |
| row "Result two" @6.5 px | row 130×11 (124 usable) | 30.4 px | 124 px | 93.6 px | 3.8 / **11.9** |
| swap title "Dashboard" @9 px bold | screen | 47.0 px | 177 px | 130.0 px | 5.3 / 16.5 |
| outer.label "Laptop" @7 px | laptop base 201×12 | 21.4 px | 201 px | 179.6 px | 4.1 / (off-frame at hold) |

Hierarchy: title/pill ink-height ratio = 8.1/5.8 = 1.40 (local), identical at hold — measured size hierarchy, not hue-only. ✓
Legibility floor (~11 px ink height): every inner-scene element clears it in its reading state (hold: 16.5 / 11.8 / 11.9 / 11.9). First-pass rows @6 px measured 11.0 — at the floor — and were cured pre-wave to 6.5 px (11.9) before this table was filed.

HIT list: **2 HITs carried** —
- HIT-1: inner-scene text in the DISTANT state measures 3.8–5.3 px ink height, below the floor. Disposition (T101 brand precedent): the distant state is the approach framing (1.4 s hold + the zoom's first half); the inner scene's reading state is the hold, where every element clears the floor. In the specimen the screen at the equivalent framing is blank teal — the build's inner content is present-but-unread there, which is the nested-DOM price of the no-swap mechanism, printed rather than hidden.
- HIT-2: outer.label "Laptop" @7 px measures 4.1 px ink height in its only visible state (distant) and is off-frame at hold. Disposition: it is a device tag on the laptop base (CONFIG outer.label's application site), not subject reading text; it is listed here because the leg counts every text element. The lens wave prices it with this table in the packet.

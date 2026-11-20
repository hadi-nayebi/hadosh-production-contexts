# Reception — Packet #13, "Fresh Guacamole" by PES (YouTube dNJdJIwCF_Y)

_Run 2026-11-18 (reception-analysis Cycle 010). Craft record: digest.md §§1–7 in this packet directory, cited by pointer only — this record prices reception, never craft (§6.1)._

## Dated counts

| Figure | Capture 1 | Capture 2 |
|---|---|---|
| Views | 495,478,875 | 495,490,491 |
| Likes | 3,119,792 | 3,119,890 |
| Comments (displayed) | 80,000 | 80,000 |
| Subscriber base | 4,450,000 | 4,450,000 |

- Capture 1: 2026-11-18T03:59:07+00:00 (2026-11-17 22:59:07 EST) — post.json counts, cross-checked against source.info.json (extraction epoch 1794974347); the two sources agree on every figure.
- Capture 2: 2026-11-18T16:11:39+00:00 (2026-11-18 11:11:39 EST) — yt-dlp `--dump-json` route in Cycle 010's run record (capture2-route-a.json, epoch 1795018299).
- Upload date: 2013-03-07 (post.json / source.info.json). The comment count at both captures is the platform's displayed (round) 80,000, printed as displayed, never as an exact count.
- A different, earlier upload of the same film on Showtime's channel is reported in the caption (7,842,373 views, creator-reported, unverified by any capture here). That figure belongs to that upload and is used nowhere in this record.

## Spread pricing (capture-time interaction ratios)

- Views per subscriber at capture 1: **111.34** (495,478,875 views on a 4,450,000-subscriber base, source.info.json, 2026-11-17). Likes per subscriber at capture 1: **0.7011**. These are count-scale comparisons at capture time only: views are not unique viewers, the numerator is a ~13.7-year cumulative count, and the base at posting (2013-03-07) is NOT ON FILE — no posting-era spread is claimed.
- Likes per view at capture 1: **0.63%** (3,119,792 / 495,478,875). Displayed comments per view: **0.016%**, computed from the displayed round figure.
- Velocity (short-window observation): capture 1 → capture 2 is a **12.21 h** window (calculated from the two capture stamps): views **+11,616**, likes **+98**, displayed comment count and base unchanged. This is an observation of that window only; no rate beyond it is extrapolated.

## Comment themes

Sampling rule (stated in Cycle 010's Plan before any comment was read): the comment test ran with a pre-registered extractor cap of 400 (displayed comment count 80,000 exceeds the ~1,000 candidate trigger) and returned **400 comments** from the first successful route only. Membership was frozen from comment metadata alone (sample N = **136**: top-100 by like_count, selected range 1,700 → 1 likes, plus the 50 most recent by timestamp; 14 comments stood in both slices) before any selected comment's text was opened. Themes are non-exclusive and price this frozen sample of the returned 400 only — never the displayed population. The sample's most-liked comment (1,700 likes) is a childhood-memory comment, coded in the first theme below.

| Theme | Count in sample (N=136) | Paraphrased evidence | Production decision informed |
|---|---|---|---|
| Nostalgia / childhood return | 52 | Commenters recall watching as children and give then-and-now ages (watched at 5–6, now 15; watched at 13, now 22); several write the same memory in Japanese, Korean, Spanish, and Russian | For catalogue pieces with a long tail, the returning audience is the visible comment stream — what return viewers say they came back for is the reception signal to price |
| AI-era framing (commenter reaction) | 21 | Commenters frame the film against the AI era — made before AI, no AI needed, a new generation would assume it is AI, relief that it is not | Whether a pre-AI-era catalogue piece benefits from its age being legible to today's viewers is a reception-side question this theme raises |
| Praise & awe | 14 | "Masterpiece" and "one of the videos of all time" judgements; one commenter calls it still one of the best videos ever made after 13 years | Praise here attaches to endurance over time, not to novelty — a distinction future reception records for old catalogue pieces should keep separate |
| Present-day check-in (2026) | 14 | Short date-stamped presence comments ("2026 anyone here", "who's here in October 2026", "welcome back everyone") | Check-in comments are a return-ritual form; counting them separately keeps them from inflating the nostalgia theme |
| Algorithm resurfacing | 10 | Commenters explicitly credit the recommendation surface — asked why YouTube recommended it after years, said their childhood came back in their algorithm, thanked YouTube for resurfacing a video they had been looking for | For old catalogue pieces, how much of the visible reception the recommendation surface delivers — versus search or direct return — is worth naming per specimen |
| Object / moment references | 7 | Commenters name specific substitutions and moments — the mini dice, the dice-turning part, the tools behind the pincushion and golf-ball sequences, what they thought was inside the grenade | Which moments returning viewers still name after years is the retention-shaped comment evidence a catalogue piece offers |
| Food craving | 6 | Commenters say the film still makes them hungry; the dice look delicious enough to eat | Appetite reactions are a distinct response class for food-form pieces, separate from praise |
| How-made reaction (commenter reaction) | 4 | Commenters imagine the hard work behind it without AI, ask how it was possible, and note that years later they still do not know which tools were used for two sequences | Unresolved how-made questions persist in the comment stream for years — a reception-side prompt for what accompanying material audiences still ask for |
| ASMR / sound reaction (commenter reaction) | 3 | Commenters split the experience between nostalgia and ASMR, call it true ASMR, and credit it with awakening an interest in sound | Sound-led response is a small but distinct class for a film with no speech |
| Recognition (Oscar) | 1 | One commenter repeats the Oscar nomination as the point of the comment | The nomination is a minor presence in this sample's own words, whatever its weight elsewhere |

Time-reference tag (non-exclusive): **4** comments reference a specific moment — 1:41 (×2, one calling it the worst part — the sample's only moment-specific dislike), 0:08, and 0:00. Three of the four reference the opening or the closing seconds; one (1:41) references the film's final moment.

No general criticism theme emerged in the frozen sample: beyond the single moment-specific dislike above, no coded comment presents a general negative judgement of the film.

## Retention-shaped evidence

- True retention data: **ABSENT** — no platform retention data stands in any captured source; nothing in this section is retention.
- Heatmap (relative replay-intensity proxy, labeled inference): source.info.json carries a 100-segment heatmap at capture 1. Within this video's own profile, replay intensity is highest at the opening segment (0.0–1.01 s, value 1.0, the field's normalization point), stays above 0.5 for every segment through ~45 s (peaking at ~0.80–0.82 across ~8–18 s), and declines across the second half (first-10-segment mean 0.770 vs last-10 mean 0.137; the 97.97–98.98 s segment reads 0.0 — near-zero relative intensity, a comparative statement only). **Inference label:** these values support comparative statements about where replay concentrates in this profile, and nothing about retention, completion, or how many viewers reached any moment.
- Comment time-references (above) are the only other retention-shaped evidence: 4 in the frozen sample, three to the opening/closing seconds and one to the final moment.

## Absences (standing, in the main body)

- **Shares — NOT ON FILE:** no share figure stands in post.json, source.info.json, or the capture-2 route output.
- **Subscriber base at posting — NOT ON FILE:** no captured source records the channel's base at 2013-03-07; every ratio above is a capture-time ratio.
- **True retention data — NOT ON FILE** (see the proxy section above).
- **Repost / adjacent surfaces — NONE ON FILE for this upload:** no repost or quote counts and no counts for the trilogy companion uploads stand on file; the Showtime prior-upload figure in the caption is a different upload's, is unverified here, and is excluded.
- Comment text and velocity, absent at Observe, were cured in the forms printed above (capped returned sample; 12.21 h short-window observation).

## Reception lesson

The visible comment stream of this ~13.7-year-old, 101-second, speech-free short is dominated by return viewers: in the frozen sample, nostalgia and childhood memory (52 of 136) dwarf every other response, present-day check-ins and explicit credits to the recommendation surface (10) show viewers arriving because the platform resurfaced a piece they already knew, and 21 of the sample read the film through the present AI era — valuing it, in their own words, as human-made work from before AI. At capture scale, the counts show durable circulation — 111.34 lifetime views per capture-time subscriber and a still-moving +11,616 views in a 12.21 h window in November 2026 — and the heatmap's replay concentration in the opening ~45 s matches a piece viewers re-enter from its start. The production-relevant lesson is that for long-tail catalogue work, reception analysis should price rediscovery and generational memory as first-class signals — the comment stream's centre of gravity is who came back and why, not first impressions.

# Production record — packet #2 (YouTube Rkb3IG46sQo)

_Builder record for the seat's cycle file. Steps, tools, measured facts, deviations._

## Charge
Owner send (2026-11-14 ~15:01 EST) via HQ/seat: digest https://youtu.be/Rkb3IG46sQo to the full §3.3 packet form, with the owner's two refinements (category-as-study-object + transferability; transcript at full depth) and the owner's length protocol (full transcript · beat-level frame evidence · length priced as craft).

## Steps & tools
1. **Form read first:** video-digestion INSTRUCTION §3.3 (8 sections), §6 guards incl. §6.6/A1 goods-bads gate, §1.3 consumer rule; founding packet `2026-11-13-ig-dfk4sfvvjjq/digest.md` read for structure/evidence discipline.
2. **Metadata:** yt-dlp 2026.10.26 (pip `--user --break-system-packages`; not preinstalled) `--dump-single-json` → `meta.json`. Title/channel/date/counts in `post.json` (capture 2026-11-14 15:02 EST).
3. **Download:** yt-dlp format ≤1080p (f399 AV1 + f140 AAC, merged) → `source.mp4`, 68,201,619 B, 1,304.96 s, 1920×1080 @30 fps. Probe → `probe.json`.
4. **Transcript:** YouTube **automatic** captions (no manual subtitles exist), json3 with word timings → `segments.json` (643 caption events) → reconstructed 330 sentences → `transcript.txt` (full, timestamped, 4,351 words). Sentence statistics computed (mean 13.2, median 12 words). ASR proper-name garbles inventoried from the stream (§4.4) — the sealed ASR runner was NOT needed (captions existed) and not used.
5. **Frames (length protocol applied):** segmentation rule = transcript/story beats (22 sections) over scene structure. Safety net: uniform grid at 1 frame / 2 s, 480 px → `frames/` **652 frames** (started before the protocol arrived as a 1-per-2s census; kept as the safety net per the protocol's own instruction, denser than the 1-per-10 s minimum). Evidence set: **25 frames at 960 px in `ev/`**, at beat boundaries + every technique-cited moment. Viewing sheets `sheet1.jpg`/`sheet2.jpg` (44 frames @30 s intervals) read firsthand; ev/t95.jpg + ev/t842.jpg individually verified.
6. **Audio/delivery measurement:** audio extracted (16 kHz mono wav) → RMS per 10 s window (`audio_rms_10s.json`: all 131 windows −19.4…−17.6 dBFS), loudnorm (integrated −19.1 LUFS, LRA 2.2 LU), silencedetect at −38 dB/0.45 s (0 detections), −30/−25 dB characterisation; per-minute word counts from caption segment starts (171–219 wpm). First-pass json3 duration-based rate computation was discarded (YouTube caption event durations overlap and overcount — recorded here so the error is not repeated).
7. **Visual change census:** color-histogram distance between consecutive grid frames (`grid_change_census.json`): median step 0.041; 30 changes ≥0.30 → new composition ≈ every 44 s.

## Deviations & failures (honest register)
- **D1 — scene detection failed silently.** ffmpeg `select='gt(scene,0.4)',showinfo` full pass completed exit 0 but produced an **empty** `scene_times.txt` (grep pattern matched nothing in this build's showinfo output); a `metadata=print` validation excerpt was started and killed once the grid census supplied the needed measurement. Consequence: no native-rate hard-cut count; packet prices visual change from the grid census and says so in §10. `scene_times.txt` on disk is the empty file — retained as the failure's evidence, not deleted.
- **D2 — frame naming.** §3 names frames `<t_seconds>-<beat>.jpg`; grid frames are `%04d-grid.jpg` (sequence-numbered at 2 s steps, t = 2×(n−1)) and ev frames follow the founding packet's `t<sec>.jpg` convention. The mapping is stated wherever frames are cited; no citation is ambiguous.
- **D3 — no clips.** §3.3's clip rule (a cut only where stills cannot carry the technique) was applied and produced zero clips: this specimen's techniques are structural/verbal/diagrammatic and every one is carried by frames + transcript. `clips/` exists, empty, by that rule.
- **D4 — packet section order.** §3.3 lists tempo map as section 4 and goods/bads as 5; the owner's refinement required transcript at full depth and length pricing, so the packet runs: catalogue §3 → transcript §4 → visual/tempo §5 → goods/bads incl. length §6 → lessons §7 → idea bank §8 → reception §9 → honesty §10. All eight §3.3 sections are present and labeled; nothing was dropped.
- **D5 — tooling installs.** yt-dlp and python-markdown were pip-installed (user site, --break-system-packages) because the machine lacked them; recorded so the environment change is visible.

## Gate checks (§6 guards)
1. Completeness census: all §3.3 sections present in both forms (md + PDF) — verified after render by section-header grep on the md and page/section check on the PDF.
2. Frame-evidence binding: every catalogue entry cites ≥1 ev/ frame that exists on disk (25 ev frames, all cited files verified present).
3. No captions/subtitles in any produced frame/clip: frames are raw video frames; the artwork's own designed text is the specimen's, not added captions. No clips produced.
4. Goods AND bads: §6a 8 goods, §6c 7 bads, all timestamp-bound (§6.6/A1 gate).
5. Consumer named: §2 (Hadosh Academy production, two named surfaces).
6. Reception slot: §9 charges reception-analysis with the specimen + the B7 question.

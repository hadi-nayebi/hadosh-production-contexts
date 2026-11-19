# Video Digest - "Look What I Can Do" (@aditazzz.music, Instagram reel Dfk4sFVvjJQ)

Motion-graphics digestion of one specimen reel, for text-only consumers. The PDF twin (digest.pdf) carries the same catalogue with embedded frames; frame files referenced below live in `ev/` beside this file.

## Specimen identity & technical facts

- **Reel:** https://www.instagram.com/reel/Dfk4sFVvjJQ/  (post id 18026582060921932)
- **Creator:** @aditazzz.music — 'Aditazzz | AI Doompop & Slopcore'
- **Title:** "Look What I Can Do" — an original song + video made with Claude Code, no video editor (creator's caption; end card: 'MADE WITH CLAUDE OPUS 5.5'). Full version on YouTube (creator: adita_zzz).
- **Posted:** 2026-11-10 13:37:43 · 6,680 likes · 226 comments (at read time, via instagram-cli)
- **File:** source.mp4 — 47,034,224 bytes · VP9 video 1916x1078 (~16:9 landscape) · 30 fps · 198.41 s (3:18.4) · AAC audio · ~1.9 Mbps total
- **Retrieval route:** instagram-cli (post/media-understanding) returned metadata and a stored narrative but NO media URL; hatch-zeitgeist and social.search also returned media=null. The file itself was retrieved with yt-dlp (public DASH streams, no login) and merged with ffmpeg. The browser route was not needed.
- **Method:** ffprobe for technical facts; 1 fps frame extraction (198 frames) read in full; scene detection at thresholds 0.35 (25 cuts) and 0.22 (48 cuts); audio RMS in 0.5 s windows + onset-envelope autocorrelation for tempo (~133 BPM in the song body); 39 targeted evidence frames at 960 px wide.

## Tempo map

Song tempo ~133 BPM (onset-envelope autocorrelation, song body). Hard cuts: 25 at scene-detection threshold 0.35 (48 at 0.22). The energy is intra-shot animation density, not cut rate.

| Section | Time | Hard cuts (0.35 / 0.22) | Audio RMS mean |
|---|---|---|---|
| Terminal chat (cold open) | 0:00-0:13 | 0 / 0 | 0.081 |
| ls counter montage | 0:13-0:21 | 1 / 1 | 0.193 |
| Verse 1: waveform / collage / lyric typing | 0:21-0:35 | 0 / 0 | 0.169 |
| Permission-dialog gag | 0:35-0:43 | 0 / 0 | 0.122 |
| Video wall -> mosaic title -> tile dive | 0:43-0:56 | 0 / 1 | 0.212 |
| Code-review UI cards | 0:56-1:05 | 1 / 2 | 0.179 |
| Social post + comment stack | 1:05-1:20 | 2 / 4 | 0.162 |
| CCTV room + particle typography | 1:20-1:40 | 2 / 6 | 0.192 |
| THE DAILY STANDUP newspaper dataviz | 1:40-2:02 | 0 / 0 | 0.175 |
| Keynote stage | 2:02-2:17 | 6 / 10 | 0.119 |
| Viking hall + Droste frame | 2:17-2:30 | 1 / 6 | 0.234 |
| Review book + terminal reprise | 2:30-2:37 | 0 / 0 | 0.139 |
| I KNEW IT slam + neon city finale | 2:37-2:51 | 6 / 11 | 0.278 |
| Bench, usage receipt, ChatGPT phone | 2:51-3:02 | 6 / 7 | 0.203 |
| End card (static hold) | 3:02-3:18 | 0 / 0 | 0.083 |

## Technique catalogue

### T01 - Typewriter terminal dialogue (cold open inside a chat window)  [0:00-0:14]

**Mechanics:** The video opens inside a fake terminal: a banner card ('Welcome to the studio', working directory ~/look-what-i-can-do, model name) types itself in, then a dialogue types character-by-character with a block cursor. User lines are prefixed with a chevron in white; the AI's replies are prefixed with a dot in orange. Lines accumulate like a real chat log, and when the script outgrows the screen the whole log scrolls up and the banner scrolls away.

**Why it works:** The hook is recognition, not spectacle: the target audience (developers) sees its own work tool behaving like a stage within the first second. Reading speed becomes the edit rhythm - no cuts are needed for 13.6 s because every typed character is a micro-event, and the escalating requests (song -> catchy -> famous) compress the whole premise into four exchanges.

**Evidence frames:** t3.jpg (t=0:03 - banner + first typed exchange); t8.jpg (t=0:08 - dialogue building)

### T02 - Counting list (ls montage with a giant counter)  [0:14-0:21]

**Mechanics:** A fake directory listing ('ls ~/Original Music') types out line by line - each line a joke project name. Beside it, a huge orange numeral climbs in sync with the list's growth (20 projects at t=0:17, 37 at t=0:20), and the sequence lands on the caption '39 projects - 0 video editors'.

**Why it works:** Quantity becomes visible proof instead of a claim. The numeral is a progress bar for the brag: the eye tracks the number while the ear hears the list sung, so two channels carry the same escalation. The zero in the caption is the punchline the counting was setting up.

**Evidence frames:** t17.jpg (t=0:17 - counter at 20, list still growing); t20.jpg (t=0:20 - counter at 37, list near complete)

### T03 - Live-typed lyric text (the words are typed as they are sung)  [0:21-0:35, recurs throughout]

**Mechanics:** In the UI scenes the sung lyric appears at the bottom-left as a terminal line, typed character-by-character in time with the vocal, prefixed with the same chevron as the user's chat lines. The typing restarts per line and keeps pace with the singing rather than appearing as finished caption blocks.

**Why it works:** The text is diegetic - it is the song being 'written' inside the fiction, not a subtitle laid over it. Because the eye is anchored bottom-left by the typing, the rest of the frame is free to change panels without losing the viewer. For a viewer reading along, typing speed IS the singer's timing made visible.

**Evidence frames:** t23.jpg (t=0:23 - lyric line typing under the waveform)

### T04 - Audio-progress waveform + step sequencer  [0:21-0:29]

**Mechanics:** A DAW-style panel shows the song's own waveform as vertical bars - the played portion in orange, the unplayed in grey - with a playhead sweeping across; beside/under it a step-sequencer grid lights its cells in time with the beat.

**Why it works:** The music visualizes itself, and the waveform doubles as a progress bar: the viewer can SEE how much song is left, which quietly holds retention. The sequencer grid gives the beat a visible grid to land on, so later pop-ins can synchronize to it.

**Evidence frames:** t23.jpg (t=0:23 - waveform + lyric typing); t27.jpg (t=0:27 - sequencer + collage panels)

### T05 - Pop-in collage grid (panels arrive one at a time)  [0:24-0:35]

**Mechanics:** Over the dark field, rectangular panels (waveform, sequencer, 3D scene stills, a golden spiral card) pop into a loose grid one at a time, each arrival a small reveal, while the lyric line keeps typing below. The grid is never shown empty first - it is discovered panel by panel.

**Why it works:** Each pop is a micro-reveal on the beat, so a static layout gains rhythm. Density also rewards rewatching: no single viewing catches every panel's content, which is deliberate replay bait.

**Evidence frames:** t27.jpg (t=0:27 - collage mid-build)

### T06 - Multiplying tile wall (exponential grid growth)  [0:31-0:53]

**Mechanics:** A wall of small video tiles grows in rounds: a counter badge starts at '1 things last night' and climbs (5, 11, ...) as each sung 'I made...' line lands and new tiles arrive; later the same device becomes a video-call wall whose participant counter climbs as tiles subdivide the frame (24 in this meeting by t=0:47, with four hero tiles in front). Tiles arrive in waves, not all at once.

**Why it works:** Exponential growth is the visual form of the song's escalation joke ('I made one more thing...'). The counter badge makes the growth legible at a glance - without it, a denser grid would just read as 'busier'.

**Evidence frames:** t31.jpg (t=0:31 - first tile grid; counter at '1 things last night'; lyric list typing below); t47.jpg (t=0:47 - meeting wall at 24, hero tiles before the city screen)

### T07 - Permission-dialog gag (an OS modal as the joke's timing device)  [0:35-0:43]

**Mechanics:** Center-frame, a Claude-Code-style permission modal cycles: 'Allow Adita to direct?' -> 'Allow Adita to produce?' -> 'Allow Adita to win an Oscar?', each with options '1. Yes / 2. Yes, and don't ask again / 3. No, let's not get ahead-'. The selection highlight steps down the list across the three modals.

**Why it works:** It converts a real, shared friction (approval prompts) into comedy using the audience's own muscle memory - everyone who uses these tools has clicked these boxes. The modal's stillness against the moving song makes the final option's selection feel like a held breath.

**Evidence frames:** t41.jpg (t=0:41 - 'Allow Adita to win an Oscar?')

### T08 - Full-screen text slam (one phrase, hard cut, no transition)  [0:42 and 2:37]

**Mechanics:** On the punchline the picture hard-cuts to a single phrase filling the frame in a heavy display face: 'TOO LATE!' in red over black (with '$ claude --dangerously-skip-permissions' and a temperature slider as set dressing), and later 'I KNEW IT!' in white. No fade, no zoom - the cut itself is the impact.

**Why it works:** A slam is punctuation: after seconds of small UI text, one enormous phrase resets the viewer's scale sense and lands the laugh. Because it arrives on a hard cut, the edit IS the drum hit - nothing else needs to move.

**Evidence frames:** t42.jpg (t=0:42 - TOO LATE!); t157.jpg (t=2:37 - I KNEW IT!)

### T09 - Photo-mosaic typography (the title is built from the work itself)  [0:50-0:53]

**Mechanics:** The tile wall bursts apart; hundreds of thumbnails stream up through a dusk sky over the city and re-assemble, tile by tile, into giant letterforms - the frame at t=0:52 catches 'LOOK' mid-formation with more tiles still rising from the rooftops to complete 'LOOK WHAT I CAN DO'.

**Why it works:** Form equals content: the title is literally made of the projects the song brags about. Giving the title a ~3-second construction (instead of a reveal) turns a credit into a set piece, and the viewer watches the letters earn their completeness.

**Evidence frames:** t52.jpg (t=0:52 - 'LOOK' forming from flying tiles)

### T10 - Recursive zoom (dive from the wall into one tile)  [0:54-0:56]

**Mechanics:** Immediately after the mosaic, the camera pushes back down into a single cell of the wall - one desk, one avatar - while locator UI appears: a pill reading 'you are here' and a status pill 'laptop: brought' with a check mark.

**Why it works:** Scale whiplash (city-wide title -> one desk) resets attention after the biggest spectacle beat. The locator pill is a map joke that also teaches the geography: every tile in the wall is a place we could visit.

**Evidence frames:** t55.jpg (t=0:55 - inside one tile, 'you are here')

### T11 - Fake code-review UI with stamp slam  [0:56-1:05]

**Mechanics:** A GitHub-like pull-request screen cycles cards ('#1111 ship: please-hold.mp4', '#1115 ship: asking-for-a-friend.mp4'): an approvals counter spins upward (111 -> 800), a checks panel flips states ('build / tests / prod', a red 'prod is down'), stick-figure reviewers multiply below, and the PR body is an arch window rendered as ASCII/pointillist art. Cards swap with horizontal motion-blur whip transitions (~1.3 s apart). A green 'LGTM' stamp slams in rotated at the merge moment.

**Why it works:** Bureaucratic UI at music-video speed is inherently comic, and the spinning counters give each 1-second card a story (rising approvals, failing prod). The stamp slam is the section's rimshot - a verdict with physical weight arriving on the beat.

**Evidence frames:** t61.jpg (t=1:01 - LGTM stamp over the ASCII arch)

### T12 - Marker highlight + RECEIPT stamp on a social post card  [1:05-1:14]

**Mechanics:** A social post card builds in the center: phrases of the post get yellow marker highlights swept on in reading order ('Principal Slopcore Architect'), and a red 'RECEIPT' stamp presses onto the card. The card later docks into a profile header that assembles piece by piece at right.

**Why it works:** The highlight sweep directs the eye like a teacher's pen - the viewer reads exactly the phrase the joke needs, in order. The stamp turns 'proof' into a prop: the video keeps producing physical verdicts (stamps, receipts) for digital events.

**Evidence frames:** t68.jpg (t=1:08 - post card + stacking comments)

### T13 - Typing comment stack (an escalating list that types itself)  [1:08-1:20]

**Mechanics:** At the right of the post card, comment cards stack downward; each commenter's absurd job title types itself out live ('Senior Slopcore Architect', 'Chief Executive of What's Next', 'VP of Things That Look Complete - 100% complete', 'Director of the Missing Feet - feet.png not found', 'Head of Vibes and Synergy', 'Chief of Artificial Me').

**Why it works:** A list gag needs rhythm, and typing supplies it: each title gets its own small build and landing before the next one tops it. The stack's growth down the frame is also a progress visual - the viewer senses the section's shape without a clock.

**Evidence frames:** t68.jpg (t=1:08 - comment stack mid-build)

### T14 - CCTV room with wall-projected text  [1:20-1:25]

**Mechanics:** The scene switches to a security-camera frame ('CAM 01 LIVING RM', REC dot, running timestamp, 'PTZ 2X'): a dark room, a TV on a stand. On the TV, text types: 'What are your qualifications?' The answer writes itself onto the WALL in large glowing letters: 'I HAVE A SUBSCRIPTION.' The TV then types: 'To what?'

**Why it works:** The found-footage frame licenses a locked-off camera and a slow pace after the dense UI sections. Making the wall the second screen turns text into architecture - the room itself argues with the television.

**Evidence frames:** t82.jpg (t=1:22 - wall text + TV question)

### T15 - Particle typography (words form from dust, hold, and dissolve)  [1:25-1:40]

**Mechanics:** Silver particle streams blow across a black field, condense into letterforms - 'WHAT', then 'LOOK WHAT I CAN DO!' - hold long enough to read, then stream away and re-form as the next phrase. Between phrases a binary tree grows out of the same particles under a tiny corner counter ('things: 1 -> 2 -> 8'). This is the video's vanishing-words device in its purest form: text with mass and weather.

**Why it works:** Forming and dissolving synchronize with phrase boundaries, so the song's key words get a birth and a death instead of an entrance and an exit. The spectacle is also semantically loaded: everything in this video is made of the same dust - projects, words, documents - which the next technique cashes in.

**Evidence frames:** t88.jpg (t=1:28 - title condensed from particles, final word still streaming in); t94.jpg (t=1:34 - 'LOOK WHAT I CAN DO!' lockup)

### T16 - Particle document flip (even the paper is made of dust)  [1:35-1:40]

**Mechanics:** A stack of resume pages, rendered in the same particle material, flips rapidly through its page counter (caught at 1/14, 6/14 and 14/14 across two seconds). The sequence resolves to a title line condensing out of the dust - 'title: AI GURU' - as a glowing halo ring forms above it.

**Why it works:** Reusing one material system across words, trees and documents makes the middle act feel like one world with one physics. The page counter compresses a boring action (reading a 14-page resume) into three beats with a progress readout.

**Evidence frames:** t96.jpg (t=1:36 - resume mid-flip, page 6/14); t99.jpg (t=1:39 - 'title: AI GURU' + halo)

### T17 - Fake-newspaper animated dataviz (THE DAILY STANDUP)  [1:40-2:02]

**Mechanics:** One static broadsheet fills the frame for 22.5 s with ZERO hard cuts; inside it, numbered figures arrive in order (FIG. 20-25). A line chart draws itself ('Humanity's outlook': so back -> meh -> doomed, then spikes). A waffle grid fills red dot by dot ('panicking 0 of 15 -> 15 of 15', one blue dot labeled 'you'). A summary box types out. A stack of Mac minis piles up beside a counter of 10 while a bar chart and donut draw in; an org chart assembles node by node (CEO -> CFO, CTO, Head of HR, VP of Vibes, plus an 'EMPLOYEE OF THE YEAR' badge). A giant counter starts at 3,412,083,117 and ticks down live, then cliff-dives to 1 as its line graph drops with it; a red CORRECTION box appears and a 'HIRED BY MYSELF' stamp slams in; handwritten margin notes fade in ('checks out', '(Not mine. Rendered.)').

**Why it works:** A familiar static medium secretly animating is sustained surprise - the frame never changes, yet nothing in it sits still. Every figure is a joke with a chart as its setup, and the draw-on animations pace the jokes exactly: the eye follows the pen, the line, the counter, and the laugh lands when the drawing completes.

**Evidence frames:** t103.jpg (t=1:43 - FIG. 20: outlook chart drawing, post text highlighting); t114.jpg (t=1:54 - FIG. 23: org chart assembled, 'EMPLOYEE OF THE YEAR'); t116.jpg (t=1:56 - FIG. 24: jobs counter ticking down from 3.41 billion)

### T18 - Keynote stage: slide build + heckler chat  [2:02-2:17]

**Mechanics:** An arena stage with a huge curved screen: the slide title builds line by line with highlight bars ('THE GREATEST TRANSFORMATION / IN HUMAN / HISTORY'), stat cards read 'MINUTES 18 / SLIDES 0', a slide counter shows '2 / 40'. Audience chat bubbles pop in at the side ('he's buffering', 'It's a pause. for effect', 'Great point, will circle back on this!'). This is the fastest-cut section of the video: 6 hard cuts in 14.5 s (10 at the looser detection threshold).

**Why it works:** Presentation software becomes a stage and the chat becomes a laugh track that also motivates the cuts - each cut feels like the broadcast switching cameras. The empty-slide stats (18 minutes, 0 slides) tell the joke before the speaker says a word.

**Evidence frames:** t127.jpg (t=2:07 - title building on the big screen)

### T19 - Droste recursion (THIS VIDEO contains this video)  [2:17-2:30]

**Mechanics:** In a candlelit Viking hall, the seeress character sits beside an ornate framed picture labeled 'THIS VIDEO' - which contains the same scene, same character, same frame, and inside that a third, smaller iteration. Three nesting levels are legible in a single still.

**Why it works:** One image states the whole recursive premise of the piece (a video about making videos, made by the tool it depicts). It is also the most pause-worthy frame in the video - the kind of still viewers screenshot, which is free distribution.

**Evidence frames:** t141.jpg (t=2:21 - three levels of recursion)

### T20 - Building-as-display typography (a tower's windows spell the title)  [2:37-2:50]

**Mechanics:** In the neon night-city finale, a skyscraper's window grid lights up letter by letter until the facade reads 'LOOK WHAT I CAN DO!' in pink neon cells; the camera orbits the tower while it completes. Nearby devices rhyme: an LED marquee scrolls 'NOW SHOWING - EVERYTHING WE...', robots dance on a checkered plaza, and another facade tiles moon-face icons into letterforms.

**Why it works:** The title at architectural scale is the triumph beat - the claim has outgrown screens and now occupies the city. Because the letters are made of lit windows, the typography feels discovered in the world rather than overlaid on it.

**Evidence frames:** t163.jpg (t=2:43 - tower facade completing the title)

### T21 - Printed receipt gag + the app switch  [2:50-3:02]

**Mechanics:** A paper 'USAGE RECEIPT' prints out of the robot (header: 'YOU'VE REACHED YOUR USAGE LIMIT'), held up beside a post reading 'I have an AI slop empire to build.' and a system card: 'You're out of usage credits - Resets Saturday at 3:00 AM'. The character then picks up a phone and types 'Hey ChatGPT?' - and the rival app's chat UI answers in its own voice: 'Heyyy! What are we getting into today?'

**Why it works:** The abstract limit becomes a physical artifact (a receipt you can hold), continuing the video's habit of giving digital events paper bodies. The brand switch is told entirely through UI chrome - no narration needed - and it restarts the story's engine, which is the loop mechanism (see end card).

**Evidence frames:** t175.jpg (t=2:55 - the usage receipt); t178.jpg (t=2:58 - ChatGPT answers)

### T22 - Interrupted stream -> text slam (the mid-word cut)  [2:32-2:37]

**Mechanics:** Back in the terminal: 'Claude? / Yes? / Do you think I'm talented?' The reply begins typing - 'You are extraordinarily-' - and is cut mid-word; a tiny system note appears ('Interrupted by user'), and the user's full-screen shout replaces the whole screen: 'I KNEW IT!'.

**Why it works:** Everyone who chats with these tools knows this exact moment; the mid-word cut is the timing mechanism of the joke - the compliment never needs to finish. It also reprises the opening's typewriter in a minor key, bookending the video with its first device.

**Evidence frames:** t156.jpg (t=2:36 - reply cut mid-word); t157.jpg (t=2:37 - I KNEW IT! slam)

### T23 - Comic chapter-map motif (a table of contents that returns)  [1:05, 2:12, 2:51]

**Mechanics:** Between acts, a storyboard grid flashes: 'ADITAZZZ - A COMIC OF EVERYTHING WE MADE - ISSUE #1' with numbered panels naming the scenes (03 SHIP IT, 04 THE COMMENTS, 07 THE DAILY STANDUP, 09 THE SEERESS, 10 I KNEW IT, 11 PLEASE HOLD, 12 USAGE LIMIT). Later appearances show more panels filled.

**Why it works:** The map promises structure ('there are twelve of these!') and converts scene changes into chapter turns. On repeat viewing it functions as a progress tracker - the audience can locate itself in the whole.

**Evidence frames:** t132.jpg (t=2:12 - chapter map, later panels); t171.jpg (t=2:51 - panels 11-12: PLEASE HOLD / USAGE LIMIT)

### T24 - Static end card as the loop anchor  [3:02-3:18]

**Mechanics:** After the bench scene dims, a hard cut to a static card held for ~16 s: 'SUBSCRIBE WHILE / my usage resets', a red subscribe pill with the handle @adita_zzz, a green arrow, and a footer: 'LOOK WHAT I CAN DO - MADE WITH CLAUDE OPUS 5.5'. Nothing moves.

**Why it works:** The call to action completes the story's premise - the usage limit that ended the plot is now the viewer's reason to subscribe. The long still tail is end-screen real estate: it gives the platform a clean surface, and when the video replays, the terminal opening re-enters against silence like a new session starting.

**Evidence frames:** t183.jpg (t=3:03 - end card)

### T25 - Two-world color & type system (orange numbers, monospace UI vs dusk spectacle)  [throughout]

**Mechanics:** Two consistent worlds alternate. The UI world: near-black green-tinted background, monospace type, white for the user, safety-orange reserved for the AI's voice and for ALL big numerals, green only for approvals/shipped states, red only for alarms and stamps. The spectacle world: dusk purple-blue cities, warm candlelit interiors, silver particle fields - always with the same condensed display face for the title phrase wherever it appears (sky, tower, particles, book cover).

**Why it works:** Color tells the viewer which reality they are in before a word is read, and the recurring orange numeral becomes a brand asset - by the finale, orange digits alone signal 'counting brag'. One title face across four materials (tiles, windows, particles, print) makes the phrase itself the logo.

**Evidence frames:** t17.jpg (t=0:17 - UI world: orange counter); t163.jpg (t=2:43 - spectacle world: neon tower)

## Lessons for our shorts (Hadosh Academy)

| Technique | Where it plugs in | Build cost / note |
|---|---|---|
| Typewriter dialogue / interrupted stream | Openings + hooks | Open the short inside a familiar UI (chat, dictionary app) and let the question type itself; cut a sentence mid-word into the title slam. LOW cost: character-reveal text timed from word onsets we already extract; no new machinery, one container variant. |
| Live-typed lyric text | Word animation (as depicted content, never as a subtitle plate) | Typing text is lawful for us when it is the SUBJECT (a chat being written, a word being spelled), not a caption. MEDIUM cost: per-character timing derived from ASR word onsets; renderer must hold each completed line rock-still for readability (placement law). |
| Counting list + giant numeral | Vocabulary / sentence-analysis shorts | '1 sentence - 5 languages' counter while example tiles stack: the number is the progress bar. LOW cost: counter + staggered list reveal, pure config. |
| Marker highlight sweep | Word focus in language shorts | Highlight the taught word at its spoken onset while the rest of the sentence stays dim - reading order taught by light. LOW cost: background-size sweep keyed to onset data we already produce in the ear pipeline. |
| Multiplying tile wall | Transitions / batch reveals | Word tiles multiply per language (EN -> +TR -> +FA) as the growth visual for 'one sentence, many languages'. MEDIUM cost: a grid container variant in the assembler; tiles are existing assets. |
| Photo-mosaic typography | Openings (series finales / recaps) | The episode title spelled by the batch's own thumbnails. MEDIUM-HIGH cost: precomputed tile positions from a letter mask; build once as a reusable opening variant. |
| Particle typography (form & dissolve) | Word animation / transitions - the vanishing-words device | A word condenses from dust, holds to be READ, dissolves; the same dust re-forms as its translation. HIGH cost: canvas particle system (~2-4k particles at phone size is feasible); must pass legibility gates - particles settle fully and hold before dissolving. |
| Text slam | Transition blocks | One-word slams as punctuation between containers. LOW cost: keyframed scale/opacity + hard cut; fits the transition family directly. |
| Animated fake-document dataviz (newspaper) | Diagram / sentence-analysis containers | A 'grammar broadsheet' whose chart draws itself; the org-chart assembly maps 1:1 onto a sentence diagram building node by node per spoken phrase. MEDIUM cost: SVG draw-on paths + counters, deterministic from config - our machinery's home turf. |
| Stamp slam (LGTM / HIRED / RECEIPT) | Review moments, endings, community posts | A verdict stamp as punctuation for 'correct' / 'complete'. LOW cost: one rotated element + impact keyframe. |
| Building-as-display typography | Openings for place/city vocabulary | Shop windows light up letter by letter to spell the target word. MEDIUM cost: cell grid + letter masks, deterministic. |
| Comic chapter map | Series design (batch shorts) | A returning map frame; each episode lights its own panel - a series-level retention device. LOW cost once templated. |
| Tempo lesson (meta) | All containers | The specimen's energy is intra-shot animation density, NOT cut rate: 25 hard cuts in 198 s, and one 22.5 s stretch has none. Budget motion EVENTS per second inside containers instead of planning more cuts. Cost: a planning rule - free. |
| Droste recursion | Thumbnails / posters only | Honest note: spectacular but narrow; as a one-off thumbnail device, not a container. HIGH cost, do not build into the assembler. |
| Static end card | Endings | Specimen holds 16 s (long-form). For shorts compress to ~1.5-2 s with the series promise. LOW cost. |

## Idea bank (steal-able variants, not copies)

1. The prompt types itself: a chat window asks the exact question the short answers; the answer slams in as the title (hook = recognition, first 2 seconds).
2. Word-counter cold open: a giant numeral counts example sentences as they stack - the short ends when the counter reaches '1 sentence - 5 languages'.
3. Highlight-pen reading: the taught word is marker-highlighted at its spoken onset while the rest of the sentence sits dim - the eye is taught where to look.
4. Sentence-tree assembly: a diagram grows node by node like an org chart, one node per spoken phrase; the final node gets a stamp: COMPLETE SENTENCE.
5. Vanishing-word drill: a word forms from dust, is read aloud, dissolves - and the SAME dust re-forms as its translation. Matter is conserved across languages.
6. Mosaic title for a series recap: the title spelled by the batch's own thumbnails, tiles flying in from the edges.
7. Approval-dialog hook: 'Allow this word to change its meaning? 1. Yes  2. Yes, and don't ask again' - TOO LATE slam into an etymology short.
8. Chapter map for a 12-part series: one comic grid; every episode opens with its panel lighting up, so returning viewers see the series filling in.
9. Window-lit letters: a night street where shop windows light up one by one to spell the target word (place vocabulary).
10. Receipt ending: a printed receipt itemizes what the viewer just learned ('1 sentence - 4 languages - 0 excuses') as the end card.
11. Interrupted answer: the 'teacher' text starts explaining, is cut mid-word by the learner's shout, and the real demonstration replaces it.
12. Progress waveform as set dressing: a depicted recorder on screen shows the sentence's waveform filling as it is spoken - a retention clock that lives inside the fiction, not as an overlay.

## What could NOT be evidenced

- Beat-exact edit sync could NOT be evidenced: tempo (~133 BPM) comes from autocorrelation of the audio onset envelope at section level, and most scenes are continuous renders - per-beat cut claims would be false precision. The tempo map therefore reports hard-cut counts and audio energy per section, not beat grids.
- Camera moves inside the AI-generated 3D scenes (Viking hall, neon city) cannot be cleanly separated from generated morphing at 1 fps sampling; they are described as apparent moves (orbit/push) only where consecutive frames make the move unambiguous (tile dive, tower orbit).
- The video does NOT seamlessly loop visually (the end card is not frame 1). Its loop is narrative: a new chat with a rival assistant restarts the story's engine. Reported as such, not as a visual loop.
- Audio analysis is program-level only (the creator's original song, no stems): RMS energy and tempo estimates, no per-instrument or per-vocal claims.
- Dialogue and on-screen text were read from the extracted frames; a small number of low-resolution UI strings (fine print in modals and receipts) are paraphrased where the 960 px frames do not resolve them.

# -*- coding: utf-8 -*-
"""Digest content + builders for the Dfk4sFVvjJQ specimen. Generates digest.md and digest.pdf."""
import os

BASE = os.path.dirname(os.path.abspath(__file__))

IDENTITY = [
    ("Reel", "https://www.instagram.com/reel/Dfk4sFVvjJQ/  (post id 18026582060921932)"),
    ("Creator", "@aditazzz.music — 'Aditazzz | AI Doompop & Slopcore'"),
    ("Title", "\"Look What I Can Do\" — an original song + video made with Claude Code, no video editor (creator's caption; end card: 'MADE WITH CLAUDE OPUS 5.5'). Full version on YouTube (creator: adita_zzz)."),
    ("Posted", "2026-11-10 13:37:43 · 6,680 likes · 226 comments (at read time, via instagram-cli)"),
    ("File", "source.mp4 — 47,034,224 bytes · VP9 video 1916x1078 (~16:9 landscape) · 30 fps · 198.41 s (3:18.4) · AAC audio · ~1.9 Mbps total"),
    ("Retrieval route", "instagram-cli (post/media-understanding) returned metadata and a stored narrative but NO media URL; hatch-zeitgeist and social.search also returned media=null. The file itself was retrieved with yt-dlp (public DASH streams, no login) and merged with ffmpeg. The browser route was not needed."),
    ("Method", "ffprobe for technical facts; 1 fps frame extraction (198 frames) read in full; scene detection at thresholds 0.35 (25 cuts) and 0.22 (48 cuts); audio RMS in 0.5 s windows + onset-envelope autocorrelation for tempo (~133 BPM in the song body); 39 targeted evidence frames at 960 px wide."),
]

TEMPO_SECTIONS = [
    # name, t0, t1, cuts@0.35, cuts@0.22, rms mean
    ("Terminal chat (cold open)", 0, 13.6, 0, 0, 0.081),
    ("ls counter montage", 13.6, 21, 1, 1, 0.193),
    ("Verse 1: waveform / collage / lyric typing", 21, 35, 0, 0, 0.169),
    ("Permission-dialog gag", 35, 43, 0, 0, 0.122),
    ("Video wall -> mosaic title -> tile dive", 43, 56, 0, 1, 0.212),
    ("Code-review UI cards", 56, 65, 1, 2, 0.179),
    ("Social post + comment stack", 65, 80, 2, 4, 0.162),
    ("CCTV room + particle typography", 80, 100, 2, 6, 0.192),
    ("THE DAILY STANDUP newspaper dataviz", 100, 122.5, 0, 0, 0.175),
    ("Keynote stage", 122.5, 137, 6, 10, 0.119),
    ("Viking hall + Droste frame", 137, 150, 1, 6, 0.234),
    ("Review book + terminal reprise", 150, 157, 0, 0, 0.139),
    ("I KNEW IT slam + neon city finale", 157, 171, 6, 11, 0.278),
    ("Bench, usage receipt, ChatGPT phone", 171, 182, 6, 7, 0.203),
    ("End card (static hold)", 182, 198.4, 0, 0, 0.083),
]

def fmt_t(s):
    return f"{int(s//60)}:{int(s%60):02d}"

TECHNIQUES = [
 dict(n="Typewriter terminal dialogue (cold open inside a chat window)", t="0:00-0:14",
   mech="The video opens inside a fake terminal: a banner card ('Welcome to the studio', working directory ~/look-what-i-can-do, model name) types itself in, then a dialogue types character-by-character with a block cursor. User lines are prefixed with a chevron in white; the AI's replies are prefixed with a dot in orange. Lines accumulate like a real chat log, and when the script outgrows the screen the whole log scrolls up and the banner scrolls away.",
   why="The hook is recognition, not spectacle: the target audience (developers) sees its own work tool behaving like a stage within the first second. Reading speed becomes the edit rhythm - no cuts are needed for 13.6 s because every typed character is a micro-event, and the escalating requests (song -> catchy -> famous) compress the whole premise into four exchanges.",
   frames=[("t3.jpg","t=0:03 - banner + first typed exchange"),("t8.jpg","t=0:08 - dialogue building")]),
 dict(n="Counting list (ls montage with a giant counter)", t="0:14-0:21",
   mech="A fake directory listing ('ls ~/Original Music') types out line by line - each line a joke project name. Beside it, a huge orange numeral climbs in sync with the list's growth (20 projects at t=0:17, 37 at t=0:20), and the sequence lands on the caption '39 projects - 0 video editors'.",
   why="Quantity becomes visible proof instead of a claim. The numeral is a progress bar for the brag: the eye tracks the number while the ear hears the list sung, so two channels carry the same escalation. The zero in the caption is the punchline the counting was setting up.",
   frames=[("t17.jpg","t=0:17 - counter at 20, list still growing"),("t20.jpg","t=0:20 - counter at 37, list near complete")]),
 dict(n="Live-typed lyric text (the words are typed as they are sung)", t="0:21-0:35, recurs throughout",
   mech="In the UI scenes the sung lyric appears at the bottom-left as a terminal line, typed character-by-character in time with the vocal, prefixed with the same chevron as the user's chat lines. The typing restarts per line and keeps pace with the singing rather than appearing as finished caption blocks.",
   why="The text is diegetic - it is the song being 'written' inside the fiction, not a subtitle laid over it. Because the eye is anchored bottom-left by the typing, the rest of the frame is free to change panels without losing the viewer. For a viewer reading along, typing speed IS the singer's timing made visible.",
   frames=[("t23.jpg","t=0:23 - lyric line typing under the waveform")]),
 dict(n="Audio-progress waveform + step sequencer", t="0:21-0:29",
   mech="A DAW-style panel shows the song's own waveform as vertical bars - the played portion in orange, the unplayed in grey - with a playhead sweeping across; beside/under it a step-sequencer grid lights its cells in time with the beat.",
   why="The music visualizes itself, and the waveform doubles as a progress bar: the viewer can SEE how much song is left, which quietly holds retention. The sequencer grid gives the beat a visible grid to land on, so later pop-ins can synchronize to it.",
   frames=[("t23.jpg","t=0:23 - waveform + lyric typing"),("t27.jpg","t=0:27 - sequencer + collage panels")]),
 dict(n="Pop-in collage grid (panels arrive one at a time)", t="0:24-0:35",
   mech="Over the dark field, rectangular panels (waveform, sequencer, 3D scene stills, a golden spiral card) pop into a loose grid one at a time, each arrival a small reveal, while the lyric line keeps typing below. The grid is never shown empty first - it is discovered panel by panel.",
   why="Each pop is a micro-reveal on the beat, so a static layout gains rhythm. Density also rewards rewatching: no single viewing catches every panel's content, which is deliberate replay bait.",
   frames=[("t27.jpg","t=0:27 - collage mid-build")]),
 dict(n="Multiplying tile wall (exponential grid growth)", t="0:31-0:53",
   mech="A wall of small video tiles grows in rounds: a counter badge starts at '1 things last night' and climbs (5, 11, ...) as each sung 'I made...' line lands and new tiles arrive; later the same device becomes a video-call wall whose participant counter climbs as tiles subdivide the frame (24 in this meeting by t=0:47, with four hero tiles in front). Tiles arrive in waves, not all at once.",
   why="Exponential growth is the visual form of the song's escalation joke ('I made one more thing...'). The counter badge makes the growth legible at a glance - without it, a denser grid would just read as 'busier'.",
   frames=[("t31.jpg","t=0:31 - first tile grid; counter at '1 things last night'; lyric list typing below"),("t47.jpg","t=0:47 - meeting wall at 24, hero tiles before the city screen")]),
 dict(n="Permission-dialog gag (an OS modal as the joke's timing device)", t="0:35-0:43",
   mech="Center-frame, a Claude-Code-style permission modal cycles: 'Allow Adita to direct?' -> 'Allow Adita to produce?' -> 'Allow Adita to win an Oscar?', each with options '1. Yes / 2. Yes, and don't ask again / 3. No, let's not get ahead-'. The selection highlight steps down the list across the three modals.",
   why="It converts a real, shared friction (approval prompts) into comedy using the audience's own muscle memory - everyone who uses these tools has clicked these boxes. The modal's stillness against the moving song makes the final option's selection feel like a held breath.",
   frames=[("t41.jpg","t=0:41 - 'Allow Adita to win an Oscar?'")]),
 dict(n="Full-screen text slam (one phrase, hard cut, no transition)", t="0:42 and 2:37",
   mech="On the punchline the picture hard-cuts to a single phrase filling the frame in a heavy display face: 'TOO LATE!' in red over black (with '$ claude --dangerously-skip-permissions' and a temperature slider as set dressing), and later 'I KNEW IT!' in white. No fade, no zoom - the cut itself is the impact.",
   why="A slam is punctuation: after seconds of small UI text, one enormous phrase resets the viewer's scale sense and lands the laugh. Because it arrives on a hard cut, the edit IS the drum hit - nothing else needs to move.",
   frames=[("t42.jpg","t=0:42 - TOO LATE!"),("t157.jpg","t=2:37 - I KNEW IT!")]),
 dict(n="Photo-mosaic typography (the title is built from the work itself)", t="0:50-0:53",
   mech="The tile wall bursts apart; hundreds of thumbnails stream up through a dusk sky over the city and re-assemble, tile by tile, into giant letterforms - the frame at t=0:52 catches 'LOOK' mid-formation with more tiles still rising from the rooftops to complete 'LOOK WHAT I CAN DO'.",
   why="Form equals content: the title is literally made of the projects the song brags about. Giving the title a ~3-second construction (instead of a reveal) turns a credit into a set piece, and the viewer watches the letters earn their completeness.",
   frames=[("t52.jpg","t=0:52 - 'LOOK' forming from flying tiles")]),
 dict(n="Recursive zoom (dive from the wall into one tile)", t="0:54-0:56",
   mech="Immediately after the mosaic, the camera pushes back down into a single cell of the wall - one desk, one avatar - while locator UI appears: a pill reading 'you are here' and a status pill 'laptop: brought' with a check mark.",
   why="Scale whiplash (city-wide title -> one desk) resets attention after the biggest spectacle beat. The locator pill is a map joke that also teaches the geography: every tile in the wall is a place we could visit.",
   frames=[("t55.jpg","t=0:55 - inside one tile, 'you are here'")]),
 dict(n="Fake code-review UI with stamp slam", t="0:56-1:05",
   mech="A GitHub-like pull-request screen cycles cards ('#1111 ship: please-hold.mp4', '#1115 ship: asking-for-a-friend.mp4'): an approvals counter spins upward (111 -> 800), a checks panel flips states ('build / tests / prod', a red 'prod is down'), stick-figure reviewers multiply below, and the PR body is an arch window rendered as ASCII/pointillist art. Cards swap with horizontal motion-blur whip transitions (~1.3 s apart). A green 'LGTM' stamp slams in rotated at the merge moment.",
   why="Bureaucratic UI at music-video speed is inherently comic, and the spinning counters give each 1-second card a story (rising approvals, failing prod). The stamp slam is the section's rimshot - a verdict with physical weight arriving on the beat.",
   frames=[("t61.jpg","t=1:01 - LGTM stamp over the ASCII arch")]),
 dict(n="Marker highlight + RECEIPT stamp on a social post card", t="1:05-1:14",
   mech="A social post card builds in the center: phrases of the post get yellow marker highlights swept on in reading order ('Principal Slopcore Architect'), and a red 'RECEIPT' stamp presses onto the card. The card later docks into a profile header that assembles piece by piece at right.",
   why="The highlight sweep directs the eye like a teacher's pen - the viewer reads exactly the phrase the joke needs, in order. The stamp turns 'proof' into a prop: the video keeps producing physical verdicts (stamps, receipts) for digital events.",
   frames=[("t68.jpg","t=1:08 - post card + stacking comments")]),
 dict(n="Typing comment stack (an escalating list that types itself)", t="1:08-1:20",
   mech="At the right of the post card, comment cards stack downward; each commenter's absurd job title types itself out live ('Senior Slopcore Architect', 'Chief Executive of What's Next', 'VP of Things That Look Complete - 100% complete', 'Director of the Missing Feet - feet.png not found', 'Head of Vibes and Synergy', 'Chief of Artificial Me').",
   why="A list gag needs rhythm, and typing supplies it: each title gets its own small build and landing before the next one tops it. The stack's growth down the frame is also a progress visual - the viewer senses the section's shape without a clock.",
   frames=[("t68.jpg","t=1:08 - comment stack mid-build")]),
 dict(n="CCTV room with wall-projected text", t="1:20-1:25",
   mech="The scene switches to a security-camera frame ('CAM 01 LIVING RM', REC dot, running timestamp, 'PTZ 2X'): a dark room, a TV on a stand. On the TV, text types: 'What are your qualifications?' The answer writes itself onto the WALL in large glowing letters: 'I HAVE A SUBSCRIPTION.' The TV then types: 'To what?'",
   why="The found-footage frame licenses a locked-off camera and a slow pace after the dense UI sections. Making the wall the second screen turns text into architecture - the room itself argues with the television.",
   frames=[("t82.jpg","t=1:22 - wall text + TV question")]),
 dict(n="Particle typography (words form from dust, hold, and dissolve)", t="1:25-1:40",
   mech="Silver particle streams blow across a black field, condense into letterforms - 'WHAT', then 'LOOK WHAT I CAN DO!' - hold long enough to read, then stream away and re-form as the next phrase. Between phrases a binary tree grows out of the same particles under a tiny corner counter ('things: 1 -> 2 -> 8'). This is the video's vanishing-words device in its purest form: text with mass and weather.",
   why="Forming and dissolving synchronize with phrase boundaries, so the song's key words get a birth and a death instead of an entrance and an exit. The spectacle is also semantically loaded: everything in this video is made of the same dust - projects, words, documents - which the next technique cashes in.",
   frames=[("t88.jpg","t=1:28 - title condensed from particles, final word still streaming in"),("t94.jpg","t=1:34 - 'LOOK WHAT I CAN DO!' lockup")]),
 dict(n="Particle document flip (even the paper is made of dust)", t="1:35-1:40",
   mech="A stack of resume pages, rendered in the same particle material, flips rapidly through its page counter (caught at 1/14, 6/14 and 14/14 across two seconds). The sequence resolves to a title line condensing out of the dust - 'title: AI GURU' - as a glowing halo ring forms above it.",
   why="Reusing one material system across words, trees and documents makes the middle act feel like one world with one physics. The page counter compresses a boring action (reading a 14-page resume) into three beats with a progress readout.",
   frames=[("t96.jpg","t=1:36 - resume mid-flip, page 6/14"),("t99.jpg","t=1:39 - 'title: AI GURU' + halo")]),
 dict(n="Fake-newspaper animated dataviz (THE DAILY STANDUP)", t="1:40-2:02",
   mech="One static broadsheet fills the frame for 22.5 s with ZERO hard cuts; inside it, numbered figures arrive in order (FIG. 20-25). A line chart draws itself ('Humanity's outlook': so back -> meh -> doomed, then spikes). A waffle grid fills red dot by dot ('panicking 0 of 15 -> 15 of 15', one blue dot labeled 'you'). A summary box types out. A stack of Mac minis piles up beside a counter of 10 while a bar chart and donut draw in; an org chart assembles node by node (CEO -> CFO, CTO, Head of HR, VP of Vibes, plus an 'EMPLOYEE OF THE YEAR' badge). A giant counter starts at 3,412,083,117 and ticks down live, then cliff-dives to 1 as its line graph drops with it; a red CORRECTION box appears and a 'HIRED BY MYSELF' stamp slams in; handwritten margin notes fade in ('checks out', '(Not mine. Rendered.)').",
   why="A familiar static medium secretly animating is sustained surprise - the frame never changes, yet nothing in it sits still. Every figure is a joke with a chart as its setup, and the draw-on animations pace the jokes exactly: the eye follows the pen, the line, the counter, and the laugh lands when the drawing completes.",
   frames=[("t103.jpg","t=1:43 - FIG. 20: outlook chart drawing, post text highlighting"),("t114.jpg","t=1:54 - FIG. 23: org chart assembled, 'EMPLOYEE OF THE YEAR'"),("t116.jpg","t=1:56 - FIG. 24: jobs counter ticking down from 3.41 billion")]),
 dict(n="Keynote stage: slide build + heckler chat", t="2:02-2:17",
   mech="An arena stage with a huge curved screen: the slide title builds line by line with highlight bars ('THE GREATEST TRANSFORMATION / IN HUMAN / HISTORY'), stat cards read 'MINUTES 18 / SLIDES 0', a slide counter shows '2 / 40'. Audience chat bubbles pop in at the side ('he's buffering', 'It's a pause. for effect', 'Great point, will circle back on this!'). This is the fastest-cut section of the video: 6 hard cuts in 14.5 s (10 at the looser detection threshold).",
   why="Presentation software becomes a stage and the chat becomes a laugh track that also motivates the cuts - each cut feels like the broadcast switching cameras. The empty-slide stats (18 minutes, 0 slides) tell the joke before the speaker says a word.",
   frames=[("t127.jpg","t=2:07 - title building on the big screen")]),
 dict(n="Droste recursion (THIS VIDEO contains this video)", t="2:17-2:30",
   mech="In a candlelit Viking hall, the seeress character sits beside an ornate framed picture labeled 'THIS VIDEO' - which contains the same scene, same character, same frame, and inside that a third, smaller iteration. Three nesting levels are legible in a single still.",
   why="One image states the whole recursive premise of the piece (a video about making videos, made by the tool it depicts). It is also the most pause-worthy frame in the video - the kind of still viewers screenshot, which is free distribution.",
   frames=[("t141.jpg","t=2:21 - three levels of recursion")]),
 dict(n="Building-as-display typography (a tower's windows spell the title)", t="2:37-2:50",
   mech="In the neon night-city finale, a skyscraper's window grid lights up letter by letter until the facade reads 'LOOK WHAT I CAN DO!' in pink neon cells; the camera orbits the tower while it completes. Nearby devices rhyme: an LED marquee scrolls 'NOW SHOWING - EVERYTHING WE...', robots dance on a checkered plaza, and another facade tiles moon-face icons into letterforms.",
   why="The title at architectural scale is the triumph beat - the claim has outgrown screens and now occupies the city. Because the letters are made of lit windows, the typography feels discovered in the world rather than overlaid on it.",
   frames=[("t163.jpg","t=2:43 - tower facade completing the title")]),
 dict(n="Printed receipt gag + the app switch", t="2:50-3:02",
   mech="A paper 'USAGE RECEIPT' prints out of the robot (header: 'YOU'VE REACHED YOUR USAGE LIMIT'), held up beside a post reading 'I have an AI slop empire to build.' and a system card: 'You're out of usage credits - Resets Saturday at 3:00 AM'. The character then picks up a phone and types 'Hey ChatGPT?' - and the rival app's chat UI answers in its own voice: 'Heyyy! What are we getting into today?'",
   why="The abstract limit becomes a physical artifact (a receipt you can hold), continuing the video's habit of giving digital events paper bodies. The brand switch is told entirely through UI chrome - no narration needed - and it restarts the story's engine, which is the loop mechanism (see end card).",
   frames=[("t175.jpg","t=2:55 - the usage receipt"),("t178.jpg","t=2:58 - ChatGPT answers")]),
 dict(n="Interrupted stream -> text slam (the mid-word cut)", t="2:32-2:37",
   mech="Back in the terminal: 'Claude? / Yes? / Do you think I'm talented?' The reply begins typing - 'You are extraordinarily-' - and is cut mid-word; a tiny system note appears ('Interrupted by user'), and the user's full-screen shout replaces the whole screen: 'I KNEW IT!'.",
   why="Everyone who chats with these tools knows this exact moment; the mid-word cut is the timing mechanism of the joke - the compliment never needs to finish. It also reprises the opening's typewriter in a minor key, bookending the video with its first device.",
   frames=[("t156.jpg","t=2:36 - reply cut mid-word"),("t157.jpg","t=2:37 - I KNEW IT! slam")]),
 dict(n="Comic chapter-map motif (a table of contents that returns)", t="1:05, 2:12, 2:51",
   mech="Between acts, a storyboard grid flashes: 'ADITAZZZ - A COMIC OF EVERYTHING WE MADE - ISSUE #1' with numbered panels naming the scenes (03 SHIP IT, 04 THE COMMENTS, 07 THE DAILY STANDUP, 09 THE SEERESS, 10 I KNEW IT, 11 PLEASE HOLD, 12 USAGE LIMIT). Later appearances show more panels filled.",
   why="The map promises structure ('there are twelve of these!') and converts scene changes into chapter turns. On repeat viewing it functions as a progress tracker - the audience can locate itself in the whole.",
   frames=[("t132.jpg","t=2:12 - chapter map, later panels"),("t171.jpg","t=2:51 - panels 11-12: PLEASE HOLD / USAGE LIMIT")]),
 dict(n="Static end card as the loop anchor", t="3:02-3:18",
   mech="After the bench scene dims, a hard cut to a static card held for ~16 s: 'SUBSCRIBE WHILE / my usage resets', a red subscribe pill with the handle @adita_zzz, a green arrow, and a footer: 'LOOK WHAT I CAN DO - MADE WITH CLAUDE OPUS 5.5'. Nothing moves.",
   why="The call to action completes the story's premise - the usage limit that ended the plot is now the viewer's reason to subscribe. The long still tail is end-screen real estate: it gives the platform a clean surface, and when the video replays, the terminal opening re-enters against silence like a new session starting.",
   frames=[("t183.jpg","t=3:03 - end card")]),
 dict(n="Two-world color & type system (orange numbers, monospace UI vs dusk spectacle)", t="throughout",
   mech="Two consistent worlds alternate. The UI world: near-black green-tinted background, monospace type, white for the user, safety-orange reserved for the AI's voice and for ALL big numerals, green only for approvals/shipped states, red only for alarms and stamps. The spectacle world: dusk purple-blue cities, warm candlelit interiors, silver particle fields - always with the same condensed display face for the title phrase wherever it appears (sky, tower, particles, book cover).",
   why="Color tells the viewer which reality they are in before a word is read, and the recurring orange numeral becomes a brand asset - by the finale, orange digits alone signal 'counting brag'. One title face across four materials (tiles, windows, particles, print) makes the phrase itself the logo.",
   frames=[("t17.jpg","t=0:17 - UI world: orange counter"),("t163.jpg","t=2:43 - spectacle world: neon tower")]),
]

LESSONS = [
 ("Typewriter dialogue / interrupted stream", "Openings + hooks", "Open the short inside a familiar UI (chat, dictionary app) and let the question type itself; cut a sentence mid-word into the title slam. LOW cost: character-reveal text timed from word onsets we already extract; no new machinery, one container variant."),
 ("Live-typed lyric text", "Word animation (as depicted content, never as a subtitle plate)", "Typing text is lawful for us when it is the SUBJECT (a chat being written, a word being spelled), not a caption. MEDIUM cost: per-character timing derived from ASR word onsets; renderer must hold each completed line rock-still for readability (placement law)."),
 ("Counting list + giant numeral", "Vocabulary / sentence-analysis shorts", "'1 sentence - 5 languages' counter while example tiles stack: the number is the progress bar. LOW cost: counter + staggered list reveal, pure config."),
 ("Marker highlight sweep", "Word focus in language shorts", "Highlight the taught word at its spoken onset while the rest of the sentence stays dim - reading order taught by light. LOW cost: background-size sweep keyed to onset data we already produce in the ear pipeline."),
 ("Multiplying tile wall", "Transitions / batch reveals", "Word tiles multiply per language (EN -> +TR -> +FA) as the growth visual for 'one sentence, many languages'. MEDIUM cost: a grid container variant in the assembler; tiles are existing assets."),
 ("Photo-mosaic typography", "Openings (series finales / recaps)", "The episode title spelled by the batch's own thumbnails. MEDIUM-HIGH cost: precomputed tile positions from a letter mask; build once as a reusable opening variant."),
 ("Particle typography (form & dissolve)", "Word animation / transitions - the vanishing-words device", "A word condenses from dust, holds to be READ, dissolves; the same dust re-forms as its translation. HIGH cost: canvas particle system (~2-4k particles at phone size is feasible); must pass legibility gates - particles settle fully and hold before dissolving."),
 ("Text slam", "Transition blocks", "One-word slams as punctuation between containers. LOW cost: keyframed scale/opacity + hard cut; fits the transition family directly."),
 ("Animated fake-document dataviz (newspaper)", "Diagram / sentence-analysis containers", "A 'grammar broadsheet' whose chart draws itself; the org-chart assembly maps 1:1 onto a sentence diagram building node by node per spoken phrase. MEDIUM cost: SVG draw-on paths + counters, deterministic from config - our machinery's home turf."),
 ("Stamp slam (LGTM / HIRED / RECEIPT)", "Review moments, endings, community posts", "A verdict stamp as punctuation for 'correct' / 'complete'. LOW cost: one rotated element + impact keyframe."),
 ("Building-as-display typography", "Openings for place/city vocabulary", "Shop windows light up letter by letter to spell the target word. MEDIUM cost: cell grid + letter masks, deterministic."),
 ("Comic chapter map", "Series design (batch shorts)", "A returning map frame; each episode lights its own panel - a series-level retention device. LOW cost once templated."),
 ("Tempo lesson (meta)", "All containers", "The specimen's energy is intra-shot animation density, NOT cut rate: 25 hard cuts in 198 s, and one 22.5 s stretch has none. Budget motion EVENTS per second inside containers instead of planning more cuts. Cost: a planning rule - free."),
 ("Droste recursion", "Thumbnails / posters only", "Honest note: spectacular but narrow; as a one-off thumbnail device, not a container. HIGH cost, do not build into the assembler."),
 ("Static end card", "Endings", "Specimen holds 16 s (long-form). For shorts compress to ~1.5-2 s with the series promise. LOW cost."),
]

IDEA_BANK = [
 "The prompt types itself: a chat window asks the exact question the short answers; the answer slams in as the title (hook = recognition, first 2 seconds).",
 "Word-counter cold open: a giant numeral counts example sentences as they stack - the short ends when the counter reaches '1 sentence - 5 languages'.",
 "Highlight-pen reading: the taught word is marker-highlighted at its spoken onset while the rest of the sentence sits dim - the eye is taught where to look.",
 "Sentence-tree assembly: a diagram grows node by node like an org chart, one node per spoken phrase; the final node gets a stamp: COMPLETE SENTENCE.",
 "Vanishing-word drill: a word forms from dust, is read aloud, dissolves - and the SAME dust re-forms as its translation. Matter is conserved across languages.",
 "Mosaic title for a series recap: the title spelled by the batch's own thumbnails, tiles flying in from the edges.",
 "Approval-dialog hook: 'Allow this word to change its meaning? 1. Yes  2. Yes, and don't ask again' - TOO LATE slam into an etymology short.",
 "Chapter map for a 12-part series: one comic grid; every episode opens with its panel lighting up, so returning viewers see the series filling in.",
 "Window-lit letters: a night street where shop windows light up one by one to spell the target word (place vocabulary).",
 "Receipt ending: a printed receipt itemizes what the viewer just learned ('1 sentence - 4 languages - 0 excuses') as the end card.",
 "Interrupted answer: the 'teacher' text starts explaining, is cut mid-word by the learner's shout, and the real demonstration replaces it.",
 "Progress waveform as set dressing: a depicted recorder on screen shows the sentence's waveform filling as it is spoken - a retention clock that lives inside the fiction, not as an overlay.",
]

HONESTY = [
 "Beat-exact edit sync could NOT be evidenced: tempo (~133 BPM) comes from autocorrelation of the audio onset envelope at section level, and most scenes are continuous renders - per-beat cut claims would be false precision. The tempo map therefore reports hard-cut counts and audio energy per section, not beat grids.",
 "Camera moves inside the AI-generated 3D scenes (Viking hall, neon city) cannot be cleanly separated from generated morphing at 1 fps sampling; they are described as apparent moves (orbit/push) only where consecutive frames make the move unambiguous (tile dive, tower orbit).",
 "The video does NOT seamlessly loop visually (the end card is not frame 1). Its loop is narrative: a new chat with a rival assistant restarts the story's engine. Reported as such, not as a visual loop.",
 "Audio analysis is program-level only (the creator's original song, no stems): RMS energy and tempo estimates, no per-instrument or per-vocal claims.",
 "Dialogue and on-screen text were read from the extracted frames; a small number of low-resolution UI strings (fine print in modals and receipts) are paraphrased where the 960 px frames do not resolve them.",
]


# ---------------------------------------------------------------- markdown twin
def build_md():
    L = []
    L.append("# Video Digest - \"Look What I Can Do\" (@aditazzz.music, Instagram reel Dfk4sFVvjJQ)")
    L.append("")
    L.append("Motion-graphics digestion of one specimen reel, for text-only consumers. The PDF twin (digest.pdf) carries the same catalogue with embedded frames; frame files referenced below live in `ev/` beside this file.")
    L.append("")
    L.append("## Specimen identity & technical facts")
    L.append("")
    for k, v in IDENTITY:
        L.append(f"- **{k}:** {v}")
    L.append("")
    L.append("## Tempo map")
    L.append("")
    L.append("Song tempo ~133 BPM (onset-envelope autocorrelation, song body). Hard cuts: 25 at scene-detection threshold 0.35 (48 at 0.22). The energy is intra-shot animation density, not cut rate.")
    L.append("")
    L.append("| Section | Time | Hard cuts (0.35 / 0.22) | Audio RMS mean |")
    L.append("|---|---|---|---|")
    for name, t0, t1, c35, c22, rms in TEMPO_SECTIONS:
        L.append(f"| {name} | {fmt_t(t0)}-{fmt_t(t1)} | {c35} / {c22} | {rms:.3f} |")
    L.append("")
    L.append("## Technique catalogue")
    for i, t in enumerate(TECHNIQUES, 1):
        L.append("")
        L.append(f"### T{i:02d} - {t['n']}  [{t['t']}]")
        L.append("")
        L.append(f"**Mechanics:** {t['mech']}")
        L.append("")
        L.append(f"**Why it works:** {t['why']}")
        L.append("")
        L.append("**Evidence frames:** " + "; ".join(f"{f} ({c})" for f, c in t['frames']))
    L.append("")
    L.append("## Lessons for our shorts (Hadosh Academy)")
    L.append("")
    L.append("| Technique | Where it plugs in | Build cost / note |")
    L.append("|---|---|---|")
    for a, b, c in LESSONS:
        L.append(f"| {a} | {b} | {c} |")
    L.append("")
    L.append("## Idea bank (steal-able variants, not copies)")
    L.append("")
    for i, idea in enumerate(IDEA_BANK, 1):
        L.append(f"{i}. {idea}")
    L.append("")
    L.append("## What could NOT be evidenced")
    L.append("")
    for h in HONESTY:
        L.append(f"- {h}")
    L.append("")
    path = os.path.join(BASE, "digest.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(L))
    return path

# ---------------------------------------------------------------- PDF
def build_pdf():
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.units import cm
    from reportlab.lib import colors
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.lib.enums import TA_LEFT
    from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                    Spacer, Image, Table, TableStyle, KeepTogether, PageBreak)

    TEXTW = A4[0] - 3.2 * cm
    S = {}
    S['title'] = ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=19, leading=23, textColor=colors.HexColor('#111111'))
    S['h1'] = ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=14.5, leading=18, spaceBefore=14, spaceAfter=6, textColor=colors.HexColor('#111111'))
    S['h2'] = ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, leading=15, spaceBefore=10, spaceAfter=3, textColor=colors.HexColor('#8a4b00'))
    S['body'] = ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, leading=13.5, alignment=TA_LEFT, spaceAfter=5)
    S['small'] = ParagraphStyle('small', fontName='Helvetica', fontSize=8.2, leading=11, textColor=colors.HexColor('#444444'))
    S['cap'] = ParagraphStyle('cap', fontName='Helvetica-Oblique', fontSize=7.8, leading=10, textColor=colors.HexColor('#555555'), alignment=TA_LEFT)
    S['cell'] = ParagraphStyle('cell', fontName='Helvetica', fontSize=8.4, leading=11.4)
    S['cellb'] = ParagraphStyle('cellb', fontName='Helvetica-Bold', fontSize=8.4, leading=11.4)
    ORANGE = colors.HexColor('#f5a623')

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont('Helvetica', 7.5); canvas.setFillColor(colors.HexColor('#888888'))
        canvas.drawString(1.6 * cm, 1.1 * cm, "Video digest - reel Dfk4sFVvjJQ (@aditazzz.music) - Hadosh Academy study")
        canvas.drawRightString(A4[0] - 1.6 * cm, 1.1 * cm, f"page {doc.page}")
        canvas.restoreState()

    doc = BaseDocTemplate(os.path.join(BASE, "digest.pdf"), pagesize=A4,
                          leftMargin=1.6 * cm, rightMargin=1.6 * cm, topMargin=1.5 * cm, bottomMargin=1.6 * cm,
                          title="Video Digest - Look What I Can Do (reel Dfk4sFVvjJQ)", author="Archer - Hadosh Academy study")
    doc.addPageTemplates([PageTemplate(frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height)], onPage=footer)])

    story = []
    story.append(Paragraph("Video Digest: &quot;Look What I Can Do&quot;", S['title']))
    story.append(Paragraph("One Instagram reel dissected as a motion-graphics specimen - techniques, tempo, and what our shorts can steal.", S['small']))
    story.append(Spacer(1, 6))
    idrows = [[Paragraph(f"<b>{k}</b>", S['cell']), Paragraph(v, S['cell'])] for k, v in IDENTITY]
    t = Table(idrows, colWidths=[3.1 * cm, TEXTW - 3.1 * cm])
    t.setStyle(TableStyle([('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#fdf3e0')),
                           ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
                           ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.HexColor('#dddddd')),
                           ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                           ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
    story.append(t)

    story.append(Paragraph("Tempo map", S['h1']))
    story.append(Paragraph("Song tempo ~133 BPM (autocorrelation of the audio onset envelope across the song body; the final section reads half-time at 66.7, the same grid). Hard cuts total 25 at scene-detection threshold 0.35 and 48 at 0.22 - remarkably few for 198 s. The specimen's energy comes from <b>animation density inside continuous scenes</b>, not from cutting: the 22.5-second newspaper section contains zero hard cuts, while the keynote and the finale cluster 6 each. Audio energy climbs from the quiet terminal opening (RMS 0.081) to the loudest finale (0.278) and drops back for the end card.", S['body']))
    chart = Image(os.path.join(BASE, "tempo_chart.png"), width=TEXTW, height=TEXTW * 300 / 1500)
    story.append(chart)
    story.append(Spacer(1, 4))
    trows = [[Paragraph("<b>Section</b>", S['cellb']), Paragraph("<b>Time</b>", S['cellb']),
              Paragraph("<b>Cuts .35/.22</b>", S['cellb']), Paragraph("<b>RMS mean</b>", S['cellb'])]]
    for name, t0, t1, c35, c22, rms in TEMPO_SECTIONS:
        trows.append([Paragraph(name, S['cell']), Paragraph(f"{fmt_t(t0)}-{fmt_t(t1)}", S['cell']),
                      Paragraph(f"{c35} / {c22}", S['cell']), Paragraph(f"{rms:.3f}", S['cell'])])
    tt = Table(trows, colWidths=[8.6 * cm, 2.6 * cm, 3.0 * cm, 2.6 * cm])
    tt.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#fdf3e0')),
                            ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
                            ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.HexColor('#dddddd')),
                            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                            ('TOPPADDING', (0, 0), (-1, -1), 2.5), ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5)]))
    story.append(tt)
    story.append(PageBreak())

    story.append(Paragraph("Technique catalogue", S['h1']))
    story.append(Paragraph("Every distinct motion-graphics technique in the specimen, with the frames that evidence it. Timestamps are mm:ss within the 3:18 runtime.", S['body']))
    for i, t in enumerate(TECHNIQUES, 1):
        block = [Paragraph(f"T{i:02d} - {t['n']}  [{t['t']}]", S['h2']),
                 Paragraph(f"<b>Mechanics.</b> {t['mech']}", S['body']),
                 Paragraph(f"<b>Why it works.</b> {t['why']}", S['body'])]
        n = len(t['frames'])
        if n == 1:
            w = 10.6 * cm
        elif n == 2:
            w = (TEXTW - 0.4 * cm) / 2
        else:
            w = (TEXTW - 0.8 * cm) / 3
        h = w * 9 / 16
        imgs, caps = [], []
        for fn, cap in t['frames']:
            imgs.append(Image(os.path.join(BASE, "ev", fn), width=w, height=h))
            caps.append(Paragraph(cap, S['cap']))
        it = Table([imgs, caps], colWidths=[w] * n, hAlign='LEFT')
        it.setStyle(TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 4),
                                ('TOPPADDING', (0, 0), (-1, -1), 1), ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
                                ('VALIGN', (0, 0), (-1, -1), 'TOP')]))
        block.append(it)
        block.append(Spacer(1, 4))
        story.append(KeepTogether(block) if n <= 2 else block[0])
        if n > 2:
            story.extend(block[1:])
    story.append(PageBreak())

    story.append(Paragraph("Lessons for our shorts (Hadosh Academy)", S['h1']))
    story.append(Paragraph("Each technique mapped to where it plugs into our machinery - openings, transitions, word animation, diagram and sentence-analysis containers - with an honest build-cost note.", S['body']))
    lrows = [[Paragraph("<b>Technique</b>", S['cellb']), Paragraph("<b>Where it plugs in</b>", S['cellb']), Paragraph("<b>Build cost / note</b>", S['cellb'])]]
    for a, b, c in LESSONS:
        lrows.append([Paragraph(a, S['cell']), Paragraph(b, S['cell']), Paragraph(c, S['cell'])])
    lt = Table(lrows, colWidths=[4.4 * cm, 4.6 * cm, TEXTW - 9.0 * cm])
    lt.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#fdf3e0')),
                            ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
                            ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.HexColor('#dddddd')),
                            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                            ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
    story.append(lt)

    story.append(Paragraph("Idea bank - steal-able variants (not copies)", S['h1']))
    for i, idea in enumerate(IDEA_BANK, 1):
        story.append(Paragraph(f"<b>{i}.</b> {idea}", S['body']))

    story.append(Paragraph("What could NOT be evidenced", S['h1']))
    for hh in HONESTY:
        story.append(Paragraph(f"- {hh}", S['body']))
    story.append(Spacer(1, 8))
    story.append(Paragraph("Files: source.mp4 (the specimen) - digest.pdf (this file) - digest.md (text twin) - ev/ (39 evidence frames) - frames/ (198 frames at 1 fps) - tempo_chart.png - audio_rms.json - scene_times.txt (0.35) - scene_times_022.txt (0.22) - post.json / media-understanding.json / zeitgeist.json (platform metadata).", S['small']))
    doc.build(story)
    return os.path.join(BASE, "digest.pdf")

if __name__ == "__main__":
    md = build_md()
    pdf = build_pdf()
    for p in (md, pdf):
        print(p, os.path.getsize(p), "bytes")

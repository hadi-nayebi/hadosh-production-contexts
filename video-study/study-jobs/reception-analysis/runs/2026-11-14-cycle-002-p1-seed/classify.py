import json, re, sys
P = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/reception-analysis/runs/2026-11-14-cycle-002-p1-seed/comments-sample.json"
comments = json.load(open(P))
CREATOR = "Aditazzz | AI Doompop & Slopcore"

def has(t, *words):
    return any(w in t for w in words)

OVERRIDES = [
    ("anj gabisa di skip", "REPLAY"),
    ("@aditazzz.music everyone can prompt", "HOW"),
    ("\"i made a thing", "RELATE"),
    ("Genial!", "PRAISE"), ("AI Guru", "PRAISE"), ("Bruhh", "PRAISE"),
    ("Holy Ai", "PRAISE"), ("I hate that I like this", "PRAISE"),
    ("Ufff", "PRAISE"), ("Blockbuster", "PRAISE"), ("Damnn", "PRAISE"),
    ("Aahaahhahaha", "PRAISE"), ("@aditazzz.music the irony", "PRAISE"),
    ("@masterlviv", "PRAISE"), ("Thats Not Bad", "PRAISE"),
    ("This is it", "PRAISE"),
    ("C'est à combien", "HOW"), ("why claude?", "HOW"),
    ("@manoj_rsb “quality of the asset", "NEG"),
    ("خلاص", "RELATE"), ("Let’s build a universe", "RELATE"),
    ("🤣 last one", "RELATE"), ("Chat, we are cooked", "RELATE"),
    ("@aditazzz.music no it's not the point", "DEBATE"),
    ("@aditazzz.music the one holding the paintbrush", "DEBATE"),
    ("The interesting thing is that after bobbing", "DEBATE"),
]
EXACT = {"W": "PRAISE", "Wow": "PRAISE", "lol": "PRAISE"}

def classify(c):
    t = c["t"]; low = t.lower()
    if c["a"] == CREATOR:
        return "CREATOR"
    if t.strip() in EXACT:
        return EXACT[t.strip()]
    for prefix, cat in OVERRIDES:
        if t.startswith(prefix):
            return cat
    # spread behaviour declared
    if has(low, "repost", "saved", "i honor you with my follow", "look what she can do"):
        return "SPREAD"
    # acquisition intent
    if has(low, "spotify", "download", "mp3", "wav", "apple music", "itunes",
           "buy the", "get/buy", "copyrights for this song", "where to download"):
        return "GET"
    # process / how-to
    if has(low, "tutorial", "teach a course", "explain the steps", "how tf did you",
           "how did you", "how long it took", "how many tokens", "can you teach",
           "break down how", "does claude make", "elevenlabs", "want to try it",
           "i want to try", "going to make something", "tell everyone how long"):
        return "HOW"
    # negative / rejection
    if has(low, "slop", "horrible", "trash", "insult", "lame", "soulless", "talentless",
           "anoyingly repetitive", "annoyingly repetitive", "drowning the real art"):
        if has(low, "first ai slop that i like", "better than the human slop"):
            return "PRAISE"
        return "NEG"
    # substantive debate / ambivalence about AI art
    if has(low, "soul", "resources to create", "data centers", "philosophical",
           "assign value", "strike the balance", "conflicted"):
        return "DEBATE"
    # relatability / in-jokes quoted back
    if has(low, "relatable", "usage limit", "hey chatgpt", "hey gpt", "hey chat gpt",
           "tokens", "vibe coders theme", "vibe coder", "sound like my life",
           "nothing which i can", "my name aditya", "captcha", "error 429",
           "maxing out", "subscription"):
        return "RELATE"
    # catchiness / replay
    if has(low, "catchy", "banger", "on repeat", "can't stop listening", "cant stop",
           "rent free", "obsessed", "watched this a number", "morning routine",
           "favorite song", "favourite", "song of the year", "in my top 2",
           "first one i feel", "true song", "vibe", "tune is"):
        return "REPLAY"
    # generic praise / delight (incl. emoji-only positive)
    if re.search(r"[a-z]", low):
        if has(low, "amazing", "awesome", "brilliant", "genius", "great", "love", "loved",
               "incredible", "impressive", "fantastic", "wonderful", "beautiful", "cool",
               "nailed", "peak", "goat", "best thing", "underrated", "insane", "crazy",
               "mind blowing", "well done", "good", "nice", "top", "fire", "🔥", "❤️",
               "😍", "👏", "😂", "funny", "creative", "congrats", "investing", "famous",
               "dancing", "unique", "dope", "lego movie", "ad strategy", "niche"):
            return "PRAISE"
        return "OTHER"
    # emoji / symbol only
    if has(t, "🔥", "❤️", "💙", "💚", "😍", "👏", "✌️", "🙌", "😂", "🤣", "❤"):
        return "PRAISE"
    return "OTHER"

from collections import Counter, defaultdict
counts = Counter(); members = defaultdict(list)
for c in comments:
    k = classify(c); counts[k] += 1; members[k].append(c)
print("TOTAL", sum(counts.values()))
for k in ["CREATOR","PRAISE","REPLAY","RELATE","GET","HOW","DEBATE","NEG","SPREAD","OTHER"]:
    print(k, counts.get(k, 0))
print("--- OTHER ---")
for c in members["OTHER"]:
    print(repr(c["t"][:110]), "|", c["a"][:30])
print("--- NEG ---")
for c in members["NEG"]:
    print(repr(c["t"][:110]))
print("--- DEBATE ---")
for c in members["DEBATE"]:
    print(repr(c["t"][:110]))

"""Rebuild candidate B from the archived candidate A HTML and this checkpoint."""
import argparse
import base64
import hashlib
import io
import json
from pathlib import Path
import re
import wave

ROOT = Path(__file__).resolve().parent
PARENT_HASH = "84d396bec3a1d8e7f3f04d63b4df491f88f9b5b1b203848176f72898bb467a19"
CANDIDATE_HASH = "fe58235201363b9a87bb05dd14d5fda8df9619829c68a6ce0ca041b9fed7f5a7"


def extend_lead(data):
    """Extend the intro by four seconds while keeping the recorded speech intact."""
    with wave.open(io.BytesIO(data)) as source:
        params = source.getparams()
        assert (params.nchannels, params.sampwidth, params.framerate) == (1, 2, 24000)
        lead = source.readframes(2 * params.framerate)
        remaining = source.readframes(source.getnframes())
    samples = memoryview(lead).cast("H")
    mirrored = samples[::-1].tobytes()
    output = io.BytesIO()
    with wave.open(output, "wb") as dest:
        dest.setparams(params)
        dest.writeframes(lead + mirrored + lead + remaining)
    return output.getvalue()


def rebuild(predecessor):
    raw = predecessor.read_bytes()
    if hashlib.sha256(raw).hexdigest() != PARENT_HASH:
        raise ValueError("Input must be the archived V03 candidate A HTML.")
    html = raw.decode()
    block = re.search(r'(?<=<script type="application/x-film-files">).*?(?=</script>)', html, re.S)
    bundle = json.loads(block[0])
    for path in sorted((ROOT / "units").rglob("*")):
        if path.is_file():
            key = path.relative_to(ROOT).as_posix()
            bundle[key][1] = base64.b64encode(path.read_bytes()).decode()
    for stem in ("unit-narration-v02.wav", "unit-music-v02.wav"):
        entry = bundle["units/01-scale/assets/" + stem]
        entry[1] = base64.b64encode(extend_lead(base64.b64decode(entry[1]))).decode()
    result = (html[:block.start()] + json.dumps(bundle, separators=(",", ":")) + html[block.end():]).encode()
    if hashlib.sha256(result).hexdigest() != CANDIDATE_HASH:
        raise ValueError("Rebuild differs from the reviewed candidate.")
    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("predecessor", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    result = rebuild(args.predecessor)
    with args.output.open("xb") as output:
        output.write(result)

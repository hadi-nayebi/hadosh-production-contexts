# T17 attempt 9 — payload manifest (filed BEFORE firing; A-C008-3/A-C019-1)

Scored source: recreation.html sha256 ae5b68d4f42b30ea425a94f67fa8654cd87a6ef8e1d7e3e462cc530fb70f1729 (frozen at stage 6; identical bytes in every payload and every scratch dir).
Allowlist components per payload (single stdin stream, fed form): instr-<lens>.txt (consumer + decision + BODY-WRITE + SCORE line + explicit scale line 'Scores are integers from 0 to 100') + neutral-technique-facts.md (verbatim from attempt 8's packet; the technique is unchanged) + score-blind-build-record.md (current-source construction facts only) + own-check-packet.md (neutral check names/inputs/results; carries the leaf-level A-C008 leg tables in full — fit-table-attempt9.md and config-census-attempt9.md embedded verbatim) + the recreation source.
Component hashes:
- neutral-technique-facts.md sha256 01227514e89da62b35aa2626ba94e380b70f42291beb59d60d2073924fc124a5
- score-blind-build-record.md sha256 afd8282c22bbdbbd1fa351d45ae5aa9f3303fc5d239f7e4e6b91f28c62b02449
- own-check-packet.md sha256 14ec13465d35c0fa775a16073be2a8fceed23dec8b19519226fd3e2a349b85c9
- instr-motion.txt sha256 563ce5543444cd48a045acb2bae380c85c6f5ca8ca3cd6315966bff409cd52d1 · payload-motion.txt sha256 69021f34d73da862a8e87f14c019882e7ac694bc1d722b2754dca02599b6f535
- instr-timing.txt sha256 42a88632b731714497c37030729ba46addc2c521c6c981513ba059bd3784288e · payload-timing.txt sha256 0be2623c49c382dce9705a0e8c615643ee7fd6cc297850d27de09891cee187fa
- instr-purity.txt sha256 187e8c280905c84a757aa5b523a92be74bf24fb5eaaefa3bef51b7934da181de · payload-purity.txt sha256 935c6cd24daa5515f9b6a34ff848c84edafd3aa379e92fb7c8f5b1f16b65e770
- instr-reusability.txt sha256 9e852c3ac8015e0abe23a46363ace5ec18a4aa991fa7aae2382cf6bc04a08886 · payload-reusability.txt sha256 a42e17d953660d91a1a7bd8ba4f0b0c06640e548f8ed393b22eb91edad09a1c5
- instr-readability.txt sha256 fe30a3539d346c7f8a7448f8bae40087c992ee7d96663d934cd100b81b477a1b · payload-readability.txt sha256 561a8c6c6b2609ca81ee1355cc8a0299fabe21dc9b28251be458f278c2a520f2

Anchor scan over the five assembled payloads for prior scores, prior-attempt references, cure/amendment labels, scores.md, delta/plateau vocabulary, rule codes, and checkpoint vocabulary: ONE hit class, dispositioned benign — the word 'checkpoints' inside the standing neutral technique facts ('not measured per-figure checkpoints'), a specimen-timing evidence word in the same facts file fired in earlier attempts, carrying no build history. All other scan terms: zero hits in all five payloads.
Per-lens scratch cwd: ~/workspace/.scratch/c029/T17-<lens>/ containing ONLY content copies of the five allowlist components (the lens instruction, the technique facts, the construction facts, the own-check packet, the recreation source). Firing: local Codex binary, fed form (payload file as the single stdin stream), -s read-only, --skip-git-repo-check, cwd = the lens scratch dir; each return's -o original lands in ~/workspace/.scratch/c029/ and is content-copied to codex/attempt-9/lens-<lens>.md in the same invocation, sha-verified.
Render route (D1) stands PIXEL-UNVERIFIED for the 9th attempt (seat record D-A9-1); the packet states the evidence class on its face.

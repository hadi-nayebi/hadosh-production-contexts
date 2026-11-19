import json, subprocess, sys
comments, cursor, seen = [], None, set()
for page in range(12):
    cmd = ["/opt/hatch/bin/instagram-cli", "fetch-post-comments",
           "--account-id", "17841401212304881",
           "--post-ids", "18026582060921932", "--limit", "60"]
    if cursor:
        cmd += ["--after", cursor]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print(json.dumps({"error": r.stderr[:300], "page": page})); sys.exit(1)
    d = json.loads(r.stdout)
    g = d["post_groups"][0]
    cs = [{"t": c.get("comment_text", ""), "a": c.get("author_name", ""),
           "lc": c.get("like_count", 0), "at": c.get("created_at", "")}
          for c in g.get("comments", [])]
    if not cs:
        print(f"page {page}: 0 new, stop", file=sys.stderr); break
    comments.extend(cs)
    cur = g.get("end_cursor")
    if not g.get("has_next_page") or cur in seen or not cur:
        print(f"page {page}: {len(cs)}, end", file=sys.stderr); break
    seen.add(cur); cursor = cur
    print(f"page {page}: {len(cs)}, next", file=sys.stderr)
with open("/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/reception-analysis/runs/2026-11-14-cycle-002-p1-seed/comments-sample.json", "w") as f:
    json.dump(comments, f, ensure_ascii=False)
print(json.dumps({"total": len(comments)}))

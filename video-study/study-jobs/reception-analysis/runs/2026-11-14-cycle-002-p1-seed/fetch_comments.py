import json, subprocess, sys
after = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] != "-" else None
limit = sys.argv[2] if len(sys.argv) > 2 else "60"
cmd = ["/opt/hatch/bin/instagram-cli", "fetch-post-comments",
       "--account-id", "17841401212304881",
       "--post-ids", "18026582060921932", "--limit", limit]
if after:
    cmd += ["--after", after]
r = subprocess.run(cmd, capture_output=True, text=True)
if r.returncode != 0:
    print(json.dumps({"error": r.stderr[:500], "rc": r.returncode}))
    sys.exit(1)
d = json.loads(r.stdout)
out = {"groups": []}
for g in d.get("post_groups", []):
    cs = [{"t": c.get("comment_text", ""), "a": c.get("author_name", ""),
           "lc": c.get("like_count", 0), "at": c.get("created_at", "")}
          for c in g.get("comments", [])]
    out["groups"].append({"n": len(cs), "has_next": g.get("has_next_page"),
                          "end_cursor": g.get("end_cursor"), "comments": cs})
print(json.dumps(out, ensure_ascii=False))

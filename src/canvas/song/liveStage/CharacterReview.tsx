import CharacterLayer from "./CharacterLayer";
import seed from "./scene-props-seed.json";
import { validateScene } from "./scene.mjs";
export default function CharacterReview() {
  const project = validateScene(seed),
    body = project.objects.find((o) => o.kind === "character")!;
  return (
    <main style={{ background: "#14363b", color: "#f4e9cd", padding: 24, minHeight: "100vh" }}>
      <a href="/songs/live-refinement">← Scene props refinement</a>
      <h1>Reusable six-part character · attachment review</h1>
      <p>
        Eight combinations at two display scales. Speech state follows word activity; this is not
        phoneme lip sync.
      </p>
      <svg
        viewBox="0 0 1120 1560"
        style={{ maxWidth: 1120, width: "100%" }}
        role="img"
        aria-label="Eight character combinations at two scales"
      >
        {[1, 0.65].map((scale, row) =>
          body.views!.map((v, i) => (
            <g
              key={v.id + row}
              transform={`translate(${(i % 4) * 280} ${(row * 2 + Math.floor(i / 4)) * 390})`}
            >
              <rect width="270" height="380" rx="10" fill="#21494b" />
              <text x="12" y="26" fill="#f4e9cd" fontSize="16">
                {v.name} · {scale}×
              </text>
              <g transform={`translate(0 25) scale(${scale})`}>
                <CharacterLayer
                  owner={{ ...body, defaultView: v.id, viewCues: [] }}
                  project={project}
                  frame={0}
                />
              </g>
            </g>
          )),
        )}
      </svg>
    </main>
  );
}

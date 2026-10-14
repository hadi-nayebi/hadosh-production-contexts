import plans from "./visualPlans.json";
import reviewPasses from "./reviewPasses.json";
export default function VisualPlanGallery({
  audioHash,
  onSeek,
}: {
  audioHash: string;
  onSeek?: (t: number) => void;
}) {
  const matching = plans.filter((p) => p.audioHash === audioHash);
  return (
    <section className="visual-plan-library" aria-label="Scene visual plans">
      <h1>Visual plans</h1>
      <p>Describe → visualize → refine → consolidate → build.</p>
      {reviewPasses
        .filter((p) => p.audioHash === audioHash)
        .map((p) => (
          <details key={p.version}>
            <summary>Sampled review · v{p.version} · every 5 seconds</summary>
            <p>
              Recorded r{p.annotationRevision}/w{p.wordRevision}. {p.scope}. Selecting a moment
              opens the current live build at that recorded time.
            </p>
            <ul>
              {p.findings.map((f) => (
                <li key={f.time}>
                  {f.time}s · {f.finding} · {f.status}
                </li>
              ))}
            </ul>
            <div className="scene-review-grid">
              {p.frames.map((f) => (
                <figure key={f.time}>
                  <figcaption>
                    <button onClick={() => onSeek?.(f.time)}>Review {f.time}s</button>
                  </figcaption>
                  <a href={f.image} target="_blank" rel="noreferrer">
                    <img
                      src={f.image}
                      alt={`Captured v${p.version} at ${f.time} seconds`}
                      loading="lazy"
                    />
                  </a>
                </figure>
              ))}
            </div>
          </details>
        ))}
      {matching.length > 0 && (
        <figure>
          <figcaption>
            <h2>Doorway → nine-view infinity zoom → bedroom window</h2>
            <p>
              Read left to right, top to bottom. Continuous forward zoom and overlapping fades.
              Strong isolated drum onsets, reinforced by percussion, introduce glass assets. The
              final three raster panels are reference only: playback now uses the exact live bedroom
              for a consistent window return.
            </p>
            <button onClick={() => onSeek?.(63.7)}>Review chorus</button>
          </figcaption>
          <a
            href="/scene-assets/web-room/infinity-window-return-3x3-v1.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/scene-assets/web-room/infinity-window-return-3x3-v1.png"
              alt="Nine distinct forward zoom views through digital space and back through the bedroom window"
              loading="lazy"
            />
          </a>
        </figure>
      )}
      {matching.length > 0 && (
        <details>
          <summary>Screenshot review · live v4 · every four seconds</summary>
          <p>Captured review frames; select a moment to check the current live scene.</p>
          <div className="scene-review-grid">
            {[2.95, 4.7, 5.7, 7, 28, 32, 36, 40, 44, 48, 52, 56, 60, 63].map((t) => (
              <figure key={t}>
                <figcaption>
                  <button onClick={() => onSeek?.(t)}>Review {t}s</button>
                </figcaption>
                <a href={`/scene-reviews/live-v4/${t}s.png`} target="_blank" rel="noreferrer">
                  <img
                    src={`/scene-reviews/live-v4/${t}s.png`}
                    alt={`Live v4 screenshot at ${t} seconds`}
                    loading="lazy"
                  />
                </a>
              </figure>
            ))}
          </div>
        </details>
      )}
      {matching.length > 0 && (
        <figure>
          <figcaption>
            <h2>Scene progress · October 12</h2>
            <span>Build snapshot · creative review pending</span>
          </figcaption>
          <a href="/scene-plans/opening-through-phone-v7.png" target="_blank" rel="noreferrer">
            <img
              src="/scene-plans/opening-through-phone-v7.png"
              alt="Six consolidated scene plans through the2015 phone close-up"
            />
          </a>
        </figure>
      )}
      {matching.map((p) => (
        <figure key={p.id}>
          <figcaption>
            <h2>
              {p.title} <small>v{p.version}</small>
            </h2>
            <span>
              {p.implementation === "visual-plan-only"
                ? "Next scene · plan only"
                : "Live scene experiment"}{" "}
              · creative review pending
            </span>
          </figcaption>
          <a href={p.image} target="_blank" rel="noreferrer">
            {typeof p.panelIndex === "number" ? (
              <div
                role="img"
                aria-label={`${p.title}: consolidated scene infographic`}
                style={{
                  width: "100%",
                  aspectRatio: "499/462",
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "307.8% 221.6%",
                  backgroundPosition: `${[0.96, 49.95, 99.04][p.panelIndex % 3]}% ${p.panelIndex < 3 ? 11.56 : 95.37}%`,
                }}
              />
            ) : (
              <img
                src={p.image}
                alt={`${p.title}: consolidated scene infographic`}
                loading="lazy"
              />
            )}
          </a>
          <details>
            <summary>Direction & separate assets</summary>
            <p>{p.humanDirection}</p>
            <p>{p.assets.join(" · ")}</p>
            <p>{p.motion}</p>
          </details>
        </figure>
      ))}
      {matching.length > 0 && (
        <figure>
          <figcaption>
            <h2>Earth progression</h2>
            <span>Nine raster upgrade images · used in the live opening</span>
          </figcaption>
          <a
            href="/scene-assets/earth-build/earth-upgrade-3x3-v1.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/scene-assets/earth-build/earth-upgrade-3x3-v1.png"
              alt="Earth progression, nine aligned stages"
              loading="lazy"
            />
          </a>
        </figure>
      )}
      {matching.length === 0 && <p>No plan saved for this recording yet.</p>}
    </section>
  );
}

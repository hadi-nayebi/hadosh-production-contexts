import { useMemo } from "react";
import { snapToStem } from "./stemAnalysis";
const websites = ["Google", "Wikipedia", "YouTube", "reddit", "Internet Archive", "Wikipedia"];
/** Illustrative pages, not captured profiles or live website content. The same
 * vanishing point and side lanes keep surfing subordinate to the sung word. */
export function websiteFlights(start: number, end: number, hash: string) {
  return websites
    .map((site, i) => ({
      site,
      id: `web-flight-${i}`,
      side: i % 2 ? 1 : -1,
      time: snapToStem(start + 0.3 + i * 1.45, hash),
      end: Math.min(end - 3.2, start + 0.3 + i * 1.45 + 2.8),
    }))
    .filter((e) => e.time < e.end);
}
export function websiteFlight(time: number, onset: number, end: number, side: number) {
  const u = Math.max(0, Math.min(1, (time - onset) / (end - onset)));
  const depth = (Math.exp(u * 2.1) - 1) / (Math.exp(2.1) - 1);
  return {
    x: 50 + side * (17 + 58 * depth),
    y: side < 0 ? 25 - 8 * depth : 75 + 8 * depth,
    scale: 0.38 + 1.3 * depth,
    opacity: Math.min(1, u / 0.14, (1 - u) / 0.12),
    depth,
  };
}
export default function WebsiteFlyby({
  time,
  start,
  end,
  hash,
}: {
  time: number;
  start: number;
  end: number;
  hash: string;
}) {
  const flights = useMemo(() => websiteFlights(start, end, hash), [start, end, hash]);
  return (
    <div
      data-website-surfing
      style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}
    >
      {flights
        .filter((e) => time >= e.time && time < e.end)
        .map((e) => {
          const p = websiteFlight(time, e.time, e.end, e.side);
          return (
            <div
              key={e.id}
              data-website-page={e.site}
              data-page-onset={e.time}
              style={{
                position: "absolute",
                left: p.x + "%",
                top: p.y + "%",
                width: "25%",
                aspectRatio: "1.5",
                transform: `translate(-50%,-50%) perspective(70cqw) rotateY(${e.side * -18}deg) rotateZ(${e.side * 3}deg) scale(${p.scale})`,
                opacity: p.opacity,
                willChange: "transform,opacity",
                background: "#faf8f2",
                border: ".15cqw solid #bce4ff",
                borderRadius: ".6cqw",
                boxShadow: "0 0 1.3cqw #6ab7ff77",
                overflow: "hidden",
                color: "#192637",
                fontFamily: "Arial,sans-serif",
              }}
            >
              <div
                style={{
                  height: "14%",
                  background: "#ccdce9",
                  display: "flex",
                  alignItems: "center",
                  gap: ".3cqw",
                  padding: "0 .5cqw",
                }}
              >
                {["#c76764", "#d5b65d", "#679677"].map((c) => (
                  <i
                    key={c}
                    style={{
                      width: ".35cqw",
                      height: ".35cqw",
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
                <div
                  style={{
                    background: "#f7fbff",
                    borderRadius: ".2cqw",
                    width: "72%",
                    height: "45%",
                    marginLeft: ".5cqw",
                  }}
                />
              </div>
              <div style={{ padding: "1cqw", height: "86%", boxSizing: "border-box" }}>
                <strong
                  style={{
                    fontSize: e.site === "Internet Archive" ? "1.6cqw" : "2.2cqw",
                    display: "block",
                    color:
                      e.site === "YouTube"
                        ? "#bc2525"
                        : e.site === "reddit"
                          ? "#d65326"
                          : "#263b66",
                  }}
                >
                  {e.site}
                </strong>
                {e.site === "Google" ? (
                  <>
                    <div
                      style={{
                        height: "1.3cqw",
                        border: ".12cqw solid #b7c4d2",
                        borderRadius: "1cqw",
                        marginTop: "1cqw",
                      }}
                    />
                    <div style={{ display: "flex", gap: ".5cqw", marginTop: ".7cqw" }}>
                      <div style={{ height: "1cqw", width: "45%", background: "#e1e8ee" }} />
                      <div style={{ height: "1cqw", width: "35%", background: "#e1e8ee" }} />
                    </div>
                  </>
                ) : e.site === "YouTube" ? (
                  <div style={{ display: "flex", gap: ".5cqw", marginTop: ".7cqw" }}>
                    {["#527c9d", "#826b88", "#a9875b"].map((c) => (
                      <div
                        key={c}
                        style={{
                          width: "32%",
                          aspectRatio: "1.2",
                          background: c,
                          display: "grid",
                          placeItems: "center",
                          color: "white",
                          fontSize: "2cqw",
                        }}
                      >
                        ▶
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: ".8cqw", marginTop: ".7cqw" }}>
                    <div
                      style={{
                        width: "28%",
                        aspectRatio: "1",
                        background: e.site === "Wikipedia" ? "#dce5e8" : "#cedbed",
                        borderRadius: e.site === "Wikipedia" ? "50%" : ".3cqw",
                        display: "grid",
                        placeItems: "center",
                        font: "2.6cqw Georgia",
                      }}
                    >
                      {e.site === "Wikipedia" ? "W" : e.site === "reddit" ? "↑" : "▥"}
                    </div>
                    <div style={{ flex: 1 }}>
                      {[90, 65, 85, 55].map((w, i) => (
                        <div
                          key={i}
                          style={{
                            height: ".4cqw",
                            width: w + "%",
                            background: i ? "#bbc9d3" : "#7596ba",
                            margin: ".45cqw 0",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

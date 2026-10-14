import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
export function creditBounds(a: Annotation) {
  const index = a.items.findIndex((i) => i.groupId.endsWith(":section:16"));
  if (index < 0) return null;
  const lastWord = Math.max(0, ...wordTiming(a).intervals.map((w) => w.end));
  const start = Math.max(a.boundaries[index], lastWord + 2);
  return a.duration - start >= 12 ? { start, end: a.duration } : null;
}
export const creditCards = [
  {
    heading: "Hadi",
    lines: ["Concept & creative direction", "Who Owns Your Toaster?"],
    accent: "#f5c77c",
  },
  {
    heading: "AI tools",
    lines: [
      "Suno · music & vocals",
      "Codex · code & visual production",
      "AI-assisted image generation",
    ],
    accent: "#8fdfe5",
  },
  {
    heading: "Production pipeline",
    lines: [
      "Free & open source · MIT",
      "Production context + working example",
      "GitHub · link in description",
    ],
    accent: "#a4e0a5",
    url: "https://github.com/hadi-nayebi/hadosh-production-contexts",
    label: ["github.com/hadi-nayebi/", "hadosh-production-contexts"],
  },
  {
    heading: "Hadosh Academy",
    lines: ["Follow · Subscribe · Support"],
    accent: "#d6b3fa",
    url: "https://hadi-nayebi.github.io/",
    label: ["hadi-nayebi.github.io"],
  },
];
/** Four quarter-panels on a4×4 layout grid; each new quarter persists to the end. */
export default function EndCredits({ annotation, time }: { annotation: Annotation; time: number }) {
  const b = creditBounds(annotation);
  if (!b || time < b.start || time >= b.end) return null;
  const imageHold = 2;
  const panelStart = b.start + imageHold;
  const span = (b.end - panelStart) / 4,
    index = time < panelStart ? -1 : Math.min(3, Math.floor((time - panelStart) / span));
  const fade = Math.min(1, (time - b.start) / 0.6, (b.end - time) / 0.45);
  return (
    <div
      data-end-credits={index}
      data-credit-grid="4x4"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 6,
        background: "linear-gradient(135deg,#07101a88,#101928aa), url(/scene-assets/web-room/credits-digital-harness-v38.png) center / cover",
        padding: "4%",
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gridTemplateRows: "repeat(4,minmax(0,1fr))",
        gap: "1.4cqw",
        opacity: fade,
        pointerEvents: "none",
      }}
    >
      {creditCards.slice(0, index + 1).map((card, i) => {
        const start = panelStart + i * span,
          opacity = Math.min(1, (time - start) / 0.45);
        return (
          <section
            key={card.heading}
            data-credit-quarter={i}
            data-credit-start={start}
            style={{
              gridColumn: `${(i % 2) * 2 + 1} / span2`.replace("span2", "span 2"),
              gridRow: `${Math.floor(i / 2) * 2 + 1} / span 2`,
              borderTop: `.22cqw solid ${card.accent}`,
              borderRadius: ".6cqw",
              padding: "1.5cqw 2cqw",
              background: "linear-gradient(120deg,#101b2bd9,#07101abf)",
              color: "#f6efdc",
              opacity,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                font: "700 clamp(16px,2.9cqw,42px) Arial",
                margin: "0 0 .9cqw",
                color: card.accent,
                lineHeight: 1.15,
              }}
            >
              {card.heading}
            </h2>
            {card.lines.map((line, j) => (
              <p
                key={line}
                style={{
                  font: `${i === 2 && j === 1 ? "700" : "400"} clamp(11px,1.75cqw,26px) Arial`,
                  margin: ".35cqw 0",
                  lineHeight: 1.3,
                  color: i === 2 && j === 1 ? card.accent : "#d7e0e8",
                }}
              >
                {line}
              </p>
            ))}
            {card.url && (
              <a
                href={card.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  pointerEvents: "auto",
                  color: card.accent,
                  font: "600 clamp(11px,1.6cqw,24px) Arial",
                  lineHeight: 1.2,
                  textDecoration: "none",
                  marginTop: ".8cqw",
                }}
              >
                {card.label?.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </a>
            )}
          </section>
        );
      })}
    </div>
  );
}

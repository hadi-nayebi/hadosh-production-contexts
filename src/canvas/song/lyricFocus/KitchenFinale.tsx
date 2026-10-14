import RhythmicPortraitPlate, { portraitNod } from "./RhythmicPortraitPlate";
import type { Annotation } from "./audioAnnotation";
import { kitchenPerformance } from "./kitchenDirection";
import RetainedHarness from "./RetainedHarness";
import OutdoorFinale from "./OutdoorFinale";
const ease = (x: number) => {
  const p = Math.max(0, Math.min(1, x));
  return p * p * (3 - 2 * p);
};
// Registered per atlas panel, in percentages. Keep background work away from face/hands.
const laptops = [
  [48, 61],
  [21, 61],
  [8, 59],
  [21, 61],
];
export default function KitchenFinale({
  annotation,
  time,
}: {
  annotation: Annotation;
  time: number;
}) {
  const p = kitchenPerformance(annotation, time);
  const laptopPulse = portraitNod(time, annotation.audioHash);
  if (time >= p.chorus)
    return <OutdoorFinale annotation={annotation} time={time} start={p.chorus} outro={p.outro} />;
  const [x, y] = laptops[p.view];
  const word = p.word;
  const opacity = word ? (p.spoken ? 1 : ease((time - word.start + 0.12) / 0.12)) : 0;
  const power = p.words.find((w) => /^power\W*$/i.test(w.item.text))?.start ?? Infinity;
  const model = p.words.find((w) => /^model\W*$/i.test(w.item.text))?.start ?? Infinity;
  return (
    <div
      data-kitchen-finale
      data-kitchen-owner={time < p.start ? "section-13" : "section-14"}
      data-toaster-action-cue={p.toasterCue}
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#09101a" }}
    >
      <div
        data-kitchen-composition={
          time < p.toasterCue && time >= p.focusCue ? "working-laptop-detail" : "whole-kitchen"
        }
        style={{
          position: "absolute",
          inset: 0,
          transform: time < p.toasterCue && time >= p.focusCue ? "scale(2.1)" : undefined,
          transformOrigin: "48% 61%",
        }}
      >
        <div
          data-kitchen-camera={p.view}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <RhythmicPortraitPlate
            src="/scene-assets/web-room/kitchen-working-harness-2x2-v1.png"
            time={time}
            hash={annotation.audioHash}
            view={p.view}
            kitchen
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(#07101a66,transparent 32%)",
          }}
        />
        <svg
          viewBox="0 0 100 56.25"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <polygon
            data-kitchen-laptop-pulse={laptopPulse}
            points={
              [
                "42,29 55,29.5 54,38 40,37.5",
                "17,30 29,30.5 27,38 16,37.5",
                "6,26 16,26.5 14,34.5 5,34",
                "17,30 29,30.5 27,38 16,37.5",
              ][p.view]
            }
            fill="#8fdde8"
            opacity={0.03 + 0.19 * laptopPulse}
          />
          <RetainedHarness
            annotation={annotation}
            time={time}
            x={x}
            y={y * 0.5625 - 11}
            width={p.view === 2 ? 6 : 15}
            height={9}
            taskTarget={[x, y * 0.5625]}
          />
          {time >= power && (
            <g data-electricity-supply opacity={0.4 + 0.4 * p.beat}>
              <path
                d="M93 34Q92 46 83 47L80 42"
                fill="none"
                stroke="#ffce73"
                strokeWidth={0.22 + 0.15 * p.beat}
              />
              <path d="M93 31l-.6 1.4h.8l-.5 1.3" fill="none" stroke="#ffce73" strokeWidth=".3" />
            </g>
          )}
          {time >= model && (
            <g data-intelligence-supply opacity={0.5 + 0.4 * p.beat}>
              <path
                d={`M${x - 3} ${y * 0.5625 - 2}q3-3 6 0m-4.7 .8q1.7-1.7 3.4 0m-2.2 .8q.5-.5 1 0`}
                fill="none"
                stroke="#a6e3df"
                strokeWidth=".18"
              />
            </g>
          )}
        </svg>
      </div>
      {word && (
        <span
          data-kitchen-word={word.id}
          style={{
            position: "absolute",
            left: p.view === 2 ? "73%" : p.view === 0 ? "50%" : "22%",
            top: "12%",
            transform: "translate(-50%,-50%)",
            opacity,
            font: `${/toaster|power|model|rules/i.test(word.item.text) ? 700 : 500} 5.6cqw Georgia,serif`,
            color: "#fff1d4",
            textShadow: "0 .2cqw .7cqw #000",
            whiteSpace: "nowrap",
          }}
        >
          {word.item.text}
        </span>
      )}
    </div>
  );
}

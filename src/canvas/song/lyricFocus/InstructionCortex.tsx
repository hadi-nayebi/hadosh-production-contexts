import RhythmicPortraitPlate from "./RhythmicPortraitPlate";
import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { percussionPulses } from "./stemAnalysis";
import CortexWorkSurface, { cortexPaperBounds } from "./CortexWorkSurface";
import { cortexCameraCuts } from "./cortexCameraCuts";
export function cortexModules(annotation: Annotation) {
  const words = wordTiming(annotation)
    .intervals.map((w) => ({ ...w, item: annotation.items.find((i) => i.id === w.id)! }))
    .filter((w) => [9, 11].some((n) => w.item.groupId.endsWith(":section:" + n)));
  const ids = [...new Set(words.map((w) => w.item.phraseId))];
  const names = [
    "workshop.md",
    "event.json",
    "source-notes.md",
    "layout.css",
    "draft.md",
    "tone-rule.md",
    "learning.md",
    "details.md",
    "date-check.json",
    "links.json",
    "publish-rule.json",
    "release.json",
  ];
  return ids.map((id, index) => {
    const group = words.filter((w) => w.item.phraseId === id);
    return {
      id,
      words: group,
      name:
        names[index] ??
        [
          "memory.md",
          "writing-style.md",
          "recall.md",
          "editing.md",
          "model.json",
          "tools.json",
          "harness.json",
          "policy.json",
          "notes.md",
          "permissions.json",
          "model.json",
          "portable-context.json",
        ][index - 12] ??
        `instruction-${index + 1}.md`,
      at: group.at(-1)!.end,
      x:
        [47, 61, 76, 88, 51, 66, 80, 89, 48, 61, 73, 84][index] ??
        66 + 24 * Math.cos(index * 2.399963),
      y:
        [12, 8, 13, 23, 28, 25, 35, 46, 43, 48, 55, 63][index] ??
        40 + 25 * Math.sin(index * 2.399963),
    };
  });
}
/** Spoken anchors have priority over a preceding phrase's departing last word. */
export function cortexVocalWord(modules: ReturnType<typeof cortexModules>, time: number) {
  return modules
    .flatMap((m) => m.words)
    .filter((w) => time >= w.start && time < w.end)
    .sort((a, b) => b.start - a.start)[0];
}
export function cortexOrigin(index: number, view = 0) {
  const roots = [
    [31, 11.5],
    [33, 10],
    [35, 9.8],
    [37, 10.2],
    [39, 11.2],
    [41, 12.4],
    [40.5, 14],
    [39, 15.2],
    [37, 15.7],
    [35, 15.2],
    [33, 14.2],
    [31.5, 13],
  ];
  const root =
    index < roots.length
      ? roots[index]
      : [36 + 4.5 * Math.cos(index * 2.399963), 12.5 + 3 * Math.sin(index * 2.399963)];
  // SVG coordinates: each plate has a different hair silhouette, not a shared room origin.
  const shift = [
    [0, 0],
    [-2, 5],
    [-21, 1],
  ][view];
  return [root[0] + shift[0], root[1] + shift[1]];
}
export default function InstructionCortex({
  annotation,
  time,
  camera,
  ownership,
}: {
  annotation: Annotation;
  time: number;
  camera?: { view: number; previous: number; blend: number };
  ownership?: { node: string; progress: number; focus: number };
}) {
  const modules = useMemo(() => cortexModules(annotation), [annotation]),
    formed = modules.filter((m) => time >= m.at);
  const cameraCuts = useMemo(() => cortexCameraCuts(annotation), [annotation]);
  const shot = Math.max(
      0,
      cameraCuts.reduce((last, c, i) => (time >= c.time ? i : last), 0),
    ),
    view = camera?.view ?? cameraCuts[shot]?.view ?? 0;
  // Matched angles are editorial cuts. Dissolving unrelated head poses creates doubled people.
  const viewBlend = 1;
  const previousView = view;
  const paper = cortexPaperBounds(view);
  const overPaper = (m: { x: number; y: number }) =>
    m.x > paper.x && m.x < paper.x + paper.width && m.y > paper.y && m.y < paper.y + paper.height;
  const origin = (i: number) => {
    const from = cortexOrigin(i, previousView),
      to = cortexOrigin(i, view);
    return from.map((v, j) => v + (to[j] - v) * viewBlend);
  };
  const viewNodes = formed.map((m) => {
    if (m.name === "memory.md") m = { ...m, x: 55, y: 17 };
    if (m.name === "tools.json") m = { ...m, x: 87, y: 70 };
    // Opaque symbols must clear the photographed face, hair and headphones as well as SVG lines.
    const clear =
      view === 2
        ? { right: 30, top: 0, bottom: 72 }
        : view === 1
          ? { right: 46, top: 12, bottom: 54 }
          : { right: 46, top: 8, bottom: 49 };
    if (m.x < clear.right && m.y > clear.top && m.y < clear.bottom)
      m = { ...m, x: clear.right + 3 };
    if (ownership && ownership.node === m.id)
      return { ...m, x: m.x - 8 * ownership.progress, y: m.y + 6 * ownership.progress };
    if (m.x > 35 && m.x < 65 && m.y > 49 && m.y < 67) return { ...m, y: 42 };
    return view === 2 && m.x > 64 && m.y < 20 ? { ...m, y: 24 } : m;
  });
  const vocalWord = cortexVocalWord(modules, time);
  const current = modules.find((m) => time >= m.words[0].start && time < m.at),
    currentText =
      current?.words
        .map((w) => w.item.text)
        .join(" ")
        .toLowerCase() ?? "";
  const heading =
    currentText.includes("change") && currentText.includes("model")
      ? "Model changes"
      : currentText.includes("model")
        ? "Text calculator"
        : formed.length >= 18
          ? "Harness ownership"
          : formed.length >= 12
            ? "Digital cortex"
            : "How I instruct";
  const secondLine =
    heading === "How I instruct"
      ? "my agentic system"
      : heading === "Digital cortex"
        ? "Your instructions, retained"
        : heading === "Harness ownership"
          ? "Your rules. Your context."
          : heading === "Model changes"
            ? "Your context stays"
            : "";
  const modelChange = modules.find((m) => {
    const t = m.words
      .map((w) => w.item.text)
      .join(" ")
      .toLowerCase();
    return t.includes("change") && t.includes("model");
  });
  const modelCue =
    modelChange?.words.find((w) => w.item.text.toLowerCase().replace(/[^a-z]/g, "") === "model")
      ?.start ?? Infinity;
  const modelBlend = Math.min(1, Math.max(0, (time - modelCue) / 0.4));
  const rhythm = useMemo(
    () => percussionPulses(annotation.audioHash).filter((b) => b.strength >= 0.4),
    [annotation.audioHash],
  );
  const pulse = rhythm
    .filter((b) => time >= b.time && time - b.time < 0.24)
    .reduce((p, b) => Math.max(p, b.strength * Math.exp(-(time - b.time) * 12)), 0);
  const signals = rhythm.filter((b) => time >= b.time && time - b.time < 0.65 && formed.length);
  const activeRoutes = new Set(
    signals.map((b) => (Number(b.id.split("-").at(-1)) || 0) % formed.length),
  );
  // Beat-indexed selection is repeatable when seeking and exporting; never random per frame.
  const beatIndex = rhythm.reduce((last, b, i) => b.time <= time ? i : last, -1);
  const beatAge = beatIndex >= 0 ? time - rhythm[beatIndex].time : 1;
  const blend = Math.min(1, Math.max(0, beatAge / 0.18));
  const smooth = blend * blend * (3 - 2 * blend);
  const lit = (index: number, beat: number) => {
    const seed = Math.sin((index + 1) * 127.1 + (beat + 1) * 311.7) * 43758.5453;
    return seed - Math.floor(seed) > 0.42 ? 1 : 0.06;
  };
  const dancingFiles = viewNodes.slice(-12).flatMap((m, i) => [
    { ...m, satellite: false, activity: 0.4 + 0.6 * (lit(i, beatIndex - 1) * (1 - smooth) + lit(i, beatIndex) * smooth) },
    { ...m, id: m.id + "-echo", satellite: true,
      x: Math.min(94, m.x + (i % 2 ? -4.2 : 4.2)),
      y: Math.max(24, Math.min(78, m.y + (i % 2 ? 6 : -6))),
      activity: lit(i + 17, beatIndex - 1) * (1 - smooth) + lit(i + 17, beatIndex) * smooth },
  ]).filter((m) => !m.satellite || !(m.x > 35 && m.x < 65 && m.y > 49 && m.y < 67));
  return (
    <div
      data-instruction-cortex
      data-cortex-rhythm-source="isolated-drums-percussion"
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#101820" }}
    >
      <div data-cortex-camera-view={view} style={{ position: "absolute", inset: 0 }}>
        <RhythmicPortraitPlate
          src="/scene-assets/web-room/cortex-angles-2x2-v1.png"
          time={time}
          hash={annotation.audioHash}
          view={view}
        />
      </div>
      {[view].map((v, i) => (
        <CortexWorkSurface key={i} modules={modules} time={time} view={v} opacity={1} />
      ))}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "38%",
          height: "27%",
          background: "radial-gradient(ellipse at left top,#08131ee8,transparent 75%)",
          pointerEvents: "none",
        }}
      />
      {!ownership && (
        <div
          data-agent-instruction-heading
          style={{
            zIndex: 3,
            position: "absolute",
            left: view === 2 ? "65%" : "4%",
            top: "5%",
            font: "700 2.8cqw Arial",
            lineHeight: 1.2,
            color: "#fff3dc",
            textShadow: "0 .15cqw .5cqw #000",
          }}
        >
          {heading}
          {secondLine && (
            <>
              <br />
              {secondLine}
            </>
          )}
        </div>
      )}
      <svg
        data-cortex-network
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
        <defs>
          <linearGradient
            id="cortex-depth-gradient"
            gradientUnits="userSpaceOnUse"
            x1={
              [36, 34, 15][previousView] +
              ([36, 34, 15][view] - [36, 34, 15][previousView]) * viewBlend
            }
            y1="0"
            x2={
              [56, 60, 44][previousView] +
              ([56, 60, 44][view] - [56, 60, 44][previousView]) * viewBlend
            }
            y2="0"
          >
            <stop offset="0" stopColor="white" stopOpacity=".01" />
            <stop offset=".3" stopColor="white" stopOpacity=".04" />
            <stop offset=".65" stopColor="white" stopOpacity=".5" />
            <stop offset="1" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="cortex-depth-mask">
            <rect width="100" height="56.25" fill="url(#cortex-depth-gradient)" />
            <rect
              x={view === 2 ? 64 : 3}
              y="2"
              width={view === 2 ? 36 : 38}
              height="10"
              fill="black"
            />
            <rect x="35" y="28" width="30" height="9" fill="black" />
            <rect
              x={paper.x}
              y={paper.y * 0.5625}
              width={paper.width}
              height={paper.height * 0.5625}
              fill="#222"
            />
          </mask>
        </defs>
        <g mask="url(#cortex-depth-mask)">
          {viewNodes.map((m, i) => {
            const [x, y] = origin(i),
              [px, py] = origin((i + 11) % 12);
            return (
              <g key={"origin-" + m.id} data-cortex-origin={i}>
                <path
                  d={`M${px} ${py} L${x} ${y}`}
                  stroke="#b9e0e2"
                  strokeWidth={0.1 + 0.18 * pulse}
                />
                <circle cx={x} cy={y} r={0.22 + 0.18 * pulse} fill="#fff1b9" />
              </g>
            );
          })}
          {viewNodes.map((m, i) => {
            const p = Math.min(1, (time - m.at) / 0.8),
              y = m.y * 0.5625;
            const [rootX, rootY] = origin(i);
            return (
              <g key={m.id} data-cortex-node={m.id} opacity={p * (activeRoutes.has(i) ? 1 : 0.4)}>
                <path
                  d={`M${rootX} ${rootY} Q${(rootX + m.x) / 2} ${rootY - 3} ${m.x} ${y}`}
                  fill="none"
                  stroke={pulse > 0.15 ? "#fff0ba" : "#c4e3e9"}
                  strokeWidth={0.16 + 0.25 * pulse}
                  style={{ filter: `drop-shadow(0 0 ${0.15 + 0.5 * pulse}px #f8e2ac)` }}
                  strokeDasharray="1 .6"
                />
                {i > 0 && (
                  <path
                    d={`M${viewNodes[i - 1].x} ${viewNodes[i - 1].y * 0.5625} L${m.x} ${y}`}
                    fill="none"
                    stroke="#b0ced3"
                    strokeWidth={0.1 + 0.2 * pulse}
                  />
                )}
                <circle cx={m.x} cy={y} r=".65" fill="#fff0c7" />
              </g>
            );
          })}
          {signals.map((b) => {
            const index = (Number(b.id.split("-").at(-1)) || 0) % formed.length,
              m = viewNodes[index],
              [rx, ry] = origin(index),
              p = (time - b.time) / 0.65,
              q = 1 - p,
              cx = (rx + m.x) / 2,
              y = m.y * 0.5625;
            return (
              <circle
                key={b.id}
                data-cortex-signal={b.time}
                cx={q * q * rx + 2 * q * p * cx + p * p * m.x}
                cy={q * q * ry + 2 * q * p * (ry - 3) + p * p * y}
                r={0.3 + 0.3 * b.strength}
                fill="#fff4c9"
                opacity={Math.sin(p * Math.PI)}
                style={{ filter: "drop-shadow(0 0 2px #fff1bc)" }}
              />
            );
          })}
        </g>
      </svg>
      {dancingFiles.map((m) => (
        <div
          key={m.id}
          data-cortex-file={m.satellite ? undefined : m.name}
          data-cortex-file-echo={m.satellite ? m.name : undefined}
          data-file-activity={m.activity.toFixed(3)}
          style={{
            position: "absolute",
            left: m.x + "%",
            top: m.y + "%",
            transform: `translate(-50%,-50%) scale(${(m.satellite ? 0.72 : 1) + 0.1 * m.activity * pulse}) translateY(${Math.sin(time * 1.5 + m.x) * 0.3}cqw)`,
            opacity: Math.min(1, (time - m.at) / 0.8) * (overPaper(m) ? 0.12 : 1) * (time - m.at < 1.2 && !m.satellite ? 1 : m.activity),
            color: "#fff3dc",
            width: "3.4cqw",
            filter: `drop-shadow(0 .3cqw .3cqw #0008) drop-shadow(0 0 ${ownership && ownership.node === m.id ? 0.5 + ownership.focus : 0.5}cqw #b8dfda99)`,
          }}
        >
          <svg aria-hidden="true" viewBox="0 0 28 34" style={{ display: "block", width: "100%" }}>
            <path d="M5 3H19L25 9V31H5Z" fill="#183441" stroke="#86bfc8" strokeWidth="1.5" />
            <path
              d="M3 1H18L24 7V29H3Z"
              fill={
                m.name.endsWith(".json")
                  ? "#9acfd1"
                  : m.name.endsWith(".css")
                    ? "#bfb0da"
                    : "#f0dfbb"
              }
              stroke="#fff4dc"
              strokeWidth=".8"
            />
            <path d="M18 1V7H24" fill="none" stroke="#566e7b" strokeWidth="1" />
            {m.name.endsWith(".json") ? (
              <text
                x="13.5"
                y="22"
                textAnchor="middle"
                fill="#294c59"
                fontFamily="monospace"
                fontWeight="bold"
                fontSize="12"
              >
                {"{}"}
              </text>
            ) : m.name.endsWith(".css") ? (
              <path
                d="M8 12H19M8 17H16M8 22H19M11 10L9 24M17 10L15 24"
                stroke="#57466f"
                fill="none"
                strokeWidth="1.3"
              />
            ) : (
              <path
                d="M8 12H19M8 16H19M8 20H19M8 24H15"
                fill="none"
                stroke="#675c48"
                strokeWidth="1.3"
              />
            )}
          </svg>
        </div>
      ))}
      {modelChange && time >= modelChange.words[0].start && (
        <div
          data-cortex-model-swap
          style={{
            position: "absolute",
            left: "78%",
            top: "68%",
            width: "5%",
            aspectRatio: "1",
            background: "#f0e4cf",
            borderRadius: "50%",
            padding: ".3cqw",
            boxShadow: "0 .25cqw .5cqw #0007",
          }}
        >
          <img
            src="/scene-assets/ai-logos/openai.svg"
            alt=""
            style={{
              position: "absolute",
              inset: "10%",
              width: "80%",
              height: "80%",
              opacity: 1 - modelBlend,
            }}
          />
          <img
            src="/scene-assets/ai-logos/claude-color.svg"
            alt=""
            style={{
              position: "absolute",
              inset: "10%",
              width: "80%",
              height: "80%",
              opacity: modelBlend,
            }}
          />
        </div>
      )}
      {!ownership &&
        modules.flatMap((m) =>
          m.words
            .filter((w) =>
              vocalWord
                ? w.id === vocalWord.id
                : time >= w.end && w.id === m.words.at(-1)!.id && time < w.end + 0.65,
            )
            .map((w) => {
              const p = Math.min(1, Math.max(0, (time - w.end) / 0.65)),
                e = 1 - Math.pow(1 - p, 3);
              return (
                <span
                  key={w.id}
                  data-instruction-word={w.id}
                  style={{
                    position: "absolute",
                    left: 50 + (m.x - 50) * e + "%",
                    top: 56 + (m.y - 56) * e + "%",
                    transform: `translate(-50%,-50%) scale(${1 - 0.75 * e})`,
                    opacity: 1 - e,
                    font: "700 4.5cqw Arial",
                    color: "#fff3dc",
                    textShadow: "0 .2cqw .8cqw #000",
                  }}
                >
                  {w.item.text}
                </span>
              );
            }),
        )}
    </div>
  );
}

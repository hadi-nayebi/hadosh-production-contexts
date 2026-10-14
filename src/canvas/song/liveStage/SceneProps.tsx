import type { Scene, SceneObject } from "./scene.mjs";
import { BrowserSymbol } from "./BrowserHistory";
import { pulseCues } from "./rhythm.mjs";

export function entranceAt(project: Scene, frame: number) {
  const item = [...(project.browserHistory || [])].reverse().find((m) => m.frame <= frame);
  if (!item) return null;
  const hit = pulseCues(project, {
    enabled: true,
    pattern: "beat",
    every: 1,
    phase: 0,
    offsetFrames: 0,
    amplitude: 0,
    decayFrames: 6,
    axis: "y",
  }).find((b) => b.frame >= item.frame && b.frame <= item.frame + 36);
  const cue = hit?.frame ?? item.frame;
  const age = frame - cue;
  const scale =
    age < 0
      ? 0
      : age < 4
        ? age / 4
        : age < 16
          ? 1 + 0.18 * Math.sin(((age - 4) / 12) * Math.PI) * Math.exp(-(age - 4) / 7)
          : 1;
  const lift =
    age >= 0 && age < 18 ? -18 * Math.sin((age / 18) * Math.PI) * Math.exp(-age / 14) : 0;
  return { item, cue, age, scale, lift, observed: !!hit };
}
function lines(text: string, max: number) {
  const result: string[] = [];
  for (const word of text.split(" ")) {
    const last = result.length - 1;
    if (last < 0 || result[last].length + word.length + 1 > max) result.push(word);
    else result[last] += " " + word;
  }
  return result;
}
export default function SceneProps({
  project,
  object,
  frame,
}: {
  project: Scene;
  object: SceneObject;
  frame: number;
}) {
  const w = object.width,
    h = object.height;
  const entry = entranceAt(project, frame);
  if (object.textSurface === "newspaper" && object.newspaper) {
    return (
      <g data-scene-prop="newspaper" data-history-year="1998">
        <path d={`M6 8 H${w + 5} V${h} L${w - 5} ${h + 7} H9Z`} fill="#102421" opacity=".35" />
        <path
          d={`M0 0 L${w - 6} 2 L${w} ${h - 4} L4 ${h}Z`}
          fill="#e9dab3"
          stroke="#806d48"
          strokeWidth="2"
        />
        <path d={`M8 5 L${w - 12} 6 L${w - 7} ${h - 10} L10 ${h - 7}Z`} fill="#f5eccf" />
        <text
          x={w / 2}
          y="26"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="22"
          fontWeight="800"
          fill="#29382d"
        >
          THE OPEN WEB
        </text>
        <path d={`M15 34 H${w - 15} M15 37 H${w - 15}`} stroke="#473c29" />
        <text
          x={w / 2}
          y="52"
          textAnchor="middle"
          fontFamily="Arial"
          fontSize="12"
          fontWeight="700"
          fill="#453f30"
        >
          {object.newspaper.date}
        </text>
        {lines(object.text || "", 18).map((line, i) => (
          <text
            key={i}
            x="17"
            y={79 + i * 26}
            fontFamily="Georgia,serif"
            fontSize={object.textStyle?.fontSize || 25}
            fontWeight="800"
            fill="#203329"
          >
            {line}
          </text>
        ))}
        <path d={`M17 115 H${w - 17}`} stroke="#887451" />
        {lines(object.newspaper.context, 32).map((line, i) => (
          <text
            key={i}
            x="17"
            y={134 + i * 17}
            fontFamily="Georgia,serif"
            fontSize="14"
            fill="#453e2f"
          >
            {line}
          </text>
        ))}
        <text
          x={w / 2}
          y={h - 12}
          textAnchor="middle"
          fontFamily="Arial"
          fontSize="9"
          letterSpacing="1"
          fill="#65583e"
        >
          ILLUSTRATIVE FRONT PAGE
        </text>
        <title>
          Illustrative newspaper prop, not a reproduction of a real publication.{" "}
          {object.newspaper.date}. {object.text}. {object.newspaper.context}
        </title>
      </g>
    );
  }
  if (object.kind === "history-badge") {
    if (!entry) return null;
    const { item, scale, lift, cue } = entry;
    return (
      <g data-history-symbol={item.symbol} data-logo-cue={cue}>
        <path d={`M${w / 2} 0 L18 22 M${w / 2} 0 L${w - 18} 22`} stroke="#beaa7e" strokeWidth="3" />
        <circle cx={w / 2} cy="2" r="4" fill="#5c4932" />
        <rect x="3" y="24" width={w} height={h - 24} rx="7" fill="#091b1e" opacity=".28" />
        <rect
          y="20"
          width={w}
          height={h - 24}
          rx="7"
          fill="#725439"
          stroke="#bd9768"
          strokeWidth="4"
        />
        <g transform={`translate(${w / 2} ${66 + lift}) scale(${scale})`}>
          <circle r="37" fill="#f8eacb" stroke="#123e43" strokeWidth="3" />
          <BrowserSymbol symbol={item.symbol} />
        </g>
        <text
          x={w / 2}
          y={h - 22}
          textAnchor="middle"
          fill="#fff1d3"
          fontFamily="Georgia,serif"
          fontSize="22"
        >
          {item.symbol === "mozilla"
            ? "Mozilla"
            : item.symbol === "safari"
              ? "Safari"
              : item.symbol === "firefox"
                ? "Firefox"
                : "Chrome"}
        </text>
        <title>
          {item.label}. {item.note}
        </title>
      </g>
    );
  }
  if (object.kind === "history-calendar") {
    if (!entry) return null;
    const { item } = entry;
    return (
      <g data-history-year={item.year} data-scene-prop="calendar">
        <path
          d={`M8 ${h - 5} L${w + 10} ${h - 5} L${w - 5} ${h - 28} L25 ${h - 28}Z`}
          fill="#684b31"
          stroke="#bd9768"
          strokeWidth="3"
        />
        <rect
          x="5"
          y="7"
          width={w - 10}
          height={h - 18}
          rx="4"
          fill="#fff0ce"
          stroke="#765837"
          strokeWidth="5"
        />
        <rect x="8" y="10" width={w - 16} height="22" fill="#b86146" />
        {[35, w - 35].map((x) => (
          <path key={x} d={`M${x} 2 V19`} stroke="#41433b" strokeWidth="5" strokeLinecap="round" />
        ))}
        <text
          x={w / 2}
          y="79"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="46"
          fill="#244b4b"
        >
          {item.year}
        </text>
        {lines(item.title, Math.floor((w - 30) / 8)).map((line, i) => (
          <text
            key={i}
            x={w / 2}
            y={101 + i * 19}
            textAnchor="middle"
            fontFamily="Arial"
            fontSize="15"
            fill="#244b4b"
          >
            {line}
          </text>
        ))}
        <title>
          {item.note} Sources: {item.sources.join(" ")}
        </title>
      </g>
    );
  }
  return (
    <g data-scene-prop="wooden-sign" data-text-role="explanatory">
      <path d={`M${w / 2} -17 L20 8 M${w / 2} -17 L${w - 20} 8`} stroke="#bba77d" strokeWidth="3" />
      <circle cx={w / 2} cy="-17" r="4" fill="#6c5038" />
      <rect x="4" y="6" width={w} height={h} rx="6" fill="#091b1e" opacity=".3" />
      <rect width={w} height={h} rx="6" fill="#785637" stroke="#c5a06d" strokeWidth="4" />
      <rect x="9" y="9" width={w - 18} height={h - 18} rx="3" fill="#203d3b" stroke="#9d7b50" />
      {lines(
        object.text || "",
        Math.floor(((w - 30) / (object.textStyle?.fontSize || 20)) * 1.7),
      ).map((line, i, a) => (
        <text
          key={i}
          x={w / 2}
          y={h / 2 - (a.length - 1) * 13 + i * 26 + 7}
          textAnchor="middle"
          fontFamily={
            object.textStyle?.family === "mono"
              ? "monospace"
              : object.textStyle?.family === "sans"
                ? "Arial,sans-serif"
                : "Georgia,serif"
          }
          fontSize={object.textStyle?.fontSize || 20}
          fontWeight={object.textStyle?.weight || 600}
          fill="#f5e4be"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

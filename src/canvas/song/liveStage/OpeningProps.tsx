import ReadableBrowserProps from './ReadableBrowserProps';
import BrowserCustomizationProps from './BrowserCustomizationProps';
import EarthEvolutionProps from './EarthEvolutionProps';
import FoundationToasterProps from "./FoundationToasterProps";
import FoundationHarnessProps from "./FoundationHarnessProps";
import FoundationFeedProps from "./FoundationFeedProps";
import FoundationBrowserProps from "./FoundationBrowserProps";
import FoundationOpeningProps from "./FoundationOpeningProps";
import FullSongProps from "./FullSongProps";
import EarthLocalLink from "./EarthLocalLink";
import EarthUpgrades from "./EarthUpgrades";
import InternetChecklist from "./InternetChecklist";
import ArpanetInset from "./ArpanetInset";
import FeedProfile from "./FeedProfile";
import type { Scene, SceneObject } from "./scene.mjs";
const progress = (frame: number, start: number, end: number) => {
  const t = Math.max(0, Math.min(1, (frame - start) / Math.max(1, end - start)));
  return t * t * (3 - 2 * t);
};
export default function OpeningProps({ object: o, frame }: { object: SceneObject; frame: number }) {
  if(o.kind.startsWith('story-browser-readable-'))return <ReadableBrowserProps object={o} frame={frame}/>;
  if(o.kind.startsWith('story-browser-customization-'))return <BrowserCustomizationProps object={o} frame={frame}/>;
  if(o.kind.startsWith('story-earth-'))return <EarthEvolutionProps object={o} frame={frame}/>;
  // New foundation primitives share the same explicit source-clock contract as legacy performers.
  const clock = o.performanceClock;
  if (
    clock &&
    ["story-appliance-", "story-task-", "story-feed-", "story-browser-"].some((prefix) =>
      o.kind.startsWith(prefix),
    )
  ) {
    const sourceFrame = (f: number) =>
      clock.sourceStart +
      ((f - clock.timelineStart) * (clock.sourceEnd - clock.sourceStart)) /
        (clock.timelineEnd - clock.timelineStart);
    const performed = {
      ...o,
      performanceClock: undefined,
      enterFrame: sourceFrame(o.enterFrame),
      exitFrame: sourceFrame(o.exitFrame),
      animation: o.animation
        ? {
            startFrame: sourceFrame(o.animation.startFrame),
            endFrame: sourceFrame(o.animation.endFrame),
          }
        : undefined,
    };
    return <OpeningProps object={performed} frame={sourceFrame(frame)} />;
  }

  if (o.kind.startsWith("story-appliance-"))
    return <FoundationToasterProps object={o} frame={frame} />;
  if (o.kind.startsWith("story-task-")) return <FoundationHarnessProps object={o} frame={frame} />;
  if (o.kind.startsWith("story-feed-")) return <FoundationFeedProps object={o} frame={frame} />;
  if (o.kind.startsWith("story-browser-"))
    return <FoundationBrowserProps object={o} frame={frame} />;
  if (
    [
      "story-space-field",
      "story-physical-capsule",
      "story-window-passage",
      "story-window-grip",
    ].includes(o.kind)
  )
    return <FoundationOpeningProps object={o} frame={frame} />;
  if (o.kind.startsWith("story-") || o.kind === "lyric-block") {
    const c = o.performanceClock;
    const sourceFrame = (f: number) =>
      c
        ? c.sourceStart +
          ((f - c.timelineStart) * (c.sourceEnd - c.sourceStart)) /
            (c.timelineEnd - c.timelineStart)
        : f;
    const performed = c
      ? { ...o, enterFrame: sourceFrame(o.enterFrame), exitFrame: sourceFrame(o.exitFrame) }
      : o;
    return <FullSongProps object={performed} frame={sourceFrame(frame)} />;
  }
  const age = frame - o.enterFrame,
    span = o.exitFrame - o.enterFrame;
  if (o.kind.startsWith("upgrade-") || o.kind.startsWith("capability-"))
    return <EarthUpgrades object={o} frame={frame} />;
  if (o.kind === "earth-local-link")
    return <EarthLocalLink age={age} width={o.width} height={o.height} />;
  if (o.kind === "internet-checklist") return <InternetChecklist age={age} />;
  if (o.kind === "arpanet-inset") return <ArpanetInset age={age} />;
  if (o.kind === "feed-profile") return <FeedProfile age={age} />;
  if (o.kind === "curtain")
    return <rect width={o.width} height={o.height} fill={o.textColor || "#060e12"} />;
  if (o.kind === "caption")
    return (
      <text
        y={o.textStyle?.fontSize || 32}
        fill={o.textColor || "#f3ead7"}
        stroke={o.textOutline}
        strokeWidth={o.textOutline ? 6 : 0}
        strokeLinejoin="round"
        paintOrder="stroke"
        fontFamily="Georgia,serif"
        fontSize={o.textStyle?.fontSize || 32}
        fontWeight={600}
      >
        {o.text}
      </text>
    );
  if (o.kind === "network") {
    const points = [
      [0.23, 0.31],
      [0.4, 0.23],
      [0.57, 0.28],
      [0.73, 0.4],
      [0.54, 0.55],
      [0.35, 0.65],
      [0.22, 0.49],
    ];
    return (
      <g data-opening-prop="network" stroke="#edbc69" fill="#fff0bc" strokeWidth={2}>
        {points.map(([x, y], i) => {
          const [xx, yy] = points[(i + 2) % points.length];
          return (
            <g
              key={i}
              opacity={
                o.animation
                  ? progress(
                      frame,
                      o.animation.startFrame +
                        (i * (o.animation.endFrame - o.animation.startFrame)) / 8,
                      o.animation.startFrame +
                        ((i + 2) * (o.animation.endFrame - o.animation.startFrame)) / 8,
                    )
                  : progress(age, i * 6, i * 6 + 18)
              }
            >
              <path
                d={`M${x * o.width} ${y * o.height} Q${o.width * 0.5} ${o.height * 0.12} ${xx * o.width} ${yy * o.height}`}
                fill="none"
                opacity=".75"
              />
              <circle cx={x * o.width} cy={y * o.height} r={4} />
            </g>
          );
        })}
      </g>
    );
  }
  if (o.kind === "window-sash") {
    const t = o.animation
        ? progress(frame, o.animation.startFrame, o.animation.endFrame)
        : progress(age, span * 0.2, span * 0.55),
      left = o.width * (1 - Math.cos(t * Math.PI * 0.48)),
      skew = t * o.height * 0.09;
    return (
      <g data-opening-prop="window-sash">
        <path
          d={`M${left} ${skew} L${o.width} 0 V${o.height} L${left} ${o.height - skew} Z`}
          fill="#173e45"
          fillOpacity={0.72 * (1 - t) + 0.12}
          stroke="#906239"
          strokeWidth={12}
        />
        <path
          d={`M${(left + o.width) / 2} ${skew / 2} V${o.height - skew / 2} M${left} ${o.height / 2} H${o.width}`}
          stroke="#bc8b57"
          strokeWidth={7}
        />
        <circle cx={left + 14} cy={o.height * 0.55} r={5} fill="#e5be77" />
      </g>
    );
  }
  return null;
}
export function WindowPass({
  opening,
  frame,
}: {
  opening: NonNullable<Scene["opening"]>;
  frame: number;
}) {
  const { passStart, passCut, passEnd } = opening;
  const black = 1 - progress(frame, 9, 30);
  if (frame < 30) return <rect width="1280" height="720" fill="#060e12" opacity={black} />;
  if (frame < passStart || frame >= passEnd) return null;
  const x =
    frame < passCut
      ? 1280 * (1 - progress(frame, passStart, passCut))
      : -1280 * progress(frame, passCut, passEnd);
  return (
    <g transform={`translate(${x} 0)`} data-opening-prop="jamb-occlusion">
      <rect width="1280" height="720" fill="#4c3020" />
      {[90, 270, 480, 720, 990, 1190].map((n) => (
        <path
          key={n}
          d={`M${n} 0 Q${n - 30} 360 ${n + 25} 720`}
          stroke="#674429"
          strokeWidth={15}
          fill="none"
        />
      ))}
    </g>
  );
}

export function openingOpacity(o: SceneObject, frame: number) {
  return (
    (o.fade?.in ? progress(frame, ...o.fade.in) : 1) *
    (o.fade?.out ? 1 - progress(frame, ...o.fade.out) : 1)
  );
}

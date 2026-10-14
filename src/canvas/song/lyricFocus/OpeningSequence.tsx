import MoonEraClock from "./MoonEraClock";
import { SceneEffects } from "./SceneLifetime";
import { useMemo } from "react";
import { audioAssetsFor, percussionPulses } from "./stemAnalysis";
import { depthFlight } from "./depthMotion";
import WebBirthReveal from "./WebBirthReveal";
import type { Annotation } from "./audioAnnotation";
import {
  openingDefaults,
  openingCamera,
  openingEvents,
  openingImageStages,
  openingLanding,
  openingWords,
  openingMoonStart,
  openingAssets,
  type OpeningDirection,
} from "./openingDirection";
import rhythm from "./earthBuildRhythm.json";
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (v: number) => {
  const p = clamp(v);
  return p * p * (3 - 2 * p);
};
export function upgradeUnits(id: string, drops: number) {
  // Playful units, not a historical quantity: each landed packet adds its value.
  return id === "transistors"
    ? [8, 9, 8, 9, 9, 9].slice(0, drops).reduce((a, b) => a + b, 0)
    : drops * 7;
}
export function earthPulseAt(time: number, pulses: { time: number; strength: number }[]) {
  return pulses
    .filter((p) => time >= p.time && time - p.time < 0.5)
    .reduce((best, p) => {
      const age = time - p.time;
      const rise = Math.sin((Math.min(1, age / 0.045) * Math.PI) / 2);
      return Math.max(best, p.strength * rise * Math.exp(-Math.max(0, age - 0.045) / 0.15));
    }, 0);
}
export default function OpeningSequence({
  annotation,
  time,
  direction = openingDefaults,
  hideBirth = false,
  effectsEnd = Infinity,
}: {
  annotation: Annotation;
  time: number;
  direction?: OpeningDirection;
  hideBirth?: boolean;
  effectsEnd?: number;
}) {
  const d = direction,
    p = d.placements,
    ev = openingEvents(d);
  const camera = openingCamera(time, d),
    z = camera.scale;
  const swap = clamp((camera.progress - 0.55) / 0.35),
    travel = clamp((time - 6.4) / 3.1);
  // Resolve the sky before the recognizable planet appears. Only the dark
  // tail overlaps; paper and galaxy cannot wash out the Earth silhouette.
  const bookFade = smooth((time - (d.zoomEnd - 1.4)) / 0.6);
  const earthFade = smooth((time - (d.zoomEnd - 1.1)) / 0.85);
  const stage = (id: string) =>
    clamp((time - (ev.find((e) => e.id === "stage-" + id)?.time ?? 100)) / 0.8);
  const words = openingWords(annotation, time, d);
  const lights = stage("electricity"),
    circuits = stage("transistors"),
    computers = stage("computers"),
    web = stage("web");
  const q = ev.filter((e) => e.kind === "question");
  const birthCue = ev.find((e) => e.id === "web-birth")?.time ?? 25.2275;
  const activeQuestions =
    time < Math.min(birthCue, effectsEnd) ? q.filter((e) => time >= e.time) : [];
  const imageEvents = openingImageStages(d);
  const currentImage = imageEvents.filter((e) => time >= e.time).at(-1);
  const imageIndex = currentImage?.imageIndex ?? 0;
  const imageFade = currentImage && imageIndex > 0 ? clamp((time - currentImage.time) / 0.85) : 1;
  const earth = p.earth;
  const moonStart = openingMoonStart(annotation, d);
  const earthPulses = useMemo(() => {
    let last = -Infinity;
    return percussionPulses(annotation.audioHash).filter((c) => {
      if (c.time < 9.5 || c.time >= rhythm.end || c.strength < 0.55 || c.time - last < 0.28)
        return false;
      last = c.time;
      return true;
    });
  }, [annotation.audioHash]);
  const earthPulse = earthPulseAt(time, earthPulses);
  const birthBursts = useMemo(() => {
    const keys =
      audioAssetsFor(annotation.audioHash)?.lanes.find((l) => l.id === "stem-keyboard")?.events ??
      [];
    return keys
      .filter((e) => e.time >= birthCue - 0.03 && e.time < effectsEnd && e.strength >= 0.5)
      .slice(0, 4)
      .map((e) => Math.max(0, e.time - birthCue));
  }, [annotation.audioHash, birthCue, effectsEnd]);

  function raster(index: number, opacity: number) {
    return (
      <div
        data-earth-frame={index}
        data-earth-image-onset={imageEvents.find((e) => e.imageIndex === index)?.time}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/scene-assets/earth-build/earth-upgrade-3x3-v1.png)",
          backgroundSize: "300% 300%",
          backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
          opacity,
        }}
      />
    );
  }
  function img(id: string, width: number) {
    const a = openingAssets.find((a) => a.id === id)!,
      v = p[id] ?? { x: 50, y: 50, scale: 1 };
    return (
      <img
        key={id}
        data-opening-asset={id}
        src={a.src}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: v.x + "%",
          top: v.y + (id === "stool" ? 5 * v.scale : 0) + "%",
          width: width * v.scale + "%",
          transform: "translate(-50%,-50%)",
          filter: "drop-shadow(0 1.2cqw 1cqw #0009)",
        }}
      />
    );
  }
  return (
    <div
      data-testid="opening-sequence"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "radial-gradient(ellipse at 45% 20%,#233144,#040710 65%)",
      }}
    >
      <svg
        viewBox="0 0 1000 562.5"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        {Array.from({ length: 72 }, (_, i) => (
          <circle
            key={i}
            cx={((((Math.sin(i * 127.1 + 19.7) * 43758.5453) % 1) + 1) % 1) * 1000}
            cy={((((Math.sin(i * 269.5 + 43.1) * 22578.1459) % 1) + 1) % 1) * 560}
            r={i % 4 === 0 ? 1.2 : 0.6}
            fill="#d9e7ff"
            opacity={0.15 + (i % 5) * 0.1}
          />
        ))}
      </svg>
      <div style={{ position: "absolute", inset: 0, opacity: earthFade, willChange: "opacity" }}>
        <div
          data-earth-pulse={earthPulse}
          data-earth-pulse-source="isolated-drums-reinforced-percussion"
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${(0.4 + 0.6 * travel) * (1 + 0.045 * earthPulse)})`,
            opacity: Math.max(0.1, travel),
            willChange: "transform,opacity",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: earth.x + "%",
              top: earth.y + "%",
              width: 48 * earth.scale + "%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
              willChange: "transform",
              maskImage: "radial-gradient(circle,#000 0%,#000 61%,transparent 72%)",
            }}
          >
            {imageIndex > 0 && raster(imageIndex - 1, 1)}
            {raster(imageIndex, imageFade)}
          </div>
        </div>
        <SceneEffects>
          {time < effectsEnd && (
            <>
              {ev
                .filter(
                  (e) =>
                    e.kind === "falling-asset" &&
                    time < effectsEnd &&
                    time >= e.time &&
                    time < Math.min(openingLanding(e.time), rhythm.end),
                )
                .map((e, i) => {
                  const age = clamp((time - e.time) / (openingLanding(e.time) - e.time));
                  const flight = depthFlight(e.id, age, earth);
                  const src = openingAssets.find((a) => a.id === e.assetId)?.src;
                  return (
                    <img
                      key={e.id}
                      data-event-id={e.id}
                      src={src}
                      alt=""
                      style={{
                        position: "absolute",
                        width: "8%",
                        left: flight.x + "%",
                        top: flight.y + "%",
                        transform: `translate(-50%,-50%) rotate(${flight.rotation}deg) scale(${flight.scale})`,
                        opacity: flight.opacity,
                        filter: "drop-shadow(0 0 .5cqw #edce89aa)",
                      }}
                    />
                  );
                })}
              {computers > 0 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: computers * 0.2,
                    background: "radial-gradient(ellipse at 50% 50%,#30b7ff55,transparent 60%)",
                  }}
                />
              )}
              {!hideBirth && time < effectsEnd && (
                <WebBirthReveal
                  burstDelays={birthBursts.length ? birthBursts : undefined}
                  elapsed={time - (ev.find((e) => e.id === "web-birth")?.time ?? 25.2275)}
                  fade={clamp((effectsEnd - time) / 0.08)}
                />
              )}
              {time >= 10 && time < Math.min(q[0].time, effectsEnd) && (
                <div
                  data-upgrade-counters
                  aria-label="Illustrative upgrade counts"
                  style={{
                    position: "absolute",
                    left: "5%",
                    top: "27%",
                    width: "16%",
                    display: "grid",
                    gap: "2cqw",
                    opacity: clamp((q[0].time - time) / 0.4),
                  }}
                >
                  {(["electricity", "transistors", "computers"] as const).map((id) => {
                    const drops = ev.filter(
                      (e) =>
                        e.kind === "falling-asset" &&
                        e.assetId === id &&
                        openingLanding(e.time) <= time,
                    );
                    if (!drops.length) return null;
                    const landing = time - openingLanding(drops.at(-1)!.time);
                    return (
                      <div
                        key={id}
                        data-upgrade-counter={id}
                        data-upgrade-count={upgradeUnits(id, drops.length)}
                        data-actual-drops={drops.length}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          alignItems: "center",
                          gap: ".4cqw",
                          color: "#f1e8d5",
                          filter: `drop-shadow(0 0 ${Math.max(0, 0.5 - landing)}cqw #edca80)`,
                          transform: `scale(${1 + 0.08 * Math.exp(-landing * 10)})`,
                        }}
                      >
                        <img
                          src={openingAssets.find((a) => a.id === id)!.src}
                          alt=""
                          style={{
                            width: "100%",
                            maxWidth: "4.5cqw",
                            maxHeight: "4.5cqw",
                            objectFit: "contain",
                            justifySelf: "center",
                          }}
                        />
                        <strong
                          style={{
                            font: "700 clamp(16px,3cqw,40px) Arial",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {upgradeUnits(id, drops.length)}
                        </strong>
                        <span
                          style={{
                            gridColumn: "1 / -1",
                            font: "500 clamp(10px,1.2cqw,16px) Arial",
                            textAlign: "center",
                            textShadow: "0 1px 4px #000",
                          }}
                        >
                          {id === "electricity"
                            ? "Electricity"
                            : id === "transistors"
                              ? "Transistors"
                              : "Computers"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
              <MoonEraClock
                time={time}
                start={moonStart}
                end={Math.min(birthCue, effectsEnd)}
                hash={annotation.audioHash}
                imageIndex={imageIndex}
                pulse={earthPulse}
              />
              {activeQuestions.map((activeQ) => (
                <div
                  key={activeQ.id}
                  data-question={activeQ.id}
                  style={{
                    position: "absolute",
                    left:
                      activeQ.id === "question-who" || activeQ.id === "question-where"
                        ? "74%"
                        : "5%",
                    top:
                      activeQ.id === "question-when" || activeQ.id === "question-where"
                        ? "73%"
                        : "26%",
                    color: "#fff0d4",
                    background: "radial-gradient(ellipse,#8eacd31a,transparent 75%)",
                    padding: ".9cqw 1.1cqw",
                    fontFamily: "Georgia,serif",
                    fontSize: "clamp(12px,2.1cqw,26px)",
                    fontWeight: 700,
                    textShadow: ".04cqw .08cqw #6d5540,0 .2cqw .45cqw #000",
                    maxWidth: "21%",
                    transform: `scale(${0.8 + 0.2 * clamp((time - activeQ.time) / 0.18)})`,
                    opacity: clamp((time - activeQ.time) / 0.12),
                    filter: "drop-shadow(0 0 .55cqw #cfdfef55)",
                  }}
                >
                  {activeQ.text}
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        width: 0.65 - i * 0.15 + "cqw",
                        height: 0.65 - i * 0.15 + "cqw",
                        borderRadius: "50%",
                        background: "#e9d7bfa6",
                        boxShadow: "0 0 .6cqw #c4d9f77a",
                        left:
                          (activeQ.id === "question-who" || activeQ.id === "question-where"
                            ? -3 - i * 3
                            : 96 + i * 3) + "%",
                        top:
                          (activeQ.id === "question-when" || activeQ.id === "question-where"
                            ? 30 - i * 8
                            : 75 + i * 8) + "%",
                      }}
                    />
                  ))}
                </div>
              ))}
            </>
          )}
        </SceneEffects>
      </div>
      {time < 9.5 && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 1,
              transform: `translate(${camera.panX}%,${(50 - p.window.y) * camera.progress}%) scale(${z}) rotate(${camera.rotation}deg)`,
              transformOrigin: `${p.window.x}% ${p.window.y}%`,
              willChange: "transform",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 50% 36%,#9b744443,transparent 65%)",
                opacity: 1 - bookFade,
              }}
            />
            <div style={{ position: "absolute", inset: 0, opacity: 1 - bookFade }}>
              {img("book", 62)}
              {p.logo.scale > 0.2 && img("logo", 4)}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: Math.sin(swap * Math.PI) * 0.08,
              background: "radial-gradient(ellipse at 60% 40%,#cfddd9aa,transparent 55%)",
              filter: "blur(2cqw)",
              pointerEvents: "none",
            }}
          />
        </>
      )}
      {words.map((word) => {
        const key = word.text.toLowerCase().replace(/[^a-z]/g, ""),
          art = word.art,
          grow = 1 - Math.pow(1 - clamp((time - word.start) / 0.35), 3);
        const fonts = [
          "Georgia,serif",
          "Arial,sans-serif",
          '"Courier New",monospace',
          "Impact,sans-serif",
          '"Trebuchet MS",sans-serif',
          '"Palatino Linotype",serif',
          "Verdana,sans-serif",
          '"Arial Black",sans-serif',
        ];
        const font =
          art.motion === "fonts"
            ? fonts[
                Math.floor(
                  1.4 * Math.max(0, time - word.start) +
                    0.85 * Math.pow(Math.max(0, time - word.start), 2),
                ) % fonts.length
              ]
            : "Georgia,serif";
        const wordScale =
          art.motion === "shrink"
            ? 1.2 - 0.2 * grow
            : art.motion === "grow"
              ? 0.82 + 0.18 * grow
              : 1;
        return (
          <span
            key={word.id}
            data-story-word={word.id}
            style={{
              position: "absolute",
              left: art.x + "%",
              top: art.y + "%",
              transform: `translate(-50%,-50%) scale(${art.scale * wordScale}) scaleX(${art.motion === "stretch" ? 1 + 0.2 * grow : 1})`,
              fontFamily: font,
              fontSize: key === "story" || key === "window" || key === "view" ? "6.5cqw" : "4.2cqw",
              color: "#fff0d4",
              WebkitTextStroke: ".04cqw #302419",
              paintOrder: "stroke fill",
              textShadow: "0 .25cqw .1cqw #372716,0 .8cqw 1.5cqw #000",
              whiteSpace: "nowrap",
            }}
          >
            {word.text}
          </span>
        );
      })}
    </div>
  );
}

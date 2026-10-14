import RhythmicPortraitPlate from "./RhythmicPortraitPlate";
import { useEffect, useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { snapToStem, percussionPulses } from "./stemAnalysis";
import PhoneAppStage from "./PhoneAppStage";
import { wordTiming } from "./wordTiming";
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (v: number) => {
  const p = clamp(v);
  return p * p * (3 - 2 * p);
};
export function aiJourneyCuts(start: number, end: number, hash: string) {
  const enter = start + 0.8,
    leave = end - 2.4;
  return Array.from({ length: 8 }, (_, i) => snapToStem(enter + ((leave - enter) * i) / 8, hash));
}
export default function AiInfinityJourney({
  annotation,
  time,
  start,
  end,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  end: number;
  chorusEnd?: number;
}) {
  const cuts = useMemo(
    () => aiJourneyCuts(start, end, annotation.audioHash),
    [start, end, annotation.audioHash],
  );
  const marks = useMemo(
    () =>
      [
        "openai.svg",
        "claude-color.svg",
        "meta-color.svg",
        "gemini-color.svg",
        "mistral-color.svg",
        "qwen-color.svg",
        "deepseek-color.svg",
        "openai.svg",
        "claude-color.svg",
        "gemini-color.svg",
      ].map((file, i) => ({
        file,
        time: snapToStem(start + 7.2 + i * 0.68, annotation.audioHash),
        lane: i % 6,
        id: i,
      })),
    [start, annotation.audioHash],
  );
  const beats = useMemo(() => percussionPulses(annotation.audioHash), [annotation.audioHash]);
  useEffect(() => {
    for (const url of [
      "/scene-assets/web-room/ai-infinity-3x3-v36.png",
      "/scene-assets/web-room/cortex-angles-2x2-v1.png",
      "/scene-assets/web-room/ai-language-full-v36.png",
      "/scene-assets/web-room/ai-creations-full-v36.png",
      "/scene-assets/web-room/ai-models-full-v36.png",
    ]) {
      const image = new Image();
      image.src = url;
      if (typeof image.decode === "function") void image.decode().catch(() => {});
    }
  }, []);
  const leave = end - 2.4,
    returning = time >= leave;
  const index = Math.max(
    0,
    cuts.reduce((last, t, i) => (time >= t ? i : last), 0),
  );
  const mix = smooth((time - cuts[index]) / 0.65),
    worldFade = smooth((time - cuts[0]) / 0.65);
  const cells = [0, 1, 2, 3, 4, 5, 6, 8];
  const plate = (i: number, opacity: number) => {
    const full = (
      {
        3: "ai-language-full-v36.png",
        5: "ai-creations-full-v36.png",
        6: "ai-models-full-v36.png",
      } as Record<number, string>
    )[i];
    const cell = cells[i],
      age = Math.max(0, time - cuts[i]);
    return (
      <div
        key={i}
        data-ai-journey-image={cell}
        data-journey-onset={cuts[i]}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(/scene-assets/web-room/${full ?? "ai-infinity-3x3-v36.png"})`,
          backgroundSize: full ? "cover" : "300% 300%",
          backgroundPosition: full
            ? "50% 50%"
            : `${(cell % 3) * 50}% ${Math.floor(cell / 3) * 50}%`,
          transform: `scale(${Math.exp(age * 0.48)})`,
          transformOrigin: "50% 50%",
          opacity,
          willChange: "transform,opacity",
        }}
      >
        {i === 6 && (
          <div
            data-ai-personal-destination
            style={{
              position: "absolute",
              left: "41%",
              top: "36%",
              width: "18%",
              height: "17%",
              overflow: "hidden",
              boxShadow: "0 0 1cqw #f2d394",
            }}
          >
            <RhythmicPortraitPlate
              src="/scene-assets/web-room/cortex-angles-2x2-v1.png"
              time={time}
              hash={annotation.audioHash}
            />
          </div>
        )}
      </div>
    );
  };
  const words = useMemo(
    () =>
      wordTiming(annotation)
        .intervals.filter((w) =>
          annotation.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:7"),
        )
        .map((w) => ({ ...w, text: annotation.items.find((i) => i.id === w.id)!.text })),
    [annotation],
  );
  const closingIndex = words.findIndex((w) => /^leave\W*$/i.test(w.text));
  const closingWords = closingIndex < 0 ? [] : words.slice(closingIndex);
  const closingEnd = (closingWords.at(-1)?.end ?? 0) + 2;
  const holdClosing = closingWords.length > 0 && time >= closingWords[0].start && time < closingEnd;
  const voice = words.find((w) => time >= w.start && time < w.end);
  const year =
    time < start + 3.4
      ? 2015
      : time < start + 7.2
        ? 2017
        : time < start + 10
          ? 2022
          : time < leave - 1
            ? 2024
            : 2026;
  const returnP = smooth((time - leave) / 1.75),
    zoom = Math.exp(Math.log(3.8) * (1 - returnP));
  const lastBeat = beats.filter((p) => p.time <= time).at(-1),
    pulse = lastBeat ? Math.max(0, 1 - (time - lastBeat.time) / 0.22) * lastBeat.strength : 0;
  return (
    <div
      data-social-ai-bridge
      data-ai-infinity-journey
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#071323" }}
    >
      {worldFade < 1 && (
        <div
          data-phone-entry
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${Math.exp(Math.max(0, time - start) * 1.8)})`,
            transformOrigin: "49.2% 47.2%",
            opacity: 1 - worldFade,
            willChange: "transform,opacity",
          }}
        >
          <PhoneAppStage
            annotation={annotation}
            time={time}
            showWords={false}
            showEffects={false}
          />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: worldFade * (1 - smooth((time - leave) / 0.75)),
        }}
      >
        {index > 0 && plate(index - 1, 1)}
        {plate(index, index > 0 ? mix : 1)}
      </div>
      {/* A new spatial setting replaces the rejected room-with-labels bridge. */}
      {!returning &&
        worldFade > 0.1 &&
        marks
          .filter((m) => time >= m.time && time < Math.min(m.time + 3.1, leave))
          .map((m) => {
            const p = clamp((time - m.time) / 3.1),
              angle = ([-145, -35, 145, 35, -90, 90][m.lane] * Math.PI) / 180,
              r = 12 + 56 * p;
            return (
              <img
                key={m.id}
                data-ai-logo={m.file}
                data-logo-lane={m.lane}
                data-logo-onset={m.time}
                src={"/scene-assets/ai-logos/" + m.file}
                alt=""
                style={{
                  position: "absolute",
                  left: 50 + Math.cos(angle) * r + "%",
                  top: 50 + Math.sin(angle) * r + "%",
                  width: "7%",
                  aspectRatio: "1",
                  objectFit: "contain",
                  padding: ".45cqw",
                  background: "#f2e7d5",
                  borderRadius: "50%",
                  boxShadow: `0 0 ${0.8 + pulse * 0.4}cqw #91d8e788`,
                  opacity: Math.min(1, p / 0.1, (1 - p) / 0.2, (leave - time) / 0.4),
                  transform: `translate(-50%,-50%) scale(${0.55 + 1.35 * p}) rotate(${(m.lane % 2 ? 1 : -1) * p * 20}deg)`,
                  willChange: "transform,opacity",
                }}
              />
            );
          })}
      {!returning && !holdClosing && time >= start + 7.2 && (
        <div
          data-ai-language-metaphor
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: index === 7 ? "#193b50" : "#fff3dc",
            font: "700 4.5cqw Georgia",
            textShadow: index === 7 ? "none" : "0 .2cqw 1cqw #000",
            opacity: smooth((time - start - 7.2) / 0.6) * clamp((leave - time) / 0.5),
            textAlign: "center",
          }}
        >
          {time < start + 10 ? (
            "Text calculator"
          ) : (
            <>
              Words become
              <br />
              the interface
            </>
          )}
        </div>
      )}
      {!returning && (
        <div
          data-ai-year
          style={{
            position: "absolute",
            left: "6%",
            top: "7%",
            color: "#fff3dc",
            font: "700 4.5cqw Arial",
            textShadow: "0 .2cqw .6cqw #00101d",
          }}
        >
          {year}
          {year === 2017 && <div style={{ fontSize: "2.1cqw" }}>Transformer breakthrough</div>}
          {year === 2022 && <div style={{ fontSize: "2.1cqw" }}>ChatGPT released</div>}
        </div>
      )}
      {returning && (
        <div
          data-ai-workspace-return
          style={{ position: "absolute", inset: 0, opacity: smooth((time - leave) / 0.75) }}
        >
          <div
            data-ai-camera-view="0"
            style={{
              position: "absolute",
              inset: 0,

              transform: `scale(${zoom})`,
              transformOrigin: "75% 44%",
              willChange: "transform",
            }}
          >
            <RhythmicPortraitPlate
              src="/scene-assets/web-room/cortex-angles-2x2-v1.png"
              time={time}
              hash={annotation.audioHash}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "4%",
              top: "5%",
              opacity: smooth((time - leave - 1.2) / 0.4),
              font: "700 2.8cqw Arial",
              color: "#fff3dc",
              textShadow: "0 .15cqw .5cqw #000",
            }}
          >
            How I instruct
            <br />
            my agentic system
          </div>
        </div>
      )}
      {holdClosing && (
        <div
          data-bridge-chorus-phrase
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: "45%",
            textAlign: "center",
            font: "700 4.8cqw Arial",
            color: "#fff3dc",
            textShadow: "0 .25cqw .8cqw #000",
            lineHeight: 1.25,
            opacity: clamp((closingEnd - time) / 0.35),
          }}
        >
          {closingWords.map((w) => (
            <span
              key={w.id}
              data-held-chorus-word={w.id}
              style={{
                display: "inline-block",
                margin: "0 .14em",
                opacity: clamp((time - w.start) / 0.08),
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
      )}
      {!holdClosing && voice && (
        <span
          data-bridge-vocal-word={voice.id}
          style={{
            position: "absolute",
            left: "50%",
            top: "70%",
            transform: "translate(-50%,-50%)",
            font: "700 5cqw Arial",
            color: "#fff3dc",
            textShadow: "0 .25cqw .8cqw #000",
          }}
        >
          {voice.text}
        </span>
      )}
    </div>
  );
}

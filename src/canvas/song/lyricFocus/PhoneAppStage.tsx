import PhoneDataStory from "./PhoneDataStory";
import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { percussionPulses, snapToStem } from "./stemAnalysis";
import { phoneWordFlights } from "./phoneWordFlight";
import { phoneGesture } from "./phoneGesture";
export default function PhoneAppStage({
  annotation,
  time,
  artScale = 1,
  showWords = true,
  showEffects = true,
}: {
  annotation: Annotation;
  time: number;
  artScale?: number;
  showWords?: boolean;
  showEffects?: boolean;
}) {
  const words = useMemo(
    () =>
      wordTiming(annotation)
        .intervals.filter((w) =>
          annotation.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:6"),
        )
        .map((w) => ({
          ...w,
          text: annotation.items.find((i) => i.id === w.id)!.text,
          phrase: annotation.items.find((i) => i.id === w.id)!.phraseId,
        })),
    [annotation],
  );
  const open = words.find((w) => w.text.toLowerCase() === "open" && w.start > 80)?.start ?? 87.267;
  const cue = (text: string, fallback: number) =>
    words.find((w) => w.start >= open && w.text.toLowerCase().replace(/[^a-z]/g, "") === text)
      ?.start ?? fallback;
  const gesture = phoneGesture(
    time,
    ["app", "pause", "save", "mute", "choose"].map((action) => ({
      action,
      time: cue(action, 999),
    })),
  );
  const baseScenes = [
    { index: 0, time: cue("app", 87.878) },
    { index: 1, time: cue("friend", 88.878) },
    { index: 2, time: cue("shop", 91.001) },
    { index: 3, time: cue("garden", 91.821) },
    { index: 0, time: cue("save", 95.35) },
    { index: 3, time: cue("feed", 96.765) },
    { index: 3, time: cue("display", 98) },
    { index: 1, time: cue("choose", 100.78) },
  ];
  const appEnd = Math.max(open, ...words.map((w) => w.end));
  const rhythmicScreens = useMemo(() => {
    let last = -Infinity;
    return percussionPulses(annotation.audioHash)
      .filter((b) => {
        if (b.time < open || b.time >= appEnd || b.strength < 0.4 || b.time - last < 0.55)
          return false;
        last = b.time;
        return true;
      })
      .map((b, i) => ({ index: [0, 3, 1, 2][i % 4], time: b.time, source: b.id }));
  }, [annotation.audioHash, open, appEnd]);
  const scenes = [
    ...baseScenes.map((s) => ({ ...s, time: snapToStem(s.time, annotation.audioHash) })),
    ...rhythmicScreens,
  ]
    .sort((a, b) => a.time - b.time)
    .reduce<{ index: number; time: number }[]>((list, s) => {
      const previous = list.at(-1);
      if (previous && s.time - previous.time < 0.4) return list;
      list.push({ ...s, index: previous?.index === s.index ? (s.index + 1) % 4 : s.index });
      return list;
    }, []);
  const active = scenes.filter((s) => time >= s.time).at(-1),
    previous = active ? scenes[Math.max(0, scenes.indexOf(active) - 1)] : undefined;
  const plate = (index: number, opacity: number, layer: string, onset?: number) => (
    <div
      key={layer}
      data-phone-app-view={index}
      data-phone-screen-onset={onset}
      style={{
        position: "absolute",
        inset: 0,
        clipPath: "polygon(42% 13%,61% 17.5%,56.2% 79.5%,36.8% 74.5%)",
        opacity,
        background: "#101820",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/scene-assets/web-room/phone-apps-anonymous-2x2-v2.png)",
          backgroundSize: "202% 202%",
          backgroundPosition: `${(index % 2) * 100}% ${Math.floor(index / 2) * 100}%`,
          transform: "translateX(-2%) scale(1.25)",
          transformOrigin: "50% 46%",
        }}
      />
    </div>
  );
  const iconCues = useMemo(() => {
    let last = -Infinity;
    return percussionPulses(annotation.audioHash).filter((b) => {
      if (b.strength <= 0.65 || b.time - last < 0.45) return false;
      last = b.time;
      return true;
    });
  }, [annotation.audioHash]);
  const icons = iconCues.filter(
    (b) => b.time >= open && b.time < appEnd && time >= b.time && time < b.time + 1.6,
  );
  return (
    <div
      data-phone-app-stage
      data-phone-stage-time={time}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <div
        data-phone-art
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${artScale})`,
          transformOrigin: "49.2% 47.2%",
        }}
      >
        <img
          src="/scene-assets/web-room/phone-hand-detail-v1.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
        {previous && plate(previous.index, 1, "previous", previous.time)}
        {active &&
          plate(active.index, Math.min(1, (time - active.time) / 0.12), "current", active.time)}
        {showEffects && time >= cue("pause", 999) && time < cue("pause", 999) + 1.1 && (
          <svg
            data-pause-duration
            viewBox="0 0 32 32"
            style={{ position: "absolute", left: "56%", top: "67%", width: "3.2%", opacity: 0.7 }}
          >
            <circle cx="16" cy="16" r="12" fill="#14233ddd" stroke="#ddd7bb" />
            <circle
              cx="16"
              cy="16"
              r="10"
              fill="none"
              stroke="#eee0ae"
              strokeWidth="2"
              strokeDasharray={`${Math.min(1, (time - cue("pause", 999)) / 0.8) * 63} 63`}
              transform="rotate(-90 16 16)"
            />
            <path d="M12 11v10m7-10v10" stroke="white" strokeWidth="3" />
          </svg>
        )}
        {showEffects &&
          (["app", "pause", "save", "mute", "choose"] as const).map((action) => {
            const tap = cue(action, 999),
              age = time - tap;
            if (age < 0 || age > 0.8) return null;
            return (
              <div
                key={action}
                data-phone-action={action}
                style={{
                  position: "absolute",
                  left: action === "mute" ? "61%" : "50%",
                  top: ["app", "pause"].includes(action)
                    ? "43%"
                    : action === "mute"
                      ? "25%"
                      : "67%",
                  width: "7%",
                  aspectRatio: "1",
                  transform: `translate(-50%,-50%) scale(${0.6 + age})`,
                  border: ".2cqw solid #fff8",
                  borderRadius: "50%",
                  background: "#18264799",
                  color: "white",
                  fontSize: "2.4cqw",
                  display: "grid",
                  placeItems: "center",
                  opacity: Math.sin((Math.PI * age) / 0.8),
                }}
              >
                {action === "pause" ? "Ⅱ" : action === "save" ? "✓" : action === "mute" ? "×" : "↗"}
              </div>
            );
          })}
        {showEffects && (
          <PhoneDataStory
            time={time}
            beats={iconCues}
            cues={{
              pause: cue("pause", 999),
              save: cue("save", 999),
              clue: cue("clue", 999),
              feed: cue("feed", 999),
              choose: cue("choose", 999),
            }}
          />
        )}
        {showEffects && gesture && (
          <div
            data-phone-hand-action={gesture.action}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/scene-assets/web-room/phone-action-hands-v1.png)",
              backgroundSize: "200% 200%",
              backgroundPosition: `${(gesture.index % 2) * 100}% ${Math.floor(gesture.index / 2) * 100}%`,
              opacity: gesture.opacity,
              clipPath: gesture.index === 2 ? "inset(8% 0 0 0)" : undefined,
              transform: `translate(${[6.2, 7.1, 6.6][gesture.index] + gesture.approach * 3}%,${[15, 13.8, 10.1][gesture.index] + gesture.approach * 2}%)`,
              pointerEvents: "none",
            }}
          />
        )}
        {showEffects &&
          icons.map((b, i) => {
            const a = (time - b.time) / 1.6,
              seed = Number(b.id.split("-").at(-1)) || i,
              side = seed % 2 ? 1 : -1;
            return (
              <div
                key={b.id}
                data-phone-icon-onset={b.time}
                style={{
                  position: "absolute",
                  left: 50 + side * 43 * a + "%",
                  top: 50 + Math.sin(seed) * 32 * a + "%",
                  transform: `translate(-50%,-50%) rotate(${side * a * 18}deg) scale(${0.4 + a * 0.8})`,
                  opacity: Math.sin(Math.PI * a) * 0.55,
                  background: ["#ff4500", "#1877f2", "#e60023", "#27bd65"][seed % 4],
                  color: "white",
                  padding: ".3cqw .65cqw",
                  borderRadius: ".6cqw",
                  fontSize: "2cqw",
                }}
              >
                {["▶", "f", "♡", "◎"][seed % 4]}
              </div>
            );
          })}
      </div>
      {showWords &&
        phoneWordFlights(words, time).map((w) => (
          <span
            key={w.id}
            data-phone-word={w.id}
            data-phone-word-voice={w.voice}
            data-phone-word-onset={w.start}
            data-phone-word-held={w.reading && !w.voice}
            data-phone-word-visual-end={w.visualEnd}
            data-phone-word-path={w.lane}
            data-phone-word-x={w.x}
            style={{
              position: "absolute",
              left: w.x + "%",
              top: w.y + "%",
              transform: `translate(-50%,-50%) scale(${w.scale})`,
              opacity: w.opacity,
              fontFamily: "Georgia,serif",
              fontWeight: 700,
              fontSize: "clamp(14px,4cqw,48px)",
              color: "#fff3dc",
              WebkitTextStroke: ".075cqw #111b28",
              paintOrder: "stroke fill",
              textShadow: "0 .12cqw .3cqw #08101a,0 0 .8cqw #08101add",
              whiteSpace: "nowrap",
              willChange: "transform,opacity",
            }}
          >
            {w.text}
          </span>
        ))}
    </div>
  );
}

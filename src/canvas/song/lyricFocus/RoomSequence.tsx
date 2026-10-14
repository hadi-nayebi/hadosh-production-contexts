import type { Annotation } from "./audioAnnotation";
import RegisteredDevice from "./RegisteredDevice";
import YearCalendar from "./YearCalendar";
import RoomDoorTurn, { roomTurnPerformance } from "./RoomDoorTurn";
import { useMemo } from "react";
import { roomStreamPositions } from "./verseWordFlight";
import {
  roomDefaults,
  roomBounds,
  cueTime,
  roomArrival,
  roomEvents,
  roomWordCues,
  pulseAt,
  snap,
  type RoomDirection,
} from "./roomDirection";
import { clamp01, seedFor } from "./depthMotion";
const base = "/scene-assets/web-room/";
function tile(src: string, index: number, grid: number, opacity: number, transform?: string) {
  return (
    <div
      key={src + index}
      data-room-tile={src.split("/").at(-1) + ":" + index}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${src})`,
        backgroundSize: `${grid === 2 ? 203 : src.includes("door-camera") ? 303 : 300}% ${grid === 2 ? 203 : src.includes("door-camera") ? 303 : 300}%`,
        backgroundPosition: `${((index % grid) * 100) / (grid - 1)}% ${(Math.floor(index / grid) * 100) / (grid - 1)}%`,
        opacity,
        transform,
        transformOrigin: "70% 70%",
      }}
    />
  );
}
export default function RoomSequence({
  annotation,
  time,
  direction = roomDefaults,
  returning = false,
}: {
  annotation: Annotation;
  time: number;
  direction?: RoomDirection;
  returning?: boolean;
}) {
  const d = direction,
    p = d.placements,
    b = useMemo(() => roomBounds(annotation)!, [annotation]),
    events = useMemo(() => roomEvents(annotation, d), [annotation, d]),
    pulse = pulseAt(time) * d.bounce,
    progress = clamp01((time - b.start) / (b.end - b.start));
  const eras = events.filter((e) => e.kind === "era"),
    era = eras.filter((e) => e.time <= time).at(-1) ?? eras[0],
    devices = events.filter((e) => e.kind === "device"),
    device = devices.filter((e) => e.time <= time).at(-1) ?? devices[0];
  const eraIndex = era.index ?? 0,
    deviceIndex = device.index ?? 0,
    eraFade = eraIndex ? clamp01((time - era.time) / d.fade) : 1,
    deviceFade = deviceIndex ? clamp01((time - device.time) / Math.min(d.fade, 0.35)) : 1;
  const deviceEase = deviceFade * deviceFade * (3 - 2 * deviceFade);
  const laptopPose = deviceIndex === 8 ? deviceEase : 0;
  const turnStart = returning
    ? time + 10
    : [55, 58.8, 60].includes(d.turnStart)
      ? cueTime(annotation, "doorway", 60)
      : d.turnStart;
  const turnProgress = returning
    ? 0
    : clamp01((time - snap(turnStart)) / (d.turnEnd - snap(turnStart)));
  const turnFinish = Math.min(d.turnEnd, b.end - 0.55);
  const turn = roomTurnPerformance(time, turnStart, turnFinish);
  const doorFade = clamp01((turnProgress - 0.82) / 0.18);
  const overlays = 1;
  const angle = doorFade > 0 ? 7 : 0;

  const cues = useMemo(() => roomWordCues(annotation), [annotation]);
  const words = roomStreamPositions(cues, time, roomArrival(annotation)!.end).filter(
    (w) => w.visible,
  );
  return (
    <div
      data-testid="room-sequence"
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#171f2a" }}
    >
      <div
        data-room-camera={angle.toFixed(3)}
        style={{
          position: "absolute",
          inset: "-6%",
          opacity: returning ? 1 : 1 - turn.entrance,
          transform: `translate3d(${-d.pan * progress}%,0,0) scale(${1 + (d.zoom - 1) * progress})`,
          willChange: "transform",
          filter: !returning && turn.blur > 0 ? `blur(${turn.blur * 0.35}cqw)` : undefined,
          transformOrigin: "55% 50%",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {eraIndex > 0 && tile(base + "room-eras-2x2-v2.png", eraIndex - 1, 2, 1)}
          {tile(base + "room-eras-2x2-v2.png", eraIndex, 2, eraFade)}
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: overlays }}>
          <YearCalendar
            year={[1992, 1996, 2000, 2005][eraIndex]}
            previous={eraIndex > 0 ? [1992, 1996, 2000][eraIndex - 1] : undefined}
            age={time - era.time}
            x={p.calendar.x - 6 * p.calendar.scale}
            y={p.calendar.y - 9.5 * p.calendar.scale}
            width={12 * p.calendar.scale}
          />
          <img
            data-room-object="seated-registered"
            src={base + "body-registered-v3.png"}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
              zIndex: 2,
              opacity: 1 - laptopPose,
            }}
          />
          {deviceIndex === 8 && (
            <img
              data-room-object="laptop-pose"
              src={base + "body-laptop-registered-v1.png"}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "fill",
                zIndex: 2,
                opacity: laptopPose,
              }}
            />
          )}
          <div
            data-device-shadow
            style={{
              position: "absolute",
              left: p.device.x + 12 + "%",
              top: p.device.y + 11 + "%",
              width: 26 * p.device.scale + "%",
              height: "1.8%",
              transform: "translate(-50%,-40%)",
              borderRadius: "50%",
              background: "#180d09aa",
              filter: "blur(.3cqw)",
              zIndex: 1,
            }}
          />
          {deviceIndex > 0 && (
            <RegisteredDevice
              index={deviceIndex - 1}
              placement={p.device}
              pulse={Math.min(1, Math.max(0, pulse))}
              opacity={1 - deviceEase}
              scale={1 - 0.12 * deviceEase}
            />
          )}
          <RegisteredDevice
            index={deviceIndex}
            placement={p.device}
            pulse={Math.min(1, Math.max(0, pulse))}
            opacity={deviceEase}
            scale={0.88 + 0.12 * deviceEase}
          />
          {deviceIndex > 0 && deviceFade < 1 && (
            <div
              data-device-wormhole={device.id}
              style={{
                position: "absolute",
                left: p.device.x + 11 + "%",
                top: p.device.y - 17 + "%",
                width: "21%",
                height: "29%",
                transform: `translate(-50%,-50%) rotate(${deviceFade * 120}deg)`,
                zIndex: 4,
                opacity: Math.sin(Math.PI * deviceFade),
                pointerEvents: "none",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: i * 10 + "%",
                    border: ".18cqw solid #a9ddf6",
                    borderRadius: "50%",
                    boxShadow: "0 0 .8cqw #65bde999,inset 0 0 .8cqw #65bde977",
                    transform: `scale(${0.6 + 0.5 * deviceFade + i * 0.08}) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>
          )}
          <img
            data-room-object="registered-head"
            src={base + "head-registered-v3.png"}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
              zIndex: 3,
              transform: `rotate(${pulse * 8}deg)`,
              transformOrigin: "33% 42%",
              willChange: "transform",
            }}
          />
          {events
            .filter((e) => e.kind === "logo" && time >= e.time && time < e.time + 1.8)
            .map((e) => {
              const age = clamp01((time - e.time) / 1.8),
                s = seedFor(e.id),
                x = p.device.x + (s % 2 ? 1 : -1) * 18 * age,
                y = p.device.y - 12 - 27 * age;
              return (
                <div
                  key={e.id}
                  data-room-event={e.id}
                  style={{
                    position: "absolute",
                    left: x + "%",
                    top: y + "%",
                    zIndex: 5,
                    transform: `translate(-50%,-50%) rotate(${(s % 2 ? 1 : -1) * age * 18}deg) scale(${1 - age * 0.25})`,
                    opacity: 1 - clamp01((age - 0.75) / 0.25),
                    background: "#f3efe3",
                    color:
                      e.label === "Explorer"
                        ? "#1679bc"
                        : e.label === "Firefox"
                          ? "#dd7a19"
                          : "#265b69",
                    padding: ".65cqw 1cqw",
                    borderRadius: "1cqw",
                    boxShadow: "0 .45cqw 1cqw #0008",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "1.5cqw",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "2.5cqw", paddingRight: ".4cqw" }}>
                    {e.label === "Netscape"
                      ? "N"
                      : e.label === "Explorer"
                        ? "e"
                        : e.label === "Mozilla"
                          ? "🦖"
                          : "🦊"}
                  </span>
                  {e.label}
                </div>
              );
            })}
          {events
            .filter((e) => e.kind === "upgrade" && time >= e.time - 0.35 && time < e.time + 1.8)
            .map((e) => {
              const age = clamp01((time - e.time) / 1.8),
                s = seedFor(e.id),
                startX = 63 + (s % 12),
                startY = 77 + (s % 5),
                endX = p.device.x + 12,
                endY = p.device.y - 8;
              const x = startX + (endX - startX) * age,
                y = startY + (endY - startY) * age - Math.sin(Math.PI * age) * 15,
                scale = 1.15 - 0.8 * age;
              return (
                <div
                  key={e.id}
                  data-room-event={e.id}
                  data-computer-feed
                  style={{
                    position: "absolute",
                    left: x + "%",
                    top: y + "%",
                    zIndex: 6,
                    transform: `translate(-50%,-50%) rotate(${(s % 2 ? 1 : -1) * age * 16}deg) scale(${scale})`,
                    opacity: 1 - clamp01((age - 0.85) / 0.15),
                    width: "4.5cqw",
                    height: "4.5cqw",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: ".8cqw",
                    background: "linear-gradient(145deg,#fff7e5,#d7c5a6)",
                    border: ".1cqw solid #fff3d3",
                    boxShadow: ".18cqw .3cqw .05cqw #907858,0 .7cqw 1cqw #0005",
                    fontSize: "2.6cqw",
                    color: "#185979",
                    fontFamily: "Arial,sans-serif",
                  }}
                >
                  {e.label}
                </div>
              );
            })}
        </div>
      </div>
      {!returning && turn.entrance > 0 && (
        <RoomDoorTurn time={time} start={turnStart} end={turnFinish} chorusStart={b.end} />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "linear-gradient(#0003,transparent 40%,#0002)",
        }}
      />
      {words.map((w) => {
        const flight = w;
        return (
          <span
            key={w.id}
            data-room-word={w.id}
            data-word-lane={w.lane}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: `translate3d(${flight.x}cqw,${(flight.y * 9) / 16}cqw,0) translate(-50%,-50%) scale(${d.wordScale})`,
              fontFamily: '"Arial Rounded MT Bold",Arial,sans-serif',
              fontWeight: 600,
              letterSpacing: "-.02em",
              fontSize: /^doorway\W*$/i.test(w.text) ? "6cqw" : "3.1cqw",
              color: `rgb(${Math.round(220 + 35 * w.highlight)} ${Math.round(209 + 35 * w.highlight)} ${Math.round(190 + 32 * w.highlight)})`,
              textShadow: `.08cqw .1cqw 0 #baa17b,.17cqw .23cqw .03cqw #705c42,0 .5cqw .8cqw #000a,0 0 ${0.7 * w.highlight}cqw #ffe3a855`,
              whiteSpace: "nowrap",
              opacity: flight.opacity,
              willChange: "transform,opacity",
            }}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
}

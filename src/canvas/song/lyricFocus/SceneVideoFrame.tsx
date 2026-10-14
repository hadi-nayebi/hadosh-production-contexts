import EndCredits from "./EndCredits";
import { sceneLifetimes, SceneScope } from "./SceneLifetime";
import RoomSequence from "./RoomSequence";
import DoorwayChorus from "./DoorwayChorus";
import PhoneEraStage from "./PhoneEraStage";
import SocialAiBridge from "./SocialAiBridge";
import InstructionCortex from "./InstructionCortex";
import PersonalOwnershipStage from "./PersonalOwnershipStage";
import KitchenFinale from "./KitchenFinale";
import { useMemo } from "react";
import { roomBounds, roomArrival } from "./roomDirection";
import OpeningSequence from "./OpeningSequence";
import { openingBounds } from "./openingDirection";
import { CinematicInvitation } from "./CinematicInvitation";
import type { Annotation } from "./audioAnnotation";
import type { VisualWordTiming } from "./visualWordTiming";
import { WordVideoFrame } from "./WordVideoFrame";
import { wordTiming } from "./wordTiming";
import { sceneContainers, defaultLook, type ScenePlan } from "./sceneContainers";
import { sceneShots } from "./sceneShots";
export function SceneVideoFrame({
  annotation,
  time,
  visualTiming,
  plan,
}: {
  annotation: Annotation;
  time: number;
  visualTiming?: VisualWordTiming;
  plan: ScenePlan;
}) {
  const lifetimes = useMemo(() => sceneLifetimes(annotation), [annotation]);
  const scope = (id: string) => lifetimes.find((x) => x.id === id)!;
  const nodes = useMemo(() => sceneContainers(annotation), [annotation]),
    scene = nodes.find((n) => n.id === "invitation"),
    active = !!scene && time >= scene.start && time < scene.end;
  const opening = useMemo(() => openingBounds(annotation), [annotation]);
  const room = useMemo(() => roomBounds(annotation), [annotation]);
  const arrival = useMemo(() => roomArrival(annotation), [annotation]);
  const roomActive = room && arrival && time >= arrival.end && time < room.end;
  const openingActive = opening && time >= opening.start && time < (arrival?.end ?? opening.end);
  const handoff = room && arrival && time >= arrival.start && time < arrival.end;
  const blend = arrival
    ? Math.min(1, Math.max(0, (time - arrival.start) / (arrival.end - arrival.start)))
    : 0;
  const softBlend = blend * blend * (3 - 2 * blend);
  const chorusEnd = nodes.find((n) => n.id.endsWith(":section:4"))?.end ?? 75.7;
  const chorusActive = room && time >= room.end && time < chorusEnd;
  const nextVerseStart = nodes.find((n) => n.id.endsWith(":section:6"))?.start ?? 86.72;
  const appVerseEnd = nodes.find((n) => n.id.endsWith(":section:6"))?.end ?? 104.6;
  const returning = room && time >= chorusEnd && time < appVerseEnd;
  const socialChorusEnd = nodes.find((n) => n.id.endsWith(":section:7"))?.end ?? 110.66;
  const aiBridgeEnd = nodes.find((n) => n.id.endsWith(":section:8"))?.end ?? 122.66;
  const socialAiActive = room && time >= appVerseEnd && time < aiBridgeEnd;
  const cortexEnd = nodes.find((n) => n.id.endsWith(":section:11"))?.end ?? 146;
  const cortexActive = room && time >= aiBridgeEnd && time < cortexEnd;
  const ownershipEnd = nodes.find((n) => n.id.endsWith(":section:12"))?.end ?? cortexEnd;
  const ownershipActive = room && time >= cortexEnd && time < ownershipEnd;
  const kitchenActive = room && time >= ownershipEnd && time < annotation.duration;
  const words = useMemo(() => wordTiming(annotation).intervals, [annotation]);
  const shots = useMemo(() => sceneShots(annotation, plan), [annotation, plan]);
  const shotScheduleJson = useMemo(() => JSON.stringify(shots), [shots]);
  const shot = shots.find((s) => time >= s.start && time < s.end);
  const second = scene ? words.find((w) => w.id === scene.itemIds[1]) : null;
  const look = plan.looks.invitation || defaultLook;
  const elapsed = second ? time - second.start : -1;
  const progress = second
    ? Math.min(1, Math.max(0, elapsed / Math.min(0.42, second.end - second.start)))
    : 0;
  const ease = 1 - Math.pow(1 - progress, 3);
  const ink = look.style === "ink";
  const layers = nodes.filter((n) => time >= n.start && time < n.end && plan.looks[n.id]);
  return (
    <div
      data-testid="scene-video-frame"
      data-scene-lifetimes={JSON.stringify(lifetimes)}
      data-current-shot={shot?.id}
      data-shot-background={shot?.backgroundId}
      data-shot-start={shot?.start}
      data-shot-end={shot?.end}
      data-shot-schedule={shotScheduleJson}
      data-earth-effects-end={arrival?.start}
      data-room-arrival-end={arrival?.end}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        containerType: "inline-size",
        background: "#080b12",
      }}
    >
      <EndCredits annotation={annotation} time={time} />
      {layers.map((n) => (
        <div
          key={n.id}
          data-scene-look-owner={n.id}
          data-owner-start={n.start}
          data-owner-end={n.end}
          style={{
            position: "absolute",
            inset: 0,
            background: plan.looks[n.id].background || undefined,
            backgroundImage: plan.looks[n.id].image ? `url(${plan.looks[n.id].image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pointerEvents: "none",
          }}
        />
      ))}
      {!active &&
        !openingActive &&
        !roomActive &&
        !chorusActive &&
        !returning &&
        !socialAiActive &&
        !cortexActive &&
        !ownershipActive &&
        !kitchenActive && (
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <WordVideoFrame
              annotation={annotation}
              time={time}
              visualTiming={visualTiming}
              transparent
            />
          </div>
        )}
      {(openingActive || handoff) && (
        <SceneScope lifetime={scope("opening")} time={time}>
          <div
            data-earth-room-handoff={handoff ? blend.toFixed(3) : undefined}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              opacity: handoff ? 1 - softBlend : 1,
            }}
          >
            <OpeningSequence
              annotation={annotation}
              time={time}
              direction={plan.opening}
              effectsEnd={arrival?.start ?? opening?.end}
            />
          </div>
        </SceneScope>
      )}
      {(roomActive || handoff) && (
        <SceneScope lifetime={scope("room")} time={time}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: handoff ? softBlend : 1,
              transform: handoff
                ? `translate(${-28 * (1 - softBlend)}%,${7 * (1 - softBlend)}%) scale(${1 + 3 * (1 - softBlend)})`
                : undefined,
              transformOrigin: "78% 43%",
            }}
          >
            <RoomSequence annotation={annotation} time={time} direction={plan.room} />
          </div>
        </SceneScope>
      )}
      {(chorusActive || (returning && time < chorusEnd + 0.55)) && (
        <SceneScope lifetime={scope("infinity")} time={time}>
          <DoorwayChorus
            annotation={annotation}
            time={time}
            start={room!.end}
            end={chorusEnd}
            direction={plan.room}
          />
        </SceneScope>
      )}
      {returning && (
        <SceneScope lifetime={scope("phone")} time={time}>
          <div
            data-window-bedroom-return
            style={{
              position: "absolute",
              inset: 0,
              opacity: Math.min(1, (time - chorusEnd) / 0.55),
            }}
          >
            <PhoneEraStage annotation={annotation} time={time} direction={plan.phoneEra}>
              <RoomSequence annotation={annotation} time={time} direction={plan.room} returning />
            </PhoneEraStage>
          </div>
        </SceneScope>
      )}
      {socialAiActive && (
        <SceneScope lifetime={scope("social-ai")} time={time}>
          <SocialAiBridge
            annotation={annotation}
            time={time}
            start={appVerseEnd}
            chorusEnd={socialChorusEnd}
            end={aiBridgeEnd}
          />
        </SceneScope>
      )}
      {cortexActive && (
        <SceneScope lifetime={scope("cortex")} time={time}>
          <InstructionCortex annotation={annotation} time={time} />
        </SceneScope>
      )}
      {ownershipActive && (
        <SceneScope lifetime={scope("ownership")} time={time}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 1 - Math.min(1, Math.max(0, (time - ownershipEnd + 0.275) / 0.275)),
            }}
          >
            <PersonalOwnershipStage annotation={annotation} time={time} />
          </div>
        </SceneScope>
      )}
      {kitchenActive && (
        <SceneScope
          lifetime={scope(time < scope("outdoor").start ? "kitchen" : "outdoor")}
          time={time}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: Math.min(1, Math.max(0, (time - ownershipEnd) / 0.275)),
            }}
          >
            <KitchenFinale annotation={annotation} time={time} />
          </div>
        </SceneScope>
      )}
      {/* Hadi chose the book/camera invitation over the old dimensional words. */}
      {active && !openingActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            color: ink ? "#192e47" : "#edf4ff",
            background: ink ? "#e1e6ed" : undefined,
          }}
        >
          {!ink ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateY(-38%) scale(.55)",
                opacity: Math.min(1, Math.max(0, ((scene?.end ?? 3.31) - time) / 0.16)),
              }}
            >
              <CinematicInvitation progress={ease} showCloser={elapsed >= 0} wordsOnly />
            </div>
          ) : (
            <>
              <span
                data-scene-word="come"
                style={{
                  position: "absolute",
                  left: "16%",
                  top: "36%",
                  fontFamily: "Georgia,serif",
                  fontSize: "12cqw",
                }}
              >
                Come
              </span>
              {elapsed >= 0 && (
                <span
                  data-scene-word="closer"
                  style={{
                    position: "absolute",
                    left: "55%",
                    top: "38%",
                    fontFamily: "Georgia,serif",
                    fontSize: "10cqw",
                    transform: `scale(${0.65 + 0.57 * ease})`,
                    transformOrigin: "center center",
                  }}
                >
                  closer
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

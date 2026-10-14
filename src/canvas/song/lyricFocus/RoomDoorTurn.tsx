import DoorPortal from "./DoorPortal";
export function roomTurnPerformance(time: number, start: number, _end: number) {
  const entrance = time >= start ? 1 : 0;
  return {
    shot: 0,
    previous: 0,
    blend: entrance,
    canonical: entrance,
    entrance,
    blur: Math.max(0, 1 - Math.abs(time - start) / 0.18),
    pan: -2.5 * Math.max(0, Math.min(1, (time - start + 0.3) / 0.3)),
  };
}
export default function RoomDoorTurn({
  time,
  start,
  end,
  chorusStart,
}: {
  time: number;
  start: number;
  end: number;
  chorusStart: number;
}) {
  const p = roomTurnPerformance(time, start, end);
  return (
    <div
      data-room-door-turn
      data-turn-shot="open-door"
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <DoorPortal time={time} chorusStart={chorusStart} blur={p.blur * 0.35} />
    </div>
  );
}

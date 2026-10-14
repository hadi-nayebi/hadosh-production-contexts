export default function YearCalendar({
  year,
  previous,
  age = 99,
  x,
  y,
  width = 12,
}: {
  year: number;
  previous?: number;
  age?: number;
  x: number;
  y: number;
  width?: number;
}) {
  const p = Math.min(1, Math.max(0, age / 0.8)),
    flip = previous !== undefined && p < 1;
  const sheet = (value: number) => (
    <>
      <div style={{ height: "16%", background: "#946653", borderBottom: ".12cqw solid #754936" }} />
      <div
        style={{
          font: "800 3.1cqw Arial",
          lineHeight: 1.15,
          padding: ".45cqw 0",
          color: "#20313d",
        }}
      >
        {value}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gap: ".1cqw",
          padding: ".3cqw .5cqw",
          font: "500 .55cqw Arial",
          color: "#6c6457",
        }}
      >
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
    </>
  );
  const paper = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(100deg,#e3d4b9,#fff0d6 60%,#d6c5a7)",
    border: ".2cqw solid #7d6147",
    boxShadow: "0 .35cqw .6cqw #0007",
  } as const;
  return (
    <div
      data-year-calendar={year}
      style={{
        position: "absolute",
        left: x + "%",
        top: y + "%",
        width: width + "%",
        aspectRatio: ".8",
        textAlign: "center",
        perspective: "35cqw",
        zIndex: 1,
      }}
    >
      <div style={paper}>{sheet(year)}</div>
      {flip && (
        <div
          data-calendar-page-turn
          style={{
            ...paper,
            transform: `rotateX(${-175 * p}deg)`,
            transformOrigin: "50% 0%",
            backfaceVisibility: "hidden",
            opacity: 1 - p,
          }}
        >
          {sheet(previous!)}
        </div>
      )}
      {[22, 77].map((n) => (
        <div
          key={n}
          style={{
            position: "absolute",
            left: n + "%",
            top: "-3%",
            width: ".35cqw",
            height: "1.1cqw",
            borderRadius: ".2cqw",
            background: "#433b35",
            boxShadow: ".1cqw .1cqw .2cqw #0007",
          }}
        />
      ))}
    </div>
  );
}

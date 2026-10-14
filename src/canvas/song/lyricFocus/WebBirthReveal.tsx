const clamp = (v: number) => Math.max(0, Math.min(1, v));
export default function WebBirthReveal({
  elapsed,
  fade = 1,
  burstDelays = [0, 0.1, 0.23, 0.3],
}: {
  elapsed: number;
  fade?: number;
  burstDelays?: number[];
}) {
  if (elapsed < 0) return null;
  const enter = 1 - Math.pow(1 - clamp(elapsed / 0.1), 3);
  return (
    <div
      data-testid="web-birth-reveal"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: fade,
        background: "linear-gradient(#030816dd,transparent 65%)",
      }}
    >
      <svg
        viewBox="0 0 1000 562.5"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="birth-spark-glow">
            <feGaussianBlur stdDeviation="1.3" />
          </filter>
        </defs>
        {[
          { x: 170, y: 110, delay: burstDelays[0] ?? 0 },
          { x: 810, y: 145, delay: burstDelays[1] ?? 0.37 },
          { x: 280, y: 270, delay: burstDelays[2] ?? 0.75 },
          { x: 730, y: 290, delay: burstDelays[3] ?? 1.12 },
        ].map((burst, b) => {
          const age = Math.max(0, elapsed - burst.delay);
          if (elapsed < burst.delay) return null;
          const radius = 100 * (1 - Math.exp(-age * 3));
          const fade = clamp(1 - age / 0.95);
          return (
            <g key={b} opacity={fade}>
              {Array.from({ length: 22 }, (_, i) => {
                const angle = (i * Math.PI * 2) / 22,
                  rr = radius * (0.65 + (i % 4) * 0.12),
                  x = burst.x + Math.cos(angle) * rr,
                  y = burst.y + Math.sin(angle) * rr + age * age * 35;
                return (
                  <g key={i}>
                    <path
                      d={`M${burst.x + Math.cos(angle) * rr * 0.78} ${burst.y + Math.sin(angle) * rr * 0.78 + age * age * 35}L${x} ${y}`}
                      stroke={i % 3 === 0 ? "#fff7d1" : i % 3 === 1 ? "#ffcb65" : "#9adaff"}
                      strokeWidth="1.3"
                    />
                    <circle cx={x} cy={y} r="2" fill="#fff4ce" />
                    <circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#ffd578"
                      opacity=".45"
                      filter="url(#birth-spark-glow)"
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "50%",
          width: "85%",
          transform: `translateX(-50%) scale(${0.85 + 0.15 * enter})`,
          opacity: enter,
          textAlign: "center",
          color: "#fffdf1",
          fontFamily: "Georgia,serif",
          fontWeight: 700,
          lineHeight: 0.95,
          textShadow: "0 .25cqw .1cqw #221301,0 .4cqw 1cqw #000,0 0 2cqw #ffcd6480",
          WebkitTextStroke: ".03cqw #ffd67c",
        }}
      >
        <div style={{ fontSize: "7.2cqw" }}>The Web is born</div>
        <div
          style={{
            fontSize: "clamp(12px,2cqw,24px)",
            lineHeight: 1.3,
            fontFamily: "Arial,sans-serif",
            fontWeight: 500,
            marginTop: "1.5cqw",
            color: "#fff1bd",
            WebkitTextStroke: 0,
          }}
        >
          1989 · first proposal
        </div>
      </div>
    </div>
  );
}

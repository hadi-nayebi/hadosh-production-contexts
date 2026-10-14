import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
const ink = "#122a2d",
  paper = "#f0e9d5",
  mint = "#8ad9b9",
  gold = "#edbc69",
  coral = "#e78675";
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ease = (f: number, start: number, end: number) => interpolate(f, [start, end], [0, 1], clamp);
const pop = (f: number, delay = 0) =>
  spring({ frame: f - delay, fps: 30, config: { damping: 18, stiffness: 100 } });
function Chalk({ children }: { children: React.ReactNode }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="chalk">
          <feTurbulence baseFrequency="0.055" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.7" />
        </filter>
      </defs>
      {children}
    </svg>
  );
}
function Frame({
  name,
  accent = paper,
  children,
  style = {},
}: {
  name: string;
  accent?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: `3px solid ${accent}`,
        borderRadius: 15,
        background: ink,
        boxShadow: "8px 9px 0 #071c2070",
        overflow: "visible",
        ...style,
      }}
    >
      <div
        style={{
          height: 49,
          borderBottom: `2px solid ${accent}`,
          display: "flex",
          alignItems: "center",
          padding: "0 18px",
          gap: 9,
        }}
      >
        {[0, 1, 2].map((i) => (
          <i
            key={i}
            style={{ width: 7, height: 7, border: `1px solid ${accent}`, borderRadius: 10 }}
          />
        ))}
        <span style={{ fontSize: 18, marginLeft: 12, letterSpacing: 1, color: accent }}>
          {name}
        </span>
      </div>
      {children}
    </div>
  );
}
function WebPage({ accent = paper }: { accent?: string }) {
  return (
    <div style={{ padding: 30 }}>
      <div
        style={{ width: "66%", height: 13, background: accent, borderRadius: 2, opacity: 0.8 }}
      />
      <div style={{ width: "42%", height: 7, background: accent, marginTop: 14, opacity: 0.4 }} />
      <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 100,
              border: `2px solid ${accent}`,
              opacity: 0.5,
              borderRadius: 4,
              background: i === 0 ? `${accent}18` : "transparent",
            }}
          />
        ))}
      </div>
      <div style={{ height: 7, width: "86%", background: accent, opacity: 0.25, marginTop: 25 }} />
    </div>
  );
}
function Cursor({ x, y, click = false }: { x: number; y: number; click?: boolean }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, zIndex: 5 }}>
      {click && (
        <div
          style={{
            position: "absolute",
            left: -22,
            top: -22,
            width: 50,
            height: 50,
            border: `3px solid ${gold}`,
            borderRadius: 50,
          }}
        />
      )}
      <svg width="36" height="46" viewBox="0 0 36 46">
        <path d="M3 2 L29 25 L17 26 L12 39 Z" fill={paper} stroke={ink} strokeWidth="3" />
      </svg>
    </div>
  );
}
function Customize() {
  const f = useCurrentFrame();
  const mode = f < 24 ? 0 : f < 53 ? 1 : 2;
  const accent = mode === 2 ? mint : paper;
  const ext = pop(f, 2);
  const block = ease(f, 25, 33);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 86, top: 107, font: "49px Georgia,serif" }}>
        {f >= 185
          ? "More eyes. More hands."
          : f >= 101
            ? "Look beneath the surface."
            : ["Add a button.", "Block the tracking.", "Make it yours."][mode]}
      </div>
      <Frame
        name="Firefox"
        accent={accent}
        style={{ position: "absolute", left: 226, top: 207, width: 830, height: 350 }}
      >
        <div
          style={{
            position: "absolute",
            right: 24,
            top: 12,
            width: 26,
            height: 26,
            border: `2px solid ${mint}`,
            borderRadius: 4,
            background: mint,
            color: ink,
            fontSize: 22,
            textAlign: "center",
            lineHeight: "22px",
            transform: `translate(${(1 - ext) * 190}px,${(1 - ext) * 90}px) rotate(${(1 - ext) * 50}deg)`,
          }}
        >
          +
        </div>
        <WebPage accent={accent} />
        {f >= 101 && (
          <div
            style={{
              position: "absolute",
              left: 30,
              top: 92,
              width: 650,
              padding: 22,
              background: ink,
              border: `2px solid ${mint}`,
              fontFamily: "monospace",
              fontSize: 23,
              color: mint,
            }}
          >
            <div>&lt;page&gt;</div>
            <div style={{ paddingLeft: 30 }}>tools · styles · connections</div>
            <div>&lt;/page&gt;</div>
            {f >= 185 && (
              <div style={{ display: "flex", gap: 18, marginTop: 15 }}>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    style={{
                      border: `2px solid ${gold}`,
                      borderRadius: 30,
                      padding: "4px 12px",
                      transform: `scale(${pop(f, 185 + i * 9)})`,
                    }}
                  >
                    ✓
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        <div style={{ position: "absolute", right: 35, bottom: 32, display: "flex", gap: 9 }}>
          {[mint, gold, coral].map((c) => (
            <div
              key={c}
              style={{
                width: 19,
                height: 19,
                borderRadius: 20,
                background: c,
                outline: mode === 2 && c === mint ? `2px solid ${paper}` : undefined,
                outlineOffset: 5,
              }}
            />
          ))}
        </div>
      </Frame>
      {mode === 1 && (
        <>
          <div
            style={{
              position: "absolute",
              left: 1081,
              top: 340,
              width: 3,
              height: 105,
              background: mint,
              opacity: block,
            }}
          />
          {[0, 1, 2].map((i) => {
            const phase = ((f - 24 + i * 17) % 55) / 55;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 1200 - phase * 110,
                  top: 354 + i * 25,
                  width: 13,
                  height: 13,
                  background: coral,
                  borderRadius: 3,
                  opacity: phase > 0.8 ? 1 - (phase - 0.8) * 5 : 1,
                }}
              />
            );
          })}
          <div
            style={{
              position: "absolute",
              left: 1080,
              top: 450,
              fontSize: 18,
              color: mint,
              opacity: block,
            }}
          >
            Blocked
          </div>
        </>
      )}
      {mode === 0 && (
        <Cursor
          x={interpolate(f, [2, 14], [1100, 997], clamp)}
          y={interpolate(f, [2, 14], [350, 220], clamp)}
          click={f > 14 && f < 21}
        />
      )}{" "}
      {mode === 2 && (
        <Cursor
          x={interpolate(f, [53, 66], [1100, 937], clamp)}
          y={interpolate(f, [53, 66], [610, 505], clamp)}
          click={f > 66 && f < 73}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: 228,
          top: 590,
          color: mint,
          fontSize: 24,
          opacity: ease(f, 35, 48),
        }}
      >
        {
          [
            "Your tools, within reach.",
            "A choice with a visible result.",
            f >= 185
              ? "Inspect together. Improve together."
              : f >= 101
                ? "The pieces are open to inspection."
                : "The page changes at your touch.",
          ][mode]
        }
      </div>
    </AbsoluteFill>
  );
}
function Doorway() {
  const f = useCurrentFrame();
  const arrive = pop(f);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 200,
          width: 480,
          opacity: ease(f, 6, 25),
          transform: `translateY(${(1 - arrive) * 25}px)`,
        }}
      >
        <div style={{ font: "64px/1.13 Georgia,serif" }}>
          {f < 105 ? (
            <>
              The handle.
              <br />
              On our side.
            </>
          ) : (
            <>
              Who owns
              <br />
              your doorway?
            </>
          )}
        </div>
        <div style={{ fontSize: 28, color: mint, marginTop: 36, opacity: ease(f, 251, 261) }}>
          Let me look.
          <br />
          Let me change it.
        </div>
      </div>
      <Frame
        name="Firefox"
        accent={mint}
        style={{
          position: "absolute",
          left: 628,
          top: 166,
          width: 535,
          height: 365,
          transform: `perspective(1100px) rotateY(${interpolate(f, [0, 35], [0, -14], clamp)}deg)`,
          transformOrigin: "right center",
        }}
      >
        <WebPage accent={mint} />
        <div
          style={{
            position: "absolute",
            left: -28,
            top: 140,
            width: 30,
            height: 98,
            border: `6px solid ${gold}`,
            borderRadius: 17,
            boxShadow: "-6px 5px 0 #091b1d",
            opacity: ease(f, 18, 36),
          }}
        />
        <svg
          style={{ position: "absolute", left: -100, top: 190, opacity: ease(f, 45, 60) }}
          width="80"
          height="38"
        >
          <path d="M3 18 L68 18 M53 5 L68 18 L53 31" stroke={gold} fill="none" strokeWidth="3" />
        </svg>
        <span
          style={{
            position: "absolute",
            left: 15,
            bottom: -48,
            fontSize: 20,
            color: gold,
            opacity: ease(f, 45, 60),
          }}
        >
          The handle is on your side.
        </span>
      </Frame>
    </AbsoluteFill>
  );
}
export function BrowserDoorway() {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: ink, color: paper, fontFamily: "Arial, sans-serif", overflow: "hidden" }}
    >
      <Chalk>
        <></>
      </Chalk>
      <svg width="1280" height="720" style={{ position: "absolute", opacity: 0.11 }}>
        <defs>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" seed="9" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#grain)" opacity=".5" />
        {Array.from({ length: 19 }, (_, i) => (
          <path
            key={i}
            d={`M${i * 77 - 40} 720 Q${i * 66} 380 ${i * 77 + 40} 0`}
            stroke={mint}
            fill="none"
            strokeWidth=".5"
          />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          left: 83,
          top: 47,
          fontSize: 17,
          letterSpacing: 2,
          color: mint,
        }}
      >
        HADOSH ACADEMY
      </div>
      <AbsoluteFill style={{ filter: "url(#chalk)" }}>
        <Sequence from={0} durationInFrames={285}>
          <Customize />
        </Sequence>
        <Sequence from={285} durationInFrames={435}>
          <Doorway />
        </Sequence>
      </AbsoluteFill>
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 84,
          right: 84,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          color: "#b1c7bf",
        }}
      >
        <span>Browser chapter · motion study 01</span>
        <span>Draft / R7 L1 recording / 0:48.10–1:12.10</span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          width: `${(f / 720) * 100}%`,
          background: mint,
          opacity: 0.5,
        }}
      />
      <Audio src={staticFile("excerpt.wav")} volume={1} />
      <AbsoluteFill
        style={{
          background: ink,
          opacity: 1 - ease(f, 0, 12) + ease(f, 710, 719),
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
}

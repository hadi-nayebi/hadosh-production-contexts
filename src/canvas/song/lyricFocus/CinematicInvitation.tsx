/** Deterministic room and dimensional type: the audio clock drives every transform. */
export function CinematicInvitation({
  progress,
  showCloser,
  serif = true,
  wordsOnly = false,
}: {
  progress: number;
  showCloser: boolean;
  serif?: boolean;
  wordsOnly?: boolean;
}) {
  const scale = 0.55 + 0.93 * progress;
  const font = serif ? 'Georgia, "Times New Roman", serif' : '"Arial Narrow", Arial, sans-serif';
  function word(text: string, x: number, size: number, grow: number) {
    return (
      <g transform={`translate(${x} 575) scale(${grow})`}>
        <g
          aria-hidden="true"
          transform="translate(30 45) skewX(48) scale(1 .23)"
          opacity=".65"
          filter="url(#invitation-shadow)"
        >
          <text textAnchor="middle" fontFamily={font} fontSize={size} fill="#000">
            {text}
          </text>
        </g>
        {Array.from({ length: 14 }, (_, i) => (
          <text
            key={i}
            aria-hidden="true"
            textAnchor="middle"
            x={(14 - i) * 1.1}
            y={(14 - i) * 1.2}
            fontFamily={font}
            fontSize={size}
            letterSpacing="-5"
            fill={i < 7 ? "#191a1c" : "#444039"}
            stroke="#222321"
            strokeWidth="1"
          >
            {text}
          </text>
        ))}
        <text
          textAnchor="middle"
          fontFamily={font}
          fontSize={size}
          letterSpacing="-5"
          fill="url(#invitation-face)"
          stroke="#f5e4bd"
          strokeWidth=".7"
          paintOrder="stroke"
        >
          {text}
        </text>
      </g>
    );
  }
  return (
    <svg
      viewBox="0 0 1600 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={
        showCloser
          ? "Come closer: dimensional words in a softly lit room"
          : "Come: dimensional word in a softly lit room"
      }
    >
      <defs>
        <linearGradient id="invitation-wall" x2="0" y2="1">
          <stop stopColor="#0b1017" />
          <stop offset="1" stopColor="#232730" />
        </linearGradient>
        <linearGradient id="invitation-floor" x2="0" y2="1">
          <stop stopColor="#343239" />
          <stop offset="1" stopColor="#090c12" />
        </linearGradient>
        <linearGradient id="invitation-face" x1="0" y1="0" x2=".75" y2="1">
          <stop stopColor="#fff2d6" />
          <stop offset=".35" stopColor="#ebdfc7" />
          <stop offset=".7" stopColor="#c4b99f" />
          <stop offset="1" stopColor="#86867e" />
        </linearGradient>
        <radialGradient id="invitation-wall-light">
          <stop stopColor="#d5bf94" stopOpacity=".28" />
          <stop offset="1" stopColor="#d5bf94" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="invitation-pool">
          <stop stopColor="#dbccad" stopOpacity=".3" />
          <stop offset="1" stopColor="#d6c8a8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="invitation-vignette">
          <stop offset=".45" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".75" />
        </radialGradient>
        <filter id="invitation-shadow" x="-80%" y="-200%" width="260%" height="500%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="invitation-soft">
          <feGaussianBlur stdDeviation="34" />
        </filter>
      </defs>
      {!wordsOnly && (
        <>
          <path d="M0 0H1600V590L1070 620 0 585Z" fill="url(#invitation-wall)" />
          <path d="M0 585L1070 620 1600 590V900H0Z" fill="url(#invitation-floor)" />
          <path d="M1070 0V620L1600 590V0Z" fill="#070d16" opacity=".28" />
          <ellipse cx="510" cy="325" rx="620" ry="460" fill="url(#invitation-wall-light)" />
          <path
            d="M190 -100L1050 660 150 640Z"
            fill="#ecd5a8"
            opacity=".035"
            filter="url(#invitation-soft)"
          />
          <ellipse
            cx="760"
            cy="646"
            rx={620 + progress * 80}
            ry="150"
            fill="url(#invitation-pool)"
          />
          <path d="M0 585L1070 620 1600 590" fill="none" stroke="#b2b2ac" strokeOpacity=".065" />
        </>
      )}
      <g data-scene-word="come" style={{ left: "33%" }}>
        {word("Come", 480, 190, 1)}
      </g>
      {showCloser && (
        <g
          data-scene-word="closer"
          style={{
            left: "69%",
            transform: `scale(${scale})`,
            transformOrigin: "69% 64%",
            transformBox: "view-box",
          }}
        >
          {word("closer", 1100, 175, 1)}
        </g>
      )}
      {!wordsOnly && (
        <rect width="1600" height="900" fill="url(#invitation-vignette)" pointerEvents="none" />
      )}
    </svg>
  );
}

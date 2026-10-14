import SceneArtwork from "../liveStage/SceneArtwork";
import type { Scene } from "../liveStage/scene.mjs";
import type { Project } from "./project.mjs";
import { wordPose } from "./project.mjs";
// One deterministic scene for both the editor and Remotion; frame is always excerpt-relative.
export default function MotionStage({
  project,
  frame,
  assetBase,
}: {
  project: Project | Scene;
  frame: number;
  assetBase?: string;
}) {
  if ("objects" in project)
    return <SceneArtwork project={project} frame={frame} assetBase={assetBase} />;
  const onset = (text: string) =>
    project.words.find((w) => w.originalText.toLowerCase().replace(/[^a-z]/g, "") === text)
      ?.enterFrame ?? 720;
  const after = (text: string) => frame >= onset(text);
  const mint = "#8ad9b9",
    paper = "#f0e9d5",
    gold = "#edbc69",
    ink = "#122a2d";
  const door = after("doorway");
  const accent = after("make") ? mint : paper;
  const pulse = (text: string) => Math.max(0, 1 - (frame - onset(text)) / 5);
  return (
    <svg
      viewBox="0 0 1280 720"
      role="img"
      aria-label="Word motion composition"
      style={{ display: "block", width: "100%", height: "100%", background: ink }}
    >
      <rect width="1280" height="720" fill={ink} />
      <g stroke={mint} opacity=".09">
        {Array.from({ length: 18 }, (_, i) => (
          <path key={i} d={`M${i * 85} 720 L${i * 85 + 180} 0`} />
        ))}
      </g>
      <text x="64" y="47" fill={mint} fontSize="16" fontFamily="Arial" letterSpacing="3">
        HADOSH ACADEMY / WHO HOLDS THE KEYS?
      </text>
      <g transform={door ? "translate(280 307)" : "translate(215 307)"}>
        <rect width="850" height="300" rx="14" stroke={accent} strokeWidth="3" fill={ink} />
        <path d="M0 48 H850" stroke={accent} strokeWidth="2" />
        <text x="27" y="32" fontFamily="Arial" fontSize="20" fill={accent}>
          ◦ ◦ ◦ Firefox
        </text>
        {after("button") && (
          <g transform={`translate(790 10) scale(${1 + 0.14 * pulse("button")})`}>
            <rect width="28" height="28" rx="4" fill={mint} />
            <text x="6" y="22" fill={ink} fontSize="25">
              +
            </text>
          </g>
        )}
        <rect x="30" y="80" width="490" height="12" fill={accent} opacity=".6" />
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={30 + i * 255}
            y="120"
            width="235"
            height="115"
            rx="5"
            fill={accent}
            fillOpacity=".07"
            stroke={accent}
            strokeOpacity=".5"
          />
        ))}
        {after("look") && (
          <g>
            <rect x="30" y="73" width="710" height="180" fill={ink} stroke={mint} />
            <text x="52" y="113" fill={mint} fontFamily="monospace" fontSize="24">
              &lt;page&gt;
            </text>
            <text x="77" y="153" fill={mint} fontFamily="monospace" fontSize="24">
              tools · styles · connections
            </text>
            <text x="52" y="194" fill={mint} fontFamily="monospace" fontSize="24">
              &lt;/page&gt;
            </text>
            {after("eyes") &&
              [0, 1, 2, 3].map((i) => (
                <circle
                  key={i}
                  cx={580 + i * 40}
                  cy="215"
                  r="12"
                  fill={gold}
                  opacity={0.45 + i * 0.15}
                />
              ))}
          </g>
        )}
        {after("block") && !door && (
          <g>
            <path d="M875 90 V200" stroke={mint} strokeWidth="4" />
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x={891 + ((frame + i * 9) % 25) * 2}
                y={100 + i * 30}
                width="10"
                height="10"
                fill="#e78675"
              />
            ))}
            <text x="864" y="230" fill={mint} fontSize="16">
              Blocked
            </text>
          </g>
        )}
        {after("handle") && (
          <g>
            <rect
              x="-26"
              y="106"
              width="30"
              height="96"
              rx="15"
              fill={ink}
              stroke={gold}
              strokeWidth="6"
            />
            <path
              d="M-100 154 H-40 M-53 140 L-40 154 L-53 168"
              stroke={gold}
              fill="none"
              strokeWidth="3"
            />
          </g>
        )}
      </g>
      {project.words.map((w) => {
        const p = wordPose(w, frame);
        return p.visible ? (
          <text
            key={w.id}
            data-word-id={w.id}
            x={w.x}
            y={w.y + p.dy}
            textLength={w.width - 16}
            lengthAdjust="spacingAndGlyphs"
            fill={frame - w.enterFrame < 4 ? gold : paper}
            fontFamily="monospace"
            fontSize={w.fontSize}
            fontWeight="600"
          >
            {w.text}
          </text>
        ) : null;
      })}
      <text x="64" y="680" fill={mint} fontFamily="Arial" fontSize="15">
        R7 L1 · 00:48.10–01:12.10 · WORD STUDY / DRAFT
      </text>
      <text x="1080" y="680" fill={mint} fontFamily="Arial" fontSize="15">
        Revision {project.revision}
      </text>
    </svg>
  );
}

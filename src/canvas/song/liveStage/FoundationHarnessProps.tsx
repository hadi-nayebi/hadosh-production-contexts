import FoundationPlanReview from "./FoundationPlanReview";
import type { SceneObject } from "./scene.mjs";
import { harnessStateAt } from "./foundationHarnessState";
export default function FoundationHarnessProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  if (o.kind === "story-task-monitor" && o.suggestion === "plan-review-v19")
    return <FoundationPlanReview object={o} frame={frame} />;
  const s = harnessStateAt(frame),
    w = o.width,
    h = o.height;
  if (o.kind === "story-task-person")
    return (
      <svg width={w} height={h} viewBox="0 0 220 450" data-harness="person-proxy">
        <ellipse
          cx="104"
          cy="77"
          rx="42"
          ry="50"
          fill={o.suggestion === "back-v19" ? "#34352c" : "#b88d6e"}
        />
        <path d="M63 66Q53 3 110 12Q165 14 149 73L131 43L67 63" fill="#34352c" />
        <path
          d={
            ["foreground", "back-v19"].includes(o.suggestion)
              ? "M52 140Q105 108 159 144L205 450H12Z"
              : "M52 140Q105 108 159 144L184 291H36Z"
          }
          fill="#3d7887"
        />
        {!["foreground", "back-v19"].includes(o.suggestion) && (
          <path d="M50 285H164L154 450H110L100 330L86 450H40Z" fill="#283b3b" />
        )}
      </svg>
    );
  if (o.kind === "story-task-paper")
    return (
      <g data-harness={s.instructionSaved ? "retained-instruction" : "source-notes"}>
        <path d={`M8 9H${w}V${h}H8Z`} fill="#081e20" opacity=".25" />
        <rect width={w - 9} height={h - 9} rx="3" fill="#dfd4ac" stroke="#756b52" strokeWidth="3" />
        <path d={`M${w * 0.12} 12V${h - 20}`} stroke="#ad7467" strokeWidth="2" />
        <text x={w * 0.18} y={h * 0.2} fontFamily="monospace" fontSize={h * 0.09} fill="#314d47">
          {o.suggestion === "instruction" ? "writing.txt" : "workshop notes"}
        </text>
        {(o.suggestion === "instruction"
          ? ["Clear words.", "Skip the pitch.", s.instructionEdited ? "Keep it useful." : ""]
          : ["Make a workshop.", "Time + place", "What we will learn"]
        ).map((t, i) => (
          <text key={i} x={w * 0.18} y={h * (0.39 + i * 0.18)} fontSize={h * 0.085} fill="#314d47">
            {t}
          </text>
        ))}
      </g>
    );
  if (o.kind === "story-task-monitor") {
    const mode = ["model-swap", "disconnect", "disconnected"].includes(o.suggestion)
      ? "rules"
      : o.suggestion;
    const displayedModel =
      o.suggestion === "disconnected" ||
      (o.suggestion === "disconnect" && frame >= (o.animation?.endFrame ?? o.exitFrame))
        ? "disconnected"
        : o.suggestion === "disconnect"
          ? "C"
          : o.suggestion === "model-swap"
            ? frame >= (o.animation?.endFrame ?? o.exitFrame)
              ? "C"
              : "B"
            : s.model;
    const text =
      mode === "calendar"
        ? [
            "Calendar source",
            "Time + place",
            s.checked ? "Date checked · link opens" : "Check before publish",
          ]
        : mode === "rules"
          ? [
              "Harness / tool access",
              s.scopeChosen ? "Draft: allowed" : "Draft: awaiting choice",
              s.reachLimited ? "Publish: ask every time" : "Publish: unapproved",
              `Model ${displayedModel}`,
              s.pending
                ? "Request waiting for you"
                : s.confirmed
                  ? "Change confirmed"
                  : "Your work stays here",
            ]
          : mode === "instruction"
            ? [
                "writing.txt",
                "Clear words. Skip the pitch.",
                s.instructionEdited ? "Keep it useful." : "Saved for the next task",
                s.instructionSaved ? "Stored in your workspace" : "Not saved yet",
              ]
            : [
                "Workshop page",
                s.finalEdit
                  ? "What you will learn"
                  : s.corrected
                    ? "Learn, practice, ask questions"
                    : s.draft
                      ? "The ultimate workshop!"
                      : s.request
                        ? "Time + place received"
                        : "New task",
                s.notesAttached ? "Using your workshop notes" : "Waiting for your notes",
                s.published
                  ? "Page online"
                  : s.checked
                    ? "Checked · awaiting your approval"
                    : "Draft · not online",
              ];
    return (
      <g data-harness="physical-monitor" data-task-state={JSON.stringify(s)}>
        <path
          d={`M${w * 0.43} ${h * 0.78}H${w * 0.57}L${w * 0.64} ${h * 0.94}H${w * 0.36}Z`}
          fill="#3e5653"
        />
        <rect x={w * 0.25} y={h * 0.92} width={w * 0.5} height={h * 0.06} rx="8" fill="#223d3d" />
        <rect width={w} height={h * 0.8} rx="18" fill="#233e40" stroke="#8c9e85" strokeWidth="7" />
        <rect x={w * 0.025} y={h * 0.035} width={w * 0.95} height={h * 0.71} fill="#e2dab7" />
        <rect x={w * 0.025} y={h * 0.035} width={w * 0.95} height={h * 0.09} fill="#96afa0" />
        <text x={w * 0.065} y={h * 0.1} fontFamily="monospace" fontSize={h * 0.04} fill="#244440">
          {s.published && mode === "page"
            ? "local workshop / published"
            : "owned workspace / " + mode}
        </text>
        {mode === "page" ? (
          <g data-harness="editable-workshop-page">
            <rect
              x={w * 0.06}
              y={h * 0.17}
              width={w * 0.87}
              height={h * 0.39}
              fill="#f1e9c9"
              stroke="#abb89b"
            />
            <path
              d={`M${w * 0.66} ${h * 0.53}V${h * 0.26}M${w * 0.66} ${h * 0.4}Q${w * 0.51} ${h * 0.24} ${w * 0.61} ${h * 0.24}Q${w * 0.73} ${h * 0.28} ${w * 0.66} ${h * 0.4}M${w * 0.66} ${h * 0.35}Q${w * 0.8} ${h * 0.17} ${w * 0.81} ${h * 0.28}Q${w * 0.8} ${h * 0.41} ${w * 0.66} ${h * 0.35}`}
              stroke="#487461"
              strokeWidth="7"
              fill="#9cae73"
            />
            <text x={w * 0.085} y={h * 0.245} fontSize={h * 0.051} fill="#244440">
              Workshop
            </text>
            <rect
              x={w * 0.08}
              y={h * 0.28}
              width={w * 0.48}
              height={h * 0.075}
              fill={!s.corrected && s.draft ? "#e7b791" : "#d3dfb9"}
            />
            <text x={w * 0.09} y={h * 0.332} fontSize={h * 0.038} fill="#244440">
              {s.finalEdit
                ? "What you will learn"
                : s.corrected
                  ? "Learn, practice, ask questions"
                  : s.draft
                    ? "The ultimate workshop!"
                    : "Your workshop draft"}
            </text>
            <text x={w * 0.09} y={h * 0.41} fontSize={h * 0.036} fill="#244440">
              {s.request ? "Time · Place" : "Add time and place"}
            </text>
            <text x={w * 0.09} y={h * 0.49} fontSize={h * 0.032} fill="#244440">
              {s.notesAttached ? "From your source notes" : ""}
            </text>
            <text x={w * 0.065} y={h * 0.64} fontSize={h * 0.032} fill="#244440">
              {s.published ? "● Online" : s.checked ? "✓ Checked" : "Draft"}
            </text>
          </g>
        ) : mode === "calendar" ? (
          <g data-harness="calendar-check">
            <rect
              x={w * 0.07}
              y={h * 0.18}
              width={w * 0.44}
              height={h * 0.4}
              fill="#f1e9c9"
              stroke="#6f8a77"
            />
            {Array.from({ length: 4 }, (_, r) =>
              Array.from({ length: 7 }, (_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={w * (0.085 + c * 0.06)}
                  y={h * (0.2 + r * 0.085)}
                  width={w * 0.05}
                  height={h * 0.067}
                  fill={s.checked && r === 2 && c === 3 ? "#52866c" : "#d4cfab"}
                />
              )),
            )}
            <text x={w * 0.55} y={h * 0.29} fontSize={h * 0.048} fill="#244440">
              Workshop
            </text>
            <path d={`M${w * 0.57} ${h * 0.36}H${w * 0.83}`} stroke="#347b79" strokeWidth="3" />
            <text x={w * 0.56} y={h * 0.45} fontSize={h * 0.036} fill="#244440">
              {s.checked ? "✓ Link opens" : "Open destination"}
            </text>
          </g>
        ) : (
          text.map((t, i) => (
            <text
              key={i}
              x={w * 0.065}
              y={h * (0.23 + i * 0.095)}
              fontSize={h * (i === 0 ? 0.057 : 0.042)}
              fontFamily={i === 0 ? "serif" : "sans-serif"}
              fill="#244440"
            >
              {t}
            </text>
          ))
        )}
        <rect
          x={w * 0.73}
          y={h * 0.63}
          width={w * 0.2}
          height={h * 0.08}
          rx="5"
          fill={s.confirmed ? "#3f7862" : "#b07746"}
        />
        <text x={w * 0.75} y={h * 0.685} fontSize={h * 0.035} fill="#fff3ce">
          {s.confirmed ? "Saved" : mode === "rules" ? "Choose" : s.published ? "Edit" : "Approve"}
        </text>
      </g>
    );
  }
  if (o.kind === "story-task-keyboard")
    return (
      <g data-harness="keyboard">
        <path
          d={`M${w * 0.05} 0H${w * 0.95}L${w} ${h}H0Z`}
          fill="#b7b99b"
          stroke="#3c5350"
          strokeWidth="4"
        />
        {Array.from({ length: 3 }, (_, r) =>
          Array.from({ length: 10 }, (_, c) => (
            <rect
              key={`${r}-${c}`}
              x={w * (0.07 + c * 0.086)}
              y={h * (0.1 + r * 0.25)}
              width={w * 0.067}
              height={h * 0.17}
              rx="2"
              fill="#526b60"
            />
          )),
        )}
      </g>
    );
  return null;
}

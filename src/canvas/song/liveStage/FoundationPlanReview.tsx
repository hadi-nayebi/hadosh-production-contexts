import type { SceneObject } from "./scene.mjs";
import { harnessEvents } from "./foundationHarnessState";

// Version-scoped proposal: a preview is not an applied or published change.
export function planReviewState(frame: number) {
  return {
    scopeChosen: frame >= harnessEvents["harness-16"],
    previewEdited: frame >= harnessEvents["harness-17"],
    applied: frame >= harnessEvents["harness-18"],
  };
}

export default function FoundationPlanReview({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const s = planReviewState(frame);
  return (
    <svg
      width={o.width}
      height={o.height}
      viewBox="0 0 1000 570"
      data-plan-state={JSON.stringify(s)}
    >
      <path d="M440 460H560L585 535H415Z" fill="#3e5653" />
      <rect x="340" y="530" width="320" height="25" rx="9" fill="#223d3d" />
      <rect
        x="4"
        y="4"
        width="992"
        height="462"
        rx="20"
        fill="#233e40"
        stroke="#8c9e85"
        strokeWidth="7"
      />
      <rect x="25" y="25" width="950" height="415" fill="#eee5ca" />
      <text x="50" y="65" fontSize="25" fill="#244440">
        Workshop page · {s.applied ? "saved locally" : "proposed change"}
      </text>
      <path d="M50 82H950" stroke="#859b89" strokeWidth="2" />
      <g fontFamily="sans-serif" fill="#244440">
        <text x="55" y="123" fontSize="21">
          {s.applied ? "SAVED PAGE" : "CURRENT PAGE"}
        </text>
        <rect
          x="50"
          y="140"
          width="420"
          height="195"
          fill="#fff8e7"
          stroke="#859b89"
          strokeWidth="2"
        />
        <text x="72" y="178" fontSize="26">
          Workshop
        </text>
        <text x="72" y="223" fontSize="22">
          {s.applied ? "What you will learn" : "Learn, practice, ask questions"}
        </text>
        <text x="72" y="271" fontSize="20">
          Time + place · unchanged
        </text>
        <path d="M75 293H400M75 312H335" stroke="#a5b6a0" strokeWidth="6" />
        <text x="510" y="123" fontSize="21">
          {s.previewEdited ? "YOUR EDIT" : "PLAN / PREVIEW"}
        </text>
        <text x="510" y="163" fontSize="23">
          1. Open the saved page
        </text>
        <text x="510" y="204" fontSize="23">
          2. Replace its heading
        </text>
        <rect x="505" y="220" width="442" height="58" fill="#d5e2bf" />
        <text x="520" y="257" fontSize="26">
          {s.previewEdited ? "What you will learn" : "What you can learn"}
        </text>
        <text x="510" y="315" fontSize="23">
          3. Save a local draft
        </text>
        <text x="55" y="376" fontSize="23">
          {s.scopeChosen ? "✓ Local draft only" : "Choose: local draft only"}
        </text>
        <text x="55" y="413" fontSize="22">
          Publishing is not allowed by this choice.
        </text>
      </g>
      <rect
        x="708"
        y="352"
        width="235"
        height="67"
        rx="8"
        fill={s.applied ? "#3f7862" : "#80562e"}
      />
      <text x="728" y="394" fontSize="24" fill="#fff7df">
        {s.applied ? "Draft saved" : "Confirm save"}
      </text>
    </svg>
  );
}

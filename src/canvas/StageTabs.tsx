import { useRef, type KeyboardEvent } from "react";

export type StageId = "analysis" | "identity" | "gaps" | "assets" | "assembly" | "playback";

export const stages: Array<{
  id: StageId;
  number: string;
  label: string;
  short: string;
}> = [
  { id: "analysis", number: "01", label: "Source analysis", short: "Source" },
  {
    id: "identity",
    number: "02",
    label: "Component identity",
    short: "Identity",
  },
  { id: "gaps", number: "03", label: "Gap expansion", short: "Gaps" },
  { id: "assets", number: "04", label: "Asset development", short: "Assets" },
  { id: "assembly", number: "05", label: "Scene assembly", short: "Assembly" },
  { id: "playback", number: "06", label: "Playback", short: "Playback" },
];

export function StageTabs({
  active,
  onChange,
}: {
  active: StageId;
  onChange: (stage: StageId) => void;
}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const moveFocus = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowLeft") next = (index + stages.length - 1) % stages.length;
    else if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    refs.current[next]?.focus();
  };
  return (
    <nav className="canvas-stage-tabs" aria-label="Production stages">
      <div role="tablist" aria-label="Production stages">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            ref={(element) => {
              refs.current[index] = element;
            }}
            id={`canvas-stage-tab-${stage.id}`}
            role="tab"
            aria-selected={active === stage.id}
            aria-controls={`canvas-stage-panel-${stage.id}`}
            tabIndex={active === stage.id ? 0 : -1}
            className={active === stage.id ? "active" : ""}
            onKeyDown={(event) => moveFocus(event, index)}
            onClick={() => onChange(stage.id)}
          >
            <small>{stage.number}</small>
            <span>{stage.short}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

const stageCopy: Record<
  Exclude<StageId, "analysis">,
  {
    title: string;
    description: string;
    input: string;
    control: string;
    output: string;
  }
> = {
  identity: {
    title: "Component identity",
    description:
      "Label each approved source component as dialogue, scene description, character description, narration, sound, production note or discard. Classification starts the correct downstream pipeline without changing the source evidence.",
    input: "Reviewed transcript and audio components",
    control: "Change labels, speakers and component boundaries",
    output: "Typed production components with source provenance",
  },
  gaps: {
    title: "Gap expansion",
    description:
      "Compare source components with what a complete visual scene requires. The agent proposes missing locations, poses, transitions and connective details while separating source evidence, inference, agent expansion and human decisions.",
    input: "Typed source components and required scene fields",
    control: "Accept, reject, edit or add creative expansions",
    output: "Complete scene specifications with property-level provenance",
  },
  assets: {
    title: "Asset development",
    description:
      "Turn approved character and scene descriptions into reusable visual assets: canonical character references, pose sheets, transparent cutouts, backgrounds, props and effects.",
    input: "Approved character, scene and visual specifications",
    control: "Compare variations, reroll one property and lock canonical assets",
    output: "Versioned asset libraries ready for browser assembly",
  },
  assembly: {
    title: "Scene assembly",
    description:
      "Place characters, backgrounds, balloons and props on the browser stage. Drag, scale, layer and time each element while the original audio remains the performance clock.",
    input: "Approved clips, assets and scene specifications",
    control: "Move, resize, reorder and retime individual elements",
    output: "Editable scene timelines and responsive layouts",
  },
  playback: {
    title: "Playback",
    description:
      "Perform the illustrated episode directly in the browser by swapping poses, showing balloons, moving layered elements and playing the approved source audio. No generated video is required.",
    input: "Scene timelines and optimized web assets",
    control: "Replay, inspect and return to any production stage",
    output: "A browser-native illustrated episode",
  },
};

export function StagePlaceholder({ stage }: { stage: Exclude<StageId, "analysis"> }) {
  const copy = stageCopy[stage];
  const metadata = stages.find((item) => item.id === stage)!;
  return (
    <section
      className="canvas-stage-placeholder"
      id={`canvas-stage-panel-${stage}`}
      role="tabpanel"
      aria-labelledby={`canvas-stage-tab-${stage}`}
    >
      <p className="eyebrow">Stage {metadata.number} · mapped, not implemented</p>
      <h1>{copy.title}</h1>
      <p className="canvas-stage-lead">{copy.description}</p>
      <div className="canvas-stage-contract">
        <article>
          <small>Input</small>
          <strong>{copy.input}</strong>
        </article>
        <article>
          <small>Human control</small>
          <strong>{copy.control}</strong>
        </article>
        <article>
          <small>Output</small>
          <strong>{copy.output}</strong>
        </article>
      </div>
      <p className="canvas-stage-note">
        This tab is intentionally visible now so Stage 1 data is shaped for the complete production
        pipeline instead of becoming a disposable transcript tool.
      </p>
    </section>
  );
}

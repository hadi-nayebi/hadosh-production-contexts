import RoomControls from "./RoomControls";
import PhoneEraControls from "./PhoneEraControls";
import OpeningControls from "./OpeningControls";
import { openingBounds } from "./openingDirection";
import visualPlans from "./visualPlans.json";
import { useEffect, useRef, useState } from "react";
import type { Annotation } from "./audioAnnotation";
import { readLargeCheckpoint, updateLargeCheckpoint } from "../liveStage/largeCheckpoint";
import {
  defaultLook,
  newScenePlan,
  parseScenePlan,
  sceneContainers,
  sceneSource,
  type ScenePlan,
} from "./sceneContainers";
import "./scene-creation.css";
export default function SceneEditor({
  annotation,
  practice,
  plan,
  onPlan,
  onSeek,
  onDirty,
  labels,
}: {
  annotation: Annotation;
  practice: boolean;
  plan: ScenePlan;
  onPlan: (p: ScenePlan) => void;
  onSeek: (t: number) => void;
  onDirty?: (dirty: boolean) => void;
  labels: Record<string, string>;
}) {
  const [selected, setSelected] = useState("invitation"),
    [message, setMessage] = useState("Loading scene draft…"),
    [ready, setReady] = useState(false);
  const [dirty, setDirty] = useState(false);
  const snapshot = useRef<string | null>(null);
  const key = `scene-plan:${practice ? "practice" : "real"}:${sceneSource(annotation)}`;
  const nodes = sceneContainers(annotation, labels),
    node = nodes.find((n) => n.id === selected) || nodes[0],
    look = plan.looks[node.id] || { ...defaultLook, description: "", background: "" };
  useEffect(() => {
    let active = true;
    setReady(false);
    readLargeCheckpoint(key)
      .then((raw) => {
        if (!active) return;
        const p = raw ? parseScenePlan(raw, annotation) : newScenePlan(annotation);
        snapshot.current = raw;
        onPlan(p);
        setReady(true);
        setMessage(raw ? "Scene draft loaded." : "New scene experiment. Save to keep it.");
      })
      .catch((e) => {
        if (active) setMessage(String(e));
      });
    return () => {
      active = false;
    };
  }, [key]);
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  function update(patch: Partial<typeof look>) {
    onPlan({ ...plan, looks: { ...plan.looks, [node.id]: { ...look, ...patch } } });
    setDirty(true);
    onDirty?.(true);
    setMessage("Unsaved scene changes");
  }
  async function save() {
    try {
      const next = JSON.stringify(plan);
      await updateLargeCheckpoint(key, (raw) => {
        if (raw !== snapshot.current)
          throw Error(
            "Scene changed in another tab. Your draft remains here; export before reloading.",
          );
        return next;
      });
      snapshot.current = next;
      setDirty(false);
      onDirty?.(false);
      setMessage("Scene saved. Audio anchors unchanged.");
    } catch (e) {
      setMessage(String(e));
    }
  }
  return (
    <section className="scene-editor" aria-label="Scene creation">
      <div className="scene-editor-heading">
        <div>
          <h1>Scene creation</h1>
          <p>One recording. Fill its containers.</p>
        </div>
        <button disabled={!ready} onClick={() => void save()}>
          Save scene
        </button>
      </div>
      <div className="scene-editor-columns">
        <nav aria-label="Video containers">
          <label>
            Container
            <select
              aria-label="Scene container"
              value={node.id}
              onChange={(e) => {
                setSelected(e.target.value);
                const n = nodes.find((x) => x.id === e.target.value);
                if (n) onSeek(n.start);
              }}
            >
              {nodes.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.kind === "video" ? "" : n.kind === "scene" ? "↳ ↳ " : "↳ "}
                  {n.label} · {n.start.toFixed(2)}–{n.end.toFixed(2)}s
                </option>
              ))}
            </select>
          </label>
          <p>
            {node.kind === "video"
              ? "A visual here lasts the full song."
              : `A visual here lasts ${(node.end - node.start).toFixed(2)} seconds.`}
          </p>
          <button
            onClick={() => {
              setSelected("invitation");
              onSeek(nodes.find((n) => n.id === "invitation")?.start || 0);
            }}
          >
            Show “Come closer”
          </button>
        </nav>
        <fieldset disabled={!ready}>
          <label>
            Scene description
            <textarea
              aria-label="Scene description"
              value={look.description}
              onChange={(e) => update({ description: e.target.value })}
            />
          </label>
          <label>
            Word treatment
            <select
              aria-label="Word treatment"
              value={look.style}
              onChange={(e) => update({ style: e.target.value as typeof look.style })}
            >
              <option value="light">Dim room · serif</option>
              <option value="sculpture">Sculpted serif</option>
              <option value="ink">Ink on paper</option>
            </select>
          </label>
          <div className="scene-editor-tools">
            <label>
              Container background
              <input
                aria-label="Container background"
                type="color"
                value={look.background || "#080b12"}
                onChange={(e) => update({ background: e.target.value })}
              />
            </label>
            <button onClick={() => update({ background: "", image: undefined })}>
              Clear backdrop
            </button>
            <label>
              Place image
              <input
                aria-label="Place image in container"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  if (f.size > 5 * 1024 * 1024) {
                    setMessage("Choose an image below 5 MB.");
                    return;
                  }
                  const image = await new Promise<string>((res, rej) => {
                    const r = new FileReader();
                    r.onload = () => res(String(r.result));
                    r.onerror = rej;
                    r.readAsDataURL(f);
                  });
                  update({ image });
                }}
              />
            </label>
          </div>
        </fieldset>
      </div>
      {openingBounds(annotation) && (
        <OpeningControls
          direction={plan.opening}
          onSeek={onSeek}
          onChange={(opening) => {
            onPlan({ ...plan, opening });
            setDirty(true);
            onDirty?.(true);
            setMessage("Unsaved scene changes");
          }}
        />
      )}
      <RoomControls
        annotation={annotation}
        direction={plan.room}
        onSeek={onSeek}
        onChange={(room) => {
          onPlan({ ...plan, room });
          setDirty(true);
          onDirty?.(true);
          setMessage("Unsaved scene changes");
        }}
      />
      <PhoneEraControls direction={plan.phoneEra} onSeek={onSeek} onChange={phoneEra=>{onPlan({...plan,phoneEra});setDirty(true);onDirty?.(true);setMessage('Unsaved scene changes');}}/>
      <details className="scene-visual-plans">
        <summary>Visual plans</summary>
        <p>
          Describe → visualize → correct → consolidate → build. Every authored scene has a plan.
        </p>
        {visualPlans
          .filter((p) => p.audioHash === annotation.audioHash)
          .map((p) => (
            <figure key={p.id}>
              <a href={p.image} target="_blank" rel="noreferrer">
                <img src={p.image} alt={`${p.title}: illustrated scene plan`} loading="lazy" />
              </a>
              <figcaption>
                <a href={p.image} target="_blank" rel="noreferrer">
                  {p.title} · v{p.version}
                </a>
                <span>Consolidated draft · creative review pending</span>
              </figcaption>
            </figure>
          ))}
        {openingBounds(annotation) && (
          <figure>
            <a
              href="/scene-assets/earth-build/earth-upgrade-3x3-v1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/scene-assets/earth-build/earth-upgrade-3x3-v1.png"
                alt="Nine Earth upgrade stages"
                loading="lazy"
              />
            </a>
            <figcaption>Earth progression · nine raster stages · live preview</figcaption>
          </figure>
        )}
        {!visualPlans.some((p) => p.audioHash === annotation.audioHash) && (
          <p>No visual plan for this recording yet.</p>
        )}
      </details>
      <p role="status">{message}</p>
      <details>
        <summary>Container rules & source</summary>
        <p>
          Visuals inherit their owner’s duration. Each lyric item belongs to one container. Root
          sections cover 0–{annotation.duration.toFixed(2)}s without gaps. Empty intervals are
          visual silence, not a claim that the audio is silent. Scene descriptions record direction;
          this experiment implements “Come closer.” New descriptions do not automatically generate
          imagery.
        </p>
        <p>
          Scene timing basis r{plan.annotationRevision} / words r{plan.wordRevision}. Current
          preview r{annotation.revision} / words r{annotation.wordTiming?.revision}.{" "}
          {plan.annotationRevision !== annotation.revision ||
          plan.wordRevision !== annotation.wordTiming?.revision
            ? "Timing changed: inspect the scene against the updated anchors."
            : ""}
        </p>
        <p>
          Human direction: words invite the viewer closer. Agent treatment: spatial approach, cool
          light, soft shadows. Creative approval pending.
        </p>
      </details>
    </section>
  );
}

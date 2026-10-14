import type { CanvasProject } from "./types";

export function ProjectHeader({
  project,
  titleDraft,
  setTitleDraft,
  saveStatus,
  canUndo,
  canRedo,
  onCommitTitle,
  onUndo,
  onRedo,
  onImportProject,
  onExport,
}: {
  project: CanvasProject;
  titleDraft: string;
  setTitleDraft: (value: string) => void;
  saveStatus: string;
  canUndo: boolean;
  canRedo: boolean;
  onCommitTitle: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onImportProject: (file: File | undefined) => void;
  onExport: () => void;
}) {
  return (
    <header className="canvas-project-header">
      <div>
        <p className="eyebrow">Canvas production · Stage 01</p>
        <h1>Turn the source audio into editable production components.</h1>
        <p>
          Import the transcript, attach the local source audio, then repair every text and timing
          boundary before interpretation begins. No image from the original video is used.
        </p>
      </div>
      <div className="canvas-project-actions">
        <label className="canvas-project-title">
          Project title
          <input
            value={titleDraft}
            aria-label="Project title"
            onChange={(event) => setTitleDraft(event.target.value)}
            onBlur={onCommitTitle}
          />
        </label>
        <span className="canvas-save-status">{saveStatus}</span>
        <div>
          <button type="button" disabled={!canUndo} onClick={onUndo}>
            Undo
          </button>
          <button type="button" disabled={!canRedo} onClick={onRedo}>
            Redo
          </button>
          <label className="canvas-file-button">
            Import project
            <input
              type="file"
              accept="application/json,.json"
              onChange={(event) => onImportProject(event.target.files?.[0])}
            />
          </label>
          <button type="button" onClick={onExport}>
            Export project
          </button>
        </div>
        <small>{project.components.length} stored components</small>
      </div>
    </header>
  );
}

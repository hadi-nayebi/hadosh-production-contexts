import { useEffect, useRef, useState } from "react";
import { ComponentWorkbench } from "./ComponentWorkbench";
import { componentsFromPlainText, parseTranscriptText, transcriptMetadata } from "./importers";
import {
  createComponent,
  createProject,
  replaceComponents,
  updateComponent,
  updateProjectTitle,
} from "./model";
import { ProjectHeader } from "./ProjectHeader";
import { SourceSetup } from "./SourceSetup";
import { TimelineSection } from "./TimelineSection";
import type { CanvasProject, ProjectCommit } from "./types";
import { useAudioClock } from "./useAudioClock";
import { slugify } from "./format";

export function SourceStage({
  project,
  commit,
  reset,
  undo,
  redo,
  canUndo,
  canRedo,
  saveStatus,
}: {
  project: CanvasProject;
  commit: ProjectCommit;
  reset: (project?: CanvasProject) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveStatus: string;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(
    project.components.find((component) => !component.deleted)?.id ?? null,
  );
  const [pastedText, setPastedText] = useState("");
  const [splitMode, setSplitMode] = useState<"sentence" | "paragraph" | "line">("sentence");
  const [notice, setNotice] = useState("");
  const [titleDraft, setTitleDraft] = useState(project.title);
  const noticeTimer = useRef<number | null>(null);

  const notify = (message: string) => {
    if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
    setNotice(message);
    noticeTimer.current = window.setTimeout(() => setNotice(""), 4_500);
  };
  const audio = useAudioClock(project, commit, notify);

  useEffect(() => setTitleDraft(project.title), [project.title]);
  useEffect(() => {
    const selected = project.components.find(
      (component) => component.id === selectedId && !component.deleted,
    );
    if (!selected) {
      setSelectedId(project.components.find((component) => !component.deleted)?.id ?? null);
    }
  }, [project.components, selectedId]);
  useEffect(
    () => () => {
      if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
    },
    [],
  );

  const importTranscript = async (file: File | undefined, projectOnly = false) => {
    if (!file) return;
    try {
      const result = parseTranscriptText(
        file.name,
        await file.text(),
        project.source.audio?.duration_ms ?? null,
      );
      if (result.type === "project") {
        reset(result.project);
        notify("Canvas project imported.");
        return;
      }
      if (projectOnly) throw new Error("The selected JSON is a transcript, not a Canvas project.");
      commit((current) =>
        replaceComponents(current, result.components, transcriptMetadata(file.name, result.format)),
      );
      setSelectedId(result.components[0]?.id ?? null);
      notify(`${result.components.length} transcript components imported.`);
    } catch (error) {
      notify(error instanceof Error ? error.message : "Could not import the selected file.");
    }
  };

  const buildFromPaste = () => {
    const components = componentsFromPlainText(
      pastedText,
      splitMode,
      project.source.audio?.duration_ms ?? null,
    );
    if (!components.length) {
      notify("Paste transcript text before building components.");
      return;
    }
    commit(
      replaceComponents(
        project,
        components,
        transcriptMetadata("pasted-transcript.txt", "plain_text"),
      ),
    );
    setSelectedId(components[0].id);
    notify(`${components.length} provisional components created.`);
  };

  const loadDemo = () => {
    const components = [
      createComponent({
        start_ms: 0,
        end_ms: 3_200,
        text: "The performers introduce the first character.",
        speaker: "Narrator",
      }),
      createComponent({
        start_ms: 3_200,
        end_ms: 8_600,
        text: "I work at the enchanted employment office, but I am terrible at magic.",
        speaker: "Character A",
      }),
      createComponent({
        start_ms: 8_600,
        end_ms: 12_400,
        text: "That explains what happened to my application.",
        speaker: "Character B",
      }),
    ];
    commit(
      replaceComponents(project, components, transcriptMetadata("canvas-demo.txt", "plain_text")),
    );
    setSelectedId(components[0].id);
    notify("Demo components loaded. Attach audio to exercise playback controls.");
  };

  const setBoundary = (id: string, target: "start_ms" | "end_ms") => {
    commit(updateComponent(project, id, { [target]: audio.playheadMs }));
  };

  const exportProject = () => {
    const blob = new Blob([`${JSON.stringify(project, null, 2)}\n`], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slugify(project.title) || "canvas-project"}.canvas.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearProject = () => {
    if (!window.confirm("Clear the locally saved Canvas project? The source media is unaffected."))
      return;
    audio.clearAttachedAudio();
    reset(createProject());
    setSelectedId(null);
    setPastedText("");
    notify("Local project cleared.");
  };

  const active = project.components.filter((component) => !component.deleted);
  const selected = project.components.find((component) => component.id === selectedId) ?? null;

  return (
    <section
      className="canvas-source-stage"
      id="canvas-stage-panel-analysis"
      role="tabpanel"
      aria-labelledby="canvas-stage-tab-analysis"
    >
      <ProjectHeader
        project={project}
        titleDraft={titleDraft}
        setTitleDraft={setTitleDraft}
        saveStatus={saveStatus}
        canUndo={canUndo}
        canRedo={canRedo}
        onCommitTitle={() => {
          if (titleDraft !== project.title) commit(updateProjectTitle(project, titleDraft));
        }}
        onUndo={undo}
        onRedo={redo}
        onImportProject={(file) => void importTranscript(file, true)}
        onExport={exportProject}
      />
      <SourceSetup
        project={project}
        audioRef={audio.audioRef}
        audioUrl={audio.audioUrl}
        pendingAudioName={audio.pendingAudioName}
        playheadMs={audio.playheadMs}
        pastedText={pastedText}
        splitMode={splitMode}
        onAudio={audio.importAudio}
        onAudioMetadata={audio.finishAudioMetadata}
        onTimeUpdate={audio.handleTimeUpdate}
        onTranscript={(file) => void importTranscript(file)}
        onPaste={setPastedText}
        onSplitMode={setSplitMode}
        onBuild={buildFromPaste}
        onDemo={loadDemo}
      />
      <TimelineSection
        components={active}
        selected={selected}
        selectedId={selectedId}
        playheadMs={audio.playheadMs}
        durationMs={audio.durationMs}
        audioReady={Boolean(audio.audioUrl)}
        onSelect={setSelectedId}
        onPlay={(component) => void audio.playRange(component)}
        onSetBoundary={setBoundary}
        onSeek={audio.seekTimeline}
        onNudgePlayhead={audio.nudgePlayhead}
      />
      <ComponentWorkbench
        project={project}
        commit={commit}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        playheadMs={audio.playheadMs}
        playRange={(component) => void audio.playRange(component)}
        setBoundary={setBoundary}
        onClear={clearProject}
        notify={notify}
      />
      {notice && (
        <div className="canvas-toast" role="status">
          {notice}
        </div>
      )}
    </section>
  );
}

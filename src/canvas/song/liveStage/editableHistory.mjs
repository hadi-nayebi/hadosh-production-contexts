// Add stable editor nodes without changing any existing field or stored bytes.
// Persist only through the ordinary explicit local Save action.
export function editableHistory(project) {
  if (!project.browserHistory?.length || project.objects.some((o) => o.kind.startsWith("history-")))
    return project;
  const base = {
    parentId: null,
    enterFrame: 0,
    exitFrame: project.composition.durationInFrames,
    cue: null,
    note: "Browser milestone from the source history. Move through the timeline to see each browser.",
    suggestion: "",
  };
  const nodes = [
    {
      ...base,
      id: "history-overlay-badge",
      kind: "history-overlay-badge",
      label: "Browser history symbol (Mozilla / Firefox / Chrome)",
      x: 975,
      y: 4,
      width: 280,
      height: 121,
    },
    {
      ...base,
      id: "history-overlay-year",
      kind: "history-overlay-year",
      label: "Browser history date",
      x: 36,
      y: 644,
      width: 408,
      height: 58,
    },
  ];
  return {
    ...project,
    objects: [...project.objects, ...nodes],
    scenes: project.scenes.map((s) => ({
      ...s,
      objectIds: [...s.objectIds, ...nodes.map((o) => o.id)],
    })),
  };
}

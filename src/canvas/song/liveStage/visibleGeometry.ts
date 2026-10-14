export type HitBox = { id: string; x: number; y: number; width: number; height: number };
// Read the same painted SVG nodes that the viewer sees, after all camera, group,
// view registration and placement-fade transforms. No second animation model.
export function paintedBounds(stage: HTMLElement): HitBox[] {
  const root = stage.getBoundingClientRect();
  if (!root.width || !root.height) return [];
  return [...stage.querySelectorAll<SVGElement>("svg [data-scene-object]")].flatMap((node) => {
    const leaves = node.matches("text,image")
      ? [node]
      : [
          ...node.querySelectorAll<SVGElement>(
            "image,text,rect,path,circle,ellipse,line,polygon,polyline",
          ),
        ];
    const boxes = leaves
      .filter((leaf) => {
        if (leaf.closest("defs,clipPath,mask")) return false;
        for (
          let parent: Element | null = leaf;
          parent && parent !== stage;
          parent = parent.parentElement
        ) {
          if (parent.getAttribute("opacity") === "0" || parent.getAttribute("display") === "none")
            return false;
        }
        return true;
      })
      .map((leaf) => leaf.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0);
    if (!boxes.length) return [];
    const left = Math.max(root.left, Math.min(...boxes.map((r) => r.left))),
      top = Math.max(root.top, Math.min(...boxes.map((r) => r.top)));
    const right = Math.min(root.right, Math.max(...boxes.map((r) => r.right))),
      bottom = Math.min(root.bottom, Math.max(...boxes.map((r) => r.bottom)));
    if (right <= left || bottom <= top) return [];
    const width = Math.max(32, right - left),
      height = Math.max(32, bottom - top);
    return [
      {
        id: node.dataset.sceneObject!,
        x: (left + right - width) / 2 - root.left,
        y: (top + bottom - height) / 2 - root.top,
        width,
        height,
      },
    ];
  });
}

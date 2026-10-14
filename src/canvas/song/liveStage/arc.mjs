// Placement is in viewport CSS pixels after group and camera transforms.
export function arcPosition(pose, stage, viewport) {
  const scale = stage.width / 1280;
  const left = stage.left + pose.x * scale;
  const right = left + pose.width * scale;
  const centerY = stage.top + (pose.y + Math.min(pose.height, 720 - pose.y) / 2) * scale;
  const width = 250,
    height = 290,
    gap = 12;
  const x =
    right + gap + width <= viewport.width - 10
      ? right + gap
      : left - gap - width >= 10
        ? left - gap - width
        : (left + right - width) / 2;
  return {
    x: Math.max(10, Math.min(viewport.width - width - 10, x)),
    y: Math.max(60, Math.min(viewport.height - 130 - height, centerY - height / 2)),
  };
}

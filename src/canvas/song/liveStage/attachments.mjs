// Geometry contract for future illustrated parts. No asset set is supplied by this module.
export function attachPart(body, part, pose) {
  if (
    !body ||
    !part ||
    !pose ||
    !Number.isFinite(pose.x) ||
    !Number.isFinite(pose.y) ||
    !Number.isFinite(pose.scale) ||
    pose.scale < 0.1 ||
    pose.scale > 4
  )
    throw Error("Invalid character transform");
  for (const asset of [body, part]) {
    if (
      !asset.id ||
      !Number.isFinite(asset.width) ||
      !Number.isFinite(asset.height) ||
      asset.width <= 0 ||
      asset.height <= 0 ||
      !asset.anchor ||
      ![asset.anchor.x, asset.anchor.y].every((n) => Number.isFinite(n) && n >= 0 && n <= 1)
    )
      throw Error("Parts require dimensions and normalized attachment anchors");
  }
  if (
    body.orientation !== part.orientation ||
    body.pose !== part.pose ||
    !["front", "left", "right"].includes(body.orientation) ||
    !["standing", "seated", "walking"].includes(body.pose)
  )
    throw Error("Parts must have a supported matching pose and orientation");
  const joint = {
    x: pose.x + body.width * body.anchor.x * pose.scale,
    y: pose.y + body.height * body.anchor.y * pose.scale,
  };
  return {
    body: {
      x: pose.x,
      y: pose.y,
      width: body.width * pose.scale,
      height: body.height * pose.scale,
    },
    part: {
      x: joint.x - part.width * part.anchor.x * pose.scale,
      y: joint.y - part.height * part.anchor.y * pose.scale,
      width: part.width * pose.scale,
      height: part.height * pose.scale,
    },
    joint,
    scale: pose.scale,
  };
}

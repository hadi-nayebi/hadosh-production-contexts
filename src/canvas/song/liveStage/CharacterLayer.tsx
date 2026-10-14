import { viewAt, type ViewOwner } from "./views.mjs";
import type { Scene, SceneObject } from "./scene.mjs";
export function characterGeometry(owner: SceneObject, frame: number) {
  const v = viewAt(owner, frame)!;
  const rig = v.rig!;
  const bw = owner.width,
    hw = bw * rig.headRatio;
  const bh = bw * (rig.bodyAspect || 1);
  const floor = rig.floorAnchor;
  const bodyX = floor ? bw * (0.5 - floor.x) : bw * (0.5 - rig.bodyAnchor.x);
  const bodyY = floor ? owner.height - floor.y * bh : owner.height * 0.41 - rig.bodyAnchor.y * bh;
  const joint = { x: bodyX + rig.bodyAnchor.x * bw, y: bodyY + rig.bodyAnchor.y * bh };
  return {
    body: {
      x: joint.x - rig.bodyAnchor.x * bw,
      y: bodyY,
      width: bw,
      height: bh,
    },
    head: {
      x: joint.x - rig.headAnchor.x * hw,
      y: joint.y - rig.headAnchor.y * hw,
      width: hw,
      height: hw,
    },
    joint,
  };
}
export default function CharacterLayer({
  owner,
  project,
  frame,
  assetBase = "",
}: {
  owner: SceneObject;
  project: Scene;
  frame: number;
  assetBase?: string;
}) {
  const v = viewAt(owner, frame);
  if (!v?.rig) return null;
  const body = project.assets?.find((a) => a.id === v.assetId),
    head = project.assets?.find((a) => a.id === v.rig!.headAssetId);
  if (!body || !head) return null;
  const g = characterGeometry(owner, frame);
  return (
    <g data-character-view={v.id}>
      <image href={assetBase + body.path} {...g.body} />
      <image href={assetBase + head.path} {...g.head} />
    </g>
  );
}

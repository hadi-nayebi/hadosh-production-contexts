import { useId } from "react";
import { viewAt, type ViewOwner } from "./views.mjs";
import type { Scene } from "./scene.mjs";
import {pinnedSeamMatrix} from './pinnedSeam';
export default function ImageLayer({
  owner,
  project,
  frame,
  width,
  height,
  assetBase = "",
}: {
  owner: ViewOwner;
  project: Scene;
  frame: number;
  width: number;
  height: number;
  assetBase?: string;
}) {
  const clipId = useId().replace(/:/g, "");
  const object = project.objects.find((o) => o === owner || o.id === (owner as { id?: string }).id);
  let cueFrame = frame;
  if (object) {
    let parent = object.parentId;
    while (parent) {
      const p = project.objects.find((o) => o.id === parent);
      if (!p) break;
      cueFrame -= p.timeOffset;
      parent = p.parentId;
    }
  }
  const view = viewAt(owner, cueFrame),
    asset = project.assets?.find((a) => a.id === view?.assetId);
  if (!asset) return null;
  const cue = [...(owner.viewCues || [])].reverse().find((c) => c.frame <= cueFrame);
  const duration = owner.transitionFrames || 0;
  const mix = cue && duration ? Math.min(1, (cueFrame - cue.frame) / duration) : 1;
  const prior = cue && mix < 1 ? viewAt(owner, cue.frame - 1) : null;
  const previous = project.assets?.find((a) => a.id === prior?.assetId);
  const limb = object?.limb;
  const progress = object?.animation
    ? Math.max(
        0,
        Math.min(
          1,
          (cueFrame - object.animation.startFrame) /
            (object.animation.endFrame - object.animation.startFrame),
        ),
      )
    : 0;
  const degrees = limb ? limb.degrees * progress * progress * (3 - 2 * progress) : 0;
  const polygon =
    limb?.polygon.map((point, i) => `${i ? "L" : "M"}${point.x} ${point.y}`).join(" ") + " Z";
  return (
    <g
      transform={limb?.pinnedSeam ? `matrix(${pinnedSeamMatrix(limb.pinnedSeam,degrees).join(' ')})` : limb ? `rotate(${degrees} ${limb.pivot.x} ${limb.pivot.y})` : undefined}
      data-limb-angle={limb ? degrees : undefined}
    >
      {limb && (
        <defs>
          <clipPath id={clipId}>
            <path
              d={`${limb.inverse ? `M0 0 H${width} V${height} H0 Z ` : ""}${polygon}`}
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </clipPath>
        </defs>
      )}
      <g clipPath={limb ? `url(#${clipId})` : undefined}>
        {previous && (
          <image
            href={assetBase + previous.path}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        )}
        <image
          data-image-view={view!.id}
          href={`${assetBase}${asset.path}`}
          x={view?.rect?.x || 0}
          y={view?.rect?.y || 0}
          width={view?.rect?.width || width}
          height={view?.rect?.height || height}
          opacity={mix}
          preserveAspectRatio={
            (owner as { fit?: string }).fit === "fill" ? "none" : "xMidYMid slice"
          }
        />
      </g>
    </g>
  );
}

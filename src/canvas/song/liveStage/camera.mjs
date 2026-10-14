export function cameraAt(scene, frame) {
  const keys = scene.camera?.length
    ? scene.camera
    : [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
  const a = [...keys].reverse().find((k) => k.frame <= frame) || keys[0],
    b = keys.find((k) => k.frame > a.frame) || a;
  let t =
    b.frame === a.frame ? 0 : Math.max(0, Math.min(1, (frame - a.frame) / (b.frame - a.frame)));
  t = t * t * (3 - 2 * t);
  const zoom = a.zoom + (b.zoom - a.zoom) * t,
    x = a.x + (b.x - a.x) * t,
    y = a.y + (b.y - a.y) * t;
  return { zoom, tx: 640 - x * 1280 * zoom, ty: 360 - y * 720 * zoom };
}
export function cameraPose(p, camera) {
  return {
    ...p,
    x: p.x * camera.zoom + camera.tx,
    y: p.y * camera.zoom + camera.ty,
    width: p.width * camera.zoom,
    height: p.height * camera.zoom,
  };
}
export function cameraPreset(project, id, preset) {
  return {
    ...project,
    revision: project.revision + 1,
    scenes: project.scenes.map((s) =>
      s.id !== id
        ? s
        : {
            ...s,
            camera: [
              { frame: s.start, zoom: 1, x: 0.5, y: 0.5 },
              {
                frame: s.end - 1,
                zoom: preset === "hold" ? 1 : 1.025,
                x: preset === "left" ? 0.49 : preset === "right" ? 0.51 : 0.5,
                y: 0.5,
              },
            ],
          },
    ),
  };
}

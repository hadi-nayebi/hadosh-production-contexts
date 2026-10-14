export type PhoneEraDirection = {
  phoneX: number;
  phoneY: number;
  zoom: number;
  upgradeStart: number;
  upgradeEnd: number;
  zoomStart: number;
  zoomEnd: number;
};
export const phoneEraDefaults: PhoneEraDirection = {
  phoneX: 51.5,
  phoneY: 47,
  zoom: 6,
  upgradeStart: 78.1,
  upgradeEnd: 79.6,
  zoomStart: 82,
  zoomEnd: 86,
};
export function validatePhoneEra(d: PhoneEraDirection) {
  for (const k of Object.keys(phoneEraDefaults) as (keyof PhoneEraDirection)[])
    if (!Number.isFinite(d[k])) throw Error("Invalid phone scene controls");
  if (
    d.phoneX < 0 ||
    d.phoneX > 100 ||
    d.phoneY < 0 ||
    d.phoneY > 100 ||
    d.zoom < 1 ||
    d.zoom > 8 ||
    d.upgradeStart < 75 ||
    d.upgradeEnd <= d.upgradeStart ||
    d.zoomStart < d.upgradeEnd ||
    d.zoomEnd <= d.zoomStart
  )
    throw Error("Keep phone scene stages ordered");
}
export function phoneCamera(time: number, d = phoneEraDefaults) {
  const u = Math.min(1, Math.max(0, (time - d.zoomStart) / (d.zoomEnd - d.zoomStart))),
    p = u * u * (3 - 2 * u);
  return {
    progress: p,
    scale: Math.exp(Math.log(d.zoom) * p),
    x: 50 + (d.phoneX - 50) * p,
    y: 50 + (d.phoneY - 50) * p,
  };
}
/** Dissolve over the final 1.25 seconds while both shots continue the approach. */
export function phoneDetailBlend(time: number, d = phoneEraDefaults) {
  const duration = Math.min(1.25, (d.zoomEnd - d.zoomStart) * 0.5),
    u = Math.min(1, Math.max(0, (time - d.zoomEnd + duration) / duration));
  return u * u * (3 - 2 * u);
}
/** Both plates share one projected phone rectangle throughout the resolution handoff. */
export function phoneMatch(time: number, d = phoneEraDefaults) {
  const camera = phoneCamera(time, d),
    blend = phoneDetailBlend(time, d);
  const source = { x: 51.1, y: 46.6, width: 5.62, height: 15.84 };
  const detail = { x: 49.2, y: 47.2, width: 24.8, height: 87 };
  const mix = (a: number, b: number) => a + (b - a) * blend;
  const x = mix(50 + (source.x - camera.x) * camera.scale, detail.x);
  const y = mix(50 + (source.y - camera.y) * camera.scale, detail.y);
  const artScale = (source.width * d.zoom) / detail.width;
  const width = mix(source.width * camera.scale, detail.width * artScale);
  const height = mix(source.height * camera.scale, detail.height * artScale);
  const sx = width / source.width,
    sy = height / source.height;
  return {
    blend,
    x,
    y,
    width,
    height,
    artScale,
    outgoing: { x: x - 50 - (source.x - 50) * sx, y: y - 50 - (source.y - 50) * sy, sx, sy },
    incoming: {
      x: x - detail.x,
      y: y - detail.y,
      sx: width / detail.width,
      sy: height / detail.height,
    },
  };
}

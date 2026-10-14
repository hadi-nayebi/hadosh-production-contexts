// Map one editable screen coordinate system onto its measured four-corner aperture.
export function coefficients(plane) {
  const [p0, p1, p2, p3] = plane.corners;
  const dx1 = p1.x - p2.x,
    dx2 = p3.x - p2.x,
    dx3 = p0.x - p1.x + p2.x - p3.x;
  const dy1 = p1.y - p2.y,
    dy2 = p3.y - p2.y,
    dy3 = p0.y - p1.y + p2.y - p3.y;
  const det = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / det,
    h = (dx1 * dy3 - dx3 * dy1) / det;
  return [
    p1.x - p0.x + g * p1.x,
    p1.y - p0.y + g * p1.y,
    p3.x - p0.x + h * p3.x,
    p3.y - p0.y + h * p3.y,
    p0.x,
    p0.y,
    g,
    h,
  ];
}
export function projectPoint(plane, x, y) {
  const [a, b, c, d, e, f, g, h] = coefficients(plane),
    u = x / plane.width,
    v = y / plane.height,
    w = g * u + h * v + 1;
  return { x: (a * u + c * v + e) / w, y: (b * u + d * v + f) / w };
}
export function projectedBounds(plane, n) {
  const q = [
    [n.x, n.y],
    [n.x + n.width, n.y],
    [n.x + n.width, n.y + n.height],
    [n.x, n.y + n.height],
  ].map(([x, y]) => projectPoint(plane, x, y));
  const x = Math.min(...q.map((p) => p.x)),
    y = Math.min(...q.map((p) => p.y));
  return {
    x,
    y,
    width: Math.max(...q.map((p) => p.x)) - x,
    height: Math.max(...q.map((p) => p.y)) - y,
  };
}
export function planeMatrix(plane) {
  const [a, b, c, d, e, f, g, h] = coefficients(plane),
    w = plane.width,
    t = plane.height;
  return `matrix3d(${[a / w, b / w, 0, g / w, c / t, d / t, 0, h / t, 0, 0, 1, 0, e, f, 0, 1].join(",")})`;
}
export function validateTextPlane(p) {
  if (
    !Number.isFinite(p.width) ||
    !Number.isFinite(p.height) ||
    p.width < 1 ||
    p.height < 1 ||
    p.width > 1280 ||
    p.height > 720 ||
    !Array.isArray(p.corners) ||
    p.corners.length !== 4 ||
    p.corners.some(
      (q) =>
        !Number.isFinite(q.x) ||
        !Number.isFinite(q.y) ||
        q.x < 0 ||
        q.x > 1280 ||
        q.y < 0 ||
        q.y > 720,
    )
  )
    throw Error("Invalid screen plane");
  let sign = 0;
  for (let i = 0; i < 4; i++) {
    const a = p.corners[i],
      b = p.corners[(i + 1) % 4],
      c = p.corners[(i + 2) % 4],
      cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
    if (Math.abs(cross) < 1 || (sign && Math.sign(cross) !== sign))
      throw Error("Screen plane must be convex");
    sign = Math.sign(cross);
  }
  if (!coefficients(p).every(Number.isFinite)) throw Error("Degenerate screen plane");
}

export function unprojectPoint(plane, x, y) {
  const [a, b, c, d, e, f, g, h] = coefficients(plane);
  const A = a - x * g,
    B = c - x * h,
    C = b - y * g,
    D = d - y * h;
  const det = A * D - B * C;
  if (Math.abs(det) < 1e-9) throw Error("Pointer is outside the usable screen plane");
  return {
    x: (((x - e) * D - B * (y - f)) / det) * plane.width,
    y: ((A * (y - f) - (x - e) * C) / det) * plane.height,
  };
}
export function planeDragDelta(plane, local, dx, dy) {
  const start = projectPoint(plane, local.x, local.y);
  const end = unprojectPoint(plane, start.x + dx, start.y + dy);
  return { x: end.x - local.x, y: end.y - local.y };
}

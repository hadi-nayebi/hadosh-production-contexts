import {reachableToasterState, REACH_SEGMENT} from "./reachableToasterState";
import { useLayoutEffect, useRef } from "react";
import * as T from "three";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer.js";
import type { Scene, SceneObject, Setting } from "./scene.mjs";
import FullSongProps from "./FullSongProps";
import { add, elbowFor, spatialToasterState, type Vec3 } from "./spatialToasterState";

type Label = { group: T.Group; at: Vec3; lines: string[]; size: [number, number]; floor?: boolean };
export function buildSpatialWorld(objects: SceneObject[], frame: number) {
  const scene = new T.Scene(),
    labels: Label[] = [];
  scene.add(new T.AmbientLight("#ffffff", 0.65));
  const light = new T.DirectionalLight("#fff4db", 0.7);
  light.position.set(-2, 5, 3);
  scene.add(light);
  const geometries: T.BufferGeometry[] = [],
    materials: T.Material[] = [];
  function mesh(g: T.Group, geometry: T.BufferGeometry, color: string, at: Vec3) {
    const material = new T.MeshLambertMaterial({ color });
    geometries.push(geometry);
    materials.push(material);
    const m = new T.Mesh(geometry, material);
    m.position.set(...at);
    g.add(m);
    return m;
  }
  function box(g: T.Group, at: Vec3, size: Vec3, color: string, front?: string) {
    const geometry = new T.BoxGeometry(
      ...size,
      ...(size.map((n) => Math.max(1, Math.min(4, Math.ceil(n * 4)))) as [
        number,
        number,
        number,
      ]),
    );
    if (!front) return mesh(g, geometry, color, at);
    const paints = Array.from(
      { length: 6 },
      (_, i) => new T.MeshLambertMaterial({ color: i === 4 ? front : color }),
    );
    const m = new T.Mesh(geometry, paints);
    geometries.push(geometry);
    materials.push(...paints);
    m.position.set(...at);
    g.add(m);
    return m;
  }
  function joint(g: T.Group, at: Vec3, r = 0.05, color = "#ba9477") {
    return mesh(g, new T.SphereGeometry(r, 10, 7), color, at);
  }
  function limb(g: T.Group, a: Vec3, b: Vec3, r = 0.05, color = "#496c70") {
    const d = new T.Vector3(...b).sub(new T.Vector3(...a));
    const m = mesh(g, new T.CylinderGeometry(r, r, d.length(), 8), color, a);
    m.position.copy(new T.Vector3(...a).add(new T.Vector3(...b)).multiplyScalar(0.5));
    m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.normalize());
  }
  const reachable = objects.some(o => o.suggestion === "reach-v21");
  const offset = (role: string): Vec3 =>
    objects.find((o) => o.spatial?.role === role)?.spatial?.position ?? [0, 0, 0];
  const state = reachable ? reachableToasterState(frame,{bread:offset("bread"),plug:offset("plug"),dial:offset("dial")}) : spatialToasterState(frame);
  for (const o of objects) {
    const v = o.spatial!,
      g = new T.Group();
    g.position.set(...v.position);
    g.rotation.set(...v.rotation);
    g.scale.set(...v.scale);
    scene.add(g);
    if (v.role === "room") {
      const floor=mesh(g,new T.PlaneGeometry(10,10,12,12),"#303e43",[0,0,0]);floor.rotation.x=-Math.PI/2;
      mesh(g,new T.PlaneGeometry(8,3,12,6),"#60787b",[0,1.5,-.84]);
    }
    if (v.role === "bench") {
      for (let i = 0; i < 12; i++) box(g, [-1.65 + i * 0.3, 0.94, 0], [0.3, 0.12, 1.15], "#a78056");
      for (const x of [-1.55, 1.55])
        for (const z of [-0.5, 0.5]) box(g, [x, 0.45, z], [0.12, 0.9, 0.12], "#493e35");
    }
    if (v.role === "toaster") {
      box(g, [0, 1.235, 0], [0.72, 0.42, 0.4], "#bfc9c3");
      for (const z of [-0.13, 0.13]) box(g, [0, 1.475, z], [0.72, 0.06, 0.14], "#bfc9c3");
      for (const x of [-0.31, 0.31]) box(g, [x, 1.475, 0], [0.1, 0.06, 0.12], "#bfc9c3");
      box(g, [0, 1.452, 0], [0.5, 0.008, 0.12], "#142626");
      for (const x of [-0.27, 0.27])
        for (const z of [-0.13, 0.13]) box(g, [x, 1.016, z], [0.07, 0.04, 0.07], "#263638");
      joint(g, [0.26, 1.13, 0.207], 0.019, state.powered ? "#ffc35a" : "#354442");
    }
    if (v.role === "bread")
      box(
        g,
        state.bread,
        [0.25, 0.33, 0.05],
        state.toastReady ? "#c88a49" : "#dec18e",
        state.toastReady ? "#e4b477" : "#f1dca7",
      );
    if (v.role === "dial") {
      const d = mesh(
        g,
        new T.CylinderGeometry(0.065, 0.065, 0.025, 20),
        "#334a49",
        [0.23, 1.26, 0.213],
      );
      d.rotation.x = Math.PI / 2;
      const end: Vec3 = [
        0.23 + Math.sin(state.dial) * 0.046,
        1.26 + Math.cos(state.dial) * 0.046,
        0.23,
      ];
      limb(g, [0.23, 1.26, 0.23], end, 0.006, "#f4d09a");
    }
    if (v.role === "outlet") {
      if(reachable)box(g,[.66,1.04,-.745],[.12,.08,.09],"#53686a");
      box(g, [0.66, 1.2, -0.745], [0.18, 0.25, 0.035], "#e2d8bf");
      for (const x of [-0.025, 0.025])
        box(g, [0.66 + x, 1.21, -0.725], [0.009, 0.045, 0.005], "#203536");
    }
    if (v.role === "plug") {
      const cable = new T.CatmullRomCurve3([
        new T.Vector3(0.35, 1.08, reachable ? .18 : -.12),
        new T.Vector3(reachable ? .5 : .43, 1.015, reachable ? .18 : -.35),
        new T.Vector3(...add(state.plug, [0, 0, 0.09])),
      ]);
      mesh(g, new T.TubeGeometry(cable, 12, 0.013, 6, false), "#202a29", [0, 0, 0]);
      box(g, state.plug, [0.105, 0.1, 0.15], "#293939");
      for (const x of [-0.025, 0.025])
        box(g, add(state.plug, [x, 0.01, -0.097]), [0.009, 0.035, 0.07], "#b9bbaa");
    }
    if (v.role === "owner") {
      box(g, [0, 0.62, 0.83], [0.36, 0.3, 0.27], "#253940");
      for (const x of [-1, 1]) {
        limb(g, [x * 0.12, 0.58, 0.85], [x * 0.16, 0.1, 0.9], 0.09, "#253940");
        box(g, [x * 0.16, 0.06, 0.8], [0.16, 0.12, 0.3], "#253940");
      }
      box(g, [0, 1.17, 0.78], [0.43, 0.7, 0.27], "#496c70");
      mesh(
        g,
        new T.SphereGeometry(0.16, 12, 8, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5),
        "#ba9477",
        [0, 1.74, 0.73],
      );
      mesh(
        g,
        new T.SphereGeometry(0.16, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
        "#393a34",
        [0, 1.74, 0.73],
      );
      let wrist = state.wrist;
      if (!reachable && ((frame >= 5069 && frame < 5137) || frame >= 5680)) wrist = add(wrist, offset("bread"));
      if (!reachable && frame >= 5169 && frame < 5255) wrist = add(wrist, offset("plug"));
      if (!reachable && frame >= 5255 && frame < 5328) wrist = add(wrist, offset("dial"));
      wrist = wrist.map((n, i) => n - v.position[i]) as Vec3;
      const shoulder: Vec3 = [0.25, 1.55, 0.62],
        elbow = reachable ? elbowFor(shoulder,wrist,REACH_SEGMENT,[1,-.4,.1]) : elbowFor(shoulder,wrist);
      limb(g, shoulder, elbow, 0.065);
      joint(g, elbow, 0.061);
      limb(g, elbow, wrist, 0.043, "#ba9477");
      joint(g, wrist, 0.049);
      limb(g, [-0.25, 1.55, 0.7], [-0.4, 1.2, 0.65], 0.065);
      limb(g, [-0.4, 1.2, 0.65], [-0.5, 1.03, 0.28], 0.045, "#ba9477");
    }
    if (v.role === "notes") {
      const paper=box(g,[-.95,reachable?1.015:1.026,.13],[.55,reachable?.03:.008,.45],"#eee4c9");
      if(!reachable)paper.renderOrder=1;
      labels.push({
        group: g,
        at: [-0.95, reachable ? 1.032 : 1.013, 0.13],
        size: [0.55, 0.44],
        floor: true,
        lines: ["writing.txt", "Clear words.", "Skip the pitch.", "Keep it useful."],
      });
    }
    if (v.role === "monitor") {
      box(g, [-1.08, 1.43, -0.48], [0.91, 0.6, 0.08], "#283b40", "#eee4c9");
      box(g, [-1.08, 1.12, -0.48], [0.12, 0.25, 0.12], "#283b40");
      box(g, [-1.08, 1.012, -0.4], [0.4, 0.025, 0.24], "#283b40");
      labels.push({
        group: g,
        at: [-1.08, 1.43, -0.432],
        size: [0.83, 0.52],
        lines: ["Workshop page", `Model ${state.model}`, "Your notes stay.", "Tools: ask first."],
      });
    }
  }
  return {
    scene,
    labels,
    dispose: () => {
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
    },
  };
}

export default function SpatialToasterWorld({
  project,
  frame,
  setting,
}: {
  project: Scene;
  frame: number;
  setting: Setting;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const objects = project.objects.filter(
      (o) => setting.objectIds.includes(o.id) && o.spatial && !o.hidden,
    );
    const world = buildSpatialWorld(objects, frame),
      c = setting.spatialCamera!;
    const camera = new T.PerspectiveCamera(c.fov, 1280 / 720, 0.02, 100);
    camera.position.set(...c.position);
    camera.lookAt(...c.target);
    camera.updateMatrixWorld();
    const renderer = new SVGRenderer();
    renderer.setSize(1280, 720);
    renderer.setPrecision(2);
    renderer.setClearColor(new T.Color("#293d44"), 1);
    renderer.render(world.scene, camera);
    const svg = renderer.domElement;
    svg.style.width = "100%";
    svg.style.height = "100%";
    // Canvas CSP blocks SVGRenderer's style strings; SVG presentation attributes are permitted.
    for (const path of svg.querySelectorAll("path")) {
      for (const declaration of (path.getAttribute("style") ?? "").split(";")) {
        const [name, value] = declaration.split(":");
        if (
          value &&
          [
            "fill",
            "fill-opacity",
            "stroke",
            "stroke-width",
            "stroke-opacity",
            "stroke-linecap",
            "stroke-linejoin",
          ].includes(name)
        )
          path.setAttribute(name, value);
      }
      path.removeAttribute("style");
    }
    const projectPoint = (point: T.Vector3) => {
      point.project(camera);
      return [point.x * 640, -point.y * 360];
    };
    // Planar text follows the same world plane. It is for rough readability only; oblique text is not final typography.
    for (const label of world.labels) {
      if(objects.some(o=>o.suggestion==="reach-v21")) {
        const center=label.group.localToWorld(new T.Vector3(...label.at));
        const distance=camera.position.distanceTo(center);
        const ray=new T.Raycaster(camera.position,center.clone().sub(camera.position).normalize(),0,distance-.01);
        if(ray.intersectObjects(world.scene.children,true).length)continue;
      }
      const [w, h] = label.size,
        [x, y, z] = label.at;
      const corner = (u: number, v: number) =>
        projectPoint(
          label.group.localToWorld(
            new T.Vector3(x + u * w, label.floor ? y : y - v * h, label.floor ? z + v * h : z),
          ),
        );
      const a = corner(-0.5, -0.5),
        b = corner(0.5, -0.5),
        d = corner(-0.5, 0.5);
      const ns = "http://www.w3.org/2000/svg",
        group = document.createElementNS(ns, "g");
      group.setAttribute(
        "transform",
        `matrix(${(b[0] - a[0]) / 1000} ${(b[1] - a[1]) / 1000} ${(d[0] - a[0]) / 640} ${(d[1] - a[1]) / 640} ${a[0]} ${a[1]})`,
      );
      label.lines.forEach((line, i) => {
        const text = document.createElementNS(ns, "text");
        text.setAttribute("x", "55");
        text.setAttribute("y", String(105 + i * 120));
        text.setAttribute("font-size", i === 0 ? "75" : "58");
        text.setAttribute("font-family", "sans-serif");
        text.setAttribute("fill", "#243d40");
        text.textContent = line;
        group.append(text);
      });
      svg.append(group);
    }
    ref.current.replaceChildren(svg);
    world.dispose();
  }, [project, frame, setting]);
  return (
    <div
      role="img"
      aria-label="Spatial toaster foundation"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div ref={ref} style={{ position: "absolute", inset: 0 }} />
      <svg
        viewBox="0 0 1280 720"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {project.objects
          .filter(
            (o) =>
              setting.objectIds.includes(o.id) &&
              o.kind === "lyric-block" &&
              !o.hidden &&
              frame >= o.enterFrame &&
              frame < o.exitFrame,
          )
          .map((o) => (
            <g key={o.id} transform={`translate(${o.x} ${o.y})`}>
              <FullSongProps object={o} frame={frame} />
            </g>
          ))}
      </svg>
    </div>
  );
}

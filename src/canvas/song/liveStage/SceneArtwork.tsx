import {useState} from 'react';
import RegisteredSceneStage from './RegisteredSceneStage';
import FoundationWordLayer,{SuppressPhraseBlocks} from "./FoundationWordLayer";
import SpaceFoundationWorld from "./SpaceFoundationWorld";
import DepthToasterWorld from "./DepthToasterWorld";
import SpatialToasterWorld from "./SpatialToasterWorld";
import DeskProps from "./DeskProps";
import ProjectedText from "./ProjectedText";
import OpeningProps, { WindowPass, openingOpacity } from "./OpeningProps";
import SceneProps from "./SceneProps";
import BrowserHistory from "./BrowserHistory";
import CharacterLayer from "./CharacterLayer";
import BrowserActions from "./BrowserActions";
import LyricPlates from "./LyricPlates";
import { cameraAt } from "./camera.mjs";
import { imagePose, cueFrame } from "./views.mjs";
import ImageLayer from "./ImageLayer";
import { sceneAt, type Scene } from "./scene.mjs";
function ArtworkFrame({
  project,
  frame,
  assetBase = "",
}: {
  project: Scene;
  frame: number;
  assetBase?: string;
}) {
  const setting = sceneAt(project, frame);
  const camera = cameraAt(setting, frame);
  const directLyrics =
    project.documentId.includes("dance-extended") || project.documentId.startsWith("full-song-");
  const physicalHistory = project.objects.some((o) => o.kind.startsWith("history-"));
  const mint = "#8ad9b9",
    paper = "#f0e9d5",
    gold = "#edbc69",
    ink = "#122a2d";
  return (
    <svg
      viewBox="0 0 1280 720"
      role="img"
      aria-label="Live illustrated song scene"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: ink,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <g transform={`translate(${camera.tx} ${camera.ty}) scale(${camera.zoom})`}>
        <rect width="1280" height="720" fill={ink} />
        <g stroke={mint} opacity=".07">
          {Array.from({ length: 18 }, (_, i) => (
            <path key={i} d={`M${i * 85} 720 L${i * 85 + 180} 0`} />
          ))}
        </g>
        <ImageLayer
          owner={setting}
          project={project}
          frame={frame}
          width={1280}
          height={720}
          assetBase={assetBase}
        />
        {setting.assetStatus === "awaiting asset" && (
          <g fill={paper} fontFamily="monospace">
            <text x="100" y="300" fontSize="20">
              SCENE BRIEF · ASSET PENDING
            </text>
            <foreignObject x="100" y="330" width="1080" height="240">
              <div style={{ fontSize: 32, lineHeight: 1.4, color: paper }}>
                {setting.description}
              </div>
            </foreignObject>
          </g>
        )}
        {!physicalHistory && <BrowserHistory project={project} frame={frame} layer="badge" />}
        {project.objects
          .filter((o) => setting.objectIds.includes(o.id) && !o.hidden)
          .filter((o) => o.views || (o.kind !== "word" && o.kind !== "group"))
          .map((o) => {
            const n = imagePose(project, o.id, frame);
            if (frame < n.enter || frame >= n.exit) return null;
            const age = frame - n.enter;
            const placementCue = [...(o.motion || [])].reverse().find((k) => k.frame <= frame);
            const placementMix =
              o.placementTransitionFrames && placementCue && placementCue.frame > n.enter
                ? Math.min(1, (frame - placementCue.frame) / o.placementTransitionFrames)
                : 1;
            const previousPlacement =
              placementCue && placementMix < 1
                ? imagePose(project, o.id, placementCue.frame - 1)
                : null;
            return (
              <g
                key={o.id}
                data-scene-object={o.id}
                opacity={openingOpacity(o, frame)}
                data-caption-space={o.kind === "lyric-block" ? "screen" : undefined}
                transform={
                  o.textPlane
                    ? undefined
                    : `${o.kind === "lyric-block" ? `translate(${-camera.tx / camera.zoom} ${-camera.ty / camera.zoom}) scale(${1 / camera.zoom}) ` : ""}translate(${n.x} ${n.y}) scale(${n.scale ?? 1})`
                }
              >
                <OpeningProps object={o} frame={frame} />
                {o.kind.startsWith("desk-") && <DeskProps object={o} />}
                {o.kind === "history-overlay-badge" && (
                  <g transform="translate(-975 -4)">
                    <BrowserHistory project={project} frame={frame} layer="badge" />
                  </g>
                )}
                {o.kind !== "character" && (
                  <ImageLayer
                    owner={o}
                    project={project}
                    frame={frame}
                    width={o.kind === "group" ? n.width : n.width / (n.scale || 1)}
                    height={o.kind === "group" ? n.height : n.height / (n.scale || 1)}
                    assetBase={assetBase}
                  />
                )}
                {o.kind === "character" && (
                  <>
                    {previousPlacement && (
                      <g
                        data-placement-layer="previous"
                        opacity={1 - placementMix}
                        transform={`translate(${previousPlacement.x - n.x} ${previousPlacement.y - n.y})`}
                      >
                        <CharacterLayer
                          owner={o}
                          project={project}
                          frame={frame}
                          assetBase={assetBase}
                        />
                      </g>
                    )}
                    <g data-placement-layer="current" opacity={placementMix}>
                      <CharacterLayer
                        owner={o}
                        project={project}
                        frame={frame}
                        assetBase={assetBase}
                      />
                    </g>
                  </>
                )}
                {o.kind === "browser-screen" && (
                  <svg
                    width={n.width / (n.scale || 1)}
                    height={n.height / (n.scale || 1)}
                    viewBox="0 0 1194 563"
                    preserveAspectRatio="none"
                    overflow="hidden"
                  >
                    <BrowserActions
                      frame={cueFrame(project, o.id, frame)}
                      cues={o.actionCues}
                      final={o.id.endsWith("final")}
                    />
                  </svg>
                )}
                {(o.textSurface || o.kind === "history-badge" || o.kind === "history-calendar") && (
                  <SceneProps project={project} object={o} frame={frame} />
                )}
                {o.textPlane && <ProjectedText project={project} object={o} frame={frame} />}
                {o.kind === "text" && !o.textSurface && !o.textPlane && (
                  <g data-text-role="explanatory">
                    {o.textBackground !== false && (
                      <rect
                        width={o.width}
                        height={o.height}
                        rx="5"
                        fill="#f5e9cb"
                        stroke="#244b4b"
                        strokeWidth="2"
                      />
                    )}
                    <text
                      x="12"
                      y="26"
                      fontFamily={
                        o.textStyle?.family === "serif"
                          ? "Georgia,serif"
                          : o.textStyle?.family === "mono"
                            ? "monospace"
                            : "Arial,sans-serif"
                      }
                      fontSize={o.textStyle?.fontSize || 19}
                      fontWeight={o.textStyle?.weight || 700}
                      letterSpacing="1"
                      fill={o.textColor || "#244b4b"}
                    >
                      {o.text}
                    </text>
                  </g>
                )}
                {o.kind === "keyring" && (
                  <g>
                    <path d="M21 0V24" stroke="#cfa25c" strokeWidth="3" />
                    <circle cx="21" cy="34" r="12" fill="none" stroke="#e7bf6d" strokeWidth="5" />
                    <path d="M21 46V73H34M21 62H30" stroke="#e7bf6d" strokeWidth="6" fill="none" />
                  </g>
                )}
                {o.kind === "window" && (
                  <>
                    <rect
                      width={o.width}
                      height={o.height}
                      rx="14"
                      fill={setting.views ? "#e8e2c8" : ink}
                      stroke={mint}
                      strokeWidth="3"
                    />
                    <path d={`M0 48 H${o.width}`} stroke={mint} strokeWidth="2" />
                    <text
                      x="27"
                      y="32"
                      fill={setting.views ? ink : paper}
                      fontSize="20"
                      fontFamily="Arial"
                    >
                      ◦ ◦ ◦ Firefox
                    </text>
                  </>
                )}
                {o.kind === "page" && (
                  <>
                    <rect width="490" height="12" fill={mint} opacity=".6" />
                    {[0, 1, 2].map((i) => (
                      <rect
                        key={i}
                        x={i * 255}
                        y="40"
                        width="235"
                        height="115"
                        rx="5"
                        fill={mint}
                        fillOpacity=".07"
                        stroke={mint}
                        strokeOpacity=".5"
                      />
                    ))}
                  </>
                )}
                {o.kind === "extension" && (
                  <g transform={`scale(${1 + Math.max(0, 1 - age / 5) * 0.14})`}>
                    <rect width="28" height="28" rx="4" fill={mint} />
                    <text x="6" y="22" fontSize="25" fill={ink}>
                      +
                    </text>
                  </g>
                )}
                {o.kind === "tracking" && (
                  <>
                    <path d="M10 10 V120" stroke={mint} strokeWidth="4" />
                    {[0, 1, 2].map((i) => (
                      <rect
                        key={i}
                        x={26 + ((frame + i * 9) % 25) * 2}
                        y={20 + i * 30}
                        width="10"
                        height="10"
                        fill="#e78675"
                      />
                    ))}
                    <text y="150" fill={mint} fontSize="16">
                      Blocked
                    </text>
                  </>
                )}
                {o.kind === "inspection" && (
                  <>
                    <rect width="710" height="180" fill={ink} stroke={mint} />
                    <g fontFamily="monospace" fontSize="24" fill={mint}>
                      <text x="22" y="40">
                        &lt;page&gt;
                      </text>
                      <text x="47" y="80">
                        tools · styles · connections
                      </text>
                      <text x="22" y="120">
                        &lt;/page&gt;
                      </text>
                    </g>
                  </>
                )}
                {o.kind === "eyes" &&
                  [0, 1, 2, 3].map((i) => (
                    <circle
                      key={i}
                      cx={15 + i * 40}
                      cy="15"
                      r="12"
                      fill={gold}
                      opacity={0.45 + i * 0.15}
                    />
                  ))}
                {o.kind === "handle" && (
                  <>
                    <rect
                      x="74"
                      width="30"
                      height="96"
                      rx="15"
                      fill={ink}
                      stroke={gold}
                      strokeWidth="6"
                    />
                    <path
                      d="M0 48 H60 M47 34 L60 48 L47 62"
                      stroke={gold}
                      fill="none"
                      strokeWidth="3"
                    />
                  </>
                )}
              </g>
            );
          })}
        {!directLyrics && <LyricPlates project={project} setting={setting} frame={frame} />}
        {project.objects
          .filter((o) => setting.objectIds.includes(o.id) && !o.hidden)
          .filter((o) => o.kind === "word")
          .map((o) => {
            const n = imagePose(project, o.id, frame);
            if (frame < n.enter || frame >= n.exit) return null;
            const w = project.words.find((w) => w.id === o.wordId)!;
            const age = frame - n.enter,
              dy = age < 4 ? -22 * Math.pow(1 - age / 4, 2) : 0;
            return (
              <text
                key={o.id}
                data-scene-object={o.id}
                x={n.x}
                y={n.y + ((o.textStyle?.fontSize || w.fontSize) + dy) * (n.scale ?? 1)}
                textLength={(o.width - 16) * (n.scale ?? 1)}
                lengthAdjust="spacingAndGlyphs"
                fill={o.textColor || (age < 4 ? gold : paper)}
                data-text-role={o.role || "lyric"}
                fontFamily={
                  o.textStyle?.family === "serif"
                    ? "Georgia,serif"
                    : o.textStyle?.family === "sans"
                      ? "Arial,sans-serif"
                      : "monospace"
                }
                fontSize={(o.textStyle?.fontSize || w.fontSize) * (n.scale ?? 1)}
                fontWeight={o.textStyle?.weight || 700}
                stroke={
                  directLyrics || (setting.views && !o.textColor && !o.textStyle)
                    ? "#14292b"
                    : undefined
                }
                strokeWidth={setting.views ? 5 : undefined}
                paintOrder="stroke"
                strokeLinejoin="round"
              >
                {w.text}
              </text>
            );
          })}
      </g>
      {!physicalHistory && <BrowserHistory project={project} frame={frame} layer="year" />}
      {project.objects
        .filter((o) => o.kind === "history-overlay-year" && !o.hidden)
        .map((o) => (
          <g key={o.id} data-scene-object={o.id} transform={`translate(${o.x - 36} ${o.y - 644})`}>
            <BrowserHistory project={project} frame={frame} layer="year" />
          </g>
        ))}
      {project.opening && <WindowPass opening={project.opening} frame={frame} />}
    </svg>
  );
}

// A short dissolve holds the outgoing composition instead of flashing between shots.
function SceneArtworkContent(props: { project: Scene; frame: number; assetBase?: string; onUnavailable?:()=>void }) {
  if (!props.project.documentId.startsWith("full-song-")) return <ArtworkFrame {...props} />;
  const setting = sceneAt(props.project, props.frame);
  // Rendering follows the scene's registered geometry, not a release allowlist.
  // A copied/newly versioned document must retain the same physical screen.
  const registeredScreen = props.project.objects.some(object=>setting.objectIds.includes(object.id)&&object.contentPlane);
  if(registeredScreen) return <RegisteredSceneStage {...props} setting={setting}/>;
  if (["full-song-foundation-v23","full-song-foundation-v24","full-song-foundation-v25","full-song-foundation-v27","full-song-foundation-v28","full-song-foundation-v29","full-song-foundation-v30"].includes(props.project.documentId) && props.frame>=377 && props.frame<724)
    return <SpaceFoundationWorld onUnavailable={props.onUnavailable} project={props.project} frame={props.frame} setting={setting} />;
  if (setting.spatialCamera && Number(props.project.documentId.match(/^full-song-foundation-v(\d+)/)?.[1])>=22)
    return <DepthToasterWorld onUnavailable={props.onUnavailable} project={props.project} frame={props.frame} setting={setting} />;
  if (setting.spatialCamera)
    return <SpatialToasterWorld project={props.project} frame={props.frame} setting={setting} />;
  const age = props.frame - setting.start;
  const duration = setting.boundaryTransitionFrames ?? 18;
  const mix = duration === 0 ? 1 : Math.min(1, age / duration);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#122a2d" }}>
      {setting.start > 0 && mix < 1 && (
        <div aria-hidden style={{ position: "absolute", inset: 0 }}>
          <ArtworkFrame {...props} frame={setting.start - 1} />
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, opacity: setting.start > 0 ? mix : 1 }}>
        <ArtworkFrame {...props} />
      </div>
    </div>
  );
}

export default function SceneArtwork(props:{project:Scene;frame:number;assetBase?:string}){
 const [failedScene,setFailedScene]=useState<string|null>(null);
 const sceneKey=props.project.documentId+':'+sceneAt(props.project,props.frame).id;

 const sequential=props.project.documentId.startsWith('full-song-foundation-');
 return <SuppressPhraseBlocks.Provider value={sequential}><div style={{position:'relative',width:'100%',height:'100%'}}>{failedScene===sceneKey?<div data-preview-fallback="editable-svg" style={{position:'absolute',inset:0}}>{props.frame>=377&&props.frame<724?<ArtworkFrame {...props}/>:<SpatialToasterWorld project={props.project} frame={props.frame} setting={sceneAt(props.project,props.frame)}/>}</div>:<SceneArtworkContent {...props} onUnavailable={()=>setFailedScene(sceneKey)}/>}{sequential&&<FoundationWordLayer project={props.project} frame={props.frame}/>}</div></SuppressPhraseBlocks.Provider>;
}

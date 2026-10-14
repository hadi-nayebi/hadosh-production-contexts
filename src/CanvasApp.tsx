import LyricFocus from './canvas/song/lyricFocus/LyricFocus';
import CandidateStudio from './canvas/song/lyricFocus/CandidateStudio';
import ExperimentalBrowser from './canvas/song/liveStage/ExperimentalBrowser';
import ExperimentalOpening from './canvas/song/liveStage/ExperimentalOpening';
import VideoReview from './canvas/song/VideoReview';
import registeredSequenceStudy from "./canvas/song/liveStage/registeredSequenceStudy";
import cortexSequenceStudy from "./canvas/song/liveStage/cortexSequenceStudy";
import foundationCortexRecovery from "./canvas/song/liveStage/foundationCortexRecovery";
import foundationUpgradeStudy from "./canvas/song/liveStage/foundationUpgradeStudy";
import foundationSurfaceStudy from "./canvas/song/liveStage/foundationSurfaceStudy";
import foundationSpaceStudy from "./canvas/song/liveStage/foundationSpaceStudy";
import foundationDepthStudy from "./canvas/song/liveStage/foundationDepthStudy";
import foundationReachStudy from "./canvas/song/liveStage/foundationReachStudy";
import foundationSpatialStudy from "./canvas/song/liveStage/foundationSpatialStudy";
import foundationRepairStudy from "./canvas/song/liveStage/foundationRepairStudy";
import foundationFinaleStudy from "./canvas/song/liveStage/foundationFinaleStudy";
import foundationToasterStudy from "./canvas/song/liveStage/foundationToasterStudy";
import foundationHarnessStudy from "./canvas/song/liveStage/foundationHarnessStudy";
import foundationFeedStudy from "./canvas/song/liveStage/foundationFeedStudy";
import foundationBrowserStudy from "./canvas/song/liveStage/foundationBrowserStudy";
import foundationOpeningStudy from "./canvas/song/liveStage/foundationOpeningStudy";
import foundationSourceStudy from "./canvas/song/liveStage/foundationSourceStudy";
import aiOwnershipStudy from "./canvas/song/liveStage/aiOwnershipStudy";
import foundationStudy from "./canvas/song/liveStage/foundationStudy";
import aiCrownStudy from "./canvas/song/liveStage/aiCrownStudy";
import aiHarnessStudy from "./canvas/song/liveStage/aiHarnessStudy";
import aiMemoryStudy from "./canvas/song/liveStage/aiMemoryStudy";
import aiPermissionStudy from "./canvas/song/liveStage/aiPermissionStudy";
import aiCheckStudy from "./canvas/song/liveStage/aiCheckStudy";
import aiReadabilityStudy from "./canvas/song/liveStage/aiReadabilityStudy";
import aiMonitorLayerStudy from "./canvas/song/liveStage/aiMonitorLayerStudy";
import aiMonitorStudy from "./canvas/song/liveStage/aiMonitorStudy";
import DirectorManual from "./canvas/song/DirectorManual";
import toasterRetainedStudy from "./canvas/song/liveStage/toasterRetainedStudy";
import toasterMatchStudy from "./canvas/song/liveStage/toasterMatchStudy";
import toasterStudy from "./canvas/song/liveStage/toasterStudy";
import fullSongSeed from "./canvas/song/liveStage/full-song-seed.json";
import originalCombinedSeed from "./canvas/song/liveStage/original-combined-seed.json";
import earthUpgradeSeed from "./canvas/song/liveStage/earth-upgrade-seed.json";
import questionsArpanetSeed from "./canvas/song/liveStage/questions-arpanet-seed.json";
import insideFeedSeed from "./canvas/song/liveStage/inside-feed-seed.json";
import insideSeed from "./canvas/song/liveStage/inside-seed.json";
import {
  snapshots,
  snapshotDate,
  snapshotHref,
  latestAudioBacked,
} from "./canvas/song/snapshots/registry";
import Productions from "./canvas/song/Productions";
import openingSeed from "./canvas/song/liveStage/opening-seed.json";
import clearanceSeed from "./canvas/song/liveStage/clearance-seed.json";
import danceReviewSeed from "./canvas/song/liveStage/dance-review-seed.json";
import danceExtendedSeed from "./canvas/song/liveStage/dance-extended-seed.json";
import scenePropsSeed from "./canvas/song/liveStage/scene-props-seed.json";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import OriginApp from "./App";
import { api } from "./api";
import ProductionDashboard from "./canvas/ProductionDashboard";
import CharacterReview from "./canvas/song/liveStage/CharacterReview";
import typographySeed from "./canvas/song/liveStage/typography-seed.json";
import nextSeed from "./canvas/song/liveStage/next-seed.json";
import illustratedSeed from "./canvas/song/liveStage/illustrated-seed.json";
import LiveStage from "./canvas/song/liveStage/LiveStage";
import WordEditor from "./canvas/song/wordMotion/WordEditor";
import SongStudio from "./canvas/song/SongStudio";
import type { FeedbackKind } from "./types";
import "./canvas/canvas.css";

const LOCATION_EVENT = "canvas:locationchange";

declare global {
  interface Window {
    __canvasHistoryPatched?: boolean;
  }
}

patchHistoryEvents();

export default function CanvasApp() {
  const path = useCurrentPath();
  if (path === "/songs/lyrics" || path === "/") return new URLSearchParams(location.search).get("archive") === "1" ? <LyricFocus/> : <CandidateStudio/>;
  if (path === "/songs/review") return <VideoReview/>;
  if (path === "/songs/live-foundation-v37" || path === "/songs/live-latest") return <ExperimentalBrowser reprise/>;
  if (path === "/songs/live-foundation-v36") return <ExperimentalBrowser toaster/>;
  if (path === "/songs/live-foundation-v35") return <ExperimentalBrowser fullWords/>;
  if (path === "/songs/live-foundation-v34") return <ExperimentalBrowser readable speech/>;
  if (path === "/songs/live-foundation-v33") return <ExperimentalBrowser readable/>;
  if (path === "/songs/live-foundation-v32") return <ExperimentalBrowser/>;
  if (path === "/songs/live-foundation-v31") return <ExperimentalOpening/>;
  const review = snapshots.find(
    (s) => path === snapshotHref(s.id) || path === `${snapshotHref(s.id)}/draft`,
  );
  if (review) {
    const readOnly = !path.endsWith("/draft");
    return (
      <LiveStage
        key={`${review.id}:${readOnly}`}
        defaultProject={review.scene}
        storageKey={`canvas-snapshot-draft:${review.id}`}
        readOnly={readOnly}
        draftHref={`${snapshotHref(review.id)}/draft`}
        workspaceLabel={`${readOnly ? "Review" : "Separate draft"}: ${review.title} · ${snapshotDate(review.createdAt)} · ${review.durationSeconds}s`}
      />
    );
  }

  if (path === "/songs/live-foundation-v29") {
    const rawFrame=new URLSearchParams(window.location.search).get("frame");
    const requestedFrame=rawFrame===null?868:Number(rawFrame);
    const initialFrame=Number.isInteger(requestedFrame)&&requestedFrame>=0&&requestedFrame<6804?requestedFrame:868;
    return <LiveStage defaultProject={registeredSequenceStudy} storageKey="canvas-foundation-v29" initialFrame={initialFrame} workspaceLabel="v29 physical browser and phone sequence · foundation review pending"/>;
  }
  if (path === "/songs/live-foundation-v28-r3") {
    return <LiveStage defaultProject={cortexSequenceStudy} storageKey="canvas-foundation-v28-r3" initialFrame={3370} workspaceLabel="v28 r3 cortex sequence · foundation review pending"/>;
  }
  if (path === "/songs/live-foundation-v28") {
    return <LiveStage defaultProject={cortexSequenceStudy} storageKey="canvas-foundation-v28" initialFrame={3370} workspaceLabel="v28 cortex sequence · foundation review pending"/>;
  }
  if (path === "/songs/live-foundation-v27") {
    return <LiveStage defaultProject={foundationCortexRecovery} storageKey="canvas-foundation-v27" initialFrame={3370} workspaceLabel="v27 character and cortex recovery · sequence review pending"/>;
  }
  if (path === "/songs/live-foundation-v25") {
    return <LiveStage defaultProject={foundationUpgradeStudy} storageKey="canvas-foundation-v25" initialFrame={710} workspaceLabel="v25 causal upgrades · foundation review pending"/>;
  }
  if (path === "/songs/live-foundation-v24") {
    return <LiveStage defaultProject={foundationSurfaceStudy} storageKey="canvas-foundation-v24" initialFrame={511} workspaceLabel="v24 capsule contact foundation · review pending"/>;
  }
  if (path === "/songs/live-foundation-v23") {
    return <LiveStage defaultProject={foundationSpaceStudy} storageKey="canvas-foundation-v23" initialFrame={400} workspaceLabel="v23 changing space sequence · foundation review pending"/>;
  }
  if (path === "/songs/live-foundation-v22") {
    return <LiveStage defaultProject={foundationDepthStudy} storageKey="canvas-foundation-v22" initialFrame={5253} workspaceLabel="v22 depth renderer diagnostic · not style approved"/>;
  }
  if (path === "/songs/live-foundation-v21") {
    const f=Number(new URLSearchParams(window.location.search).get("frame")??5118);
    return <LiveStage defaultProject={foundationReachStudy} storageKey="canvas-foundation-v21" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:5118} workspaceLabel="v21 reachable spatial foundation · visual acceptance pending"/>;
  }
  if (path === "/songs/live-foundation-v20") {
    const f = Number(new URLSearchParams(window.location.search).get("frame") ?? 5080);
    return (
      <LiveStage
        defaultProject={foundationSpatialStudy}
        storageKey="canvas-foundation-v20"
        initialFrame={Number.isInteger(f) && f >= 0 && f < 6804 ? f : 5080}
        workspaceLabel="v20 spatial foundation experiment · shared world and perspective cameras · unaccepted"
      />
    );
  }
  if (path === "/songs/live-foundation-v19") {
    const requested = Number(new URLSearchParams(window.location.search).get("frame") ?? 4520);
    return (
      <LiveStage
        defaultProject={foundationRepairStudy}
        storageKey="canvas-foundation-v19"
        initialFrame={
          Number.isInteger(requested) && requested >= 0 && requested < 6804 ? requested : 4520
        }
        workspaceLabel="v19 foundation repairs · plan, contact and insertion · visual foundation still fails"
      />
    );
  }
  if (path === "/songs/live-foundation-v18") {
    const frameQuery = new URLSearchParams(window.location.search).get("frame");
    const requestedFrame =
      frameQuery === null || frameQuery.trim() === "" ? NaN : Number(frameQuery);
    const auditFrame =
      Number.isInteger(requestedFrame) &&
      requestedFrame >= 0 &&
      requestedFrame < foundationFinaleStudy.composition.durationInFrames
        ? requestedFrame
        : 5756;
    return (
      <LiveStage
        defaultProject={foundationFinaleStudy}
        storageKey="canvas-foundation-v18"
        initialFrame={auditFrame}
        workspaceLabel="76-shot foundation · finale recalls and departure · full review pending · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v17") {
    return (
      <LiveStage
        defaultProject={foundationToasterStudy}
        storageKey="canvas-foundation-v17"
        initialFrame={5000}
        workspaceLabel="76-shot foundation · toaster actions · rough blocking · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v16") {
    return (
      <LiveStage
        defaultProject={foundationHarnessStudy}
        storageKey="canvas-foundation-v16"
        initialFrame={3240}
        workspaceLabel="76-shot foundation · persistent harness task · rough blocking · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v15") {
    return (
      <LiveStage
        defaultProject={foundationFeedStudy}
        storageKey="canvas-foundation-v15"
        initialFrame={2170}
        workspaceLabel="76-shot foundation · feed cause/consequence proxies · full review pending · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v14") {
    return (
      <LiveStage
        defaultProject={foundationBrowserStudy}
        storageKey="canvas-foundation-v14"
        initialFrame={724}
        workspaceLabel="76-shot foundation · browser action proxies · music/lyric/visual certification pending · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v13") {
    return (
      <LiveStage
        defaultProject={foundationOpeningStudy}
        storageKey="canvas-foundation-v13"
        initialFrame={0}
        workspaceLabel="76-shot foundation · opening action blocking · full story and visual review pending · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation-v12") {
    return (
      <LiveStage
        defaultProject={foundationSourceStudy}
        storageKey="canvas-foundation-v12"
        initialFrame={0}
        workspaceLabel="76-shot source-anchored assembly · timing 99.3 · actual story actions unverified · details locked"
      />
    );
  }
  if (path === "/songs/live-foundation") {
    return (
      <LiveStage
        defaultProject={foundationStudy}
        storageKey="canvas-foundation-v11"
        initialFrame={0}
        workspaceLabel="71-shot foundation assembly · tempo candidates 99.4 · story/blocking unverified · details locked"
      />
    );
  }
  if (path === "/songs/live-ai-ownership") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiOwnershipStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-ownership-v9:${focus?.id || "default"}`}
        defaultProject={aiOwnershipStudy}
        storageKey="canvas-ai-ownership-v9"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 4303}
        initialObjectId={focus?.id}
        workspaceLabel="S08–S12 owned workspace · v9 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-crown") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiCrownStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-crown-v8:${focus?.id || "default"}`}
        defaultProject={aiCrownStudy}
        storageKey="canvas-ai-crown-v8"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 3950}
        initialObjectId={focus?.id}
        workspaceLabel="S05 words become memory · v8 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-harness") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiHarnessStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-harness-v7:${focus?.id || "default"}`}
        defaultProject={aiHarnessStudy}
        storageKey="canvas-ai-harness-v7"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 4126}
        initialObjectId={focus?.id}
        workspaceLabel="S07 owned tool rules · v7 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-memory") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiMemoryStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-memory-v6:${focus?.id || "default"}`}
        defaultProject={aiMemoryStudy}
        storageKey="canvas-ai-memory-v6"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 4036}
        initialObjectId={focus?.id}
        workspaceLabel="S06 editable memory · v6 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-permission") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiPermissionStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-permission-v5:${focus?.id || "default"}`}
        defaultProject={aiPermissionStudy}
        storageKey="canvas-ai-permission-v5"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 3763}
        initialObjectId={focus?.id}
        workspaceLabel="S04 human permission · v5 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-check") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiCheckStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-check-v4:${focus?.id || "default"}`}
        defaultProject={aiCheckStudy}
        storageKey="canvas-ai-check-v4"
        initialFrame={focus ? Math.max(0, focus.enterFrame) : 3679}
        initialObjectId={focus?.id}
        workspaceLabel="S03 source and preview · v4 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-readability") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiReadabilityStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-readability-v3:${focus?.id || "default"}`}
        defaultProject={aiReadabilityStudy}
        storageKey="canvas-ai-readability-v3"
        initialFrame={focus ? Math.max(3497, focus.enterFrame) : 3497}
        initialObjectId={focus?.id}
        workspaceLabel="S02 readability · v3 isolated draft · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-monitor-layers") {
    const requested = new URLSearchParams(window.location.search).get("inspect");
    const focus = aiMonitorLayerStudy.objects.find((o) => o.id === requested);
    return (
      <LiveStage
        key={`ai-monitor-layers-v2:${focus?.id || "default"}`}
        defaultProject={aiMonitorLayerStudy}
        storageKey="canvas-ai-monitor-layers-v2"
        initialFrame={focus ? Math.max(3497, focus.enterFrame) : 3610}
        initialObjectId={focus?.id}
        workspaceLabel="AI monitor layers · S02 v2 · perspective/foreground study · not review-ready"
      />
    );
  }
  if (path === "/songs/live-ai-monitor")
    return (
      <LiveStage
        key="ai-monitor-v1"
        defaultProject={aiMonitorStudy}
        storageKey="canvas-ai-monitor-v1"
        initialFrame={3497}
        workspaceLabel="AI monitor study · S02 blocking only · other shots inherited · not review-ready"
      />
    );
  if (path === "/songs/director") return <DirectorManual />;
  if (path === "/songs/live-toaster-retained")
    return (
      <LiveStage
        key="toaster-retained-v3"
        defaultProject={toasterRetainedStudy}
        storageKey="canvas-toaster-retained-v3"
        workspaceLabel="Toaster retained words · separate draft v3 · not review-ready"
        initialFrame={5366}
      />
    );
  if (path === "/songs/live-toaster-match")
    return (
      <LiveStage
        key="toaster-match-v2"
        defaultProject={toasterMatchStudy}
        storageKey="canvas-toaster-match-v2"
        initialFrame={5155}
        workspaceLabel="Toaster / provider match · separate draft v2 · not review-ready"
      />
    );
  if (path === "/songs/live-toaster-contact")
    return (
      <LiveStage
        key="toaster-contact-v1"
        defaultProject={toasterStudy}
        storageKey="canvas-toaster-contact-v1"
        initialFrame={4980}
        workspaceLabel="Toaster contact study · isolated draft · 166–192s"
      />
    );

  if (path === "/songs/live-full-song")
    return (
      <LiveStage
        key="full-song-v6"
        defaultProject={fullSongSeed}
        storageKey="canvas-full-song-v6"
        workspaceLabel="Full song · 3:47 · first layer · original audio throughout"
      />
    );
  if (path === "/songs/live-original-combined")
    return (
      <LiveStage
        key="original-combined-v3"
        defaultProject={originalCombinedSeed}
        storageKey="canvas-original-combined-v3"
        workspaceLabel="Original audio + visuals · 36.3s first fit · not Study 03"
      />
    );
  if (path === "/songs/live-earth-upgrades")
    return (
      <LiveStage
        key="earth-upgrades-v5"
        defaultProject={earthUpgradeSeed}
        storageKey="canvas-earth-upgrades-v5"
        workspaceLabel="Earth upgrades → Internet → inside invitation · provisional silent choreography"
      />
    );
  if (path === "/songs/live-questions-arpanet")
    return (
      <LiveStage
        key="questions-arpanet-v1"
        defaultProject={questionsArpanetSeed}
        storageKey="canvas-questions-arpanet-v1"
        workspaceLabel="Cumulative questions + localized ARPANET · silent timing study"
      />
    );
  if (path === "/songs/live-inside-feed")
    return (
      <LiveStage
        key="inside-feed-v1"
        defaultProject={insideFeedSeed}
        storageKey="canvas-browser-inside-feed-v1"
        workspaceLabel="Inside opening + feed study · 100.1s · partial audio, draft lyrics"
      />
    );
  if (path === "/songs/live-inside")
    return (
      <LiveStage
        key="inside-v2"
        defaultProject={insideSeed}
        storageKey="canvas-browser-inside-v2"
        workspaceLabel="Inside-window proposal · 88.1s · silent opening, score pending"
      />
    );
  if (path === "/songs/live-opening")
    return (
      <LiveStage
        key="opening-v1"
        defaultProject={openingSeed}
        storageKey="canvas-browser-opening-v1"
        workspaceLabel="Opening + browser story · 72.1s · timing draft"
      />
    );
  if (path === "/songs/live-clearance")
    return (
      <LiveStage
        key="dance-clearance-review"
        defaultProject={clearanceSeed}
        storageKey="canvas-browser-dance-clearance-review"
        workspaceLabel="Character clearance · separate working candidate · 35.8s"
      />
    );
  if (path === "/songs/live-dance-review")
    return (
      <LiveStage
        key="dance-review-v7"
        defaultProject={danceReviewSeed}
        storageKey="canvas-browser-dance-review-v7"
        workspaceLabel="Who Holds the Keys? · Earlier browser candidate v7 · 35.8s · unapproved"
      />
    );
  if (path === "/songs/live-dance")
    return (
      <LiveStage
        key="dance-extended"
        defaultProject={danceExtendedSeed}
        storageKey="canvas-browser-dance-extended-v6"
        workspaceLabel="Who Holds the Keys? · Previous dance v6 / r32 · 35.8s"
      />
    );
  if (path === "/songs/live-refinement")
    return (
      <LiveStage
        key="scene-props"
        defaultProject={scenePropsSeed}
        storageKey="canvas-browser-scene-props-v5-review"
        workspaceLabel="Scene props + entrances · review candidate"
      />
    );
  if (
    path === "/songs/live" ||
    path === "/songs/live-original" ||
    path === "/songs/live-typography"
  )
    return (
      <LiveStage
        key="typography"
        defaultProject={typographySeed}
        storageKey="canvas-browser-typography-v4"
        workspaceLabel="Original comparison · v4 · 24s · saved edits preserved"
      />
    );
  if (path === "/songs/character-review") return <CharacterReview />;
  if (path === "/songs/live-next")
    return (
      <LiveStage
        key="next"
        defaultProject={nextSeed}
        storageKey="canvas-browser-inspect-v3"
        workspaceLabel="Browser / Inspect · unapproved revision"
      />
    );
  if (path === "/songs/live-next-qa")
    return (
      <LiveStage
        key="next-qa"
        defaultProject={nextSeed}
        storageKey="canvas-browser-inspect-v3-qa"
        workspaceLabel="Browser / Inspect QA · separate document"
      />
    );
  if (path === "/songs/live-qa")
    return (
      <LiveStage
        key="illustrated-qa"
        defaultProject={illustratedSeed}
        storageKey="canvas-illustrated-scene-qa-v1"
        workspaceLabel="Illustrated QA · separate document"
      />
    );
  if (path === "/songs/live-vector") return <LiveStage key="vector" />;
  if (path === "/songs/live-illustrated")
    return (
      <LiveStage
        key="illustrated"
        defaultProject={illustratedSeed}
        storageKey="canvas-illustrated-scene-v1"
      />
    );
  if (isOriginSurface(path)) return <OriginApp />;
  return <CanvasShell navigate={(next) => navigate(next)} />;
}

function CanvasShell({ navigate }: { navigate: (path: string) => void }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const closeFeedback = useCallback(() => setFeedbackOpen(false), []);
  return (
    <div
      className={`origin-shell canvas-shell ${window.location.pathname.startsWith("/comic") ? "" : "song-mode"}`}
    >
      <a className="skip-link" href="#canvas-main">
        Skip to production dashboard
      </a>
      <header className="brand" aria-label="Canvas">
        <span className="brand-mark" aria-hidden="true">
          C
        </span>
        <span>Canvas</span>
      </header>
      {window.location.pathname.startsWith("/songs") && (
        <nav
          className="song-destinations"
          aria-label="Song production destinations"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            padding: "1rem",
            paddingTop: "92px",
          }}
        >
          <a href="/songs">Song dashboard</a>
          <a href="/songs/review">Video review & chapter links</a>
          <a href="/songs/productions">Production versions</a>
          <a href="/songs/live-full-song">Full song · 3:47 · first layer</a>
          {latestAudioBacked && (
            <a href={snapshotHref(latestAudioBacked.id)}>
              Audio-backed review · {latestAudioBacked.durationSeconds}s
            </a>
          )}
          <a href="/songs/live-opening">Saved opening draft · 72.1s</a>
          <a href="/songs/live-original">Compare original draft · 24s</a>
        </nav>
      )}
      <main id="canvas-main">
        {window.location.pathname.startsWith("/comic") ? (
          <ProductionDashboard />
        ) : window.location.pathname === "/songs/productions" ? (
          <Productions />
        ) : window.location.pathname === "/songs/words" ? (
          <WordEditor />
        ) : (
          <SongStudio />
        )}
      </main>
      <button
        className="floating-control admin-control"
        type="button"
        onClick={() => navigate("/admin/wiki/")}
        aria-label="Open Origin admin"
      >
        <AdminIcon />
        <span>Admin</span>
      </button>
      <button
        className="floating-control feedback-control"
        type="button"
        onClick={() => setFeedbackOpen(true)}
        aria-label="Give feedback"
      >
        <CommentIcon />
        <span>Feedback</span>
      </button>
      {feedbackOpen && <CanvasFeedback onClose={closeFeedback} />}
    </div>
  );
}

function CanvasFeedback({ onClose }: { onClose: () => void }) {
  const [kind, setKind] = useState<FeedbackKind>("update");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(document.activeElement as HTMLElement | null);

  useEffect(() => {
    closeRef.current?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", keyboard);
    return () => {
      document.removeEventListener("keydown", keyboard);
      previousFocus.current?.focus();
    };
  }, [onClose]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("Saving…");
    try {
      const result = await api.submitFeedback({
        kind,
        body,
        pagePath: window.location.pathname,
        pageLabel: "Canvas / Production dashboard",
      });
      setBody("");
      setStatus(
        result.delivery.pending
          ? `Saved. ${result.delivery.pending} terminal wake${result.delivery.pending === 1 ? " is" : "s are"} pending.`
          : "Saved and delivered to the Canvas CLI relationship.",
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not save feedback.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="feedback-panel canvas-feedback-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="canvas-feedback-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <p className="eyebrow">Canvas feedback</p>
            <h2 id="canvas-feedback-title">Send this page to the same CLI agent.</h2>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close feedback">
            ×
          </button>
        </header>
        <p className="canvas-feedback-copy">
          The request is saved by Origin’s contextual-feedback plugin before a terminal wake is
          attempted. The richer thread and review controls remain available in Origin Admin.
        </p>
        <form onSubmit={submit}>
          <fieldset>
            <legend>What kind of feedback is this?</legend>
            {(["update", "feature", "bug"] as FeedbackKind[]).map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="canvas-feedback-kind"
                  checked={kind === item}
                  onChange={() => setKind(item)}
                />
                {item === "update"
                  ? "Content or update"
                  : item === "feature"
                    ? "Feature request"
                    : "Bug report"}
              </label>
            ))}
          </fieldset>
          <label className="body-label">
            What should change?
            <textarea
              required
              minLength={3}
              maxLength={2_000}
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Describe the result you want…"
            />
          </label>
          <button className="primary" type="submit" disabled={submitting}>
            {submitting ? "Saving…" : "Save feedback"}
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

function useCurrentPath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener("popstate", update);
    window.addEventListener(LOCATION_EVENT, update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener(LOCATION_EVENT, update);
    };
  }, []);
  return path;
}

function patchHistoryEvents() {
  if (typeof window === "undefined" || window.__canvasHistoryPatched) return;
  window.__canvasHistoryPatched = true;
  for (const method of ["pushState", "replaceState"] as const) {
    const original = window.history[method];
    window.history[method] = function (data: unknown, unused: string, url?: string | URL | null) {
      original.call(window.history, data, unused, url);
      window.dispatchEvent(new Event(LOCATION_EVENT));
    };
  }
}

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.scrollTo(0, 0);
}

function isOriginSurface(path: string) {
  return /^\/(?:admin|wiki)(?:\/|$)/.test(path);
}

function AdminIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </svg>
  );
}

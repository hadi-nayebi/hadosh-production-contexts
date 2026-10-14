import { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import CandidateStudio from "./canvas/song/lyricFocus/CandidateStudio";
import "./styles.css";
import "./canvas/canvas.css";

const LegacyCanvasApp = lazy(() => import("./CanvasApp"));

function DashboardEntry() {
  const [url, setUrl] = useState(() => window.location.href);
  useEffect(() => {
    const update = () => setUrl(window.location.href);
    window.addEventListener("popstate", update);
    window.addEventListener("canvas:locationchange", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("canvas:locationchange", update);
    };
  }, []);
  const location = new URL(url);
  const currentStudio =
    (location.pathname === "/" || location.pathname === "/songs/lyrics") &&
    location.searchParams.get("archive") !== "1";
  return currentStudio ? (
    <CandidateStudio />
  ) : (
    <Suspense fallback={<p role="status">Loading workspace…</p>}>
      <LegacyCanvasApp />
    </Suspense>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardEntry />
  </StrictMode>,
);

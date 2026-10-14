import DirectorPlans from "./DirectorPlans";
import "./director-manual.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import manual from "../../../docs/SONG-DIRECTOR-LEDGER.md?raw";
import ledgerUrl from "./liveStage/director-ledger.json?url";

export default function DirectorManual() {
  return (
    <main className="director-manual">
      <nav aria-label="Director manual navigation">
        <a href="/songs/productions">← Production versions</a>
        {" · "}
        <a href="/songs/live-ai-monitor-layers">Open layered monitor study</a> ·{" "}
        <a href="/songs/live-ai-monitor">Open AI monitor study</a> ·{" "}
        <a href="/songs/live-toaster-retained">Open retained-words study</a>
        {" · "}
        <a href={ledgerUrl} download="director-ledger.json">
          Download structured ledger
        </a>
      </nav>
      <DirectorPlans />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url) => {
          if (url.endsWith("director-ledger.json")) return ledgerUrl;
          if (url.startsWith("https://") || url.startsWith("#")) return url;
          const path = url.startsWith("../") ? url.slice(3) : `docs/${url}`;
          return `https://github.com/hadi-nayebi/hadosh-production-contexts`;
        }}
      >
        {manual}
      </ReactMarkdown>
    </main>
  );
}

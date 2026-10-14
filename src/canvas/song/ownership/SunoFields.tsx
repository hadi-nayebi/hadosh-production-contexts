import { useRef, useState } from "react";
import { download } from "../export";
export interface SunoPacket {
  title: string;
  revision: string;
  status: string;
  lyrics: string;
  style: string;
  exclude: string;
  notes: string[];
}
const fields = [
  ["title", "Title"],
  ["style", "Style"],
  ["exclude", "Exclusions"],
  ["lyrics", "Lyrics"],
] as const;
export default function SunoFields({
  packet,
  sourceUrl,
}: {
  packet: SunoPacket;
  sourceUrl: string;
}) {
  const inputs = useRef<Partial<Record<(typeof fields)[number][0], HTMLTextAreaElement | null>>>(
    {},
  );
  const [status, setStatus] = useState("");
  async function copy(field: (typeof fields)[number][0], label: string) {
    try {
      await navigator.clipboard.writeText(packet[field]);
      setStatus(`${label} copied exactly from the pinned candidate.`);
    } catch {
      inputs.current[field]?.focus();
      inputs.current[field]?.select();
      setStatus(`Clipboard unavailable. ${label} selected; use your device's Copy command.`);
    }
  }
  return (
    <details className="song-card suno-fields">
      <summary>Copy Suno fields · provisional candidate</summary>
      <p>
        Exact <a href={sourceUrl}>{packet.revision} source packet</a>. Copies use the pinned
        Departments candidate; local review edits are not included. Copying does not generate audio
        or approve the song.
      </p>
      <small>{packet.status.replaceAll("_", " ")}</small>
      <div className="review-columns">
        {fields.map(([key, label]) => (
          <div key={key} className={key === "lyrics" ? "suno-lyrics-field" : ""}>
            <label>
              Suno {label.toLowerCase()}
              <textarea
                ref={(node) => {
                  inputs.current[key] = node;
                }}
                readOnly
                rows={key === "lyrics" ? 16 : key === "style" ? 8 : 2}
                value={packet[key]}
              />
            </label>
            <div className="song-actions">
              <button onClick={() => copy(key, label)}>Copy {label.toLowerCase()}</button>
              <button
                onClick={() => download(`who-holds-the-keys-${key}.txt`, packet[key], "text/plain")}
              >
                Download {label.toLowerCase()}
              </button>
            </div>
          </div>
        ))}
      </div>
      {packet.notes.map((note) => (
        <p className="song-muted" key={note}>
          {note}
        </p>
      ))}
      {status && <p role="status">{status}</p>}
    </details>
  );
}

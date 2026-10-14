import { useState } from "react";
import { audioAssetsFor } from "./stemAnalysis";
import suggestions from "./hqWordSuggestions.json";
export default function AudioAssetsPanel({ hash }: { hash: string }) {
  const source = audioAssetsFor(hash),
    [selected, setSelected] = useState("master");
  if (!source) return null;
  const alternatives = [
    { key: "master", label: "Native full-song WAV", url: source.master.url },
    {
      key: "reconstructed",
      label: "Reconstructed 24-bit stem mix",
      url: source.reconstruction.url,
    },
    ...source.assets
      .filter((a) => a.sha256 !== source.master.sha256)
      .map((a) => ({ key: a.sha256, label: a.name, url: a.url })),
  ];
  const asset = alternatives.find((a) => a.key === selected) ?? alternatives[0],
    analysis = suggestions.find((s) => s.canonicalAudioHash === hash);
  return (
    <details className="native-audio-assets">
      <summary>Native WAV + all stems · timestamp analysis v1</summary>
      <p>
        Native master · 48 kHz / 16-bit stereo · verified zero time offset. {source.assets.length}{" "}
        retained files; {source.lanes.length} instrument/vocal onset lanes.
      </p>
      <label>
        Audio asset{" "}
        <select
          aria-label="Audio asset"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {alternatives.map((a) => (
            <option key={a.key} value={a.key}>
              {a.label}
            </option>
          ))}
        </select>
      </label>
      <audio
        controls
        preload="none"
        key={asset.url}
        src={asset.url}
        aria-label="Selected native audio asset"
      />
      <p>Stem reconstruction is a derived mix; native master is the playback default.</p>
      <details>
        <summary>
          Word estimates · {analysis?.matchedWords}/{analysis?.expectedWords} matched
        </summary>
        <p>
          Independent recognition on isolated vocals. Word confidence does not certify timestamp
          accuracy. Human edits and approvals remain authoritative.
        </p>
        <div style={{ maxHeight: 280, overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Start</th>
                <th>End</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {analysis?.suggestions.map((w) => (
                <tr key={w.id}>
                  <td>{w.text}</td>
                  <td>{w.start.toFixed(3)}</td>
                  <td>{w.end.toFixed(3)}</td>
                  <td>{Math.round(w.probability * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      <details>
        <summary>Analysis of all stems</summary>
        {source.lanes.map((l) => (
          <p key={l.id}>
            {l.label}: {l.events.length} measured onset candidates
          </p>
        ))}
      </details>
    </details>
  );
}

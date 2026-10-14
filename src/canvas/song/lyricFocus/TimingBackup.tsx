import { useEffect, useState } from "react";
export default function TimingBackup({
  data,
  filename,
  disabled,
}: {
  data: unknown;
  filename: string;
  disabled: boolean;
}) {
  const [prepared, setPrepared] = useState<{ text: string; url: string } | null>(null);
  useEffect(
    () => () => {
      if (prepared) URL.revokeObjectURL(prepared.url);
    },
    [prepared],
  );
  return (
    <div className="timing-backup">
      <button
        disabled={disabled}
        onClick={() => {
          const text = JSON.stringify(data, null, 2);
          setPrepared({
            text,
            url: URL.createObjectURL(new Blob([text], { type: "application/json" })),
          });
        }}
      >
        Export timing &amp; history
      </button>
      {prepared && (
        <div>
          <p role="status">
            Saved timing backup prepared. Download the file or copy the JSON below. Unsaved
            adjustments are not included.
          </p>
          <a href={prepared.url} download={filename}>
            Download timing backup
          </a>
          <details>
            <summary>Copyable backup JSON</summary>
            <textarea aria-label="Prepared timing backup" readOnly value={prepared.text} rows={6} />
          </details>
        </div>
      )}
    </div>
  );
}

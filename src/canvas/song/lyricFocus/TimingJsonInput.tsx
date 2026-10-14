import { useEffect, useState } from "react";

export default function TimingJsonInput({
  value,
  onChange,
  disabled,
  onLoading,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  onLoading: (loading: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!value) setMessage("");
  }, [value]);
  return (
    <div className="timing-json-input">
      <label>
        Open a timing backup
        <input
          type="file"
          accept=".json,application/json"
          disabled={disabled || loading}
          onChange={async (event) => {
            const input = event.currentTarget;
            const file = input.files?.[0];
            if (!file) return;
            setLoading(true);
            onLoading(true);
            setMessage(`Reading ${file.name}…`);
            try {
              const text = await file.text();
              JSON.parse(text);
              onChange(text);
              setMessage(
                `${file.name} loaded. Choose Import matching timing to apply it. No timing has changed yet.`,
              );
            } catch {
              setMessage(
                "Could not read valid JSON from this file. Previous import text and saved timing are unchanged.",
              );
            } finally {
              input.value = "";
              setLoading(false);
              onLoading(false);
            }
          }}
        />
      </label>
      {message && <p role="status">{message}</p>}
      <label>
        Or paste exact-source timing JSON
        <textarea
          aria-label="Annotation JSON"
          value={value}
          disabled={disabled || loading}
          onChange={(event) => {
            onChange(event.target.value);
            setMessage("");
          }}
        />
      </label>
    </div>
  );
}

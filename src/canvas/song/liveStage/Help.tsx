import { useState } from "react";
export default function Help({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className={`context-help ${open ? "help-open" : ""}`}>
      <button
        type="button"
        aria-label="Explain this control"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        ?
      </button>
      <span role="tooltip">{text}</span>
    </span>
  );
}

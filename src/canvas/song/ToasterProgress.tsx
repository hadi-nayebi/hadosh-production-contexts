import history from "./toaster-iterations.json";
export default function ToasterProgress() {
  return (
    <details className="song-card">
      <summary>
        <strong>Superseded toaster pilot · retained history</strong>
      </summary>
      <p>
        This history is superseded by the browser-first Departments treatment. Revision 6 was
        melody-forward. Reference analysis separates spoken setup, instrumental passages, sung
        sections and repeated responses. We copy design principles, not the reference song.
      </p>
      <details>
        <summary>Reference structure · approximate evidence</summary>
        <p>
          Spoken setup over the bed at roughly 3–14 seconds; main sung narrative starts near 34
          seconds. A title/character sequence occupies the intervening opening. Repeated choruses
          and vocal responses create contrast; they are not all instrumental breaks. The final
          chorus continues beyond 266 seconds—an ASR gap there was corrected against advancing
          visual lyrics and a stronger ending transcription. Credits also include a chant before the
          spoken callback.
        </p>
        <p>
          These are approximate editorial boundaries, not a verified beat grid. Reference analysis
          and Suno workflow sources are recorded in the branch documentation.
        </p>
      </details>
      <p>
        Changed the old instruction “minimal instrumental gaps”: no continuous rap, an instrumental
        opening, musical answers, dedicated breaks, a contrasting bridge and an instrumental outro.
        The arrangement is editable in Music. Audio and actual alignment remain pending.
      </p>
      <details>
        <summary>Original revision 1 · retained</summary>
        {history.baseline.map((l, i) => (
          <p key={i}>{l.text}</p>
        ))}
      </details>
      {history.passes.map((p) => (
        <details key={p.version}>
          <summary>
            Pass {p.version - 1} → revision {p.version}: {p.focus}
          </summary>
          <p>{p.finding}</p>
          {p.lines.map((l, i) => (
            <p key={i}>
              <small>{l.section}</small> · {l.text}
            </p>
          ))}
        </details>
      ))}
      <p>
        Motion design: one visual situation per concept, recurring toaster/cable/workspace objects,
        stable color roles, phrase-synchronized emphasis and beat-synchronized secondary movement.
        Instrumental passages explain and transition; avoid filling every second with new text.
      </p>
      <p>
        Part A was an earlier proposed generation checkpoint; no generation is currently requested.
        Timing estimates are an arrangement plan, not a promise of generation accuracy.
      </p>
    </details>
  );
}

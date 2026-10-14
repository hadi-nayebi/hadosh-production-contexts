import { useEffect, useMemo, useState, useRef, type RefObject } from "react";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import review from "./sectionReview.json";

export function sectionCompletion(annotation: Annotation, number: number) {
  const record = review.sections.find((s) => s.number === number);
  const matches = annotation.audioHash === review.audioHash;
  const current =
    matches &&
    annotation.revision === review.annotationRevision &&
    wordTiming(annotation).revision === review.wordRevision;
  const tasks = current ? (record?.tasks ?? []) : [];
  const checks = [
    { label: "Scene built", done: matches && !!record?.built },
    { label: "Visual plan", done: matches && !!record?.plan },
    { label: "Sampled visual audit", done: current && !!record?.sampledAudit },
    { label: "Your scene approval", done: current && !!record?.creativeApproved },
  ];
  const fixes = tasks.length ? tasks.filter((t) => t.done).length / tasks.length : 0;
  return {
    percent: Math.round(20 * (checks.filter((c) => c.done).length + fixes)),
    checks,
    tasks,
    story: matches ? record?.story : undefined,
    current,
    quality: current && record && "quality" in record ? record.quality : null,
  };
}
export function songSectionIntervals(annotation: Annotation, labels: Record<string, string>) {
  const sections: { id: string; label: string; start: number; end: number }[] = [];
  let i = 0;
  while (i < annotation.items.length) {
    const first = i,
      id = annotation.items[i].groupId;
    while (i < annotation.items.length && annotation.items[i].groupId === id) i++;
    const number = Number(id.split(":section:").at(-1));
    sections.push({
      id,
      label:
        labels[id] ??
        review.sections.find((s) => s.number === number)?.story ??
        `Section ${sections.length + 1}`,
      start: annotation.boundaries[first],
      end: annotation.boundaries[i],
    });
  }
  return sections;
}
const stamp = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
export default function SectionProgress({
  annotation,
  audio,
  labels,
  onSeek,
}: {
  annotation: Annotation;
  audio: RefObject<HTMLAudioElement | null>;
  labels: Record<string, string>;
  onSeek: (time: number) => void;
}) {
  const [time, setTime] = useState(audio.current?.currentTime ?? 0);
  const rail = useRef<HTMLElement>(null);
  const sections = useMemo(() => songSectionIntervals(annotation, labels), [annotation, labels]);
  useEffect(() => {
    const media = audio.current;
    if (!media) return;
    const sync = () => setTime(media.currentTime);
    sync();
    for (const event of ["timeupdate", "seeking", "loadedmetadata"])
      media.addEventListener(event, sync);
    return () => {
      for (const event of ["timeupdate", "seeking", "loadedmetadata"])
        media.removeEventListener(event, sync);
    };
  }, [audio, annotation]);
  const active = sections.find((n) => time >= n.start && time < n.end) ?? sections.at(-1);
  useEffect(() => {
    const nav = rail.current,
      card = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (nav && card) {
      const x = card.offsetLeft - nav.offsetLeft;
      if (x < nav.scrollLeft || x + card.offsetWidth > nav.scrollLeft + nav.clientWidth)
        nav.scrollTo({
          left: Math.max(0, x - nav.clientWidth / 2 + card.offsetWidth / 2),
          behavior: "smooth",
        });
    }
  }, [active?.id]);
  const activeNumber = Number(active?.id.split(":section:").at(-1));
  const progress = sectionCompletion(annotation, activeNumber);
  const seek = (t: number) => {
    setTime(t);
    onSeek(t);
  };
  return (
    <section className="section-progress" aria-label="Song section completion">
      <div className="section-progress-heading">
        <span>Sections</span>
        <span>
          {stamp(time)} / {stamp(annotation.duration)}
        </span>
        <details>
          <summary>Completion · checklist</summary>
          <p>
            Scene, visual plan, sampled audit, fixes and your approval each contribute 20%. The fix
            stage counts closed tasks. Quality ratings come from your review and are shown
            separately.
          </p>
        </details>
      </div>
      <input
        className="section-progress-slider"
        aria-label="Seek song sections"
        type="range"
        min={0}
        max={annotation.duration}
        step={0.01}
        value={time}
        onChange={(e) => seek(Number(e.target.value))}
      />
      <nav ref={rail} className="section-progress-rail" aria-label="Song sections">
        {sections.map((n, i) => {
          const number = Number(n.id.split(":section:").at(-1)),
            p = sectionCompletion(annotation, number);
          return (
            <button
              key={n.id}
              aria-current={n.id === active?.id ? "true" : undefined}
              aria-label={`${i + 1}. ${n.label}, ${p.percent}% complete, ${stamp(n.start)}`}
              onClick={() => seek(n.start + 0.001)}
            >
              <span className="section-progress-top">
                <span>
                  {i + 1} · {stamp(n.start)}
                </span>
                <strong>{p.percent}%</strong>
              </span>
              <span className="section-progress-label">{n.label.replace(/\s*5 sec\s*/i, "")}</span>
              {p.quality && (
                <span
                  data-section-quality={number}
                  style={{ fontSize: ".75rem", color: "var(--text,#d4e0e8)" }}
                >
                  Quality {p.quality.score}/100 · {p.quality.source}
                </span>
              )}
              <span className="section-progress-meter">
                <span style={{ width: p.percent + "%" }} />
              </span>
            </button>
          );
        })}
      </nav>
      <details className="section-progress-checks">
        <summary>
          {progress.story ?? active?.label} · {progress.percent}% complete
        </summary>
        {!progress.current && <p>This timing version needs a fresh visual audit.</p>}
        <ul>
          {progress.checks.map((c) => (
            <li key={c.label}>
              {c.done ? "✓" : "○"} {c.label}
            </li>
          ))}
          {progress.tasks.map((t) => (
            <li key={t.label}>
              {t.done ? "✓" : "○"} {t.label}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

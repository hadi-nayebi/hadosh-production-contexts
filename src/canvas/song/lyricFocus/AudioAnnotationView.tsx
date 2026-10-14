import TimingBackup from "./TimingBackup";
import { readSavedAnnotation, saveAnnotationCheckpoint } from "./annotationStorage";
import {
  changePhrase,
  phraseAt,
  phraseIntervals,
  phraseLimits,
  validatePhraseTiming,
} from "./phraseTiming";
import { saveTimingBeforeNavigation, useTimingNavigationSave } from "./timingNavigation";
import FullAudioView from "./FullAudioView";
import TimingJsonInput from "./TimingJsonInput";
import { importRhythm } from "./importRhythm";
import { useTimingHistory } from "./useTimingHistory";
import WordRepairEditor from "./WordRepairEditor";
import { parseWordRepair } from "./wordRepair";
import { buildWordPreview, readPreviewHistory, previewStale } from "./wordPreviewStore";
import {
  adjustWord,
  undoWordTiming,
  wordEdge,
  wordLimits,
  wordTiming,
  validateWordTiming,
  wordTimingProblem,
} from "./wordTiming";
import SourceSpectrogram from "./SourceSpectrogram";
import {
  eligibleAnchors,
  approveAnchor,
  approveWordTiming,
  emptyReview,
  type Anchor,
} from "./anchorReview";
import type { TapReceipt } from "./stampPractice";
import { timedContainers, exportAudioAnchors, type Performance } from "./audioAnchors";
import TimingPlayback from "./TimingPlayback";
import BoundarySlider from "./BoundarySlider";
import { useEffect, useMemo, useRef, useState } from "react";
import { annotationIdentity } from "./audioIdentity";
import type { Draft } from "./model";
import { cachedAudio, rememberAudio } from "../audioCache";
import { lyricStamp } from "./arrangement";
import {
  freshAnnotation,
  parseAnnotation,
  adjustBoundary,
  undoAnnotation,
  annotationGroups,
  boundaryLimits,
  type Annotation,
} from "./audioAnnotation";
import "./audio-annotation.css";
export default function AudioAnnotationView({
  draft,
  practice,
  onBack,
  candidate,
  onDirtyChange,
  onFocusChange,
  onPreview,
}: {
  draft: Draft;
  practice: boolean;
  onBack: () => void;
  onPreview?: () => void;
  onDirtyChange?: (dirty: boolean) => void;
  onFocusChange?: (focused: boolean) => void;
  candidate?: {
    id: string;
    performance?: Performance;
    audioUrl: string;
    rhythmSource?: string;
    playbackUrl?: string;
    playbackSha256?: string;
    playbackFormat?: string;
    annotation: Annotation;
    lanes: {
      id: string;
      label: string;
      events: { id: string; time: number; strength: number }[];
    }[];
  };
}) {
  const prefix = `canvas-audio-annotation:${practice ? "practice" : "real"}:${candidate?.annotation.lyricStamp ?? lyricStamp(draft)}`;
  const [a, setA] = useState<Annotation | null>(null),
    [src, setSrc] = useState(""),
    [message, setMessage] = useState(""),
    [selected, setSelected] = useState<number | null>(null),
    [edit, setEdit] = useState(""),
    [now, setNow] = useState(0),
    [playing, setPlaying] = useState(false),
    [busy, setBusy] = useState(false),
    [importText, setImportText] = useState("");
  const [phraseUnlocked, setPhraseUnlocked] = useState(false);
  const [importLoading, setImportLoading] = useState(false);
  const [target, setTarget] = useState<{
    first: number;
    last: number;
    label: string;
    kind: string;
    rhythmId?: string;
  } | null>(null);
  const [fullAudio, setFullAudio] = useState(false),
    [fullDirty, setFullDirty] = useState(false),
    [editorOrigin, setEditorOrigin] = useState<"full" | "section">("section");
  const [previewBusy, setPreviewBusy] = useState(false);
  const [previewStatus, setPreviewStatus] = useState("Loading preview history…");
  useEffect(() => {
    if (!candidate || !a) return;
    let alive = true;
    readPreviewHistory(localStorage, candidate.annotation, `${prefix}:${a.audioHash}:word-previews`)
      .then((history) => {
        if (!alive) return;
        const last = history.at(-1);
        setPreviewStatus(
          last
            ? previewStale(last.annotation, a)
              ? "Preview stale — saved timing changed"
              : "Preview matches saved timing"
            : "No saved preview yet",
        );
      })
      .catch(() => {
        if (alive) setPreviewStatus("Preview history needs recovery");
      });
    return () => {
      alive = false;
    };
  }, [a, candidate?.id, previewBusy, prefix]);
  const [repairOpen, setRepairOpen] = useState(false),
    [repairActive, setRepairActive] = useState(false),
    [repairUnsaved, setRepairUnsaved] = useState(false);
  const [frequencyReady, setFrequencyReady] = useState(false);
  const [overviewTools, setOverviewTools] = useState(false);
  const [picking, setPicking] = useState(false);
  const [focusTools, setFocusTools] = useState(false);
  const [showRhythm, setShowRhythm] = useState(false);
  const [pendingTap, setPendingTap] = useState<TapReceipt | null>(null);
  const [edge, setEdge] = useState<"start" | "end">("start");
  const [practiceBusy, setPracticeBusy] = useState(false);
  const [practiceReset, setPracticeReset] = useState(0);
  const sectionScroll = useRef(0),
    overviewScroll = useRef(0);
  const inspector = useRef<HTMLElement>(null);
  const overview = useRef<HTMLDivElement>(null);
  const audio = useRef<HTMLAudioElement>(null),
    raw = useRef<string | null>(null),
    url = useRef(""),
    generation = useRef(0),
    fileInput = useRef<HTMLInputElement>(null);
  const storageKey = (hash: string) => `${prefix}:${hash}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    let alive = true;
    const hash = localStorage.getItem(`${prefix}:source`);
    if (candidate && (!hash || candidate.playbackUrl)) {
      void fetch(candidate.playbackUrl ?? candidate.audioUrl)
        .then((r) => {
          if (!r.ok) throw new Error("Local candidate audio unavailable.");
          return r.arrayBuffer();
        })
        .then((blob) => {
          if (alive)
            void attach(
              new File([blob], candidate.annotation.filename, {
                type: candidate.playbackUrl ? "audio/wav" : "audio/mpeg",
              }),
            );
        })
        .catch((e) => {
          if (alive) setMessage(`Recording could not load. Reload to retry. ${String(e)}`);
        });
    }
    if (hash && !candidate?.playbackUrl)
      void cachedAudio(`annotation:${hash}`)
        .then((file) => {
          if (alive && file) void attach(file, false);
          else if (alive)
            setMessage("Saved annotations retained. Reattach the exact audio file to resume.");
        })
        .catch(() => setMessage("Audio cache unavailable; reattach your file."));
    return () => {
      alive = false;
      generation.current++;
      audio.current?.pause();
      if (url.current) URL.revokeObjectURL(url.current);
    };
  }, [prefix, candidate?.playbackUrl, candidate?.playbackSha256]);
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (audio.current) setNow(audio.current.currentTime);
      frame = requestAnimationFrame(tick);
    };
    if (playing && selected === null) frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, selected]);
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (a && e.key === storageKey(a.audioHash) && e.newValue !== raw.current) {
        audio.current?.pause();
        setMessage(
          "Annotations changed in another tab. Reload before saving; your local adjustment is retained.",
        );
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [a, prefix]);
  async function attach(file: File, saveFile = true) {
    const token = ++generation.current;
    setBusy(true);
    audio.current?.pause();
    setPlaying(false);
    setMessage("Reading audio identity and decoded duration…");
    let context: AudioContext | null = null;
    try {
      if (file.size > 100 * 1024 * 1024 || !file.type.startsWith("audio/"))
        throw new Error("Choose audio under100 MB.");
      const bytes = await file.arrayBuffer();
      const digest = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)), (b) =>
        b.toString(16).padStart(2, "0"),
      ).join("");
      const hash = annotationIdentity(digest, candidate);
      context = new AudioContext();
      let timer: ReturnType<typeof setTimeout>;
      const decoded = await Promise.race([
        context.decodeAudioData(bytes),
        new Promise<never>((_, reject) => {
          timer = setTimeout(
            () => reject(new Error("Audio decoding timed out. Try a supported audio file.")),
            20000,
          );
        }),
      ]).finally(() => clearTimeout(timer!));
      if (token !== generation.current) return;
      const existing = await readSavedAnnotation(localStorage, storageKey(hash));
      const next = existing
        ? parseAnnotation(existing, draft, hash, decoded.duration, candidate?.annotation)
        : candidate
          ? structuredClone(candidate.annotation)
          : freshAnnotation(draft, hash, decoded.duration, file.name);
      if (
        candidate &&
        (hash !== candidate.annotation.audioHash ||
          Math.abs(decoded.duration - candidate.annotation.duration) > 0.002)
      )
        throw new Error(
          "This audio does not match the selected candidate. Switch candidates before attaching it.",
        );
      if (saveFile) await rememberAudio(`annotation:${hash}`, file);
      if (token !== generation.current) return;
      const initial = existing || JSON.stringify(next);
      if (!existing) await saveAnnotationCheckpoint(localStorage, storageKey(hash), null, initial);
      localStorage.setItem(`${prefix}:source`, hash);
      raw.current = initial;
      if (url.current) URL.revokeObjectURL(url.current);
      url.current = URL.createObjectURL(file);
      setSrc(url.current);
      setA(next);
      try {
        const repair = localStorage.getItem(`${storageKey(hash)}:word-repair`);
        setRepairActive(!!repair && parseWordRepair(repair, next).active);
      } catch {
        setRepairActive(true);
      }
      setSelected(null);
      setTarget(null);
      try {
        const t = JSON.parse(localStorage.getItem(`${storageKey(hash)}:target`) || "null");
        const navigation = JSON.parse(
          localStorage.getItem(`${storageKey(hash)}:navigation`) || "null",
        );
        setFullAudio(navigation?.view === "full");
        setEditorOrigin(navigation?.origin === "full" ? "full" : "section");
        if (
          navigation?.view !== "overview" &&
          navigation?.view !== "full" &&
          t &&
          Number.isInteger(t.first) &&
          Number.isInteger(t.last) &&
          t.first >= 0 &&
          t.last >= t.first &&
          t.last < next.items.length &&
          ["start", "end"].includes(t.edge)
        ) {
          const r = t.rhythmId ? next.review?.rhythm.find((v) => v.id === t.rhythmId) : null;
          const p = candidate?.performance?.phrases.find(
            (v) => v.first === t.first && v.last === t.last,
          );
          const c = candidate?.performance?.containers.find(
            (v) => v.first === t.first && v.last === t.last,
          );
          const label =
            r?.label ??
            (t.kind === "word" && t.first === t.last
              ? next.items[t.first].text
              : t.kind === "phrase"
                ? p?.text
                : t.kind === "section"
                  ? c?.label
                  : undefined);
          if (label) {
            const i = t.edge === "end" ? t.last + 1 : t.first;
            setTarget({ first: t.first, last: t.last, label, kind: t.kind, rhythmId: r?.id });
            setEdge(t.edge);
            setSelected(i);
            setEdit(
              String(
                r?.time ??
                  (t.kind === "word" && next.items[t.first].kind === "lyric"
                    ? wordEdge(next, t.first, t.edge)
                    : t.kind === "phrase"
                      ? phraseAt(next, t.first, t.last)[t.edge as "start" | "end"]
                      : next.boundaries[i]),
              ),
            );
            setPicking(navigation?.view === "collection");
            sectionScroll.current = Number.isFinite(navigation?.sectionScroll)
              ? navigation.sectionScroll
              : 0;
            overviewScroll.current = Number.isFinite(navigation?.overviewScroll)
              ? navigation.overviewScroll
              : 0;
            setFocusTools(false);
            setPracticeReset((v) => v + 1);
          }
        }
      } catch {}
      setNow(0);
      setMessage(
        existing
          ? "Exact-source annotation restored."
          : "Audio attached. New anchors are estimates; listen and align them. Previous sources remain stored.",
      );
    } catch (e) {
      if (token === generation.current) setMessage(String(e));
    } finally {
      await context?.close();
      if (token === generation.current) setBusy(false);
    }
  }
  async function updatePreview() {
    if (!candidate || !a || dirty || previewBusy) return;
    setPreviewBusy(true);
    try {
      audio.current?.pause();
      await buildWordPreview(
        localStorage,
        candidate.annotation,
        practice,
        () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())),
      );
      onPreview?.();
    } catch (e) {
      setMessage(
        `Preview update failed: ${e instanceof Error ? e.message : String(e)}. Previous preview retained.`,
      );
    } finally {
      setPreviewBusy(false);
    }
  }
  const savingRef = useRef(false);
  const [saving, setSaving] = useState(false);
  async function save(next: Annotation) {
    if (!a || savingRef.current) return false;
    savingRef.current = true;
    setSaving(true);
    try {
      validateWordTiming(next);
      validatePhraseTiming(next);
      const text = JSON.stringify(next);
      await saveAnnotationCheckpoint(localStorage, storageKey(a.audioHash), raw.current, text);
      raw.current = text;
      setA(next);
      if (target && selected !== null) {
        try {
          localStorage.setItem(
            `${storageKey(next.audioHash)}:target`,
            JSON.stringify({ ...target, edge }),
          );
        } catch {}
      }
      setMessage(
        `Timing saved · words r${next.wordTiming?.revision ?? 1}, coverage r${next.revision}. Audio and lyric wording unchanged.`,
      );
      return true;
    } catch (e) {
      setMessage(`Save failed: ${e instanceof Error ? e.message : String(e)}`);
      return false;
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }
  useEffect(() => {
    if (!a) return;
    const frame = requestAnimationFrame(() => {
      if (selected === null) window.scrollTo(0, overviewScroll.current);
      else if (picking) window.scrollTo(0, sectionScroll.current);
      else inspector.current?.scrollIntoView({ block: "start", behavior: "auto" });
    });
    try {
      localStorage.setItem(
        `${storageKey(a.audioHash)}:navigation`,
        JSON.stringify({
          view: fullAudio
            ? "full"
            : selected === null
              ? "overview"
              : picking
                ? "collection"
                : "editor",
          origin: editorOrigin,
          sectionScroll: sectionScroll.current,
          overviewScroll: overviewScroll.current,
        }),
      );
    } catch {
      /* Timing saves are independent of optional navigation memory. */
    }
    return () => cancelAnimationFrame(frame);
  }, [selected, picking, fullAudio, editorOrigin, !!a]);
  function choose(
    first: number,
    last = first,
    label = a?.items[first]?.text ?? "",
    kind = "word",
    which: "start" | "end" = "start",
  ) {
    if (!a || practiceBusy) return;
    if (repairUnsaved) {
      setMessage("Keep or export the unsaved repair before changing targets.");
      return;
    }
    if (
      selected !== null &&
      edit !==
        String(
          target?.rhythmId
            ? a.review?.rhythm.find((r) => r.id === target.rhythmId)?.time
            : target?.kind === "word" && a.items[target.first].kind === "lyric"
              ? wordEdge(a, target.first, edge)
              : target?.kind === "phrase"
                ? phraseAt(a, target.first, target.last)[edge]
                : a.boundaries[selected],
        )
    ) {
      setMessage("Save or discard this adjustment before selecting another item.");
      return;
    }
    if (picking) sectionScroll.current = window.scrollY;
    if (selected === null) {
      overviewScroll.current = window.scrollY;
      sectionScroll.current = 0;
    }
    audio.current?.pause();
    const i = which === "start" ? first : last + 1;
    setPendingTap(null);
    setPicking(false);
    setFocusTools(false);
    setTarget({ first, last, label, kind });
    try {
      localStorage.setItem(
        `${storageKey(a.audioHash)}:target`,
        JSON.stringify({ first, last, label, kind, edge: which }),
      );
    } catch {
      setMessage("Target position could not be remembered. Timing is unchanged.");
    }
    setEdge(which);
    setSelected(i);
    const time =
      kind === "word" && a.items[first].kind === "lyric"
        ? wordEdge(a, first, which)
        : kind === "phrase"
          ? phraseAt(a, first, last)[which]
          : a.boundaries[i];
    setEdit(String(time));
    setPracticeReset((v) => v + 1);
    seek(time);
  }
  function seek(t: number) {
    if (audio.current && a) {
      audio.current.currentTime = Math.max(0, Math.min(a.duration, t));
      setNow(audio.current.currentTime);
    }
  }
  const groups = useMemo(
    () =>
      a
        ? candidate?.performance
          ? timedContainers(a, candidate.performance.containers)
          : annotationGroups(a)
        : [],
    [a, candidate?.performance],
  );
  const group =
      target === null
        ? null
        : groups.find((g) => target.first >= g.first && target.first <= g.last),
    dirty =
      fullDirty ||
      repairUnsaved ||
      (a &&
        selected !== null &&
        edit !==
          String(
            target?.rhythmId
              ? a.review?.rhythm.find((r) => r.id === target.rhythmId)?.time
              : target?.kind === "word" && a.items[target.first].kind === "lyric"
                ? wordEdge(a, target.first, edge)
                : target?.kind === "phrase"
                  ? phraseAt(a, target.first, target.last)[edge]
                  : a.boundaries[selected],
          ));
  useTimingHistory(
    `${prefix}:${a?.audioHash ?? ""}`,
    !!a,
    { selected, target, edge, picking, full: fullAudio, origin: editorOrigin },
    !!dirty || practiceBusy,
    (v) => {
      if (!a) return;
      if (
        v.target &&
        (!Number.isInteger(v.target.first) ||
          !Number.isInteger(v.target.last) ||
          v.target.first < 0 ||
          v.target.last >= a.items.length ||
          v.target.last < v.target.first)
      )
        return;
      audio.current?.pause();
      setFullAudio(!!v.full);
      setEditorOrigin(v.origin ?? "section");
      setFocusTools(false);
      setRepairOpen(false);
      setPicking(v.picking);
      setTarget(v.target);
      setSelected(v.selected);
      setEdge(v.edge);
      if (v.target && v.selected !== null) {
        const time = v.target.rhythmId
          ? a.review?.rhythm.find((r) => r.id === v.target?.rhythmId)?.time
          : v.target.kind === "word"
            ? wordEdge(a, v.target.first, v.edge)
            : v.target.kind === "phrase"
              ? phraseAt(a, v.target.first, v.target.last)[v.edge]
              : a.boundaries[v.selected];
        if (time !== undefined) setEdit(String(time));
      }
    },
    () => setMessage("Save, keep, or discard the current adjustment before going back."),
  );
  async function parentView() {
    if (practiceBusy || (dirty && !(await saveTimingBeforeNavigation()))) return;
    audio.current?.pause();
    setFocusTools(false);
    setRepairOpen(false);
    if (picking) {
      setPicking(false);
      setSelected(null);
      setTarget(null);
      setFullAudio(false);
      setEditorOrigin("section");
    } else if (editorOrigin === "full") {
      setSelected(null);
      setTarget(null);
      setPicking(false);
      setFullAudio(true);
    } else setPicking(true);
  }
  const anchors = useMemo(
    () =>
      a
        ? eligibleAnchors(
            a,
            groups.map((g) => ({ ...g, label: g.text })),
            candidate?.performance?.phrases ?? [],
          )
        : [],
    [a, groups, candidate?.performance],
  );
  const isWord = !!a && target?.kind === "word" && a.items[target.first].kind === "lyric";
  const isPhrase = !!a && target?.kind === "phrase";
  const currentAnchor = anchors.find(
    (v) =>
      v.id ===
      (target?.rhythmId ??
        (isWord
          ? `word:${a!.items[target!.first].id}:${edge}`
          : isPhrase
            ? `phrase:${phraseAt(a!, target!.first, target!.last).id}:${edge}`
            : `boundary:${selected}`)),
  );
  const storedTime = target?.rhythmId
    ? (currentAnchor?.time ?? 0)
    : a && selected !== null
      ? isWord
        ? wordEdge(a, target!.first, edge)
        : target?.kind === "phrase"
          ? phraseAt(a, target.first, target.last)[edge]
          : a.boundaries[selected]
      : 0;
  const fixed =
    !!a &&
    !isWord &&
    !isPhrase &&
    !target?.rhythmId &&
    (selected === 0 || selected === a.items.length);
  const limits =
    a && selected !== null
      ? target?.rhythmId
        ? { min: group?.start ?? 0, max: group?.end ?? a.duration }
        : fixed
          ? { min: storedTime, max: storedTime }
          : isWord
            ? wordLimits(a, target!.first, edge)
            : isPhrase
              ? phraseLimits(a, phraseAt(a, target!.first, target!.last), edge)
              : boundaryLimits(a, selected)
      : { min: 0, max: 0 };
  const vocalIndices = a?.items.flatMap((w, i) => (w.kind === "lyric" ? [i] : [])) ?? [];
  const vocalPosition = isWord ? vocalIndices.indexOf(target!.first) : -1;
  const moveWord = (by: -1 | 1) => {
    if (!a || dirty || practiceBusy || !isWord) return;
    const i = vocalIndices[vocalPosition + by];
    if (i !== undefined) choose(i, i, a.items[i].text, "word", edge);
  };
  function chooseAnchor(anchor: Anchor, fromFull = false) {
    if (!a || (!fromFull && dirty) || practiceBusy) return;
    if (anchor.wordIndex !== undefined) {
      choose(anchor.wordIndex, anchor.wordIndex, anchor.label, "word", anchor.edge);
      return;
    }
    if (anchor.phraseId) {
      const p = candidate?.performance?.phrases.find((p) => p.id === anchor.phraseId);
      if (p) choose(p.first, p.last, p.text, "phrase", anchor.edge);
      return;
    }
    if (anchor.index !== undefined) {
      const g = groups.find((g) => g.id === anchor.sectionId)!;
      const index = anchor.index;
      if (index === a.items.length) choose(g.first, g.last, g.text, "section", "end");
      else if (anchor.types.includes("section start")) choose(g.first, g.last, g.text, "section");
      else {
        const p = candidate?.performance?.phrases.find(
          (p) => p.first === index || p.last + 1 === index,
        );
        if (p) choose(p.first, p.last, p.text, "phrase", p.first === index ? "start" : "end");
      }
    } else {
      const g = groups.find((g) => g.id === anchor.sectionId)!;
      audio.current?.pause();
      setPicking(false);
      setFocusTools(false);
      setTarget({
        first: g.first,
        last: g.last,
        label: anchor.label,
        kind: "rhythm",
        rhythmId: anchor.id,
      });
      setSelected(g.first);
      setEdge("start");
      setEdit(String(anchor.time));
      setPendingTap(null);
      setPracticeReset((v) => v + 1);
      seek(anchor.time);
    }
  }
  async function saveAdjustment() {
    if (!a || selected === null || !currentAnchor) return false;
    try {
      if (isPhrase && !phraseUnlocked)
        throw new Error("Unlock this phrase and its words before resizing.");
      if (!edit.trim()) throw new Error("Enter seconds.");
      const time = Number(edit);
      if (!Number.isFinite(time) || time < limits.min || time > limits.max)
        throw new Error("Keep the anchor inside its neighbouring boundaries.");
      let next: Annotation;
      if (target?.rhythmId) {
        const review = structuredClone(a.review ?? emptyReview());
        const r = review.rhythm.find((v) => v.id === target.rhythmId)!;
        r.history = [...(r.history ?? []), r.time];
        r.time = time;
        r.revision++;
        next = { ...a, review };
      } else
        next = isWord
          ? adjustWord(a, a.items[target!.first].id, edge, time)
          : isPhrase
            ? changePhrase(a, phraseAt(a, target!.first, target!.last).id, edge, time)
            : adjustBoundary(a, selected, time);
      if (pendingTap) {
        const review = structuredClone(next.review ?? emptyReview());
        review.taps.push({ id: currentAnchor.id, revision: next.revision, receipt: pendingTap });
        next = { ...next, review };
      }
      if (await save(next)) {
        setPendingTap(null);
        return true;
      }
      return false;
    } catch (e) {
      setMessage(String(e));
      return false;
    }
  }
  useTimingNavigationSave(!fullAudio, () => {
    if (!dirty && !practiceBusy) return true;
    if (practiceBusy || repairUnsaved) {
      setMessage("Finish or discard the current repair before leaving.");
      return false;
    }
    return saveAdjustment();
  });
  function pickerTiming(first: number, last: number, kind: "word" | "phrase") {
    const ids =
      kind === "word" && a
        ? [`word:${a.items[first].id}:start`, `word:${a.items[first].id}:end`]
        : a
          ? [
              `phrase:${phraseAt(a, first, last).id}:start`,
              `phrase:${phraseAt(a, first, last).id}:end`,
            ]
          : [];
    const approved = ids.every((id) => anchors.find((v) => v.id === id)?.status === "approved");
    return {
      "data-timing-status": approved ? "approved" : "pending",
      "aria-description": approved
        ? "Current start and end timing approved"
        : "Start and end timing needs review",
    };
  }
  const wordPairApproved =
    !!a &&
    isWord &&
    (["start", "end"] as const).every(
      (which) =>
        anchors.find((v) => v.id === `word:${a.items[target!.first].id}:${which}`)?.status ===
        "approved",
    );
  function approveWordDraft() {
    if (!a || !isWord || !target || repairActive || (candidate && !frequencyReady)) return;
    try {
      if (!edit.trim()) throw new Error("Enter seconds.");
      const next = approveWordTiming(
        a,
        a.items[target.first].id,
        edge,
        Number(edit),
        groups.map((g) => ({ ...g, label: g.text })),
        candidate?.performance?.phrases ?? [],
      );
      save(next);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : String(e));
    }
  }
  useEffect(() => {
    setPhraseUnlocked(false);
  }, [target?.kind, target?.first, target?.last, a?.audioHash, a?.revision]);
  let timingCandidate = a;
  let invalidReason = "";
  if (a && selected !== null && dirty) {
    try {
      if (!edit.trim()) throw new Error("Enter seconds.");
      if (isWord) timingCandidate = adjustWord(a, a.items[target!.first].id, edge, Number(edit));
      else if (isPhrase)
        timingCandidate = changePhrase(
          a,
          phraseAt(a, target!.first, target!.last).id,
          edge,
          Number(edit),
        );
      else if (!target?.rhythmId) adjustBoundary(a, selected, Number(edit));
      else if (
        !Number.isFinite(Number(edit)) ||
        Number(edit) < limits.min ||
        Number(edit) > limits.max
      )
        throw new Error("Keep the anchor inside its valid range.");
    } catch (e) {
      invalidReason = e instanceof Error ? e.message : String(e);
    }
  }
  const timingConflict = timingCandidate
    ? wordTimingProblem(timingCandidate, wordTiming(timingCandidate).intervals)
    : null;
  const phrase = candidate?.performance?.phrases.find(
    (p) => target !== null && target.first >= p.first && target.first <= p.last,
  );
  const shownFirst = phrase?.first ?? group?.first ?? 0;
  const shownLast = phrase?.last ?? (candidate?.performance ? shownFirst : (group?.last ?? 0));
  useEffect(() => {
    onDirtyChange?.(!!dirty || practiceBusy || saving);
    return () => onDirtyChange?.(false);
  }, [!!dirty, practiceBusy, saving, onDirtyChange]);
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [!!dirty]);
  useEffect(() => {
    if (selected === null) overview.current?.focus({ preventScroll: true });
    onFocusChange?.(selected !== null || fullAudio);
    return () => onFocusChange?.(false);
  }, [selected !== null, fullAudio, onFocusChange]);
  useEffect(() => {
    if (!message.startsWith("Timing saved")) return;
    const timeout = setTimeout(
      () => setMessage((current) => (current === message ? "" : current)),
      4000,
    );
    return () => clearTimeout(timeout);
  }, [message]);
  return (
    <main
      className={`annotation-space ${selected !== null ? "is-calibrating" : ""}`}
      onKeyDown={(e) => {
        if (e.key !== "Escape" || selected === null) return;
        e.preventDefault();
        if (practiceBusy) {
          setPracticeReset((v) => v + 1);
        } else if (picking) {
          parentView();
        } else if (focusTools) {
          setFocusTools(false);
        } else if (dirty) {
          setFocusTools(true);
        } else {
          parentView();
        }
      }}
    >
      <fieldset disabled={saving} className="timing-save-scope">
        <div className="annotation-heading" hidden={!!a && (selected !== null || !overviewTools)}>
          <button
            disabled={practiceBusy}
            onClick={async () => {
              if (!dirty || (await saveTimingBeforeNavigation())) onBack();
            }}
          >
            Back to lyrics
          </button>
          <p>Phase 2 · Audio annotation{practice ? " · practice" : ""}</p>
          {!a && (
            <p>
              {candidate
                ? "The selected recording is not loaded yet."
                : "Attach a recording to begin."}
            </p>
          )}

          <details className="annotation-data">
            <summary>Recording</summary>
            <label className="annotation-file">
              {a ? "Attach another recording" : "Attach recording"}
              <input
                ref={fileInput}
                aria-label="Attach recording"
                type="file"
                accept="audio/*"
                disabled={busy || !!dirty || practiceBusy}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void attach(f);
                  e.target.value = "";
                }}
              />
            </label>
          </details>
          <p role="status">{message}</p>
        </div>
        {a &&
          message &&
          message !== "Exact-source annotation restored." &&
          (selected !== null || !overviewTools) && (
            <p role="status" className="timing-notice">
              {message}
            </p>
          )}
        {a && (
          <>
            {selected === null && !fullAudio && (
              <button
                className="audio-overview-tools"
                onClick={async () => {
                  audio.current?.pause();
                  setOverviewTools((v) => !v);
                }}
              >
                {overviewTools ? "Back to sections" : "Source & history"}
              </button>
            )}
            <div
              className="annotation-player"
              hidden={selected !== null || overviewTools || fullAudio}
            >
              <button
                onClick={async () => {
                  if (playing) audio.current?.pause();
                  else
                    void audio.current
                      ?.play()
                      .catch(() => setMessage("Playback failed. Reattach a supported audio file."));
                }}
              >
                {playing ? "Pause" : "Play"}
              </button>
              <audio
                hidden
                ref={audio}
                src={src}
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={() => setNow(audio.current?.currentTime || 0)}
                onError={() => setMessage("Playback unavailable. Reattach a supported audio file.")}
              />
              <label>
                Seek{" "}
                <input
                  aria-label="Seek audio"
                  type="range"
                  min="0"
                  max={a.duration}
                  step="0.01"
                  value={now}
                  onChange={(e) => seek(Number(e.target.value))}
                />
              </label>
              <output aria-label="Playback time">
                {now.toFixed(2)} / {a.duration.toFixed(2)}s
              </output>
              <div hidden className="audio-container" aria-label="Full audio timeline">
                {groups.map((g) => (
                  <button
                    key={`${g.id}:${g.first}`}
                    title={`${g.start.toFixed(2)}s ${g.text}`}
                    aria-label={`Start ${g.text}`}
                    className={g.kind}
                    style={{
                      left: `${(g.start / a.duration) * 100}%`,
                      width: `${((g.end - g.start) / a.duration) * 100}%`,
                    }}
                    onClick={async () => {
                      choose(g.first, g.last, g.text, "section");
                      setPicking(true);
                    }}
                  />
                ))}
                <span className="audio-playhead" style={{ left: `${(now / a.duration) * 100}%` }} />
              </div>
              <details hidden>
                <summary>Timing source</summary>
                <small>{a.basis}</small>
              </details>
            </div>
            {candidate && selected === null && overviewTools && (
              <details className="annotation-data" hidden={selected !== null}>
                <summary>Rhythmic lanes · estimated onsets</summary>
                <p>
                  {candidate.rhythmSource
                    ? "Onsets measured independently in twelve isolated WAV stems; these remain candidates for listening review."
                    : "Low/mid/high lanes are mixed-audio spectral-flux transient candidates, not verified beats or isolated instruments. Vocal phrase starts come from authored phrases and ASR timing."}
                </p>
                {candidate.lanes.map((lane) => (
                  <div key={lane.id}>
                    <small>{lane.label}</small>
                    <svg
                      className="rhythm-lane"
                      role="img"
                      aria-label={`${lane.label}: ${lane.events.length} ${candidate.rhythmSource ? "isolated-stem onset candidates" : lane.id === "vocal-phrases" ? "phrase timing markers, not independent rhythm detections" : "mixed-audio transient candidates"}`}
                      viewBox="0 0 1000 55"
                      preserveAspectRatio="none"
                    >
                      {lane.events.map((e) => (
                        <line
                          key={e.id}
                          x1={(e.time / a.duration) * 1000}
                          x2={(e.time / a.duration) * 1000}
                          y1="55"
                          y2={lane.id === "vocal-phrases" ? 20 : 55 - e.strength * 50}
                          stroke="#5e849a"
                        />
                      ))}
                    </svg>
                  </div>
                ))}
              </details>
            )}
            {candidate?.performance && selected === null && overviewTools && (
              <details className="annotation-data" hidden={selected !== null}>
                <summary>Coverage & unresolved listening</summary>
                <p>
                  {candidate.performance.containers.length} sections ·{" "}
                  {candidate.performance.phrases.length} authored performance phrases ·{" "}
                  {a.items.filter((w) => w.kind === "lyric").length} words. Complete{" "}
                  {a.duration.toFixed(3)}s coverage. Timing and instrumental classification are not
                  listening-approved.
                </p>
                <p>
                  {candidate.performance.uncertainties.length} flagged authored words;{" "}
                  {candidate.performance.additionalRecognitions.length} additional or conflicting
                  recognition spans. Posted lyrics remain unchanged.
                </p>
                <p>
                  Embedded-lyric repeats: {candidate.performance.repetitions.length} repeated
                  phrases, retained separately from canonical lyrics.
                </p>
                {candidate.performance.repetitionCandidates?.map((r, i) => (
                  <button key={`repeat-${i}`} onClick={() => seek(r.start)}>
                    {r.start.toFixed(2)}–{r.end.toFixed(2)}s · repeated “{r.text}” · recognition
                    candidate, listen to verify
                  </button>
                ))}
                {candidate.performance.additionalRecognitions.map((r) => (
                  <button key={r.id} onClick={() => seek(r.start)}>
                    {r.start.toFixed(2)}–{r.end.toFixed(2)}s · recognition: {r.text} · unverified
                  </button>
                ))}
              </details>
            )}
            <div
              ref={overview}
              tabIndex={-1}
              aria-label="Section overview"
              className="annotation-chain"
              hidden={selected !== null || overviewTools || fullAudio}
            >
              {groups.map((g, i) => (
                <button
                  key={`${g.id}:${g.first}`}
                  className={`annotation-tile ${g.kind} ${now >= g.start && now < g.end ? "is-playing" : ""}`}
                  aria-pressed={group?.id === g.id}
                  onClick={async () => {
                    setEditorOrigin("section");
                    choose(g.first, g.last, g.text, "section");
                    setPicking(true);
                  }}
                >
                  <small className="anchor-badge" title="Approved / eligible unique anchors">
                    {anchors.filter((v) => v.sectionId === g.id && v.status === "approved").length}/
                    {anchors.filter((v) => v.sectionId === g.id).length} approved
                  </small>
                  <small>
                    {i + 1} · {g.start.toFixed(2)}–{g.end.toFixed(2)}s
                  </small>
                  <span>
                    {g.text.split(/\s+/).slice(0, 16).join(" ")}
                    {g.text.split(/\s+/).length > 16 ? "…" : ""}
                  </span>
                </button>
              ))}
            </div>
            {candidate && selected === null && !overviewTools && !fullAudio && (
              <button
                className="full-audio-entry"
                onClick={async () => {
                  setEditorOrigin("full");
                  setFullAudio(true);
                }}
              >
                Full audio
              </button>
            )}
            {candidate && selected === null && fullAudio && (
              <FullAudioView
                practice={practice}
                saving={saving}
                saveError={message.startsWith("Save failed:") ? message : undefined}
                phrases={candidate.performance?.phrases}
                sections={candidate.performance?.containers}
                lanes={candidate.lanes}
                viewKey={`${storageKey(a.audioHash)}:full-view`}
                annotation={a}
                anchors={anchors}
                audio={audio}
                url={candidate.playbackUrl ?? candidate.audioUrl}
                onSave={save}
                repairActive={repairActive}
                onDirty={setFullDirty}
                onBack={() => {
                  setFullAudio(false);
                  setEditorOrigin("section");
                }}
                onOpen={(anchor, draftTime) => {
                  setFullDirty(false);
                  setFullAudio(false);
                  setEditorOrigin("full");
                  chooseAnchor(anchor, true);
                  if (draftTime !== undefined) setEdit(draftTime);
                }}
              />
            )}
            {group && target && selected !== null && (
              <section
                ref={inspector}
                className="annotation-inspector"
                aria-label="Selected timing item"
                data-target-id={currentAnchor?.id}
                data-source-hash={a.audioHash}
              >
                <button
                  hidden={!focusTools && !picking}
                  disabled={!!dirty || practiceBusy}
                  onClick={async () => {
                    parentView();
                  }}
                >
                  {picking
                    ? "← All sections"
                    : editorOrigin === "full"
                      ? "← Full audio"
                      : `← ${group.text}`}
                </button>
                {picking && (
                  <div className="target-picker">
                    <h2>{group.text}</h2>
                    <p>Choose the word or phrase to time</p>
                    <div className="section-targets">
                      <button
                        onClick={() =>
                          choose(group.first, group.last, group.text, "section", "start")
                        }
                      >
                        Section start
                      </button>
                      <button
                        onClick={() =>
                          choose(group.first, group.last, group.text, "section", "end")
                        }
                      >
                        Section end
                      </button>
                    </div>
                    {candidate?.performance?.phrases
                      .filter((p) => p.sectionId === group.id)
                      .map((p) => (
                        <div className="target-phrase" key={p.id}>
                          <button
                            {...pickerTiming(p.first, p.last, "phrase")}
                            className="phrase-target"
                            onClick={() => choose(p.first, p.last, p.text, "phrase")}
                          >
                            Phrase · {p.text}
                          </button>
                          <div className="annotation-words">
                            {a.items.slice(p.first, p.last + 1).map((w, j) => (
                              <button
                                {...pickerTiming(p.first + j, p.first + j, "word")}
                                key={w.id}
                                onClick={() => choose(p.first + j)}
                              >
                                {w.text}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    {!candidate?.performance && (
                      <div className="annotation-words">
                        {a.items.slice(group.first, group.last + 1).map((w, j) => (
                          <button
                            {...pickerTiming(group.first + j, group.first + j, "word")}
                            key={w.id}
                            onClick={() => choose(group.first + j)}
                          >
                            {w.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div
                  className="practice-edges"
                  aria-label="Target edge"
                  hidden={!!target.rhythmId || focusTools || picking}
                >
                  {(["start", "end"] as const).map((which) => (
                    <button
                      key={which}
                      aria-pressed={edge === which}
                      disabled={!!dirty || practiceBusy}
                      onClick={() =>
                        choose(target.first, target.last, target.label, target.kind, which)
                      }
                    >
                      {which === "start" ? "Start" : "End"}
                    </button>
                  ))}
                </div>
                {!picking && (
                  <TimingPlayback
                    audio={audio}
                    label={`${target.label}${target.rhythmId ? "" : ` · ${edge}`}`}
                    start={
                      isWord
                        ? wordEdge(a, target.first, "start")
                        : isPhrase
                          ? phraseAt(a, target.first, target.last).start
                          : a.boundaries[target.first]
                    }
                    end={
                      isWord
                        ? wordEdge(a, target.last, "end")
                        : isPhrase
                          ? phraseAt(a, target.first, target.last).end
                          : a.boundaries[target.last + 1]
                    }
                    wordNavigation={
                      isWord && !picking
                        ? {
                            previous: !dirty && vocalPosition > 0,
                            next: !dirty && vocalPosition < vocalIndices.length - 1,
                            move: moveWord,
                          }
                        : undefined
                    }
                    showTools={focusTools}
                    onToggleTools={() => {
                      audio.current?.pause();
                      setFocusTools((v) => !v);
                    }}
                  />
                )}
                {!picking && !focusTools && (
                  <button className="change-target" disabled={practiceBusy} onClick={parentView}>
                    ← {editorOrigin === "full" ? "Full audio" : group.text}
                  </button>
                )}
                {isPhrase && !picking && (
                  <button disabled={!!dirty} onClick={() => setPhraseUnlocked((v) => !v)}>
                    {phraseUnlocked
                      ? "Lock phrase and words"
                      : `Unlock phrase and all ${wordTiming(a).intervals.filter((w) => a.items.slice(target.first, target.last + 1).some((i) => i.id === w.id)).length} words`}
                  </button>
                )}
                {candidate && !focusTools && !picking && (
                  <SourceSpectrogram
                    key={`frequency:${a.audioHash}:${target.rhythmId ?? `${target.kind}:${target.first}:${target.last}`}`}
                    audio={audio}
                    onReady={setFrequencyReady}
                    url={candidate.playbackUrl ?? candidate.audioUrl}
                    hash={a.audioHash}
                    duration={a.duration}
                    value={Number(edit)}
                    word={
                      !target.rhythmId
                        ? {
                            start:
                              edge === "start"
                                ? Number(edit)
                                : isWord
                                  ? wordEdge(a, target.first, "start")
                                  : isPhrase
                                    ? phraseAt(a, target.first, target.last).start
                                    : a.boundaries[target.first],
                            end:
                              edge === "end"
                                ? Number(edit)
                                : isWord
                                  ? wordEdge(a, target.first, "end")
                                  : isPhrase
                                    ? phraseAt(a, target.first, target.last).end
                                    : a.boundaries[target.last + 1],
                            fixedStart: !isWord && !isPhrase && target.first === 0,
                            fixedEnd: !isWord && !isPhrase && target.last === a.items.length - 1,
                            selected: edge,
                            dirty: !!dirty,
                            onChange: (which, time) => {
                              if (
                                practiceBusy ||
                                (isPhrase && !phraseUnlocked) ||
                                (dirty && which !== edge)
                              )
                                return;
                              setEdge(which);
                              setSelected(which === "start" ? target.first : target.last + 1);
                              setEdit(String(time));
                              setPendingTap(null);
                            },
                          }
                        : undefined
                    }
                    savedValue={storedTime}
                    now={now}
                    min={limits.min}
                    max={limits.max}
                    disabled={practiceBusy || (isPhrase && !phraseUnlocked)}
                    disabledReason={
                      isPhrase && !phraseUnlocked
                        ? "Unlock the phrase to resize its words"
                        : undefined
                    }
                    onChange={(v) => {
                      setEdit(String(v));
                      setPendingTap(null);
                    }}
                  />
                )}
                {timingConflict && !picking && (
                  <p role="status">
                    Timing conflict: {timingConflict} Save is available; correct the overlap before
                    approval or preview.
                  </p>
                )}
                {!picking && (
                  <p
                    className={`timing-validity ${invalidReason || timingConflict ? "is-invalid" : !dirty && (isWord ? wordPairApproved : currentAnchor?.status === "approved") ? "is-approved" : ""}`}
                    role="status"
                  >
                    {repairActive
                      ? "⚠ Repair draft pending — saved valid timing shown."
                      : invalidReason
                        ? `⚠ ${invalidReason}`
                        : timingConflict
                          ? "⚠ Conflict · correction needed"
                          : !dirty &&
                              (isWord ? wordPairApproved : currentAnchor?.status === "approved")
                            ? "✓ Approved"
                            : "○ Valid · approval pending"}
                  </p>
                )}
                {isWord && !picking && !focusTools && !repairOpen && (
                  <button
                    className="word-timing-approve"
                    aria-label="Save and approve this word start and end timing"
                    disabled={
                      repairActive ||
                      !!timingConflict ||
                      !!invalidReason ||
                      !frequencyReady ||
                      (!dirty && wordPairApproved)
                    }
                    onClick={approveWordDraft}
                  >
                    {!dirty && wordPairApproved
                      ? "✓ Word timing approved"
                      : dirty
                        ? "Save & approve word timing"
                        : "Approve word timing"}
                  </button>
                )}
                {isWord && !picking && (focusTools || !!invalidReason || repairActive) && (
                  <div>
                    <button
                      disabled={repairUnsaved}
                      onClick={async () => {
                        try {
                          const raw = localStorage.getItem(
                            `${storageKey(a.audioHash)}:word-repair`,
                          );
                          if (raw) parseWordRepair(raw, a);
                          setRepairOpen((v) => !v);
                        } catch (e) {
                          setMessage(String(e));
                        }
                      }}
                    >
                      {repairOpen ? "Hide repair editor" : "Repair neighboring word timing"}
                    </button>
                    {repairActive && (
                      <small>Repair draft pending — approval and preview update blocked.</small>
                    )}
                    {repairOpen && (
                      <WordRepairEditor
                        key={`${a.audioHash}:${target.first}`}
                        annotation={a}
                        storageKey={`${storageKey(a.audioHash)}:word-repair`}
                        wordId={a.items[target.first].id}
                        initialEdge={edge}
                        initialValue={edit}
                        onUnsaved={setRepairUnsaved}
                        onActive={(active) => {
                          setRepairActive(active);
                          if (!active) setRepairOpen(false);
                          if (active) {
                            setEdit(String(storedTime));
                          }
                        }}
                        onApply={async (next) => {
                          const ok = await save(next);
                          if (ok) {
                            setEdit(String(wordEdge(next, target.first, edge)));
                            setRepairOpen(false);
                          }
                          return ok;
                        }}
                      />
                    )}
                  </div>
                )}
                <div
                  className="practice-save"
                  hidden={repairOpen || picking || (!dirty && !focusTools)}
                >
                  <button
                    disabled={practiceBusy || !dirty || !!invalidReason}
                    onClick={saveAdjustment}
                  >
                    Save boundary
                  </button>
                  <button
                    disabled={practiceBusy || !dirty}
                    onClick={async () => {
                      setPendingTap(null);
                      setEdit(String(storedTime));
                      setPracticeReset((v) => v + 1);
                    }}
                  >
                    Discard adjustment
                  </button>
                  <button
                    disabled={
                      practiceBusy ||
                      (!dirty &&
                        (target.rhythmId
                          ? !a.review?.rhythm.find((r) => r.id === target.rhythmId)?.history?.length
                          : isWord
                            ? !a.wordTiming?.undo.length
                            : !a.undoStack.length))
                    }
                    onClick={async () => {
                      if (dirty) {
                        setPendingTap(null);
                        setEdit(String(storedTime));
                        setPracticeReset((v) => v + 1);
                      } else if (target.rhythmId) {
                        const review = structuredClone(a.review ?? emptyReview());
                        const r = review.rhythm.find((v) => v.id === target.rhythmId)!;
                        const previous = r.history?.pop();
                        if (previous !== undefined) {
                          r.time = previous;
                          r.revision++;
                          if (await save({ ...a, review })) {
                            setEdit(String(previous));
                            setPracticeReset((v) => v + 1);
                          }
                        }
                      } else {
                        try {
                          const next = isWord ? undoWordTiming(a) : undoAnnotation(a);
                          if (await save(next)) {
                            setEdit(
                              String(
                                isWord
                                  ? wordEdge(next, target.first, edge)
                                  : isPhrase
                                    ? phraseAt(next, target!.first, target!.last)[edge]
                                    : next.boundaries[selected],
                              ),
                            );
                            setPracticeReset((v) => v + 1);
                          }
                        } catch (e) {
                          setMessage(e instanceof Error ? e.message : String(e));
                        }
                      }
                    }}
                  >
                    Undo last adjustment
                  </button>
                </div>
                {candidate && onPreview && focusTools && !picking && (
                  <div>
                    <button
                      disabled={repairActive || !!dirty || previewBusy || practiceBusy}
                      onClick={() => void updatePreview()}
                    >
                      {previewBusy ? "Updating…" : "Update word preview"}
                    </button>
                    <small>{previewStatus}</small>
                  </div>
                )}
                {currentAnchor && focusTools && !picking && (
                  <div className="anchor-review">
                    <small>
                      {candidate && !frequencyReady
                        ? "Frequency data must load before approval"
                        : dirty
                          ? "unsaved adjustment"
                          : currentAnchor.status}
                    </small>
                    <button
                      disabled={
                        repairActive ||
                        !!dirty ||
                        practiceBusy ||
                        (!!candidate && !frequencyReady) ||
                        !!timingConflict ||
                        currentAnchor.status === "approved"
                      }
                      hidden={isWord}
                      onClick={() => save(approveAnchor(a, currentAnchor))}
                    >
                      Approve this anchor
                    </button>
                    <button
                      disabled={!!dirty || practiceBusy}
                      onClick={async () => {
                        const pending = anchors.filter(
                          (v) => v.sectionId === group.id && v.status !== "approved",
                        );
                        const after =
                          pending.find(
                            (v) =>
                              v.time > currentAnchor.time ||
                              (v.time === currentAnchor.time && v.id > currentAnchor.id),
                          ) ?? pending.find((v) => v.id !== currentAnchor.id);
                        if (after) chooseAnchor(after);
                        else setMessage("No other unapproved anchors in this section.");
                      }}
                    >
                      Next unapproved
                    </button>
                  </div>
                )}
                <details className="fine-adjustment" hidden={!focusTools || picking}>
                  <summary>Fine adjustment & anchor details</summary>
                  <p>
                    Types: {currentAnchor?.types.join(", ")}. Counted in{" "}
                    {groups.find((g) => g.id === currentAnchor?.sectionId)?.text}. Status:{" "}
                    {currentAnchor?.status}. Approval applies to this exact source, timestamp and
                    dependency revision.
                  </p>
                  {!fixed && (!isPhrase || phraseUnlocked) && (
                    <BoundarySlider
                      min={limits.min}
                      max={limits.max}
                      value={Number(edit)}
                      onChange={(v) => {
                        if (!practiceBusy) {
                          setEdit(String(v));
                          setPendingTap(null);
                        }
                      }}
                    />
                  )}
                  <label>
                    {isWord ? "Word" : isPhrase ? "Phrase" : "Shared"} {edge} boundary (seconds)
                    <input
                      aria-label={
                        isWord ? "Word boundary" : isPhrase ? "Phrase boundary" : "Shared boundary"
                      }
                      type="number"
                      step="0.01"
                      disabled={practiceBusy || fixed || (isPhrase && !phraseUnlocked)}
                      value={edit}
                      onChange={(e) => {
                        setEdit(e.target.value);
                        setPendingTap(null);
                      }}
                    />
                  </label>
                  <p>
                    Original{" "}
                    {(target.rhythmId
                      ? (a.review?.rhythm.find((r) => r.id === target.rhythmId)?.originalTime ?? 0)
                      : a.original[selected]
                    ).toFixed(3)}
                    s.{" "}
                    {isWord
                      ? "Only this word changes; neighboring words stay fixed."
                      : isPhrase
                        ? "Resizing scales all words and gaps around the opposite fixed edge; neighbours stay fixed."
                        : "Coverage boundaries move both adjacent intervals; recording edges stay fixed."}
                  </p>
                  {isWord && (
                    <p>
                      Source evidence:{" "}
                      {a.items[target.first].evidence ||
                        "Timing estimate; source method not recorded."}
                      {typeof a.items[target.first].confidence === "number" && (
                        <>
                          {" "}
                          Recognition probability:{" "}
                          {(a.items[target.first].confidence! * 100).toFixed(1)}%; this is not
                          timestamp confidence.
                        </>
                      )}
                      {a.wordTiming && (
                        <>
                          {" "}
                          Current word timing revision {a.wordTiming.revision}; original evidence
                          and edit history are retained.
                        </>
                      )}
                    </p>
                  )}
                </details>
                {candidate && focusTools && !picking && (
                  <details
                    className="practice-navigation"
                    onToggle={(e) => setShowRhythm(e.currentTarget.open)}
                  >
                    <summary>Choose rhythm anchors in this section</summary>
                    <p>
                      Only chosen events enter the approval count. Frequency-band events are
                      mixed-audio transient candidates, not verified beats. Vocal phrase starts
                      reuse authored phrase/ASR timing; fixed marker height is not confidence.
                    </p>
                    <div className="annotation-words">
                      {showRhythm &&
                        candidate.lanes.flatMap((l) =>
                          l.events
                            .filter(
                              (e) =>
                                e.time >= group.start &&
                                e.time < group.end &&
                                Math.abs(e.time - storedTime) <= 1.5,
                            )
                            .map((e) => {
                              const id = `rhythm:${l.id}:${e.id}`;
                              const chosen = a.review?.rhythm.find((r) => r.id === id);
                              return (
                                <button
                                  key={id}
                                  disabled={!!dirty || practiceBusy}
                                  onClick={async () => {
                                    if (chosen) {
                                      chooseAnchor(anchors.find((v) => v.id === id)!);
                                      return;
                                    }
                                    const review = structuredClone(a.review ?? emptyReview());
                                    review.rhythm.push({
                                      id,
                                      laneId: l.id,
                                      label: `${l.label} · ${e.time.toFixed(2)}s`,
                                      sectionId: group.id,
                                      time: e.time,
                                      originalTime: e.time,
                                      revision: 1,
                                    });
                                    save({ ...a, review });
                                  }}
                                >
                                  {chosen ? "Open" : "Choose"} {l.label} · {e.time.toFixed(2)}s
                                </button>
                              );
                            }),
                        )}
                    </div>
                  </details>
                )}
                {candidate?.performance && focusTools && !picking && (
                  <details className="practice-navigation">
                    <summary>Choose a phrase or word</summary>
                    <div className="annotation-words" aria-label="Performance phrases">
                      {candidate.performance.phrases
                        .filter((p) => p.sectionId === group.id)
                        .map((p) => (
                          <button
                            key={p.id}
                            disabled={!!dirty || practiceBusy}
                            onClick={() => choose(p.first, p.last, p.text, "phrase")}
                          >
                            {p.text}
                          </button>
                        ))}
                    </div>
                    {phrase && (
                      <div className="annotation-words" aria-label="Words in selected phrase">
                        {a.items.slice(shownFirst, shownLast + 1).map((item, j) => (
                          <button
                            key={item.id}
                            disabled={!!dirty || practiceBusy}
                            onClick={() => choose(shownFirst + j)}
                          >
                            {item.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </details>
                )}
              </section>
            )}
            <details className="annotation-data" open hidden={selected !== null || !overviewTools}>
              <summary>Source & annotation data</summary>
              {candidate && (
                <p>
                  <a
                    href={`?${practice ? "practice=1&" : ""}candidate=${candidate.id}&phase=2${candidate.performance ? "&analysis=1" : ""}`}
                  >
                    {candidate.performance
                      ? "Earlier raw recognition analysis and saves"
                      : "Current authored performance analysis"}
                  </a>
                </p>
              )}
              <p>{a.basis}</p>
              <p>
                {a.filename} · timing r{a.revision}
              </p>
              <p>SHA256 {a.audioHash}</p>
              <p>
                Approval counts use unique section, phrase and lyric-word start/end boundaries, plus
                only explicitly chosen rhythm anchors. Shared section boundaries count once and
                belong to the following section (the final edge belongs to the last). Each phrase
                has its own start and end, even when adjacent phrases meet at the same timestamp.
                Selection, playback, edits and automatic detections never approve. A source, type,
                timestamp or neighbouring/section dependency change makes its approval stale,
                including undo after a timing change. Each approval records the exact anchor
                dependency revision; unrelated edits do not reopen it. No bulk approval is
                performed.
              </p>
              <p>
                First start0 · final end{a.duration.toFixed(6)} · {a.items.length} contiguous items.
                Estimated anchors are not a transcript verification.
              </p>
              <TimingBackup
                disabled={!!dirty || practiceBusy}
                data={candidate?.performance ? exportAudioAnchors(candidate.performance, a) : a}
                filename={
                  candidate?.performance
                    ? `${candidate.id}-audio-anchors.json`
                    : "audio-annotation.json"
                }
              />
              <TimingJsonInput
                value={importText}
                onChange={setImportText}
                disabled={!!dirty || practiceBusy}
                onLoading={setImportLoading}
              />
              <p>
                Import restores word, phrase and section times and merges saved rhythm markers.
                Local-only markers remain; imported approvals are not applied.
              </p>
              <button
                disabled={!!dirty || practiceBusy || importLoading || !importText.trim()}
                onClick={async () => {
                  try {
                    const envelope = JSON.parse(importText);
                    if (
                      envelope.schema === "canvas-audio-anchors-v2" &&
                      envelope.sourceHash !== a.audioHash
                    )
                      throw new Error("Audio source mismatch.");
                    const incoming = parseAnnotation(
                      envelope.schema === "canvas-audio-anchors-v2"
                        ? JSON.stringify(envelope.annotation)
                        : importText,
                      draft,
                      a.audioHash,
                      a.duration,
                      candidate?.annotation,
                    );
                    const saved = await save({
                      ...a,
                      review: importRhythm(a, incoming, groups, candidate?.lanes ?? []),
                      phraseTiming: phraseIntervals(incoming).map((p) => ({
                        ...p,
                        revision:
                          Math.max(
                            p.revision,
                            phraseIntervals(a).find((q) => q.id === p.id)?.revision ?? 1,
                          ) + 1,
                      })),
                      undoStack: [
                        ...a.undoStack,
                        {
                          boundaries: a.boundaries,
                          manual: a.manual,
                          phrases: { before: phraseIntervals(a), after: phraseIntervals(incoming) },
                          words: {
                            before: structuredClone(wordTiming(a).intervals),
                            after: structuredClone(wordTiming(incoming).intervals),
                          },
                        },
                      ],
                      revision: a.revision + 1,
                      wordTiming: {
                        ...wordTiming(a),
                        revision: wordTiming(a).revision + 1,
                        intervals: structuredClone(wordTiming(incoming).intervals),
                        history: [
                          ...wordTiming(a).history,
                          structuredClone(wordTiming(a).intervals),
                        ],
                        undo: [...wordTiming(a).undo, structuredClone(wordTiming(a).intervals)],
                      },
                      boundaries: incoming.boundaries,
                      manual: incoming.boundaries.map((v, i) => v !== a.original[i]),
                      history: [
                        ...a.history,
                        {
                          revision: a.revision,
                          boundaries: a.boundaries,
                          manual: a.manual,
                        },
                      ],
                    });
                    if (saved) {
                      setImportText("");
                      setSelected(null);
                      setTarget(null);
                    }
                  } catch (e) {
                    setMessage(String(e));
                  }
                }}
              >
                Import matching timing
              </button>
            </details>
          </>
        )}
      </fieldset>
    </main>
  );
}

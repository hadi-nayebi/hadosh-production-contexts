import { useEffect, useState } from "react";
import ledgerUrl from "./director-ledger.json?url";
export type ComponentContext = {
  id: string;
  documents: string[];
  objectIds: string[];
  sceneGroup: string;
  sourceCue: string;
  intendedMeaning: string;
  actionConsequence: string;
  separationReason: string;
  observed: string;
  unverified: string;
  proposalId: string;
  reviewHref: string;
};
export function contextForObject(
  contexts: ComponentContext[],
  documentId: string,
  objectId: string,
) {
  return contexts.find((c) => c.documents.includes(documentId) && c.objectIds.includes(objectId));
}
export function IntentChain({ context: c }: { context: ComponentContext }) {
  return (
    <div className="object-intent-chain">
      <p>
        <strong>Scene group:</strong> {c.sceneGroup}
      </p>
      <p>
        <strong>Source cue →</strong> {c.sourceCue}
      </p>
      <p>
        <strong>Intended meaning →</strong> {c.intendedMeaning}
      </p>
      <p>
        <strong>Action and consequence →</strong> {c.actionConsequence}
      </p>
      <p>
        <strong>Why separate items:</strong> {c.separationReason}
      </p>
      <p>
        <strong>Observed:</strong> {c.observed}
      </p>
      <p>
        <strong>Still unverified:</strong> {c.unverified}
      </p>
      <a href={`/songs/director#${c.proposalId}`}>Open supporting director plan</a>
    </div>
  );
}
export default function ObjectIntent({
  documentId,
  objectId,
}: {
  documentId: string;
  objectId: string;
}) {
  const [contexts, setContexts] = useState<ComponentContext[]>([]),
    [status, setStatus] = useState("Loading supporting context…");
  useEffect(() => {
    const abort = new AbortController(),
      timer = setTimeout(() => abort.abort(), 8000);
    fetch(ledgerUrl, { signal: abort.signal })
      .then((r) => {
        if (!r.ok) throw Error();
        return r.json();
      })
      .then((d) => {
        setContexts(d.componentContexts || []);
        setStatus("");
      })
      .catch(() =>
        setStatus("Supporting context could not load. Open the director ledger or retry."),
      )
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      abort.abort();
    };
  }, []);
  const context = contextForObject(contexts, documentId, objectId);
  return status ? (
    <p role="status">{status}</p>
  ) : context ? (
    <IntentChain context={context} />
  ) : (
    <p>
      No authored causal context is linked to this component in this version yet.{" "}
      <a href="/songs/director">Open the director ledger and known gaps</a>.
    </p>
  );
}

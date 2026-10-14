import { IntentChain, type ComponentContext } from "./liveStage/ObjectIntent";
import { useEffect, useState } from "react";
import ledgerUrl from "./liveStage/director-ledger.json?url";

type ComponentPlan = {
  id: string;
  purpose: string;
  positionScale?: string;
  contactsOcclusion?: string;
  musicAction?: string;
  entryExit?: string;
};
type Evidence = {
  method?: string;
  finding?: string;
  status?: string;
  timeSeconds?: number;
  seconds?: number;
};
type Proposal = {
  id: string;
  status: string;
  intendedMessage: string;
  rationale: string;
  cue?: string;
  audioCue?: string;
  causeActionConsequence?: string;
  camera?: string;
  components?: (ComponentPlan | string)[];
  verificationCriteria?: string[];
  verification?: Evidence[];
  effectiveSchedule?: {
    phraseHoldEndFrame: number;
    transferEndFrame: number;
    providerSwitchFrame: number;
    exitFrame: number;
    listeningVerified: boolean;
  };
};

export default function DirectorPlans() {
  const [contexts, setContexts] = useState<ComponentContext[]>([]);
  const [plans, setPlans] = useState<Proposal[]>([]);
  const [state, setState] = useState("Loading local scene plans…");
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    fetch(ledgerUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw Error("Ledger unavailable");
        return response.json();
      })
      .then((data) => {
        if (data.schema !== "canvas-director-ledger-v1" || !Array.isArray(data.proposals))
          throw Error("Unsupported ledger");
        setPlans(data.proposals);
        setContexts(data.componentContexts || []);
        setState("");
      })
      .catch(() =>
        setState(
          "Scene plans could not load. The manual and ledger download remain available; reload to retry.",
        ),
      )
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);
  return (
    <section aria-label="Authored scene plans">
      <h2>Authored scene plans and observed results</h2>
      <p>
        These proposals are separate from the historical V6 inventory. Planned meaning, implemented
        behavior and observed evidence do not imply creative approval.
      </p>
      {state && <p role="status">{state}</p>}
      {contexts.length > 0 && (
        <details>
          <summary>Component context chains · authored studies</summary>
          {contexts.map((c) => (
            <details key={c.id}>
              <summary>{c.intendedMeaning}</summary>
              <IntentChain context={c} />
              <p>
                <a href={c.reviewHref}>Inspect this component in the editable scene →</a>
              </p>
            </details>
          ))}
        </details>
      )}
      {plans.map((plan) => (
        <details
          key={plan.id}
          id={plan.id}
          open={window.location.hash === `#${plan.id}`}
          className="director-plan"
        >
          <summary>{plan.intendedMessage}</summary>
          <p>
            <strong>Status:</strong> {plan.status}
          </p>
          <p>
            <strong>Why:</strong> {plan.rationale}
          </p>
          <p>
            <strong>Song cue:</strong> {plan.cue || plan.audioCue}
          </p>
          {plan.causeActionConsequence && (
            <p>
              <strong>Action and consequence:</strong> {plan.causeActionConsequence}
            </p>
          )}
          {plan.camera && (
            <p>
              <strong>View and transition:</strong> {plan.camera}
            </p>
          )}
          {plan.effectiveSchedule && (
            <p>
              <strong>Current timing, superseding the initial proposal:</strong> hold the phrase
              until {(plan.effectiveSchedule.phraseHoldEndFrame / 30).toFixed(2)}s; finish the word
              transfer at {(plan.effectiveSchedule.transferEndFrame / 30).toFixed(2)}s; change
              provider at {(plan.effectiveSchedule.providerSwitchFrame / 30).toFixed(2)}s. Listening
              approval remains outstanding.
            </p>
          )}
          <h3>Each component’s contribution</h3>
          {plan.components?.map((component) =>
            typeof component === "string" ? (
              <p key={component}>{component}</p>
            ) : (
              <details key={component.id}>
                <summary>
                  {component.id}: {component.purpose}
                </summary>
                <p>
                  <strong>Placement:</strong>{" "}
                  {component.positionScale || "No placement change proposed."}
                </p>
                <p>
                  <strong>Contact and depth:</strong>{" "}
                  {component.contactsOcclusion || "Not specified in this bounded plan."}
                </p>
                <p>
                  <strong>Action:</strong> {component.musicAction || component.entryExit}
                </p>
                {plan.effectiveSchedule && (
                  <small>
                    Timing in this original component proposal is superseded by the current timing
                    above.
                  </small>
                )}
              </details>
            ),
          )}
          <h3>Verification evidence</h3>
          {plan.verification?.map((evidence, index) => (
            <p key={index}>
              <strong>{evidence.method}</strong>
              {evidence.timeSeconds !== undefined || evidence.seconds !== undefined
                ? ` at ${(evidence.timeSeconds ?? evidence.seconds)!.toFixed(2)}s`
                : ""}
              : {evidence.finding} <em>{evidence.status}</em>
            </p>
          ))}
          <details>
            <summary>What must be checked</summary>
            <ul>
              {plan.verificationCriteria?.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          </details>
        </details>
      ))}
    </section>
  );
}

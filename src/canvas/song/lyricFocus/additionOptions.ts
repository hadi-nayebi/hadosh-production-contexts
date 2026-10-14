import plans from "./additionOptions.json";
import previous from "./previousAdditionOptions.json";
import type { Draft, Unit } from "./model";
export { plans as additionPlans };
export const optionContext = (unitId: string, variantId: string) => {
  const plan = plans.find((p) => p.id === unitId);
  const revised = variantId.startsWith("story-revised-");
  const i =
    Number(
      variantId.replace(revised ? "story-revised-" : "story-option-", ""),
    ) - 1;
  return (revised ? plan : previous.find((p) => p.id === unitId))?.options[
    i
  ]?.[2];
};
export function addStoryOptions(d: Draft): Draft {
  for (const p of plans) {
    const u = d.units.find((u) => u.id === p.id);
    if (!u?.variants) continue;
    for (const [i, [name, text, rationale]] of p.options.entries()) {
      const id = `story-revised-${i + 1}`;
      if (u.variants.some((v) => v.id === id)) continue; // Never replace an edited alternative.
      u.variants.push({
        id,
        name,
        text,
        revision: 1,
        history: [
          {
            revision: 1,
            text,
            at: "2026-10-12T05:30:00Z",
            reason: `Unselected agent-authored alternative requested by Hadi; ${rationale} Sentinel_d82f8eb3e9888191a63a70313705d44e / Sentinel_aa858848dde88191bdf668302537431b`,
          },
        ],
      });
    }
  }
  return finalizeChoices(applySocialChoice(d));
}
export const isRejectedAddition = (u: Unit) =>
  plans.some((p) => p.id === u.id) && u.text === u.originalText;

export const isEarlierStoryOption = (id: string) =>
  id.startsWith("story-option-");
export const visibleStoryVersions = (u: Unit) => u.variants?.filter(v =>
 u.id === "draft-section-06-passage-04" ? v.id === "original" || v.id === u.selectedVariantId || v.revision > 1 : !isEarlierStoryOption(v.id) || v.id === u.selectedVariantId || v.revision > 1);

export const socialChoiceText = "Came to check on a friend.\nA clip became a chain.\nHalf an hour later,\nI forgot why I came.";
export function applySocialChoice(d: Draft): Draft {
 const u = d.units.find(u => u.id === "draft-section-06-passage-04");
 if (!u?.variants || d.socialSelection) return d;
 const old = previous.find(p => p.id === u.id)!.options[2];
 let v = u.variants.find(v => v.id === "story-option-3");
 if (!v) { v = {id:"story-option-3",name:"Lost intention",text:old[1],revision:1,history:[{revision:1,text:old[1],at:"2026-10-12T05:23:00Z",reason:"Earlier Lost intention proposal; preserved before exact user selection"}]}; u.variants.push(v); }
 const conflict = v.text !== socialChoiceText && !(v.revision === 1 && v.text === old[1]);
 d.socialSelection = {instruction:"Sentinel_63fe0487e47c81919ed6d6243606f7a2",conflict,priorId:u.selectedVariantId!,priorApproval:structuredClone(u.approval)};
 if (conflict) return d;
 if (v.text !== socialChoiceText) {v.text=socialChoiceText;v.revision++;v.history.push({revision:v.revision,text:v.text,at:new Date().toISOString(),reason:"Exact Hadi selection: became replaces becomes; selection is not lyric approval. Sentinel_63fe0487e47c81919ed6d6243606f7a2"});}
 if (u.selectedVariantId !== v.id || u.text !== v.text) {u.selectedVariantId=v.id;u.text=v.text;u.revision=v.revision;u.history=structuredClone(v.history);u.approval=null;u.approvedRevision=null;}
 return d;
}

export function finalizeChoices(d: Draft): Draft {
 if (d.finalSelections || !d.units.some(u=>u.id === "draft-section-11-passage-04")) return d;
 const requests = [
  {id:"draft-section-06-passage-04",variantId:"story-option-3",text:socialChoiceText},
  {id:"draft-section-09-passage-04",variantId:"story-revised-1",text:plans[1].options[0][1]},
  {id:"draft-section-11-passage-04",variantId:"story-revised-3",text:plans[2].options[2][1]},
  {id:"r7-section-12-passage-01",variantId:"harness-b",text:"My words build the harness I call my own,\nFrom every seed of thought I’ve sown.\nLet me look. Let me change it.\nLeave the final say with me."},
 ];
 const receipt: NonNullable<Draft["finalSelections"]> = {instruction:"Sentinel_31a0f34bdd408191976f2acf55372d19",conflicts:[],priorSelections:[],units:[]};
 for (const request of requests) {
  const u=d.units.find(u=>u.id===request.id)!;const v=u.variants?.find(v=>v.id===request.variantId);
  receipt.priorSelections.push({id:u.id,variantId:u.selectedVariantId!,approval:structuredClone(u.approval)});
  if (!v || v.text !== request.text) {receipt.conflicts.push(u.id);continue;}
  if (u.selectedVariantId !== v.id || u.text !== v.text) {u.selectedVariantId=v.id;u.text=v.text;u.revision=v.revision;u.history=structuredClone(v.history);u.approval=null;u.approvedRevision=null;}
 }
 receipt.units=[d.title,...d.units].map(u=>({id:u.id,revision:u.revision,variantId:u.selectedVariantId!,text:u.text}));
 d.finalSelections=receipt;return d;
}
export const finalSelectionCurrent = (d:Draft) => !!d.finalSelections && d.finalSelections.conflicts.length === 0 && JSON.stringify(d.finalSelections.units) === JSON.stringify([d.title,...d.units].map(u=>({id:u.id,revision:u.revision,variantId:u.selectedVariantId!,text:u.text})));

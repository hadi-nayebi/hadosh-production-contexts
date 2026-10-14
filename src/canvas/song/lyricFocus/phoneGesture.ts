const clamp = (x: number) => Math.max(0, Math.min(1, x));
const ease = (x: number) => {
  const p = clamp(x);
  return p * p * (3 - 2 * p);
};
export function phoneGesture(time: number, actions: { action: string; time: number }[]) {
  const active = actions.filter((a) => time >= a.time - 0.4 && time < a.time + 1.3).at(-1);
  if (!active) return null;
  const age = time - active.time;
  return {
    action: active.action,
    index: active.action === "mute" ? 2 : ["save", "choose"].includes(active.action) ? 1 : 0,
    opacity: ease((age + 0.4) / 0.4) * ease((1.3 - age) / 0.4),
    approach: 1 - ease((age + 0.4) / 0.4),
  };
}

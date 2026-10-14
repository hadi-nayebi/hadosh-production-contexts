import { useEffect } from "react";
const eventName = "canvas:save-timing-before-navigation";
/** Durable save must succeed before an internal route is allowed to change. */
export async function saveTimingBeforeNavigation(): Promise<boolean> {
  const detail: { saved: boolean | Promise<boolean> } = { saved: false };
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
  return await detail.saved;
}
export function useTimingNavigationSave(active: boolean, commit: () => boolean | Promise<boolean>) {
  useEffect(() => {
    if (!active) return;
    const save = (event: Event) => {
      (event as CustomEvent<{ saved: boolean | Promise<boolean> }>).detail.saved = commit();
    };
    window.addEventListener(eventName, save);
    return () => window.removeEventListener(eventName, save);
  });
}

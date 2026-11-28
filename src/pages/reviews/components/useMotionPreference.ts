"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

// Match the server's initial HTML before switching to the reference's static
// cards, and respond to preference changes without requiring a page reload.
export function useMotionPreference() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

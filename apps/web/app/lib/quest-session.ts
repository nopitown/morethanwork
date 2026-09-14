"use client";
import { useMemo, useSyncExternalStore } from "react";
import {
  emptySession,
  parseSession,
  SESSION_KEY,
  type QuestSession,
} from "./quest";

let snapshot: string | undefined;
const listeners = new Set<() => void>();
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function getSnapshot() {
  if (snapshot === undefined) {
    try {
      snapshot =
        window.sessionStorage.getItem(SESSION_KEY) ??
        JSON.stringify(emptySession());
    } catch {
      snapshot = JSON.stringify(emptySession());
    }
  }
  return snapshot;
}
export function saveSession(session: QuestSession) {
  snapshot = JSON.stringify(session);
  try {
    window.sessionStorage.setItem(SESSION_KEY, snapshot);
  } catch {
    /* Keep the current tab usable if storage is unavailable. */
  }
  listeners.forEach((listener) => listener());
}
export function resetSession() {
  saveSession(emptySession());
}
export function useQuestSession() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const session = useMemo(() => parseSession(raw), [raw]);
  return { session, ready: raw !== null };
}

"use client";

import { useSyncExternalStore } from "react";

const key = "instituto-cuidar-theme";
const changeEvent = "instituto-cuidar-theme-change";
let memoryTheme: string | null = null;

function getTheme(): boolean {
  if (memoryTheme) return memoryTheme === "dark";
  try {
    const saved = localStorage.getItem(key);
    if (saved === "dark" || saved === "light") return saved === "dark";
  } catch { /* Default to light when storage is unavailable. */ }
  return false;
}

function subscribe(callback: () => void) {
  function update(event?: Event) {
    if (event?.type === "storage") memoryTheme = null;
    document.documentElement.dataset.theme = getTheme() ? "dark" : "light";
    callback();
  }
  update();
  window.addEventListener("storage", update);
  window.addEventListener(changeEvent, update);
  return () => {
    window.removeEventListener("storage", update);
    window.removeEventListener(changeEvent, update);
  };
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getTheme, () => false);
  function toggle() {
    const theme = dark ? "light" : "dark";
    memoryTheme = theme;
    try { localStorage.setItem(key, theme); } catch { /* The toggle still works without persistence. */ }
    document.documentElement.dataset.theme = theme;
    window.dispatchEvent(new Event(changeEvent));
  }
  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}>
      <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
      {dark ? "Modo claro" : "Modo escuro"}
    </button>
  );
}

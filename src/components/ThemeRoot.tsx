"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getTheme, isThemeId } from "@/lib/themes";

const STORAGE_KEY = "gems-theme";

/** Applies theme vars — render as a sibling, never wrap page content. */
export function ThemeRoot() {
  const params = useSearchParams();
  const fromQuery = params.get("theme");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const id =
      (fromQuery && isThemeId(fromQuery) && fromQuery) ||
      (stored && isThemeId(stored) && stored) ||
      "sunset";
    applyThemeId(id);
    if (fromQuery && isThemeId(fromQuery)) {
      window.localStorage.setItem(STORAGE_KEY, fromQuery);
    }
  }, [fromQuery]);

  return null;
}

export function applyThemeId(id: string) {
  if (!isThemeId(id)) return;
  const theme = getTheme(id);
  const root = document.documentElement;
  root.setAttribute("data-theme", theme.id);
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value);
  }
  window.localStorage.setItem(STORAGE_KEY, id);
}

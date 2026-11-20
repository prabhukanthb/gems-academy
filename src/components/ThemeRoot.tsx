"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getTheme, isThemeId } from "@/lib/themes";

const STORAGE_KEY = "gems-theme";

export function ThemeRoot({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const fromQuery = params.get("theme");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    const id =
      (fromQuery && isThemeId(fromQuery) && fromQuery) ||
      (stored && isThemeId(stored) && stored) ||
      "sunset";
    const theme = getTheme(id);
    const root = document.documentElement;
    root.setAttribute("data-theme", theme.id);
    for (const [key, value] of Object.entries(theme.vars)) {
      root.style.setProperty(key, value);
    }
    if (fromQuery && isThemeId(fromQuery)) {
      window.localStorage.setItem(STORAGE_KEY, fromQuery);
    }
  }, [fromQuery]);

  return children;
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

"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NEXT_THEME: Record<string, string> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const LABEL: Record<string, string> = {
  system: "Switch to light mode",
  light: "Switch to dark mode",
  dark: "Switch to system mode",
};

const ICON = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = (
    mounted ? (theme ?? "system") : "system"
  ) as keyof typeof ICON;
  const Icon = ICON[current] ?? Monitor;

  return (
    <button
      aria-label={LABEL[current] ?? LABEL.system}
      className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-card-hover hover:text-foreground"
      onClick={() => setTheme(NEXT_THEME[current] ?? "system")}
      type="button"
    >
      <span suppressHydrationWarning>
        <Icon aria-hidden="true" className="size-[18px]" />
      </span>
    </button>
  );
}

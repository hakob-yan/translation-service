"use client";
import { PREFERED_THEME, THEMES } from "@/constants";
import { getCookie, setCookie } from "cookies-next";
import lightMode from "@/assets/icons/others/light-mode.svg";
import darkMode from "@/assets/icons/others/dark-mode.svg";
import { useState } from "react";

export function useTheme() {

  const theme =
    document.documentElement.getAttribute("data-theme") ||
    getCookie(PREFERED_THEME) ||
    THEMES.LIGHT;
  const [themeState, setThemeState] = useState(theme);
  const themes = [
    {
      id: THEMES.DARK,
      icon: darkMode,
      value: "Dark",
      isActive: theme === THEMES.DARK,
    },
    {
      id: THEMES.LIGHT,
      icon: lightMode,
      value: "Light",
      isActive: theme === THEMES.LIGHT,
    },
  ];

  function setTheme(value: typeof THEMES.DARK | typeof THEMES.LIGHT) {
    if (typeof window !== "undefined") {
      setCookie(PREFERED_THEME, value);
      document.documentElement.setAttribute("data-theme", value);
      setThemeState(value);
    }
  }
  return { theme: themeState, setTheme, themes };
}

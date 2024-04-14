"use client";
import { PREFERED_THEME, THEMES } from "@/constants";
import { getCookie, setCookie } from "cookies-next";
import lightMode from "@/assets/icons/others/light-mode.svg";
import darkMode from "@/assets/icons/others/dark-mode.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSelect } from "@/lib/redux/features/configs/selectors";
import { setReduxTheme } from "@/lib/redux/features/configs/configsSlice";

export function useTheme() {
  const theme = useSelector(themeSelect);

  const dispatch = useDispatch();
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
      dispatch(setReduxTheme(value));
      document.documentElement.setAttribute("data-theme", value);
    }
  }
  return { theme, setTheme, themes };
}

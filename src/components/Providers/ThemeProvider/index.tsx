"use client";
import { IThemeProvider } from "./types";
import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import { PREFERED_THEME, THEMES } from "@/constants";
import { useDispatch } from "react-redux";
import { setReduxTheme } from "@/lib/redux/features/configs/configsSlice";

function ThemeProvider({ children }: IThemeProvider) {
  const dispatch = useDispatch();

  useEffect(() => {
    const themeCookie = getCookie(PREFERED_THEME);
    if (themeCookie) {
      dispatch(setReduxTheme(themeCookie));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setReduxTheme(THEMES.DARK));
      setCookie(PREFERED_THEME, THEMES.DARK);
      document.documentElement.setAttribute("data-theme", THEMES.DARK);
    } else {
      dispatch(setReduxTheme(THEMES.LIGHT));
      setCookie(PREFERED_THEME, THEMES.LIGHT);
      document.documentElement.setAttribute("data-theme", THEMES.LIGHT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
}

export default ThemeProvider;

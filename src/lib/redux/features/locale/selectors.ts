import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";
import { ILocaleKey } from "./localeSlice";

//locale selector
const selectSelf = (state: RootState) => state.locales;
export const localesSelect = createSelector(selectSelf, (state) => state);

export const localeSelect = (locale: ILocaleKey) =>
  createSelector(selectSelf, (state) => state[locale]);

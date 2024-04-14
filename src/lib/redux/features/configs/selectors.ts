import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

const selectSelf = (state: RootState) => state.configs;

export const themeSelect = createSelector(selectSelf, (state) => state.theme);

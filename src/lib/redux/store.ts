// "use client"

import { configureStore } from "@reduxjs/toolkit";
import { localeSlice } from "./features/locale/localeSlice";
import { isProduction } from "@/utils/isProduction";

export const store = configureStore({
  reducer: {
    [localeSlice.name]: localeSlice.reducer,
  },
  devTools: isProduction() ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

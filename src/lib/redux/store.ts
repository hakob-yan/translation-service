import { configureStore } from "@reduxjs/toolkit";
import { localeSlice } from "./features/locale/localeSlice";
import { configsSlice } from "./features/configs/configsSlice";

import { isProduction } from "@/utils/isProduction";

export const store = configureStore({
  reducer: {
    [localeSlice.name]: localeSlice.reducer,
    [configsSlice.name]: configsSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

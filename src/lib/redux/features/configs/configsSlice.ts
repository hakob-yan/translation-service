import { createSlice } from "@reduxjs/toolkit";
import { CONFIGS, THEMES } from "@/constants";

const initialState = {
  theme: THEMES.LIGHT,
};

export const configsSlice = createSlice({
  name: CONFIGS,
  initialState,
  reducers: {
    setReduxTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const { setReduxTheme } = configsSlice.actions;

export default configsSlice.reducer;

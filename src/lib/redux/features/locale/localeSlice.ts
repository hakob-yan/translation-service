import { createSlice } from "@reduxjs/toolkit";
import English from "@/assets/icons/countries/GREAT-BRITIAN.svg";
import German from "@/assets/icons/countries/GERMANY.svg";
import Spain from "@/assets/icons/countries/SPAIN.svg";
import Estonian from "@/assets/icons/countries/ESTONIA.svg";
import French from "@/assets/icons/countries/FRANCE.svg";
import Italian from "@/assets/icons/countries/ITALY.svg";
import Portugueses from "@/assets/icons/countries/PORTUGAL.svg";
import Russian from "@/assets/icons/countries/RUSSIA.svg";

import enKeys from "@/utils/translation/en";

import deKeys from "@/data/de.json";
import esKeys from "@/data/es.json";
import frKeys from "@/data/fr.json";
import itKeys from "@/data/it.json";
import ruKeys from "@/data/ru.json";
import ptKeys from "@/data/pt.json";
import etKeys from "@/data/et.json";

import { LOCALES } from "@/constants";

const locales = {
  en: { value: "English", icon: English, keys: enKeys },
  de: { value: "German", icon: German, keys: deKeys },
  es: { value: "Spanish", icon: Spain, keys: esKeys },
  fr: { value: "French", icon: French, keys: frKeys },
  it: { value: "Italian", icon: Italian, keys: itKeys },
  ru: { value: "Russian", icon: Russian, keys: ruKeys },
  pt: { value: "Portugueses", icon: Portugueses, keys: ptKeys },
  et: { value: "Estonian", icon: Estonian, keys: etKeys },
};
export type ILocaleKey = keyof typeof locales;

const initialState = locales;

export const localeSlice = createSlice({
  name: LOCALES,
  initialState,
  reducers: {
    setLocaleKey: (state, action) => {
      const locale = action.payload.locale as ILocaleKey;
      const key = action.payload.key;
      const value = action.payload.value;

      return {
        ...state,
        [locale]: {
          ...state[locale],
          keys: { ...state[locale].keys, [key]: value },
        },
      };
    },
    setLocaleMessages: (state, action) => {
      const locale = action.payload.locale as ILocaleKey;
      const messages = action.payload.messages;

      return {
        ...state,
        [locale]: {
          ...state[locale],
          keys: messages,
        },
      };
    },
  },
});

export const { setLocaleKey, setLocaleMessages } = localeSlice.actions;

export default localeSlice.reducer;

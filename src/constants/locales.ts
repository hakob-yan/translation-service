import English from "@/assets/icons/countries/GREAT-BRITIAN.svg";
import German from "@/assets/icons/countries/GERMANY.svg";
import Spain from "@/assets/icons/countries/SPAIN.svg";
import Estonian from "@/assets/icons/countries/ESTONIA.svg";
import French from "@/assets/icons/countries/FRANCE.svg";
import Italian from "@/assets/icons/countries/ITALY.svg";
import Portugueses from "@/assets/icons/countries/PORTUGAL.svg";
import Russian from "@/assets/icons/countries/RUSSIA.svg";

import enKeys from "@/constants/translation/en";

import deKeys from "@/constants/translation/de";
import esKeys from "@/constants/translation/es";
import frKeys from "@/constants/translation/fr";
import itKeys from "@/constants/translation/it";
import ruKeys from "@/constants/translation/ru";
import ptKeys from "@/constants/translation/pt";
import etKeys from "@/constants/translation/et";

export const locales = {
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

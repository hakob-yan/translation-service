"use client";
import { setLocaleMessages } from "@/lib/redux/features/locale/localeSlice";
import { localesSelect } from "@/lib/redux/features/locale/selectors";
import axios from "axios";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function InitiateProvider({ children }: { children: ReactNode }) {
  const locales = Object.keys(useSelector(localesSelect));
  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      const messages = await Promise.all(
        locales.map((el) =>
          axios.get(`${window.origin}/api/getLocaleMessages/${el}`)
        )
      );
      messages.forEach((el, i) => {
        dispatch(setLocaleMessages({ messages: el.data, locale: locales[i] }));
      });
      const { data } = await axios.get(`https://crypto.swaps.fun/api/getEnKeys`);

      dispatch(setLocaleMessages({ messages: data, locale: "en" }));
    };
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
}

export default InitiateProvider;

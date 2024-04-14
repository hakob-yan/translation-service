"use client";

import Image from "next/image";
import backArrow from "@/assets/icons/others/back-arrow.svg";
import pencil from "@/assets/icons/others/pencil.svg";

import Link from "next/link";
import { useMemo, useState } from "react";
import TableRow from "@/components/TableRow";
import {
  ILocaleKey,
  locales,
  setLocaleKey,
} from "@/lib/redux/features/locale/localeSlice";
import { useDispatch, useSelector } from "react-redux";
import { localeSelect } from "@/lib/redux/features/locale/selectors";
import { ROUTES } from "@/constants";
const enKeys = locales["en"].keys;

interface ILocalePage {
  params: {
    locale: ILocaleKey;
  };
}
export default function LocaleKeys({ params: { locale } }: ILocalePage) {
  const localeData = useSelector(localeSelect(locale));
  const dispatch = useDispatch();
  const rowArr = useMemo(() => {
    return Object.entries(enKeys);
  }, []);
  const handleValueChange = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    dispatch(setLocaleKey({ locale: locale, key: key, value: value }));
  };
  return (
    <div>
      <div className="p-8 flex justify-between items-center">
        <Link href={ROUTES.HOME}>
          <Image
            alt="Back"
            className="theme-invert cursor-pointer"
            src={backArrow}
            width={50}
            height={50}
          />
        </Link>

        <p className="text-center font-semibold text-5xl">{localeData.value}</p>
        <div className=" flex  justify-center items-center gap-x-10">
          <Image
            alt="Locale Image"
            src={localeData.icon}
            className="w-[8rem] h-[8rem] rounded-full object-cover  border-2"
          />
        </div>
      </div>
      <div className="rounded-3xl">
        <div className="grid grid-cols-[auto_1fr_1fr] ">
          <div className="border p-4 border-surface-tertiary"></div>
          <div className="border p-4 border-surface-tertiary">Key</div>
          <div className="border p-4 border-surface-tertiary">Value</div>
          {rowArr.map((el, i) => {
            return (
              <TableRow
                key={el[0]}
                enKey={el[1]}
                order={i + 1}
                value={localeData.keys[el[0]]}
                onChange={(val: string) =>
                  handleValueChange({ value: val, key: el[0] })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// bg-[#6F4FFC]

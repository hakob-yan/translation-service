"use client";

import Image from "next/image";
import backArrow from "@/assets/icons/others/back-arrow.svg";
import pencil from "@/assets/icons/others/pencil.svg";

import Link from "next/link";
import { useMemo, useState } from "react";
import TableRow from "@/components/TableRow";
import { ILocaleKey, locales } from "@/lib/redux/features/locale/localeSlice";
import { useSelector } from "react-redux";
import { localeSelect } from "@/lib/redux/features/locale/selectors";
const enKeys = locales["en"].keys;

interface ILocalePage {
  params: {
    locale: ILocaleKey;
  };
}
export default function LocaleKeys({ params: { locale } }: ILocalePage) {
  const localeData = useSelector(localeSelect(locale));
  const rowArr = useMemo(() => {
    return Object.entries(enKeys);
  }, []);
  return (
    <div>
      <div className="p-8 flex justify-between items-center">
        <Link href="/">
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
      <div className=" p-12 rounded-3xl">
        <div className=" border border-text-secondary ">
          <thead>
            <tr>
              <th className="border-2 p-4 text-start border-surface-tertiary"></th>
              <th className="border-2 p-4 text-start border-surface-tertiary">
                Key
              </th>
              <th className="border-2 p-4 text-start border-surface-tertiary">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            {rowArr.map((el, i) => {
              return (
                <TableRow
                  key={el[0]}
                  enKey={el[1]}
                  order={i + 1}
                  value={localeData.keys[el[0]] || "none"}
                  onChange={(val: string) => {}}
                />
              );
            })}
          </tbody>
        </div>
      </div>
    </div>
  );
}

// bg-[#6F4FFC]

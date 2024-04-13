"use client";
import { ILocaleKey, locales } from "@/constants/locales";
import Image from "next/image";
import backArrow from "@/assets/icons/others/back-arrow.svg";
import Link from "next/link";
const enKeys = locales["en"].keys;

interface ILocalePage {
  params: {
    locale: ILocaleKey;
  };
}
export default function LocaleKeys({ params: { locale } }: ILocalePage) {
  const localeData = locales[locale];

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
        {/* <ol className=" flex flex-col gap-y-7">
          {Object.entries(enKeys).map((el, i) => {
            return (
              <li
                key={el[0]}
                className="flex gap-x-8 bg-[#6F4FFC] p-4 rounded-3xl"
              >
                <span>{i + 1}</span>

                <span>{el[1]}:</span>
                <span>{localeData.keys[el[0]] || "none"}</span>
              </li>
            );
          })}
        </ol> */}
        <table className="">
          <thead>
            <tr>
              <th></th>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(enKeys).map((el, i) => {
              return (
                <tr key={el[0]}>
                  <td>{i + 1}</td>

                  <td>{el[1]}:</td>
                  <td>{localeData.keys[el[0]] || "none"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// bg-[#6F4FFC]

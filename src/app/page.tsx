"use client";
import { localesSelect } from "@/lib/redux/features/locale/selectors";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Home() {
  const locales = useSelector(localesSelect);
  const localesArr = Object.entries(locales);

  return (
    <div className="p-8">
      <p className="text-center  font-bold xsm:text-7xl text-3xl">
        Translation Keys
      </p>
      <p className="text-center  text-text-secondary text-base xsm:p-4">
        Add/Edit/Filter seamlessly translation keys
      </p>

      <div className="bg-surf flex  flex-wrap justify-center xsm:gap-10 ">
        {localesArr.map((locale) => (
          <Link href={`/translate/${locale[0]}`} key={locale[0]}>
            <div className=" ease-linear duration-100 rounded-3xl cursor-pointer xsm:w-[25rem] xsm:h-[25rem] w-[20rem] h-[20rem] flex flex-col justify-center items-center gap-y-10 hover:bg-surface-secondary">
              <p className="text-center font-semibold text-5xl">
                {locale[1].value}
              </p>
              <Image
                alt="Locale Image"
                src={locale[1].icon}
                className="xsm:w-[8rem] xsm:h-[8rem] rounded-full object-cover  border-2 w-20 h-20"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

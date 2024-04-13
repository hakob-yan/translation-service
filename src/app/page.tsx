import { locales } from "@/constants/locales";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const localesArr = Object.entries(locales);

  return (
    <div className="p-8">
      <p className="text-center  font-bold text-7xl">Translation Keys</p>
      <p className="text-center  text-text-secondary text-base p-4">
        Add/Edit/Filter seamlessly translation keys
      </p>

      <div className="bg-surf flex  flex-wrap justify-center gap-10">
        {localesArr.map((locale) => (
          <Link href={`/translate/${locale[0]}`} key={locale[0]}>
            <div className=" ease-linear duration-100 rounded-3xl cursor-pointer w-[25rem] h-[25rem] flex flex-col justify-center items-center gap-y-10 hover:bg-surface-secondary">
              <p className="text-center font-semibold text-5xl">
                {locale[1].value}
              </p>
              <Image
                alt="Locale Image"
                src={locale[1].icon}
                className="w-[8rem] h-[8rem] rounded-full object-cover  border-2"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

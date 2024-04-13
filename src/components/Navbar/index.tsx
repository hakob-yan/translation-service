"use client";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <nav className="flex flex-col justify-between items-end p-4  border-b-2 border-b-surface-tertiary font-medium text-lg">
      <ul className="flex gap-x-8 justify-center items-center">
        <li className=" ease-in duration-100 hover:bg-surface-secondary px-4 py-2 rounded-2xl">
          <Link href="/">Home</Link>
        </li>
        <li className=" ease-in duration-100 hover:bg-surface-secondary px-4 py-2 rounded-2xl">
          <Link href="https://crypto.swaps.app/buy-crypto">Swaps</Link>
        </li>

        <li>
          <div className="flex gap-x-4 bg-surface-tertiary p-1 rounded-3xl">
            {themes.map((thm) => (
              <div
                key={thm.value}
                onClick={() => setTheme(thm.id)}
                className={`cursor-pointer  rounded-full p-1 ${
                  thm.id === theme ? "bg-surface-primary" : ""
                }`}
              >
                <Image alt="Theme" src={thm.icon} width={24} height={24} />
              </div>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

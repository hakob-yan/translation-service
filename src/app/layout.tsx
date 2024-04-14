import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { PREFERED_THEME, THEMES } from "@/constants";
import { ReduxProvider } from "@/components/Providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swaps Translation service",
  description: "Translate your application using our service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dataTheme = cookies().get(PREFERED_THEME)?.value || THEMES.LIGHT;

  return (
    <html lang="en" data-theme={dataTheme}>
      <ReduxProvider>
        <body
          className={`${inter.className} bg-surface-primary text-text-primary `}
        >
          <header>
            <Navbar />
          </header>
          <main className="max-w-[100rem] mx-auto">{children}</main>
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}

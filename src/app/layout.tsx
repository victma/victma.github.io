import type { Metadata } from "next";
import { Noto_Sans_Mono, Rubik_Mono_One } from "next/font/google";
import "./globals.css";

const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik",
});
const noto = Noto_Sans_Mono({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "victma",
  description: "Discover my projects ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${rubik.variable} bg-black text-white font-sans max-w-screen-xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}

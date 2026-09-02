import type { Metadata } from "next";
import { Heebo,  Zilla_Slab } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-body",
  display: "swap",
});

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   variable: "--font-display",
//   display: "swap",
// });

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});


export const metadata: Metadata = {
  title: "ArchWeb",
  description: "פיתוח אתרים, אפליקציות ופתרונות תוכנה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${zillaSlab.variable}`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Peace Schools & Colleges — Haripur Campus | Peace Through Education",
  description:
    "The Peace Group of Schools and Colleges, Haripur Campus. Established 2001. 27+ campuses across KPK. Montessori to F.Sc-I. Board toppers in BISE Abbottabad. Admissions open 2026-27.",
  keywords: [
    "Peace School Haripur",
    "The Peace Group of Schools and Colleges",
    "Best School in Haripur",
    "BISE Abbottabad Toppers",
    "Education Haripur KPK",
    "Admissions Haripur",
    "Peace Through Education",
    "Sana Ullah Khan",
    "thepeace.edu.pk",
  ],
  openGraph: {
    title: "The Peace Schools & Colleges — Haripur Campus",
    description:
      "27+ campuses across KPK. Excellence in education since 2001. Admissions open for Montessori to F.Sc-I.",
    type: "website",
    url: "https://thepeace.edu.pk/campuses/haripur.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

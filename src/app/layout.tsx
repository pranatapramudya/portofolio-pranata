import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranata Pramudya | Tech Portfolio",
  description: "Portofolio Profesional Pranata Pramudya - S.Kom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-200 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

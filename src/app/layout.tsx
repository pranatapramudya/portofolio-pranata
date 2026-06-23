import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranata Pramudya | Tech Portfolio",
  description: "Portofolio Profesional Pranata Pramudya - S.Kom",
};

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`font-sans bg-slate-950 text-slate-200 antialiased min-h-screen flex`}>
        <Sidebar />
        <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

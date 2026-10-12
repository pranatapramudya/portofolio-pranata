import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranata Pramudya, S.Kom | Systems Architect & Full Stack Engineer",
  description:
    "Portofolio Profesional & Rekayasa Sistem Pranata Pramudya. Spesialis Next.js App Router, Microservices, dan Enterprise Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex selection:bg-blue-100 selection:text-blue-900`}
      >
        <Sidebar />
        <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

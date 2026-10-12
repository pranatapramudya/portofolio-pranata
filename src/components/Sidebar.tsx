"use client";

import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  AwardIcon,
} from "./icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = [
    { name: "Beranda", href: "#home", icon: <HomeIcon className="w-5 h-5" /> },
    {
      name: "Keahlian",
      href: "#skills",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Proyek Nyata",
      href: "#projects",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      name: "Pencapaian & Riwayat",
      href: "#achievements",
      icon: <AwardIcon className="w-5 h-5" />,
    },
    {
      name: "Kontak",
      href: "#contact",
      icon: <MailIcon className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Navigation"
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-md hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white/95 backdrop-blur-xl border-r border-slate-200/90 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Profile/Brand Area */}
        <div className="p-6 border-b border-slate-200/80 text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 mb-3 shadow-md shadow-blue-500/15">
            <div className="w-full h-full rounded-2xl bg-slate-50 flex items-center justify-center text-xl font-extrabold text-blue-600">
              PP
            </div>
          </div>
          <h2 className="text-lg font-bold text-slate-900">Pranata Pramudya</h2>
          <p className="text-xs text-blue-600 font-semibold mt-1">
            Systems Architect &amp; Full Stack
          </p>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
            Open for Roles
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeSidebar}
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 transition-all duration-200 group border border-transparent hover:border-blue-200/60 min-h-[44px]"
            >
              <div className="text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-4 border-t border-slate-200/80 text-center bg-slate-50/50">
          <p className="text-[11px] text-slate-500 font-medium">
            &copy; 2026 Pranata Pramudya, S.Kom.
          </p>
        </div>
      </aside>
    </>
  );
}

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
      name: "Pencapaian",
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
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-md hover:bg-slate-800 transition-colors shadow-lg"
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
          className="lg:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/80 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Profile/Brand Area */}
        <div className="p-6 border-b border-slate-800/80 text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 mb-3 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              PP
            </div>
          </div>
          <h2 className="text-lg font-bold text-slate-100">Pranata Pramudya</h2>
          <p className="text-xs text-cyan-400 font-medium mt-1">
            Systems Architect & Full Stack
          </p>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
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
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900/90 transition-all duration-200 group border border-transparent hover:border-cyan-500/30 hover:shadow-sm"
            >
              <div className="text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-sm font-medium group-hover:translate-x-0.5 transition-transform">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-4 border-t border-slate-800/80 text-center">
          <p className="text-[11px] text-slate-500">
            &copy; 2026 Pranata Pramudya. S.Kom.
          </p>
        </div>
      </aside>
    </>
  );
}

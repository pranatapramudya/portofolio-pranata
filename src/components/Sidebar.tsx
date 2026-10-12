"use client";

import { useState } from "react";
import Image from "next/image";
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
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
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
          className="lg:hidden fixed inset-0 bg-slate-900/30 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Solid Stationary Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-40 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Profile with Real Photo */}
        <div className="p-6 border-b border-slate-200 text-center">
          <div className="w-22 h-22 mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-3.5 bg-slate-100 flex items-center justify-center">
            <Image
              src="/images/foto-profil.jpg"
              alt="Pranata Pramudya"
              width={88}
              height={88}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Pranata Pramudya
          </h2>
          <p className="text-xs text-blue-600 font-semibold mt-0.5">
            Systems Architect &amp; Full Stack
          </p>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
            Open for Roles
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3.5 py-5 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeSidebar}
              className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-150 group min-h-[44px]"
            >
              <div className="text-slate-500 group-hover:text-blue-600">
                {link.icon}
              </div>
              <span className="text-sm font-semibold">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-4 border-t border-slate-200 text-center bg-slate-50/60">
          <p className="text-[11px] text-slate-500 font-medium">
            &copy; 2026 Pranata Pramudya, S.Kom.
          </p>
        </div>
      </aside>
    </>
  );
}

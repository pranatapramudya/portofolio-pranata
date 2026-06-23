"use client";

import { useState } from "react";
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon, MenuIcon, XIcon } from "./icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = [
    { name: "Beranda", href: "#home", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Keahlian", href: "#skills", icon: <UserIcon className="w-5 h-5" /> },
    { name: "Proyek", href: "#projects", icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: "Kontak", href: "#contact", icon: <MailIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors"
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
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
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900/90 backdrop-blur-xl border-r border-slate-800 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Profile/Brand Area */}
        <div className="p-8 border-b border-slate-800 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl font-bold text-slate-200">
              PP
            </div>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Pranata</h2>
          <p className="text-sm text-cyan-400 font-medium mt-1">Tech Professional</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeSidebar}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Pranata Pramudya.
          </p>
        </div>
      </aside>
    </>
  );
}

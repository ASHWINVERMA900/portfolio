import React, { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-slate-950/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-base sm:text-lg font-bold shadow-lg shadow-indigo-500/20 flex-shrink-0">
            A
          </div>
          <div className="hidden xs:block min-w-0">
            <p className="text-xs sm:text-sm text-slate-400 truncate">Ashwin Verma</p>
            <p className="text-sm sm:text-base font-semibold truncate">Web Developer</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-88}
              duration={500}
              className="cursor-pointer text-sm text-slate-300 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-500 hover:bg-indigo-500"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden rounded-lg border border-slate-700 p-2.5 text-slate-200 hover:bg-slate-900 transition active:bg-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-4 sm:px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-88}
              duration={500}
              className="block cursor-pointer rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-slate-900 transition active:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:border-indigo-500 hover:bg-indigo-500 transition active:bg-indigo-600"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

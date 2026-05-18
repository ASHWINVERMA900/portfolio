import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full top-0 z-50 border-b transition-colors duration-300 ${
      isDark
        ? 'border-white/10 backdrop-blur-xl bg-slate-950/90 text-white'
        : 'border-slate-200 backdrop-blur-xl bg-white/90 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-base sm:text-lg font-bold shadow-lg shadow-indigo-500/20 shrink-0">
            AV
          </div>
          <div className="hidden xs:block min-w-0">
            <p className={`text-xs sm:text-sm truncate ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Ashwin Verma</p>
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
              className={`cursor-pointer text-sm transition ${
                isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/12xNxFBhqAZH0r6Sbbz7CYXdZoyQk7e32/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isDark
                ? 'border-slate-600 bg-slate-900 text-white hover:border-indigo-500 hover:bg-indigo-500'
                : 'border-slate-300 bg-slate-100 text-slate-900 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition ${
              isDark
                ? 'border-slate-700 text-yellow-400 hover:bg-slate-900'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition ${
              isDark
                ? 'border-slate-700 text-yellow-400 hover:bg-slate-900'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            className={`rounded-lg border p-2.5 transition ${
              isDark
                ? 'border-slate-700 text-slate-200 hover:bg-slate-900 active:bg-slate-800'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100 active:bg-slate-200'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-t transition-colors duration-300 px-4 sm:px-6 py-4 space-y-2 ${
          isDark
            ? 'border-white/10 bg-slate-950/95'
            : 'border-slate-200 bg-slate-50/95'
        }`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-88}
              duration={500}
              className={`block cursor-pointer rounded-xl px-3 py-3 text-sm transition ${
                isDark
                  ? 'text-slate-200 hover:bg-slate-900 active:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-full border px-4 py-3 text-center text-sm font-medium transition ${
              isDark
                ? 'border-slate-700 bg-slate-900 text-white hover:border-indigo-500 hover:bg-indigo-500 active:bg-indigo-600'
                : 'border-slate-300 bg-slate-100 text-slate-900 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600'
            }`}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

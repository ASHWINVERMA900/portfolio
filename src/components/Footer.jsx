import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`border-t px-4 sm:px-6 py-6 sm:py-8 text-center transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-slate-950 text-slate-400' : 'border-slate-200 bg-white text-slate-700'
      }`}
    >
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Ashwin Verma. Built with React, Tailwind CSS and Vite.
      </p>
    </footer>
  );
};

export default Footer;

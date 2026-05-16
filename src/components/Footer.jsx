import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-400">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Ashwin Verma. Built with React, Tailwind CSS and Vite.
      </p>
    </footer>
  );
};

export default Footer;

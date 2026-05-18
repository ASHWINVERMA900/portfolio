import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 text-center transition-colors duration-300 ${
        isDark
          ? "bg-slate-900 text-gray-300"
          : "bg-white text-gray-700 border-t border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3
          className={`text-xl font-semibold mb-2 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Ashwin Verma
        </h3>
        <p
          className={`text-sm mb-4 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Full‑Stack Developer | React • Spring Boot • MongoDB
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4 text-2xl">
          <a
            href="https://github.com/ASHWINVERMA900"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? "hover:text-white" : "hover:text-black"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ashwinverma"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? "hover:text-blue-400" : "hover:text-blue-600"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ashwin.verma@example.com"
            className={`transition-colors ${
              isDark ? "hover:text-red-400" : "hover:text-red-600"
            }`}
          >
            <FaEnvelope />
          </a>
        </div>

        <hr
          className={`mb-4 ${
            isDark ? "border-gray-700" : "border-gray-300"
          }`}
        />

        <p
          className={`text-xs ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} Ashwin Verma. All rights reserved. | Designed with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

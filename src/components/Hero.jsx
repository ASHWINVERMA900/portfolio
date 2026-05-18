import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 lg:gap-24 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <span className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ring-1 animate-pulse ${
            isDark ? 'bg-indigo-500/15 text-indigo-300 ring-indigo-500/20' : 'bg-indigo-100 text-indigo-700 ring-indigo-200'
          }`}>
            ✨ Portfolio • Web Developer
          </span>

          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text bg-gradient-to-r ${
              isDark 
                ? 'from-white via-slate-100 to-slate-300' 
                : 'from-slate-900 via-indigo-700 to-slate-800'
            } text-transparent`}>
              Hi, I'm Ashwin Verma.
              <span className={`block mt-2 text-4xl sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r ${
                isDark 
                  ? 'from-indigo-400 to-purple-400' 
                  : 'from-indigo-600 to-purple-600'
              } text-transparent`}>I create polished digital experiences.</span>
            </h1>
            <p className={`text-lg sm:text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'} leading-relaxed max-w-2xl`}>
              I build responsive, modern web applications with React, Tailwind, and Java backend services.
              My focus is clean interfaces, strong performance, and seamless user experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="projects"
              smooth={true}
              offset={-88}
              duration={500}
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 transition hover:bg-indigo-400 sm:w-auto"
            >
              Explore Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-88}
              duration={500}
              className={`inline-flex w-full items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold transition hover:border-indigo-500 hover:bg-indigo-500 hover:text-white sm:w-auto ${isDark ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-300 bg-slate-100 text-slate-900'}`}
            >
              Let’s Talk
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { value: "10+", label: "Projects" },
              { value: "3+", label: "Years" },
              { value: "React / Spring", label: "Stack" },
            ].map((item) => (
              <div key={item.label} className={`rounded-3xl border p-4 text-left ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-xl flex-col gap-6">
          <div className={`rounded-4xl border p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300 ${isDark ? 'border-white/10 bg-slate-900/90 shadow-slate-950/30' : 'border-slate-200 bg-slate-50 shadow-slate-900/5'}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className={`text-sm uppercase tracking-[0.2em] ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>Featured Work</p>
                <h2 className={`mt-3 text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>E‑Book Store Platform</h2>
              </div>
              <div className={`rounded-2xl px-3 py-2 text-sm font-medium ${isDark ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-100 text-indigo-700'}`}>
                Live Preview
              </div>
            </div>

            <div className={`mt-8 space-y-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <p>
                A responsive web application built with React, Tailwind CSS, and Spring Boot for a seamless online book shopping experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <span className={`rounded-2xl px-4 py-3 text-sm ${isDark ? 'bg-slate-950/80 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>Responsive UI</span>
                <span className={`rounded-2xl px-4 py-3 text-sm ${isDark ? 'bg-slate-950/80 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>Authentication</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`rounded-3xl border p-6 ${isDark ? 'border-white/10 bg-linear-to-br from-slate-900/95 to-slate-800/95' : 'border-slate-200 bg-linear-to-br from-slate-100 to-slate-200'}`}>
              <p className={`text-sm uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Design</p>
              <p className={`mt-3 text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Clean interfaces</p>
            </div>
            <div className={`rounded-3xl border p-6 ${isDark ? 'border-white/10 bg-linear-to-br from-slate-900/95 to-slate-800/95' : 'border-slate-200 bg-linear-to-br from-slate-100 to-slate-200'}`}>
              <p className={`text-sm uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Code</p>
              <p className={`mt-3 text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Readable structure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

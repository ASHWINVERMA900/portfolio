import React from "react";
import { useTheme } from "../context/ThemeContext";

const milestones = [
  { value: "3+", label: "Years in Web Development" },
  { value: "10+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_40%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_40%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 lg:gap-24 lg:flex-row lg:items-center">
        <div className="space-y-6 sm:space-y-8 lg:w-1/2">
          <div className={`inline-flex items-center gap-2 sm:gap-3 rounded-full border px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium ${
            isDark ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-200' : 'border-indigo-200 bg-indigo-100/80 text-indigo-700'
          }`}>
            <span className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${isDark ? 'bg-indigo-400' : 'bg-indigo-500'}`} />
            Passionate developer with a polished product mindset
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className={`mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I design and ship secure, modern web applications using React, Tailwind CSS, and Spring Boot.
              My experience spans frontend interfaces, backend services, and delivering accessible digital products.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.label} className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-6 text-left ${
                isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
              }`}>
                <p className={`text-2xl sm:text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                <p className={`mt-1 sm:mt-2 text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className={`rounded-2xl sm:rounded-4xl border p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300 ${
            isDark ? 'border-white/10 bg-white/5 shadow-slate-950/30' : 'border-slate-200 bg-slate-50 shadow-slate-900/10'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>What I enjoy building</h3>
            <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I create intuitive dashboards, interactive tools, and performance-driven web portals that help users complete tasks faster.
              My work focuses on clean UI, reusable components, and high-quality code.
            </p>

            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
              {[
                "Responsive applications optimized for desktop and mobile",
                "API-driven systems with strong backend integration",
                "UI components with thoughtful animations and accessibility",
              ].map((item) => (
                <div key={item} className={`rounded-2xl sm:rounded-3xl p-4 sm:p-5 ring-1 ${
                  isDark ? 'bg-slate-950/90 ring-white/10' : 'bg-slate-100 ring-slate-200'
                }`}>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 lg:gap-24 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex rounded-full bg-indigo-500/15 px-4 py-2 text-sm font-medium text-indigo-300 ring-1 ring-indigo-500/20">
            Portfolio • Web Developer
          </span>

          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Hi, I’m Ashwin Verma.
              <span className="block text-indigo-300">I create polished digital experiences.</span>
            </h1>
            <p className="text-lg text-slate-300">
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
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-500 sm:w-auto"
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
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-xl flex-col gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Featured Work</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">E‑Book Store Platform</h2>
              </div>
              <div className="rounded-2xl bg-indigo-500/15 px-3 py-2 text-sm font-medium text-indigo-200">
                Live Preview
              </div>
            </div>

            <div className="mt-8 space-y-4 text-slate-300">
              <p>
                A responsive web application built with React, Tailwind CSS, and Spring Boot for a seamless online book shopping experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <span className="rounded-2xl bg-slate-950/80 px-4 py-3 text-sm">Responsive UI</span>
                <span className="rounded-2xl bg-slate-950/80 px-4 py-3 text-sm">Authentication</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Design</p>
              <p className="mt-3 text-xl font-semibold text-white">Clean interfaces</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Code</p>
              <p className="mt-3 text-xl font-semibold text-white">Readable structure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

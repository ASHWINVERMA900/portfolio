import React from "react";

const milestones = [
  { value: "3+", label: "Years in Web Development" },
  { value: "10+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 px-4 sm:px-6 py-16 sm:py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle,_rgba(99,102,241,0.18),_transparent_40%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 lg:gap-24 lg:flex-row lg:items-center">
        <div className="space-y-6 sm:space-y-8 lg:w-1/2">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-indigo-200">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-indigo-400" />
            Passionate developer with a polished product mindset
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className="mt-4 sm:mt-6 max-w-xl text-slate-300 text-base sm:text-lg leading-7 sm:leading-8">
              I design and ship secure, modern web applications using React, Tailwind CSS, and Spring Boot.
              My experience spans frontend interfaces, backend services, and delivering accessible digital products.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.label} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/80 p-4 sm:p-6 text-left">
                <p className="text-2xl sm:text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl sm:rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">What I enjoy building</h3>
            <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base leading-6 sm:leading-7">
              I create intuitive dashboards, interactive tools, and performance-driven web portals that help users complete tasks faster.
              My work focuses on clean UI, reusable components, and high-quality code.
            </p>

            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
              {[
                "Responsive applications optimized for desktop and mobile",
                "API-driven systems with strong backend integration",
                "UI components with thoughtful animations and accessibility",
              ].map((item) => (
                <div key={item} className="rounded-2xl sm:rounded-3xl bg-slate-950/90 p-4 sm:p-5 ring-1 ring-white/10">
                  <p className="text-xs sm:text-sm text-slate-300">{item}</p>
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

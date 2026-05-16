import React from "react";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Vite", "Postman", "Figma", "Jira"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 px-4 sm:px-6 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-indigo-300">Skills</p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold">Technologies I use</h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">My toolkit combines modern frontend practices with reliable backend services and developer workflow tools.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="rounded-xl sm:rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{category.title}</h3>
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="rounded-full bg-slate-950/75 px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

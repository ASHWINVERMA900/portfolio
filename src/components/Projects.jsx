import React from "react";

const projects = [
  {
    title: "E‑Book Store",
    description: "A modern bookstore with search, auth, and secure payment interfaces.",
    tags: ["React", "Spring Boot", "Tailwind"],
  },
  {
    title: "Chat App",
    description: "Real-time messaging with channels, notifications, and seamless UX.",
    tags: ["Socket.io", "React", "Node"],
  },
  {
    title: "Library System",
    description: "An efficient resource manager for library staff and students.",
    tags: ["CRUD", "MongoDB", "API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Selected Work</p>
          <h2 className="mt-4 text-4xl font-semibold">Projects I’m proud of</h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Each project is crafted with a focus on performance, clarity, and real-world usability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-200">Featured</span>
                <span>{project.tags.join(' • ')}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Live Demo
                </button>
                <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200 transition hover:border-indigo-500 hover:text-white">
                  View Code
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

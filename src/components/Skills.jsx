import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiVite,
  SiPostman,
  SiFigma,
  SiJira,
  SiCplusplus,
  SiPostgresql,
  SiGithub,
  SiSwagger,
} from "react-icons/si";
import { FaCss3Alt, FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-orange-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express", icon: SiExpress, color: "text-slate-500" },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Hibernate", icon: TbDatabase, color: "text-purple-500" },
      { name: "SQL", icon: FaDatabase, color: "text-slate-500" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "VS Code", icon: FaCode, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-700" },
      { name: "Swagger", icon: SiSwagger, color: "text-green-400" },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Figma", icon: SiFigma, color: "text-purple-400" },
      { name: "Jira", icon: SiJira, color: "text-blue-600" },
    ],
  },
];

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`px-4 sm:px-6 py-16 sm:py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className={`text-xs sm:text-sm uppercase tracking-[0.35em] ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>Skills</p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold">Technologies I use</h2>
          <p className={`mt-3 sm:mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>My toolkit combines modern frontend practices with reliable backend services and developer workflow tools.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className={`rounded-xl sm:rounded-4xl border p-6 sm:p-8 shadow-2xl transition-colors duration-300 ${
              isDark ? 'border-white/10 bg-slate-900/90 shadow-slate-950/20' : 'border-slate-200 bg-slate-50 shadow-slate-900/5'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className={`rounded-xl border p-4 sm:p-5 transition group cursor-pointer ${
                      isDark ? 'border-white/10 bg-slate-950/70 hover:bg-slate-900/90' : 'border-slate-200 bg-slate-100 hover:border-indigo-500/50 hover:bg-slate-200'
                    }`}>
                      <IconComponent className={`${skill.color} text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition`} />
                      <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

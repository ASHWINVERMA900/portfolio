import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    institution: "RGPV University",
    field: "Computer Science",
    cgpa: "7.67",
    year: "Pursuing",
    icon: FaGraduationCap,
  },
  {
    degree: "12th Grade",
    institution: "State Board",
    field: "Science Stream",
    percentage: "83.4%",
    year: "Completed",
    icon: FaGraduationCap,
  },
  {
    degree: "10th Grade",
    institution: "State Board",
    field: "General",
    percentage: "95%",
    year: "Completed",
    icon: FaGraduationCap,
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-slate-950 px-4 sm:px-6 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-indigo-300">Education</p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold">Academic Background</h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">My educational journey across schooling and university.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className="rounded-xl sm:rounded-4xl border border-white/10 bg-slate-900/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/20 hover:border-indigo-500/50 hover:bg-slate-900 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="text-indigo-400 text-3xl sm:text-4xl" />
                  <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-medium">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-sm sm:text-base text-indigo-300 font-medium mb-3">{edu.institution}</p>
                <p className="text-xs sm:text-sm text-slate-400 mb-4">{edu.field}</p>

                <div className="pt-4 border-t border-white/10">
                  {edu.cgpa && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-slate-400">CGPA</span>
                      <span className="text-sm sm:text-base font-semibold text-green-400">{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-slate-400">Percentage</span>
                      <span className="text-sm sm:text-base font-semibold text-green-400">{edu.percentage}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;

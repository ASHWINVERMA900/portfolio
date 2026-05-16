import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

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
  const { isDark } = useTheme();

  return (
    <section
      id="education"
      className={`px-4 sm:px-6 py-16 sm:py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className={`text-xs sm:text-sm uppercase tracking-[0.35em] ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>Education</p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold">Academic Background</h2>
          <p className={`mt-3 sm:mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>My educational journey across schooling and university.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className={`rounded-xl sm:rounded-4xl border p-6 sm:p-8 shadow-2xl transition hover:border-indigo-500/50 ${
                  isDark ? 'border-white/10 bg-slate-900/90 shadow-slate-950/20 hover:bg-slate-900' : 'border-slate-200 bg-slate-50 shadow-slate-900/5 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className={`text-3xl sm:text-4xl ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`} />
                  <span className={`text-xs sm:text-sm px-3 py-1 rounded-full border font-medium ${
                    isDark ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : 'bg-indigo-100 border-indigo-200 text-indigo-700'
                  }`}>
                    {edu.year}
                  </span>
                </div>

                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h3>
                <p className={`text-sm sm:text-base font-medium mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{edu.institution}</p>
                <p className={`text-xs sm:text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{edu.field}</p>

                <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  {edu.cgpa && (
                    <div className="flex justify-between items-center">
                      <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>CGPA</span>
                      <span className={`text-sm sm:text-base font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex justify-between items-center">
                      <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Percentage</span>
                      <span className={`text-sm sm:text-base font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{edu.percentage}</span>
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

import React from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className={`px-6 py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <p className={`text-sm uppercase tracking-[0.35em] ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>Get in Touch</p>
            <h2 className="text-4xl font-semibold">Let’s build something together.</h2>
            <p className={`max-w-xl leading-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether you have a project idea, want to collaborate, or just want to say hello, I’m always open to new opportunities.
            </p>

            <div className={`space-y-4 rounded-4xl border p-8 ${isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-slate-50'}`}>
              <div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</p>
                <p className={`mt-2 text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>ashwin@example.com</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Location</p>
                <p className={`mt-2 text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Remote / India</p>
              </div>
            </div>
          </div>

          <div className={`rounded-4xl border p-8 shadow-2xl transition-colors duration-300 ${
            isDark ? 'border-white/10 bg-slate-950/90 shadow-slate-950/30' : 'border-slate-200 bg-slate-50 shadow-slate-900/10'
          }`}>
            <form className="space-y-5">
              <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Name</label>
              <input type="text" placeholder="Your name" className={`w-full rounded-3xl border px-5 py-4 outline-none focus:border-indigo-500 ${
                isDark ? 'border-white/10 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'
              }`} />

              <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Email</label>
              <input type="email" placeholder="Your email" className={`w-full rounded-3xl border px-5 py-4 outline-none focus:border-indigo-500 ${
                isDark ? 'border-white/10 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'
              }`} />

              <label className={`block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Message</label>
              <textarea rows="5" placeholder="Tell me about your project" className={`w-full rounded-3xl border px-5 py-4 outline-none focus:border-indigo-500 ${
                isDark ? 'border-white/10 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'
              }`} />

              <button type="submit" className="w-full rounded-full bg-indigo-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

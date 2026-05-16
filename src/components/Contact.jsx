import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Get in Touch</p>
            <h2 className="text-4xl font-semibold">Let’s build something together.</h2>
            <p className="max-w-xl text-slate-400 leading-8">
              Whether you have a project idea, want to collaborate, or just want to say hello, I’m always open to new opportunities.
            </p>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 text-base text-white">ashwin@example.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-2 text-base text-white">Remote / India</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
            <form className="space-y-5">
              <label className="block text-sm font-medium text-slate-300">Name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-indigo-500" />

              <label className="block text-sm font-medium text-slate-300">Email</label>
              <input type="email" placeholder="Your email" className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-indigo-500" />

              <label className="block text-sm font-medium text-slate-300">Message</label>
              <textarea rows="5" placeholder="Tell me about your project" className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-indigo-500" />

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

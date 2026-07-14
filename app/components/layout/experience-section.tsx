"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    period: "02/2025 - 10/2025",
    company: "CÔNG TY TNHH DỊCH VỤ TIN HỌC CEH (CEHSOFT)",
    role: ["Intern UI/UX Designer", "Intern Front-End Developer"],
  },
];

const education = [
  {
    period: "2022 - 2026",
    school: "FPT University",
    major: "Software Engineering",
  },
  {
    period: "11/2025 - Now",
    school: "The Design Council",
    major: ["UI Design Foundation", "UX Fundamentals"],
  },
];

const skills = [
  "Figma",
  "Responsive Design",
  "Design System",
  "Wireframing",
  "Prototyping",
  "User Flow",
  "Next.js",
  "HTML/CSS",
  "Tailwind",
];

export function ExperienceSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = gsap.utils.toArray<HTMLElement>("article", grid);

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0, y: 40 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out", duration: 0.9 },
        })
        .to(cards, { opacity: 1, y: 0, stagger: 0.15 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="bg-[#070511]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-title text-sm font-semibold uppercase tracking-[0.3em] text-[#C084FC]">
            Experience / Education / Skills
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
        >
          <div className="grid gap-6">
            <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(168,85,247,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E9D5FF]">
                  Experience
                </p>
              </div>

              <div className="mt-6 space-y-5">
                {experience.map((item) => (
                  <div
                    key={`${item.period}-${item.company}`}
                    className="rounded-2xl border border-white/10 bg-[#0E0A19]/85 p-5 transition-colors duration-300 hover:border-[#C084FC]/30 hover:bg-[#120A25]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-title text-sm font-semibold uppercase tracking-[0.22em] text-[#C084FC]">
                        {item.period}
                      </p>
                    </div>
                    <h3 className="mt-4 font-body text-xl font-semibold text-white sm:text-2xl">
                      {item.company}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.role.map((role) => (
                        <span
                          key={role}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/75"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(168,85,247,0.08)] backdrop-blur sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E9D5FF]">
                Education
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {education.map((item) => (
                  <div
                    key={`${item.period}-${item.school}`}
                    className="rounded-2xl border border-white/10 bg-[#0E0A19]/85 p-5 transition-all duration-300 hover:border-[#C084FC]/30 hover:bg-[#120A25] hover:translate-y-1"
                  >
                    <p className="font-title text-sm font-semibold uppercase tracking-[0.22em] text-[#C084FC]">
                      {item.period}
                    </p>
                    <h3 className="mt-4 font-body text-xl font-semibold text-white">
                      {item.school}
                    </h3>
                    {Array.isArray(item.major) ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.major.map((major) => (
                          <span
                            key={major}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/75"
                          >
                            {major}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                          {item.major}
                        </span>
                      </div>

                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(168,85,247,0.95),rgba(88,28,135,0.92))] p-6 text-white shadow-[0_24px_70px_rgba(168,85,247,0.22)] sm:p-7 lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              My Skills
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

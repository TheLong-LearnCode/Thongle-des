import { SectionHeading } from "./section-heading";

const education = [
  "Bachelor's degree in a relevant technology or design field",
  "Focused on web fundamentals, systems thinking, and product mindset",
  "Continuous learning through courses, side projects, and hands-on builds",
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI architecture",
  "API integration",
  "Responsive design",
];

const experience = [
  "Built landing pages and internal tools with a focus on clarity and speed",
  "Translated product requirements into reusable UI components",
  "Worked closely with designers and stakeholders to ship improvements iteratively",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-[#4AB265]/30 bg-[#06373B]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Education, Skills, Experience"
          title="Một section gom đủ thông tin nền tảng để người xem đánh giá nhanh năng lực của bạn."
          description="Bạn có thể thay toàn bộ nội dung bên dưới bằng thông tin thật của mình, nhưng cấu trúc này đã đủ để trình bày theo kiểu chuyên nghiệp."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[#4AB265]/30 bg-[#061A23] p-7 shadow-[0_18px_50px_rgba(74,178,101,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4AB265]">Education</p>
            <ul className="mt-6 space-y-4 text-[#F4F6F7]">
              {education.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4AB265]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[#4AB265]/30 bg-[#4AB265] p-7 text-white shadow-[0_18px_50px_rgba(74,178,101,0.14)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Skills</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white/95"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-white/70">
              Tập trung vào stack hiện đại và cách triển khai có thể mở rộng theo dự án.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[#4AB265]/30 bg-[#061A23] p-7 shadow-[0_18px_50px_rgba(74,178,101,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4AB265]">Experience</p>
            <ul className="mt-6 space-y-4 text-[#F4F6F7]">
              {experience.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4AB265]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

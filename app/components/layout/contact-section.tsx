
const contactLinks = [
  { label: "Email", value: "thongle.des@gmail.com", href: "mailto:thongle.des@gmail.com" },
  { label: "Facebook", value: "Thống Lê", href: "https://www.facebook.com/thongpearminh" },
  { label: "Phone / Zalo", value: "0708946445", href: "tel:0708946445" },
  { label: "Github", value: "TheLong-LearnCode", href: "https://github.com/TheLong-LearnCode" },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#070511]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 rounded-[2.25rem] border border-white/10 bg-[#0F0B1A]/90 px-6 py-10 shadow-[0_25px_80px_rgba(168,85,247,0.08)] sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex flex-col justify-center">
            <p className="font-title text-sm font-semibold uppercase tracking-[0.3em] text-[#C084FC]">
              Contact
            </p>
            <h2 className="mt-4 font-title text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something <br />
              <span className="text-[#C084FC]">extraordinary</span> together.
            </h2>
          </div>
          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-[#0E0A19]/50 px-6 py-4 text-white transition-all duration-300 hover:border-[#C084FC]/30 hover:bg-[#120A25] hover:translate-x-1"
              >
                <div>
                  <p className="text-sm text-white/40 transition-colors duration-300 group-hover:text-[#C084FC]/70">{item.label}</p>
                  <p className="mt-1 text-lg font-medium">{item.value}</p>
                </div>
                <span className="text-white/40 transition-colors duration-300 group-hover:text-[#C084FC] group-hover:translate-x-0.5 transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

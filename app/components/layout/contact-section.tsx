import { SectionHeading } from "./section-heading";

const contactLinks = [
  { label: "Email", value: "your-email@example.com", href: "mailto:your-email@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "#" },
  { label: "GitHub", value: "github.com/your-profile", href: "#" },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#06373B]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 rounded-[2.25rem] border border-[#4AB265]/30 bg-[#4AB265] px-6 py-10 shadow-[0_25px_80px_rgba(74,178,101,0.18)] sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Bạn có thể mở lời bằng một câu ngắn, rõ ràng và dễ phản hồi."
              description="Nếu muốn nhận hợp tác, mời phỏng vấn hoặc trao đổi thêm về dự án, phần này nên đưa người xem tới bước liên hệ trong một cú nhấp."
            />
            <a
              href="mailto:your-email@example.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#4AB265] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send an email
            </a>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white transition-colors duration-200 hover:bg-white/20"
              >
                <div>
                  <p className="text-sm text-white/70">{item.label}</p>
                  <p className="mt-1 text-lg font-medium">{item.value}</p>
                </div>
                <span className="text-white/70">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

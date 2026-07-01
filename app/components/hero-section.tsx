const highlights = [
  { value: "3+", label: "Years building interfaces" },
  { value: "12", label: "Projects shipped" },
  { value: "Full-stack", label: "From UI to deployment" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#4AB265]/30 bg-[#06373B]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,178,101,0.05)_25%,transparent_25%,transparent_50%,rgba(74,178,101,0.05)_50%,rgba(74,178,101,0.05)_75%,transparent_75%,transparent)] bg-[length:36px_36px] opacity-10" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4AB265]/30 bg-[#061A23] px-4 py-2 text-sm font-medium text-[#4AB265] shadow-sm shadow-[#4AB265]/10">
            <span className="h-2 w-2 rounded-full bg-[#4AB265]" />
            Portfolio landing page
          </div>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tôi thiết kế và xây dựng những trải nghiệm web rõ ràng, đẹp và có chiều sâu.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F4F6F7] sm:text-xl">
            Đây là một landing page portfolio theo cấu trúc rõ ràng: giới thiệu bản thân,
            học vấn, kỹ năng, kinh nghiệm, dự án và cách liên hệ. Mục tiêu là tạo cảm giác
            chuyên nghiệp nhưng vẫn ấm và hiện đại.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#project"
              className="inline-flex items-center justify-center rounded-full bg-[#4AB265] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#4AB265]/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Xem dự án
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#4AB265]/30 bg-[#061A23] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#4AB265] hover:text-white"
            >
              Liên hệ
            </a>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#4AB265]/30 bg-[#061A23]/85 p-5 shadow-[0_18px_60px_rgba(74,178,101,0.08)] backdrop-blur"
              >
                <dt className="text-2xl font-semibold text-white">{item.value}</dt>
                <dd className="mt-2 text-sm leading-6 text-[#F4F6F7]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-stretch">
          <div className="absolute inset-x-8 top-8 h-72 rounded-[2rem] bg-[#4AB265]/5 blur-3xl" />
          <div className="relative grid w-full gap-4 self-end rounded-[2rem] border border-[#4AB265]/30 bg-[#061A23]/90 p-6 shadow-[0_25px_80px_rgba(74,178,101,0.12)] backdrop-blur-xl sm:p-8">
            <div className="rounded-[1.5rem] bg-[#4AB265] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Now</p>
              <p className="mt-4 text-2xl font-semibold leading-tight">
                Focused on building polished frontends with thoughtful interactions.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Landing pages, dashboards và các trải nghiệm giúp người dùng hiểu sản phẩm
                nhanh hơn.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#061A23] p-5">
                <p className="text-sm font-medium text-[#4AB265]">Availability</p>
                <p className="mt-3 text-lg font-semibold text-white">Open for freelance & full-time roles</p>
              </div>
              <div className="rounded-3xl bg-[#061A23] p-5">
                <p className="text-sm font-medium text-[#4AB265]">Location</p>
                <p className="mt-3 text-lg font-semibold text-white">Remote friendly, based in Vietnam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

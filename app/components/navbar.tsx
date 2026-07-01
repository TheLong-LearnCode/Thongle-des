const links = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4AB265]/30 bg-[#061A23]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#4AB265] text-sm font-semibold text-white shadow-lg shadow-[#4AB265]/20 transition-transform duration-300 group-hover:-translate-y-0.5">
            T
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4F6F7]">
              Portfolio
            </p>
            <p className="text-base font-semibold text-white">Thong Le</p>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#F4F6F7] transition-colors duration-200 hover:bg-[#4AB265] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-[#4AB265]/30 bg-[#4AB265] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#4AB265]/20 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

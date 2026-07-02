"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#project" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        setIsScrolled((current) => {
          if (scrollY > 28) return true;
          if (scrollY < 12) return false;
          return current;
        });

        scrollFrameRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = ["home", ...links.map((link) => link.href.replace("#", ""))]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveLink(`#${visibleEntry.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-70">
      <div
        className="mx-auto flex w-full justify-center px-3 sm:px-6 lg:px-8"
      >
        <div
          className={`flex w-full items-center justify-between gap-2 sm:gap-3 md:justify-start transition-[width,background-color,border-color,box-shadow,padding,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled
              ? "rounded-2xl border border-white/10 bg-[#0A0716]/85 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              : "rounded-none border border-transparent bg-transparent px-1 py-3 shadow-none backdrop-blur-0"
          }`}
          style={{
            width: isScrolled ? "min(80rem, calc(100vw - 1.5rem))" : "min(96rem, calc(100vw - 0.75rem))",
          }}
        >
          <a href="#home" className="group flex items-center gap-2.5 pr-1 sm:pr-2">
            <Image src="/logo.png" alt="Logo" width={120} height={80} priority />
          </a>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-xs font-title font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${
                  activeLink === link.href
                    ? "bg-[#A855F7] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "text-white/72"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-1 flex items-center gap-2 sm:ml-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-[#A855F7] px-4 py-2 text-xs font-title font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(168,85,247,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(168,85,247,0.55)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

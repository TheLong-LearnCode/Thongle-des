
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function AboutSection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    const handleMove = (event: PointerEvent) => {
      const bounds = card.getBoundingClientRect();
      const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      card.style.setProperty("--card-rotate-x", `${offsetY * -4}deg`);
      card.style.setProperty("--card-rotate-y", `${offsetX * 5}deg`);
      card.style.setProperty("--card-move-x", `${offsetX * 10}px`);
      card.style.setProperty("--card-move-y", `${offsetY * 10}px`);

      glow.style.transform = `translate(${offsetX * 18}px, ${offsetY * 18}px)`;
    };

    const handleLeave = () => {
      card.style.setProperty("--card-rotate-x", "0deg");
      card.style.setProperty("--card-rotate-y", "0deg");
      card.style.setProperty("--card-move-x", "0px");
      card.style.setProperty("--card-move-y", "0px");
      glow.style.transform = "translate(0px, 0px)";
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);

    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <section id="about" className="bg-[#070511]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-28">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="font-title text-sm font-semibold uppercase tracking-[0.3em] text-[#C084FC]">
            About me
          </p>

          <h2 className="mt-4 font-title text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Hi, I&apos;m <span className="text-[#E9D5FF]">Thong Le</span>
          </h2>

          <div className="mx-auto mt-7 max-w-xl space-y-5 font-body text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:mx-0 lg:mt-8 lg:text-lg">
            <p>
              I&apos;m a <span className="text-[#C084FC] font-bold">UI/UX Designer</span> with a background in Front-end Development. I believe both fields share the same goal: creating intuitive, visually appealing, and meaningful user experiences.
            </p>
            <p>
              My development background helps me understand technical constraints and collaborate effectively with developers.
            </p>
            <p>
              My passion for design drives me to craft interfaces that are not only beautiful but also functional and user-centered.
            </p>
            <p>
              I&apos;m constantly learning, exploring new ideas, and refining my skills to create digital experiences that leave a lasting impression.
            </p>
          </div>

        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            className="group relative w-full max-w-sm transform-3d rounded-4xl border border-white/10 bg-[#0F0B1A]/90 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out sm:max-w-md sm:p-4"
            style={{
              transform:
                "perspective(1200px) translate3d(var(--card-move-x, 0px), var(--card-move-y, 0px), 0) rotateX(var(--card-rotate-x, 0deg)) rotateY(var(--card-rotate-y, 0deg))",
            }}
          >
            <div
              ref={glowRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.28),transparent_68%)] blur-2xl transition-transform duration-300"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#120A25]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src="/thongle.jpg"
                  alt="It me"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

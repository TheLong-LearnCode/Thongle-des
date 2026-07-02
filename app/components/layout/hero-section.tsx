"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const glowOneRef = useRef<HTMLDivElement | null>(null);
  const glowTwoRef = useRef<HTMLDivElement | null>(null);
  const glowThreeRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });
  const [lineOne, setLineOne] = useState("");
  const [lineTwo, setLineTwo] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    const glowOne = glowOneRef.current;
    const glowTwo = glowTwoRef.current;
    const glowThree = glowThreeRef.current;
    const grid = gridRef.current;

    if (!section || !cursor || !glowOne || !glowTwo || !glowThree || !grid) {
      return;
    }

    gsap.set([glowOne, glowTwo, glowThree, grid], { x: 0, y: 0 });
    gsap.set(cursor, { opacity: 1 });

    const tweenIn = gsap.timeline({ defaults: { ease: "power3.out" } });
    tweenIn.fromTo(
      [glowOne, glowTwo, glowThree],
      { scale: 0.92, opacity: 0.45 },
      { scale: 1, opacity: 1, duration: 1.4, stagger: 0.08 },
    );

    gsap.to(cursor, {
      opacity: 0,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    const animationState = { stopped: false };
    const typeText = async () => {
      const first = "Welcome to my Portpolio,";
      const second = "Nice to meet youu!";

      for (let index = 0; index <= first.length && !animationState.stopped; index++) {
        setLineOne(first.slice(0, index));
        await new Promise((resolve) => setTimeout(resolve, 45));
      }

      await new Promise((resolve) => setTimeout(resolve, 220));

      for (let index = 0; index <= second.length && !animationState.stopped; index++) {
        setLineTwo(second.slice(0, index));
        await new Promise((resolve) => setTimeout(resolve, 38));
      }
    };

    void typeText();

    const ticker = () => {
      const current = pointerCurrentRef.current;
      const target = pointerTargetRef.current;
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      gsap.set(glowOne, { x: current.x * 72, y: current.y * 54 });
      gsap.set(glowTwo, { x: current.x * -118, y: current.y * 82 });
      gsap.set(glowThree, { x: current.x * 42, y: current.y * -38 });
      gsap.set(grid, { x: current.x * -14, y: current.y * -10 });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      pointerTargetRef.current.x = gsap.utils.clamp(-1, 1, offsetX);
      pointerTargetRef.current.y = gsap.utils.clamp(-1, 1, offsetY);
    };

    const handlePointerLeave = () => {
      pointerTargetRef.current.x = 0;
      pointerTargetRef.current.y = 0;
    };

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave);
    gsap.ticker.add(ticker);

    return () => {
      animationState.stopped = true;
      gsap.ticker.remove(ticker);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate h-screen overflow-hidden bg-[#070511]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_35%,transparent_65%,rgba(255,255,255,0.02)_100%)]" />

      <div
        ref={glowOneRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-[10%] h-128 w-lg rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,rgba(168,85,247,0.12)_32%,transparent_68%)] blur-3xl"
      />
      <div
        ref={glowTwoRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[8%] h-88 w-88 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.24)_0%,rgba(192,132,252,0.08)_28%,transparent_70%)] blur-3xl"
      />
      <div
        ref={glowThreeRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[22%] h-112 w-md rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.14)_0%,rgba(236,72,153,0.05)_26%,transparent_68%)] blur-3xl"
      />

      <div
        ref={gridRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[28px_28px]"
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-6xl text-center">
          <h1 className="font-semibold tracking-tight text-white text-center">
            <span className="block min-h-[1.1em] text-6xl sm:text-7xl lg:text-8xl">{lineOne}</span>
            <span className="mt-2 block text-5xl sm:text-6xl lg:text-7xl text-[#A855F7]">
              <span>{lineTwo}</span>
              <span ref={cursorRef} className="ml-1 inline-block text-[#C084FC]">|</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    name: "Droniverse",
    image: "/droniverses.png",
    link: "https://droniverse.io.vn",
  },
  {
    name: "VSL Payments",
    image: "/vsl-payment.png",
    link: "https://vsl-payment.cehcloud.net",
  },
  {
    name: "Kawasaki W175",
    image: "/w175.png",
    link: "https://www.figma.com/proto/iiNzwuz5s49U1mV32sJ1IP/L%C3%AA-Minh-Th%E1%BB%91ng---Kawasaki?node-id=1-4&viewport=224%2C216%2C0.41&t=JXWMFRyCIS6lmqTs-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

interface Project {
  name: string;
  image: string;
  link: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // Set initial 3D transforms
    gsap.set(card, {
      transformPerspective: 1200,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformStyle: "preserve-3d",
    });

    const coords = { x: 0, y: 0 };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilting angles mirroring the system style in about-section
      const maxTiltX = 6;
      const maxTiltY = 6;
      const rotateX = -((y - centerY) / centerY) * maxTiltX;
      const rotateY = ((x - centerX) / centerX) * maxTiltY;

      // Smooth tilt using GSAP
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.02,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Smooth spotlight tracking using GSAP to animate CSS custom properties
      gsap.to(coords, {
        x: x,
        y: y,
        duration: 0.35,
        ease: "power1.out",
        onUpdate: () => {
          glow.style.setProperty("--mouse-x", `${coords.x}px`);
          glow.style.setProperty("--mouse-y", `${coords.y}px`);
        },
        overwrite: "auto",
      });
    };

    const handlePointerEnter = () => {
      gsap.to(glow, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handlePointerLeave = () => {
      // Smoothly ease card back to flat state
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(glow, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0E0A19]/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-[#C084FC]/50 transition-colors duration-300 cursor-pointer transform-3d"
    >
      {/* Spotlight glow effect using radial gradient (Purple) */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 z-20"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.18), transparent 80%)`,
        }}
      />
      
      {/* Project Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-fill transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070511]/90 via-[#070511]/30 to-transparent z-10" />
      </div>

      {/* Title Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10">
        <div className="flex items-center justify-between">
          <h3 className="font-title text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#C084FC]">
            {project.name}
          </h3>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#F4F6F7]/60 group-hover:text-white transition-colors duration-300">
            0{index + 1}
          </span>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="project" className="relative bg-linear-to-b from-[#070511] via-[#0E0A19] to-[#070511] overflow-hidden">
      {/* Ambient background accent light (Purple) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Project"
          title="Here are some of the projects I've worked on throughout my studies and internship experience."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}




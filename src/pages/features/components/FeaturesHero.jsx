"use client";

import { useMotionPreference } from "./useMotionPreference";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   ANIMATED BLUE GRADIENT WITH TINY FLOATING PARTICLES
===================================================== */

function HeroCenterGlow() {
  const backgroundRef = useRef(null);
  const reducedMotion = useMotionPreference();

  const particles = useMemo(() => {
    return Array.from({ length: 65 }, (_, i) => {
      const random = (seed) => {
        const x = Math.sin(seed * 127.1 + 78.233) * 43758.5453;
        return Math.round((x - Math.floor(x)) * 1e6) / 1e6;
      };

      return {
        id: i,
        x: 12 + random(i + 1) * 76,
        y: 38 + random(i + 101) * 48,
        size: 1.2 + random(i + 201) * 1.2,
        opacity: 0.65 + random(i + 301) * 0.3,
        duration: 9 + random(i + 401) * 9,
        delay: random(i + 501) * -15,
        moveX: -35 + random(i + 601) * 70,
        moveY: -40 + random(i + 701) * 80,
      };
    });
  }, []);

  useLayoutEffect(() => {
    const root = backgroundRef.current;
    if (!root) return;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const mainGlow = root.querySelector(".main-glow");
      const secondaryGlow = root.querySelector(".secondary-glow");
      const cyanGlow = root.querySelector(".cyan-glow");
      const centralGlow = root.querySelector(".central-glow");

      // Slow changes in blue gradient

      gsap.to(mainGlow, {
        x: 45,
        y: -20,
        scale: 1.18,
        opacity: 0.95,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(secondaryGlow, {
        x: -60,
        y: 30,
        scale: 1.2,
        opacity: 0.95,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(cyanGlow, {
        x: 70,
        y: -25,
        scale: 1.25,
        opacity: 0.85,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(centralGlow, {
        scale: 1.22,
        opacity: 0.9,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Tiny white particles move continuously

      const dots = gsap.utils.toArray(
        root.querySelectorAll("[data-particle]")
      );

      dots.forEach((dot, index) => {
        const particle = particles[index];

        gsap.fromTo(
          dot,
          {
            x: -particle.moveX / 2,
            y: -particle.moveY / 2,
            opacity: particle.opacity * 0.65,
          },
          {
            x: particle.moveX / 2,
            y: particle.moveY / 2,
            opacity: particle.opacity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            immediateRender: true,
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [particles, reducedMotion]);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-0 z-0
        overflow-hidden bg-white
      "
    >
      {/* MAIN ROYAL BLUE GLOW */}
      <div
        className="
          main-glow absolute left-1/2 top-[46%]
          h-[550px] w-[900px] max-w-none
          -translate-x-1/2 rounded-full
          opacity-80 blur-[75px]
        "
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(245,145,32,0.60) 0%,
            rgba(255,171,69,0.45) 28%,
            rgba(246,168,112,0.24) 55%,
            transparent 80%
          )`,
        }}
      />

      {/* SOFT LIGHT BLUE GLOW */}
      <div
        className="
          secondary-glow absolute
          left-[37%] top-[53%]
          h-[440px] w-[700px] max-w-none
          rounded-full opacity-80 blur-[85px]
        "
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(246,168,112,0.56) 0%,
            rgba(249,204,165,0.36) 40%,
            transparent 78%
          )`,
        }}
      />

      {/* CYAN GRADIENT */}
      <div
        className="
          cyan-glow absolute
          left-[12%] top-[54%]
          h-[420px] w-[630px] max-w-none
          rounded-full opacity-65 blur-[95px]
        "
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(235,139,95,0.45) 0%,
            rgba(248,191,146,0.28) 40%,
            transparent 80%
          )`,
        }}
      />

      {/* CENTRAL LIGHT */}
      <div
        className="
          central-glow absolute
          left-1/2 top-[59%]
          h-[270px] w-[480px] max-w-none
          -translate-x-1/2 rounded-full
          opacity-75 blur-[65px]
        "
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(255,171,69,0.50),
            rgba(249,204,165,0.24) 50%,
            transparent 80%
          )`,
        }}
      />

      {/* 65 VISIBLE MICRO PARTICLES */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            data-particle
            className="
              absolute block rounded-full
              bg-white will-change-transform
            "
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow:
                "0 0 4px 1px rgba(255,255,255,0.9), 0 0 8px 2px rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* TOP WHITE FADE */}
      <div
        className="
          absolute inset-x-0 top-0 z-20 h-[30%]
          bg-gradient-to-b
          from-white via-white/65 to-transparent
        "
      />

      {/* BOTTOM WHITE FADE */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-20 h-[18%]
          bg-gradient-to-t
          from-white to-transparent
        "
      />
    </div>
  );
}

/* =====================================================
   FEATURES HERO
===================================================== */

export default function FeaturesHero() {
  const sectionRef = useRef(null);
  const reducedMotion = useMotionPreference();
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const content = contentRef.current;

      const label = content.querySelector("[data-label]");
      const headings = content.querySelectorAll("[data-heading]");
      const description = content.querySelector("[data-description]");
      const buttons = content.querySelector("[data-buttons]");
      const bottomLine = content.querySelector("[data-bottom-line]");

      // Start only the content hidden
      gsap.set(label, {
        autoAlpha: 0,
        y: 24,
      });

      gsap.set(headings, {
        autoAlpha: 0,
        yPercent: 110,
      });

      gsap.set(description, {
        autoAlpha: 0,
        y: 30,
      });

      gsap.set(buttons, {
        autoAlpha: 0,
        y: 38,
      });

      gsap.set(bottomLine, {
        autoAlpha: 0,
        y: 20,
      });

      // Controlled sequence with delayed buttons
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(label, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
        }, 0.15)

        .to(headings, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.95,
          stagger: 0.15,
        }, 0.4)

        .to(description, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        }, 1.05)

        // Buttons appear after the heading and description
        .to(buttons, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, 2.25)

        .to(bottomLine, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        }, 2.65);

      // Gentle content parallax while scrolling
      gsap.to(content, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="features-hero"
      className="
        relative isolate flex w-full
        min-h-[680px] items-center justify-center
        overflow-hidden bg-white py-28
        lg:min-h-[calc(100svh-80px)]
        lg:py-20
      "
    >
      {/* ANIMATED GRADIENT WITH TINY PARTICLES */}
      <HeroCenterGlow />

      {/* CENTERED CONTENT */}
      <div
        ref={contentRef}
        className="
          relative z-10 mx-auto flex
          w-full max-w-[1100px]
          flex-col items-center text-center
          px-5 sm:px-8
        "
      >
        {/* EYEBROW */}
        <div
          data-label
          className="
            inline-flex items-center gap-3
            rounded-full border border-[#EBDCD4]
            bg-white/80 px-5 py-2.5
            shadow-[0_4px_22px_rgba(137,76,13,0.035)]
            backdrop-blur-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute inline-flex h-full w-full
                animate-ping rounded-full
                bg-[#F59120] opacity-20
              "
            />
            <span className="relative h-2 w-2 rounded-full bg-[#F59120]" />
          </span>

          <span
            className="
              text-[10px] font-semibold
              uppercase tracking-[0.18em]
              text-[#F59120] sm:text-[11px]
            "
          >
            THE ANTINTERN ADVANTAGE
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1
          className="
            mt-8 max-w-[980px]
            text-[clamp(2.65rem,5.5vw,5.7rem)]
            font-semibold leading-[1.09]
            tracking-[-0.055em]
            text-[#19283E]
          "
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-heading className="block">
              Everything You Need
            </span>
          </span>

          <span className="block overflow-hidden pb-[0.08em]">
            <span data-heading className="block">
              to Ace Your
            </span>
          </span>

          <span className="block overflow-hidden pb-[0.08em]">
            <span data-heading className="block text-[#F59120]">
              Interview.
            </span>
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          data-description
          className="
            mt-5 max-w-[610px]
            text-[14px] font-normal
            leading-[1.85] text-[#746965]
            sm:text-[16px]
          "
        >
          Prepare with guided interview tracks, realistic practice,
          and clear feedback for the roles you want.
        </p>

        {/* DELAYED CTA BUTTONS */}
        <div
          data-buttons
          className="
            mt-9 flex flex-wrap
            items-center justify-center gap-3
          "
        >
          <a
            href="/#interviews"
            className="
              group inline-flex min-h-[48px]
              items-center justify-center gap-3
              rounded-full bg-[#F59120]
              px-7 py-3
              text-[13px] font-medium text-white
              shadow-[0_8px_24px_rgba(245,145,32,0.16)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#DC770D]
              hover:shadow-[0_12px_30px_rgba(245,145,32,0.2)]
            "
          >
            Explore Interview Tracks
            <span
              className="
                text-[18px] leading-none
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              &rarr;
            </span>
          </a>

          <a
            href="mailto:support@antintern.com?subject=Interview%20preparation"
            className="
              group inline-flex min-h-[48px]
              items-center justify-center gap-3
              rounded-full border border-[#E5D7CF]
              bg-white/90 px-7 py-3
              text-[13px] font-medium text-[#5A504D]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#D9BDB0]
              hover:bg-[#FFF8F2]
            "
          >
            Ask About Preparation
            <span
              className="
                text-[18px] leading-none
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              &rarr;
            </span>
          </a>
        </div>

        {/* BOTTOM DETAIL */}
        <div
          data-bottom-line
          className="
            mt-12 flex items-center justify-center
            gap-4 sm:mt-14
          "
        >
          <span className="h-px w-8 bg-[#DCC9BD]" />

          <span
            className="
              text-[10px] font-medium
              uppercase tracking-[0.16em]
              text-[#9D8E85]
            "
          >
            Learn &middot; Build &middot; Grow
          </span>

          <span className="h-px w-8 bg-[#DCC9BD]" />
        </div>
      </div>
    </section>
  );
}

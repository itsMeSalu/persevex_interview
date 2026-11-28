"use client";


import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import {
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Eye,
  Sparkles,
  Award,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Gift,
} from "lucide-react";

import "./StripeAnimation.css";

gsap.registerPlugin(ScrollTrigger);

/* ===================================================
   ORIGINAL THEMES
=================================================== */

const THEMES = {
  "Pre-dawn": {
    top: "#F7F8FF",
    middle: "#CDD0FA",
    bottom: "#8C9DE1",
    core: "#7668D0",
    ray: "#6857BF",
    dot: "#5542A7",
  },
  Sunrise: {
    top: "#FFFFFF",
    middle: "#DAE9FF",
    bottom: "#FFD18A",
    core: "#FFAC65",
    ray: "#637CE5",
    dot: "#3764DF",
  },
  Daytime: {
    top: "#FFFFFF",
    middle: "#C4E2FF",
    bottom: "#E6F4FF",
    core: "#A2D5FF",
    ray: "#5086D3",
    dot: "#3271C7",
  },
  Dusk: {
    top: "#FFFFFF",
    middle: "#CCE2FF",
    bottom: "#B8D8FF",
    core: "#FFD16E",
    ray: "#587CDE",
    dot: "#315ED1",
  },
  Sunset: {
    top: "#FFFFFF",
    middle: "#FFE4C4",
    bottom: "#FFBC7A",
    core: "#E98DCD",
    ray: "#B8509C",
    dot: "#A42B89",
  },
  Night: {
    top: "#F5F3FF",
    middle: "#A49BDF",
    bottom: "#575A96",
    core: "#6152A4",
    ray: "#DED1FF",
    dot: "#DBCAFF",
  },
};

const OPTIONS = [
  { name: "Pre-dawn", Icon: Eye },
  { name: "Sunrise", Icon: Sunrise },
  { name: "Daytime", Icon: Sun },
  { name: "Dusk", Icon: Sparkles },
  { name: "Sunset", Icon: Sunset },
  { name: "Night", Icon: Moon },
];

/* ===================================================
   EXISTING ANTINTERN CONTENT
=================================================== */

const BENEFITS = [
  {
    number: "01",
    title: "Certification",
    description: "Earn recognition for your contributions.",
    Icon: Award,
    accent: "#3875EF",
  },
  {
    number: "02",
    title: "Internship Opportunities",
    description: "Explore hands-on industry experience.",
    Icon: BriefcaseBusiness,
    accent: "#E9AD38",
  },
  {
    number: "03",
    title: "Career Growth",
    description: "Build leadership and professional skills.",
    Icon: ChartNoAxesColumnIncreasing,
    accent: "#3875EF",
  },
  {
    number: "04",
    title: "Rewards & Recognition",
    description: "Get rewarded for your achievements.",
    Icon: Gift,
    accent: "#3875EF",
  },
];

/* ===================================================
   ORIGINAL RAY GENERATION
=================================================== */

function random(seed) {
  const value = Math.sin(seed * 123.3457) * 43758.5453;
  // Stabilize SVG attributes across Node and browser floating-point implementations.
  return Math.round((value - Math.floor(value)) * 1e6) / 1e6;
}

function generateRays() {
  const COUNT = 320;
  const originX = 760;
  const originY = 850;

  return Array.from({ length: COUNT }, (_, index) => {
    const progress = index / (COUNT - 1);

    const angle =
      (-178 + progress * 176) * (Math.PI / 180);

    const radius =
      420 + random(index + 14) * 410;

    const dotDistance =
      radius * (0.48 + random(index + 400) * 0.48);

    const ray = {
      id: index,

      startX: originX + Math.cos(angle) * 22,
      startY: originY + Math.sin(angle) * 22,

      endX: originX + Math.cos(angle) * radius,
      endY: originY + Math.sin(angle) * radius,

      dotX: originX + Math.cos(angle) * dotDistance,
      dotY: originY + Math.sin(angle) * dotDistance,

      opacity: 0.24 + random(index + 88) * 0.45,
      width: 0.4 + random(index + 72) * 0.65,
    };
    return Object.fromEntries(
      Object.entries(ray).map(([key, value]) => [key, Math.round(value * 1e4) / 1e4])
    );
  });
}

/* ===================================================
   INTERACTIVE RADIAL GLOBE

   Original 320 rays and spring animation preserved.
=================================================== */

function InteractiveRadial({
  theme,
  reducedMotion,
}) {
  const svgRef = useRef(null);
  const rayRefs = useRef([]);
  const dotRefs = useRef([]);
  const frameRef = useRef(null);
  const pointerInside = useRef(false);

  const rays = useMemo(() => generateRays(), []);

  const mouseX = useMotionValue(760);
  const mouseY = useMotionValue(450);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 22,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 22,
    mass: 0.8,
  });

  const handlePointerMove = useCallback(
    (event) => {
      if (reducedMotion) return;

      const svg = svgRef.current;
      if (!svg) return;

      const matrix = svg.getScreenCTM();
      if (!matrix) return;

      const point = svg.createSVGPoint();

      point.x = event.clientX;
      point.y = event.clientY;

      const local = point.matrixTransform(
        matrix.inverse()
      );

      mouseX.set(local.x);
      mouseY.set(local.y);

      pointerInside.current = true;
    },
    [mouseX, mouseY, reducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    pointerInside.current = false;
  }, []);

  useEffect(() => {
    // Touch devices animate the complete layer in CSS, avoiding per-ray DOM writes.
    if (reducedMotion || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const positions = rays.map(() => ({
      displacementX: 0,
      displacementY: 0,
      velocityX: 0,
      velocityY: 0,
    }));

    let previousTime = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );

    const svg = svgRef.current;
    if (svg) observer.observe(svg);

    const animate = (time) => {
      frameRef.current = requestAnimationFrame(animate);

      if (!isVisible || document.hidden) {
        previousTime = time;
        return;
      }

      const delta = previousTime
        ? Math.min((time - previousTime) / 16.67, 2)
        : 1;

      previousTime = time;

      const cursorX = smoothX.get();
      const cursorY = smoothY.get();

      rays.forEach((ray, index) => {
        const line = rayRefs.current[index];
        const dot = dotRefs.current[index];

        if (!line || !dot) return;

        const state = positions[index];

        const vx = ray.endX - ray.startX;
        const vy = ray.endY - ray.startY;

        const lengthSquared = vx * vx + vy * vy;

        const t = Math.max(
          0,
          Math.min(
            1,
            ((cursorX - ray.startX) * vx +
              (cursorY - ray.startY) * vy) /
              lengthSquared
          )
        );

        const nearestX = ray.startX + vx * t;
        const nearestY = ray.startY + vy * t;

        const dx = nearestX - cursorX;
        const dy = nearestY - cursorY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const influenceRadius = 145;

        let targetX = 0;
        let targetY = 0;

        if (
          pointerInside.current &&
          distance < influenceRadius
        ) {
          const influence = Math.pow(
            1 - distance / influenceRadius,
            2
          );

          const force = influence * 42;
          const safeDistance = Math.max(distance, 1);

          targetX = (dx / safeDistance) * force;
          targetY = (dy / safeDistance) * force;
        }

        const spring = 0.065;
        const damping = Math.pow(0.82, delta);

        state.velocityX +=
          (targetX - state.displacementX) *
          spring *
          delta;

        state.velocityY +=
          (targetY - state.displacementY) *
          spring *
          delta;

        state.velocityX *= damping;
        state.velocityY *= damping;

        state.displacementX += state.velocityX * delta;
        state.displacementY += state.velocityY * delta;

        const controlX =
          ray.startX +
          vx * 0.72 +
          state.displacementX * 1.15;

        const controlY =
          ray.startY +
          vy * 0.72 +
          state.displacementY * 1.15;

        const endX = ray.endX + state.displacementX;
        const endY = ray.endY + state.displacementY;

        line.setAttribute(
          "d",
          `M ${ray.startX} ${ray.startY}
           Q ${controlX} ${controlY}
           ${endX} ${endY}`
        );

        dot.setAttribute(
          "cx",
          ray.dotX + state.displacementX * 0.78
        );

        dot.setAttribute(
          "cy",
          ray.dotY + state.displacementY * 0.78
        );

        const highlight = pointerInside.current
          ? Math.max(0, 1 - distance / influenceRadius)
          : 0;

        line.setAttribute(
          "opacity",
          Math.min(
            0.95,
            ray.opacity + highlight * 0.42
          )
        );

        line.setAttribute(
          "stroke-width",
          ray.width + highlight * 1.1
        );
      });
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [rays, reducedMotion, smoothX, smoothY]);

  return (
    <svg
      ref={svgRef}
      className="stripe-interactive-svg"
      viewBox="0 0 1520 850"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {rays.map((ray) => (
        <g key={ray.id}>
          <path
            ref={(element) => {
              rayRefs.current[ray.id] = element;
            }}
            d={`M ${ray.startX} ${ray.startY}
                L ${ray.endX} ${ray.endY}`}
            stroke={theme.ray}
            strokeWidth={ray.width}
            strokeLinecap="round"
            opacity={ray.opacity}
            fill="none"
          />

          <circle
            ref={(element) => {
              dotRefs.current[ray.id] = element;
            }}
            cx={ray.dotX}
            cy={ray.dotY}
            r={ray.id % 12 === 0 ? 2.4 : 1.2}
            fill={theme.dot}
            opacity={
              0.45 + random(ray.id + 31) * 0.5
            }
          />
        </g>
      ))}
    </svg>
  );
}

/* ===================================================
   SEPARATE FOUR-COLUMN BENEFIT STRIP
=================================================== */

function BenefitItem({
  benefit,
  index,
  activeBenefit,
  setActiveBenefit,
}) {
  const Icon = benefit.Icon;
  const active = activeBenefit === index;

  return (
    <button
      type="button"
      data-benefit-item
      className={`stripe-horizontal-benefit ${
        active ? "is-active" : ""
      }`}
      style={{
        "--benefit-accent": benefit.accent,
      }}
      onMouseEnter={() => setActiveBenefit(index)}
      onFocus={() => setActiveBenefit(index)}
      onClick={() => setActiveBenefit(index)}
      aria-pressed={active}
    >
      <div className="stripe-horizontal-benefit-top">
        <span className="stripe-horizontal-number">
          {benefit.number}
        </span>

        <span className="stripe-horizontal-icon">
          <Icon size={19} strokeWidth={1.7} />
        </span>
      </div>

      <h3 className="stripe-horizontal-title">
        {benefit.title}
      </h3>

      <p className="stripe-horizontal-description">
        {benefit.description}
      </p>

      <span
        className="stripe-horizontal-indicator"
        aria-hidden="true"
      />
    </button>
  );
}

function HorizontalBenefits({
  benefitsRef,
  activeBenefit,
  setActiveBenefit,
}) {
  return (
    <div
      ref={benefitsRef}
      className="stripe-horizontal-benefits"
    >
      {BENEFITS.map((benefit, index) => (
        <BenefitItem
          key={benefit.number}
          benefit={benefit}
          index={index}
          activeBenefit={activeBenefit}
          setActiveBenefit={setActiveBenefit}
        />
      ))}
    </div>
  );
}

/* ===================================================
   ORIGINAL APPEARANCE SELECTOR
=================================================== */

function AppearanceSelector({ active, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="stripe-theme-controls">
      <button
        type="button"
        className="stripe-theme-toggle"
        aria-label="Toggle appearance themes"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Sun size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="stripe-theme-list"
          >
            {OPTIONS.map(({ name, Icon }) => (
              <button
                key={name}
                type="button"
                aria-pressed={active === name}
                className={`stripe-theme-option ${
                  active === name ? "active" : ""
                }`}
                onClick={() => {
                  onChange(name);
                  setIsOpen(false);
                }}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===================================================
   MAIN COMPONENT — GSAP ENTRANCE
=================================================== */

export default function StripeAnimation() {
  const sectionRef = useRef(null);

  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const benefitsRef = useRef(null);
  const globeRef = useRef(null);
  const globeContentRef = useRef(null);

  const [activeTheme, setActiveTheme] =
    useState("Dusk");

  const [activeBenefit, setActiveBenefit] =
    useState(1);

  const reducedMotion = useReducedMotion();
  const theme = THEMES[activeTheme];

  useLayoutEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      const benefits =
        benefitsRef.current.querySelectorAll(
          "[data-benefit-item]"
        );

      /* INITIAL STATES */

      gsap.set(eyebrowRef.current, {
        autoAlpha: 0,
        y: 22,
      });

      gsap.set(headingRef.current, {
        autoAlpha: 0,
        y: 85,
      });

      gsap.set(descriptionRef.current, {
        autoAlpha: 0,
        y: 55,
      });

      gsap.set(benefits, {
        autoAlpha: 0,
        y: 35,
      });

      /*
       * Keep the globe container at its final dimensions.
       * Animate the complete visual layer inside it.
       * This prevents the section height from jumping.
       */

      gsap.set(globeContentRef.current, {
        autoAlpha: 0,
        y: 115,
        scale: 0.975,
        transformOrigin: "50% 100%",
      });

      /* AUTOMATIC ENTRANCE */

      const intro = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        /* EYEBROW */

        .to(
          eyebrowRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          },
          0.05
        )

        /* LARGE HEADING: BOTTOM -> TOP */

        .to(
          headingRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "power4.out",
          },
          0.18
        )

        /* PARAGRAPH: BOTTOM -> TOP */

        .to(
          descriptionRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          0.5
        )

        /* FOUR BENEFITS */

        .to(
          benefits,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.8
        )

        /* GLOBE: BOTTOM -> TOP */

        .to(
          globeContentRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
          },
          0.95
        );

      /*
       * One scroll event starts the whole animation.
       * No scrolling is required after activation.
       */

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 82%",
        onEnter: () => intro.play(),
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="stripe-animation"
      className="stripe-animation-section"
    >
      <div className="stripe-animation-wrapper">
        {/* HEADING */}

        <div className="stripe-program-intro">
          <div
            ref={eyebrowRef}
            className="stripe-section-eyebrow"
          >
            <span />
            BENEFITS
            <span />
          </div>

          <div className="stripe-heading-reveal">
            <h2 ref={headingRef}>
              Why Become a{" "}
              <span className="stripe-heading-accent">
                Campus Ambassador?
              </span>
            </h2>
          </div>

          <div className="stripe-description-reveal">
            <p ref={descriptionRef}>
              Gain real-world experience, build your skills,
              and be part of a growing community that
              rewards your impact.
            </p>
          </div>
        </div>

        {/* SEPARATE HORIZONTAL BENEFITS */}

        <HorizontalBenefits
          benefitsRef={benefitsRef}
          activeBenefit={activeBenefit}
          setActiveBenefit={setActiveBenefit}
        />

        {/* TALLER GLOBE */}

        <div
          ref={globeRef}
          className="stripe-visual"
          style={{
            "--gradient-top": theme.top,
            "--gradient-middle": theme.middle,
            "--gradient-bottom": theme.bottom,
            "--gradient-core": theme.core,
          }}
        >
          <div
            ref={globeContentRef}
            className="stripe-globe-content"
          >
            <div className="stripe-gradient" />

            <motion.div
              className="stripe-gradient-core"
              animate={
                reducedMotion
                  ? undefined
                  : {
                      scale: [1, 1.12, 1],
                      x: ["-50%", "-47%", "-50%"],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <InteractiveRadial
              theme={theme}
              reducedMotion={reducedMotion}
            />
          </div>

          <AppearanceSelector
            active={activeTheme}
            onChange={setActiveTheme}
          />
        </div>
      </div>
    </section>
  );
}

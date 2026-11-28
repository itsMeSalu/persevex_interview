"use client";


import React, {
  useLayoutEffect,
  useRef,
  useId,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BookOpen,
  Laptop,
  FileCheck2,
  BriefcaseBusiness,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   ANTINTERN HOW IT WORKS

   LEFT SIDE:
   Original blue roadmap design unchanged.

   RIGHT SIDE:
   Four individually colored white cards.
========================================= */

const PRIMARY = "#F59120";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Path",
    description:
      "Choose an interview track that matches the role you want",
    Icon: BookOpen,
    keyword: "Explore interview tracks",
    color: "#F59120",
    iconBg: "#FFF1E7",
    iconBorder: "#F2CBB7",
    activeBorder: "#E2AD93",
    shadow: "rgba(245,145,32,0.11)",
  },
  {
    number: "02",
    title: "Learn & Prepare",
    description:
      "Review core topics and practice questions in your chosen field",
    Icon: Laptop,
    keyword: "Build understanding",
    color: "#E98B25",
    iconBg: "#F5ECE1",
    iconBorder: "#E7D4C1",
    activeBorder: "#D8BCA5",
    shadow: "rgba(233,139,37,0.11)",
  },
  {
    number: "03",
    title: "Prepare & Practice",
    description:
      "Work through realistic rounds and improve how you respond",
    Icon: FileCheck2,
    keyword: "Interview practice",
    color: "#D97736",
    iconBg: "#FFF3E8",
    iconBorder: "#F6DDC8",
    activeBorder: "#F0CDAE",
    shadow: "rgba(217,119,54,0.11)",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Use what you have practiced in your next real interview",
    Icon: BriefcaseBusiness,
    keyword: "Your next opportunity",
    color: "#F59F36",
    iconBg: "#F8EDE8",
    iconBorder: "#EDD3C5",
    activeBorder: "#E4B7A1",
    shadow: "rgba(245,159,54,0.11)",
  },
];

const POINTS = [
  { x: 76, y: 202 },
  { x: 250, y: 104 },
  { x: 423, y: 202 },
  { x: 600, y: 104 },
];

const JOURNEY_PATH =
  "M 76 202 C 145 202 176 104 250 104 S 352 202 423 202 S 526 104 600 104";

const STAGE_SECONDS = 2.5;

/* =========================================
   ORIGINAL LEFT CAREER ROADMAP
========================================= */

function CareerRoadmap({
  gradientOneRef,
  gradientTwoRef,
  pathRef,
  dotRef,
  markerRefs,
  activeIndex,
  svgId,
}) {
  const labels = [
    "Explore",
    "Learn",
    "Prepare",
    "Succeed",
  ];

  return (
    <div
      className="
        relative mt-8 w-full
        overflow-hidden rounded-[18px]
        border border-[#EEE2D9]
        bg-white px-4 pb-5 pt-5
        sm:px-6 sm:pt-6
        shadow-[0_12px_36px_rgba(137,76,13,0.045)]
      "
    >
      {/* ORIGINAL BLUE ANIMATED BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden rounded-[18px]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(130deg,#FFFFFF_0%,#FFFAF2_45%,#FFF2E7_100%)]
          "
        />

        <div
          ref={gradientOneRef}
          className="
            absolute -left-[38%] -top-[55%]
            h-[125%] w-[100%]
            rounded-full
            bg-[radial-gradient(circle,rgba(245,145,32,0.19)_0%,rgba(219,144,111,0.10)_40%,transparent_72%)]
            blur-[35px] will-change-transform
          "
        />

        <div
          ref={gradientTwoRef}
          className="
            absolute -right-[40%] -bottom-[55%]
            h-[125%] w-[105%]
            rounded-full
            bg-[radial-gradient(circle,rgba(232,171,139,0.24)_0%,rgba(255,226,205,0.12)_45%,transparent_75%)]
            blur-[38px] will-change-transform
          "
        />
      </div>

      {/* ROADMAP HEADER */}

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p
            className="
              text-[13px] font-semibold
              tracking-[-0.025em]
              text-[#344052]
            "
          >
            Your Interview Roadmap
          </p>

          <p className="mt-1 text-[11px] text-[#81756F]">
            Four milestones. One clear direction.
          </p>
        </div>

        <span
          className="
            shrink-0 rounded-full
            border border-[#F3DED2]
            bg-white/85 px-3 py-1.5
            text-[10px] font-medium
            text-[#F59120]
          "
        >
          4 stages
        </span>
      </div>

      {/* ORIGINAL BLUE SVG ROADMAP */}

      <div className="relative z-10 mt-5">
        <svg
          viewBox="0 0 680 290"
          preserveAspectRatio="xMidYMid meet"
          className="block h-auto w-full overflow-visible"
          role="img"
          aria-label="Interview journey from choosing a track to applying your skills"
        >
          <defs>
            <linearGradient
              id={`${svgId}-line`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#F59120"
              />
              <stop
                offset="48%"
                stopColor="#C7774F"
              />
              <stop
                offset="100%"
                stopColor="#F59120"
              />
            </linearGradient>

            <filter
              id={`${svgId}-shadow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="6"
                floodColor="#F59120"
                floodOpacity="0.11"
              />
            </filter>
          </defs>

          {/* BACK TRACK */}

          <path
            d={JOURNEY_PATH}
            fill="none"
            stroke="#F3DED2"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* ANIMATED BLUE TRACK */}

          <path
            ref={pathRef}
            d={JOURNEY_PATH}
            fill="none"
            stroke={`url(#${svgId}-line)`}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* ORIGINAL FOUR MILESTONES */}

          {POINTS.map((point, index) => (
            <g
              key={index}
              ref={(el) => {
                markerRefs.current[index] = el;
              }}
              transform={`translate(${point.x},${point.y})`}
            >
              <circle
                data-marker-ring
                r="38"
                fill="#FFFFFF"
                stroke="#EBDCD4"
                strokeWidth="1.5"
                filter={`url(#${svgId}-shadow)`}
              />

              <circle
                data-marker-inner
                r="30"
                fill="#FFF7F1"
                stroke="#FBEDE3"
                strokeWidth="1"
              />

              <text
                x="0"
                y="8"
                textAnchor="middle"
                fontSize="22"
                fontWeight="600"
                fill="#F59120"
              >
                {STEPS[index].number}
              </text>

              <text
                x="0"
                y="64"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#3D4858"
              >
                {labels[index]}
              </text>
            </g>
          ))}

          {/* ORIGINAL BLUE MOVING DOT */}

          <g ref={dotRef}>
            <circle
              r="13"
              fill="#F59120"
              opacity="0.15"
            />

            <circle
              r="6"
              fill="#F59120"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />
          </g>
        </svg>
      </div>

      {/* ORIGINAL ROADMAP FOOTER */}

      <div
        className="
          relative z-10 mt-2
          flex items-center justify-between
          gap-3 border-t
          border-[#EEE2D9] pt-4
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-[7px] w-[7px]
              rounded-full bg-[#F59120]
            "
          />

          <span className="text-[11px] text-[#746965]">
            Step {STEPS[activeIndex].number} of 04
          </span>
        </div>

        <span
          className="
            text-right text-[11px]
            font-medium text-[#F59120]
          "
        >
          {STEPS[activeIndex].keyword}
        </span>
      </div>
    </div>
  );
}

/* =========================================
   RIGHT SIDE COLORFUL WHITE CARDS

   STEP 01 - ROYAL BLUE
   STEP 02 - TEAL GREEN
   STEP 03 - WARM AMBER
   STEP 04 - SOFT PURPLE
========================================= */

function StepCard({
  step,
  index,
  activeIndex,
  register,
}) {
  const Icon = step.Icon;
  const active = activeIndex === index;

  return (
    <article
      ref={(el) => register(el, index)}
      data-step-card
      className="
        relative min-w-0 w-full
        overflow-hidden rounded-[12px]
        border border-[#EAE2DD]
        bg-white
        px-4 py-[15px] sm:px-5
        shadow-[0_3px_14px_rgba(137,76,13,0.025)]
        will-change-transform
      "
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* INDIVIDUAL COLORED ACTIVE ACCENT */}

      <span
        data-card-accent
        className="
          absolute left-0 top-3 bottom-3
          w-[3px] rounded-r-full
        "
        style={{
          backgroundColor: step.color,
          opacity: active ? 1 : 0,
        }}
      />

      <div className="flex items-start gap-4">
        {/* INDIVIDUAL COLOR ICON */}

        <div
          className="
            flex h-[41px] w-[41px]
            shrink-0 items-center justify-center
            rounded-[9px] border
          "
          style={{
            backgroundColor: step.iconBg,
            borderColor: step.iconBorder,
            color: step.color,
          }}
        >
          <Icon
            size={19}
            strokeWidth={1.65}
          />
        </div>

        {/* CARD TEXT */}

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            {/* COLORED STEP NUMBER */}

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.11em]
              "
              style={{
                color: step.color,
              }}
            >
              STEP {step.number}
            </span>

            {/* ACTIVE INDICATOR */}

            <span
              data-active-dot
              className="
                h-[6px] w-[6px]
                rounded-full
              "
              style={{
                backgroundColor: step.color,
                opacity: active ? 1 : 0,
              }}
            />
          </div>

          {/* TITLE - ORIGINAL TYPOGRAPHY */}

          <h3
            className="
              mt-[6px]
              text-[16px] font-semibold
              leading-[1.35]
              tracking-[-0.025em]
              text-[#344052]
              sm:text-[17px]
            "
          >
            {step.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-[7px]
              text-[12px] leading-[1.65]
              text-[#786D68]
            "
          >
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function HowItWorks() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const visualRef = useRef(null);

  const gradientOneRef = useRef(null);
  const gradientTwoRef = useRef(null);

  const pathRef = useRef(null);
  const dotRef = useRef(null);

  const markerRefs = useRef([]);
  const cardRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const svgId = useId().replace(/:/g, "");

  const registerCard = (el, index) => {
    cardRefs.current[index] = el;
  };

  /* =========================================
     GSAP ANIMATIONS
  ========================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const cards = cardRefs.current.filter(Boolean);
          const markers = markerRefs.current.filter(Boolean);

          const path = pathRef.current;
          const dot = dotRef.current;

          if (
            !path ||
            !dot ||
            cards.length !== 4 ||
            markers.length !== 4
          ) {
            return;
          }

          const pathLength = path.getTotalLength();

          const tracker = {
            progress: 0,
          };

          /* INITIAL STATES */

          gsap.set(labelRef.current, {
            autoAlpha: 0,
            y: 24,
          });

          gsap.set(headingRef.current, {
            autoAlpha: 0,
            y: 48,
          });

          gsap.set(descriptionRef.current, {
            autoAlpha: 0,
            y: 33,
          });

          gsap.set(visualRef.current, {
            autoAlpha: 0,
            y: 38,
          });

          gsap.set(cards, {
            autoAlpha: 0,
            y: 55,
          });

          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.set(dot, {
            autoAlpha: 0,
          });

          /* =================================
             ORIGINAL BLUE GRADIENT
          ================================= */

          const gradientTimeline = gsap.timeline({
            paused: true,
            repeat: -1,
            yoyo: true,
          });

          gradientTimeline
            .to(
              gradientOneRef.current,
              {
                xPercent: 35,
                yPercent: 15,
                scale: 1.18,
                duration: 6.5,
                ease: "sine.inOut",
              },
              0
            )
            .to(
              gradientTwoRef.current,
              {
                xPercent: -30,
                yPercent: -20,
                scale: 1.12,
                duration: 7.5,
                ease: "sine.inOut",
              },
              0
            );

          /* =================================
             ORIGINAL DOT TRACKING
          ================================= */

          const updateDot = (progress) => {
            const p = gsap.utils.clamp(
              0,
              1,
              progress
            );

            const point = path.getPointAtLength(
              p * pathLength
            );

            dot.setAttribute(
              "transform",
              `translate(${point.x},${point.y})`
            );

            gsap.set(path, {
              strokeDashoffset:
                pathLength * (1 - p),
            });
          };

          updateDot(0);

          /* =================================
             ACTIVE STEP ANIMATION

             LEFT: ORIGINAL BLUE
             RIGHT: FOUR DISTINCT COLORS
          ================================= */

          const activateStep = (index) => {
            setActiveIndex(index);

            /* RIGHT SIDE CARD COLOR ACTIVATION */

            cards.forEach((card, cardIndex) => {
              const active = cardIndex === index;
              const step = STEPS[cardIndex];

              gsap.to(card, {
                borderColor: active
                  ? step.activeBorder
                  : "#EAE2DD",

                backgroundColor: "#FFFFFF",

                boxShadow: active
                  ? `0 10px 28px ${step.shadow}`
                  : "0 3px 14px rgba(137,76,13,0.025)",

                duration: 0.5,
                ease: "power2.out",
                overwrite: true,
              });

              gsap.to(
                card.querySelector(
                  "[data-card-accent]"
                ),
                {
                  opacity: active ? 1 : 0,
                  duration: 0.35,
                  overwrite: true,
                }
              );

              gsap.to(
                card.querySelector(
                  "[data-active-dot]"
                ),
                {
                  opacity: active ? 1 : 0,
                  duration: 0.35,
                  overwrite: true,
                }
              );
            });

            /* ORIGINAL BLUE ROADMAP MARKERS */

            markers.forEach((marker, markerIndex) => {
              const active = markerIndex === index;

              gsap.to(
                marker.querySelector(
                  "[data-marker-ring]"
                ),
                {
                  stroke: active
                    ? "#DAB4A4"
                    : "#EBDCD4",
                  duration: 0.5,
                }
              );

              gsap.to(
                marker.querySelector(
                  "[data-marker-inner]"
                ),
                {
                  fill: active
                    ? "#FBE7D8"
                    : "#FFF7F1",
                  duration: 0.5,
                }
              );
            });
          };

          /* =================================
             ORIGINAL AUTOMATIC ROADMAP
          ================================= */

          const journey = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatDelay: 1,
          });

          journey.call(() => {
            tracker.progress = 0;
            updateDot(0);
            activateStep(0);
          });

          journey.set(dot, {
            autoAlpha: 1,
          });

          for (let i = 0; i < 3; i++) {
            journey.to(tracker, {
              progress: (i + 1) / 3,
              duration: STAGE_SECONDS,
              ease: "sine.inOut",

              onUpdate: () => {
                updateDot(tracker.progress);
              },

              onComplete: () => {
                activateStep(i + 1);
              },
            });
          }

          journey.to(
            {},
            {
              duration: 1.2,
            }
          );

          journey.to(dot, {
            autoAlpha: 0,
            duration: 0.25,
          });

          /* =================================
             ORIGINAL INTRO SEQUENCE
          ================================= */

          const intro = gsap.timeline({
            paused: true,
            defaults: {
              ease: "power3.out",
            },
          });

          intro
            .to(
              labelRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
              },
              0
            )
            .to(
              headingRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.05,
                ease: "power4.out",
              },
              0.15
            )
            .to(
              descriptionRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
              },
              0.4
            )
            .to(
              visualRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1,
              },
              0.48
            );

          /* CARDS ENTER ONE BY ONE */

          cards.forEach((card, index) => {
            intro.to(
              card,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
              },
              0.9 + index * 0.58
            );
          });

          /* START BLUE BACKGROUND ANIMATION */

          intro.call(
            () => gradientTimeline.play(),
            [],
            0.6
          );

          /* START ROADMAP LOOP */

          intro.eventCallback(
            "onComplete",
            () => {
              journey.restart();
            }
          );

          /* START ON SECTION ENTRY */

          const trigger = ScrollTrigger.create({
            trigger: section,
            start: "top 78%",
            once: true,

            onEnter: () => {
              intro.play();
            },
          });

          return () => {
            trigger.kill();
            intro.kill();
            journey.kill();
            gradientTimeline.kill();
          };
        }, section);

        return () => ctx.revert();
      }
    );

    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from([labelRef.current, headingRef.current, descriptionRef.current, visualRef.current, ...cardRefs.current.filter(Boolean)], {
        opacity: 0,
        y: 12,
        duration: .4,
        stagger: .03,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 85%", once: true },
      });
    });
    return () => mm.revert();
  }, []);

  /* =========================================
     FINAL JSX LAYOUT
  ========================================= */

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="
        relative isolate w-full
        overflow-hidden bg-white
        px-5 py-14 sm:px-8
        lg:flex lg:min-h-[650px]
        lg:h-[calc(100svh-80px)]
        lg:items-center
        lg:px-12 lg:py-8
      "
    >
      <div
        className="
          relative mx-auto grid w-full
          max-w-[1280px]
          grid-cols-1 gap-10
          lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]
          lg:items-center lg:gap-12
        "
      >
        {/* LEFT SIDE - UNCHANGED */}

        <div className="min-w-0">
          {/* LABEL */}

          <span
            ref={labelRef}
            className="
              inline-flex items-center gap-2
              text-[10px] font-semibold
              uppercase tracking-[0.15em]
              text-[#F59120]
            "
          >
            <span
              className="
                h-[6px] w-[6px]
                rounded-full bg-[#F59120]
              "
            />

            YOUR JOURNEY
          </span>

          {/* HEADING */}

          <h2
            ref={headingRef}
            className="
              mt-5 max-w-[650px]
              text-[clamp(2.5rem,4vw,4rem)]
              font-medium leading-[1.1]
              tracking-[-0.05em]
              text-[#19283E]
            "
          >
            How It{" "}
            <span className="text-[#F59120]">
              Works
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            ref={descriptionRef}
            className="
              mt-4 max-w-[490px]
              text-[14px] leading-[1.8]
              text-[#746965]
            "
          >
            A clear path from choosing a track to interview
            confidence
          </p>

          {/* ORIGINAL ANIMATED ROADMAP */}

          <div ref={visualRef}>
            <CareerRoadmap
              gradientOneRef={gradientOneRef}
              gradientTwoRef={gradientTwoRef}
              pathRef={pathRef}
              dotRef={dotRef}
              markerRefs={markerRefs}
              activeIndex={activeIndex}
              svgId={svgId}
            />
          </div>
        </div>

        {/* RIGHT SIDE - NEW FOUR COLOR CARDS */}

        <div className="relative min-w-0">
          <div className="flex flex-col gap-3">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                activeIndex={activeIndex}
                register={registerCard}
              />
            ))}
          </div>

          <p
            className="
              mt-6 text-[11px]
              text-[#978981]
            "
          >
            Your journey from first practice to interview confidence
          </p>
        </div>
      </div>
    </section>
  );
}

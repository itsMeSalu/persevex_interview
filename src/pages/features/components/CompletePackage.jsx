"use client";


import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Check,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_HEIGHT = 80;

/* =========================================================
   ANTINTERN — THE COMPLETE PACKAGE

   Cleaner typography and simplified presentation
   Smooth bottom-to-top section entrance
   Three existing benefit topics preserved
   Desktop pinned scroll experience
   Mobile responsive stacked layout
   Tailwind CSS only
========================================================= */

const benefits = [
  {
    id: "01",
    title: "Interview Confidence",
    category: "Focused Practice",
    stat: "01",
    statLabel: "CLEAR PREPARATION PATH",
    description:
      "Practice with a clear goal, understand your strengths, and approach each interview with confidence.",
    points: [
      "Role-focused interview questions",
      "Practice round guidance",
      "Confidence through repetition",
    ],
    Icon: BriefcaseBusiness,
  },
  {
    id: "02",
    title: "Structured Practice",
    category: "Interview Preparation",
    stat: "02",
    statLabel: "PRACTICE AND REVIEW",
    description:
      "Move through focused practice, review your answers, and improve one interview skill at a time.",
    points: [
      "Topic-based question sets",
      "Realistic interview scenarios",
      "A repeatable preparation routine",
    ],
    Icon: GraduationCap,
  },
  {
    id: "03",
    title: "Progress You Can See",
    category: "Review and Improve",
    stat: "03",
    statLabel: "PREPARATION MILESTONES",
    description:
      "Keep track of what you have practiced and focus your next session on the areas that need attention.",
    points: [
      "Strengths to build on",
      "Skills to revisit",
      "Next steps to practice",
    ],
    Icon: Award,
  },
];

/* =========================================================
   BENEFIT CONTENT
========================================================= */

function BenefitContent({ benefit, mobile = false }) {
  const Icon = benefit.Icon;

  return (
    <article
      className={`
        w-full
        ${mobile ? "relative" : "absolute inset-0"}
      `}
    >
      <div className="w-full max-w-[470px]">
        {/* TOP LABEL */}

        <div
          data-benefit-part
          className="
            flex items-center gap-3
          "
        >
          <div
            className="
              flex h-10 w-10
              shrink-0 items-center justify-center
              rounded-[10px]
              border border-[#EBDCD4]
              bg-[#FFF6EF]
              text-[#F59120]
            "
          >
            <Icon size={19} strokeWidth={1.7} />
          </div>

          <div>
            <p
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.11em]
                text-[#F59120]
              "
            >
              {benefit.category}
            </p>

            <p
              className="
                mt-0.5 text-[11px]
                text-[#9D8E85]
              "
            >
              Benefit {benefit.id} / 03
            </p>
          </div>
        </div>

        {/* MAIN BENEFIT HEADING */}

        <h3
          data-benefit-part
          className="
            mt-7
            text-[clamp(26px,2.5vw,35px)]
            font-semibold
            leading-[1.18]
            tracking-[-0.04em]
            text-[#19283E]
          "
        >
          {benefit.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          data-benefit-part
          className="
            mt-4 max-w-[425px]
            text-[13px] leading-[1.85]
            text-[#716762]
            sm:text-[14px]
          "
        >
          {benefit.description}
        </p>

        {/* DIVIDER */}

        <div
          data-benefit-part
          className="
            mt-7 h-px w-full
            bg-[#F3E8E1]
          "
        />

        {/* THREE BENEFITS */}

        <div
          data-benefit-part
          className="mt-6 space-y-4"
        >
          {benefit.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3"
            >
              <span
                className="
                  flex h-[21px] w-[21px]
                  shrink-0 items-center justify-center
                  rounded-full
                  bg-[#FFF2E7]
                  text-[#F59120]
                "
              >
                <Check size={12} strokeWidth={2} />
              </span>

              <span
                className="
                  text-[12px] leading-[1.6]
                  text-[#594E4B]
                  sm:text-[13px]
                "
              >
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM LABEL */}

        <div
          data-benefit-part
          className="
            mt-8 flex items-center gap-2
            text-[#F59120]
          "
        >
          <span
            className="
              text-[11px] font-medium
            "
          >
            Your AntIntern Advantage
          </span>

          <ArrowUpRight size={14} strokeWidth={1.7} />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function AntInternBenefits() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const mobileHeaderRef = useRef(null);

  const panelRefs = useRef([]);
  const statRefs = useRef([]);
  const mobileRefs = useRef([]);
  const progressRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ===================================================
         DESKTOP

         Intro:
         Bottom-to-top entrance

         After intro:
         Pinned scroll benefit transitions
      =================================================== */

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const panels = panelRefs.current.filter(Boolean);
          const stats = statRefs.current.filter(Boolean);

          if (
            panels.length !== benefits.length ||
            stats.length !== benefits.length
          ) {
            return;
          }

          const headingLines =
            headingRef.current.querySelectorAll(
              "[data-heading-line]"
            );

          /* -----------------------------------------------
             INITIAL HEADER STATE
          ----------------------------------------------- */

          gsap.set(labelRef.current, {
            autoAlpha: 0,
            y: 25,
          });

          gsap.set(headingLines, {
            autoAlpha: 0,
            y: 55,
          });

          gsap.set(paragraphRef.current, {
            autoAlpha: 0,
            y: 35,
          });

          /* -----------------------------------------------
             HEADER ENTRANCE

             Label rises
             Heading rises
             Paragraph rises

             All remain in their original layout positions
             because transforms do not affect document flow.
          ----------------------------------------------- */

          const headerTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
            defaults: {
              ease: "power3.out",
            },
          });

          headerTimeline
            .to(labelRef.current, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
            })

            .to(
              headingLines,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.13,
                ease: "power4.out",
              },
              "-=0.45"
            )

            .to(
              paragraphRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.95,
              },
              "-=0.75"
            );

          /* -----------------------------------------------
             BENEFIT CONTENT
          ----------------------------------------------- */

          const getParts = (panel) =>
            Array.from(
              panel.querySelectorAll(
                "[data-benefit-part]"
              )
            );

          gsap.set(panels, {
            autoAlpha: 0,
          });

          gsap.set(stats, {
            autoAlpha: 0,
            y: 15,
          });

          gsap.set(panels[0], {
            autoAlpha: 1,
          });

          gsap.set(stats[0], {
            autoAlpha: 1,
            y: 0,
          });

          const readDuration = 2.1;
          const transitionDuration = 1.45;

          const master = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: stageRef.current,
              start: `top top+=${NAVBAR_HEIGHT}`,
              end: () =>
                `+=${window.innerHeight * 3.3}`,
              scrub: 1.1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onUpdate(self) {
                if (progressRef.current) {
                  gsap.set(progressRef.current, {
                    scaleX: self.progress,
                  });
                }

                const index =
                  self.progress < 0.34
                    ? 0
                    : self.progress < 0.67
                    ? 1
                    : 2;

                setActiveIndex((prev) =>
                  prev === index ? prev : index
                );
              },
            },
          });

          /* -----------------------------------------------
             TRANSITION BETWEEN BENEFITS
          ----------------------------------------------- */

          const switchBenefit = (from, to) => {
            const oldPanel = panels[from];
            const nextPanel = panels[to];

            const oldStat = stats[from];
            const nextStat = stats[to];

            const oldParts = getParts(oldPanel);
            const nextParts = getParts(nextPanel);

            /*
               Exit:
               Current content moves gently upward.
            */

            master.to(oldParts, {
              y: -18,
              autoAlpha: 0,
              duration: transitionDuration * 0.48,
              stagger: 0.025,
              ease: "sine.inOut",
            });

            master.to(
              oldStat,
              {
                y: -15,
                autoAlpha: 0,
                duration: transitionDuration * 0.48,
                ease: "sine.inOut",
              },
              "<"
            );

            master.set(oldPanel, {
              autoAlpha: 0,
            });

            /*
               Next content starts below.
            */

            master.set(nextParts, {
              y: 28,
              autoAlpha: 0,
            });

            master.set(nextPanel, {
              autoAlpha: 1,
            });

            /*
               Next content rises smoothly.
            */

            master.to(nextParts, {
              y: 0,
              autoAlpha: 1,
              duration: transitionDuration,
              stagger: 0.045,
              ease: "power2.out",
            });

            master.fromTo(
              nextStat,
              {
                y: 25,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: transitionDuration * 0.8,
                ease: "power2.out",
                immediateRender: false,
              },
              "<0.1"
            );
          };

          /* -----------------------------------------------
             THREE CHAPTERS
          ----------------------------------------------- */

          master.to({}, {
            duration: readDuration,
          });

          switchBenefit(0, 1);

          master.to({}, {
            duration: readDuration,
          });

          switchBenefit(1, 2);

          master.to({}, {
            duration: readDuration,
          });

          return () => {
            master.scrollTrigger?.kill();
            master.kill();
            headerTimeline.scrollTrigger?.kill();
            headerTimeline.kill();
          };
        }
      );

      /* ===================================================
         TABLET + MOBILE

         No pinning.
         Natural reading.
         Smooth bottom-to-top reveals.
      =================================================== */

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          const header = mobileHeaderRef.current;

          if (header) {
            const elements =
              header.querySelectorAll(
                "[data-mobile-heading]"
              );

            gsap.set(elements, {
              autoAlpha: 0,
              y: 35,
            });

            gsap.to(elements, {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.04,
              ease: "power3.out",

              scrollTrigger: {
                trigger: header,
                start: "top 86%",
                once: true,
              },
            });
          }

          mobileRefs.current
            .filter(Boolean)
            .forEach((item) => {
              gsap.fromTo(
                item,
                {
                  autoAlpha: 0,
                  y: 25,
                },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.4,
                  ease: "power3.out",

                  scrollTrigger: {
                    trigger: item,
                    start: "top 88%",
                    once: true,
                  },
                }
              );
            });
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      id="antintern-benefits"
      className="
        relative w-full
        overflow-x-clip
        bg-[#FFFCF9]
      "
    >
      {/* ===================================================
          DESKTOP SECTION
      =================================================== */}

      <div
        ref={stageRef}
        className="
          relative hidden
          h-[calc(100svh-80px)]
          min-h-[650px]
          lg:flex lg:items-center
          motion-reduce:lg:hidden
        "
      >
        <div
          className="
            mx-auto grid h-full w-full
            max-w-[1450px]
            grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]
            items-center gap-14
            px-10 xl:px-16
            2xl:px-20
          "
        >
          {/* =================================================
              LEFT SIDE — INTRODUCTION
          ================================================= */}

          <div className="relative flex h-full flex-col justify-center">
            <div className="max-w-[650px]">
              {/* LABEL */}

              <div
                ref={labelRef}
                className="
                  flex items-center gap-3
                "
              >
                <span
                  className="
                    h-[2px] w-7
                    bg-[#F59120]
                  "
                />

                <span
                  className="
                    text-[11px] font-semibold
                    uppercase tracking-[0.16em]
                    text-[#F59120]
                  "
                >
                  Why It Works
                </span>
              </div>

              {/* MAIN HEADING */}

              <h2
                ref={headingRef}
                className="
                  mt-6
                  text-[clamp(38px,3.8vw,54px)]
                  font-medium
                  leading-[1.13]
                  tracking-[-0.05em]
                  text-[#19283E]
                "
              >
                <span
                  className="
                    block overflow-hidden
                  "
                >
                  <span
                    data-heading-line
                    className="block"
                  >
                    The Complete
                  </span>
                </span>

                <span
                  className="
                    block overflow-hidden
                  "
                >
                  <span
                    data-heading-line
                    className="
                      block font-semibold
                      text-[#F59120]
                    "
                  >
                    Package.
                  </span>
                </span>
              </h2>

              {/* INTRO PARAGRAPH */}

              <p
                ref={paragraphRef}
                className="
                  mt-6 max-w-[510px]
                  text-[14px]
                  leading-[1.9]
                  text-[#716762]
                "
              >
                Beyond our core features, each interview track
                helps you practice with purpose, review your
                progress, and move confidently toward your goals.
              </p>

              {/* =================================================
                  ACTIVE STATISTIC
              ================================================= */}

              <div
                className="
                  relative mt-11
                  h-[100px]
                  border-l-2 border-[#F59120]
                  pl-6
                "
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    ref={(el) => {
                      statRefs.current[index] = el;
                    }}
                    className="
                      absolute inset-y-0 left-6
                      flex flex-col justify-center
                    "
                    style={{
                      visibility:
                        index === 0 ? "visible" : "hidden",
                      opacity: index === 0 ? 1 : 0,
                    }}
                  >
                    <span
                      className="
                        text-[clamp(43px,4vw,58px)]
                        font-semibold leading-none
                        tracking-[-0.055em]
                        text-[#F59120]
                      "
                    >
                      {benefit.stat}
                    </span>

                    <span
                      className="
                        mt-3 text-[10px]
                        font-medium uppercase
                        tracking-[0.12em]
                        text-[#8C7F78]
                      "
                    >
                      {benefit.statLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SCROLL INDICATOR */}

            <div
              className="
                absolute bottom-10 left-0
                flex items-center gap-3
              "
            >
              <span
                className="
                  h-px w-7 bg-[#D7B9AA]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase tracking-[0.13em]
                  text-[#8C7F78]
                "
              >
                Scroll to explore
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — INTERACTIVE BENEFITS
          ================================================= */}

          <div
            className="
              relative flex h-full min-w-0
              items-center
            "
          >
            <div
              className="
                relative h-[420px] w-full
              "
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className="absolute inset-0"
                  style={{
                    visibility:
                      index === 0 ? "visible" : "hidden",
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  <BenefitContent benefit={benefit} />
                </div>
              ))}
            </div>

            {/* PROGRESS INDICATOR */}

            <div
              className="
                absolute bottom-10
                left-0 right-0
              "
            >
              <div
                className="
                  mb-3 flex items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[10px]
                    font-medium uppercase
                    tracking-[0.1em]
                    text-[#978981]
                  "
                >
                  Explore Benefits
                </span>

                <span
                  className="
                    text-[12px]
                    font-semibold
                    text-[#F59120]
                  "
                >
                  0{activeIndex + 1} / 03
                </span>
              </div>

              <div
                className="
                  h-[2px] w-full
                  overflow-hidden bg-[#EEDFD5]
                "
              >
                <div
                  ref={progressRef}
                  className="
                    h-full w-full
                    origin-left bg-[#F59120]
                  "
                  style={{
                    transform: "scaleX(0)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================
          MOBILE + TABLET + REDUCED MOTION
      =================================================== */}

      <div
        className="
          relative mx-auto
          max-w-[760px]
          px-5 py-16
          sm:px-8
          lg:hidden
          motion-reduce:lg:block
        "
      >
        {/* MOBILE HEADER */}

        <div
          ref={mobileHeaderRef}
          className="mb-12"
        >
          <div
            data-mobile-heading
            className="
              flex items-center gap-3
            "
          >
            <span
              className="
                h-[2px] w-7
                bg-[#F59120]
              "
            />

            <span
              className="
                text-[11px] font-semibold
                uppercase tracking-[0.15em]
                text-[#F59120]
              "
            >
              Why It Works
            </span>
          </div>

          <h2
            data-mobile-heading
            className="
              mt-5 text-[clamp(34px,6vw,48px)]
              font-medium
              leading-[1.14]
              tracking-[-0.045em]
              text-[#19283E]
            "
          >
            The Complete{" "}
            <span className="font-semibold text-[#F59120]">
              Package.
            </span>
          </h2>

          <p
            data-mobile-heading
            className="
              mt-5 max-w-[550px]
              text-[14px]
              leading-[1.8]
              text-[#716762]
            "
          >
            Beyond our core features, each interview track
            helps you practice with purpose, review your
            progress, and move confidently toward your goals.
          </p>
        </div>

        {/* MOBILE BENEFITS */}

        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              ref={(el) => {
                mobileRefs.current[index] = el;
              }}
              className="
                border-t border-[#EEE2D9]
                pt-8
              "
            >
              {/* STATISTIC */}

              <div className="mb-8">
                <div
                  className="
                    text-[38px] font-semibold
                    leading-none tracking-[-0.05em]
                    text-[#F59120]
                  "
                >
                  {benefit.stat}
                </div>

                <div
                  className="
                    mt-2 text-[10px]
                    uppercase tracking-[0.11em]
                    text-[#8C7F78]
                  "
                >
                  {benefit.statLabel}
                </div>
              </div>

              {/* BENEFIT INFORMATION */}

              <BenefitContent
                benefit={benefit}
                mobile
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

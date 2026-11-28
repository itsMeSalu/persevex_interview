"use client";


import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowRight,
  CalendarDays,
  Zap,
  ArrowUpRight,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ===============================================
   ANTINTERN — COMPACT PREMIUM CAREER CTA

   - Single compact desktop section
   - Original blue gradient background
   - Original left content and buttons
   - Refined right-side career panel
   - Smooth bottom-to-top entrance
   - Responsive on mobile
=============================================== */

function CareerReadinessPanel({
  dashboardRef,
  progressRef,
  numberRef,
}) {
  return (
    <div
      ref={dashboardRef}
      role="img"
      aria-label="Illustration of interview preparation and practice progress"
      className="mx-auto w-full max-w-[450px]"
    >
      <div
        data-dashboard-card
        className="
          w-full overflow-hidden
          rounded-[13px]
          border border-[#EAE2DD]
          bg-white
          px-5 py-5
          sm:px-7 sm:py-6
          shadow-[0_18px_45px_rgba(9,26,64,0.11)]
        "
      >
        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 h-[3px] w-8 rounded-full bg-[#F59120]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8C7F78]">
              YOUR PREPARATION
            </p>

            <h3 className="mt-1.5 text-[21px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#19283E] sm:text-[23px]">
              Interview Readiness
            </h3>

            <p className="mt-1.5 text-[11px] leading-[1.5] text-[#81756F]">
              Every practice round brings you closer.
            </p>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E9DDD5] text-[#F59120]">
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </span>
        </div>

        {/* PROGRESS */}

        <div className="mt-5 border-t border-[#EFE6E0] pt-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium text-[#81756F]">
                Practice progress
              </p>

              <div className="mt-1 flex items-baseline gap-2">
                <span
                  ref={numberRef}
                  className="
                    text-[43px] font-medium
                    leading-none tracking-[-0.065em]
                    tabular-nums text-[#19283E]
                  "
                >
                  0%
                </span>

                <span className="text-[10px] text-[#998A82]">
                  completed
                </span>
              </div>
            </div>

            <span className="mb-1 text-[10px] font-medium text-[#F59120]">
              In progress
            </span>
          </div>

          <div className="mt-4 h-[5px] w-full overflow-hidden rounded-full bg-[#EFE6E0]">
            <div
              ref={progressRef}
              className="h-full w-[75%] origin-left rounded-full bg-[#F59120]"
            />
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-[#A49489]">
            <span>Getting started</span>
            <span>Interview ready</span>
          </div>
        </div>

        {/* CAREER PREPARATION */}

        <div className="mt-5 border-t border-[#EFE6E0] pt-4">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-[12px] font-semibold text-[#19283E]">
              Interview preparation
            </h4>

            <span className="text-[9px] font-medium text-[#9D8E85]">
              02 focus areas
            </span>
          </div>

          {/* FIRST ROW */}

          <div
            data-preparation-row
            className="mt-4 flex items-center justify-between gap-3 border-b border-[#F7EFE9] pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium text-[#A49489]">
                01
              </span>

              <div>
                <p className="text-[11px] font-medium text-[#344052]">
                  Mock Interviews
                </p>
                <p className="mt-0.5 text-[10px] text-[#9D8E85]">
                  Practice with confidence
                </p>
              </div>
            </div>

            <span className="flex h-[21px] w-[21px] items-center justify-center rounded-full border border-[#CFE4DA] bg-[#F2FAF6] text-[#3A9670]">
              <Check size={11} strokeWidth={2} />
            </span>
          </div>

          {/* SECOND ROW */}

          <div
            data-preparation-row
            className="flex items-center justify-between gap-3 pt-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium text-[#A49489]">
                02
              </span>

              <div>
                <p className="text-[11px] font-medium text-[#344052]">
                  Answer Review
                </p>
                <p className="mt-0.5 text-[10px] text-[#9D8E85]">
                  See how your answers improve
                </p>
              </div>
            </div>

            <span className="flex h-[21px] w-[21px] items-center justify-center rounded-full border border-[#CFE4DA] bg-[#F2FAF6] text-[#3A9670]">
              <Check size={11} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* FOOTER */}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#EFE6E0] pt-4">
          <span className="text-[10px] font-medium text-[#665A57]">
            Practice. Improve. Succeed.
          </span>

          <span className="text-[9px] tracking-[0.04em] text-[#A49489]">
            ANTINTERN
          </span>
        </div>
      </div>
    </div>
  );
}

/* ===============================================
   MAIN COMPONENT
=============================================== */

export default function CareerCTA({
  startHref = "/#interviews",
  scheduleHref = "mailto:support@antintern.com?subject=Interview%20preparation",
}) {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const dashboardRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const card = dashboardRef.current.querySelector(
            "[data-dashboard-card]"
          );

          const rows = dashboardRef.current.querySelectorAll(
            "[data-preparation-row]"
          );

          const progress = { value: 0 };

          gsap.set(badgeRef.current, {
            autoAlpha: 0,
            y: 18,
          });

          gsap.set(headingRef.current, {
            autoAlpha: 0,
            y: 45,
          });

          gsap.set(descriptionRef.current, {
            autoAlpha: 0,
            y: 25,
          });

          gsap.set(buttonsRef.current.children, {
            autoAlpha: 0,
            y: 22,
          });

          gsap.set(card, {
            autoAlpha: 0,
            y: 45,
          });

          gsap.set(rows, {
            autoAlpha: 0,
            y: 14,
          });

          gsap.set(progressRef.current, {
            scaleX: 0,
            transformOrigin: "left center",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            defaults: {
              ease: "power3.out",
            },
          });

          tl
            .to(
              badgeRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
              },
              0
            )
            .to(
              headingRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
              },
              0.15
            )
            .to(
              descriptionRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
              },
              0.45
            )
            .to(
              buttonsRef.current.children,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
              },
              0.7
            )
            .to(
              card,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
              },
              0.35
            )
            .to(
              progressRef.current,
              {
                scaleX: 1,
                duration: 1.35,
                ease: "power2.inOut",
              },
              1.05
            )
            .to(
              progress,
              {
                value: 75,
                duration: 1.35,
                ease: "power2.inOut",
                onUpdate: () => {
                  if (numberRef.current) {
                    numberRef.current.textContent =
                      `${Math.round(progress.value)}%`;
                  }
                },
              },
              1.05
            )
            .to(
              rows,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
              },
              1.1
            );
        }, sectionRef);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="career-cta"
      className="
        relative w-full bg-white
        px-5 py-8
        sm:px-8 sm:py-10
        lg:px-12 lg:py-12
      "
    >
      {/* COMPACT GRADIENT CONTAINER */}

      <div
        className="
          relative mx-auto w-full
          max-w-[1300px]
          overflow-hidden rounded-[22px]

          border border-[#EADFD4] bg-[#FFFCF8] bg-[radial-gradient(ellipse_45%_65%_at_100%_0%,#F3D4B7_0%,#F9EBDD_45%,transparent_100%)]

          px-6 py-8
          sm:px-9 sm:py-9
          lg:px-12 lg:py-9
        "
      >
        <div
          className="
            grid grid-cols-1 items-center
            gap-8
            lg:grid-cols-[1.03fr_0.97fr]
            lg:gap-10
          "
        >
          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">
            <div
              ref={badgeRef}
              className="
                mx-auto inline-flex items-center gap-2
                rounded-full border border-[#EAD5C1]
                bg-[#FFF5E9] px-4 py-2
                text-[10px] font-medium text-[#9A552B]
                lg:mx-0
              "
            >
              <Zap size={13} />
              Start Preparing at Your Pace
            </div>

            <h2
              ref={headingRef}
              className="
                mt-5
                text-[clamp(2rem,3.4vw,3.35rem)]
                font-semibold leading-[1.12]
                tracking-[-0.05em]
                text-[#302820]
              "
            >
              Ready to Prepare for
              <span className="block">
                Your Interview?
              </span>
            </h2>

            <p
              ref={descriptionRef}
              className="
                mx-auto mt-4 max-w-[460px]
                text-[13px] leading-[1.75]
                text-[#746457]
                sm:text-[14px]
                lg:mx-0
              "
            >
              Practice for the roles that matter to you,
              build confidence, and take your next step
              with AntIntern.
            </p>

            <div
              ref={buttonsRef}
              className="
                mt-6 flex flex-col
                items-center gap-3
                sm:flex-row sm:justify-center
                lg:justify-start
              "
            >
              <a
                href={startHref}
                className="
                  group inline-flex min-h-[44px]
                  w-full items-center
                  justify-center gap-2
                  rounded-full bg-[#B85C2C]
                  px-6 text-[12px]
                  font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.13)]
                  sm:w-auto
                "
              >
                Explore Interview Tracks
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={scheduleHref}
                className="
                  inline-flex min-h-[44px]
                  w-full items-center
                  justify-center gap-2
                  rounded-full border
                  border-[#DDC9B7]
                  bg-white px-6
                  text-[12px] font-semibold
                  text-[#624C3B]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#FFF2E4]
                  sm:w-auto
                "
              >
                <CalendarDays size={15} />
                Ask a Question
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <CareerReadinessPanel
            dashboardRef={dashboardRef}
            progressRef={progressRef}
            numberRef={numberRef}
          />
        </div>
      </div>
    </section>
  );
}

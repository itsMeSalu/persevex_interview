"use client";

import SiteHeader from "../../components/SiteHeader.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import heroPhoto from "../../assets/practice.webp";
import OfficialMarqueeLogo from "./components/OfficialMarqueeLogo";
import { students } from "./reviews-data";
import { ReviewRating } from "./components/ReviewRating";
import { useMotionPreference } from "./components/useMotionPreference";
import "./reviews.css";

import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  BadgeCheck,
  Quote,
  BriefcaseBusiness,
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   GLOBAL CONFIGURATION
========================================== */

const NAVBAR_HEIGHT = 76;

const ENROLL = "https://www.antintern.com/signup";
const COURSES = "/#interviews";

const HERO_PHOTO = heroPhoto;

/* ==========================================
   COMPANY DATA
========================================== */

const companies = [
  { name: "TCS", domain: "tcs.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "PwC", domain: "pwc.com" },
  { name: "KPMG", domain: "kpmg.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Harman", domain: "harman.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "HCL", domain: "hcltech.com" },
];

const stats = [
 { value: 9, suffix: "", label: "Sample Scenarios" },
 { value: 3, suffix: "", label: "Preparation Topics" },
 { value: 3, suffix: "", label: "Practice Areas" },
 { value: 1, suffix: "", label: "Preparation Platform" },
];

/* ==========================================
   STUDENT REVIEW DATA
========================================== */

const categories = [
  { label: "All", value: "All" },
  { label: "Placement", value: "Placement" },
  { label: "Course", value: "Course" },
  { label: "Mentorship", value: "Mentorship" },
];

/* ==========================================
   REUSABLE BOTTOM-TO-TOP HEADING ANIMATION

   Every heading group uses:
   data-heading-reveal

   One shared hook keeps animation consistent.
========================================== */

function useHeadingReveal(sectionRef, dependencies = []) {
  const reducedMotion = useMotionPreference();
  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (
      reducedMotion
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray(
        "[data-heading-group]"
      );

      groups.forEach((group) => {
        const items = group.querySelectorAll(
          "[data-heading-reveal]"
        );

        if (!items.length) return;

        gsap.fromTo(
          items,
          {
            y: 42,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.13,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion, ...dependencies]);
}

/* ==========================================
   SHARED UI
========================================== */

function SectionLabel({ children, prominent = false }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold uppercase text-[#fa7405] ${prominent ? "text-[13px] tracking-[0.12em] sm:text-[14px]" : "text-[11px] tracking-[0.13em]"}`}>
      <span className="h-[7px] w-[7px] rounded-full bg-[#fa7405]" />
      {children}
    </span>
  );
}

function Avatar({ student, size = 42 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full font-semibold"
      style={{
        width: size,
        height: size,
        backgroundColor: student.color,
        color: student.ink,
        fontSize: size > 44 ? 15 : 12,
      }}
    >
      {student.initials}
    </div>
  );
}

function CompanyLogo({ company, size = 34, showName = false }) {
  return (
    <div className="inline-flex min-w-0 items-center gap-2.5">
      <OfficialMarqueeLogo company={company} size={size} />
      {showName && (
        <span className="truncate text-[13px] font-semibold text-[#334155]">
          {company}
        </span>
      )}
    </div>
  );
}

/* ==========================================
   MOVING COMPANY MARQUEE
========================================== */

function LogoMarquee({
  speed = 55,
  compact = false,
  officialLogos = false,
}) {
  const reducedMotion = useMotionPreference();
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const groupRef = useRef(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = groupRef.current;

    if (!viewport || !track || !group) return;

    const reduced = reducedMotion;

    if (reduced) return;

    let tween;
    let observer;

    const createAnimation = () => {
      const distance = group.offsetWidth;

      if (!distance) return;

      const progress = tween ? tween.progress() : 0;
      const paused = tween?.paused() || false;

      tween?.kill();

      tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -distance,
          duration: distance / speed,
          repeat: -1,
          ease: "none",
        }
      );

      tween.progress(progress);

      if (paused) tween.pause();
    };

    createAnimation();

    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(createAnimation);
      observer.observe(group);
    }

    const pause = () => tween?.pause();
    const resume = () => tween?.resume();

    viewport.addEventListener("mouseenter", pause);
    viewport.addEventListener("mouseleave", resume);

    return () => {
      observer?.disconnect();

      viewport.removeEventListener("mouseenter", pause);
      viewport.removeEventListener("mouseleave", resume);

      tween?.kill();
    };
  }, [speed, reducedMotion]);

  return (
    <div
      ref={viewportRef}
      data-logo-viewport
      className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
    >
      <div
        ref={trackRef}
        className="flex w-max items-center"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : null}
            aria-hidden={copy === 1}
            className={`flex shrink-0 items-center ${
              compact ? "gap-8 pr-8" : "gap-12 pr-12"
            }`}
          >
            {companies.map((company) => (
              <div
                key={`${copy}-${company.name}`}
                className={`flex shrink-0 items-center justify-center gap-3 ${
                  compact
                    ? "h-[65px] w-[145px]"
                    : "h-[95px] w-[185px]"
                }`}
              >
                {officialLogos ? (
                  <OfficialMarqueeLogo company={company.name} />
                ) : (
                  <CompanyLogo
                    company={company.name}
                    size={compact ? 34 : 43}
                    showName
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   HERO REVIEW CARDS
========================================== */


/* ==========================================
   COMPACT MOVING HERO REVIEW CARD
========================================== */

/* ==========================================
   MOVING REVIEW HERO CARD
========================================== */

function HeroReviewCard({ student }) {
  return (
    <article
      className="
        flex h-[178px] w-[260px] shrink-0
        flex-col justify-between
        rounded-[14px]
        border border-[#fff7ef]
        bg-white p-4
        shadow-[0_10px_30px_rgba(15,23,42,0.055)]
        transition-[box-shadow,border-color]
        duration-300
        hover:border-[#dec4ae]
        hover:shadow-[0_15px_35px_rgba(250,116,5,0.09)]
        xl:w-[280px]
      "
    >
      <div className="flex items-center gap-3">
        <Avatar student={student} size={38} />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[12px] font-semibold text-[#17243C]">
            {student.name}
          </h3>
          <p className="mt-1 truncate text-[10px] text-[#8490A3]">
            {student.role}
          </p>
        </div>

        <CompanyLogo company={student.company} size={25} />
      </div>

      <p className="mt-3 line-clamp-3 text-[11px] leading-[1.65] text-[#64748B]">
        {student.review.replace("…see more", "")}
      </p>

      <div className="mt-3 flex items-center justify-between border-t border-[#fff7ef] pt-3">
        <div className="flex gap-1" role="img" aria-label={`${student.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              aria-hidden="true"
              fill={i < student.rating ? "#F2B94B" : "none"}
              stroke={i < student.rating ? "#F2B94B" : "#dec4ae"}
            />
          ))}
        </div>

        <span className="text-[10px] font-medium text-[#fa7405]">
          {student.company}
        </span>
      </div>
    </article>
  );
}

/* ==========================================
   SEAMLESS INFINITE REVIEW ROW
========================================== */

function MovingReviewRow({
  reviews,
  direction = "left",
  speed = 28,
}) {
  const reducedMotion = useMotionPreference();
  const viewportRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const groupRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = groupRef.current;

    if (!viewport || !track || !group) return;

    const reduced = reducedMotion;

    if (reduced) return;

    let tween;
    let observer;

    function startAnimation() {
      const distance = group.offsetWidth;
      if (!distance) return;

      tween?.kill();

      tween = gsap.fromTo(
        track,
        {
          x: direction === "left" ? 0 : -distance,
        },
        {
          x: direction === "left" ? -distance : 0,
          duration: distance / speed,
          ease: "none",
          repeat: -1,
        }
      );
    }

    startAnimation();

    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(startAnimation);
      observer.observe(group);
    }

    const pause = () => tween?.pause();
    const resume = () => tween?.resume();

    viewport.addEventListener("mouseenter", pause);
    viewport.addEventListener("mouseleave", resume);
    viewport.addEventListener("focusin", pause);
    viewport.addEventListener("focusout", resume);

    return () => {
      observer?.disconnect();
      viewport.removeEventListener("mouseenter", pause);
      viewport.removeEventListener("mouseleave", resume);
      viewport.removeEventListener("focusin", pause);
      viewport.removeEventListener("focusout", resume);
      tween?.kill();
    };
  }, [reviews, direction, speed, reducedMotion]);

  return (
    <div
      ref={viewportRef}
      className="relative w-full overflow-hidden py-2"
    >
      <div
        ref={trackRef}
        className="flex w-max items-stretch will-change-transform"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : null}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {reviews.map((student) => (
              <HeroReviewCard
                key={`${copy}-${student.name}`}
                student={student}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   TWO ROW MOVING REVIEW SHOWCASE
========================================== */

function HeroReviewShowcase({ showcaseRef }) {
  const firstRow = React.useMemo(
    () => [
      students[0],
      students[1],
      students[4],
      students[2],
      students[6],
    ],
    []
  );

  const secondRow = React.useMemo(
    () => [
      students[3],
      students[7],
      students[5],
      students[8],
      students[1],
    ],
    []
  );

  return (
    <div
      ref={showcaseRef}
      className="
        relative mx-auto flex
        h-[435px] w-full max-w-[570px]
        flex-col justify-center
        overflow-hidden
        lg:ml-auto lg:mr-0
        lg:h-[465px]
        lg:max-w-[620px]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[15%] top-[15%]
          h-[350px] w-[430px]
          rounded-full
          bg-[#dec4ae]/40
          blur-[95px]
        "
      />

      <div className="relative z-10">
        <MovingReviewRow
          reviews={firstRow}
          direction="left"
          speed={30}
        />
      </div>

      <div className="relative z-10 mt-2">
        <MovingReviewRow
          reviews={secondRow}
          direction="right"
          speed={25}
        />
      </div>

      <div
        className="
          pointer-events-none absolute
          inset-y-0 left-0 z-20 w-[45px]
          bg-gradient-to-r
          from-white to-transparent
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-y-0 right-0 z-20 w-[45px]
          bg-gradient-to-l
          from-white to-transparent
        "
      />
    </div>
  );
}

/* ==========================================
   HERO STATISTICS
========================================== */

function HeroStatistics({ stageRef, counterRefs }) {
  return (
    <div
      ref={stageRef}
      className="
        invisible absolute inset-0 z-40
        flex items-center justify-center
        bg-[#fff7ef] px-5 opacity-0
      "
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#fff7ef_60%,#fff7ef_100%)]" />

      <div className="relative mx-auto w-full max-w-[1250px] text-center">
        <div data-stat-heading>
          <SectionLabel>AntIntern in Numbers</SectionLabel>

          <h2 className="mt-5 text-[clamp(2rem,4.6vw,4.7rem)] font-semibold tracking-[-0.06em] text-[#0F172A]">
            Real learning.
            <br />
            <span className="text-[#fa7405]">Real impact.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-7 lg:mt-14 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} data-stat-card>
              <strong
                ref={(element) => {
                  counterRefs.current[index] = element;
                }}
                className="
                  text-[clamp(2.3rem,5vw,5.5rem)]
                  font-semibold tracking-[-0.065em]
                  text-[#fa7405] tabular-nums
                "
              >
                0{stat.suffix}
              </strong>

              <p className="mt-3 text-[13px] text-[#64748B]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   COMPLETE REVIEWS HERO
========================================== */

function ReviewsHero() {
  const reducedMotion = useMotionPreference();
  const heroRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const headingRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const showcaseRef = React.useRef(null);
  const logosRef = React.useRef(null);

  const photoLayerRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const captionRef = React.useRef(null);

  const statsRef = React.useRef(null);
  const counterRefs = React.useRef([]);

  React.useLayoutEffect(() => {
    if (!heroRef.current) return;

    const reduced = reducedMotion;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 1024px)", () => {
        const heading = headingRef.current;
        const content = contentRef.current;
        const showcase = showcaseRef.current;
        const logos = logosRef.current;

        const photo = photoLayerRef.current;
        const image = imageRef.current;
        const caption = captionRef.current;
        const statLayer = statsRef.current;

        const statHeading = statLayer.querySelector(
          "[data-stat-heading]"
        );

        const statCards = statLayer.querySelectorAll(
          "[data-stat-card]"
        );

        const counters = stats.map(() => ({ value: 0 }));

        const updateCounters = () => {
          counters.forEach((counter, index) => {
            const element = counterRefs.current[index];
            if (!element) return;

            const value = Math.max(
              0,
              Math.min(
                stats[index].value,
                Math.round(counter.value)
              )
            );

            element.textContent =
              value.toLocaleString("en-IN") +
              stats[index].suffix;
          });
        };

        if (reduced) {
          gsap.set([heading, content, showcase, logos], {
            autoAlpha: 1,
            clearProps: "transform",
          });
          gsap.set([photo, statLayer], {
            autoAlpha: 0,
          });
          return;
        }

        gsap.set(heading, {
          autoAlpha: 0,
          y: 45,
        });

        gsap.set(content, {
          autoAlpha: 0,
          y: 30,
        });

        gsap.set(showcase, {
          autoAlpha: 0,
          x: 55,
        });

        gsap.set(logos, {
          autoAlpha: 0,
          y: 25,
        });

        gsap.set(photo, {
          autoAlpha: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.set(image, {
          scale: 1.12,
        });

        gsap.set(caption, {
          autoAlpha: 0,
          y: 25,
        });

        gsap.set(statLayer, {
          autoAlpha: 0,
        });

        gsap.set([statHeading, ...statCards], {
          autoAlpha: 0,
          y: 30,
        });

        /* OPENING ANIMATION */

        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        intro
          .to(heading, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
          })
          .to(
            content,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
            },
            "-=0.45"
          )
          .to(
            showcase,
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.85,
            },
            "-=0.5"
          )
          .to(
            logos,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
            },
            "-=0.35"
          );

        /* PINNED HERO SCROLL ANIMATION */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: heroRef.current,
            start: `top top+=${NAVBAR_HEIGHT}`,
            end: () =>
              "+=" + Math.round(window.innerHeight * 2.15),
            scrub: 0.8,
            pin: stageRef.current,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to({}, { duration: 0.14 });

        /* FIRST SCREEN EXITS */

        tl.to(
          heading,
          {
            y: -105,
            autoAlpha: 0,
            duration: 0.28,
          },
          0.14
        );

        tl.to(
          content,
          {
            y: -65,
            autoAlpha: 0,
            duration: 0.24,
          },
          0.17
        );

        tl.to(
          showcase,
          {
            x: 110,
            autoAlpha: 0,
            duration: 0.25,
          },
          0.17
        );

        tl.to(
          logos,
          {
            y: -20,
            autoAlpha: 0,
            duration: 0.22,
          },
          0.17
        );

        /* SECOND SCREEN - PHOTO */

        tl.to(
          photo,
          {
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.38,
          },
          0.22
        );

        tl.to(
          image,
          {
            scale: 1,
            duration: 0.46,
          },
          0.22
        );

        tl.to(
          caption,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.14,
          },
          0.48
        );

        tl.to({}, { duration: 0.12 });

        /* THIRD SCREEN - STATISTICS */

        tl.to(
          statLayer,
          {
            autoAlpha: 1,
            duration: 0.12,
          },
          0.7
        );

        tl.to(
          statHeading,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.17,
          },
          0.75
        );

        tl.to(
          statCards,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.025,
          },
          0.79
        );

        counters.forEach((counter, index) => {
          tl.to(
            counter,
            {
              value: stats[index].value,
              duration: 0.24,
              ease: "power1.out",
            },
            0.86 + index * 0.025
          );
        });

        tl.to({}, { duration: 0.24 });
        tl.eventCallback("onUpdate", updateCounters);

        return () => {
          intro.kill();
          tl.kill();
        };
      });

      /* MOBILE ANIMATION */

      mm.add("(max-width: 1023px)", () => {
        gsap.set(
          [photoLayerRef.current, statsRef.current],
          { autoAlpha: 0 }
        );

        if (reduced) return;

        const intro = gsap.fromTo(
          [headingRef.current, contentRef.current],
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.85,
            ease: "power3.out",
          }
        );

        return () => intro.kill();
      });
    }, heroRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <>
      <section id="reviews-hero" ref={heroRef} className="relative bg-white">
        <div
          ref={stageRef}
          className="
            relative min-h-[600px]
            w-full overflow-hidden bg-white
            lg:h-[calc(100svh-76px)]
          "
        >
          {/* FIRST HERO SCREEN */}

          <div
            className="
              relative z-10 mx-auto grid
              h-full max-w-[1450px]
              items-center gap-10
              px-6 py-10 sm:px-10
              lg:grid-cols-[1.15fr_1fr]
              lg:gap-8 lg:px-[7%]
              lg:pb-[110px]
            "
          >
            {/* LEFT CONTENT */}

            <div className="min-w-0">
              <div ref={headingRef}>
                <SectionLabel>
                  Student Reviews
                </SectionLabel>

                <h1
                  className="
                    mt-6
                    text-[clamp(2.7rem,5.3vw,5.6rem)]
                    font-semibold
                    leading-[0.99]
                    tracking-[-0.075em]
                    text-[#0F172A]
                  "
                >
                  <span className="block">
                    Stories from
                  </span>

                  <span className="block">
                    students who
                  </span>

                  <span
                    className="
                      block w-fit
                      bg-clip-text text-transparent
                    "
                    style={{
                      backgroundImage: `linear-gradient(
                        rgba(250,116,5,.14),
                        rgba(250,116,5,.14)
                      ),url("${HERO_PHOTO}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    levelled up
                  </span>
                </h1>
              </div>

              <div
                ref={contentRef}
                className="mt-7 flex flex-col gap-5"
              >
                {/* RATING */}

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <Star
                        key={item}
                        size={15}
                        fill="#F5B93E"
                        stroke="#F5B93E"
                      />
                    ))}
                  </div>

                  <strong className="text-[15px] text-[#0F172A]">
                    Sample stories
                  </strong>

                  <span className="text-[12px] text-[#64748B]">
                    Illustrative examples — learner reviews coming soon
                  </span>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    max-w-[570px]
                    text-[14px] leading-[1.8]
                    text-[#64748B]
                    sm:text-[15px]
                  "
                >
                  These illustrative preparation scenarios demonstrate the review experience.
                  They are sample content, not published learner testimonials.
                </p>

                {/* BUTTONS */}

                <div className="flex flex-wrap gap-3">
                  <a
                    href={ENROLL}
                    className="
                      inline-flex min-h-11 items-center
                      gap-3 bg-[#fa7405] px-5
                      text-[13px] font-semibold
                      text-white
                      transition-colors
                      hover:bg-[#1E40AF]
                    "
                  >
                    Start your story
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={COURSES}
                    className="
                      inline-flex min-h-11 items-center
                      gap-3 border border-[#dec4ae]
                      bg-white px-5
                      text-[13px] font-semibold
                      text-[#0F172A]
                      transition-colors
                      hover:bg-[#fff7ef]
                    "
                  >
                    Explore programs
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT - CONTINUOUS REVIEW CARDS */}

            <HeroReviewShowcase showcaseRef={showcaseRef} />
          </div>

          {/* BOTTOM COMPANY LOGO MARQUEE */}

          <div
            ref={logosRef}
            className="
              absolute inset-x-0 bottom-0 z-10
              hidden border-t border-[#fff7ef]
              bg-white lg:block
            "
          >
            <div
              className="
                mx-auto flex h-[95px]
                max-w-[1550px] items-center
              "
            >
              <div
                className="
                  flex h-full w-[225px]
                  shrink-0 items-center
                  border-r border-[#fff7ef]
                  pl-8
                "
              >
                <div>
                  <p
                    className="
                      text-[10px] font-semibold
                      uppercase tracking-widest
                      text-[#94A3B8]
                    "
                  >
                    Student Careers
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#0F172A]">
                    Companies represented
                  </p>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <LogoMarquee compact speed={55} />
              </div>
            </div>
          </div>

          {/* PHOTO TRANSITION */}

          <div
            ref={photoLayerRef}
            className="
              invisible absolute inset-0 z-20
              overflow-hidden bg-[#fff7ef]
            "
            style={{
              clipPath: "inset(100% 0% 0% 0%)",
            }}
          >
            <img
              ref={imageRef}
              src={HERO_PHOTO}
              alt="A warm interview preparation workspace"
              className="h-full w-full object-contain p-[6%]"
            />

            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0F172A]/65 to-transparent" />

            <div
              ref={captionRef}
              className="
                absolute bottom-[9%] left-[8%]
                max-w-[600px] text-white
              "
            >
              <span
                className="
                  text-[11px] font-semibold
                  uppercase tracking-widest
                "
              >
                AntIntern Student Reviews
              </span>

              <p
                className="
                  mt-4
                  text-[clamp(1.8rem,3.5vw,4rem)]
                  font-semibold tracking-[-0.05em]
                "
              >
                Stories from students who levelled up
              </p>
            </div>
          </div>

          {/* STATISTICS SCREEN */}

          <HeroStatistics
            stageRef={statsRef}
            counterRefs={counterRefs}
          />
        </div>
      </section>

      {/* MOBILE STATISTICS */}

      <section id="reviews-stats" className="bg-[#fff7ef] px-6 py-14 lg:hidden motion-reduce:lg:block">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>
            AntIntern in Numbers
          </SectionLabel>

          <div className="mt-9 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong className="text-3xl font-semibold text-[#fa7405]">
                  {stat.value.toLocaleString("en-IN")}
                  {stat.suffix}
                </strong>

                <p className="mt-2 text-xs text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



/* ==========================================
   INFINITE MOVING REVIEW ROW
========================================== */



/* ==========================================
   NEW HERO REVIEW SHOWCASE
   TWO CONTINUOUS MOVING ROWS
========================================== */





/* ==========================================
   REVIEWS HERO
========================================== */


/* ==========================================
   TESTIMONIAL CARD
========================================== */

function TestimonialCard({
  student,
  isOpen,
  onToggle,
  onHoverChange,
  duplicate = false,
}) {
  const reducedMotion = useMotionPreference();
  const detailsRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen || !detailsRef.current) {
      return;
    }

    if (
      reducedMotion
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        detailsRef.current,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          ease: "power3.out",
        }
      );
    }, detailsRef);

    return () => ctx.revert();
  }, [isOpen, reducedMotion]);

  return (
    <article
      className="group relative flex h-[385px] w-[310px] shrink-0 flex-col sm:h-[405px] sm:w-[340px] lg:h-[420px] lg:w-[360px]"
      onMouseEnter={() =>
        onHoverChange(true)
      }
      onMouseLeave={() =>
        onHoverChange(false)
      }
      onFocusCapture={() =>
        onHoverChange(true)
      }
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          onHoverChange(false);
        }
      }}
    >
      <div className="relative flex min-h-0 flex-1 flex-col rounded-[15px] border border-[#fff7ef] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.055)] transition-shadow duration-300 group-hover:shadow-[0_18px_45px_rgba(15,23,42,.085)] sm:p-7">
        <div className="absolute -bottom-[8px] left-8 h-4 w-4 rotate-45 border-b border-r border-[#fff7ef] bg-white" />

        <div className="flex items-center justify-between gap-3">
          <CompanyLogo
            company={student.company}
            showName
            size={45}
          />

          <Quote
            size={28}
            strokeWidth={1.3}
            className="text-[#dec4ae]"
          />
        </div>

        {!isOpen ? (
          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <h3 className="text-[25px] font-semibold leading-[1.25] tracking-[-0.045em] text-[#0F172A]">
              {student.name}
            </h3>

            <p className="mt-3 text-[14px] leading-[1.65] text-[#64748B]">
              {student.role}
            </p>

            <p className="mt-1 text-[13px] font-semibold text-[#fa7405]">
              {student.company}
            </p>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#198354]">
              <BadgeCheck size={15} />
              Illustrative sample
            </div>
          </div>
        ) : (
          <div
            ref={detailsRef}
            className="flex min-h-0 flex-1 flex-col overflow-hidden pt-5"
          >
            <p className="break-words text-[12px] font-semibold text-[#fa7405]">
              {student.hashtag}
            </p>

            <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
              <p className="text-[13px] leading-[1.75] text-[#475569]">
                {student.review}
              </p>
            </div>

            <p className="mt-3 text-[11px] text-[#94A3B8]">
              — reactions ·{" "}
              — comments
            </p>
          </div>
        )}

        <span className="text-xs text-[#a65b2b]">Sample scenario</span>
        <div className="mt-auto flex items-center justify-between border-t border-[#fff7ef] pt-4">
          <button
            type="button"
            onClick={onToggle}
            tabIndex={duplicate ? -1 : 0}
            aria-expanded={isOpen}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#fa7405] hover:text-[#1E40AF]"
          >
            {isOpen
              ? "Show less"
              : "Read more"}

            {isOpen ? (
              <X size={15} />
            ) : (
              <ArrowUpRight size={16} />
            )}
          </button>

          <span className="text-[11px] text-[#94A3B8]">
            {student.time}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex h-[55px] shrink-0 items-center gap-3 pl-5">
        <Avatar
          student={student}
          size={44}
        />

        <div className="min-w-0">
          <h4 className="truncate text-[13px] font-semibold text-[#0F172A]">
            {student.name}
          </h4>

          <p className="mt-1 truncate text-[11px] text-[#94A3B8]">
            {student.role} ·{" "}
            {student.company}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   TESTIMONIALS REVIEWS SECTION

   NEW:
   Heading animates bottom-to-top.
========================================== */

function TestimonialsReviewsSection() {
  const reducedMotion = useMotionPreference();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const hoveredRef = useRef(false);
  const openRef = useRef(false);

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    openStudent,
    setOpenStudent,
  ] = useState(null);

  const [hovered, setHovered] =
    useState(false);

  const filteredStudents = useMemo(
    () =>
      activeCategory === "All"
        ? students
        : students.filter(
            (student) =>
              student.categories.includes(activeCategory)
          ),
    [activeCategory]
  );

  /* BOTTOM-TO-TOP HEADING */

  useHeadingReveal(sectionRef);

  /* RIGHT CARDS ENTRANCE */

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    if (
      reducedMotion
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-testimonial-right]",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 77%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  /* AUTOMATIC MARQUEE */

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    track.parentElement.scrollLeft = 0;
    gsap.set(track, {
      x: 0,
    });

    if (
      reducedMotion
    ) {
      return;
    }

    const distance =
      track.scrollWidth / 2;

    if (!distance) return;

    const tween = gsap.to(track, {
      x: -distance,
      duration: Math.max(
        18,
        distance / 38
      ),
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    if (
      hoveredRef.current ||
      openRef.current
    ) {
      tween.pause();
    }

    return () => {
      gsap.killTweensOf(tween);
      tween.kill();

      if (
        tweenRef.current === tween
      ) {
        tweenRef.current = null;
      }
    };
  }, [filteredStudents, reducedMotion]);

  useLayoutEffect(() => {
    openRef.current =
      openStudent !== null;

    hoveredRef.current = hovered;

    const tween = tweenRef.current;

    if (!tween) return;

    if (
      openRef.current ||
      hovered
    ) {
      tween.pause();
    } else {
      tween.resume();
    }
  }, [openStudent, hovered]);

  const handleFilter = (category) => {
    setOpenStudent(null);
    setHovered(false);

    openRef.current = false;
    hoveredRef.current = false;

    setActiveCategory(category);
  };

  const moveCarousel = (direction) => {
    const tween = tweenRef.current;
    const track = trackRef.current;

    if (!track) return;

    const card = track.querySelector(
      "[data-carousel-card]"
    );

    if (!card) return;

    const width =
      card.getBoundingClientRect()
        .width + 20;

    const distance =
      track.scrollWidth / 2;

    if (!distance) return;

    if (!tween) {
      track.parentElement.scrollBy({ left: direction * width, behavior: "instant" });
      return;
    }
    tween.pause();

    gsap.to(tween, {
      totalTime:
        gsap.utils.wrap(0, tween.duration(), tween.totalTime() + direction * tween.duration() * (width / distance)),
      duration: 0.75,
      ease: "power2.inOut",
      overwrite: true,
      onComplete: () => {
        if (
          !openRef.current &&
          !hoveredRef.current
        ) {
          tween.resume();
        }
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative isolate flex w-full flex-col justify-center overflow-hidden bg-white py-16 lg:h-[calc(100svh-76px)] lg:min-h-[640px] lg:max-h-[950px] lg:py-6"
    >
      <div className="mx-auto grid w-full max-w-[1540px] grid-cols-1 items-center gap-9 px-6 md:px-10 lg:grid-cols-[30%_minmax(0,70%)] lg:gap-0 lg:pl-[7%] lg:pr-0">
        {/* LEFT CONTENT */}

        <div
          data-heading-group
          className="relative z-10 flex flex-col items-start lg:pr-7"
        >
          <div data-heading-reveal>
            <SectionLabel prominent>
              Testimonials
            </SectionLabel>
          </div>

          <div data-heading-reveal>
            <Quote
              size={58}
              strokeWidth={1.15}
              fill="#dec4ae"
              className="mt-7 text-[#dec4ae]"
            />
          </div>

          <h2
            data-heading-reveal
            className="mt-5 max-w-[350px] text-[clamp(2.1rem,3.1vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-[#0F172A]"
          >
            What our
            <br />
            students are
            <br />
            <span className="text-[#fa7405]">
              saying.
            </span>
          </h2>

          <p
            data-heading-reveal
            className="mt-6 max-w-[340px] text-[16px] leading-[1.85] text-[#52647C] sm:text-[17px]"
          >
            Illustrative examples of learners who
            learned, built projects, and grew
            their careers with AntIntern.
          </p>

          <div
            data-heading-reveal
            className="mt-7 flex max-w-[340px] flex-wrap gap-2"
          >
            {categories.map(
              (category) => (
                <button
                  key={category.value}
                  type="button"
                  aria-pressed={
                    activeCategory ===
                    category.value
                  }
                  onClick={() =>
                    handleFilter(
                      category.value
                    )
                  }
                  className={`rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                    activeCategory ===
                    category.value
                      ? "border-[#fa7405] bg-[#fa7405] text-white"
                      : "border-[#dec4ae] bg-white text-[#64748B] hover:border-[#9DB9F2]"
                  }`}
                >
                  {category.label}{category.value !== "All" && ` (${students.filter(student => student.categories.includes(category.value)).length})`}
                </button>
              )
            )}
          </div>

          <div
            data-heading-reveal
            className="mt-8 flex items-center gap-4"
          >
            <button
              type="button"
              aria-label="Previous review"
              onClick={() =>
                moveCarousel(-1)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fff7ef] text-[#0F172A] transition-colors hover:border-[#fa7405] hover:text-[#fa7405]"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="h-[2px] w-[76px] bg-[#fff7ef]">
              <div className="h-full w-[38%] bg-[#fa7405]" />
            </div>

            <button
              type="button"
              aria-label="Next review"
              onClick={() =>
                moveCarousel(1)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fff7ef] text-[#0F172A] transition-colors hover:border-[#fa7405] hover:text-[#fa7405]"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <p
            data-heading-reveal
            className="mt-4 text-[11px] text-[#94A3B8]"
          >
            Showing{" "}
            {filteredStudents.length}{" "}
            available student stories
          </p>
        </div>

        {/* AUTOMATIC TESTIMONIAL CARDS */}

        <div
          data-testimonial-right
          className="relative min-w-0 overflow-hidden py-5 [mask-image:linear-gradient(to_right,black_0%,black_87%,transparent_100%)]"
        >
          <div
            ref={trackRef}
            className="flex w-max items-stretch"
          >
            {(reducedMotion ? [0] : [0, 1]).map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-5 pr-5"
              >
                {filteredStudents.map(
                  (student) => {
                    const id =
                      `${student.name}-${copy}`;

                    const isOpen =
                      openStudent === id;

                    return (
                      <div
                        data-carousel-card
                        key={id}
                        className="shrink-0"
                      >
                        <TestimonialCard
                          student={student}
                          duplicate={copy === 1}
                          isOpen={isOpen}
                          onToggle={() =>
                            setOpenStudent(
                              isOpen
                                ? null
                                : id
                            )
                          }
                          onHoverChange={
                            setHovered
                          }
                        />
                      </div>
                    );
                  }
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   MINIMAL REVIEW GRID CARD
========================================== */

function ReviewCard({
  student,
  featured = false,
}) {
  const [
    expanded,
    setExpanded,
  ] = useState(false);

  const reviewText =
    student.review;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] border shadow-[0_3px_0_#e8d3c1,0_12px_24px_#72421f18] transition-[border-color,box-shadow] duration-300 hover:border-[#dec4ae] hover:shadow-[0_12px_35px_rgba(15,23,42,.06)] ${
        featured
          ? "border-[#dec4ae] bg-[#fff7ef]"
          : "border-[#fff7ef] bg-white"
      }`}
    >
      <div
        className={`flex flex-1 ${
          featured
            ? "flex-col gap-4 p-5 lg:flex-row lg:items-center lg:gap-8 lg:p-6"
            : "flex-col p-5"
        }`}
      >
        <div
          className={`flex items-start gap-3 ${
            featured
              ? "lg:w-[31%] lg:shrink-0"
              : ""
          }`}
        >
          <Avatar
            student={student}
            size={
              featured ? 49 : 42
            }
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[16px] font-semibold text-[#0F172A]">
              {student.name}
            </h3>

            <p className="mt-1 truncate text-[12px] text-[#64748B]">
              {student.role}
            </p>

            <p className="mt-1 text-[12px] font-medium text-[#fa7405]">
              {student.company}
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#fa7405]">
            {student.hashtag}
          </p>

          <span className="text-xs text-[#a65b2b]">Sample scenario</span>
          <p
            className={`mt-3 text-[15px] leading-[1.8] text-[#475569] ${
              expanded
                ? ""
                : featured
                ? "line-clamp-2"
                : "line-clamp-3"
            }`}
          >
            {reviewText}
          </p>

          {student.review.length >
            120 && (
            <button
              type="button"
              onClick={() =>
                setExpanded(
                  (previous) =>
                    !previous
                )
              }
              aria-expanded={
                expanded
              }
              className="mt-2 text-[11px] font-semibold text-[#fa7405] hover:underline"
            >
              {expanded
                ? "Show less"
                : "Read more"}
            </button>
          )}
        </div>

        <div
          className={`flex shrink-0 items-center justify-between gap-3 ${
            featured
              ? "lg:w-[170px] lg:flex-col lg:items-end"
              : "mt-4"
          }`}
        >
          <button
            type="button"
            disabled
            title="Following is currently unavailable."
            className="rounded-full border border-[#fff7ef] px-3.5 py-1.5 text-[11px] font-semibold text-[#fa7405] transition-colors hover:bg-[#fff7ef]"
          >
            + Follow
          </button>

          <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
            <button
              type="button"
              disabled
              title="Reactions are currently unavailable."
              aria-label="Reactions unavailable"
              className="inline-flex items-center gap-1"
            >
              <Heart
                size={14}
                fill="none"
              />
              —
            </button>

            <span className="inline-flex items-center gap-1">
              <MessageCircle size={14} />
              —
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#fff7ef] px-5 py-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#64748B]">
          <BadgeCheck
            size={13}
            className="text-[#159667]"
          />
          Illustrative sample
        </span>

        <span className="rounded-full bg-[#fff7ef] px-2.5 py-1 text-[9px] font-semibold uppercase text-[#fa7405]">
          {student.category}
        </span>
      </div>
    </article>
  );
}

/* ==========================================
   REVIEWS GRID SECTION

   NEW:
   Section heading bottom-to-top.
   Cards retain row-by-row reveal.
========================================== */

function ReviewsGridSection() {
  const reducedMotion = useMotionPreference();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const [
    category,
    setCategory,
  ] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? students
        : students.filter(
            (student) =>
              student.categories.includes(category)
          ),
    [category]
  );

  const featured = filtered[0];
  const remaining = filtered.slice(1);

  const rows = [];

  for (
    let index = 0;
    index < remaining.length;
    index += 3
  ) {
    rows.push(
      remaining.slice(
        index,
        index + 3
      )
    );
  }

  /* HEADING ANIMATION */

  useHeadingReveal(sectionRef);

  /* ROW-BY-ROW ANIMATION */

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const reduced = reducedMotion;

    if (reduced) return;

    const ctx = gsap.context(() => {
      const rows =
        gsap.utils.toArray(
          "[data-review-row]"
        );

      rows.forEach((row) => {
        const cards =
          row.querySelectorAll(
            "[data-review-item]"
          );

        gsap.fromTo(
          cards,
          {
            y: 55,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
            clearProps:
              "transform,opacity",
            scrollTrigger: {
              trigger: row,
              start: "top 87%",
              once: true,
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [category, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="student-reviews"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div
          data-heading-group
          className="max-w-[700px]"
        >
          <div data-heading-reveal>
            <SectionLabel prominent>
              Browse by Category
            </SectionLabel>
          </div>

          <h2
            data-heading-reveal
            className="mt-4 text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.14] tracking-[-0.055em] text-[#0F172A]"
          >
            Explore the learner experience
          </h2>

          <p
            data-heading-reveal
            className="mt-5 max-w-[650px] text-[16px] leading-[1.8] text-[#52647C] sm:text-[18px]"
          >
            Explore learning experiences,
            career growth, and student
            success stories.
          </p>

          <p className="mt-3 text-[11px] text-[#94A3B8]">Following and reactions are currently unavailable.</p>
          <div
            data-heading-reveal
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map(
              (item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() =>
                    setCategory(
                      item.value
                    )
                  }
                  aria-pressed={
                    category ===
                    item.value
                  }
                  className={`rounded-full border px-5 py-3 text-[14px] font-semibold transition-colors ${
                    category ===
                    item.value
                      ? "border-[#fa7405] bg-[#fa7405] text-white"
                      : "border-[#fff7ef] bg-[#fff7ef] text-[#475569] hover:border-[#dec4ae]"
                  }`}
                >
                  {item.label}{item.value !== "All" && ` (${students.filter(student => student.categories.includes(item.value)).length})`}
                </button>
              )
            )}
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-9 space-y-4"
        >
          {!featured && <p role="status" className="py-12 text-center text-[#64748B]">No reviews in this category yet.</p>}
          {featured && (
            <div data-review-row>
              <div data-review-item>
                <ReviewCard
                  key={featured.name}
                  student={featured}
                  featured
                />
              </div>
            </div>
          )}

          {rows.map(
            (row, index) => (
              <div
                key={`${category}-row-${index}`}
                data-review-row
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {row.map(
                  (student) => (
                    <div
                      key={
                        student.name
                      }
                      data-review-item
                    >
                      <ReviewCard
                        student={
                          student
                        }
                      />
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   STUDENT SUCCESS HIGHLIGHTS
========================================== */

const highlights = [
 { value: "Practice", title: "Build Confidence", description: "Prepare for role-specific questions.", icon: BriefcaseBusiness },
 { value: "Reflect", title: "Review Your Work", description: "Identify skills to strengthen.", icon: Users },
 { value: "Improve", title: "Use Feedback", description: "Focus your next practice session.", icon: TrendingUp },
];

function StudentSuccessHighlights() {
  const reducedMotion = useMotionPreference();
  const sectionRef = useRef(null);

  useHeadingReveal(sectionRef);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    if (
      reducedMotion
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-highlight-card]",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 83%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-5 pb-20 md:px-8 md:pb-24"
    >
      <div className="mx-auto max-w-[1240px] rounded-[18px] bg-[#fff7ef] p-6 md:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.6fr]">
          <div data-heading-group>
            <div data-heading-reveal>
              <SectionLabel>
                Student Success Highlights
              </SectionLabel>
            </div>

            <h2
              data-heading-reveal
              className="mt-4 text-[clamp(1.7rem,2.7vw,2.6rem)] font-semibold leading-[1.2] tracking-[-0.045em] text-[#0F172A]"
            >
              Real progress.
              <br />
              Meaningful outcomes.
            </h2>

            <p
              data-heading-reveal
              className="mt-4 max-w-[360px] text-[13px] leading-[1.7] text-[#64748B]"
            >
              A quick look at the
              AntIntern learning community
              and the opportunities it
              creates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    key={item.title}
                    data-highlight-card
                    className="rounded-[14px] border border-[#fff7ef] bg-white p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff7ef] text-[#fa7405]">
                      <Icon
                        size={20}
                        strokeWidth={
                          1.8
                        }
                      />
                    </div>

                    <strong className="mt-5 block text-[30px] font-semibold tracking-[-0.055em] text-[#fa7405]">
                      {item.value}
                    </strong>

                    <h3 className="mt-1 text-[13px] font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.6] text-[#64748B]">
                      {
                        item.description
                      }
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   COMPANIES SECTION

   NEW:
   Heading reveal bottom-to-top.
========================================== */

function CompaniesSection() {
  const sectionRef = useRef(null);

  useHeadingReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="review-companies"
      className="overflow-hidden bg-white py-20 text-center md:py-24"
    >
      <div
        data-heading-group
        className="mx-auto max-w-[900px] px-6"
      >
        <div data-heading-reveal>
          <SectionLabel>
            Placed at
          </SectionLabel>
        </div>

        <h2
          data-heading-reveal
          className="mt-5 text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#0F172A]"
        >
          Our alumni work at
          <br />
          <span className="text-[#fa7405]">
            world-class companies
          </span>
        </h2>
      </div>

      <div className="mt-12">
        <LogoMarquee speed={70} officialLogos />
      </div>
    </section>
  );
}

/* ==========================================
   FINAL CTA — REDESIGNED BACKGROUND + HEIGHT

   CHANGES:
   1. One desktop viewport
   2. Very soft/dull gradient
   3. No strong blue/yellow glow
   4. Smaller heading
   5. Compact spacing
   6. Bottom-to-top entrance
========================================== */

function FinalCTA() {
  const sectionRef = useRef(null);

  useHeadingReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="reviews-final-cta"
      className="
        relative isolate flex w-full
        flex-col items-center justify-center
        overflow-hidden
        bg-[#fff7ef]
        px-5 py-16
        sm:px-8
        lg:h-[calc(100svh-76px)]
        lg:min-h-[560px]
        lg:max-h-[950px]
        lg:py-8
      "
    >
      {/* Very dull white/blue gradient */}
      <div
        className="
          pointer-events-none absolute
          inset-0 -z-10
          bg-[linear-gradient(125deg,#FFFFFF_0%,#fff7ef_52%,#fff7ef_100%)]
        "
      />

      {/* Very faint radial color — barely visible */}
      <div
        className="
          pointer-events-none absolute
          -right-[22%] -top-[38%] -z-10
          h-[80%] w-[70%]
          rounded-full
          bg-[#fff7ef]/35
          blur-[100px]
        "
      />

      <div
        data-heading-group
        className="
          relative z-10 mx-auto
          flex w-full max-w-[820px]
          flex-col items-center
          text-center
        "
      >
        {/* Label */}
        <div data-heading-reveal>
          <SectionLabel>
            Your Journey Starts Here
          </SectionLabel>
        </div>

        {/* Main Heading */}
        <h2
          data-heading-reveal
          className="
            mt-6 text-balance
            text-[clamp(2.5rem,5vw,4.8rem)]
            font-semibold
            leading-[1.08]
            tracking-[-0.06em]
            text-[#0F172A]
          "
        >
          Ready to write
          <br />
          <span className="text-[#fa7405]">
            your story?
          </span>
        </h2>

        {/* Description */}
        <p
          data-heading-reveal
          className="
            mx-auto mt-5
            max-w-[520px]
            text-[14px]
            leading-[1.8]
            text-[#64748B]
            sm:text-[15px]
          "
        >
          Choose an interview track and practice for your next opportunity with AntIntern.
        </p>

        {/* Buttons */}
        <div
          data-heading-reveal
          className="
            mt-7 flex flex-wrap
            items-center justify-center
            gap-3
          "
        >
          <a
            href={ENROLL}
            className="
              inline-flex min-h-12
              items-center justify-center
              gap-3 bg-[#fa7405]
              px-7 text-[13px]
              font-semibold text-white
              transition-colors duration-300
              hover:bg-[#1E40AF]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#fa7405]
            "
          >
            Enroll Now
            <ArrowUpRight size={17} />
          </a>

          <a
            href={COURSES}
            className="
              inline-flex min-h-12
              items-center justify-center
              gap-3 rounded-full
              border border-[#dec4ae]
              bg-white px-7
              text-[13px] font-semibold
              text-[#0F172A]
              transition-colors duration-300
              hover:bg-[#fff7ef]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#fa7405]
            "
          >
            Browse Programs
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Subtle separator */}
        <div
          data-heading-reveal
          className="
            mt-10 h-px w-full
            max-w-[480px]
            bg-[#fff7ef]
          "
        />

        {/* Compact trust indicator */}
        <div
          data-heading-reveal
          className="
            mt-5 flex flex-wrap
            items-center justify-center
            gap-3 text-[12px]
            text-[#64748B]
          "
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map(
              (item) => (
                <Star
                  key={item}
                  size={13}
                  fill="#EAB64E"
                  stroke="#EAB64E"
                />
              )
            )}
          </div>

          <span className="font-semibold text-[#334155]">
            Sample stories
          </span>

          <span className="h-3 w-px bg-[#dec4ae]" />

          <span>
            Illustrative examples — learner reviews coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   COMPLETE REVIEWS PAGE
========================================== */

export default function ReviewsPage() {
  return (
    <>
    <SiteHeader />
    <main className="reviews-page w-full overflow-x-clip bg-white text-[#0F172A] antialiased">
      {/* 01. Existing animated hero */}
      <ReviewsHero />

      {/* 02. Existing automatic testimonials */}
      <TestimonialsReviewsSection />

      {/* 03. Minimal student review grid */}
      <ReviewsGridSection />

      {/* 04. Student success cards */}
      <StudentSuccessHighlights />

      {/* 05. Moving company logos */}
      <CompaniesSection />

      {/* 06. Compact one-screen final CTA */}
      <FinalCTA />
    </main>
    <SiteFooter />
    </>
  );
}

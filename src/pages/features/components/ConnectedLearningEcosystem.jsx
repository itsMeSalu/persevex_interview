"use client";

import { useMotionPreference } from "./useMotionPreference";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import interviewImage from "../../../assets/interview.webp";
import practiceImage from "../../../assets/practice.webp";
import assessmentImage from "../../../assets/assessment.webp";
import remotePracticeImage from "../../../assets/remote-practice.webp";
import teamImage from "../../../assets/team-debrief.webp";

import {
  BookOpen,
  BriefcaseBusiness,
  Headphones,
  Video,
  Users,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   ANTINTERN — CONNECTED LEARNING ECOSYSTEM
   FULL-WIDTH AUTOMATIC EXPANDING CARD CAROUSEL

   Features:
   - White background
   - Balanced full-width card arrangement
   - All images and text visible
   - Automatic animation
   - No cursor interaction
   - Smooth synchronized scaling
   - Seamless continuous circular positioning
   - GSAP only for animation
   - Tailwind only for styling

   NEW:
   - Section header bottom-to-top entrance
   - Heading and paragraph reveal on scroll
   - Everything else remains unchanged
========================================================= */

const FEATURES = [
  {
    id: "01",
    Icon: BookOpen,
    title: "Interview Tracks",
    subtitle: "Role-Based Preparation",
    description:
      "Follow focused preparation paths for the roles you want.",
    image: interviewImage,
    imageAlt: "Candidate preparing for an interview",
    category: "EXPLORE",
  },
  {
    id: "02",
    Icon: BriefcaseBusiness,
    title: "Practice Rounds",
    subtitle: "Realistic Interview Practice",
    description:
      "Work through realistic interview questions and build confidence.",
    image: practiceImage,
    imageAlt: "Interview practice workspace",
    category: "PRACTICE",
  },
  {
    id: "03",
    Icon: Headphones,
    title: "Guided Feedback",
    subtitle: "Learn From Every Answer",
    description:
      "Review your responses and find the next skill to strengthen.",
    image: assessmentImage,
    imageAlt: "Assessment and feedback workspace",
    category: "REVIEW",
  },
  {
    id: "04",
    Icon: Video,
    title: "Interview Skills",
    subtitle: "Practice With Purpose",
    description:
      "Improve the way you explain your experience and solve problems.",
    image: remotePracticeImage,
    imageAlt: "Candidate practicing remotely",
    category: "IMPROVE",
  },
  {
    id: "05",
    Icon: Users,
    title: "Career Direction",
    subtitle: "Prepare for What Comes Next",
    description:
      "Choose a path and keep moving toward your next opportunity.",
    image: teamImage,
    imageAlt: "Team reviewing interview preparation",
    category: "ADVANCE",
  },
];

const COUNT = FEATURES.length;

/* =========================================================
   SPEED SETTINGS — UNCHANGED
========================================================= */

const HOLD_TIME = 1.5;
const MOVE_TIME = 0.65;

/* =========================================================
   PROFESSIONAL CARD — UNCHANGED
========================================================= */

function FeatureCard({ feature, index, register }) {
  const Icon = feature.Icon;

  return (
    <article
      ref={(node) => register(node, index)}
      data-feature-card
      className="
        absolute left-0 top-0
        flex h-[382px] w-[250px]
        flex-col overflow-hidden
        rounded-[14px]
        border border-[#EFE6E0]
        bg-[#FFFCF9]
        shadow-[0_8px_28px_rgba(36,58,93,0.045)]
        will-change-transform
      "
      style={{
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
      }}
    >
      {/* IMAGE */}

      <div className="relative h-[142px] w-full shrink-0 overflow-hidden bg-[#F7EFE9]">
        <img
          src={feature.image}
          alt={feature.imageAlt}
          loading="eager"
          draggable={false}
          className="h-full w-full object-cover"
        />

        {/* SMALL CATEGORY LABEL */}

        <span
          className="
            absolute bottom-3 left-3
            rounded-[5px] bg-white/95
            px-2.5 py-1
            text-[9px] font-semibold
            tracking-[0.1em] text-[#F59120]
          "
        >
          {feature.category}
        </span>
      </div>

      {/* CONTENT */}

      <div className="flex min-h-0 flex-1 flex-col px-[17px] pb-[18px] pt-[16px]">
        {/* NUMBER + ICON */}

        <div className="flex items-center justify-between">
          <span
            className="
              text-[28px] font-semibold
              leading-none tracking-[-0.045em]
              text-[#D5C4BA]
            "
          >
            {feature.id}
          </span>

          <div
            className="
              flex h-[31px] w-[31px]
              items-center justify-center
              rounded-[7px]
              border border-[#E9DDD5]
              bg-white text-[#F59120]
            "
          >
            <Icon size={16} strokeWidth={1.65} />
          </div>
        </div>

        {/* HEADING */}

        <h3
          className="
            mt-[15px]
            text-[19px] font-semibold
            leading-[1.2]
            tracking-[-0.04em]
            text-[#19283E]
          "
        >
          {feature.title}
        </h3>

        {/* SUBTITLE */}

        <p className="mt-[5px] text-[11px] font-medium text-[#F59120]">
          {feature.subtitle}
        </p>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[12px] line-clamp-3
            text-[11px] leading-[1.65]
            text-[#786D68]
          "
        >
          {feature.description}
        </p>

        {/* BOTTOM DECORATIVE RULE */}

        <div className="mt-auto flex items-center gap-2 pt-3">
          <span className="h-[2px] w-6 rounded-full bg-[#F59120]" />
          <span className="h-[2px] w-4 rounded-full bg-[#ECD0C1]" />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   REDUCED MOTION FALLBACK — UNCHANGED
========================================================= */

function StaticFeatureCards() {
  return (
    <div className="mx-auto mt-10 grid max-w-[1300px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((feature) => {
        const Icon = feature.Icon;

        return (
          <article
            key={feature.id}
            className="overflow-hidden rounded-xl border border-[#EFE6E0] bg-[#FFFCF9]"
          >
            <img
              src={feature.image}
              alt={feature.imageAlt}
              className="h-[165px] w-full object-cover"
            />

            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-[#D2C0B6]">
                  {feature.id}
                </span>

                <Icon
                  size={19}
                  className="text-[#F59120]"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#19283E]">
                {feature.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-[#F59120]">
                {feature.subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-[#746965]">
                {feature.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ConnectedLearningEcosystem() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);

  const positionRef = useRef({ value: 0 });
  const timelineRef = useRef(null);

  /* NEW: TEXT ANIMATION REFS */

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const reducedMotion = useMotionPreference();

  const registerCard = (node, index) => {
    cardsRef.current[index] = node;
  };

  /* =======================================================
     NEW: SMOOTH HEADER ENTRANCE ANIMATION

     CORE FEATURES
           ↓
     Five Pillars of Your Interview Journey
           ↓
     One connected ecosystem...

     All three elements move from bottom to top.

     Animation starts when the section enters
     the viewport and runs only once.
  ======================================================= */

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /*
         Initial positions:
         All text begins slightly below its final position.
      */

      gsap.set(labelRef.current, {
        autoAlpha: 0,
        y: 28,
      });

      gsap.set(headingRef.current, {
        autoAlpha: 0,
        y: 48,
      });

      gsap.set(paragraphRef.current, {
        autoAlpha: 0,
        y: 38,
      });

      /*
         Smooth staggered reveal.

         The animation plays when the section
         reaches the viewport.
      */

      const headerTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },

        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      /* CORE FEATURES */

      headerTimeline.to(labelRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      /* MAIN HEADING */

      headerTimeline.to(
        headingRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.15,
          ease: "power4.out",
        },
        "-=0.45"
      );

      /* PARAGRAPH */

      headerTimeline.to(
        paragraphRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.70"
      );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  /* =======================================================
     AUTOMATIC GSAP CAROUSEL — UNCHANGED
  ======================================================= */

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const container = carouselRef.current;
    if (!container) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length !== COUNT) return;

    const metrics = {
      width: 1200,
      cardWidth: 250,
      cardHeight: 382,
      spacing: 240,
      activeCenter: 600,
      scaleInactive: 0.8,
    };

    const smoothstep = (v) => {
      const t = gsap.utils.clamp(0, 1, v);
      return t * t * (3 - 2 * t);
    };

    /*
       Circular positioning.

       Each card's position is calculated from the
       moving global progress value.

       All cards move and scale together.
    */

    const renderCards = () => {
      const progress = positionRef.current.value;

      cards.forEach((card, index) => {
        let relative =
          ((index - progress + COUNT * 100 + COUNT / 2) %
            COUNT) -
          COUNT / 2;

        const distance = Math.abs(relative);

        const proximity = 1 - smoothstep(distance);

        const scale =
          metrics.scaleInactive +
          (1 - metrics.scaleInactive) * proximity;

        /*
           Center composition uses full available width,
           removing excess blank space on the right.
        */

        const centerX =
          metrics.activeCenter +
          relative * metrics.spacing;

        const x = centerX - metrics.cardWidth / 2;

        /*
           Active card rises while surrounding cards
           retain the same aligned baseline.
        */

        const y = 12 + (1 - proximity) * 26;

        gsap.set(card, {
          width: metrics.cardWidth,
          height: metrics.cardHeight,
          x,
          y,
          scale,
          zIndex: Math.round(10 + 100 * proximity),
          force3D: true,
        });
      });
    };

    /*
       The five-card layout spans almost the entire
       carousel width.

       Desktop layout:
       smaller | smaller | BIG | smaller | smaller

       The layout remains balanced during motion.
    */

    const measure = () => {
      const width = container.clientWidth;
      metrics.width = width;

      if (width < 640) {
        metrics.cardWidth = 220;
        metrics.cardHeight = 382;
        metrics.spacing = width * 0.46;
        metrics.activeCenter = width * 0.5;
        metrics.scaleInactive = 0.73;
      } else if (width < 1024) {
        metrics.cardWidth = 240;
        metrics.cardHeight = 382;
        metrics.spacing = width * 0.22;
        metrics.activeCenter = width * 0.5;
        metrics.scaleInactive = 0.77;
      } else {
        metrics.cardWidth = Math.min(260, width * 0.225);
        metrics.cardHeight = 382;
        metrics.spacing = width * 0.205;
        metrics.activeCenter = width * 0.5;
        metrics.scaleInactive = 0.80;
      }

      renderCards();
    };

    const ctx = gsap.context(() => {
      measure();

      /*
         Continuous master timeline.

         Starts immediately.
         No hover pause.
         No ScrollTrigger dependency.
      */

      const timeline = gsap.timeline({
        repeat: -1,
        onUpdate: renderCards,
      });

      for (let index = 0; index < COUNT; index++) {
        timeline.to(
          {},
          {
            duration: HOLD_TIME,
          }
        );

        timeline.to(positionRef.current, {
          value: index + 1,
          duration: MOVE_TIME,
          ease: "sine.inOut",
        });
      }

      /*
         At position 5, the card arrangement is
         mathematically identical to position 0.
      */

      timeline.set(positionRef.current, {
        value: 0,
      });

      timelineRef.current = timeline;
    }, sectionRef);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    /*
       Pause only when the browser tab becomes hidden.
       Cursor position does not affect the animation.
    */

    const onVisibilityChange = () => {
      if (document.hidden) {
        timelineRef.current?.pause();
      } else {
        timelineRef.current?.resume();
      }
    };

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    return () => {
      resizeObserver.disconnect();

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );

      timelineRef.current?.kill();
      timelineRef.current = null;

      ctx.revert();
    };
  }, [reducedMotion]);

  /* =======================================================
     JSX — ORIGINAL LAYOUT PRESERVED
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      id="connected-learning-ecosystem"
      className="
        relative w-full overflow-hidden
        bg-white
        py-14 sm:py-16 lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        {/* SECTION HEADING */}

        <header className="mx-auto max-w-[850px] px-5 text-center">
          {/* CORE FEATURES */}

          <div
            ref={labelRef}
            className="
              text-[11px] font-semibold
              uppercase tracking-[0.17em]
              text-[#F59120]
            "
          >
            CORE FEATURES
          </div>

          {/* MAIN HEADING */}

          <h2
            ref={headingRef}
            className="
              mt-4 text-[clamp(2rem,3.4vw,3.15rem)]
              font-medium leading-[1.14]
              tracking-[-0.045em]
              text-[#19283E]
            "
          >
            Five Pillars of Your{" "}
            <span className="text-[#F59120]">
              Interview Journey
            </span>
          </h2>

          {/* PARAGRAPH */}

          <p
            ref={paragraphRef}
            className="
              mx-auto mt-4 max-w-[650px]
              text-[13px] leading-[1.75]
              text-[#786D68]
              sm:text-[14px]
            "
          >
            One connected place to practice, improve, and move forward.
          </p>
        </header>

        {/* FULL WIDTH CAROUSEL — UNCHANGED */}

        {reducedMotion ? (
          <div className="px-5">
            <StaticFeatureCards />
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="
              relative mt-12 h-[430px]
              w-full overflow-hidden
              sm:mt-14 lg:mt-16
            "
            aria-label="AntIntern interview preparation features"
          >
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                register={registerCard}
              />
            ))}
          </div>
        )}

        {/* FOOTNOTE */}

        <p
          className="
            mt-5 px-5 text-center
            text-[11px] text-[#8C7F78]
          "
        >
          Five connected pillars, one complete preparation experience.
        </p>
      </div>
    </section>
  );
}

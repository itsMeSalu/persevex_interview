"use client";


import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useId,
} from "react";
import { supportFaqs } from "./support-data";
import SupportTicket from "./components/SupportTicket";
import SupportChannels from "./components/SupportChannels";
import SiteHeader from "../../components/SiteHeader.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import "./support.css";
import interviewImage from "../../assets/interview.webp";
import practiceImage from "../../assets/practice.webp";
import reviewImage from "../../assets/review.webp";
import assessmentImage from "../../assets/assessment.webp";
import remoteImage from "../../assets/remote-practice.webp";
import teamImage from "../../assets/team-debrief.webp";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactOptions from "./components/ContactOptions";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Mail,
  Phone,
  MessageCircle,
  BookOpen,
  LockKeyhole,
  Settings2,
  Compass,
  LifeBuoy,
  CheckCircle2,
  Search,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


/* =================================================
   DESIGN SYSTEM
================================================= */

const EASE = [0.16, 1, 0.3, 1];

const sectionClass =
  "relative flex min-h-[calc(100svh-80px)] scroll-mt-20 items-center px-5 py-14 sm:px-8 lg:px-12 lg:py-10";

function scrollTo(id, reduced = false) {
  document.getElementById(id)?.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
}

function fadeUp(delay = 0, reduced = false) {
  return {
    initial: reduced ? false : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduced ? 0 : 0.8,
      delay: reduced ? 0 : delay,
      ease: EASE,
    },
  };
}

/* =================================================
   REUSABLE BUTTON
================================================= */

function ActionButton({
  children,
  onClick,
  href,
  secondary = false,
  Icon = ArrowUpRight,
  external = false,
}) {
  const styles = `
    group inline-flex min-h-11 items-center justify-center
    gap-2.5 rounded-full px-6 py-3 text-[12px]
    font-medium transition-all duration-300
    hover:-translate-y-0.5
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-[#fa7405]
    focus-visible:ring-offset-2
    ${secondary
      ? "border border-[#f4cfac] bg-white text-[#595959] hover:border-[#f4cfac] hover:bg-[#fff1e3]"
      : "bg-[#fa7405] text-white shadow-[0_8px_22px_rgba(250,116,5,0.16)] hover:bg-[#e85f00]"
    }
  `;

  const content = (
    <>
      {children}
      <Icon size={15} strokeWidth={1.8} />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={styles}
    >
      {content}
    </button>
  );
}

/* =================================================
   SECTION TITLE
================================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
  reduced,
}) {
  return (
    <motion.div
      {...fadeUp(0, reduced)}
      className="mx-auto max-w-[660px] text-center"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#fa7405]">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#252525]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-[540px] text-[13px] leading-[1.8] text-[#707070] sm:text-[14px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* =================================================
   HERO IMAGE DATA

   No card titles or descriptions are displayed.
   Replace URLs with local assets when available.
================================================= */

const HERO_IMAGES = [
  {
    id: "workspace",
    alt: "Interview preparation workspace",
    src: interviewImage,
    position: "center",
  },
  {
    id: "learning",
    alt: "Guided interview practice",
    src: practiceImage,
    position: "center",
  },
  {
    id: "collaboration",
    alt: "Team reviewing interview preparation",
    src: teamImage,
    position: "center",
  },
  {
    id: "technology",
    alt: "Technical assessment practice",
    src: assessmentImage,
    position: "center",
  },
  {
    id: "teamwork",
    alt: "Reviewing interview feedback",
    src: reviewImage,
    position: "center",
  },
  {
    id: "development",
    alt: "Remote interview practice",
    src: remoteImage,
    position: "center",
  },
];

/* =================================================
   LARGE IMAGE-ONLY HERO CARD
================================================= */


function HeroImageCard({ item }) {
  return (
    <div
      className="
        group
        relative
        h-[clamp(235px,36svh,350px)]
        w-full
        shrink-0
        overflow-hidden
        rounded-[20px]
        border
        border-[#fff1e3]
        bg-[#fff1e3]
        shadow-[0_5px_18px_rgba(30,46,80,0.045)]
        transition-[border-color,box-shadow]
        duration-500
        hover:border-[#f4cfac]
        hover:shadow-[0_12px_30px_rgba(30,46,80,0.09)]
        sm:rounded-[22px]
      "
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="eager"
        decoding="async"
        draggable={false}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.035]
        "
        style={{
          objectPosition: item.position,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#252525]/[0.035]
        "
      />
    </div>
  );
}


/* =================================================
   SEAMLESS IMAGE COLUMN

   LEFT  : BOTTOM TO TOP
   RIGHT : TOP TO BOTTOM
================================================= */

function HeroImageColumn({
  items,
  direction,
  reduced,
}) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const setRef = useRef(null);

  useLayoutEffect(() => {
    if (reduced || !trackRef.current) return;

    let loop;

    const ctx = gsap.context(() => {
      const createLoop = () => {
        const distance =
          setRef.current?.offsetHeight || 0;

        if (!distance) return;

        loop?.kill();

        const upward = direction === "up";

        gsap.set(trackRef.current, {
          y: upward ? 0 : -distance,
        });

        loop = gsap.to(trackRef.current, {
          y: upward ? -distance : 0,
          duration: 28,
          repeat: -1,
          ease: "none",
          overwrite: "auto",
        });
      };

      createLoop();

      const observer = new ResizeObserver(createLoop);

      observer.observe(setRef.current);

      return () => {
        observer.disconnect();
        loop?.kill();
      };
    }, rootRef);

    return () => ctx.revert();
  }, [direction, reduced]);

  return (
    <div
      ref={rootRef}
      className="relative h-full min-w-0 overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex flex-col will-change-transform"
      >
        {[0, 1].map(copy => (
          <div
            key={copy}
            ref={copy === 0 ? setRef : undefined}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="
              flex shrink-0 flex-col
              gap-4 px-1 py-2
              sm:gap-5 sm:py-2.5
            "
          >
            {items.map(item => (
              <HeroImageCard
                key={`${copy}-${item.id}`}
                item={item}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =================================================
   01. HERO SECTION
================================================= */


/* =================================================
   01. HERO SECTION - UPDATED REFERENCE ALIGNMENT
================================================= */


/* =================================================
   01. HERO SECTION
   LEFT CONTENT - 65%
   RIGHT SCROLLING IMAGES - 35%

   FIX:
   FEATURE TAGS VISIBLE ON PAGE LOAD
================================================= */


/* =================================================
   01. HERO SECTION
   FEATURES PAGE STYLE ALIGNMENT
   LEFT CONTENT 65%
   RIGHT SCROLLING IMAGES 35%
================================================= */

/* =================================================
   01. HERO SECTION
   WIDER LEFT CONTENT
   LEFT 65% / RIGHT 35%
================================================= */

function SupportHero({ reduced }) {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const transitionRef = useRef(null);
  const pillRef = useRef(null);
  const wordsRef = useRef(null);

  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (min-height: 650px)",
      () => {
        const ctx = gsap.context(() => {
          /* INITIAL ANIMATION STATES */

          gsap.set(contentRef.current, {
            autoAlpha: 0,
            y: 25,
          });

          gsap.set(cardsRef.current, {
            autoAlpha: 0,
            y: 22,
          });

          gsap.set(transitionRef.current, {
            autoAlpha: 0,
          });

          gsap.set(pillRef.current, {
            autoAlpha: 0,
            y: 22,
          });

          gsap.set(wordsRef.current, {
            autoAlpha: 0,
            y: 50,
          });

          /* OPENING ANIMATION */

          const opening = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          opening
            .to(
              contentRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
              },
              0.12
            )
            .to(
              cardsRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.95,
              },
              0.25
            );

          /* HERO EXIT ANIMATION */

          const exit = gsap.timeline({
            defaults: {
              ease: "none",
            },
          });

          exit
            .to(
              contentRef.current,
              {
                opacity: 0,
                y: -25,
                duration: 0.35,
              },
              0
            )
            .to(
              cardsRef.current,
              {
                opacity: 0,
                duration: 0.35,
              },
              0
            )
            .to(
              transitionRef.current,
              {
                autoAlpha: 1,
                duration: 0.5,
              },
              0.1
            )
            .to(
              pillRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
              },
              0.25
            )
            .to(
              wordsRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
              },
              0.35
            );

          /* PINNED SCROLL TRANSITION */

          ScrollTrigger.create({
            trigger: rootRef.current,
            start: "top top",
            end: "+=45%",
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            animation: exit,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        }, rootRef);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      id="support-hero"
      ref={rootRef}
      className="
        relative
        min-h-[100svh]
        w-full
        scroll-mt-0
        overflow-hidden
        bg-white
        lg:h-[100svh]
        lg:min-h-[650px]
      "
    >
      {/* MAIN HERO LAYOUT */}

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[100svh]
          w-full
          max-w-[1600px]
          grid-cols-1
          lg:h-full
          lg:min-h-0
          lg:grid-cols-[65%_35%]
        "
      >
        {/* =====================================
            LEFT CONTENT - WIDER ALIGNMENT
        ===================================== */}

{/* =====================================
    LEFT HERO CONTENT
    IMPROVED POSITION AND SPACING
===================================== */}

<div
  ref={contentRef}
  className="
    relative z-20
    flex w-full min-w-0
    flex-col items-start justify-start
    px-6 py-12
    sm:px-10
    lg:px-[clamp(2rem,5vw,5rem)]
    lg:pt-24 lg:pb-10
  "
>
  {/* Move entire content upward without
      interfering with GSAP transforms */}

  <div
    className="
      mr-auto flex w-full max-w-[38rem]
      flex-col items-start
      text-left
    "
  >
    {/* SUPPORT LABEL */}

    <div
      className="
        mb-5
        inline-flex items-center gap-2
        rounded-full
        border border-[#f4cfac]
        bg-white/80
        px-5 py-2.5
        text-[10px] font-semibold sm:text-[11px]
        uppercase tracking-[0.18em]
        text-[#fa7405]
      "
    >
      AntIntern Support
    </div>

    {/* MAIN HEADING */}

    <h1
      className="
        support-hero-heading
        w-full
        text-left
        text-[clamp(2.5rem,4.5vw,4.5rem)]
        font-semibold
        leading-[1.12]
        tracking-[-0.045em]
        text-[#252525]
      "
    >
      <span className="block">Support for</span>
      <span>Your next </span>
      <span className="text-[#fa7405]">interview.</span>
    </h1>

    {/* DESCRIPTION */}

    <p
      className="
        mt-5
        w-full max-w-[46ch]
        text-left
        text-[14px]
        font-normal leading-[1.85]
        text-[#707070]
        sm:text-[16px]
      "
    >
      Get help with interview practice, account access, credits,
      and feedback so you can keep preparing with confidence.
    </p>

    {/* ACTION BUTTONS */}

    <div
      className="
        mt-7
        flex w-full flex-wrap
        items-center justify-start
        gap-3 sm:gap-4
      "
    >
      <ActionButton
        Icon={ArrowRight}
        onClick={() =>
          scrollTo("support-channels", reduced)
        }
      >
        Explore Support
      </ActionButton>

      <ActionButton
        secondary
        onClick={() =>
          scrollTo("support-contact", reduced)
        }
      >
        Contact Us
      </ActionButton>
    </div>

    {/* FEATURE TAGS */}

    <div
      className="
        mt-6
        flex w-full flex-wrap
        items-center justify-start
        gap-2
      "
    >
      {[
        "Getting Started",
        "Account Support",
        "Technical Help",
      ].map((label, index) => (
        <span
          key={label}
          className={`
            rounded-full border
            px-3.5 py-2
            text-[10px] font-medium
            transition-colors duration-300
            ${
              index === 1
                ? "border-[#f4cfac] bg-[#fff1e3] text-[#fa7405]"
                : "border-[#fff1e3] bg-white text-[#808080]"
            }
          `}
        >
          {label}
        </span>
      ))}
    </div>
  </div>
</div>

      

        {/* =====================================
            RIGHT SCROLLING IMAGES
            UNCHANGED
        ===================================== */}

        <div
          ref={cardsRef}
          className="
            relative
            grid
            h-[520px]
            min-w-0
            grid-cols-2
            gap-3
            overflow-hidden
            border-t
            border-[#fff1e3]
            bg-white
            px-3
            sm:h-[620px]
            sm:gap-4
            sm:px-4
            lg:h-full
            lg:gap-3
            lg:border-l
            lg:border-t-0
            lg:px-3
            xl:gap-4
            xl:px-4
          "
        >
          {/* TOP SOFT MASK */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-10
              h-8
              bg-gradient-to-b
              from-white
              to-transparent
            "
          />

          {/* BOTTOM SOFT MASK */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-10
              h-8
              bg-gradient-to-t
              from-white
              to-transparent
            "
          />

          {/* LEFT IMAGE COLUMN - UP */}

          <HeroImageColumn
            items={[
              HERO_IMAGES[0],
              HERO_IMAGES[2],
              HERO_IMAGES[4],
            ]}
            direction="up"
            reduced={reduced}
          />

          {/* RIGHT IMAGE COLUMN - DOWN */}

          <HeroImageColumn
            items={[
              HERO_IMAGES[1],
              HERO_IMAGES[3],
              HERO_IMAGES[5],
            ]}
            direction="down"
            reduced={reduced}
          />
        </div>
      </div>

      {/* =====================================
          ORIGINAL HERO EXIT TRANSITION
          UNCHANGED
      ===================================== */}

      <div
        ref={transitionRef}
        aria-hidden="true"
        className="
          pointer-events-none
          invisible
          absolute
          inset-0
          z-50
          hidden
          flex-col
          items-center
          justify-center
          bg-[#fff1e3]
          opacity-0
          lg:flex
        "
      >
        {/* ANTINTERN PILL */}

        <div
          ref={pillRef}
          className="
            rounded-full
            border
            border-[#f4cfac]
            bg-white
            px-10
            py-4
            text-[14px]
            font-medium
            text-[#252525]
            shadow-[0_8px_26px_rgba(37,53,81,0.04)]
          "
        >
          AntIntern
        </div>

        {/* TRANSITION HEADING */}

        <div
          ref={wordsRef}
          className="
            mt-10
            flex
            flex-col
            items-center
            text-center
          "
        >
          <span
            className="
              text-[clamp(2.8rem,7vw,7rem)]
              font-medium
              leading-none
              tracking-[-0.07em]
              text-[#252525]
            "
          >
            SUPPORT
          </span>

          <span
            className="
              mt-3
              text-[clamp(2.4rem,6vw,6.5rem)]
              font-medium
              leading-none
              tracking-[-0.07em]
              text-[#fa7405]
            "
          >
            THAT MOVES YOU
          </span>
        </div>
      </div>
    </section>
  );
}






/* =================================================
   02. SUPPORT CATEGORIES
================================================= */

const categories = [
  {
    number: "01",
    icon: LockKeyhole,
    eyebrow: "ACCOUNT GUIDANCE",
    title: "Account & Access",
    description:
      "Get help signing in and accessing your interview preparation account.",
    target: "support-faq",
  },
  {
    number: "02",
    icon: BookOpen,
    eyebrow: "PLATFORM RESOURCES",
    title: "Guides & Resources",
    description:
      "Understand interview tracks, practice sessions, reports, and preparation resources.",
    target: "support-faq",
  },
  {
    number: "03",
    icon: Settings2,
    eyebrow: "TECHNICAL HELP",
    title: "Technical Assistance",
    description:
      "Report session errors, browser issues, or problems viewing your interview feedback.",
    target: "support-faq",
  },
];


function SupportCategories({ reduced, onSelectCategory }) {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const rowsRef = useRef(null);

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headingParts = introRef.current.querySelectorAll(
        "[data-support-heading]"
      );

      gsap.fromTo(
        headingParts,
        {
          y: 65,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const rows = gsap.utils.toArray(
        rowsRef.current.querySelectorAll("[data-support-row]")
      );

      rows.forEach((row) => {
        const detail = row.querySelector("[data-support-detail]");
        const visual = row.querySelector("[data-support-visual]");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            end: "top 43%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        timeline.fromTo(
          detail,
          {
            y: 52,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",
            duration: 1,
          },
          0
        );

        timeline.fromTo(
          visual,
          {
            y: 85,
            scale: 0.94,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            duration: 1,
          },
          0
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="support-cards"
      ref={sectionRef}
      className="relative scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          ref={introRef}
          className="mx-auto mb-12 max-w-[720px] text-center lg:mb-16"
        >
          <div data-support-heading>
            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#fa7405]">
              EXPLORE ANTINTERN SUPPORT
            </span>
          </div>

          <h2
            data-support-heading
            className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.18] tracking-[-0.045em] text-[#252525]"
          >
            Find the Right Support
            <br />
            <span className="text-[#fa7405]">
              For Every Step.
            </span>
          </h2>

          <p
            data-support-heading
            className="mx-auto mt-5 max-w-[540px] text-[13px] leading-[1.85] text-[#707070] sm:text-[14px]"
          >
            Everything you need to navigate your AntIntern
            experience with confidence.
          </p>
        </div>

        <div ref={rowsRef} className="space-y-5 sm:space-y-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                data-support-row
                className="grid items-stretch gap-4 rounded-[25px] border border-[#fff1e3] bg-white p-4 shadow-[0_6px_20px_rgba(37,53,81,0.025)] sm:p-5 md:grid-cols-[1fr_1.05fr] md:gap-7"
              >
                <div
                  data-support-detail
                  className="flex min-h-[185px] flex-col justify-center p-3 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#252525] text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fa7405]">
                      {item.number} / {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[clamp(1.2rem,2vw,1.55rem)] font-semibold tracking-[-0.035em] text-[#252525]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[390px] text-[13px] leading-[1.75] text-[#707070]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => scrollTo("support-channels", reduced)}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-[12px] font-medium text-[#fa7405] hover:text-[#e85f00]"
                  >
                    Explore Support
                    <ArrowUpRight size={15} />
                  </button>
                </div>


                {/* =====================================
    RIGHT SIDE PROFESSIONAL IMAGE VISUAL
===================================== */}

                <div
                  data-support-visual
                  className="
    group
    relative
    min-h-[240px]
    overflow-hidden
    rounded-[22px]
    border
    border-[#fff1e3]
    bg-[#fff1e3]
    sm:min-h-[280px]
  "
                >
                  {/* BACKGROUND IMAGE */}

                  <img
                    src={
                      item.number === "01"
                        ? reviewImage
                        : item.number === "02"
                          ? practiceImage
                          : interviewImage
                    }
                    alt={item.title}
                    loading="lazy"
                    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      ease-out
      group-hover:scale-[1.04]
    "
                  />

                  {/* SOFT GRADIENT FOR TEXT READABILITY */}

                  <div
                    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#252525]/75
      via-[#252525]/15
      to-transparent
    "
                  />

                  {/* SMALL TOP RIGHT LABEL */}

                  <div
                    className="
      absolute
      right-5
      top-5
      rounded-full
      border
      border-white/40
      bg-white/90
      px-3
      py-1.5
      text-[10px]
      font-medium
      text-[#fa7405]
      backdrop-blur-md
    "
                  >
                    ANTINTERN SUPPORT
                  </div>

                  {/* BOTTOM TEXT */}

                  <div
                    className="
      absolute
      bottom-0
      left-0
      right-0
      p-6
      sm:p-8
    "
                  >
                    <p
                      className="
        text-[10px]
        font-medium
        uppercase
        tracking-[0.14em]
        text-white/75
      "
                    >
                      {item.eyebrow}
                    </p>

                    <h3
                      className="
        mt-2
        text-[clamp(1.25rem,2.3vw,1.9rem)]
        font-medium
        leading-tight
        tracking-[-0.035em]
        text-white
      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
        mt-4
        h-[2px]
        w-9
        rounded-full
        bg-white/80
        transition-all
        duration-500
        group-hover:w-16
      "
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* =================================================
   03. RESOURCES DATA
================================================= */

function cubicPoint(a, b, c, d, t) {
  const u = 1 - t;

  return {
    x:
      u ** 3 * a.x +
      3 * u ** 2 * t * b.x +
      3 * u * t ** 2 * c.x +
      t ** 3 * d.x,
    y:
      u ** 3 * a.y +
      3 * u ** 2 * t * b.y +
      3 * u * t ** 2 * c.y +
      t ** 3 * d.y,
  };
}

function buildFAQMesh() {
  const segments = [
    [
      { x: 70, y: 305 },
      { x: 135, y: 305 },
      { x: 140, y: 210 },
      { x: 163, y: 135 },
    ],
    [
      { x: 163, y: 135 },
      { x: 192, y: 25 },
      { x: 290, y: 25 },
      { x: 280, y: 162 },
    ],
    [
      { x: 280, y: 162 },
      { x: 268, y: 276 },
      { x: 437, y: 275 },
      { x: 437, y: 156 },
    ],
    [
      { x: 437, y: 156 },
      { x: 437, y: 54 },
      { x: 350, y: 50 },
      { x: 342, y: 128 },
    ],
  ];

  const centerline = [];

  segments.forEach((segment, segmentIndex) => {
    for (let i = 0; i <= 30; i++) {
      if (segmentIndex > 0 && i === 0) continue;

      centerline.push(
        cubicPoint(...segment, i / 30)
      );
    }
  });

  const getPoint = (index, angle) => {
    const current = centerline[index];
    const previous =
      centerline[Math.max(0, index - 1)];
    const next =
      centerline[Math.min(centerline.length - 1, index + 1)];

    const dx = next.x - previous.x;
    const dy = next.y - previous.y;
    const distance = Math.hypot(dx, dy) || 1;

    const nx = -dy / distance;
    const ny = dx / distance;

    const radius = 27;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);

    return {
      x:
        current.x +
        nx * cosine * radius +
        sine * radius * 0.2,
      y:
        current.y +
        ny * cosine * radius -
        sine * radius * 0.16,
    };
  };

  const makePath = points =>
    points
      .map(
        (point, index) =>
          `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`
      )
      .join(" ");

  const lengthwise = [];

  for (let j = 0; j < 20; j++) {
    const angle = (j / 20) * Math.PI * 2;

    lengthwise.push(
      makePath(
        centerline.map((_, index) =>
          getPoint(index, angle)
        )
      )
    );
  }

  const rings = [];

  for (let i = 0; i < centerline.length; i += 5) {
    const points = [];

    for (let j = 0; j <= 44; j++) {
      points.push(
        getPoint(i, (j / 44) * Math.PI * 2)
      );
    }

    rings.push(makePath(points));
  }

  return {
    lengthwise,
    rings,
  };
}

/* =================================================
   FAQ ANIMATED WIREFRAME
================================================= */

function FAQWireframe({ reduced }) {
  const rootRef = useRef(null);
  const orbitRef = useRef(null);
  const breatheRef = useRef(null);
  const meshRef = useRef(null);

  const uid = useId().replace(/:/g, "");
  const geometry = useMemo(
    () => buildFAQMesh(),
    []
  );

  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(
        ".antintern-faq-mesh-line",
        meshRef.current
      );

      lines.forEach(line => {
        const length = line.getTotalLength();

        gsap.set(line, {
          strokeDasharray: `${length} ${length}`,
          strokeDashoffset: length,
        });
      });

      gsap.to(lines, {
        strokeDashoffset: 0,
        duration: 2.3,
        stagger: 0.012,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 88%",
          once: true,
        },
      });

      const orbit = {
        angle: 0,
      };

      gsap.to(orbit, {
        angle: Math.PI * 2,
        duration: 22,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          if (!orbitRef.current) return;

          gsap.set(orbitRef.current, {
            x: Math.cos(orbit.angle) * 5,
            y: Math.sin(orbit.angle) * 6,
            rotation: Math.sin(orbit.angle) * 0.7,
          });
        },
      });

      gsap.to(breatheRef.current, {
        scale: 1.012,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    }, rootRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mt-4 aspect-[520/365] w-full max-w-[520px]"
    >
      <svg
        viewBox="0 0 520 365"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
      >
        <defs>
          <linearGradient
            id={`faq-gradient-${uid}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="70%"
          >
            <stop
              offset="0%"
              stopColor="#f4cfac"
              stopOpacity="0.78"
            />

            <stop
              offset="50%"
              stopColor="#AEBACD"
              stopOpacity="0.85"
            />

            <stop
              offset="100%"
              stopColor="#f4cfac"
              stopOpacity="0.7"
            />
          </linearGradient>
        </defs>

        <g ref={orbitRef}>
          <g ref={breatheRef}>
            <g
              ref={meshRef}
              fill="none"
              stroke={`url(#faq-gradient-${uid})`}
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {geometry.lengthwise.map((path, i) => (
                <path
                  key={`long-${i}`}
                  className="antintern-faq-mesh-line"
                  d={path}
                />
              ))}

              {geometry.rings.map((path, i) => (
                <path
                  key={`ring-${i}`}
                  className="antintern-faq-mesh-line"
                  d={path}
                />
              ))}
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

/* =================================================
   FAQ ACCORDION ROW
================================================= */

function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
  reduced,
}) {
  const panelId =
    `antintern-faq-answer-${index}`;

  return (
    <div className="border-b border-[#f4cfac]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full items-start justify-between gap-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#fa7405] sm:py-3.5"
      >
        <span className="pr-2 text-[13px] font-medium leading-[1.5] text-[#252525] transition-colors group-hover:text-[#fa7405] sm:text-[14px]">
          {item.question}
        </span>

        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#252525]">
          {isOpen ? (
            <Minus size={17} />
          ) : (
            <Plus size={17} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            id={panelId}
            role="region"
            initial={
              reduced
                ? false
                : {
                  height: 0,
                  opacity: 0,
                }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: reduced ? 0 : 0.34,
              ease: EASE,
            }}
            className="overflow-hidden"
          >
            <p className="max-w-[520px] pb-4 pr-6 text-[12px] leading-[1.8] text-[#707070] sm:text-[13px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =================================================
   FAQ SECTION
================================================= */


/* =================================================
   FAQ SECTION
   ORIGINAL DESIGN + LEFT-SHIFTED WIREFRAME
================================================= */

function FAQSection({ reduced, activeCategory, onSelectCategory }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="support-faq"
      className="
        relative
        flex
        min-h-[calc(100svh-80px)]
        scroll-mt-20
        items-center
        bg-white
        px-5
        py-14
        sm:px-8
        lg:px-12
        lg:py-8
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1160px]
          items-center
          gap-10
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* =====================================
            LEFT FAQ CONTENT
        ===================================== */}

        <div className="relative min-w-0 bg-white">

          {/* ORIGINAL HEADING AND BUTTONS */}

          <motion.div
            {...fadeUp(0, reduced)}
            className="relative z-10"
          >
            <h2
              className="
                text-[clamp(2rem,3.4vw,3.2rem)]
                font-semibold
                leading-[1.12]
                tracking-[-0.05em]
                text-[#252525]
              "
            >
              Frequently
              <br />
              asked questions
            </h2>

            <p
              className="
                mt-5
                max-w-[355px]
                text-[13px]
                leading-[1.8]
                text-[#707070]
                sm:text-[14px]
              "
            >
              Have more questions? Reach out to our
              support team or contact us directly
              for assistance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ActionButton
                onClick={() =>
                  scrollTo("support-contact", reduced)
                }
              >
                Contact Support
              </ActionButton>

              <ActionButton
                secondary
                href="https://wa.me/918660128339"
                external
                Icon={MessageCircle}
              >
                Chat With Us
              </ActionButton>
            </div>
          </motion.div>

          {/* =====================================
              ORIGINAL WIREFRAME ANIMATION

              CHANGED ONLY POSITION
          ===================================== */}

          <motion.div
            {...fadeUp(0.25, reduced)}
            className="
              relative
              z-0
              mt-0
              w-full
              bg-white
            "
          >
            <div
              className="
                relative
                -ml-12
                w-[calc(100%+48px)]
                sm:-ml-20
                sm:w-[calc(100%+80px)]
                lg:-ml-28
                lg:w-[calc(100%+112px)]
              "
            >
              <FAQWireframe reduced={reduced} />
            </div>
          </motion.div>
        </div>

        {/* =====================================
            RIGHT FAQ ACCORDION
            UNCHANGED
        ===================================== */}

        <motion.div
          {...fadeUp(0.15, reduced)}
          className="min-w-0 self-center bg-white"
        >
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="FAQ categories">
            {supportFaqs.map((category, index) => (
              <button key={category.category} type="button" aria-pressed={activeCategory === index}
                onClick={() => { onSelectCategory(index); setOpenIndex(null); }}
                className={`rounded-full border px-4 py-2 text-[12px] font-medium transition-colors ${activeCategory === index ? "border-[#fa7405] bg-[#fa7405] text-white" : "border-[#f4cfac] bg-white text-[#595959] hover:bg-[#fff1e3]"}`}>
                {category.category}
              </button>
            ))}
          </div>
          <div className="border-t border-[#f4cfac]">
            {supportFaqs[activeCategory].questions.map((item, index) => (
              <FAQRow
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
                reduced={reduced}
              />
            ))}
          </div>

          {/* BOTTOM CONTACT LINK */}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] text-[#808080]">
              Still have questions?
            </span>

            <button
              type="button"
              onClick={() =>
                scrollTo("support-contact", reduced)
              }
              className="
                inline-flex
                items-center
                gap-2
                text-[12px]
                font-medium
                text-[#fa7405]
                transition-colors
                hover:text-[#e85f00]
              "
            >
              Talk to our team
              <ArrowUpRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* =================================================
   06. CONTACT OPTIONS
================================================= */

export default function SupportPage() {
  const reduced = Boolean(useReducedMotion());
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
    <SiteHeader />
    <main className="support-page min-h-screen w-full min-w-0 overflow-x-clip bg-white font-['Inter',sans-serif] antialiased text-[#252525]">
      <SupportHero reduced={reduced} />
     
      <SupportCategories reduced={reduced} onSelectCategory={setActiveCategory} />
      {/* 
      <ResourcesSection reduced={reduced} /> */}



      <FAQSection reduced={reduced} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      {/* <SupportsPage /> */}

      <ContactOptions reduced={reduced} />
      <SupportChannels />
      <SupportTicket />
      <SiteFooter />
    </main>
    </>
  );
}

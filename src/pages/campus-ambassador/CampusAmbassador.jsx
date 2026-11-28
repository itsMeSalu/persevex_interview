"use client";


import { motion, useReducedMotion } from "framer-motion";
import StripeAnimation from "./components/StripeAnimation";
import AmbassadorApplication from "./components/AmbassadorApplication";
import SiteHeader from "../../components/SiteHeader.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import { submitAmbassadorApplication } from "./submit-application";
import ApplicationSteps from "./components/ApplicationSteps";
import "./campus-ambassador.css";

// =====================================
// ANIMATION SETTINGS
// =====================================
const ease = [0.16, 1, 0.3, 1];

const timings = {
  beamsFadeStart: 3.85,
  beamsFadeDuration: 1.6,
  gradientFadeDuration: 1.8,
};

const stats = [
  {
    value: "Practice",
    label: "Interview Skills",
  },
  {
    value: "Connect",
    label: "Campus Community",
  },
  {
    value: "Lead",
    label: "Peer Initiatives",
  },
];


const benefits = [
  {
    number: "01",
    title: "Leadership Development",
    description:
      "Develop confidence, communication skills, and leadership abilities through real campus initiatives.",
  },
  {
    number: "02",
    title: "Professional Networking",
    description:
      "Build meaningful connections with ambitious students, mentors, and industry professionals.",
  },
  {
    number: "03",
    title: "Rewards & Recognition",
    description:
      "Get recognized for your contributions and unlock exciting rewards through your achievements.",
  },
  {
    number: "04",
    title: "Career Growth",
    description:
      "Gain valuable experience, strengthen your resume, and build skills for future career opportunities.",
  },
  {
    number: "05",
    title: "Exclusive Opportunities",
    description:
      "Explore special events, learning experiences, and opportunities designed for campus ambassadors.",
  },
  {
    number: "06",
    title: "Community & Collaboration",
    description:
      "Collaborate with passionate students, exchange ideas, and contribute to a growing campus community.",
  },
];


const beams = [
  { height: 240, width: 76, x: -270, delay: 0.65 },
  { height: 360, width: 86, x: -180, delay: 0.75 },
  { height: 490, width: 94, x: -90, delay: 0.85 },
  { height: 580, width: 106, x: 0, delay: 0.95 },
  { height: 490, width: 94, x: 90, delay: 1.05 },
  { height: 360, width: 86, x: 180, delay: 1.15 },
  { height: 240, width: 76, x: 270, delay: 1.25 },
];

// =====================================
// SLOW, SOFT TEXT REVEAL
// =====================================

const textReveal = (delay, reduceMotion) => ({
  initial: reduceMotion
    ? false
    : {
        opacity: 0,
        y: 55,
        filter: "blur(5px)",
      },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  transition: {
    duration: reduceMotion ? 0 : 1.8,
    delay: reduceMotion ? 0 : delay,
    ease,
  },
});

// =====================================
// SMOOTH SCROLL REVEAL
// =====================================

const scrollReveal = (delay, reduceMotion) => ({
  initial: reduceMotion
    ? false
    : {
        opacity: 0,
        y: 45,
        filter: "blur(3px)",
      },

  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: reduceMotion ? 0 : 1.4,
    delay: reduceMotion ? 0 : delay,
    ease,
  },
});

// =====================================
// SLOW STATISTICS REVEAL
// =====================================

const statsContainer = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.3,
      delay: 1.45,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const statItem = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease,
    },
  },
};

// =====================================
// MOVING CORNER GRADIENT
// =====================================

function MovingGradient({ reduceMotion }) {
  const gradientStart =
    timings.beamsFadeStart + timings.beamsFadeDuration;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#fffcf9]"
      initial={{ opacity: reduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduceMotion
          ? 0
          : timings.gradientFadeDuration,
        delay: reduceMotion ? 0 : gradientStart,
        ease: "easeInOut",
      }}
    >
      {/* Off-white foundation */}
      <div className="absolute inset-0 bg-[#fffcf9]" />

      {/* Top-right soft blue glow */}
      <motion.div
        className="absolute -right-[18%] -top-[35%] h-[115%] w-[75%] rounded-full blur-[105px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,211,185,0.78) 0%, rgba(255,235,217,0.48) 42%, transparent 75%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -35, 10, 0],
                y: [0, 30, -20, 0],
                scale: [1, 1.06, 0.98, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-left warm cream */}
      <motion.div
        className="absolute -left-[22%] bottom-[-42%] h-[110%] w-[70%] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,231,174,0.62) 0%, rgba(255,244,219,0.38) 42%, transparent 75%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 35, -15, 0],
                y: [0, -25, 20, 0],
                scale: [1, 1.08, 0.97, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-right lavender tint */}
      <motion.div
        className="absolute -right-[30%] bottom-[-35%] h-[85%] w-[65%] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,222,203,0.38) 0%, transparent 75%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -25, 15, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.06, 0.98, 1],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left-side gentle blue tint */}
      <motion.div
        className="absolute -left-[35%] top-[5%] h-[75%] w-[55%] rounded-full blur-[115px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,237,219,0.35) 0%, transparent 75%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 20, -10, 0],
                y: [0, 20, -15, 0],
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Clean white center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 48% 48%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.18) 48%, transparent 78%)",
        }}
      />

      {/* Subtle dotted texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#AAB8D0 0.65px, transparent 0.65px)",
          backgroundSize: "42px 42px",
        }}
      />
    </motion.div>
  );
}

// =====================================
// ANIMATED BEAMS WITH FADE OUT
// =====================================

function AnimatedBackground({ reduceMotion }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: reduceMotion ? 0 : 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: reduceMotion
          ? 0
          : timings.beamsFadeDuration,
        delay: reduceMotion ? 0 : timings.beamsFadeStart,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* White foundation */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft blue lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(219,234,254,0.55)_0%,rgba(255,255,255,0)_72%)]" />

      {/* Beam formation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[650px] w-[780px] shrink-0 scale-[0.48] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">

          {/* Animated glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: [0.18, 0.34, 0.18],
                    x: [-35, 35, -35],
                  }
            }
            transition={{
              opacity: {
                duration: 9,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              },

              x: {
                duration: 15,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/35 blur-[90px]"
          />

          {/* Seven cinematic beams */}
          {beams.map((beam, index) => (
            <motion.div
              key={index}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -100,
                      scaleY: 0.7,
                    }
              }
              animate={{
                opacity: 0.72,
                y: 0,
                scaleY: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.5,
                delay: reduceMotion ? 0 : beam.delay,
                ease,
              }}
              className="absolute left-1/2 top-1/2 origin-center"
              style={{
                width: beam.width,
                height: beam.height,
                marginLeft: beam.x - beam.width / 2,
                marginTop: -beam.height / 2,
              }}
            >
              {/* Gradient beam */}
              <div
                className="absolute inset-0 -skew-x-[32deg] overflow-hidden bg-gradient-to-b from-orange-300/5 via-[#fa7405]/80 to-orange-950/10 shadow-[0_0_45px_rgba(37,99,235,0.14)]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 18%, black 72%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 18%, black 72%, transparent 100%)",
                }}
              >
                {/* Glossy light */}
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                {/* Moving reflection */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-white/35 to-transparent"
                  animate={
                    reduceMotion
                      ? { y: 0 }
                      : {
                          y: ["-100%", "220%", "-100%"],
                        }
                  }
                  transition={{
                    duration: 12 + index * 0.3,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text readability overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.62)_35%,rgba(255,255,255,0.08)_78%)]" />
    </motion.div>
  );
}

// =====================================
// MAIN CAMPUS AMBASSADOR PAGE
// =====================================

export default function CampusAmbassador() {
  const reduceMotion = useReducedMotion();

  return (
    <>
    <SiteHeader />
    <main className="campus-ambassador-page min-h-screen overflow-x-hidden bg-white font-['Inter',sans-serif] antialiased text-[#252525]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative isolate flex min-h-[calc(100svh-100px)] items-center justify-center overflow-hidden bg-white px-5 py-14 sm:px-8 md:py-16">

        {/* Reference-style moving gradient */}
        <MovingGradient reduceMotion={reduceMotion} />

        {/* Beams fade out after content settles */}
        <AnimatedBackground reduceMotion={reduceMotion} />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

          {/* Program badge */}
          <motion.div
            {...textReveal(0.15, reduceMotion)}
            className="mb-7 inline-flex items-center rounded-full border border-[#ffe1c2] bg-[#fff5eb]/90 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#fa7405] shadow-[0_4px_15px_rgba(250,116,5,0.04)] backdrop-blur-md sm:text-[11px]"
          >
            The AntIntern Ambassador Program
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...textReveal(0.4, reduceMotion)}
            className="max-w-[850px] text-[clamp(2.1rem,4.4vw,3.8rem)] font-semibold leading-[1.17] tracking-[-0.04em] text-[#252525]"
          >
            Become a{" "}
            <span className="brand-gradient-text inline-block">
              AntIntern
            </span>
            <br className="hidden sm:block" />
            {" "}Campus Ambassador
          </motion.h1>

          {/* Description */}
          <motion.p
            {...textReveal(0.75, reduceMotion)}
            className="mt-7 max-w-[635px] text-[15px] font-normal leading-[1.85] tracking-[-0.01em] text-[#707070] sm:text-[16px]"
          >
            Bring interview preparation to your campus. Help peers practice,
            share learning resources, and build a community that grows
            in confidence together.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            {...textReveal(1.1, reduceMotion)}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#fa7405] px-9 py-3.5 text-[13px] font-medium tracking-[0.01em] text-white shadow-[0_8px_24px_rgba(250,116,5,0.19)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#e85f00] hover:shadow-[0_12px_28px_rgba(250,116,5,0.24)]"
            >
              Apply Now

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-full border border-[#eadfd7] bg-white/90 px-9 py-3.5 text-[13px] font-medium tracking-[0.01em] text-[#595959] shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#ffd0a3] hover:bg-[#fff7ef]"
            >
              Learn More
            </a>
          </motion.div>

          {/* =====================================
              STATISTICS
          ===================================== */}

          <motion.div
            variants={reduceMotion ? undefined : statsContainer}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            className="mt-12 grid w-full max-w-[725px] grid-cols-3 divide-x divide-[#eadfd7] rounded-[20px] border border-[#eee2d9] bg-white/85 px-2 py-6 shadow-[0_12px_40px_rgba(70,43,28,0.055)] backdrop-blur-xl sm:px-6 sm:py-7"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={reduceMotion ? undefined : statItem}
                className="flex flex-col items-center justify-center px-2 text-center sm:px-4"
              >
                {/* Value */}
                <span className="text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#fa7405] sm:text-[28px]">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="mt-3 text-[10px] font-normal leading-[1.5] tracking-[-0.005em] text-[#808080] sm:text-[12px]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          BENEFITS SECTION
      ===================================== */}

{/* =====================================
    BENEFITS SECTION - SIX CARDS
    SAME CAMPUS AMBASSADOR PAGE
===================================== */}

<section
  id="benefits"
  className="relative scroll-mt-20 bg-white px-5 pt-24 pb-6 sm:px-8 lg:px-12"
>
  <div className="mx-auto max-w-6xl">

    {/* Sticky heading on desktop */}
    <div className="relative z-10 mb-14 bg-white pb-7 text-center lg:sticky lg:top-0 lg:pt-8">

      <motion.span
        {...scrollReveal(0, reduceMotion)}
        className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fa7405]"
      >
        WHY JOIN ANTINTERN?
      </motion.span>

      <motion.h2
        {...scrollReveal(0.15, reduceMotion)}
        className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-0.045em] text-[#252525]"
      >
        Lead. Inspire. Grow.
      </motion.h2>

      <motion.p
        {...scrollReveal(0.3, reduceMotion)}
        className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-[#707070] sm:text-[16px]"
      >
        More than a title. An opportunity to develop
        meaningful skills, build connections, and grow.
      </motion.p>
    </div>

    {/* Six scrolling benefit cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {benefits.map((benefit, index) => (
        <motion.article
          key={benefit.number}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 55,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.15,
            delay: reduceMotion ? 0 : (index % 3) * 0.12,
            ease,
          }}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -5,
                  transition: { duration: 0.3 },
                }
          }
          className="group flex min-h-[265px] flex-col rounded-[22px] border border-[#eadfd7] bg-white p-8 shadow-[0_6px_24px_rgba(30,46,80,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#ffd0a3] hover:shadow-[0_20px_50px_rgba(70,43,28,0.09)]"
        >
          {/* Card number */}
          <span className="text-[32px] font-medium tracking-[-0.05em] text-[#ffd5ad] transition-colors duration-300 group-hover:text-[#fa7405]">
            {benefit.number}
          </span>

          {/* Card heading */}
          <h3 className="mt-7 text-[19px] font-semibold tracking-[-0.03em] text-[#252525]">
            {benefit.title}
          </h3>

          {/* Card description */}
          <p className="mt-4 text-[14px] leading-[1.85] text-[#707070]">
            {benefit.description}
          </p>

          {/* Decorative line */}
          <div className="mt-auto pt-7">
            <div className="h-[2px] w-9 rounded-full bg-[#ffe0bf] transition-all duration-500 group-hover:w-16 group-hover:bg-[#fa7405]" />
          </div>
        </motion.article>
      ))}

    </div>
  </div>
</section>

{/* =====================================
    STRIPE-STYLE ANIMATION
    BELOW SIX BENEFITS CARDS
===================================== */}

<StripeAnimation />
{/* <HowItWorks /> */}

      {/* =====================================
          APPLICATION SECTION
      ===================================== */}

      <ApplicationSteps />
      <AmbassadorApplication onSubmitApplication={submitAmbassadorApplication} />
      <SiteFooter />
    </main>
    </>
  );
}

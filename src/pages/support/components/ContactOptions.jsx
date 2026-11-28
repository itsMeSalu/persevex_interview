import logo from "../../../assets/antintern-logo.svg";
"use client";


import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   EXACT SOCIAL ICONS FROM REFERENCE
============================================ */

function SocialIcon({ type }) {
  switch (type) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.7" r="1.2" fill="white" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" width="23" height="23" fill="white">
          <path d="M12 2a9.9 9.9 0 0 0-8.5 15.1A9.8 9.8 0 0 0 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.2.8.8-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.2-.2.3-.7.8-.8 1-.2.1-.3.2-.6.1-.2-.2-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.2-.3 0-.4.1-.6l.4-.4.3-.4c.1-.2 0-.4 0-.5L9.8 8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1 2.6 1.1 2.8c.2.2 2 3 4.8 4.1.7.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      );

    case "discord":
      return (
        <svg viewBox="0 0 24 24" width="23" height="23" fill="white">
          <path d="M19.7 5.2a18 18 0 0 0-4.4-1.4l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.4C1.6 9.2.9 13.1 1.2 17a18 18 0 0 0 5.4 2.7l1.2-1.9-1.9-.9.5-.4a12.6 12.6 0 0 0 11.2 0l.5.4-1.9.9 1.2 1.9a18 18 0 0 0 5.4-2.7c.4-4.5-.6-8.4-3.1-11.8ZM8.5 14.8c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
        </svg>
      );

    case "twitter":
      return (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="white">
          <path d="M22 5.9a8.3 8.3 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 4.8a4.2 4.2 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.1 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 14.7a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.9Z" />
        </svg>
      );

    case "facebook":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M14.2 22v-8.8h3l.5-3.5h-3.5V7.5c0-1 .3-1.7 1.8-1.7h1.9V2.7a25 25 0 0 0-2.7-.1c-2.7 0-4.5 1.6-4.5 4.6v2.5h-3v3.5h3V22h3.5Z" />
        </svg>
      );

    default:
      return null;
  }
}

/* ============================================
   SOCIAL ICON CONFIGURATION

   POSITIONS FOLLOW REFERENCE SCREENSHOT
============================================ */

const socialIcons = [
  {
    type: "instagram",
    name: "Instagram",
    left: "73%",
    top: "15%",
    background:
      "linear-gradient(45deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)",
  },
  {
    type: "whatsapp",
    name: "WhatsApp",
    left: "71%",
    top: "58%",
    background: "#52CF72",
  },
  {
    type: "discord",
    name: "Discord",
    left: "31%",
    top: "84%",
    background: "#6474F5",
  },
  {
    type: "twitter",
    name: "Twitter",
    left: "63%",
    top: "87%",
    background: "#1DA9E8",
  },
  {
    type: "facebook",
    name: "Facebook",
    left: "31%",
    top: "97%",
    background: "#1877F2",
  },
];

/* ============================================
   CONTACT SECTION
============================================ */

export default function ContactOptions({ reduced = false }) {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !orbitRef.current || !contentRef.current) {
      return;
    }

    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      if (reduced) return;

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const orbit = orbitRef.current;
        const content = contentRef.current;

        const rings = orbit.querySelectorAll("[data-ring]");
        const icons = orbit.querySelectorAll("[data-social]");
        const text = content.querySelectorAll("[data-reveal]");
        const floats = orbit.querySelectorAll("[data-float]");

        /* ====================================
           MAIN SCROLL ANIMATION
        ==================================== */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            end: "top 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        /* LEFT ORBIT ENTERS */

        tl.fromTo(
          orbit,
          {
            x: -110,
            y: 55,
            scale: 0.9,
            autoAlpha: 0,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1.3,
            ease: "power3.out",
          },
          0
        );

        /* CIRCLES EXPAND */

        tl.fromTo(
          rings,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.1
        );

        /* ICONS REVEAL */

        tl.fromTo(
          icons,
          {
            scale: 0.5,
            autoAlpha: 0,
            y: 24,
          },
          {
            scale: 1,
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "back.out(1.3)",
          },
          0.3
        );

        /* RIGHT CONTENT REVEAL */

        tl.fromTo(
          text,
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.45
        );

        /* ====================================
           SUBTLE ICON FLOATING
        ==================================== */

        floats.forEach((item, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          const duration = 2.3 + index * 0.18;
          gsap.timeline({
            repeat: -1,
            delay: index * 0.2,
            defaults: { duration, ease: "sine.inOut" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play pause resume pause",
            },
          })
            .to(item, { x: 10 * direction, y: -16, rotation: 3 * direction })
            .to(item, { x: -8 * direction, y: 5, rotation: -2 * direction })
            .to(item, { x: 0, y: 0, rotation: 0 });
        });
      });
    }, sectionRef);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      id="support-contact"
      ref={sectionRef}
      className="
        relative
        w-full
        scroll-mt-20
        overflow-hidden
        bg-white
        py-14
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[500px]
          w-full
          max-w-[1280px]
          grid-cols-1
          items-center
          gap-10
          overflow-hidden
          px-5
          sm:px-8
          lg:min-h-[610px]
          lg:grid-cols-[48%_52%]
          lg:gap-0
          lg:px-10
        "
      >
        {/* ======================================
            LEFT HALF-ORBIT GRAPHIC

            ORBIT CENTER ALIGNED TO LEFT EDGE
        ====================================== */}

        <div
          ref={orbitRef}
          aria-label="AntIntern communication channels"
          className="
            relative
            h-[330px]
            w-full
            overflow-hidden
            sm:h-[430px]
            lg:h-[610px]
          "
        >
          {/* ORBIT CENTER AND RINGS */}

          <div
            className="
              absolute
              left-[23%]
              top-1/2
              h-[310px]
              w-[310px]
              -translate-x-1/2
              -translate-y-1/2
              sm:h-[410px]
              sm:w-[410px]
              lg:left-[22%]
              lg:h-[540px]
              lg:w-[540px]
            "
          >
            {/* RING 01 - OUTER */}

            <div
              data-ring
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#fff1e3]
              "
            />

            {/* RING 02 */}

            <div
              data-ring
              className="
                absolute
                inset-[10%]
                rounded-full
                border
                border-[#fff1e3]
              "
            />

            {/* RING 03 */}

            <div
              data-ring
              className="
                absolute
                inset-[20%]
                rounded-full
                border
                border-[#fff1e3]
              "
            />

            {/* SOFT CENTER RING */}

            <div
              data-ring
              className="
                absolute
                inset-[28%]
                rounded-full
                border-[14px]
                border-[#fff1e3]
                bg-white
                shadow-[0_0_36px_rgba(15,23,42,0.035)]
              "
            />

            {/* CENTER BRAND */}

            <div
              className="
                absolute
                inset-[36%]
                z-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white
              "
            >
              <img
                src={logo}
                alt="AntIntern"
                width="160"
                height="72"
                loading="lazy"
                decoding="async"
                className="h-auto w-[94%] max-w-[132px] object-contain"
              />
            </div>

            {/* ======================================
                FIVE REFERENCE SOCIAL ICONS
            ====================================== */}

            {socialIcons.map((icon) => (
              <div
                key={icon.type}
                data-social
                role="img"
                aria-label={icon.name}
                className="
                  absolute
                  z-20
                  -translate-x-1/2
                  -translate-y-1/2
                "
                style={{
                  left: icon.left,
                  top: icon.top,
                }}
              >
                <div
                  data-float
                  className="
                    flex
                    h-[46px]
                    w-[46px]
                    items-center
                    justify-center
                    rounded-full
                    border-[6px]
                    border-white
                    shadow-[0_5px_16px_rgba(0,0,0,0.05)]
                    sm:h-[56px]
                    sm:w-[56px]
                  "
                >
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      rounded-full
                    "
                    style={{
                      background: icon.background,
                    }}
                  >
                    <SocialIcon type={icon.type} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================
            RIGHT CONTENT
        ====================================== */}

        <div
          ref={contentRef}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[520px]
            pb-6
            text-center
            lg:mx-0
            lg:pl-5
            lg:text-left
          "
        >
          {/* EYEBROW */}

          <p
            data-reveal
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#fa7405]
            "
          >
            CONTACT ANTINTERN
          </p>

          {/* MAIN HEADING */}

          <h2
            data-reveal
            className="
              mt-5
              text-[clamp(2.1rem,3.7vw,3.65rem)]
              font-medium
              leading-[1.15]
              tracking-[-0.05em]
              text-[#252525]
            "
          >
            We&apos;re Here
            <br />
            to{" "}
            <span
              className="
                rounded-[6px]
                bg-[#f4cfac]
                px-2
                text-[#e85f00]
              "
            >
              Help.
            </span>
          </h2>

          {/* DESCRIPTION 01 */}

          <p
            data-reveal
            className="
              mx-auto
              mt-6
              max-w-[440px]
              text-[14px]
              leading-[1.9]
              text-[#707070]
              sm:text-[15px]
              lg:mx-0
            "
          >
            Choose the support channel that works
            best for you.
          </p>

          {/* DESCRIPTION 02 */}

          <p
            data-reveal
            className="
              mx-auto
              mt-3
              max-w-[460px]
              text-[13px]
              leading-[1.9]
              text-[#707070]
              sm:text-[14px]
              lg:mx-0
            "
          >
            Tell us which interview track or session needs attention,
            and share the details that will help our team
            understand your question.
          </p>

          {/* BUTTONS */}

          <div
            data-reveal
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            {/* CONTACT SUPPORT */}

            <a
              href="mailto:support@antintern.com"
              className="
                group
                inline-flex
                h-[43px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#fa7405]
                px-5
                text-[12px]
                font-medium
                text-white
                transition-colors
                duration-300
                hover:bg-[#e85f00]
              "
            >
              Contact Support

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </a>

            {/* EXPLORE CHANNELS */}

            <a
              href="#support-channels"
              className="
                group
                inline-flex
                h-[43px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#fff1e3]
                px-5
                text-[12px]
                font-medium
                text-[#334155]
                transition-colors
                duration-300
                hover:bg-[#fff1e3]
                hover:text-[#fa7405]
              "
            >
              Explore Channels

              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

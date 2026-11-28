import { useEffect, useRef } from 'react'
import './interviewJourney.css'

const journeyImage = '/interview-journey.png'

const highlights = [
  'Problems + AI Tutor',
  'Prepare with 4 round types',
  'Portfolio with streaks and reports',
]

export default function InterviewJourney({ onDemoClick }) {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  /* ========================================
     CINEMATIC SCROLL ANIMATION
  ======================================== */

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (
      reducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('aij-visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    section.classList.add('aij-motion-ready')
    observer.observe(section)

    return () => {
      observer.disconnect()
      section.classList.remove('aij-motion-ready')
    }
  }, [])

  /* ========================================
     3D CINEMATIC IMAGE MOVEMENT
  ======================================== */

  function handlePointerMove(event) {
    const image = imageRef.current

    if (!image) return

    if (
      !window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches ||
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return
    }

    const rect =
      event.currentTarget.getBoundingClientRect()

    const x = Math.max(
      0,
      Math.min(
        1,
        (event.clientX - rect.left) / rect.width
      )
    )

    const y = Math.max(
      0,
      Math.min(
        1,
        (event.clientY - rect.top) / rect.height
      )
    )

    image.style.setProperty(
      '--rotate-x',
      `${(0.5 - y) * 7}deg`
    )

    image.style.setProperty(
      '--rotate-y',
      `${(x - 0.5) * 7}deg`
    )

    image.style.setProperty(
      '--move-x',
      `${(x - 0.5) * 14}px`
    )

    image.style.setProperty(
      '--move-y',
      `${(y - 0.5) * 14}px`
    )
  }

  /* ========================================
     RESET IMAGE ANIMATION
  ======================================== */

  function handlePointerLeave() {
    const image = imageRef.current

    if (!image) return

    image.style.setProperty('--rotate-x', '0deg')
    image.style.setProperty('--rotate-y', '0deg')
    image.style.setProperty('--move-x', '0px')
    image.style.setProperty('--move-y', '0px')
  }

  /* ========================================
     MAIN SECTION
  ======================================== */

  return (
    <section
      ref={sectionRef}
      className="aij-section"
      id="interview-journey"
      aria-labelledby="aij-heading"
    >
      <div className="aij-container">

        {/* LEFT SIDE CONTENT */}

        <div className="aij-content">

          <span className="aij-eyebrow">
            THE ANTIINTERN EXPERIENCE
          </span>

          <h2
            id="aij-heading"
            className="aij-heading"
          >
            Start With Problems,
            <br className="aij-desktop-break" />
            Grow Into Interviews
            <br className="aij-desktop-break" />
            and InternLab
          </h2>

          <p className="aij-description">
            Begin with coding challenges, move into
            company-style prepare rounds, run AI mock
            interviews, and keep everything visible in
            your dynamic portfolio.
          </p>

          {/* CTA BUTTONS */}

          <div className="aij-actions">

            <a
              href="/signup"
              className="aij-button aij-button-primary"
            >
              Create Free Account
            </a>

            <button
              type="button"
              className="aij-button aij-button-secondary"
              onClick={onDemoClick}
              disabled={!onDemoClick}
            >
              Try Interview Demo
            </button>

          </div>

          {/* FEATURE HIGHLIGHTS */}

          <div className="aij-highlights">

            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="aij-highlight"
                style={{
                  '--highlight-delay': `${index * 120}ms`,
                }}
              >
                <h3>{highlight}</h3>

                <span
                  className="aij-highlight-line"
                  aria-hidden="true"
                />
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE IMAGE SECTION */}

        <div
          className="aij-visual"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >

          <div
            ref={imageRef}
            className="aij-image-card"
          >

            {/* LOCAL IMAGE - CORRECTED PATH */}

            <img
              src={journeyImage}
              alt="Professional woman preparing for an interview using a laptop"
              className="aij-image"
              loading="lazy"
              decoding="async"
              onError={() => {
                console.error(
                  'Unable to load image:',
                  journeyImage
                )
              }}
            />

            {/* IMAGE OVERLAY */}

            <div
              className="aij-image-overlay"
              aria-hidden="true"
            />

            {/* ANIMATED WHITE FRAME */}

            <svg
              className="aij-frame"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                className="aij-frame-path"
                x="4"
                y="4"
                width="992"
                height="992"
                rx="24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                pathLength="100"
              />
            </svg>

            {/* FIRST FLOATING LABEL */}

            <div className="aij-floating-label aij-label-one">

              <span>Problems + AI Tutor</span>

              <div
                className="aij-label-line"
                aria-hidden="true"
              />

            </div>

            {/* SECOND FLOATING LABEL */}

            <div className="aij-floating-label aij-label-two">

              <span>Prepare Rounds</span>

              <div
                className="aij-label-line"
                aria-hidden="true"
              />

            </div>

            {/* THIRD FLOATING LABEL */}

            <div className="aij-floating-label aij-label-three">

              <span>Dynamic Portfolio</span>

              <div
                className="aij-label-line"
                aria-hidden="true"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
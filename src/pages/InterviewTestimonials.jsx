import { useEffect, useRef } from 'react'
import './interviewTestimonials.css'

const content = {
  prepare: {
    title: 'Company-Track Preparation',
    subtitle: 'Prepare by Company & Role',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
    description:
      'Prepare for Aptitude, Technical, Technical-AI, and Behavioural rounds across Startup, Product, MNC, and Service tracks.',
  },

  developer: {
    title: 'Practice with Purpose',
    subtitle: 'Problems Workspace',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&fit=crop&q=85',
    position: 'center',
  },

  interview: {
    title: 'Experience Real Interviews',
    subtitle: 'AI Interview Studio',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&fit=crop&q=85',
    position: 'center 30%',
  },

  feedback: {
    title: 'Improve with Every Interview',
    subtitle: 'AI Interview Reports',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces',
    description:
      'Practice role-aware AI mock interviews with voice and coding rounds. Review detailed post-interview reports to identify areas for improvement.',
  },

  internlab: {
    title: 'Learn. Build. Showcase.',
    subtitle: 'InternLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    description:
      'Follow a personalized 12-week roadmap with weekly projects, daily coding problems, journals, and structured progress tracking.',
  },

  portfolio: {
    title: 'Showcase Your Progress',
    subtitle: 'Dynamic Portfolio',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&fit=crop&q=85',
    position: 'center 30%',
  },
}

/* ========================================
   IMAGE FALLBACK
======================================== */

const fallbackImage = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg"
       width="800"
       height="800"
       viewBox="0 0 800 800">
    <defs>
      <linearGradient id="background"
        x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff5eb"/>
        <stop offset="100%" stop-color="#efb580"/>
      </linearGradient>
    </defs>
    <rect width="800" height="800"
      fill="url(#background)"/>
    <circle cx="400" cy="280" r="100"
      fill="#ffffff" opacity=".65"/>
    <rect x="220" y="400" width="360"
      height="320" rx="160"
      fill="#ffffff" opacity=".65"/>
  </svg>
`)}`

function handleImageError(event) {
  const image = event.currentTarget

  if (image.dataset.fallback === 'true') return

  image.dataset.fallback = 'true'
  image.src = fallbackImage
}


/* ========================================
   CINEMATIC 3D CARD MOVEMENT
======================================== */

function handleCardMove(event) {
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

  const card = event.currentTarget
  const rect = card.getBoundingClientRect()

  const x = Math.max(
    0,
    Math.min(1, (event.clientX - rect.left) / rect.width)
  )

  const y = Math.max(
    0,
    Math.min(1, (event.clientY - rect.top) / rect.height)
  )

  const rotateX = (0.5 - y) * 9
  const rotateY = (x - 0.5) * 9

  card.style.setProperty('--rotate-x', `${rotateX}deg`)
  card.style.setProperty('--rotate-y', `${rotateY}deg`)

  card.style.setProperty('--mouse-x', `${x * 100}%`)
  card.style.setProperty('--mouse-y', `${y * 100}%`)

  card.style.setProperty(
    '--image-x',
    `${(x - 0.5) * -12}px`
  )

  card.style.setProperty(
    '--image-y',
    `${(y - 0.5) * -12}px`
  )
}

function resetCard(event) {
  const card = event.currentTarget

  card.style.setProperty('--rotate-x', '0deg')
  card.style.setProperty('--rotate-y', '0deg')

  card.style.setProperty('--image-x', '0px')
  card.style.setProperty('--image-y', '0px')

  card.style.setProperty('--mouse-x', '50%')
  card.style.setProperty('--mouse-y', '50%')
}


/* ========================================
   TEXT CONTENT CARD
======================================== */

function ReviewCard({ item, delay = 0 }) {
  return (
    <div
      className="ait-card-stage ait-reveal"
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <article
        className="ait-review-card ait-cinematic-card"
        onPointerMove={handleCardMove}
        onPointerLeave={resetCard}
      >
        <div className="ait-card-light" />

        <div className="ait-review-profile">

          <img
            src={item.image}
            alt=""
            className="ait-review-avatar"
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />

          <div className="ait-review-person">
            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
          </div>

        </div>

        <p className="ait-review-text">
          {item.description}
        </p>

        <div className="ait-card-bottom-line" />

      </article>
    </div>
  )
}


/* ========================================
   PORTRAIT / FEATURE IMAGE CARD
======================================== */

function PortraitCard({ item, delay = 0 }) {
  return (
    <div
      className="ait-card-stage ait-portrait-stage ait-reveal"
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <article
        className="ait-portrait-card ait-cinematic-card"
        onPointerMove={handleCardMove}
        onPointerLeave={resetCard}
      >

        <div className="ait-image-wrapper">

          <img
            src={item.image}
            alt=""
            className="ait-portrait-image"
            style={{
              objectPosition: item.position || 'center',
            }}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />

        </div>

        <div className="ait-portrait-overlay" />

        <div className="ait-image-sweep" />

        <div className="ait-card-light" />

        <div className="ait-portrait-profile">

          <div className="ait-portrait-person">

            <span className="ait-portrait-category">
              {item.subtitle}
            </span>

            <h3>{item.title}</h3>

            <div className="ait-portrait-line" />

          </div>

        </div>

      </article>
    </div>
  )
}


/* ========================================
   MAIN COMPONENT
======================================== */

export default function InterviewTestimonials() {
  const sectionRef = useRef(null)

  /* Scroll-triggered cinematic entrance */

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const elements = section.querySelectorAll('.ait-reveal')

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (
      reducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => {
        element.classList.add('ait-visible')
      })

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ait-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -25px 0px',
      }
    )

    section.classList.add('ait-motion-ready')

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      section.classList.remove('ait-motion-ready')
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="ait-testimonials"
      id="testimonials"
      aria-labelledby="ait-testimonials-title"
    >

      <div className="ait-testimonials-container">

        {/* SECTION HEADING */}

        <div className="ait-testimonials-header">

          <div
            className="ait-heading-left ait-reveal"
            style={{ '--reveal-delay': '0ms' }}
          >

            <span className="ait-section-label">
              THE ANTIINTERN EXPERIENCE
            </span>

            <h2 id="ait-testimonials-title">
              From Preparation
              <br />
              <span>to Placement Readiness.</span>
            </h2>

          </div>

          <div
            className="ait-heading-right ait-reveal"
            style={{ '--reveal-delay': '150ms' }}
          >

            <p>
              Practice coding challenges, prepare for real
              company interview rounds, experience AI mock
              interviews, and build a dynamic portfolio —
              all within AntiIntern.
            </p>

          </div>

        </div>


        {/* THREE COLUMN LAYOUT */}

        <div className="ait-testimonials-grid">

          {/* FIRST COLUMN */}

          <div className="ait-testimonial-column">

            <ReviewCard
              item={content.prepare}
              delay={0}
            />

            <PortraitCard
              item={content.developer}
              delay={150}
            />

          </div>


          {/* SECOND COLUMN */}

          <div className="ait-testimonial-column">

            <PortraitCard
              item={content.interview}
              delay={100}
            />

            <ReviewCard
              item={content.feedback}
              delay={200}
            />

          </div>


          {/* THIRD COLUMN */}

          <div className="ait-testimonial-column">

            <ReviewCard
              item={content.internlab}
              delay={200}
            />

            <PortraitCard
              item={content.portfolio}
              delay={300}
            />

          </div>

        </div>

      </div>

    </section>
  )
}
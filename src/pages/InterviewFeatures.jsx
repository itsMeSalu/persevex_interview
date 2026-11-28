import { useEffect, useRef } from 'react'
import './interviewFeatures.css'

const platformFeatures = [
  {
    title: 'Prepare by Company & Role',
    description: 'Practice company-specific rounds for your target role.',
    className: 'prepare-card',
    panelTitle: 'Practice Tracks',
    items: [
      'Aptitude & Technical',
      'Technical-AI & Behavioural',
      'Startup · Product · MNC · Service',
    ],
  },
  {
    title: 'Interview Studio',
    description: 'Practice AI mock interviews and improve your performance.',
    className: 'interview-card',
    panelTitle: 'Mock Interview',
    items: [
      'Role-based interviews',
      'Voice & coding rounds',
      'Detailed interview reports',
    ],
  },
  {
    title: 'Problems Workspace',
    description: 'Solve coding challenges with AI Tutor guidance.',
    className: 'problems-card',
    panelTitle: 'Solve Problems',
    items: [
      'Difficulty-based problems',
      'Company & topic filters',
      'Code editor with AI Tutor',
    ],
  },
  {
    title: 'InternLab + Dynamic Portfolio',
    description: 'Build real projects and showcase your progress.',
    className: 'portfolio-card',
    panelTitle: 'Build & Showcase',
    items: [
      'Personalized 12-week roadmap',
      'Projects, problems & journals',
      'Auto-updating portfolio',
    ],
  },
]

export default function InterviewFeatures() {
  const sectionRef = useRef(null)

  // Scroll-triggered animation

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

    section.classList.add('apf-animation-ready')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('apf-visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()

      section.classList.remove(
        'apf-animation-ready',
        'apf-visible'
      )
    }
  }, [])

  // Subtle 3D card movement

  const handlePointerMove = (event) => {
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

    const wrapper = event.currentTarget
    const card = wrapper.firstElementChild
    const rect = wrapper.getBoundingClientRect()

    const x =
      (event.clientX - rect.left) / rect.width

    const y =
      (event.clientY - rect.top) / rect.height

    card.style.setProperty(
      '--rotate-x',
      `${(0.5 - y) * 5}deg`
    )

    card.style.setProperty(
      '--rotate-y',
      `${(x - 0.5) * 5}deg`
    )

    card.style.setProperty(
      '--mouse-x',
      `${x * 100}%`
    )

    card.style.setProperty(
      '--mouse-y',
      `${y * 100}%`
    )
  }

  const handlePointerLeave = (event) => {
    const card = event.currentTarget.firstElementChild

    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <section
      className="apf-section"
      ref={sectionRef}
      id="features"
      aria-labelledby="apf-title"
    >
      <div className="apf-container">

        {/* SECTION HEADING */}

        <div className="apf-header">

          <span className="apf-label">
            Platform Features
          </span>

          <h2 id="apf-title">
            Built Around Real Placement Workflows
          </h2>

          <p>
            Practice, prepare, interview and showcase
            your skills in one place.
          </p>

        </div>

        {/* FEATURE CARDS */}

        <div className="apf-grid">

          {platformFeatures.map((feature, index) => (
            <div
              className="apf-card-wrapper"
              key={feature.title}
              style={{
                '--card-delay': `${index * 120}ms`,
              }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >

              <article
                className={`apf-card ${feature.className}`}
              >

                {/* SUBTLE LIGHT EFFECT */}

                <div
                  className="apf-card-light"
                  aria-hidden="true"
                />

                {/* CARD HEADING */}

                <div className="apf-card-header">

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                </div>

                {/* INNER CONTENT */}

                <div className="apf-panel">

                  <h4>{feature.panelTitle}</h4>

                  <ul className="apf-list">

                    {feature.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        style={{
                          '--item-delay':
                            `${itemIndex * 70}ms`,
                        }}
                      >

                        <span
                          className="apf-dot"
                          aria-hidden="true"
                        />

                        <span>{item}</span>

                      </li>
                    ))}

                  </ul>

                </div>

              </article>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
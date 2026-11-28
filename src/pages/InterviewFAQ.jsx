import { useState, useEffect, useRef } from 'react'
import './interviewFAQ.css'

const faqData = [
  {
    question:
      'What can I start with on AntIntern right away?',
    answer:
      'You can start solving coding problems, practicing aptitude and technical questions, exploring company-specific preparation rounds, and preparing for interviews.',
  },
  {
    question:
      'What is included in InternLab?',
    answer:
      'InternLab includes a personalized 12-week roadmap, hands-on projects, daily coding problems, journals, and a Dynamic Portfolio that updates with your progress.',
  },
  {
    question:
      'Do I need to choose a role/domain before starting?',
    answer:
      'You can start by exploring coding problems and preparation resources. Choosing a role or domain helps personalize your preparation and interview practice.',
  },
  {
    question:
      'How is Prepare different from Interview?',
    answer:
      'Prepare helps you practice aptitude, technical, Technical-AI, and behavioural rounds. Interview provides role-aware AI mock interviews with voice, coding rounds, and detailed feedback.',
  },
  {
    question:
      'What shows up in Dynamic Portfolio?',
    answer:
      'Your Dynamic Portfolio showcases your projects, coding progress, practice streaks, interview reports, journals, and learning achievements.',
  },
]

export default function InterviewFAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const sectionRef = useRef(null)

  // Scroll entrance animation

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

    section.classList.add('faq-animation-ready')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('faq-visible')
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
        'faq-animation-ready',
        'faq-visible'
      )
    }
  }, [])

  // Open and close FAQ

  const handleToggle = (index) => {
    setActiveIndex((previous) =>
      previous === index ? null : index
    )
  }

  return (
    <section
      className="ant-faq-section"
      ref={sectionRef}
      id="interview-faq"
      aria-labelledby="ant-faq-title"
    >
      <div className="ant-faq-container">

        {/* LEFT SIDE */}

        <div className="ant-faq-left">

          <h2
            className="ant-faq-heading"
            id="ant-faq-title"
          >
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="ant-faq-description">
            Questions about Problems, Prepare, Interview,
            InternLab, or Dynamic Portfolio? Reach out
            and we'll guide you.
          </p>

          <a
            href="/support"
            className="ant-faq-support"
          >
            <span className="ant-faq-support-label">
              Contact Support
            </span>

            <span
              className="ant-faq-support-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>

        {/* RIGHT SIDE */}

        <div className="ant-faq-right">

          <div className="ant-faq-list">

            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index

              return (
                <div
                  key={faq.question}
                  className={`ant-faq-item ${
                    isOpen ? 'ant-faq-open' : ''
                  }`}
                  style={{
                    '--faq-delay': `${index * 100}ms`,
                  }}
                >

                  <button
                    type="button"
                    className="ant-faq-question"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`ant-faq-answer-${index}`}
                    id={`ant-faq-question-${index}`}
                  >
                    <span className="ant-faq-question-text">
                      {faq.question}
                    </span>

                    <span
                      className="ant-faq-plus"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </span>

                  </button>

                  <div
                    className="ant-faq-answer-wrapper"
                    id={`ant-faq-answer-${index}`}
                    aria-hidden={!isOpen}
                    aria-labelledby={`ant-faq-question-${index}`}
                    role="region"
                  >
                    <div className="ant-faq-answer-inner">

                      <p className="ant-faq-answer">
                        {faq.answer}
                      </p>

                    </div>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}
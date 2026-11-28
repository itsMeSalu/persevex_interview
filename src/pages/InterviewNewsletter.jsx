import { useEffect, useRef, useState } from 'react'
import './interviewNewsletter.css'

export default function InterviewNewsletter({
  onSubscribe,
}) {
  const sectionRef = useRef(null)

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  /* ==========================================
     CINEMATIC SCROLL ANIMATION
  ========================================== */

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

    section.classList.add('newsletter-animation-ready')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('newsletter-visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()

      section.classList.remove(
        'newsletter-animation-ready',
        'newsletter-visible'
      )
    }
  }, [])

  /* ==========================================
     SUBSCRIBE FUNCTIONALITY
  ========================================== */

  const handleSubscribe = async (event) => {
    event.preventDefault()

    if (loading) return

    const normalizedEmail = email.trim()

    if (!normalizedEmail) {
      setStatus('Please enter your email address.')
      return
    }

    if (typeof onSubscribe !== 'function') {
      setStatus('Subscription service is not connected yet.')
      return
    }

    try {
      setLoading(true)
      setStatus('')

      await onSubscribe(normalizedEmail)

      setStatus('Thank you for subscribing!')
      setEmail('')
    } catch {
      setStatus('Unable to subscribe. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="ant-newsletter-section"
      ref={sectionRef}
      aria-labelledby="ant-newsletter-title"
    >
      {/* MAIN CONTENT */}

      <div className="ant-newsletter-container">

        <div className="ant-newsletter-content">

          <span className="ant-newsletter-label">
            Stay Updated
          </span>

          <h2
            className="ant-newsletter-heading"
            id="ant-newsletter-title"
          >
            Practice daily. Prepare deeply.
            <br className="ant-newsletter-mobile-break" />
            {' '}Prove it publicly.
          </h2>

          <p className="ant-newsletter-description">
            Follow product updates across Problems,
            Prepare, Interview, InternLab, and
            Dynamic Portfolio improvements.
          </p>

          {/* SUBSCRIBE FORM */}

          <form
            className="ant-newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setStatus('')
              }}
              required
              className="ant-newsletter-input"
            />

            <button
              type="submit"
              className="ant-newsletter-button"
              disabled={loading}
            >
              <span>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </span>

              <span
                className="ant-newsletter-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>

          </form>

          <div
            className="ant-newsletter-status"
            role="status"
            aria-live="polite"
          >
            {status}
          </div>

        </div>

      </div>

      {/* ANIMATED BACKGROUND WAVES */}

      <div
        className="ant-newsletter-waves"
        aria-hidden="true"
      >

        <svg
          className="ant-newsletter-wave ant-newsletter-wave-one"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="newsletterWaveOne"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#fff1e2"
              />

              <stop
                offset="50%"
                stopColor="#ffdfbd"
              />

              <stop
                offset="100%"
                stopColor="#fff4e8"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M0,95
              C220,-5 450,55 720,115
              C990,175 1180,0 1440,45
              L1440,180
              L0,180
              Z
            "
            fill="url(#newsletterWaveOne)"
          />
        </svg>

        <svg
          className="ant-newsletter-wave ant-newsletter-wave-two"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="newsletterWaveTwo"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#fff7ee"
              />

              <stop
                offset="50%"
                stopColor="#ffd8af"
              />

              <stop
                offset="100%"
                stopColor="#ffe7cc"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M0,125
              C240,20 480,170 760,150
              C1030,130 1220,45 1440,105
              L1440,180
              L0,180
              Z
            "
            fill="url(#newsletterWaveTwo)"
          />
        </svg>

      </div>

    </section>
  )
}
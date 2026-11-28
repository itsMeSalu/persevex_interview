import { useState, useEffect, useRef } from 'react'
import './interviewPricing.css'

const plans = [
  {
    id: 'launch',
    name: 'Launch',
    price: 'Free',
    badge: '',
    description: 'Start free and build your first prep rhythm.',
    credits: 100,
    sessionCredits: 15,
    features: [
      'Basic interview report',
      'Access to non-premium coding problems',
      'Limited company availability',
      'Basic portfolio',
      'AI mentor in a limited daily cap',
      'Limited aptitude and technical sessions per day',
    ],
    note: 'Good for early exploration before upgrading.',
    button: 'Start free',
    link: 'https://www.antintern.com/signup',
  },
  {
    id: 'accelerator',
    name: 'Accelerator',
    price: '₹599',
    badge: 'Popular',
    description:
      'Practice more often with better credit efficiency.',
    credits: 150,
    sessionCredits: 7,
    features: [
      'More interview coverage with lower credit burn',
      'Broader company and preparation access',
      'Stronger reports and progress visibility',
      'More aptitude and technical practice room',
      'Upgrade path for serious placement prep',
      'Can purchase extra credits anytime',
    ],
    note: 'Best step up once Launch starts feeling tight.',
    button: 'Choose accelerator',
    link: 'https://www.antintern.com/pricing',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹1,499',
    badge: 'Premium',
    description:
      'Get the deepest access with the best interview value.',
    credits: 300,
    sessionCredits: 5,
    features: [
      'Detailed and premium interview reports',
      'Both premium and non-premium coding problems',
      'All companies availability',
      'High-volume aptitude and technical practice',
      'Premium badge and detailed portfolio',
      'Personalized mentor availability and extra credit top-ups',
    ],
    note: 'Made for high-frequency interview practice and full access.',
    button: 'Go elite',
    link: 'https://www.antintern.com/pricing',
  },
]

export default function InterviewPricing() {
  const [billing, setBilling] = useState('monthly')
  const sectionRef = useRef(null)

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

    section.classList.add('aip-animation-ready')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('aip-animated')
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
        'aip-animation-ready',
        'aip-animated'
      )
    }
  }, [])

  /* ========================================
     INTERACTIVE 3D CARD ANIMATION
  ======================================== */

  function handleCardMove(event) {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!canHover || reducedMotion) return

    const wrapper = event.currentTarget
    const card = wrapper.firstElementChild
    const rect = wrapper.getBoundingClientRect()

    const x = Math.max(
      0,
      Math.min(1, (event.clientX - rect.left) / rect.width)
    )

    const y = Math.max(
      0,
      Math.min(1, (event.clientY - rect.top) / rect.height)
    )

    card.style.setProperty(
      '--rotate-x',
      `${(0.5 - y) * 5}deg`
    )

    card.style.setProperty(
      '--rotate-y',
      `${(x - 0.5) * 5}deg`
    )

    card.style.setProperty('--mouse-x', `${x * 100}%`)
    card.style.setProperty('--mouse-y', `${y * 100}%`)
  }

  function handleCardLeave(event) {
    const card = event.currentTarget.firstElementChild

    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
    card.style.setProperty('--mouse-x', '50%')
    card.style.setProperty('--mouse-y', '50%')
  }

  return (
    <section
      ref={sectionRef}
      className="aip-section"
      id="interview-pricing"
      aria-labelledby="aip-heading"
    >
      <div className="aip-container">

        {/* SECTION HEADER */}

        <div className="aip-header">

          <span className="aip-eyebrow">
            Credit-based plans
          </span>

          <h2
            id="aip-heading"
            className="aip-heading"
          >
            Start on Launch, scale through Accelerator,
            go premium with Elite
          </h2>

          <p className="aip-description">
            Every plan comes with credits, and interview
            sessions consume credits based on your tier.
            When you run out, you can purchase more credits
            and continue practicing without waiting for
            the next cycle.
          </p>

          {/* MONTHLY / YEARLY TOGGLE */}

          <div
            className={`aip-billing-toggle ${
              billing === 'yearly'
                ? 'aip-yearly-active'
                : ''
            }`}
            role="group"
            aria-label="Billing period"
          >
            <span
              className="aip-toggle-slider"
              aria-hidden="true"
            />

            <button
              type="button"
              className={
                billing === 'monthly' ? 'aip-active' : ''
              }
              aria-pressed={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>

            <button
              type="button"
              className={
                billing === 'yearly' ? 'aip-active' : ''
              }
              aria-pressed={billing === 'yearly'}
              onClick={() => setBilling('yearly')}
            >
              Yearly
            </button>
          </div>

        </div>

        {/* PRICING CARDS */}

        <div className="aip-grid">

          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="aip-card-wrapper"
              style={{
                '--card-delay': `${index * 150}ms`,
              }}
              onPointerMove={handleCardMove}
              onPointerLeave={handleCardLeave}
            >
              <article
                className={`aip-card aip-card-${plan.id}`}
              >

                {/* CARD LIGHT EFFECT */}

                <div
                  className="aip-card-light"
                  aria-hidden="true"
                />

                {/* PLAN HEADER */}

                <div className="aip-card-header">

                  <h3 className="aip-plan-name">
                    {plan.name}
                  </h3>

                  {plan.badge && (
                    <span className="aip-plan-badge">
                      {plan.badge}
                    </span>
                  )}

                </div>

                {/* PLAN PRICE */}

                <div
                  className="aip-price-row"
                  key={`${plan.id}-${billing}`}
                >

                  {plan.id === 'launch' ? (
                    <span className="aip-price">
                      Free
                    </span>
                  ) : billing === 'monthly' ? (
                    <>
                      <span className="aip-price">
                        {plan.price}
                      </span>

                      <span className="aip-price-period">
                        /month
                      </span>
                    </>
                  ) : (
                    <a
                      href={plan.link}
                      className="aip-yearly-price"
                    >
                      View yearly pricing
                    </a>
                  )}

                </div>

                <p className="aip-plan-description">
                  {plan.description}
                </p>

                {/* INCLUDED CREDITS */}

                <div className="aip-credit-panel">

                  <span className="aip-credit-title">
                    Included credits
                  </span>

                  {billing === 'monthly' ||
                  plan.id === 'launch' ? (
                    <>
                      <p className="aip-credit-value">
                        <strong>
                          {plan.credits} credits
                        </strong>
                        {' '}included with plan
                      </p>

                      <span className="aip-session-credits">
                        {plan.sessionCredits} credits
                        per interview session
                      </span>
                    </>
                  ) : (
                    <p className="aip-credit-value">
                      View yearly credits on the pricing page.
                    </p>
                  )}

                </div>

                {/* CTA BUTTON */}

                <a
                  href={plan.link}
                  className="aip-plan-button"
                >
                  <span className="aip-button-text">
                    {plan.button}
                  </span>

                  <span
                    className="aip-button-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>

                {/* PLAN FEATURES */}

                <span className="aip-features-heading">
                  Features
                </span>

                <ul className="aip-feature-list">

                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      style={{
                        '--feature-delay':
                          `${featureIndex * 55}ms`,
                      }}
                    >
                      <span
                        className="aip-feature-check"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                {/* PLAN NOTE */}

                <p className="aip-plan-note">
                  {plan.note}
                </p>

              </article>
            </div>
          ))}

        </div>

        {/* BOTTOM CREDIT INFORMATION */}

        <div className="aip-bottom-info">

          <div className="aip-info-item">

            <h3>Credit logic</h3>

            <p>
              Launch users get the highest per-session burn,
              Accelerator users get better efficiency, and
              Elite users get the strongest credit value.
            </p>

          </div>

          <div className="aip-info-item">

            <h3>Need more credits?</h3>

            <p>
              Users can purchase additional credits anytime
              and continue using interviews and prep sessions
              without changing plans.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
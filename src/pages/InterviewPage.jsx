import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  X,
  CheckCircle2,
  BriefcaseBusiness,
  MessageSquareText,
  ChartNoAxesCombined,
  Play,
  Check,
} from 'lucide-react'
import InterviewTestimonials from './InterviewTestimonials.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import './interviewPage.css'
import InterviewJourney from './InterviewJourney.jsx'
import InterviewPricing from './InterviewPricing.jsx'
import InterviewFAQ from './InterviewFAQ.jsx'
import InterviewNewsletter from './InterviewNewsletter.jsx'
import InterviewFeatures from './InterviewFeatures.jsx'
const plans = [
  { name: 'Foundation', price: 3500 },
  { name: 'Advanced', price: 4500 },
  { name: 'Premium', price: 6999 },
  { name: 'Elite', price: 8999 },
]

const heroStats = [
  {
    title: '4 Core',
    description: 'Problems • Prepare • Interview • InternLab',
  },
  {
    title: '12 Week',
    description: 'InternLab roadmap with weekly projects',
  },
  {
    title: 'Live',
    description: 'Dynamic portfolio + interview reports',
  },
]

const heroFeatures = [
  'Company-track preparation',
  'AI mock interviews with reports',
  'Portfolio-first progress tracking',
]

const heroScenes = [
  {
    firstTitle: 'Real',
    firstCaption: 'COMPANY ROUNDS',
    secondTitle: 'AI',
    secondCaption: 'MOCK INTERVIEWS',
    layout: 'layout-one',
  },
  {
    firstTitle: 'Code',
    firstCaption: 'PRACTICE CHALLENGES',
    secondTitle: 'Learn',
    secondCaption: 'BUILD YOUR SKILLS',
    layout: 'layout-two',
  },
  {
    firstTitle: 'Live',
    firstCaption: 'INTERVIEW PRACTICE',
    secondTitle: 'Grow',
    secondCaption: 'TRACK YOUR PROGRESS',
    layout: 'layout-one',
  },
  {
    firstTitle: 'Build',
    firstCaption: 'REAL PROJECTS',
    secondTitle: 'Show',
    secondCaption: 'YOUR PORTFOLIO',
    layout: 'layout-two',
  },
]

/* ========================================
   PLATFORM FEATURES DATA
======================================== */

const platformFeatures = [
  {
    title: 'Prepare by Company & Role',
    description:
      'Calibrate once, then practice Aptitude, Technical, Technical-AI, and Behavioural rounds across Startup, Product, MNC, and Service tracks.',
    className: 'platform-card-prepare',
    panelTitle: 'Practice Tracks',
    items: [
      'Aptitude & Technical',
      'Technical-AI & Behavioural',
      'Startup · Product · MNC · Service',
    ],
  },
  {
    title: 'Interview Studio',
    description:
      'Run role-aware AI mock interviews with voice, coding rounds, and detailed post-interview reports.',
    className: 'platform-card-interview',
    panelTitle: 'Mock Interview',
    items: [
      'Role-aware Practice',
      'Voice & Coding Rounds',
      'Detailed Post-Interview Report',
    ],
  },
  {
    title: 'Problems Workspace',
    description:
      'Search by difficulty, company, and topic, solve in-browser, and use AI Tutor hints.',
    className: 'platform-card-problems',
    panelTitle: 'Solve Problems',
    items: [
      'Search by Difficulty',
      'Filter by Company & Topic',
      'In-browser Editor with AI Tutor',
    ],
  },
  {
    title: 'InternLab + Dynamic Portfolio',
    description:
      'Follow a personalized 12-week roadmap with projects, daily problems, journals, and portfolio sections that update with your progress.',
    className: 'platform-card-portfolio',
    panelTitle: 'Build & Showcase',
    items: [
      'Personalized 12-Week Roadmap',
      'Projects, Daily Problems & Journals',
      'Auto-updating Dynamic Portfolio',
    ],
  },
]

export default function InterviewPage() {
  const [open, setOpen] = useState(
    window.location.hash === '#lms'
  )

  const [plan, setPlan] = useState('Advanced')
  const [payment, setPayment] = useState('reserve')
  const [submitted, setSubmitted] = useState(false)

  const [activeScene, setActiveScene] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const videoRef = useRef(null)

  const scene = heroScenes[activeScene]

  const selectedPrice =
    plans.find((item) => item.name === plan)?.price ?? 4500

  /* Delayed hero content */

  useEffect(() => {
    const preference = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (preference.matches) {
      setShowDetails(true)
      return
    }

    const timer = setTimeout(() => {
      setShowDetails(true)
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  /* Hero scene animation */

  useEffect(() => {
    const preference = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let intervalId
    let timeoutId

    const stopAnimation = () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
      setIsChanging(false)
    }

    const startAnimation = () => {
      stopAnimation()

      if (preference.matches) return

      intervalId = setInterval(() => {
        setIsChanging(true)

        timeoutId = setTimeout(() => {
          setActiveScene(
            (previous) =>
              (previous + 1) % heroScenes.length
          )

          setIsChanging(false)
        }, 350)
      }, 4000)
    }

    startAnimation()

    preference.addEventListener('change', startAnimation)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)

      preference.removeEventListener(
        'change',
        startAnimation
      )
    }
  }, [])

  /* Video autoplay */

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const preference = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    video.muted = true
    video.defaultMuted = true

    const syncPlayback = () => {
      if (preference.matches) {
        video.pause()
      } else {
        video.play().catch((error) => {
          console.warn('Video playback:', error)
        })
      }
    }

    syncPlayback()

    preference.addEventListener('change', syncPlayback)

    return () => {
      preference.removeEventListener(
        'change',
        syncPlayback
      )
    }
  }, [])

  /* LMS hash navigation */

  useEffect(() => {
    const onHashChange = () => {
      setOpen(window.location.hash === '#lms')
    }

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener(
        'hashchange',
        onHashChange
      )
    }
  }, [])

  /* Modal keyboard behavior */

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  function openModal() {
    setSubmitted(false)
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)

    if (window.location.hash === '#lms') {
      history.replaceState(null, '', '/interview')
    }
  }

  function playDemo() {
    const video = videoRef.current

    if (!video) return

    video.currentTime = 0

    video.play().catch((error) => {
      console.warn('Unable to play demo:', error)
    })

    video.scrollIntoView({
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
        ? 'auto'
        : 'smooth',
      block: 'center',
    })
  }

  return (
    <>
      <SiteHeader />

      <main className="interview-page">

        {/* =====================================
            FIRST SECTION — HERO
        ===================================== */}

        <section className="interview-hero">

          {/* LEFT CONTENT */}

          <div className="interview-hero-copy">

            <div className="interview-hero-eyebrow">
              <span className="interview-status-dot" />

              Practice, Prepare, Interview, and Showcase
            </div>

            <h1>
              Train for real company interview rounds
              {' '}
              <span className="interview-heading-accent">
                with Prepare + AI Interview practice.
              </span>
            </h1>

            <p className="interview-hero-description">
              Solve coding challenges, run company-style
              prepare rounds, take AI mock interviews,
              and publish a dynamic portfolio with real
              project and progress signals.
            </p>

            <div className="interview-actions">

              <a
                href="/signup"
                className="interview-primary"
              >
                Start Free Account
                <ArrowRight size={18} />
              </a>

              <button
                type="button"
                className="interview-secondary"
                onClick={playDemo}
              >
                <Play size={17} />
                Try Interview Demo
              </button>

            </div>

            {/* DELAYED STATISTICS AND FEATURES */}

            <div
              className={`interview-hero-details ${
                showDetails ? 'details-visible' : ''
              }`}
            >

              <div className="interview-hero-stats">

                {heroStats.map((stat, index) => (
                  <div
                    className="interview-hero-stat"
                    key={stat.title}
                    style={{
                      '--reveal-delay': `${index * 160}ms`,
                    }}
                  >
                    <strong>{stat.title}</strong>
                    <p>{stat.description}</p>
                  </div>
                ))}

              </div>

              <div className="interview-hero-features">

                {heroFeatures.map((feature, index) => (
                  <div
                    className="interview-hero-feature"
                    key={feature}
                    style={{
                      '--reveal-delay': `${480 + index * 140}ms`,
                    }}
                  >
                    <Check size={15} strokeWidth={2.4} />
                    <span>{feature}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE VIDEO */}

          <div className="interview-hero-media">

            <div
              className="interview-video-outline"
              aria-hidden="true"
            >

              <svg
                viewBox="0 0 600 540"
                preserveAspectRatio="none"
                className="interview-outline-svg"
              >

                <rect
                  x="2"
                  y="2"
                  width="596"
                  height="536"
                  rx="19"
                  pathLength="100"
                  className="interview-outline-base"
                />

                <rect
                  key={`outline-${activeScene}`}
                  x="2"
                  y="2"
                  width="596"
                  height="536"
                  rx="19"
                  pathLength="100"
                  className="interview-outline-motion"
                />

              </svg>

            </div>

            <div className="interview-video-container">

              <video
                ref={videoRef}
                className="interview-hero-video"
                src="/video/interview.mp4"
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Interview preparation video"
                onError={(event) => {
                  console.error(
                    'Video loading error:',
                    event.currentTarget.error
                  )
                }}
              >
                Your browser does not support video playback.
              </video>

            </div>

            {/* ANIMATED FLOATING CONTENT */}

            <div
              className={`interview-scene ${scene.layout} ${
                isChanging ? 'scene-exit' : 'scene-enter'
              }`}
              key={activeScene}
            >

              <div className="interview-floating-text interview-text-first">
                <strong>{scene.firstTitle}</strong>
                <span>{scene.firstCaption}</span>
              </div>

              <div className="interview-floating-text interview-text-second">
                <strong>{scene.secondTitle}</strong>
                <span>{scene.secondCaption}</span>
              </div>


            </div>

          </div>

        </section>

        {/* =====================================
            SECOND SECTION — PLATFORM FEATURES
        ===================================== */}
<InterviewFeatures />

        {/* =====================================
            EXISTING PREPARATION SECTION
        ===================================== */}
<InterviewTestimonials />
  <InterviewJourney />
  <InterviewPricing />
 
<InterviewFAQ />
 <InterviewNewsletter />
      

        {/* FINAL CTA */}

   
      </main>

      <SiteFooter />

      {/* =====================================
          LMS REGISTRATION MODAL
      ===================================== */}

      
    </>
  )
}

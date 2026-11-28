import { useEffect, useRef, useState } from 'react'

import {
  Home,
  SquareTerminal,
  ChartNoAxesColumn,
  Lightbulb,
  NotebookText,
  UserRound,
  ClipboardList,
  Menu,
  X,
  ArrowUpRight,
  LogOut,
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  PanelLeft,
  Trophy,
  Layers,
  Coins,
  Flame,
  Code2,
  Mic,
  Megaphone,
  Award,
} from 'lucide-react'

import logo from '../assets/antintern-logo.svg'
import './dashboard.css'
import ProblemsPage from './ProblemsPage.jsx'
import { LeaderboardContent } from './LeaderboardPage.jsx'
import QuizzesPage from './QuizzesPage.jsx'
import DashboardBlogPage from './DashboardBlogPage.jsx'
import DashboardInterviewPage from './DashboardInterviewPage.jsx'
import DashboardPreparePage from './DashboardPreparePage.jsx'


/* =========================================
   SIDEBAR NAVIGATION
========================================= */

const sections = [
  {
    id: 'home',
    title: 'Home',
    Icon: Home,
  },
  {
    id: 'problems',
    title: 'Problems',
    Icon: SquareTerminal,
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    Icon: ChartNoAxesColumn,
  },
  {
    id: 'quizzes',
    title: 'Quizzes',
    Icon: Lightbulb,
  },
  {
    id: 'blog',
    title: 'Blog',
    Icon: NotebookText,
    href: '/blog',
  },
  {
    id: 'interview',
    title: 'Interview',
    Icon: UserRound,
    beta: true,
    href: '/dashboard/interview',
  },
  {
    id: 'prepare',
    title: 'Prepare',
    Icon: ClipboardList,
    beta: true,
    href: '/dashboard/prepare',
  },
]


/* =========================================
   SECTION CONTENT
========================================= */

const content = {
  problems: [
    'Build your problem-solving skills.',
    'Work through coding questions and practice explaining your approach.',
    'Open coding practice',
    'https://www.antintern.com/problems',
  ],

  leaderboard: [
    'Make progress at your own pace.',
    'Explore the community leaderboard on AntIntern.',
    'View leaderboard',
    'https://www.antintern.com/leaderboard',
  ],

  quizzes: [
    'Check your understanding.',
    'Choose a preparation track and review the topics you want to strengthen.',
    'Explore practice topics',
    '/#interviews',
  ],

  interview: [
    'Practice for the conversation.',
    'Explore role-specific interview questions and sample feedback.',
    'Choose an interview track',
    '/#interviews',
  ],

  prepare: [
    'Find your next step.',
    'Build a preparation routine around the skills that matter for your target role.',
    'Explore preparation',
    'https://www.antintern.com/prepare',
  ],
}


/* =========================================
   DASHBOARD SUMMARY CARDS
========================================= */

const dashboardStats = [
  {
    label: 'League',
    value: 'Bronze',
    Icon: Trophy,
  },
  {
    label: 'Experience',
    value: '25 XP',
    Icon: Layers,
  },
  {
    label: 'Credits',
    value: '100',
    Icon: Coins,
  },
  {
    label: 'Weekly streak',
    value: '0 days',
    Icon: Flame,
  },
]


/* =========================================
   CALENDAR COMPONENT
========================================= */

function StreakCalendar() {
  const today = new Date()

  const [calendarDate, setCalendarDate] = useState(
    () => new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    )
  )

  const year = calendarDate.getFullYear()
  const month = calendarDate.getMonth()

  const monthName = calendarDate.toLocaleDateString(
    'en-US',
    {
      month: 'long',
      year: 'numeric',
    }
  )

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay()

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate()

  const totalCells =
    Math.ceil((firstDay + daysInMonth) / 7) * 7

  const calendarDays = Array.from(
    { length: totalCells },
    (_, index) => {
      const date = new Date(
        year,
        month,
        index - firstDay + 1
      )

      return {
        date,
        day: date.getDate(),

        isOutsideMonth:
          date.getMonth() !== month,

        isToday:
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate(),
      }
    }
  )

  function changeMonth(direction) {
    setCalendarDate(current =>
      new Date(
        current.getFullYear(),
        current.getMonth() + direction,
        1
      )
    )
  }

  return (
    <div className="dashboard-calendar">

      {/* CALENDAR HEADER */}

      <div className="dashboard-calendar-header">

        <button
          type="button"
          className="dashboard-calendar-arrow"
          aria-label="Previous month"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft
            size={17}
            strokeWidth={1.7}
          />
        </button>

        <h3 aria-live="polite">
          {monthName}
        </h3>

        <button
          type="button"
          className="dashboard-calendar-arrow"
          aria-label="Next month"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight
            size={17}
            strokeWidth={1.7}
          />
        </button>

      </div>

      {/* WEEKDAY LABELS */}

      <div
        className="dashboard-calendar-weekdays"
        aria-hidden="true"
      >
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
          .map(day => (
            <span key={day}>
              {day}
            </span>
          ))}
      </div>

      {/* CALENDAR DATES */}

      <div
        className="dashboard-calendar-days"
        key={`${year}-${month}`}
        role="group"
        aria-label={monthName}
      >

        {calendarDays.map(
          ({ date, day, isOutsideMonth, isToday }) => (
            <div
              key={date.toDateString()}
              className={[
                'dashboard-calendar-day',
                isOutsideMonth ? 'is-outside' : '',
                isToday ? 'is-today' : '',
              ].filter(Boolean).join(' ')}
              aria-current={isToday ? 'date' : undefined}
              aria-label={date.toDateString()}
            >
              {day}
            </div>
          )
        )}

      </div>

    </div>
  )
}


/* =========================================
   REUSABLE PANEL HEADING
========================================= */

function PanelHeading({ Icon, children }) {
  return (
    <h2 className="dashboard-panel-heading">

      {Icon && (
        <Icon
          size={16}
          strokeWidth={1.65}
          className="dashboard-panel-icon"
          aria-hidden="true"
        />
      )}

      <span>{children}</span>

    </h2>
  )
}


/* =========================================
   MAIN DASHBOARD
========================================= */

export default function DashboardPage() {

  const [open, setOpen] = useState(false)

  const [active, setActiveSection] = useState(
    window.location.pathname === '/problems'
      ? 'problems'
      : window.location.pathname === '/leaderboard'
        ? 'leaderboard'
        : window.location.pathname === '/quizzes'
          ? 'quizzes'
      : window.location.pathname === '/blog'
          ? 'blog'
      : window.location.pathname === '/dashboard/interview'
          ? 'interview'
      : window.location.pathname === '/dashboard/prepare'
          ? 'prepare'
        : 'home'
  )

  const [popover, setPopover] = useState(null)

  const headerActions = useRef(null)
  const lastTrigger = useRef(null)
  const dashboardRef = useRef(null)


  /* =========================================
     NAVIGATION FUNCTIONALITY
  ========================================= */

  function setActive(id) {

    if (id === 'problems' || id === 'leaderboard' || id === 'quizzes' || id === 'blog' || id === 'interview' || id === 'prepare') {
      window.location.assign(id === 'interview' || id === 'prepare' ? `/dashboard/${id}` : `/${id}`)
      return
    }

    if (
      id === 'home' &&
      ['/problems', '/leaderboard', '/quizzes', '/blog', '/dashboard/interview', '/dashboard/prepare'].includes(window.location.pathname)
    ) {
      window.location.assign('/dashboard')
      return
    }

    setActiveSection(id)
    setPopover(null)
  }


  function togglePopover(name, event) {
    lastTrigger.current = event.currentTarget

    setPopover(current =>
      current === name ? null : name
    )
  }


  /* =========================================
     HEADER POPOVER FUNCTIONALITY
  ========================================= */

  useEffect(() => {

    function closeOutside(event) {
      if (
        !headerActions.current?.contains(event.target)
      ) {
        setPopover(null)
      }
    }

    function closeOnEscape(event) {

      if (event.key !== 'Escape') return

      setPopover(null)
      setOpen(false)

      lastTrigger.current?.focus()
    }

    document.addEventListener(
      'pointerdown',
      closeOutside
    )

    document.addEventListener(
      'keydown',
      closeOnEscape
    )

    return () => {

      document.removeEventListener(
        'pointerdown',
        closeOutside
      )

      document.removeEventListener(
        'keydown',
        closeOnEscape
      )
    }

  }, [])


  /* =========================================
     DASHBOARD SCROLL ANIMATIONS
  ========================================= */

  useEffect(() => {

    if (active !== 'home') return

    const dashboard = dashboardRef.current

    if (!dashboard) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (
      reducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const elements = dashboard.querySelectorAll(
      '.dashboard-reveal'
    )

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'dashboard-reveal-visible'
            )

            observer.unobserve(entry.target)
          }

        })

      },
      {
        threshold: 0.08,
      }
    )

    elements.forEach(element => {

      element.classList.add(
        'dashboard-reveal-ready'
      )

      observer.observe(element)
    })

    return () => {

      observer.disconnect()

      elements.forEach(element => {

        element.classList.remove(
          'dashboard-reveal-ready',
          'dashboard-reveal-visible'
        )

      })
    }

  }, [active])


  const selected = sections.find(
    section => section.id === active
  )


  return (

    <div className={`dashboard-page${active === 'home' ? ' dashboard-home-view' : ''}${active === 'leaderboard' ? ' dashboard-leaderboard-view' : ''}`}>

      {/* MOBILE BACKDROP */}

      {open && (
        <button
          className="dashboard-backdrop"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      )}


      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside
        className={
          'dashboard-sidebar' +
          (open ? ' is-open' : '')
        }
      >

        <a
          href="/"
          className="dashboard-logo"
        >
          <img src={logo} alt="" />
          AntiIntern
        </a>

        <nav aria-label="Dashboard navigation">

          {sections.map(
            ({ id, title, Icon, href, beta }) =>
              href ? (

                <a
                  key={id}
                  href={href}
                  className="dashboard-nav-item"
                  aria-current={active === id ? 'page' : undefined}
                >

                  <Icon
                    size={19}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />

                  <span>{title}</span>

                  {beta && <small>Beta</small>}

                </a>

              ) : (

                <button
                  key={id}
                  type="button"
                  aria-current={
                    active === id ? 'page' : undefined
                  }
                  className="dashboard-nav-item"
                  onClick={() => {
                    setActive(id)
                    setOpen(false)
                  }}
                >

                  <Icon
                    size={19}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />

                  <span>{title}</span>

                  {beta && <small>Beta</small>}

                </button>

              )
          )}

        </nav>

        <a
          href="/login"
          className="dashboard-exit"
        >
          <LogOut size={16} strokeWidth={1.6} />
          Back to sign in
        </a>

      </aside>


      {/* =====================================
          MAIN WORKSPACE
      ===================================== */}

      <div className="dashboard-workspace">

        {/* HEADER */}

        <header className="dashboard-header">

          <button
            type="button"
            className="dashboard-menu"
            aria-label={
              open
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >

            {open
              ? <X size={20} />
              : <Menu size={20} />
            }

          </button>

          <PanelLeft
            size={18}
            className="dashboard-desktop-icon"
          />

          <span className="dashboard-breadcrumb">

            Home

            <ChevronRight size={15} />

            <strong>
              {active === 'home'
                ? 'Dashboard'
                : selected?.title}
            </strong>

          </span>


          {/* HEADER ACTIONS */}

          <div
            ref={headerActions}
            className="dashboard-header-actions"
          >

            <span className="dashboard-preview-label">
              Sample data
            </span>

            <button
              type="button"
              className="dashboard-icon-button"
              aria-label="Notifications"
              aria-expanded={
                popover === 'notifications'
              }
              onClick={event =>
                togglePopover(
                  'notifications',
                  event
                )
              }
            >
              <Bell
                size={19}
                strokeWidth={1.7}
              />
            </button>

            <button
              type="button"
              className="dashboard-profile-button"
              aria-label="Account menu"
              aria-expanded={
                popover === 'account'
              }
              onClick={event =>
                togglePopover('account', event)
              }
            >

              <span>S</span>

              <ChevronDown size={16} />

            </button>

            {popover && (

              <div className="dashboard-header-popover">

                {popover === 'notifications' ? (

                  <p>No notifications right now.</p>

                ) : (

                  <>
                    <p>Preview account</p>

                    <a href="https://www.antintern.com/profile">
                      Open profile
                    </a>

                    <a href="/#pricing">
                      View plans
                    </a>

                    <a href="/login">
                      Back to sign in
                    </a>
                  </>

                )}

              </div>

            )}

          </div>

        </header>


        {/* =====================================
            DASHBOARD CONTENT
        ===================================== */}

        <main
          className="dashboard-content"
          ref={dashboardRef}
        >

          {active === 'home' ? (

            <>

              {/* WELCOME SECTION */}

              <div className="dashboard-welcome dashboard-reveal">

                <h1>
                  Welcome back, Salu Kumari
                </h1>

                <p className="dashboard-description">
                  Here is your daily activity summary.
                </p>

              </div>


              <div className="dashboard-overview-grid">

                <div className="dashboard-overview-main">


                  {/* =================================
                      SUMMARY CARDS
                  ================================= */}

                  <div className="dashboard-stats">

                    {dashboardStats.map(
                      ({ label, value, Icon }, index) => (

                        <div
                          key={label}
                          className="dashboard-stat-card dashboard-reveal"
                          style={{
                            '--reveal-delay':
                              `${index * 80}ms`,
                          }}
                        >

                          <div className="dashboard-stat-label">

                            <Icon
                              size={16}
                              strokeWidth={1.65}
                              className="dashboard-stat-icon"
                              aria-hidden="true"
                            />

                            <span>{label}</span>

                          </div>

                          <strong>{value}</strong>

                        </div>

                      )
                    )}

                  </div>


                  {/* =================================
                      PREPARE TRACKER
                      NO ICONS
                  ================================= */}

                  <section
                    className="dashboard-panel dashboard-tracker dashboard-reveal"
                    style={{
                      '--reveal-delay': '120ms',
                    }}
                  >

                    <h2>Prepare Tracker</h2>

                    <div className="dashboard-calibration">

                      <h3>
                        Calibrate your prepare track
                      </h3>

                      <p>
                        Answer a few quick questions so
                        we can pick the right role, company
                        <br className="dashboard-wide-break" />
                        {' '}and round for you.
                      </p>

                      <div className="dashboard-calibration-bottom">

                        <div className="dashboard-track-metrics">

                          <div>
                            <strong>12k+</strong>
                            <span>students preparing</span>
                          </div>

                          <div>
                            <strong>80+</strong>
                            <span>company tracks</span>
                          </div>

                          <div>
                            <strong>300+</strong>
                            <span>round templates</span>
                          </div>

                        </div>

                        <button
                          className="dashboard-primary"
                          type="button"
                          onClick={() => setActive('prepare')}
                        >
                          Start calibration
                        </button>

                      </div>

                    </div>

                  </section>


                  {/* =================================
                      BOTTOM CARDS
                  ================================= */}

                  <div className="dashboard-overview-bottom">


                    {/* SUGGESTED CHALLENGE */}

                    <section
                      className="dashboard-panel dashboard-challenge dashboard-reveal"
                      style={{
                        '--reveal-delay': '80ms',
                      }}
                    >

                      <PanelHeading Icon={Code2}>
                        Suggested Challenge
                      </PanelHeading>

                      <h3>Maximum Subarray</h3>

                      <div className="dashboard-tags">

                        <span>Array</span>

                        <span>Dynamic Programming</span>

                        <span>Divide and Conquer</span>

                      </div>

                      <div className="dashboard-card-footer">

                        <span className="dashboard-problem-metrics">

                          250 XP

                          <small>100% Rate</small>

                        </span>

                        <a
                          className="dashboard-primary"
                          href="https://www.antintern.com/problems"
                        >
                          Solve problem
                        </a>

                      </div>

                    </section>


                    {/* MOCK INTERVIEW */}

                    <section
                      className="dashboard-panel dashboard-mock dashboard-reveal"
                      style={{
                        '--reveal-delay': '160ms',
                      }}
                    >

                      <PanelHeading Icon={Mic}>
                        Mock Interview
                      </PanelHeading>

                      <p>
                        Unlock your personalized interview
                        workspace:
                      </p>

                      <div className="dashboard-tags">

                        <span>Role-based questions</span>

                        <span>Skill report</span>

                        <span>Focused feedback</span>

                      </div>

                      <button
                        type="button"
                        className="dashboard-primary"
                        onClick={() => setActive('interview')}
                      >
                        Start Calibration
                      </button>

                    </section>

                  </div>

                </div>


                {/* =================================
                    RIGHT SIDEBAR CARDS
                ================================= */}

                <aside className="dashboard-overview-side">


                  {/* WEEKLY STREAK */}

                  <section
                    className="dashboard-panel dashboard-streak dashboard-reveal"
                    style={{
                      '--reveal-delay': '100ms',
                    }}
                  >

                    <PanelHeading Icon={Flame}>
                      Weekly Streak
                    </PanelHeading>

                    <p>
                      Start your streak today.
                    </p>

                    <StreakCalendar />

                  </section>


                  {/* BRONZE LEAGUE */}

                  <section
                    className="dashboard-panel dashboard-league dashboard-reveal"
                    style={{
                      '--reveal-delay': '180ms',
                    }}
                  >

                    <PanelHeading Icon={Award}>
                      Bronze League
                    </PanelHeading>

                    <p>
                      Create a Journal, Solve a problem
                      or take interviews to get in the
                      leaderboard!
                    </p>

                  </section>


                  {/* PLATFORM UPDATES */}

                  <section
                    className="dashboard-panel dashboard-updates dashboard-reveal"
                    style={{
                      '--reveal-delay': '240ms',
                    }}
                  >

                    <div className="dashboard-updates-title">

                      <PanelHeading Icon={Megaphone}>
                        Platform updates
                      </PanelHeading>

                      <button
                        type="button"
                        onClick={event =>
                          togglePopover(
                            'notifications',
                            event
                          )
                        }
                      >
                        View all
                      </button>

                    </div>

                    <h3>No updates right now</h3>

                    <p>
                      Product updates and important
                      alerts will show here.
                    </p>

                  </section>

                </aside>

              </div>

            </>

          ) : active === 'problems' ? (

            <ProblemsPage />

          ) : active === 'leaderboard' ? (

            <LeaderboardContent embedded />

          ) : active === 'quizzes' ? (

            <QuizzesPage />

          ) : active === 'blog' ? (

            <DashboardBlogPage />

          ) : active === 'interview' ? (

            <DashboardInterviewPage />

          ) : active === 'prepare' ? (

            <DashboardPreparePage />

          ) : (

            <>

              <p className="dashboard-eyebrow">
                {selected?.title}
              </p>

              <h1>{content[active][0]}</h1>

              <p className="dashboard-description">
                {content[active][1]}
              </p>

              <a
                className="dashboard-primary dashboard-section-action"
                href={content[active][3]}
              >

                {content[active][2]}

                <ArrowUpRight size={17} />

              </a>

            </>

          )}

        </main>

      </div>

    </div>

  )
}

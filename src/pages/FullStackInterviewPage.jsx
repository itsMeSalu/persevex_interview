import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Clock3, FolderOpen, Layers3 } from 'lucide-react'
import FullStackCertificates from '../components/FullStackCertificates.jsx'
import FullStackFaq from '../components/FullStackFaq.jsx'
import FullStackProjects from '../components/FullStackProjects.jsx'
import FullStackPreview from '../components/FullStackPreview.jsx'
import TrainingPartners from '../components/TrainingPartners.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import { programOverviewContent } from './programOverviewContent.js'

gsap.registerPlugin(ScrollTrigger)

const topics = [
  ['Frontend', 'React and browser behavior'],
  ['Backend', 'APIs and data modeling'],
  ['System design', 'End-to-end trade-offs'],
]

const focusAreas = [
  ['Browser and accessibility', 'Explain how you’d build a responsive, keyboard-friendly interface.'],
  ['JavaScript and async behavior', 'Reason through promises, request ordering, and failures.'],
  ['React state and rendering', 'Decide where state belongs and how to handle loading and errors.'],
  ['APIs and databases', 'Design an endpoint, validate its inputs, and choose a data model.'],
  ['System design and debugging', 'Trace a request across the stack and explain your trade-offs.'],
]

const curriculum = [
  {
    title: 'Introduction to Web Development',
    topics: ['Web Architecture Overview', 'Frontend vs Backend Development', 'Tools and Environments', 'Web Development Roadmap'],
    prompt: 'Walk through what happens from entering a URL to seeing the page.',
  },
  {
    title: 'HTML & CSS Essentials',
    topics: ['Semantic HTML and page structure', 'Box sizing and layout positioning', 'Responsive layouts with Grid and Flexbox', 'Mobile-first breakpoints', 'Animating UI changes with CSS'],
    prompt: 'Explain how you’d make a checkout layout responsive and usable from the keyboard.',
  },
  {
    title: 'JavaScript Programming',
    topics: ['Declarations, functions, and scope', 'Reading and updating the DOM', 'Handling browser events', 'Modern JavaScript syntax', 'Using Fetch and promises', 'Debugging and recovering from errors'],
    prompt: 'Explain how you’d prevent stale search results from overwriting the latest response.',
  },
  {
    title: 'Frontend Frameworks with React.js',
    topics: ['JSX and composing components', 'Passing props and managing state', 'Working with useState and useEffect', 'Navigating with React Router', 'Building a React task list'],
    prompt: 'Describe which values a filterable task list should store in state and which it should derive.',
  },
  {
    title: 'Backend Development with Node.js & MongoDB',
    topics: ['Building a server with Express', 'Designing REST endpoints', 'Modeling documents with Mongoose', 'JWT-based authentication', 'Creating, reading, updating, and deleting records', 'Deploying a MERN application'],
    prompt: 'Design an authenticated order-history endpoint and explain how you’d paginate and index it.',
  },
]

const practiceSkills = [
  'HTML & CSS', 'JavaScript', 'React', 'REST APIs', 'SQL & data modeling',
  'Accessibility', 'Testing & debugging', 'System design',
]

const fullStackDemo = {
  prompts: [
    'A React search box fetches results as the user types. Sometimes an older response replaces a newer one. How would you fix it?',
    'How would you test that fix, and what should the UI show when the latest request fails?',
  ],
  feedback: [
    'Cancel stale requests with AbortController or guard updates with a request ID. Debouncing reduces requests but doesn’t guarantee response order.',
    'Test two requests that resolve in reverse order and verify that only the latest result is displayed.',
    'Treat cancellations separately from failures. Keep the query visible and offer a retry for the latest failed request.',
  ],
}

const fullStackTrack = {
  title: 'Full Stack Web Development',
  shortTitle: 'Full Stack',
  heroDescription: 'Practice the decisions interviewers ask you to explain, from React state and API contracts to schema design and production trade-offs. Work through a realistic prompt and see how to make your answer more concrete.',
  topics,
  overviewHeading: ['Practice thinking through', 'the full stack.'],
  overviewDescription: 'A full-stack interview asks you to connect decisions across the browser, API, and database. Start by clarifying the problem, talk through your implementation, then test the edge cases and explain what you’d change in production.',
  focusAreas,
  practiceSkills,
  curriculum,
  demo: fullStackDemo,
}

export default function FullStackInterviewPage({ track = fullStackTrack } = {}) {
  const { title, shortTitle, program, preview, previewLabel, Preview = FullStackPreview, heroDescription, projectDescription, topics, curriculum, projects, questions } = track
  const programOverview = programOverviewContent[program || 'web-development']
  const hero = useRef(null)
  const overview = useRef(null)

  useEffect(() => {
    document.title = `${title} Interviews · AntIntern`
  }, [title])

  useLayoutEffect(() => {
    if (track.heroEntrance === false) return
    if (window.location.hash && window.location.hash !== '#sample') return

    const motion = gsap.matchMedia(hero.current)
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { opacity: 0, ease: 'power3.out', clearProps: 'opacity,transform' } })
        .from('[data-hero-heading]', { y: 28, duration: 0.65, stagger: 0.1 }, 0.1)
        .from('[data-hero-description]', { y: 12, duration: 0.45 }, 0.8)
        .from('[data-hero-topics] > div', { y: 10, duration: 0.42, stagger: 0.09 }, 1.02)
        .from('[data-hero-actions]', { y: 8, duration: 0.42 }, 1.24)
        .from('#sample', { scale: 0.88, duration: 0.82 }, 0.8)
    })

    return () => motion.revert()
  }, [track.heroEntrance])

  useLayoutEffect(() => {
    const section = overview.current
    const motion = gsap.matchMedia(section)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const defaults = { opacity: 0, duration: 0.58, ease: 'power3.out', clearProps: 'opacity,transform' }
      const heading = section.querySelector('[data-track-heading]')
      const focus = section.querySelector('[data-track-focus]')
      const skills = section.querySelector('[data-track-skills]')

      gsap.from(heading.children, {
        ...defaults, x: -24, stagger: 0.1,
        scrollTrigger: { trigger: heading, start: 'top 92%', once: true },
      })
      gsap.timeline({ defaults, scrollTrigger: { trigger: focus, start: 'top 92%', once: true } })
        .from(focus.querySelector('h3'), { y: 16, duration: 0.4 })
        .from(focus.querySelectorAll('li'), { y: 22, stagger: 0.13 }, 0.14)
      if (skills) {
        gsap.from(skills, {
          ...defaults, y: 22,
          scrollTrigger: { trigger: skills, start: 'top 92%', once: true },
        })
      }
    })

    return () => motion.revert()
  }, [])

  return (
    <div id="top" className={`min-h-screen bg-white text-[#281e1a] antialiased ${program === 'psychology' ? 'psychology-page' : ''} ${program === 'medical-coding' ? 'medical-coding-page' : ''}`}>
      <SiteHeader programPage />

      <main>
        <section ref={hero} aria-labelledby="full-stack-title">
          <div className="page-width grid max-w-[84rem] items-center gap-9 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-[clamp(4.5rem,8vw,8rem)] lg:py-20">
            <div>
              <p data-hero-heading className="mb-4 text-sm font-bold text-[#8c411f]">Technical interview preparation</p>
              <h1 data-hero-heading id="full-stack-title" className="max-w-[15ch] text-[clamp(2.25rem,4vw,4.25rem)] leading-[1.08] font-extrabold tracking-[-0.05em]">
                {title} <span className="brand-gradient-text block">Interviews</span>
              </h1>
              <p data-hero-description className="mt-5 max-w-[48ch] text-sm leading-[1.75] text-[#614e44] sm:text-base">
                {heroDescription}
              </p>
              <dl data-hero-topics className="mt-7 grid grid-cols-3 gap-3 border-t border-[#e7cdb9] pt-5 text-sm sm:gap-5">
                {topics.map(([area, title]) => (
                  <div key={area}>
                    <dt className="font-bold text-[#8c411f]">{area}</dt>
                    <dd className="mt-1 text-[#614e44]">{title}</dd>
                  </div>
                ))}
              </dl>
              <div data-hero-actions className="mt-8 flex flex-wrap items-center gap-4">
                <a className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f58220] px-6 font-bold text-white shadow-[0_8px_20px_#b65b1533] transition-colors hover:bg-[#d9670b]" href="https://www.persevex.com/fees">Enroll Now <span aria-hidden="true" className="ml-2">↗</span></a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d9b9a4] bg-white px-6 font-bold text-[#8c411f] transition-colors hover:bg-[#fff3e9]" href={`https://www.persevex.com/courses/${program || 'web-development'}#curriculum`}>View Curriculum <span aria-hidden="true" className="ml-2">→</span></a>
              </div>
            </div>

            <Preview preview={preview} />
          </div>
        </section>

        <section ref={overview} id="rounds" aria-labelledby="rounds-title" className="scroll-mt-0 border-y border-[#eee5dc] bg-white">
          <div className="page-width max-w-[84rem] py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
              <div className="min-w-0">
                <div data-track-heading>
                  <p className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-[#fff0e3] px-4 py-2 text-xs font-bold uppercase tracking-[.08em] text-[#a34421]"><span aria-hidden="true" className="size-2 rounded-full bg-[#f4770b]" />About this program</p>
                  <h2 id="rounds-title" className="text-[clamp(2rem,3.3vw,3.2rem)] leading-[1.12] font-extrabold tracking-[-0.045em]">
                    A practical path into<br /><span className="brand-gradient-text">{programOverview.title}.</span>
                  </h2>
                </div>
                <p className="mt-5 max-w-[66ch] text-sm leading-[1.8] text-[#6e625e] sm:text-base">{programOverview.description}</p>
                <dl className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
                  {[
                    { label: 'Program Length', value: `${programOverview.weeks} weeks`, Icon: Clock3 },
                    { label: 'Learning Modules', value: programOverview.modules, Icon: Layers3 },
                    { label: 'Guided Lessons', value: programOverview.lessons, Icon: BookOpen },
                    { label: 'Portfolio Projects', value: programOverview.projects, Icon: FolderOpen },
                  ].map(({ label, value, Icon }) => <div key={label} className="flex gap-2 border-l border-[#ead9cc] px-3 first:border-l-0 first:pl-0 max-sm:odd:border-l-0 max-sm:odd:pl-0">
                    <Icon size={21} strokeWidth={1.7} className="shrink-0 text-[#ed750c]" aria-hidden="true" />
                    <div><dt className="text-xs font-semibold uppercase tracking-[.04em] text-[#81746e]">{label}</dt><dd className="mt-2 text-lg font-extrabold text-[#281e1a]">{value}</dd></div>
                  </div>)}
                </dl>
              </div>

              <div data-track-focus className="min-w-0 lg:border-l lg:border-[#e9ded3] lg:pl-8">
                <p className="text-xs font-bold uppercase tracking-[.13em] text-[#a34421]">Program focus</p>
                <div className="mb-4 mt-3 flex flex-wrap items-end justify-between gap-2">
                  <h3 className="text-xl font-bold tracking-tight">What this track is built around</h3>
                  <span className="text-xs text-[#81746e]">{programOverview.outcomes.length} core outcomes</span>
                </div>
                <ol className="grid gap-3">
                  {programOverview.outcomes.map((outcome, index) => <li key={outcome} className="flex min-h-16 items-center gap-4 rounded-xl border border-[#eee2d8] bg-[#fffaf5] px-4 py-3">
                    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff0e3] text-sm font-bold text-[#a34421]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold leading-6">{outcome}</span>
                  </li>)}
                </ol>
              </div>
            </div>
            {programOverview.skills.length > 0 && <div data-track-skills className="mt-8 rounded-xl border border-[#eee2d8] bg-[#fffaf5] px-4 py-4">
              <h3 className="text-xs font-bold uppercase tracking-[.12em] text-[#81746e]">Skills covered</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {programOverview.skills.map(skill => <li key={skill} className="rounded-full bg-[#fff0e3] px-3 py-1.5 text-xs font-semibold text-[#9a451c]">{skill}</li>)}
              </ul>
            </div>}
          </div>
        </section>
        <PracticeRoadmap title={shortTitle} curriculum={curriculum} />
        <FullStackProjects entries={projects} trackTitle={shortTitle} intro={projectDescription} />
        <FullStackCertificates trackTitle={shortTitle} program={program} />
        <TrainingPartners />
        <FullStackFaq entries={questions} trackTitle={shortTitle} />
      </main>
      <SiteFooter />
    </div>
  )
}

function PracticeRoadmap({ title, curriculum }) {
  const [activeRound, setActiveRound] = useState(0)
  const section = useRef(null)

  useLayoutEffect(() => {
    const motion = gsap.matchMedia(section.current)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-curriculum-content]', {
        opacity: 0,
        y: 32,
        duration: 0.72,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: section.current, start: 'top 92%', once: true },
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <section ref={section} id="roadmap" aria-labelledby="roadmap-title" className="border-y border-[#ede1d7] bg-[#faf6f2]">
      <div data-curriculum-content className="page-width max-w-[84rem] py-12 sm:py-16">
        <h2 id="roadmap-title" className="text-[clamp(2rem,3.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">
          {title} <span className="brand-gradient-text">Curriculum</span>
        </h2>
        <p className="mt-3 max-w-[60ch] leading-relaxed text-[#614e44]">
          Explore the five course modules and use the interview prompt in each to rehearse what you’ve learned.
        </p>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.35fr)] lg:gap-7">
          <div className="hidden rounded-2xl border border-[#e9ded5] bg-[#fffdf9] p-4 shadow-[0_3px_0_#e5d7cb,0_12px_28px_#533a251c,inset_0_1px_0_#ffffff] lg:block">
            <p className="px-3 pt-2 pb-3 text-sm font-bold text-[#57463d]">Course modules</p>
            <ol className="space-y-1">
              {curriculum.map(({ title }, index) => (
                <li key={title}>
                  <button
                    type="button"
                    aria-controls={`roadmap-round-${index}`}
                    aria-pressed={activeRound === index}
                    onClick={() => setActiveRound(index)}
                    className="group flex min-h-12 w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-left text-sm font-semibold text-[#302723] hover:bg-[#f8f3ee] aria-pressed:border-[#ead8ca] aria-pressed:bg-[#f6eee7]"
                  >
                    <span aria-hidden="true" className="shrink-0 font-mono text-xs text-[#77665c] group-aria-pressed:text-[#9e451f]">{String(index + 1).padStart(2, '0')}</span>
                    {title}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-2">
            {curriculum.map(({ title, topics, prompt }, index) => {
              const expanded = activeRound === index
              const roundId = `roadmap-round-${index}`

              return (
                <div key={title} className="overflow-hidden rounded-xl border border-[#eadbd0] bg-white">
                  <h3>
                    <button
                      type="button"
                      id={`${roundId}-trigger`}
                      aria-expanded={expanded}
                      aria-controls={roundId}
                      onClick={() => setActiveRound(expanded ? null : index)}
                      className="flex min-h-13 w-full items-center gap-3 px-4 py-2.5 text-left font-bold hover:bg-[#fff8f1] focus-visible:outline-offset-[-3px] aria-expanded:bg-[#fff1e6] sm:px-5"
                    >
                      <span aria-hidden="true" className="rounded-md bg-[#ffeadb] px-2 py-1 font-mono text-xs text-[#8b3d21]">{String(index + 1).padStart(2, '0')}</span>
                      <span className="flex-1">{title}</span>
                      <span className="shrink-0 text-xs font-medium text-[#614e44]">{topics.length} lessons</span>
                      <span aria-hidden="true" className="text-lg text-[#8b3d21]">{expanded ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <div id={roundId} role="region" aria-labelledby={`${roundId}-trigger`} hidden={!expanded} className="border-t border-[#eadbd0] px-4 py-4 sm:px-5">
                    <p className="text-sm font-extrabold">Topics covered</p>
                    <ul className="mt-2 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm leading-relaxed text-[#614e44] marker:text-[#b14c25] sm:grid-cols-2">
                      {topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                    <p className="mt-4 rounded-lg bg-[#fff8f1] px-3 py-2 text-sm text-[#614e44]">
                      <strong className="text-[#8b3d21]">Interview practice</strong> {prompt}
                    </p>
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

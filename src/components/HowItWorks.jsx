import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mockInterviewVideo from '../assets/mock-interview-preview.mp4'

const steps = [
  ['interviews', 'Practice with real coding tasks', 'Work in a sample codebase. Read the requirements, make a change, and test how it handles edge cases.'],
  ['assessments', 'Prepare for the role', 'Focus on the technical skills and question types that matter for your target role.'],
  ['preparation', 'Rehearse with AI mock interviews', 'Answer role-specific questions out loud and practice explaining your trade-offs when the interviewer follows up.'],
  ['hiring', 'See where you’re improving', 'Review performance across coding, problem-solving, and communication to decide what to practice next.'],
]

const cursorPositions = [
  { left: '71%', top: '40%' },
  { left: '80%', top: '46%' },
  { left: '71%', top: '24%' },
  { left: '71%', top: '35%' },
]

const scores = [['Coding', 4], ['Problem-solving', 3.5], ['Edge cases', 3], ['Communication', 4]]

export default function HowItWorks() {
  const section = useRef(null)
  const [active, setActive] = useState(0)
  const pinned = useRef(null)

  useLayoutEffect(() => {
    function selectFromHash() {
      const index = steps.findIndex(([id]) => location.hash === '#' + id)
      if (index >= 0) {
        setActive(index)
      }
    }

    selectFromHash()
    window.addEventListener('hashchange', selectFromHash)
    return () => window.removeEventListener('hashchange', selectFromHash)
  }, [])

  useLayoutEffect(() => {
    const root = section.current
    const media = gsap.matchMedia(root)

    media.add('(min-width: 768px) and (min-height: 740px) and (prefers-reduced-motion: no-preference)', () => {
      const position = { value: 0 }
      const sequence = gsap.to(position, {
        value: steps.length,
        ease: 'none',
        onUpdate: () => {
          const index = Math.min(steps.length - 1, Math.floor(position.value))
          setActive(index)
          root.style.setProperty('--workflow-progress', String(position.value - index))
        },
        scrollTrigger: {
          trigger: root.querySelector('[data-workflow-panel]'),
          start: 'top 8%',
          end: () => '+=' + Math.max(875, window.innerHeight * 1.15),
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          refreshPriority: 1,
        },
      })
      pinned.current = sequence.scrollTrigger
      return () => {
        pinned.current = null
        root.style.removeProperty('--workflow-progress')
      }
    })

    return () => media.revert()
  }, [])

  useLayoutEffect(() => {
    const media = gsap.matchMedia(section.current)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const root = section.current
      const visual = root.querySelector('[data-current-visual]')
      const cursor = visual.querySelector('[data-preview-cursor]')
      const video = visual.querySelector('video')
      video?.play().catch(() => {})
      gsap.timeline({ defaults: { ease: 'power2.out' } })
        .from(root.querySelector('[data-current-copy]'), { opacity: 0, y: 8, duration: 0.34 }, 0)
        .from(visual.querySelectorAll('[data-workflow-layer]'), {
          opacity: 0, y: 13, scale: 0.97, duration: 0.48, stagger: 0.08,
        }, 0)
        .from(cursor, {
          opacity: 0, xPercent: 170, yPercent: 210, duration: 0.62, ease: 'power2.inOut',
        }, 0.14)
        .to(cursor, { scale: 0.83, duration: 0.09, repeat: 1, yoyo: true }, 0.7)
        .from(visual.querySelector('[data-preview-popover]'), {
          opacity: 0, y: 9, scale: 0.94, duration: 0.38, transformOrigin: 'top left',
        }, 0.76)

      return () => video?.pause()
    })

    return () => media.revert()
  }, [active])

  function selectStep(index) {
    setActive(index)
    const trigger = pinned.current
    if (trigger?.isActive) {
      const progress = (index + 0.08) / steps.length
      window.scrollTo({ top: trigger.start + progress * (trigger.end - trigger.start), behavior: 'instant' })
      trigger.getTween()?.progress(1)
    }
  }

  return (
    <section ref={section} aria-labelledby="workflow-title" className="border-y border-[#eadfd7] bg-white py-16 text-[#14223a] sm:py-24 lg:py-28">
      <div data-workflow-panel className="page-width lg:px-[4.45vw]">
        <h2 id="workflow-title" className="platform-title mb-7 text-[#17130f] sm:mb-10">
          Practice for the work <span className="brand-gradient-text">you’ll actually do</span>
        </h2>

        <div data-workflow-stage className="grid items-start gap-6 md:grid-cols-[0.39fr_0.61fr] lg:gap-[4vw]">
          <div>
            <div className="space-y-1">
              {steps.map(([id, title, description], index) => (
                <div key={id} id={id} className="scroll-mt-12">
                  <h3>
                    <button type="button" aria-expanded={active === index} aria-controls={id + '-details'} onClick={() => selectStep(index)} className="w-full rounded-sm py-2 text-left font-serif text-lg tracking-tight text-[#746b65] transition-colors hover:text-[#963d26] focus-visible:outline-2 focus-visible:outline-[#963d26] aria-expanded:text-[#14223a] sm:text-xl lg:text-[1.65rem]">
                      {title}
                    </button>
                  </h3>
                  <div id={id + '-details'} hidden={active !== index}>
                    {active === index && (
                      <>
                        <p key={id} data-current-copy className="max-w-[44ch] pb-4 text-sm leading-relaxed text-[#574b43] sm:text-base">{description}</p>
                        <div aria-hidden="true" className="mb-3 h-px bg-[#eadfd7]">
                          <div className="h-full origin-left scale-x-[var(--workflow-progress,1)] bg-[#ad4d2d]" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-gradient aspect-[1.21] overflow-hidden rounded-2xl border border-[#ead8cb] text-[#14223a] shadow-[0_16px_40px_#8c4b2114]">
            <div key={active} data-current-visual className="absolute inset-0">
              {active === 0 && (
                <div data-workflow-layer className="absolute inset-x-[8%] top-[15%] bottom-[-5%] overflow-hidden rounded-xl border border-[#eadfd7] bg-white shadow-lg">
                  <div className="border-b border-[#eadfd7] px-3 py-2 text-[clamp(0.45rem,1vw,0.78rem)] font-semibold">Editor <span className="ml-3 font-normal text-[#68564a]">Changes · Preview · Tests</span></div>
                  <div className="grid h-full grid-cols-[0.34fr_0.66fr] text-[clamp(0.47rem,1.05vw,0.84rem)]">
                    <div className="space-y-2 border-r border-[#eadfd7] bg-[#fffaf5] p-3">
                      <p className="font-semibold">Project files</p>
                      <p>▾ src</p><p className="pl-2">records.js</p><p className="pl-2">records.test.js</p><p className="font-semibold text-[#963d26]">README.md</p>
                    </div>
                    <div className="p-3 sm:p-4">
                      <p className="font-serif text-[clamp(0.8rem,1.9vw,1.55rem)] leading-tight">Find duplicate records</p>
                      <p className="mt-2 text-[#574b43]">Return duplicate IDs in the order they first repeat.</p>
                      <div data-preview-popover>
                        <p className="mt-4 font-semibold">Before you submit</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-[#574b43]"><li>Check an empty input.</li><li>Handle IDs that repeat three times.</li><li>Explain your time and memory costs.</li></ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active === 1 && (
                <>
                  <div data-workflow-layer className="absolute top-[28%] left-[11%] w-[59%] overflow-hidden rounded-xl border border-[#eadfd7] bg-white text-[clamp(0.58rem,1.2vw,0.94rem)] shadow-lg">
                    <div className="bg-[#fcf1e8] px-[7%] py-[5%] font-semibold">Persevex prep session</div>
                    <div className="space-y-3 p-[7%] leading-relaxed">
                      <p className="text-[#68564a]">Target role <strong className="text-[#14223a]">Backend developer</strong></p>
                      <p>Let’s practice explaining trade-offs in a system that processes repeated requests.</p>
                      <p className="rounded-lg bg-[#fff3e8] px-2 py-1 text-[#963d26]">Next question · Retry handling</p>
                    </div>
                  </div>
                  <ul data-preview-popover className="absolute top-[23%] right-[8%] w-[33%] overflow-hidden rounded-lg border border-[#eedacc] bg-white text-[clamp(0.5rem,1.1vw,0.82rem)] shadow-lg">
                    <li className="border-b border-[#f1e6de] px-3 py-2 font-semibold">Choose a practice topic</li>
                    <li className="flex justify-between gap-1 bg-[#fff1e7] px-3 py-2 text-[#963d26]">Retry handling <span aria-hidden="true">✓</span></li>
                    <li className="px-3 py-2">Data modeling</li>
                    <li className="px-3 py-2">API design</li>
                  </ul>
                </>
              )}

              {active === 2 && (
                <>
                  <div data-workflow-layer className="absolute top-[7%] right-[-12%] bottom-[23%] left-[39%] overflow-hidden rounded-xl border border-[#eadfd7] bg-white shadow-lg">
                    <div className="border-b border-[#eadfd7] bg-[#fff7ee] p-3 text-[clamp(0.53rem,1.1vw,0.9rem)] font-semibold">● &nbsp; Mock interview</div>
                    <p data-preview-popover className="m-3 rounded-lg border border-[#eadfd7] p-2 text-[clamp(0.53rem,1.1vw,0.9rem)]">What happens if a client retries after a timeout?</p>
                  </div>
                  <video data-workflow-layer src={mockInterviewVideo} aria-label="Example of a candidate speaking on a video call" muted playsInline loop controls preload="metadata" className="absolute bottom-[8%] left-[15%] aspect-[1.62] w-[62%] rounded-xl bg-[#14223a] object-cover shadow-lg" />
                </>
              )}

              {active === 3 && (
                <div data-workflow-layer className="absolute inset-x-[16%] top-[21%] bottom-[-6%] rounded-xl border border-[#eadfd7] bg-white p-[5%] shadow-lg">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[clamp(0.68rem,1.6vw,1.2rem)] font-semibold">Practice report</p>
                      <p className="text-[clamp(0.5rem,1vw,0.8rem)] text-[#68564a]">Example results across four skills</p>
                    </div>
                    <p className="rounded-full bg-[#ffdfc4] px-2 py-1 font-serif text-[clamp(0.75rem,2vw,1.5rem)]">3.6 / 5</p>
                  </div>
                  <dl data-preview-popover className="mt-[6%] space-y-[5%] text-[clamp(0.5rem,1vw,0.82rem)]">
                    {scores.map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between"><dt>{label}</dt><dd>{value} / 5</dd></div>
                        <div aria-hidden="true" className="h-1 rounded-full bg-[#f3e9e1]"><div className="h-full rounded-full bg-[#d97646]" style={{ width: value * 20 + '%' }} /></div>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              <svg data-preview-cursor aria-hidden="true" viewBox="0 0 22 24" style={cursorPositions[active]} className="pointer-events-none absolute z-10 w-[4%] min-w-3 drop-shadow-sm">
                <defs>
                  <linearGradient id="workflow-cursor-orange" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f79422" />
                    <stop offset="50%" stopColor="#fa7405" />
                    <stop offset="100%" stopColor="#f54700" />
                  </linearGradient>
                </defs>
                <path d="M2 2 19 10l-8 2-4 8z" fill="url(#workflow-cursor-orange)" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

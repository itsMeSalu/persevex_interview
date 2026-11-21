import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import infosysLogo from '../assets/companies/infosys.svg'
import tcsLogo from '../assets/companies/tcs.svg'

const testimonials = [
  { name: 'Arjun Mehta', track: 'Web development', role: 'Backend Developer', company: 'Capgemini', quote: 'My interview skills improved dramatically.' },
  { name: 'Rahul Verma', track: 'Artificial intelligence', role: 'AI Engineer', company: 'TCS', logo: tcsLogo, quote: 'That’s exactly what recruiters ask about in technical rounds.' },
  { name: 'Kiran Kumar', track: 'Web development', role: 'Full Stack Developer', company: 'Infosys', logo: infosysLogo, quote: 'The mentors pushed me to build production-ready projects.' },
]

const plans = [
  {
    name: 'Launch', price: 'Free', credits: 100, sessionCost: 15,
    summary: 'Start free and build your first prep rhythm.',
    features: ['Basic interview report', 'Access to non-premium coding problems', 'Limited company availability', 'Basic portfolio', 'AI mentor with a daily limit', 'Limited aptitude and technical sessions per day'],
    note: 'Good for early exploration before upgrading.',
  },
  {
    name: 'Accelerator', price: '₹599', credits: 150, sessionCost: 7, badge: 'Popular',
    summary: 'Practice more often with better credit efficiency.',
    features: ['More interviews at a lower credit cost', 'Broader company and preparation access', 'Stronger reports and progress visibility', 'More aptitude and technical practice', 'Upgrade path for placement preparation', 'Extra credits available anytime'],
    note: 'A step up when you need more practice than Launch offers.',
  },
  {
    name: 'Elite', price: '₹1,499', credits: 300, sessionCost: 5, badge: 'Premium',
    summary: 'Get the deepest access with the best interview value.',
    features: ['Detailed premium interview reports', 'Premium and non-premium coding problems', 'Access to all companies', 'High-volume aptitude and technical practice', 'Premium badge and detailed portfolio', 'Personalized mentor availability and extra credit top-ups'],
    note: 'Made for frequent interview practice and full platform access.',
  },
]

const questions = [
  {
    title: 'How do interview credits work?',
    answer: 'Launch includes 100 credits and uses 15 per interview. Accelerator includes 150 and uses 7 per interview. Elite includes 300 and uses 5 per interview.',
  },
  {
    title: 'How can I prepare for a technical interview?',
    answer: 'Use the interview practice platform to work through role-relevant questions and rehearse explaining your reasoning out loud.',
    link: { href: '#preparation', label: 'Explore interview preparation' },
  },
  {
    title: 'How can Persevex help our hiring team?',
    answer: 'Use technical interviews and practical coding assessments to see how candidates approach the work. Bring assessment results and interview notes together during the hiring debrief.',
    link: { href: '#hiring', label: 'Explore technical hiring' },
  },
  {
    title: 'Who can help me choose a program?',
    answer: 'Tell the Persevex team what role you’re working toward and what kind of support you need.',
    link: { href: 'mailto:support@persevex.com?subject=Persevex%20program%20question', label: 'Contact Persevex' },
  },
]

export default function ProgramSections() {
  return (
    <>
      <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-8 border-y border-[#eadfd7] bg-white py-12 text-[#291a13] sm:py-16">
        <div className="page-width">
          <header data-pricing-rise className="mx-auto mb-8 max-w-3xl text-center">
            <p className="brand-gradient-text mx-auto mb-3 text-xl font-bold sm:text-2xl">Credit-based plans</p>
            <h2 id="pricing-title" className="platform-title text-balance">
              An interview plan for <span className="brand-gradient-text">every stage</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[57ch] leading-relaxed text-[#574b43]">
              Start with Launch, practice more with Accelerator, or get full access with Elite. Every plan includes interview credits.
            </p>
          </header>

          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
            {plans.map(({ name, price, summary, credits, sessionCost, features, note, badge }) => {
              const featured = badge === 'Popular'

              return (
                <article key={name} data-pricing-rise className={`flex flex-col rounded-2xl border bg-white p-3 shadow-[0_8px_25px_#7e442012] ${featured ? 'border-[#de8d66]' : 'border-[#eadfd7]'}`}>
                  <div className={`flex min-h-40 flex-col lg:min-h-44 rounded-xl border px-4 py-3.5 sm:px-5 ${featured ? 'border-[#f2c9b2] bg-[#fff1e6]' : 'border-[#f0e5dc] bg-[#fffaf5]'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                      <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{name}</h3>
                      {badge && <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${featured ? 'bg-[#a44320] text-white' : 'bg-[#f2e8e0] text-[#574b43]'}`}>{badge}</span>}
                    </div>
                    <p className="mt-1 text-sm leading-snug text-[#574b43]">{summary}</p>
                    <div className="mt-auto flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 pt-4">
                      <p className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">{price}</p>
                      {badge && <span className="text-xs font-medium text-[#68564a]">per month</span>}
                    </div>
                  </div>

                  <div className="px-3 pt-3.5 pb-3 sm:px-4">
                    <p className="text-sm font-semibold">{credits} credits included</p>
                    <p className="mt-0.5 text-xs text-[#574b43]">{sessionCost} credits per interview session</p>
                    <ul className="mt-3 space-y-1.5 border-t border-[#f0e5dc] pt-3 text-sm leading-snug text-[#574b43]">
                      {features.map((feature) => (
                        <li key={feature} className="flex gap-2"><span aria-hidden="true" className="text-[#a44320]">✓</span>{feature}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs leading-relaxed text-[#68564a]">{note}</p>
                  </div>

                  <a className={`mt-auto flex min-h-11 items-center justify-center rounded-lg border px-3 py-2 text-center text-sm font-semibold transition-colors motion-reduce:transition-none ${featured ? 'border-[#b74313] bg-[#b74313] text-white hover:bg-[#92340d]' : 'border-[#edc4ac] text-[#9a3711] hover:bg-[#fff2e7]'}`} href={badge ? 'https://www.antintern.com/' : 'https://www.antintern.com/signup'}>
                    {badge ? 'View ' + name + ' on AntIntern' : 'Start free'}
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-8 border-t border-[#eee6df] bg-white py-14 sm:py-20">
        <div data-faq-content className="page-width grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[6vw] lg:px-[4.45vw]">
          <header data-faq-intro className="lg:pt-3">
            <h2 id="faq-title" className="platform-title text-[#14223a]">
              Frequently{' '}
              asked <span className="brand-gradient-text">questions</span>
            </h2>
            <p className="mt-4 max-w-[36ch] leading-relaxed text-[#574b43]">
              Find answers about interview credits, technical practice, and how Persevex helps hiring teams assess candidates.
            </p>
          </header>

          <div className="divide-y divide-[#eadfd7] border-y border-[#eadfd7]">
            {questions.map(({ title, answer, link }, index) => (
              <details key={title} name="persevex-faq" open={index === 0} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-[#14223a] hover:text-[#963d26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#963d26] sm:text-lg [&::-webkit-details-marker]:hidden">
                  {title}
                  <span aria-hidden="true" className="mr-1 size-2 shrink-0 rotate-45 border-r-2 border-b-2 border-[#aa4b23] transition-transform group-open:rotate-[225deg] motion-reduce:transition-none" />
                </summary>
                <div className="max-w-[62ch] pb-5 pr-5 leading-relaxed text-[#574b43]">
                  <p>{answer}</p>
                  {link && <a href={link.href} className="mt-2 inline-flex items-center gap-2 font-semibold text-[#963d26] underline-offset-4 hover:underline">{link.label} <span aria-hidden="true">→</span></a>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function LearnerStories() {
  const [paused, setPaused] = useState(false)
  const section = useRef(null)
  const viewport = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia(section.current)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const carousel = viewport.current
      const cards = Array.from(carousel.querySelectorAll('.learner-story-card'))

      function updateCardFocus() {
        const bounds = carousel.getBoundingClientRect()
        const center = (bounds.left + bounds.right) / 2
        const weights = cards.map((card) => {
          const rect = card.getBoundingClientRect()
          const distance = Math.abs((rect.left + rect.right) / 2 - center)
          const proximity = Math.max(0, 1 - distance / (rect.width * 0.85))
          return proximity * proximity * (3 - 2 * proximity)
        })

        cards.forEach((card, index) => {
          card.style.setProperty('--story-focus', weights[index].toFixed(3))
        })
      }

      gsap.from('[data-stories-rise]', {
        opacity: 0,
        y: 20,
        duration: 0.72,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: section.current,
          start: 'top 88%',
          once: true,
        },
      })

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          updateCardFocus()
          gsap.ticker.add(updateCardFocus)
        } else {
          gsap.ticker.remove(updateCardFocus)
        }
      })
      observer.observe(carousel)

      return () => {
        observer.disconnect()
        gsap.ticker.remove(updateCardFocus)
        cards.forEach((card) => card.style.removeProperty('--story-focus'))
      }
    })

    return () => media.revert()
  }, [])

  return (
    <section ref={section} aria-labelledby="testimonials-title" className="border-t border-[#eadfd7] bg-[linear-gradient(180deg,#fff_20%,#fff8f2_100%)] py-10 sm:py-14">
      <div data-stories-rise className="page-width max-w-7xl">
        <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <h2 id="testimonials-title" className="text-balance text-[clamp(2.25rem,4vw,3.75rem)] leading-tight font-extrabold tracking-tight text-[#251a15]">
            Our <span className="brand-gradient-text">success stories</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[58ch] leading-relaxed text-[#574b43] sm:text-lg">
            Persevex learners share how practical projects and mentorship helped them prepare for technical interviews.
          </p>
        </header>

        <div ref={viewport} data-paused={paused} tabIndex={0} aria-label="Scrolling learner testimonials. Focus to pause." className="learner-stories-window overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-[#963d26]">
          <div className="learner-stories-track">
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} aria-hidden={duplicate || undefined} className={`learner-stories-row ${duplicate ? 'learner-stories-copy' : ''}`}>
                {testimonials.map(({ name, track, role, company, logo, quote }) => (
                  <article key={name} className="learner-story-card flex flex-col rounded-2xl border border-[#eee2d9] bg-white p-5 sm:p-6">
                    <p className="mb-4 text-xs font-semibold text-[#963d26]">{track}</p>
                    <div className="flex min-h-16 items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold text-[#251a15]">{name}</p>
                        <p className="mt-1 text-sm text-[#574b43]">{role}</p>
                        <p className="text-sm text-[#574b43]">@ {company}</p>
                      </div>
                      <div aria-hidden="true" className="flex min-h-10 w-21 shrink-0 items-center justify-center border-l border-[#f0e4da] pl-3">
                        {logo ? <img src={logo} alt="" className="h-8 w-full object-contain" /> : <span className="text-xs font-bold text-[#68564a]">{company}</span>}
                      </div>
                    </div>
                    <div className="mt-4 border-t border-[#f0e4da] pt-4">
                      <div role="img" aria-label="5 out of 5 stars" className="flex items-center gap-2 text-sm">
                        <span aria-hidden="true" className="tracking-[0.16em] text-[#c35b15]">★★★★★</span>
                        <span aria-hidden="true" className="font-semibold text-[#68564a]">5.0</span>
                      </div>
                      <blockquote className="mt-2 min-h-12 leading-relaxed text-[#40342d]">“{quote}”</blockquote>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => setPaused((value) => !value)} className="nav-link sr-only mx-auto mt-2 cursor-pointer text-xs text-[#68564a] sm:not-sr-only sm:block motion-reduce:hidden">
          {paused ? 'Resume testimonials' : 'Pause testimonials'}
        </button>
      </div>
    </section>
  )
}

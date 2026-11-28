import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const questions = [
  ['What topics should I prepare for a full-stack interview?', 'Start with how the browser, API, and database work together. Then review HTML and CSS, JavaScript and asynchronous requests, React state, and backend development with Node.js and MongoDB.'],
  ['How does the mock interview demo work?', 'You’ll get a React debugging prompt and a follow-up question. You can type your answer or practice aloud, then compare your reasoning with the example feedback.'],
  ['Where should I start if I’m new to full-stack development?', 'Start with the first curriculum module and trace a request from the browser to the server. Then practice HTML, CSS, and JavaScript before moving into React and backend APIs.'],
  ['Which projects can I discuss in an interview?', 'The Projects section includes a responsive portfolio, a React search dashboard, and API and database exercises. Pick a project you can explain end to end, including one trade-off and how you tested it.'],
  ['Does completing the mock interview earn a certificate?', 'The mock interview is a practice exercise. AntIntern certificates have separate course, internship, or performance requirements. See the Certificates section for the official eligibility details.'],
]

export default function FullStackFaq({ entries = questions, trackTitle = 'Full Stack' }) {
  const heading = useRef(null)

  useLayoutEffect(() => {
    const element = heading.current
    const motion = gsap.matchMedia(element)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(element, {
        opacity: 0,
        y: 24,
        duration: 0.65,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: element, start: 'top 92%', once: true },
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <section id="faq" aria-labelledby="full-stack-faq-title" className="border-t border-[#eee5dc] bg-white">
      <div className="page-width max-w-4xl py-12 sm:py-16">
        <div ref={heading} className="text-center">
          <h2 id="full-stack-faq-title" className="text-[clamp(2rem,3.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">
            Frequently asked <span className="brand-gradient-text">questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[#614e44]">
            What to expect from the {trackTitle} interview track and how to get started.
          </p>
        </div>
        <div className="mt-7 grid gap-2.5">
          {entries.map(([question, answer]) => (
            <details key={question} name="full-stack-faq" className="group overflow-hidden rounded-xl border border-[#eaded5] bg-white open:bg-[#fffaf6]">
              <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-bold hover:bg-[#fff4ea] focus-visible:outline-offset-[-3px] sm:px-5 [&::-webkit-details-marker]:hidden">
                {question}
                <span className="shrink-0 text-xl text-[#a34421] group-open:hidden" aria-hidden="true">+</span>
                <span className="hidden shrink-0 text-xl text-[#a34421] group-open:block" aria-hidden="true">−</span>
              </summary>
              <p className="border-t border-[#efe3d9] px-4 py-3.5 leading-relaxed text-[#614e44] sm:px-5">{answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#eaded5] bg-[#fffaf6] p-5 shadow-[0_3px_0_#f0e6dd,0_12px_24px_#4028140c] sm:px-6">
          <div>
            <h3 className="text-lg font-extrabold">Still have questions?</h3>
            <p className="mt-1 text-sm text-[#614e44]">Ask the AntIntern team about interview practice or the {trackTitle} track.</p>
          </div>
          <a href={`mailto:support@antintern.com?subject=${encodeURIComponent(trackTitle + ' Interview Track')}`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#a34421] px-4 text-sm font-bold text-white hover:bg-[#873a1f]">
            Contact support <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

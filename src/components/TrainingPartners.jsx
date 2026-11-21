import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import nsdc from '../assets/training-partners/nsdc.png'
import skillIndia from '../assets/training-partners/skill.png'
import alcheringa from '../assets/training-partners/alcheringa.png'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  ['National Skill Development Corporation', nsdc],
  ['Skill India', skillIndia],
  ['IIT Guwahati Alcheringa 2026', alcheringa],
]

export default function TrainingPartners() {
  const heading = useRef(null)

  useLayoutEffect(() => {
    const element = heading.current
    const motion = gsap.matchMedia(element)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const rise = gsap.from(element, {
        paused: true,
        opacity: 0,
        y: 36,
        duration: 0.72,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      })
      ScrollTrigger.create({
        trigger: element.parentElement,
        start: 'top 82%',
        end: 'bottom 15%',
        onEnter: () => rise.restart(),
        onEnterBack: () => rise.restart(),
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <section id="training-partners" aria-labelledby="training-partners-title" className="border-t border-[#eee5dc] bg-white">
      <div className="page-width max-w-[84rem] py-12 text-center sm:py-16">
        <div>
          <h2 ref={heading} id="training-partners-title" className="text-[clamp(2rem,3.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">
            Training <span className="brand-gradient-text">Partners</span>
          </h2>
        </div>
        <div className="company-marquee mt-6 py-3">
          <div className="company-marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 || undefined} className={copy === 1 ? 'company-marquee-copy' : undefined}>
                {[...partners, ...partners].map(([name, logo], index) => {
                  const duplicate = copy === 1 || index >= partners.length
                  return (
                    <li key={index} aria-hidden={duplicate || undefined} className={`px-2 ${duplicate ? 'motion-reduce:hidden!' : ''}`}>
                      <div className="grid h-24 w-full place-items-center rounded-2xl border border-[#f0d2bd] bg-white px-3 shadow-[0_5px_18px_#a65b3012] sm:h-28 sm:px-5">
                        <img src={logo} alt={duplicate ? '' : name} decoding="async" className="h-14 w-full max-w-40 object-contain sm:h-16" />
                      </div>
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

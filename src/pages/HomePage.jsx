import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteHeader from '../components/SiteHeader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import ProgramSections, { LearnerStories } from '../components/ProgramSections.jsx'
import CompanyMarquee from '../components/CompanyMarquee.jsx'
import interviewPhoto from '../assets/interview.webp'
import HeroIllustration from '../components/HeroIllustration.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import InterviewDemo from '../components/InterviewDemo.jsx'
import teamDebriefPhoto from '../assets/team-debrief.webp'
import hiringDebriefVideo from '../assets/hiring-debrief.mp4'


gsap.registerPlugin(ScrollTrigger)

const heroStats = [
  ['Learners', '10,000+'],
  ['Interview Rounds', '500+'],
  ['Success Rate', '95%'],
  ['Hiring Partners', '50+'],
]

export default function HomePage() {
  const page = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia(page.current)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (!window.location.hash || window.location.hash === '#top') {
        gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'opacity,transform' } })
          .from('[data-home-hero-badge]', { opacity: 0, y: 8, duration: 0.4 })
          .from('[data-hero-line]', { opacity: 0, y: 24, duration: 0.65, stagger: 0.12 }, 0.12)
          .from('[data-hero-copy]', { opacity: 0, y: 14, duration: 0.55 }, 0.45)
          .from('[data-hero-actions]', { opacity: 0, y: 10, duration: 0.5 }, 0.6)
          .from('[data-home-hero-art]', { opacity: 0, scale: 0.94, y: 12, duration: 0.85 }, 0.28)
      }

      const stats = page.current.querySelector('[data-hero-stats]')
      const statValues = Array.from(stats.querySelectorAll('[data-stat-value]'))
      const formatter = new Intl.NumberFormat('en-US')
      const statEntrance = gsap.timeline({
        scrollTrigger: { trigger: stats, start: 'top 88%', once: true },
      })

      statEntrance.from(stats.children, {
        opacity: 0, y: 26, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        clearProps: 'opacity,transform',
      }, 0)

      statValues.forEach((element, index) => {
        const final = element.dataset.statValue
        const total = Number(final.replace(/\D/g, ''))
        const suffix = final.slice(-1)
        const counter = { value: 0 }
        statEntrance.to(counter, {
          value: total,
          duration: 1.2,
          ease: 'power2.out',
          onStart: () => { element.textContent = '0' + suffix },
          onUpdate: () => { element.textContent = formatter.format(Math.round(counter.value)) + suffix },
        }, index * 0.1)
      })

      const hiring = page.current.querySelector('[data-hiring-entrance]')
      const hiringCopy = hiring.querySelector('[data-hiring-copy]')
      const hiringFigure = hiring.querySelector('figure')
      const video = hiringFigure.querySelector('video')
      const copyEntrance = gsap.from(hiringCopy.children, {
        paused: true, opacity: 0, y: 48, duration: 0.75, stagger: 0.13, ease: 'power3.out',
        clearProps: 'opacity,transform',
      })
      const videoEntrance = gsap.timeline({ paused: true, defaults: { ease: 'sine.inOut' } })
        .fromTo(video, { scale: 1 }, { scale: 1.15, duration: 0.7 })
        .to(video, { scale: 1, duration: 0.9, clearProps: 'transform' })

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === hiringCopy) {
            if (isIntersecting) copyEntrance.restart()
          } else if (isIntersecting) {
            videoEntrance.restart()
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      }, { threshold: 0.25 })
      observer.observe(hiringCopy)
      observer.observe(hiringFigure)

      gsap.utils.toArray('[data-pricing-rise]', page.current).forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 48,
          duration: 0.8,
          delay: index < 2 ? 0 : (index - 1) * 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: element, start: 'top 87%', once: true },
        })
      })

      gsap.utils.toArray('[data-image-reveal]', page.current).forEach((frame) => {
        gsap.timeline({
          defaults: { ease: 'power3.out', duration: 0.9 },
          scrollTrigger: { trigger: frame, start: 'top 87%', once: true },
        })
          .from(frame, { clipPath: 'inset(8% 5% 8% 5% round 0.75rem)', opacity: 0.35 })
          .from(frame.querySelector('img'), {
            scale: 1.1,
            ...(frame.closest('[data-depth-sections]') && { rotationY: -8, transformPerspective: 1000 }),
            clearProps: 'transform',
          }, 0)
      })

      gsap.utils.toArray('[data-scroll-reveal]', page.current)
        .filter((element) => !element.closest('[data-depth-sections]'))
        .forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 24,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          })
        })

      gsap.utils.toArray('[data-depth-sections] [data-scroll-reveal], [data-footer-reveal]', page.current)
        .forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 32,
            rotationX: 10,
            scale: 0.98,
            transformPerspective: 900,
            transformOrigin: 'center top',
            duration: 0.82,
            delay: Math.min(2, Array.from(element.parentElement.children).indexOf(element)) * 0.07,
            ease: 'power3.out',
            clearProps: 'opacity,transform,transformOrigin',
            scrollTrigger: { trigger: element, start: 'top 89%', once: true },
          })
        })

      const faq = page.current.querySelector('#faq')
      gsap.fromTo(faq.querySelector('[data-faq-content]'), { y: 40 }, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: faq,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.from(faq.querySelector('[data-faq-intro]'), {
        y: 96,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: faq,
          start: 'top bottom',
          end: 'top 50%',
          scrub: true,
        },
      })

      return () => {
        observer.disconnect()
        video.pause()
        statValues.forEach((element) => { element.textContent = element.dataset.statValue })
      }
    })

    return () => media.revert()
  }, [])

  return (
    <div ref={page} id="top" className="min-h-screen bg-white text-[#17130f] antialiased">
      <SiteHeader />

      <main>
        <div className="hero-transition">
          <section aria-labelledby="hero-title" className="page-width grid items-center gap-8 py-10 text-[#0c1c34] sm:gap-10 sm:py-14 lg:min-h-[clamp(39rem,calc(100svh-5rem),48rem)] lg:grid-cols-[0.98fr_1.02fr] lg:gap-10 lg:pt-14 lg:pb-20">
            <div>
              <p data-home-hero-badge className="inline-flex items-center gap-2 rounded-full border border-[#ffd7bc] bg-[#fff0e4] px-3 py-2 text-sm font-bold text-[#b53905] sm:px-4">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#e95305]"></span>
                AntIntern
              </p>

              <h1 id="hero-title" className="mt-6 text-[clamp(2.35rem,4.05vw,5.1rem)] leading-[1.04] font-extrabold tracking-[-0.055em]">
                <span className="-mb-[0.13em] block overflow-hidden pb-[0.13em]">
                  <span data-hero-line className="block">Learn. Practice.</span>
                </span>{' '}
                <span className="-mb-[0.13em] block overflow-hidden pb-[0.13em]">
                  <span data-hero-line className="block brand-gradient-text">Crack Real Interviews.</span>
                </span>
              </h1>

              <p data-hero-copy className="mt-5 max-w-[42ch] text-base leading-relaxed text-[#4b5a70] sm:text-lg lg:text-xl">
                Build in-demand skills, practice with real interview rounds, and get ready for opportunities at leading companies.
              </p>

              <div data-hero-actions className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <a className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-linear-to-r from-[#c74b04] to-[#bf3600] px-5 py-3 font-bold text-white transition-colors hover:from-[#a83e02] hover:to-[#a62f00] motion-reduce:transition-none" href="/signup">
                  Start Free Account <span aria-hidden="true">→</span>
                </a>
                <InterviewDemo />
              </div>

              <dl data-hero-stats className="mt-8 grid max-w-[40rem] grid-cols-2 gap-x-3 gap-y-4 sm:mt-10 sm:grid-cols-4">
                {heroStats.map(([label, value]) => (
                  <div key={label} className="flex flex-col-reverse border-l border-[#f4be9f] pl-3">
                    <dt className="text-sm text-[#4b5a70]">{label}</dt>
                    <dd className="text-2xl font-extrabold tracking-tight tabular-nums sm:text-[1.65rem]">
                      <span aria-hidden="true" data-stat-value={value}>{value}</span>
                      <span className="sr-only">{value}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div data-home-hero-art className="min-w-0">
              <HeroIllustration />
            </div>
          </section>

          <CompanyMarquee />
        </div>

        <div className="bg-[linear-gradient(180deg,#fffaf2_0%,#fff_34%,#fff7ee_100%)]">
          <section aria-labelledby="platform-title" className="page-width grid items-center gap-9 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[8vw] lg:px-[4.45vw]">
            <div data-scroll-reveal>
              <p className="mb-4 text-sm font-semibold brand-gradient-text">The AntIntern interview platform</p>
              <h2 id="platform-title" className="platform-title max-w-[16ch]">See the skills behind the résumé</h2>
              <p className="mt-5 max-w-[42ch] leading-relaxed text-[#574b43]">
                Give candidates work that reflects the role. Follow their reasoning in live interviews, then use consistent criteria to review the evidence.
              </p>
              <a className="hero-action hero-action-primary mt-7" href="#assessments">Explore assessments <span aria-hidden="true">→</span></a>
            </div>
            <figure data-image-reveal className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#f6e0d2]">
              <img src={interviewPhoto} alt="Professional seated beside a window with a notebook" className="size-full object-cover object-[50%_35%]" loading="lazy" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-tr from-[#ecab8260] to-transparent"></div>
            </figure>
          </section>

          <HowItWorks />

          <div data-depth-sections>
            <LearnerStories />

            <section id="hiring-teams" data-hiring-entrance aria-labelledby="review-title" className="page-width scroll-mt-8 grid items-center gap-8 border-t border-[#eadfd7] py-14 sm:py-20 lg:grid-cols-2 lg:gap-[7vw] lg:px-[4.45vw]">
              <div data-hiring-copy>
                <p className="mb-4 text-xl font-bold brand-gradient-text sm:text-2xl lg:text-3xl">For hiring teams</p>
                <h2 id="review-title" className="platform-title max-w-[17ch]">Make the debrief count</h2>
                <p className="mt-5 max-w-[42ch] leading-relaxed text-[#574b43]">
                  Compare what each candidate built, how they explained their decisions, and where they met the role’s requirements.
                </p>
                <a className="hero-action hero-action-secondary mt-7" href="mailto:support@antintern.com?subject=AntIntern%20technical%20hiring">Contact AntIntern <span aria-hidden="true">↗</span></a>
              </div>
              <figure className="aspect-[4/3] overflow-hidden rounded-xl bg-[#f6e0d2]">
                <video src={hiringDebriefVideo} poster={teamDebriefPhoto} aria-label="Colleagues reviewing documents and discussing work in an office" className="size-full object-cover" muted playsInline loop controls preload="none" />
              </figure>
            </section>
            <ProgramSections />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

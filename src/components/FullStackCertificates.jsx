import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CertificatePreview from './CertificatePreview.jsx'
import certificateQr from '../assets/certificates/persevex-direct-qr.svg'

gsap.registerPlugin(ScrollTrigger)

export const certificates = [
  {
    id: 'course-completion',
    title: 'Course Completion Certificate',
    description: 'Recognizes completion of the Persevex course after you finish the required lessons, assignments, and learning milestones.',
  },
  {
    id: 'internship',
    title: 'Internship Certificate',
    description: 'Recognizes completion of the required internship work, practical activities, and capstone project.',
  },
  {
    id: 'outstanding-performance',
    title: 'Outstanding Performance Certificate',
    description: 'Recognizes consistent, standout work and strong contributions to program projects.',
  },
]

export default function FullStackCertificates({ trackTitle = 'Full Stack', program }) {
  const certificateDetailsUrl = program ? `/certificates?program=${program}` : '/certificates'
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
    <section id="certificates" aria-labelledby="certificates-title" className="border-t border-[#eee5dc] bg-white">
      <div className="page-width max-w-[84rem] py-12 sm:py-16">
        <div ref={heading} className="text-center">
          <h2 id="certificates-title" className="text-[clamp(2rem,3.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">
            {trackTitle} <span className="brand-gradient-text">Certificates</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[60ch] leading-relaxed text-[#614e44]">
            Explore sample certificates for course completion, internship completion, and outstanding performance.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-6">
          {certificates.map(({ id, title }) => (
            <li key={title} className="rounded-2xl border border-[#eaded5] bg-white p-3 shadow-[0_3px_0_#f0e6dd,0_12px_24px_#4028140c] sm:p-4">
              <figure>
                <a href={`${certificateDetailsUrl}#${id}`} aria-label={`View details for the ${title}`} className="group relative grid aspect-[1.42] place-items-center overflow-hidden rounded-lg bg-[#faf7f4] p-1.5">
                  <CertificatePreview title={title} programTitle={program ? trackTitle : undefined} />
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#211b17cc] px-3 text-center text-white opacity-0 transition-opacity group-focus-visible:opacity-100 group-hover:opacity-100 motion-reduce:transition-none pointer-coarse:items-end pointer-coarse:justify-end pointer-coarse:bg-transparent pointer-coarse:p-2 pointer-coarse:opacity-100">
                    <img src={certificateQr} alt="" width="56" height="56" className="size-11 rounded-sm bg-white p-0.5 lg:size-14 pointer-coarse:hidden" />
                    <span className="text-sm font-extrabold lg:text-lg pointer-coarse:hidden">Scan Certificate</span>
                    <span className="rounded-lg bg-[#ad4019] px-3 py-2 text-xs font-bold text-white lg:text-sm">View Details <span aria-hidden="true">→</span></span>
                  </span>
                </a>
                <figcaption className="px-1 pt-4 pb-1 text-center font-bold">{title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-7 text-center">
          <a href={certificateDetailsUrl} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#e7d1c1] px-4 text-sm font-bold text-[#873a1f] hover:bg-[#fff1e6]">
            View certificate details <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

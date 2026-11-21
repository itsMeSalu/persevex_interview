import { useEffect, useState } from 'react'
import CertificatePreview from '../components/CertificatePreview.jsx'
import { certificates } from '../components/FullStackCertificates.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import logo from '../assets/antintern-logo.svg'

const contactUrl = 'mailto:support@persevex.com?subject=Certificate%20eligibility'

const programDetails = {
  'logistics-supply-chain': ['Logistics & Supply Chain Management', 'Logistics & Supply Chain'],
  'stock-market-crypto': ['Stock Market & Cryptocurrency', 'Stock Market & Crypto'],
  finance: ['Finance', 'Finance'],
  'human-resource': ['Modern Human Resources', 'Human Resources'],
  'digital-marketing': ['Digital Marketing', 'Digital Marketing'],
  'cloud-computing': ['Cloud Computing', 'Cloud Computing'],
  'machine-learning': ['Machine Learning', 'Machine Learning'],
  'artificial-intelligence': ['Artificial Intelligence', 'Artificial Intelligence'],
  'data-science': ['Data Science', 'Data Science'],
  cybersecurity: ['Cybersecurity', 'Cybersecurity'],
  'ui-ux-design': ['UI/UX Design', 'UI/UX Design'],
  'java-development': ['Java Development', 'Java Development'],
  'android-development': ['Android Development', 'Android Development'],
  'data-analytics': ['Data Analytics', 'Data Analytics'],
  autocad: ['AutoCAD: 2D & 3D Design', 'AutoCAD'],
  'drone-mechanics': ['Drone Mechanics & Engineering', 'Drone Mechanics'],
  hev: ['Hybrid Electric Vehicles', 'Hybrid Electric Vehicles', 'hybrid-electric-vehicles'],
  iot: ['Internet of Things (IoT)', 'IoT', 'internet-of-things'],
  'embedded-systems': ['Embedded Systems Design', 'Embedded Systems'],
  'vlsi-design': ['Very Large Scale Integration (VLSI) Design', 'VLSI Design'],
  'web-development': ['Full Stack Web Development', 'Full Stack', 'full-stack-web-development'],
}

export default function CertificateDetailsPage() {
  const requestedProgram = new URLSearchParams(window.location.search).get('program')
  const program = Object.hasOwn(programDetails, requestedProgram) ? requestedProgram : 'web-development'
  const [programTitle, shortTitle, interviewSlug = program] = programDetails[program]
  const returnToTrack = `/interviews/${interviewSlug}#certificates`
  const enrollmentUrl = `https://www.persevex.com/courses/${program}`

  const [selectedId, setSelectedId] = useState(() => window.location.hash.slice(1))
  const selected = certificates.find(({ id }) => id === selectedId) ?? certificates[0]

  useEffect(() => {
    document.title = 'Certificate Details · AntIntern'
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white text-[#281e1a] antialiased">
      <header className="border-b border-[#e9ded3]">
        <nav aria-label="Certificate page" className="page-width flex min-h-18 flex-wrap items-center justify-between gap-3 py-3">
          <a href="/" className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <img src={logo} alt="" width="36" height="36" />
            AntIntern
          </a>
          <a href={returnToTrack} className="nav-link text-sm font-bold text-[#983b17]">← Back to {shortTitle} Interviews</a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="certificate-page-title" className="border-b border-[#eee1d7] bg-white">
          <div className="page-width grid max-w-[76rem] items-center gap-9 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)] lg:gap-14">
            <div>
              <h1 id="certificate-page-title" className="max-w-[16ch] text-[clamp(2.35rem,4.4vw,4.2rem)] leading-[1.08] font-extrabold tracking-[-0.05em]">
                Explore {shortTitle} <span className="brand-gradient-text">certificates.</span>
              </h1>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-[#614e44] sm:text-lg">
                Explore sample certificates for course completion, internship completion, and outstanding performance. Each recognizes a different milestone in the Persevex program.
              </p>
              <CertificateActions enrollmentUrl={enrollmentUrl} />
            </div>
            <div>
              <figure className="rounded-2xl border border-[#eaded5] bg-white p-3 shadow-[0_3px_0_#f0e6dd,0_12px_24px_#4028140c] sm:p-4">
                <CertificatePreview programTitle={programTitle} id="featured-certificate" title={selected.title} />
                <figcaption aria-live="polite" className="pt-3 text-center text-sm font-bold text-[#614e44]">{selected.title}</figcaption>
              </figure>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3" role="group" aria-label="Choose a certificate preview">
                {certificates.map(({ id, title }) => (
                  <button key={id} type="button" aria-label={`Preview ${title}`} aria-pressed={selected.id === id} aria-controls="featured-certificate" onClick={() => setSelectedId(id)} className="rounded-xl border border-[#eaded5] bg-white p-1.5 hover:border-[#bf714f] aria-pressed:border-[#bf714f] aria-pressed:ring-2 aria-pressed:ring-[#f8d5c1] sm:p-2">
                    <CertificatePreview programTitle={programTitle} title={title} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Certificate types" className="page-width max-w-[76rem] py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {certificates.map(({ id, title, description }) => (
              <article key={id} id={id} className="scroll-mt-5 rounded-2xl border border-[#eaded5] p-4 shadow-[0_3px_0_#f0e6dd,0_12px_24px_#4028140c] target:border-[#bf714f] target:bg-[#fffaf6]">
                <CertificatePreview programTitle={programTitle} title={title} />
                <h2 className="mt-4 text-lg font-extrabold tracking-tight">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#614e44]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="certificate-process-title" className="border-y border-[#eee5dc] bg-[#fffdfb]">
          <div className="page-width grid max-w-[76rem] gap-6 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
            <div>
              <p className="mb-2 text-sm font-bold text-[#a34421]">How it works</p>
              <h2 id="certificate-process-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Learn, complete, <span className="brand-gradient-text">get certified.</span>
              </h2>
            </div>
            <ul className="grid gap-3">
              {[
                'Finish the required lessons and assignments in your Persevex program.',
                'Complete the practical work and projects required for your certificate.',
                'Use the QR code on your issued certificate to access its digital details.',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 rounded-xl border border-[#eaded5] bg-white p-4 text-[#614e44]">
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ffede0] text-sm font-bold text-[#983b17]">✓</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="certificate-enrollment-title" className="bg-white">
          <div className="page-width max-w-[76rem] py-12 text-center sm:py-16">
            <h2 id="certificate-enrollment-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to earn your <span className="brand-gradient-text">certificate?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[57ch] leading-relaxed text-[#614e44]">
              Explore the Persevex {programTitle} program or talk to the team about enrollment and certificate eligibility.
            </p>
            <CertificateActions centered enrollmentUrl={enrollmentUrl} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function CertificateActions({ centered = false, enrollmentUrl }) {
  return (
    <div className={`mt-7 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
      <a href={enrollmentUrl} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#a34421] px-5 text-sm font-bold text-white hover:bg-[#873a1f]">
        View enrollment <span aria-hidden="true">↗</span>
      </a>
      <a href={contactUrl} className="inline-flex min-h-12 items-center rounded-xl border border-[#e3cbb9] bg-white px-5 text-sm font-bold text-[#873a1f] hover:bg-[#fff2e7]">Talk to an expert</a>
    </div>
  )
}

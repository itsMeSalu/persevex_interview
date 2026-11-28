


const plans = [
  {
    name: 'Foundation', price: '₹6,999', credits: 150, sessionCost: 7,
    summary: 'Build confidence with structured interview practice.',
    features: ['Technical and aptitude interview practice', 'Interview reports and progress tracking', 'Coding problems and company preparation', 'Portfolio and AI mentor access'],
    note: 'For building a consistent interview preparation routine.',
  },
  {
    name: 'Advanced', price: '₹8,999', credits: 300, sessionCost: 5, badge: 'Popular',
    summary: 'Go further with more practice and detailed feedback.',
    features: ['Technical and aptitude interview practice', 'Detailed interview reports and progress tracking', 'Premium coding problems and company access', 'Portfolio and personalized AI mentor access'],
    note: 'For frequent practice and deeper interview preparation.',
  },
]

const questions = [
  {
    title: 'How do interview credits work?',
    answer: 'Foundation includes 150 credits and uses 7 per interview. Advanced includes 300 credits and uses 5 per interview.',
  },
  {
    title: 'How can I prepare for a technical interview?',
    answer: 'Use the interview practice platform to work through role-relevant questions and rehearse explaining your reasoning out loud.',
    link: { href: '#preparation', label: 'Explore interview preparation' },
  },
  {
    title: 'How can AntIntern help our hiring team?',
    answer: 'Use technical interviews and practical coding assessments to see how candidates approach the work. Bring assessment results and interview notes together during the hiring debrief.',
    link: { href: '#hiring', label: 'Explore technical hiring' },
  },
  {
    title: 'Who can help me choose a program?',
    answer: 'Tell the AntIntern team what role you’re working toward and what kind of support you need.',
    link: { href: 'mailto:support@antintern.com?subject=AntIntern%20program%20question', label: 'Contact AntIntern' },
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
              Choose the interview preparation plan that fits your goals. Both plans include interview credits.
            </p>
          </header>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {plans.map(({ name, price, summary, credits, sessionCost, features, note, badge }) => (
              <article key={name} data-pricing-rise className="flex flex-col rounded-2xl border border-[#d9b59f] bg-[radial-gradient(ellipse_at_top_right,#f2c8ac_0%,#fff_55%)] p-6 shadow-[0_12px_35px_#7e44200a] sm:p-8">
                <div className="mb-7 flex min-h-8 items-center justify-end">
                  {badge && <span className="rounded bg-[#66351f] px-3 py-2 text-xs font-semibold text-white">Most popular</span>}
                </div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{name}</h3>
                <p className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl">{price}</p>
                <p className="mt-2 text-xs text-[#68564a]">one-time payment</p>
                <p className="mt-5 text-base leading-relaxed text-[#68564a]">{summary}</p>
                <ul className="mt-6 space-y-4 border-t border-[#dbc4b5] pt-6 text-sm leading-relaxed text-[#574b43] sm:text-base">
                  {[credits + ' interview credits included', sessionCost + ' credits per interview session', ...features].map((feature) => (
                    <li key={feature} className="flex gap-3"><span aria-hidden="true" className="font-semibold text-[#a44320]">✓</span>{feature}</li>
                  ))}
                </ul>
                <p className="mt-5 mb-6 text-xs leading-relaxed text-[#68564a]">{note}</p>
                <a className="mt-auto flex min-h-12 items-center justify-center bg-[#66351f] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#492615]" href="https://www.antintern.com/">
                  {'View ' + name + ' on AntIntern'}
                </a>
              </article>
            ))}
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
              Find answers about interview credits, technical practice, and how AntIntern helps hiring teams assess candidates.
            </p>
          </header>

          <div className="divide-y divide-[#eadfd7] border-y border-[#eadfd7]">
            {questions.map(({ title, answer, link }, index) => (
              <details key={title} name="antintern-faq" open={index === 0} className="group">
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
  return (
    <section aria-labelledby="testimonials-title" className="border-t border-[#eadfd7] bg-[#fffaf5] py-14 text-center">
      <div className="page-width">
        <h2 id="testimonials-title" className="text-3xl font-extrabold">Learner experiences</h2>
        <p className="mt-4 text-[#706056]">Learner reviews will be shared here when available.</p>
        <a href="/reviews" className="mt-5 inline-block font-semibold text-[#fa7405]">Visit reviews →</a>
      </div>
    </section>
  )
}

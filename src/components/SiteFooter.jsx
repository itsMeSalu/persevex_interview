import logo from '../assets/antintern-logo.svg'

const site = 'https://www.antintern.com'
const support = 'mailto:support@antintern.com'

const groups = [
  ['Product', [
    ['Problems', '/problems'],
    ['Prepare', '/prepare'],
    ['Interview', '/interview'],
    ['InternLab', '/internship'],
    ['Profile & Portfolio', '/profile'],
  ]],
  ['Company', [
    ['Community', '/community'],
    ['Leaderboard', '/leaderboard'],
    ['Journal', '/journal'],
    ['Internship', '/internship'],
    ['Contact', support],
  ]],
  ['Legal', [
    ['Terms of Service', '/terms-of-service'],
    ['Privacy Policy', '/privacy-policy'],
    ['Cookie Policy', '/cookie-policy'],
  ]],
]

export default function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-[#eadfd7] bg-white">
      <div className="page-width pt-12 sm:pt-16 lg:px-[4.45vw]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-[6vw]">
          <div data-footer-reveal>
            <a href="#top" className="inline-flex items-center gap-2 rounded-sm text-xl font-extrabold tracking-tight">
              <img src={logo} alt="" width="30" height="30" />
              AntIntern
            </a>
            <p className="mt-4 text-xl font-semibold tracking-tight">Practice daily. Prepare deeply. Prove it publicly.</p>
            <p className="mt-3 max-w-[35ch] text-sm leading-relaxed text-[#574b43]">
              Follow updates to Problems, Prepare, Interview, InternLab, and Dynamic Portfolio.
            </p>
            <a className="hero-action hero-action-secondary mt-5" href={support + '?subject=AntIntern%20product%20updates&body=Please%20add%20me%20to%20AntIntern%20product%20updates.'}>
              Request updates by email <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-7 sm:grid-cols-3">
            {groups.map(([heading, links]) => (
              <div key={heading} data-footer-reveal>
                <h2 className="mb-4 text-sm font-semibold">{heading}</h2>
                <ul className="space-y-3 text-sm text-[#574b43]">
                  {links.map(([label, path]) => (
                    <li key={label}><a className="nav-link rounded-sm" href={path.startsWith('/') ? site + path : path}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#8c4b2e30] py-5 text-sm text-[#574b43]">
          <p>© {new Date().getFullYear()} AntIntern. All rights reserved.</p>
          <a className="nav-link rounded-sm break-all" href={support}>support@antintern.com</a>
        </div>
      </div>
    </footer>
  )
}

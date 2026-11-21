import { useEffect, useRef, useState } from 'react'

const catalog = 'https://www.persevex.com'
const interviewPages = {
  'web-development': '/interviews/full-stack-web-development',
  'cloud-computing': '/interviews/cloud-computing',
  'machine-learning': '/interviews/machine-learning',
  'artificial-intelligence': '/interviews/artificial-intelligence',
  'data-science': '/interviews/data-science',
  cybersecurity: '/interviews/cybersecurity',
  'ui-ux-design': '/interviews/ui-ux-design',
  'java-development': '/interviews/java-development',
  'android-development': '/interviews/android-development',
  'data-analytics': '/interviews/data-analytics',
  'business-analytics': '/interviews/business-analytics',
  'business-law': '/interviews/business-law',
  psychology: '/interviews/psychology',
  'medical-coding': '/interviews/medical-coding',
  autocad: '/interviews/autocad',
  'drone-mechanics': '/interviews/drone-mechanics',
  hev: '/interviews/hybrid-electric-vehicles',
  iot: '/interviews/internet-of-things',
  'embedded-systems': '/interviews/embedded-systems',
  'vlsi-design': '/interviews/vlsi-design',
  'digital-marketing': '/interviews/digital-marketing',
  'human-resource': '/interviews/human-resource',
  finance: '/interviews/finance',
  'logistics-supply-chain': '/interviews/logistics-supply-chain',
  'stock-market-crypto': '/interviews/stock-market-crypto',
}
const departments = [
  ['CSE / IT', [
    ['Full Stack Web Development', 'web-development', 'Practice full-stack interview questions on React, APIs, and system design.'],
    ['Cloud Computing', 'cloud-computing', 'Practice cloud architecture, deployment, and reliability interview questions.'],
    ['Machine Learning', 'machine-learning', 'Practice data preparation, model evaluation, and MLOps interview questions.'],
    ['Artificial Intelligence', 'artificial-intelligence', 'Practice AI fundamentals, language models, and deployment interview questions.'],
    ['Data Science', 'data-science', 'Practice SQL, statistics, and experiment analysis for data science interviews.'],
    ['Cyber Security', 'cybersecurity', 'Practice risk assessment, defensive controls, and incident triage.'],
    ['UI/UX Design', 'ui-ux-design', 'Practice user research, design decisions, and portfolio walkthroughs.'],
    ['Java Development', 'java-development', 'Practice core Java, object-oriented design, Spring Boot, and REST API interviews.'],
    ['Android Development', 'android-development', 'Practice Kotlin, app lifecycle, and offline-first design interviews.'],
    ['Data Analytics', 'data-analytics', 'Turn raw data into reports with SQL and Power BI.'],
  ]],
  ['Civil', [['AutoCAD for Civil Design', 'autocad']]],
  ['Mechanical', [
    ['AutoCAD: 2D & 3D Design', 'autocad'],
    ['Drone Mechanics & Engineering', 'drone-mechanics'],
    ['Hybrid Electric Vehicles', 'hev'],
  ]],
  ['Electronics and Electrical', [
    ['Internet of Things (IoT)', 'iot'],
    ['Embedded Systems Design', 'embedded-systems'],
    ['VLSI Design', 'vlsi-design'],
  ]],
  ['Management and Commerce', [
    ['Digital Marketing Strategy', 'digital-marketing'],
    ['Modern Human Resources', 'human-resource'],
    ['Finance', 'finance'],
    ['Stock Market & Cryptocurrency', 'stock-market-crypto'],
    ['Logistics & Supply Chain Management', 'logistics-supply-chain'],
    ['Business Analytics', 'business-analytics'],
    ['Business Law', 'business-law'],
  ]],
  ['Healthcare Administration and Management', [
    ['Psychology', 'psychology'],
    ['Medical Coding', 'medical-coding'],
  ]],
]

const tracks = [
  'Internship Program',
  'Placement Provision Program',
]

const placementDepartment = 'Job Guarantee Programs'
const placementCourses = [
  ['Fullstack Development', 'web-development'],
  ['Human Resources', 'human-resource'],
  ['Digital Marketing', 'digital-marketing'],
].map(([title, slug]) => ({
  title,
  department: placementDepartment,
  href: catalog + '/courses/' + slug,
}))

const courses = departments.flatMap(([department, entries]) =>
  entries.map(([title, slug, description]) => ({
    title,
    department,
    description,
    href: interviewPages[slug] ?? catalog + '/courses/' + slug,
  })),
)

export default function ProgramsMenu({ onFollow, onClose }) {
  const [track, setTrack] = useState(0)
  const [department, setDepartment] = useState(departments[0][0])
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  useEffect(() => {
    function focusSearch(event) {
      if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return
      if (event.target.closest('input, textarea, select, [contenteditable]')) return
      event.preventDefault()
      searchInput.current?.focus()
    }

    document.addEventListener('keydown', focusSearch)
    return () => document.removeEventListener('keydown', focusSearch)
  }, [])

  const query = search.trim().toLowerCase()
  const activeDepartment = track === 0 ? department : placementDepartment
  const visibleDepartments = track === 0 ? departments : [[placementDepartment, placementCourses]]
  const results = query
    ? [...courses, ...placementCourses].filter(({ title, department, description }) =>
        [title, department, description].filter(Boolean).join(' ').toLowerCase().includes(query),
      )
    : track === 0 ? courses.filter((course) => course.department === department) : placementCourses

  return (
    <section id="nav-programs" aria-labelledby="programs-menu-title" className="mt-1 max-h-[65svh] overflow-auto overscroll-contain rounded-2xl border border-[#e8ddd3] bg-white text-[#19283e] min-[1160px]:absolute min-[1160px]:left-1/2 min-[1160px]:w-[min(83.333vw,75rem)] min-[1160px]:-translate-x-1/2 min-[1160px]:top-[calc(100%-1.25rem)] min-[1160px]:max-h-[calc(100svh-5rem)] min-[1160px]:shadow-[0_24px_60px_#19283e29]">
      <div className="grid min-[1160px]:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] min-[1160px]:min-h-[36rem]">
        <div className="flex flex-col border-b border-[#eee6df] bg-[linear-gradient(155deg,#fff2e5,#fffbf7)] p-4 sm:p-6 min-[1160px]:border-r min-[1160px]:border-b-0">
          <h2 id="programs-menu-title" className="text-xl font-extrabold tracking-tight">Explore Programs</h2>
          <p className="mt-2 text-[#655449]">Choose your learning path</p>
          <div className="mt-5 flex flex-col gap-3 min-[1160px]:mt-7">
            {tracks.map((label, index) => (
              <button
                key={label}
                type="button"
                aria-pressed={!query && track === index}
                onClick={() => {
                  setTrack(index)
                  setSearch('')
                }}
                className="group flex min-h-18 items-center gap-3 rounded-2xl border border-[#eadfd7] bg-white p-3 text-left font-bold hover:border-[#e3ad8d] aria-pressed:border-[#8b7062] aria-pressed:bg-[#80665a] aria-pressed:text-white"
              >
                <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f6efe9] text-[#57463e] group-aria-pressed:bg-[#6e574c] group-aria-pressed:text-[#ffe0c4]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {index === 0 ? <path d="M4 7h16v13H4zM9 7V4h6v3M4 12a19 19 0 0 0 16 0M12 12v3" /> : <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-4M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5-8a4 4 0 0 1 0 8" />}
                  </svg>
                </span>
                <span className="flex-1">
                  {index === 0 ? label : <>Placement Provision<br />Program</>}
                  <span className="mt-1 block text-xs font-medium">{index === 0 ? courses.length : placementCourses.length} programs</span>
                </span>
                <span aria-hidden="true" className="text-xl text-[#68554a] group-aria-pressed:text-[#ffe0c4]">›</span>
              </button>
            ))}
          </div>
          <div className="mt-auto pt-5">
            <a href={catalog + '/explore-courses'} onClick={onFollow} className="flex items-center justify-between gap-2 rounded-2xl bg-[#ffe9d9] p-3 font-bold text-[#963b15] hover:bg-[#ffddc5]">
              <span>Not sure?<span className="mt-1 block text-xs font-medium">Explore all programs</span></span>
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-white">→</span>
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-col p-4 sm:p-6">
          <div className="mb-5 flex min-h-12 items-center gap-3 rounded-xl border border-[#eadfd7] bg-[#fdfbf9] px-3 focus-within:border-[#b8562b] sm:px-4">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="shrink-0 text-[#963b15]"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg>
            <label className="sr-only" htmlFor="program-search">Search programs</label>
            <input
              id="program-search"
              ref={searchInput}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search courses, skills or departments..."
              className="min-h-11 min-w-0 flex-1 bg-transparent text-base placeholder:text-[#655d56] focus:outline-none"
            />
            <span className="hidden shrink-0 text-xs text-[#655449] min-[1160px]:inline">Press / to search</span>
            <button type="button" onClick={onClose} aria-label="Close Programs" className="grid size-9 shrink-0 place-items-center rounded-lg text-xl text-[#574b43] hover:bg-[#fff2e7]">×</button>
          </div>

          <div className={!query ? 'grid flex-1 gap-5 min-[1160px]:grid-cols-[minmax(0,2.04fr)_minmax(0,1fr)]' : ''}>
            {!query && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold">Browse by Department</h3>
                  <a href={catalog + '/explore-courses'} onClick={onFollow} className="text-xs font-bold text-[#963b15] hover:underline">View All Departments <span aria-hidden="true">→</span></a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {visibleDepartments.map(([name, entries]) => (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={activeDepartment === name}
                      onClick={() => { if (track === 0) setDepartment(name) }}
                      className="flex min-h-20 items-center justify-between gap-2 rounded-xl border border-[#eadfd7] px-3 py-2 text-left font-semibold hover:border-[#cf8663] aria-pressed:border-[#d29679] aria-pressed:bg-[#fff2e7] aria-pressed:text-[#963b15] sm:px-4"
                    >
                      <span>{name}<span className="mt-1 block text-xs font-medium text-[#655449]">{entries.length} programs</span></span>
                      <span aria-hidden="true" className="text-lg text-[#963b15]">›</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={`min-w-0 ${!query ? 'border-t border-[#eee6df] pt-4 min-[1160px]:border-t-0 min-[1160px]:border-l min-[1160px]:pt-0 min-[1160px]:pl-5' : ''}`}>
              <h3 className="mb-2 font-bold" aria-live="polite">
                {query ? `${results.length} search ${results.length === 1 ? 'result' : 'results'}` : `Courses in ${activeDepartment}`}
              </h3>
              {results.length === 0 && <p className="py-3 text-[#574b43]">Try a different course or department name.</p>}
              {!query && <p className="mb-2 text-xs text-[#655449]">{tracks[track]}</p>}
              <ul className="min-[1160px]:max-h-[26rem] min-[1160px]:overflow-auto min-[1160px]:overscroll-contain">
                {results.map(({ title, department: courseDepartment, description, href }) => (
                  <li key={title}>
                    <a href={href} onClick={onFollow} className="flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 py-2.5 hover:bg-[#fff5ed] focus-visible:outline-offset-[-2px]">
                      <span>
                        <span className="block font-semibold">{title}</span>
                        {(description || (query && courseDepartment)) && <span className="mt-0.5 block text-xs leading-relaxed text-[#574b43]">{description || courseDepartment}</span>}
                      </span>
                      <span aria-hidden="true" className="text-[#963b15]">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

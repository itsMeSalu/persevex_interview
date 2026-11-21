import { useEffect, useRef, useState } from 'react'
import logo from '../assets/antintern-logo.svg'
import ProgramsMenu from './ProgramsMenu.jsx'

const site = 'https://www.antintern.com'
const support = 'mailto:support@antintern.com'

const navigation = [
  { label: 'Programs' },
  { label: 'Campus Ambassador', href: support + '?subject=Campus%20Ambassador%20Program' },
  { label: 'Support', href: support },
  { label: 'Features', href: '#platform-title' },
  { label: 'Interview', href: '#interviews' },
  { label: 'Reviews', href: '#testimonials-title' },
  { label: 'Blogs', href: site + '/journal' },
  { label: 'Careers', href: support + '?subject=Careers%20at%20AntIntern' },
  { label: 'Offerings', links: [
    ['Assessments', '#assessments'],
    ['Pricing', '#pricing'],
    ['For hiring teams', '#hiring-teams'],
  ] },
]

const navItem = 'flex min-h-11 items-center gap-2 rounded-lg px-2.5 font-semibold whitespace-nowrap hover:bg-[#fff2e7] hover:text-[#963b15] focus-visible:outline-offset-2'

export default function SiteHeader() {
  const navRef = useRef(null)
  const programsButton = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [programsHovered, setProgramsHovered] = useState(false)
  const programsOpen = openDropdown === 'Programs' || programsHovered

  useEffect(() => {
    function handleOutsidePress(event) {
      if (navRef.current?.contains(event.target)) return
      setMobileOpen(false)
      setOpenDropdown(null)
      setProgramsHovered(false)
    }

    document.addEventListener('pointerdown', handleOutsidePress)
    return () => document.removeEventListener('pointerdown', handleOutsidePress)
  }, [])

  function closeNavigation() {
    setMobileOpen(false)
    setOpenDropdown(null)
    setProgramsHovered(false)
  }

  function closePrograms() {
    programsButton.current?.focus()
    setOpenDropdown(null)
    setProgramsHovered(false)
  }

  function handleEscape(event) {
    if (event.key !== 'Escape') return

    if (programsOpen) {
      closePrograms()
    } else if (openDropdown) {
      event.currentTarget.querySelector('[data-dropdown][aria-expanded="true"]')?.focus()
      setOpenDropdown(null)
    } else if (mobileOpen) {
      event.currentTarget.querySelector('[aria-controls="main-nav-links"]')?.focus()
      setMobileOpen(false)
    }
  }

  return (
    <header className="relative z-30 border-b border-[#e6edf5] bg-white text-[#19283e]">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="page-width relative flex min-h-18 flex-wrap items-center justify-between gap-x-5 py-2"
        onKeyDown={handleEscape}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) closeNavigation()
        }}
      >
        <a href="#top" onClick={closeNavigation} className="inline-flex shrink-0 items-center gap-2.5 rounded-sm text-2xl leading-none font-extrabold tracking-tight">
          <img src={logo} alt="" width="36" height="36" className="size-9" />
          AntIntern
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="main-nav-links"
          onClick={() => {
            setMobileOpen(!mobileOpen)
            setOpenDropdown(null)
            setProgramsHovered(false)
          }}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-[#dce5ef] hover:bg-[#f2f6fc] min-[1160px]:hidden"
        >
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d={mobileOpen ? 'M5 5l10 10M15 5L5 15' : 'M3 5h14M3 10h14M3 15h14'} />
          </svg>
        </button>

        <ul id="main-nav-links" className={`${mobileOpen ? 'flex' : 'hidden'} w-full flex-col gap-0.5 border-t border-[#e6edf5] pt-2 text-sm min-[1160px]:flex min-[1160px]:w-auto min-[1160px]:flex-row min-[1160px]:items-center min-[1160px]:border-0 min-[1160px]:pt-0`}>
          {navigation.map(({ label, href, links }) => {
            if (label === 'Programs') {
              return (
                <li
                  key={label}
                  onPointerLeave={() => {
                    if (!document.getElementById('nav-programs')?.contains(document.activeElement)) {
                      setProgramsHovered(false)
                    }
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setProgramsHovered(false)
                      setOpenDropdown((current) => current === 'Programs' ? null : current)
                    }
                  }}
                >
                  <button
                    ref={programsButton}
                    type="button"
                    aria-expanded={programsOpen}
                    aria-controls="nav-programs"
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 1160px)').matches) {
                        setProgramsHovered(true)
                        setOpenDropdown((current) => current === 'Programs' ? current : null)
                      }
                    }}
                    onClick={() => {
                      setProgramsHovered(false)
                      setOpenDropdown(openDropdown === 'Programs' ? null : 'Programs')
                    }}
                    className={`${navItem} w-full justify-between aria-expanded:bg-[#fff2e7] aria-expanded:text-[#963b15]`}
                  >
                    Programs
                    <Chevron expanded={programsOpen} />
                  </button>
                  {programsOpen && <ProgramsMenu onFollow={closeNavigation} onClose={closePrograms} />}
                </li>
              )
            }

            if (!links) {
              return <li key={label}><a href={href} onClick={closeNavigation} className={navItem}>{label}</a></li>
            }

            const expanded = openDropdown === label
            const panelId = `nav-${label.toLowerCase()}`

            return (
              <li key={label} className="group relative">
                <button
                  type="button"
                  data-dropdown
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpenDropdown(expanded ? null : label)}
                  className={`${navItem} w-full justify-between aria-expanded:bg-[#fff2e7] aria-expanded:text-[#963b15]`}
                >
                  {label}
                  <Chevron expanded={expanded} />
                </button>
                <ul id={panelId} hidden={!expanded} className="mt-1 rounded-xl border border-[#e6edf5] bg-white p-1.5 min-[1160px]:absolute min-[1160px]:top-full min-[1160px]:min-w-52 min-[1160px]:shadow-[0_12px_28px_#19283e1a] min-[1160px]:group-last:right-0">
                  {links.map(([name, destination]) => (
                    <li key={name}><a href={destination} onClick={closeNavigation} className={navItem}>{name}</a></li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

function Chevron({ expanded }) {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" className={expanded ? 'rotate-180' : ''}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

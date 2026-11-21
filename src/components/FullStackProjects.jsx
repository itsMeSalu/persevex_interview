import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import practiceImage from '../assets/practice.webp'
import assessmentImage from '../assets/assessment.webp'
import reviewImage from '../assets/review.webp'
import dashboardImage from '../assets/hiring.webp'
import apiImage from '../assets/remote-practice.webp'
import ordersImage from '../assets/team-debrief.webp'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Responsive Portfolio',
    image: practiceImage,
    description: 'Build a portfolio that works across screen sizes and is easy to navigate with a keyboard.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    focus: 'Explain your layout and accessibility choices.',
  },
  {
    title: 'Search and Filter Dashboard',
    image: dashboardImage,
    description: 'Build a searchable dashboard with useful loading, empty, and error states.',
    stack: ['React', 'Fetch API'],
    focus: 'Explain how you prevent stale results from replacing newer ones.',
  },
  {
    title: 'Content Management System',
    image: reviewImage,
    description: 'Create an editor for drafting and publishing content with author and reviewer roles.',
    stack: ['React', 'Express', 'MongoDB'],
    focus: 'Walk through permissions and the publishing workflow.',
  },
  {
    title: 'Task Tracking API',
    image: apiImage,
    description: 'Build a REST API for creating, filtering, and updating tasks with consistent error responses.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    focus: 'Defend your API contract and validation strategy.',
  },
  {
    title: 'Order History Service',
    image: ordersImage,
    description: 'Model customer orders and build an endpoint that returns them in stable, paginated results.',
    stack: ['Node.js', 'MongoDB'],
    focus: 'Explain how your indexes and pagination behave as data grows.',
  },
  {
    title: 'Storefront and Cart',
    image: assessmentImage,
    description: 'Connect a product catalog, cart, and simulated checkout into one end-to-end experience.',
    stack: ['React', 'Express', 'MongoDB'],
    focus: 'Walk through inventory checks and retry behavior.',
  },
]

function advanceProjects(list, direction) {
  const gap = parseFloat(getComputedStyle(list).columnGap)
  const step = list.firstElementChild.offsetWidth + gap
  const end = list.scrollWidth - list.clientWidth
  if (list.scrollLeft >= end - 2) direction = -1
  else if (list.scrollLeft <= 2) direction = 1
  list.scrollTo({ left: list.scrollLeft + direction * step, behavior: 'smooth' })
  return direction
}

export default function FullStackProjects({ entries = projects, trackTitle = 'Full Stack', intro = 'Build across the stack and practice explaining your decisions in an interview.' }) {
  const track = useRef(null)
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

  useEffect(() => {
    const list = track.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let direction = 1
    let timer
    const observer = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer)
      if (entry.intersectionRatio < 0.25) return

      timer = window.setInterval(() => {
        if (!reducedMotion.matches && !document.hidden && !list.matches(':hover, :focus-within')) {
          direction = advanceProjects(list, direction)
        }
      }, 2700)
    }, { threshold: 0.25 })

    observer.observe(list)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [])

  return (
    <section id="projects" aria-labelledby="stack-projects-title" className="bg-white">
      <div className="page-width max-w-[84rem] py-12 sm:py-16">
        <div ref={heading}>
          <h2 id="stack-projects-title" className="text-[clamp(2rem,3.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">
            Hands-on <span className="brand-gradient-text">projects</span>
          </h2>
          <p className="mt-2 max-w-[55ch] leading-relaxed text-[#614e44]">{intro}</p>
        </div>

        <ul id="stack-project-track" ref={track} aria-label={`${trackTitle} projects`} tabIndex={0} className={`-mx-2 mt-6 grid auto-cols-[85%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-px-2 px-2 pt-1 pb-7 motion-safe:scroll-smooth ${entries.length === 2 ? 'sm:auto-cols-[calc((100%-1rem)/2)] lg:max-w-4xl' : 'sm:auto-cols-[46%] lg:auto-cols-[calc((100%-3rem)/3.15)]'}`}>
          {entries.map(({ title, image, description, stack, focus }) => (
            <li key={title} className="flex min-w-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#ebded4] bg-white shadow-[0_4px_0_#ead9cc,0_9px_18px_-4px_#4e302329]">
              <div className="aspect-[2/1] overflow-hidden border-b border-[#ebded4] bg-[#fbf7f3]">
                <img src={image} alt="" loading="lazy" className="size-full object-cover" />
              </div>
              <article className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#614e44]">{description}</p>
                <ul aria-label="Tech stack" className="mt-3 flex flex-wrap gap-1.5">
                  {stack.map((tool) => <li key={tool} className="rounded-full bg-[#f8eee6] px-2.5 py-1 text-xs font-bold text-[#873a1f]">{tool}</li>)}
                </ul>
                <p className="mt-auto pt-4 text-sm leading-relaxed text-[#614e44]"><strong className="text-[#302723]">Interview focus</strong> {focus}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

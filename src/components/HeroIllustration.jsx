import { useId, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import building from '../assets/interview-hero/building.png'
import antInternLogo from '../assets/antintern-logo.svg'
import practice from '../assets/interview-hero/practice.png'
import interview from '../assets/interview-hero/interview.png'
import assess from '../assets/interview-hero/assess.png'
import progress from '../assets/interview-hero/progress.png'
import code from '../assets/interview-hero/code-tile.png'
import briefcase from '../assets/interview-hero/briefcase-tile.png'
import briefcaseRight from '../assets/interview-hero/briefcase-right-tile.png'
import video from '../assets/interview-hero/video-tile.png'
import play from '../assets/interview-hero/play-tile.png'
import cube from '../assets/interview-hero/connector-cube.webp'

const width = 860
const height = 690

const artwork = [
  { src: building, alt: 'AntIntern academy', box: [207, 165, 454, 372], layer: 10, drift: -2 },
  { src: practice, alt: 'Practice laptop', box: [4, 55, 267, 220], layer: 20, drift: -5 },
  { src: interview, alt: 'Interview screen', box: [606, 76, 239, 218], layer: 20, drift: -6 },
  { src: assess, alt: 'Assessment checklist', box: [0, 419, 260, 225], layer: 20, drift: 5 },
  { src: progress, alt: 'Progress chart', box: [575, 447, 270, 228], layer: 20, drift: 6 },
  { src: code, alt: '', box: [173, 3, 59, 66], layer: 20, drift: -6 },
  { src: briefcase, alt: '', box: [473, 47, 63, 67], layer: 20, drift: -5 },
  { src: briefcaseRight, alt: '', box: [698, 32, 56, 59], layer: 20, drift: -7 },
  { src: video, alt: '', box: [20, 276, 61, 63], layer: 20, drift: 5 },
  { src: play, alt: '', box: [744, 321, 67, 69], layer: 20, drift: 6 },
]

// End each route behind the academy artwork so the dots meet its edge as it floats.
const cubeRoutes = [
  'M 165 210 C 245 222 324 260 393 292',
  'M 664 244 C 613 267 564 278 507 297',
  'M 163 519 C 224 488 292 469 356 425',
  'M 617 568 C 554 537 505 497 475 455',
]

const connections = [
  'M 165 178 C 232 123 315 103 332 155 C 343 183 332 208 345 227 C 357 245 382 251 410 260',
  cubeRoutes[0],
  'M 685 192 C 654 175 625 146 587 147 C 556 147 528 175 532 213 C 532 234 514 251 493 264',
  cubeRoutes[1],
  'M 115 464 C 75 408 107 332 181 328 C 241 322 268 361 355 373',
  cubeRoutes[2],
  'M 706 485 C 742 456 739 413 704 383 C 675 354 599 344 526 332',
  cubeRoutes[3],
]

const dots = [[283, 123], [335, 165], [587, 147], [181, 328]]

export default function HeroIllustration() {
  const scene = useRef(null)
  const facadeId = useId()

  useLayoutEffect(() => {
    const media = gsap.matchMedia(scene.current)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      scene.current.querySelectorAll('[data-art-layer]').forEach((layer, index) => {
        const duration = 3.2 + (index % 4) * 0.38
        const small = layer.hasAttribute('data-small-icon')
        const lift = small ? 11 : Math.abs(Number(layer.dataset.artLayer)) + 2

        gsap.timeline({ repeat: -1, yoyo: true, delay: index * 0.11, defaults: { duration, ease: 'sine.inOut' } })
          .fromTo(layer.querySelector('[data-floating-object]'), { y: small ? 4 : 2 }, { y: -lift }, 0)
          .fromTo(layer.querySelector('[data-art-shadow]'), { scaleX: 1, opacity: small ? 1 : 0.8 }, { scaleX: 0.74, opacity: small ? 0.55 : 0.42 }, 0)
      })
      const softenFade = gsap.parseEase('sine.inOut')
      scene.current.querySelectorAll('[data-cube-route]').forEach((route, index) => {
        const marker = scene.current.querySelectorAll('[data-art-cube]')[index]
        const journey = { progress: 0 }
        const length = route.getTotalLength()

        gsap.to(journey, {
          progress: 1,
          duration: 7.2 + index * 0.55,
          repeat: -1,
          ease: 'sine.inOut',
          onUpdate: () => {
            const progress = journey.progress
            const point = route.getPointAtLength(length * progress)
            marker.setAttribute('transform', `translate(${point.x} ${point.y - Math.sin(progress * Math.PI * 2) * 5})`)
            marker.setAttribute('opacity', String(softenFade(Math.min(1, progress * 5, (1 - progress) * 5))))
          },
        }).progress(0.18 + index * 0.19)
      })
      gsap.fromTo('[data-art-path]', { strokeDashoffset: 0 }, {
        strokeDashoffset: (index) => index % 2 === 0 ? -28 : 28,
        duration: 8.4,
        repeat: -1,
        ease: 'none',
      })
    })

    return () => media.revert()
  }, [])

  return (
    <figure ref={scene} aria-label="AntIntern academy and interview preparation stations" className="relative isolate mx-auto aspect-[1.72] w-[88%] max-w-[39rem] lg:mt-14 lg:w-full">
      <svg aria-hidden="true" viewBox="0 0 860 690" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full">
        <g fill="none" stroke="#e67b3a" strokeOpacity="0.65" strokeWidth="0.9" strokeDasharray="2.5 4.5" strokeLinecap="round">
          {connections.map((path) => <path key={path} data-art-path d={path} vectorEffect="non-scaling-stroke" />)}
        </g>
        <g fill="white" stroke="#ec8d53" strokeWidth="1.2">
          {dots.map(([x, y]) => <circle key={x} cx={x} cy={y} r="2.6" />)}
        </g>
        <g fill="none" stroke="none">
          {cubeRoutes.map((path) => <path key={path} data-cube-route d={path} />)}
        </g>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 860 690" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-30 size-full">
        {[[292, 248], [620, 267], [205, 500], [567, 541]].map(([x, y]) => (
          <image key={x} data-art-cube href={cube} x="-16" y="-21" width="32" height="42" preserveAspectRatio="none" transform={`translate(${x} ${y})`} className="[filter:hue-rotate(165deg)_saturate(0.8)_drop-shadow(0px_6px_6px_#71361466)]" />
        ))}
      </svg>
      {artwork.map(({ src, alt, box: [x, y, w, h], layer, drift }) => (
        <div
          key={src}
          data-art-layer={drift}
          data-small-icon={alt === '' ? '' : undefined}
          className="pointer-events-none absolute"
          style={{ left: `${x / width * 100}%`, top: `${y / height * 100}%`, width: `${w / width * 100}%`, height: `${h / height * 100}%`, zIndex: layer }}
        >
          <span aria-hidden="true" data-art-shadow className={`absolute inset-x-[14%] bottom-[1%] h-[13%] blur-[2px] ${alt === '' ? 'bg-[radial-gradient(ellipse_at_center,#66301caa_0%,#a8522355_42%,transparent_75%)]' : 'bg-[radial-gradient(ellipse_at_center,#7334154d_0%,#a8522324_42%,transparent_72%)]'}`} />
          {src === building ? (
            <svg data-floating-object viewBox="0 0 502 414" role="img" aria-label={alt} className="relative size-full">
              <defs>
                <linearGradient id={facadeId} x1="0" y1="0" x2="0.8" y2="1">
                  <stop stopColor="#f4eef3" />
                  <stop offset="1" stopColor="#e4d9e6" />
                </linearGradient>
              </defs>
              <image href={building} width="502" height="414" />
              <path fill={`url(#${facadeId})`} d="M258 157 379 100 379 173 258 231Z" />
              <g transform="translate(266 183) skewY(-25)">
                <image href={antInternLogo} width="23" height="23" />
                <text x="27" y="17" fill="#151318" fontFamily="DM Sans, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5">AntIntern</text>
              </g>
            </svg>
          ) : (
            <img data-floating-object src={src} alt={alt} className="relative size-full object-contain" />
          )}
        </div>
      ))}
    </figure>
  )
}

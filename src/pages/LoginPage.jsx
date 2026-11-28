import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import logo from '../assets/antintern-logo.svg'
import './login.css'

export function DottedGlobe() {
  const canvas = useRef(null)

  useEffect(() => {
    const element = canvas.current
    const context = element.getContext('2d')
    if (!context) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 900px)')
    const continents = [
      [[-168,70],[-140,72],[-125,60],[-110,55],[-95,50],[-80,53],[-55,48],[-65,35],[-80,25],[-90,16],[-105,20],[-118,32],[-130,50],[-160,60]],
      [[-82,12],[-68,10],[-50,-2],[-35,-8],[-43,-24],[-55,-36],[-68,-55],[-76,-40],[-80,-15]],
      [[-52,60],[-42,60],[-20,76],[-32,84],[-55,80],[-65,68]],
      [[-18,35],[0,37],[12,32],[30,31],[43,12],[51,10],[40,-15],[30,-34],[18,-35],[10,-16],[-2,5],[-17,15]],
      [[-10,36],[-10,55],[5,60],[18,71],[38,70],[40,55],[60,55],[85,70],[115,72],[145,62],[178,65],[170,50],[145,45],[130,30],[118,20],[110,5],[100,0],[94,18],[80,8],[70,25],[50,28],[40,42],[25,40],[20,35],[8,44],[0,40]],
      [[112,-11],[130,-12],[143,-10],[154,-25],[146,-40],[130,-35],[115,-34]],
      [[47,-13],[51,-16],[49,-26],[44,-24]],
      [[130,32],[140,45],[145,42],[141,33]],
      [[95,5],[106,0],[116,-6],[130,-5],[140,-9],[128,-10],[112,-8],[100,-3]],
    ]
    const contains = (longitude, latitude, polygon) => {
      let inside = false
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if ((yi > latitude) !== (yj > latitude) && longitude < (xj - xi) * (latitude - yi) / (yj - yi) + xi) inside = !inside
      }
      return inside
    }
    const points = []
    for (let latitude = -64; latitude <= 82; latitude += 1.6) {
      const lat = latitude * Math.PI / 180
      const step = 1.6 / Math.max(.2, Math.cos(lat))
      for (let longitude = -180; longitude < 180; longitude += step) {
        if (!continents.some(polygon => contains(longitude, latitude, polygon))) continue
        const lon = longitude * Math.PI / 180
        points.push([Math.cos(lat) * Math.sin(lon), -Math.sin(lat), Math.cos(lat) * Math.cos(lon)])
      }
    }
    let frame = 0
    let lastTime = null
    let rotation = -.25
    let size = 0
    const draw = time => {
      if (lastTime !== null && !motion.matches) rotation += Math.min(time - lastTime, 50) * Math.PI * 2 / 80000
      lastTime = time
      context.clearRect(0, 0, size, size)
      const radius = size * .47
      const sine = Math.sin(rotation)
      const cosine = Math.cos(rotation)
      for (const [x, y, z] of points) {
        const rotatedX = x * cosine + z * sine
        const depth = z * cosine - x * sine
        const tiltedY = y * .98 - depth * .16
        context.beginPath()
        context.arc(size / 2 + rotatedX * radius, size / 2 + tiltedY * radius, (.85 + (depth + 1) * .35) * size / 600, 0, Math.PI * 2)
        context.fillStyle = 'rgba(250, 145, 59, ' + (.08 + Math.max(0, depth) * .85) + ')'
        context.fill()
      }
      if (!motion.matches && desktop.matches && !document.hidden) frame = requestAnimationFrame(draw)
    }
    const sync = () => {
      cancelAnimationFrame(frame)
      lastTime = null
      size = element.clientWidth
      if (!desktop.matches || !size) return
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      element.width = Math.round(size * ratio)
      element.height = Math.round(size * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw(performance.now())
    }
    const observer = new ResizeObserver(sync)
    observer.observe(element)
    motion.addEventListener('change', sync)
    desktop.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    sync()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      motion.removeEventListener('change', sync)
      desktop.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return <div className="login-globe" aria-hidden="true"><canvas ref={canvas} /></div>
}

export default function LoginPage() {
  const [message, setMessage] = useState('')
  function previewSignIn(event) {
    event.preventDefault()
    window.location.assign('/dashboard')
  }

  return (
    <main className="login-page">
      <aside className="login-showcase" aria-label="Interview preparation">
        <a href="/" className="login-wordmark"><img src={logo} alt="" />AntiIntern</a>
        <DottedGlobe />
        <div className="login-preview-content">
          <p className="login-welcome">Welcome to</p>
          <h2>AntiIntern Community</h2>
          <p className="login-community-description">Practice for your next interview.</p>
          <a href="/#interviews" className="login-community-link">Explore interview tracks <ArrowRight size={15} /></a>
        </div>
      </aside>

      <section className="login-form-panel">
        <a href="/" className="login-back"><ArrowLeft size={16} /> Back to home</a>
        <div className="login-form-content">
          <a href="/" className="login-form-logo" aria-label="AntiIntern home"><img src={logo} alt="" /><span>AntiIntern</span></a>
          <h1>Welcome back to AntiIntern</h1>
          <p className="login-subheading">Sign in to practice interview questions and build confidence for your next interview.</p>
          <form onSubmit={previewSignIn} className="login-form">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" name="email" type="email" autoComplete="username" placeholder="you@example.com" required onChange={() => setMessage('')} />
            <label htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required onChange={() => setMessage('')} />
            <button type="submit" className="login-submit">Sign in <ArrowRight size={17} /></button>
          </form>
          <div className="login-divider"><span>or continue with</span></div>
          <div className="login-socials">
            <button type="button" onClick={() => setMessage('Google sign-in is not connected in this UI preview.')}><FaGoogle aria-hidden="true" />Google</button>
            <button type="button" onClick={() => setMessage('GitHub sign-in is not connected in this UI preview.')}><FaGithub aria-hidden="true" />GitHub</button>
          </div>
          {message && <p className="login-status" role="status">{message}</p>}
          <p className="login-signup">Don’t have an account? <a href="/signup">Sign up for free</a></p>
        </div>
      </section>
    </main>
  )
}

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BrainCircuit, Braces, ChartNoAxesCombined, FileText, MessageSquareText, Sparkles, Target, Timer } from 'lucide-react'
import './dashboard-interview.css'

const signals = [
  { title: 'Signal Clarity', detail: 'Technical depth, clarity, structure', Icon: MessageSquareText },
  { title: 'Problem Solving', detail: 'Approach, tradeoffs, correctness', Icon: BrainCircuit },
  { title: 'Pace Control', detail: 'Timing, confidence, composure', Icon: Timer },
  { title: 'Code Quality', detail: 'Readability, edge cases, testing', Icon: Braces },
]
const steps = [
  { number: '1', title: 'Calibration — Assess your level', detail: 'Set a baseline with a short initial assessment.' },
  { number: '2', title: 'Practice — Real-world scenarios', detail: 'Solve coding problems with an AI interviewer.' },
  { number: '3', title: 'Analyze — Detailed feedback', detail: 'Review your results and focus on what comes next.' },
]
const benefits = [
  { title: 'Confidence under pressure', detail: 'Make the real interview feel more familiar.', Icon: Target },
  { title: 'Personalized guidance', detail: 'Practice the skills that need your attention.', Icon: Sparkles },
  { title: 'Structured growth', detail: 'See your strengths and gaps clearly.', Icon: ChartNoAxesCombined },
  { title: 'Actionable reports', detail: 'Leave each session with a next step.', Icon: FileText },
]
const reviews = [
  { quote: 'The feedback felt like a real interviewer — blunt, clear, and super useful.', name: 'Aarav Sharma' },
  { quote: 'I finally understood what to say out loud while coding. Huge confidence boost.', name: 'Meera Iyer' },
  { quote: 'The report helped me fix my weak spots in two sessions.', name: 'Kabir Nair' },
  { quote: 'Practicing my explanations helped me stay calm when the questions got harder.', name: 'Ananya Rao' },
  { quote: 'The session gave me a clear plan for what to practice before my next interview.', name: 'Rohan Patel' },
  { quote: 'I could see where my approach worked and where I needed to be more precise.', name: 'Priya Menon' },
]


export default function DashboardInterviewPage() {
  const [activeReview, setActiveReview] = useState(0)
  const reviewTrack = useRef(null)
  const activeReviewRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      const track = reviewTrack.current
      if (!track) return
      const next = (activeReviewRef.current + 1) % reviews.length
      const card = track.children[next]
      track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2, behavior: 'smooth' })
      activeReviewRef.current = next
      setActiveReview(next)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const track = reviewTrack.current
    const card = track?.children[0]
    if (!track || !card) return
    track.scrollLeft = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2
  }, [])

  function syncHighlightedReview() {
    const track = reviewTrack.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    const closest = Array.from(track.children).reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - center)
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Infinity })
    activeReviewRef.current = closest.index
    setActiveReview(closest.index)
  }

  return <div className="dashboard-interview">
    <header className="dashboard-interview-intro"><div><span>AI MOCK INTERVIEWS</span><h1>Master your technical interview</h1><p>Practice coding in a realistic interview, get useful feedback, and track your progress.</p></div><a className="dashboard-interview-primary" href="/signup">Start initial calibration <ArrowRight size={16} /></a></header>
    <section className="dashboard-interview-signals" aria-label="Interview feedback areas">{signals.map(({ title, detail, Icon }) => <article key={title}><div className="dashboard-interview-signal-heading"><h2>{title}</h2><Icon size={18} strokeWidth={1.65} aria-hidden="true" /></div><p>{detail}</p></article>)}</section>
    <div className="dashboard-interview-panels"><section className="dashboard-interview-panel dashboard-interview-process"><h2>How it works</h2><div className="dashboard-interview-process-content"><ol>{steps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}</ol></div></section><section className="dashboard-interview-panel dashboard-interview-reviews"><h2>Candidate reviews</h2><div className="dashboard-interview-review-cards" ref={reviewTrack} onScroll={syncHighlightedReview}>{reviews.map((review, index) => <blockquote className={index === activeReview ? 'is-active' : ''} key={review.name}><div className="dashboard-interview-review-person"><span>{review.name.split(' ').map(part => part[0]).join('')}</span><strong>{review.name}</strong></div><span className="dashboard-interview-quote" aria-hidden="true">“</span><p>{review.quote}</p></blockquote>)}</div></section><section className="dashboard-interview-panel dashboard-interview-benefits"><h2>Benefits you’ll feel fast</h2><p className="dashboard-interview-panel-intro">A structured practice loop that builds confidence session by session.</p><div>{benefits.map(({ title, detail }) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section></div>
  </div>
}

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import './lms-modal.css'

const plans = [
  { name: 'Foundation', price: 3500 },
  { name: 'Advanced', price: 4500 },
  { name: 'Premium', price: 6999 },
  { name: 'Elite', price: 8999 },
]

export default function LmsModal({ onClose }) {
  const [plan, setPlan] = useState('Advanced')
  const [payment, setPayment] = useState('reserve')
  const selectedPrice = plans.find(item => item.name === plan)?.price ?? 4500

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = event => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return <div className="lms-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
    <section className="lms-modal" role="dialog" aria-modal="true" aria-labelledby="lms-title">
      <div className="lms-modal-head">
        <button className="lms-close" type="button" onClick={onClose} aria-label="Close registration form"><X size={21} /></button>
        <h2 id="lms-title">Register or login</h2>
        <p>Choose your plan and get started with AntIntern.</p>
        <a className="lms-login" href="/login">Login to LMS <ArrowUpRight size={19} /></a>
      </div>
      <form className="lms-form" onSubmit={event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const body = `LMS registration request\nPlan: ${plan} (₹${selectedPrice})\nPayment option: ${payment === 'reserve' ? 'Reserve seat (₹1,500)' : 'Pay in full'}\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nCollege: ${data.get('college')}`
        window.location.href = `mailto:support@antintern.com?subject=${encodeURIComponent('LMS registration request')}&body=${encodeURIComponent(body)}`
      }}>
        <fieldset><legend>Select plan</legend><div className="lms-options">{plans.map(item => <label key={item.name} className={plan === item.name ? 'selected' : ''}><input type="radio" name="plan" value={item.name} checked={plan === item.name} onChange={() => setPlan(item.name)} /><strong>{item.name}</strong><b>₹{item.price.toLocaleString('en-IN')}</b>{plan === item.name && <Check size={18} aria-hidden="true" />}</label>)}</div></fieldset>
        <fieldset><legend>Payment option</legend><div className="lms-options">{[['reserve', 'Reserve seat', '₹1,500', 'Pay now'], ['full', 'Pay in full', `₹${selectedPrice.toLocaleString('en-IN')}`, 'Full plan price']].map(([value, title, price, note]) => <label key={value} className={payment === value ? 'selected' : ''}><input type="radio" name="payment" value={value} checked={payment === value} onChange={() => setPayment(value)} /><strong>{title}</strong><b>{price}</b><small>{note}</small>{payment === value && <Check size={18} aria-hidden="true" />}</label>)}</div></fieldset>
        <div className="lms-fields"><label><span className="sr-only">Full name</span><input name="name" required autoComplete="name" placeholder="Full name" /></label><label><span className="sr-only">Phone number</span><span className="lms-phone"><span>🇮🇳 +91</span><input name="phone" required type="tel" inputMode="tel" pattern="[0-9]{10}" title="Enter a 10 digit phone number" placeholder="Phone number" /></span></label><label><span className="sr-only">Email address</span><input name="email" required type="email" autoComplete="email" placeholder="Email address" /></label><label><span className="sr-only">College name</span><input name="college" required placeholder="College name" /></label></div>
        <button className="lms-submit" type="submit">Send registration request</button>
      </form>
    </section>
  </div>
}

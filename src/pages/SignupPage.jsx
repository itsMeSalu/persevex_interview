import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import logo from '../assets/antintern-logo.svg'
import './login.css'
import './signup.css'
import { DottedGlobe } from './LoginPage.jsx'

export default function SignupPage() {
  const [message, setMessage] = useState('')
  return (
    <main className="login-page signup-page">
      <aside className="signup-showcase">
        <a href="/" className="login-wordmark"><img src={logo} alt="" />AntiIntern</a>
        <DottedGlobe />
        <div className="signup-showcase-copy">
          <p>Your next chapter starts here</p>
          <h2>Small steps.<br />Stronger interviews.</h2>
          <span>Find your focus. Practice your answers. Keep growing.</span>
        </div>
      </aside>
      <section className="login-form-panel">
        <a href="/" className="login-back"><ArrowLeft size={16} /> Back to home</a>
        <div className="login-form-content">
          <a href="/" className="login-form-logo" aria-label="AntiIntern home"><img src={logo} alt="" /><span>AntiIntern</span></a>
          <h1>Start your journey<br />with AntiIntern</h1>
          <p className="login-subheading">Create your account and take the first step toward a more confident interview.</p>
          <form className="login-form" onSubmit={event => { event.preventDefault(); setMessage('This is a sign-up preview. Account creation is not connected yet.') }}>
            <label htmlFor="signup-name">Full name</label>
            <input id="signup-name" name="name" autoComplete="name" placeholder="Your full name" required pattern=".*\S.*" onChange={() => setMessage('')} />
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required onChange={() => setMessage('')} />
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="Create a password" required onChange={() => setMessage('')} />
            <button type="submit" className="login-submit">Create account <ArrowRight size={17} /></button>
          </form>
          <div className="login-divider"><span>or sign up with</span></div>
          <div className="login-socials">
            <button type="button" onClick={() => setMessage('Google sign-up is not connected in this UI preview.')}><FaGoogle aria-hidden="true" />Google</button>
            <button type="button" onClick={() => setMessage('GitHub sign-up is not connected in this UI preview.')}><FaGithub aria-hidden="true" />GitHub</button>
          </div>
          {message && <p className="login-status" role="status">{message}</p>}
          <p className="login-signup">Already have an account? <a href="/login">Log in</a></p>
        </div>
      </section>
    </main>
  )
}

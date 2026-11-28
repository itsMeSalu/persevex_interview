import { useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, BriefcaseBusiness, Building2, Check, Code2, Rocket, Users } from 'lucide-react'
import './dashboard-prepare.css'

const companyTypes = [
  { id: 'startup', title: 'Startup', description: 'Move quickly, own outcomes, and work across different parts of a product.', Icon: Rocket },
  { id: 'mnc', title: 'MNC', description: 'Build depth in a role and collaborate across larger teams and systems.', Icon: Building2 },
  { id: 'product', title: 'Product-based', description: 'Focus on users, product decisions, and scalable engineering.', Icon: Code2 },
  { id: 'service', title: 'Service-based', description: 'Solve client problems across varied projects and domains.', Icon: BriefcaseBusiness },
]
const roles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Data Analyst', 'Data Scientist', 'UI/UX Designer', 'Product Manager', 'Business Analyst']

export default function DashboardPreparePage() {
  const [company, setCompany] = useState('startup')
  const [role, setRole] = useState('Software Engineer')
  const [showPlan, setShowPlan] = useState(false)
  const selectedCompany = companyTypes.find(item => item.id === company)

  return <div className="dashboard-prepare">
    <header className="dashboard-prepare-header"><div><span>PERSONALIZED PREPARATION</span><h1>{showPlan ? 'Your preparation path' : 'What are you preparing for?'}</h1><p>{showPlan ? `A starting plan for a ${role} role at a ${selectedCompany.title.toLowerCase()} company.` : 'Choose a company environment and target role to shape your practice.'}</p></div>{showPlan && <button type="button" className="dashboard-prepare-back" onClick={() => setShowPlan(false)}><ArrowLeft size={16}/> Edit choices</button>}</header>
    {showPlan ? <div className="dashboard-prepare-plan"><div className="dashboard-prepare-plan-summary"><span className="dashboard-prepare-plan-icon"><selectedCompany.Icon size={23}/></span><div><small>YOUR FOCUS</small><h2>{selectedCompany.title} · {role}</h2><p>{selectedCompany.description}</p></div></div><div className="dashboard-prepare-plan-grid"><a href="/problems"><Code2 size={21}/><h3>Practice problems</h3><p>Work through coding questions and explain your approach.</p><span>Open problems <ArrowRight size={15}/></span></a><a href="/quizzes"><BookOpen size={21}/><h3>Check your knowledge</h3><p>Use short quizzes to spot the topics worth revisiting.</p><span>Explore quizzes <ArrowRight size={15}/></span></a><a href="/dashboard/interview"><Users size={21}/><h3>Practice an interview</h3><p>Build confidence explaining your decisions out loud.</p><span>View interview practice <ArrowRight size={15}/></span></a></div></div> : <><div className="dashboard-prepare-section-title"><div><span>STEP 01</span><h2>Choose your company environment</h2></div><p>Pick the one closest to your goal.</p></div><div className="dashboard-prepare-options" role="radiogroup" aria-label="Company environment">{companyTypes.map(({ id, title, description, Icon }) => <button type="button" role="radio" aria-checked={company === id} className={company === id ? 'selected' : ''} key={id} onClick={() => setCompany(id)}><span className="dashboard-prepare-option-top"><Icon size={24} strokeWidth={1.6}/><span className="dashboard-prepare-check">{company === id && <Check size={13}/>}</span></span><strong>{title}</strong><span className="dashboard-prepare-option-description">{description}</span></button>)}</div><div className="dashboard-prepare-role-panel"><div><span>STEP 02</span><h2>Select your target role</h2><p>We’ll use this to point you toward relevant practice.</p></div><label><select value={role} onChange={event => setRole(event.target.value)} aria-label="Target role">{roles.map(item => <option key={item}>{item}</option>)}</select></label></div><div className="dashboard-prepare-actions"><p>Your choices can be changed anytime.</p><button type="button" onClick={() => setShowPlan(true)}>Continue <ArrowRight size={17}/></button></div></>}
  </div>
}

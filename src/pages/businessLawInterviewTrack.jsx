import contract from '../assets/business-law-preview/contract.webp'
import scales from '../assets/business-law-preview/scales.webp'
import books from '../assets/business-law-preview/books.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import collaboration from '../assets/team-debrief.webp'
import './businessLawPreview.css'

function BusinessLawPreview() {
  return (
    <figure id="sample" className="law-preview" aria-label="Scales of justice with a contract and law books">
      <div className="law-preview__orbit" aria-hidden="true" />
      <img className="law-preview__contract" src={contract} alt="" />
      <img className="law-preview__scales" src={scales} alt="" />
      <img className="law-preview__books" src={books} alt="" />
    </figure>
  )
}

export const businessLawInterviewPath = '/interviews/business-law'

export const businessLawInterviewTrack = {
  title: 'Business Law',
  shortTitle: 'Business Law',
  program: 'business-law',
  Preview: BusinessLawPreview,
  previewLabel: 'Business law preview',
  heroDescription: 'Prepare for business law interviews by analyzing contracts, business structures, and commercial disputes. Practice identifying legal issues and explaining practical next steps.',
  projectDescription: 'Work through fictional business scenarios and practice communicating legal risks clearly.',
  topics: [['Contracts', 'Terms, obligations, and remedies'], ['Business', 'Entities and governance'], ['Risk', 'Compliance and disputes']],
  overviewHeading: ['Understand the issue,', 'explain the options.'],
  overviewDescription: 'Start with the facts, identify the parties and their obligations, and consider the relevant agreement and applicable law. Explain what information you would verify before recommending a course of action.',
  focusAreas: [
    ['Contract fundamentals', 'Identify offer, acceptance, obligations, and potential breaches.'],
    ['Business organizations', 'Compare structures, governance, and responsibilities.'],
    ['Commercial transactions', 'Review payment, delivery, and allocation of risk.'],
    ['Compliance and ethics', 'Recognize regulatory and ethical issues in business decisions.'],
    ['Dispute resolution', 'Compare negotiation, mediation, arbitration, and litigation.'],
  ],
  practiceSkills: ['Contract Review', 'Legal Research', 'Business Entities', 'Risk Assessment', 'Corporate Governance', 'Negotiation', 'Compliance', 'Dispute Resolution'],
  curriculum: [
    { title: 'Business Law Foundations', topics: ['Sources of law', 'Legal research', 'Business relationships', 'Ethical decision-making'], prompt: 'What facts would you gather before assessing a business dispute?' },
    { title: 'Contracts and Commercial Agreements', topics: ['Contract formation', 'Terms and obligations', 'Breach and remedies', 'Contract interpretation'], prompt: 'A supplier misses a delivery deadline. What would you review first?' },
    { title: 'Business Organizations and Governance', topics: ['Business structures', 'Management responsibilities', 'Governance', 'Conflicts of interest'], prompt: 'How would you compare business structures for a new venture?' },
    { title: 'Compliance and Commercial Risk', topics: ['Compliance programs', 'Employment considerations', 'Intellectual property', 'Data and confidentiality'], prompt: 'How would you identify risks in a proposed partnership?' },
    { title: 'Disputes and Resolution', topics: ['Negotiation', 'Mediation', 'Arbitration', 'Litigation', 'Settlement'], prompt: 'What factors would you consider when choosing a dispute resolution process?' },
  ],
  demo: {
    prompts: ['A supplier delivers late and the customer claims losses. What facts and contract terms would you examine?', 'A business partner wants to share confidential customer information. What issues would you raise?'],
    feedback: ['Identify the parties, timeline, contract terms, and communications before drawing conclusions.', 'Consider obligations, possible remedies, and the governing law. Identify any missing facts.', 'Explain practical next steps and when specialist legal advice may be needed.'],
  },
  projects: [
    { title: 'Contract Review', image: assessment, description: 'Review a fictional supplier agreement for obligations and risk.', stack: ['Contracts', 'Risk'], focus: 'Explain the terms you would clarify before signing.' },
    { title: 'Business Structure Comparison', image: practice, description: 'Compare structures for a fictional new business.', stack: ['Governance', 'Research'], focus: 'Explain how ownership and management affect the choice.' },
    { title: 'Commercial Dispute Brief', image: collaboration, description: 'Summarize a fictional delivery dispute and possible paths to resolution.', stack: ['Research', 'Negotiation'], focus: 'Identify missing facts and relevant contract terms.' },
  ],
  questions: [
    ['What should I prepare for a business law interview?', 'Practice identifying issues in contracts, business structures, and commercial disputes, then explain your reasoning clearly.'],
    ['Do I need legal experience?', 'You can start with the fundamentals and use fictional examples to practice.'],
    ['What does the mock interview cover?', 'It covers a supplier delivery dispute and a confidentiality scenario.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

import illustration from '../assets/medical-coding-preview.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'
import './medicalCodingPreview.css'

function MedicalCodingPreview() {
  return (
    <figure id="sample" className="medical-coding-preview">
      <div className="medical-coding-preview__art">
        <img src={illustration} alt="Medical records, reference books, a stethoscope, and a coding screen" />
        <span className="medical-coding-preview__scan" aria-hidden="true" />
        <span className="medical-coding-preview__screen" aria-hidden="true">
          <i /><i /><i />
        </span>
      </div>
    </figure>
  )
}

export const medicalCodingInterviewPath = '/interviews/medical-coding'

export const medicalCodingInterviewTrack = {
  title: 'Medical Coding',
  shortTitle: 'Medical Coding',
  program: 'medical-coding',
  Preview: MedicalCodingPreview,
  previewLabel: 'Medical coding preview',
  heroDescription: 'Prepare for medical coding interviews by practicing how to review clinical documentation, identify documented diagnoses and procedures, and explain coding decisions.',
  projectDescription: 'Work through fictional records and practice documenting coding choices, queries, and quality checks.',
  topics: [
    ['Foundations', 'Medical terminology and anatomy'],
    ['Coding', 'Diagnoses, procedures, and guidelines'],
    ['Quality', 'Documentation, queries, and accuracy'],
  ],
  overviewHeading: ['Read the record,', 'explain the code.'],
  overviewDescription: 'Start with the clinical documentation and the coding system relevant to the setting. Identify the documented diagnosis or procedure, consult the applicable guidelines, and explain what you would do when the record is unclear.',
  focusAreas: [
    ['Medical terminology and anatomy', 'Recognize common terms, body systems, and documentation language.'],
    ['Diagnosis coding', 'Practice locating and verifying diagnosis codes using applicable guidelines.'],
    ['Procedure coding', 'Understand how documented services are represented in the relevant code set.'],
    ['Documentation review', 'Identify missing or conflicting information and formulate appropriate queries.'],
    ['Compliance and quality', 'Explain accurate coding, confidentiality, and the role of audits.'],
  ],
  practiceSkills: ['Medical Terminology', 'Anatomy', 'ICD-10-CM', 'CPT', 'HCPCS', 'Documentation Review', 'Provider Queries', 'Coding Audits'],
  curriculum: [
    { title: 'Medical Coding Foundations', topics: ['Coding workflow', 'Medical terminology', 'Anatomy and physiology', 'Clinical documentation'], prompt: 'How would you approach a record containing an unfamiliar medical term?' },
    { title: 'Diagnosis Coding', topics: ['ICD-10-CM structure', 'Code lookup and verification', 'Specificity', 'Sequencing', 'Coding guidelines'], prompt: 'What would you do when the documentation lacks the detail needed to select a specific diagnosis code?' },
    { title: 'Procedure and Service Coding', topics: ['CPT and HCPCS overview', 'Documented services', 'Code selection', 'Modifiers', 'Setting-specific rules'], prompt: 'How would you verify that the documentation supports a reported procedure?' },
    { title: 'Documentation and Queries', topics: ['Clinical record review', 'Incomplete documentation', 'Conflicting information', 'Provider queries', 'Query documentation'], prompt: 'How would you handle conflicting details in a medical record?' },
    { title: 'Compliance and Quality', topics: ['Coding accuracy', 'Confidentiality', 'Audits', 'Claim review', 'Maintaining current references'], prompt: 'What steps would you take after finding a repeated coding error?' },
  ],
  demo: {
    prompts: [
      'A diagnosis is documented without the specificity needed for the most detailed code. How would you proceed?',
      'A procedure appears on a claim but is unclear in the clinical documentation. What would you check?',
    ],
    feedback: [
      'Review the complete record and consult the current code set and applicable guidelines.',
      'Avoid inferring undocumented details. Follow the organization’s process for an appropriate provider query when needed.',
      'Explain your reasoning, document the resolution, and protect confidential information.',
    ],
  },
  projects: [
    { title: 'Diagnosis Coding Review', image: assessment, description: 'Review fictional clinical notes and document how you verify diagnosis codes.', stack: ['ICD-10-CM', 'Documentation'], focus: 'Explain how the documentation supports code specificity.' },
    { title: 'Procedure Coding Practice', image: practice, description: 'Compare documented services with a sample procedure coding reference.', stack: ['CPT', 'Code Verification'], focus: 'Identify details needed before selecting or reporting a code.' },
    { title: 'Coding Quality Audit', image: review, description: 'Examine a fictional set of coded records for documentation and coding discrepancies.', stack: ['Audit', 'Compliance'], focus: 'Summarize findings and suggest a process for resolving them.' },
  ],
  questions: [
    ['What should I prepare for a medical coding interview?', 'Review medical terminology, code lookup, documentation, applicable guidelines, and how to explain your coding decisions.'],
    ['Do I need prior coding experience?', 'You can practice with fictional records and explain the steps you would follow using current references.'],
    ['What does the mock interview cover?', 'It covers an unspecified diagnosis and a procedure that needs documentation review.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

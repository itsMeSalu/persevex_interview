import brain from '../assets/psychology-preview.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import collaboration from '../assets/team-debrief.webp'
import './psychologyPreview.css'

function PsychologyPreview() {
  return (
    <figure id="sample" className="psychology-preview">
      <div className="psychology-preview__art">
        <img src={brain} alt="A brain model with a notebook and neural connections" />
        <div className="psychology-preview__signals" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
      </div>
    </figure>
  )
}

export const psychologyInterviewPath = '/interviews/psychology'

export const psychologyInterviewTrack = {
  title: 'Psychology',
  shortTitle: 'Psychology',
  program: 'psychology',
  Preview: PsychologyPreview,
  previewLabel: 'Psychology preview',
  heroDescription: 'Prepare for psychology interviews by exploring behavior, cognition, research methods, and ethical practice. Practice explaining concepts clearly and applying them to realistic scenarios.',
  projectDescription: 'Explore sample research questions and practice communicating observations, methods, and findings.',
  topics: [['Foundations', 'Behavior, cognition, and development'], ['Research', 'Methods, evidence, and interpretation'], ['Practice', 'Communication, ethics, and boundaries']],
  overviewHeading: ['Understand behavior,', 'explain the evidence.'],
  overviewDescription: 'Start with the question and its context. Consider relevant psychological concepts, evaluate the available evidence, and explain your reasoning while respecting ethical and professional boundaries.',
  focusAreas: [
    ['Psychology foundations', 'Explain major approaches to understanding behavior and mental processes.'],
    ['Cognition and development', 'Discuss memory, learning, and development across the lifespan.'],
    ['Research methods', 'Compare study designs and recognize limitations and bias.'],
    ['Communication and observation', 'Practice active listening and distinguish observation from inference.'],
    ['Ethics and professional practice', 'Consider consent, confidentiality, boundaries, and appropriate referral.'],
  ],
  practiceSkills: ['Active Listening', 'Research Design', 'Critical Thinking', 'Observation', 'Ethics', 'Cognition', 'Development', 'Evidence Evaluation'],
  curriculum: [
    { title: 'Foundations of Psychology', topics: ['Perspectives in psychology', 'Behavior and mental processes', 'Biological influences', 'Social and environmental influences'], prompt: 'How might different psychological perspectives explain a change in behavior?' },
    { title: 'Learning and Cognition', topics: ['Learning theories', 'Memory and attention', 'Thinking and decision-making', 'Cognitive biases'], prompt: 'How would you explain the difference between reinforcement and punishment?' },
    { title: 'Development and Social Psychology', topics: ['Lifespan development', 'Individual differences', 'Social influence', 'Relationships and context'], prompt: 'How might social context affect a person’s behavior in a group?' },
    { title: 'Research Methods and Evidence', topics: ['Research questions', 'Experimental and observational studies', 'Sampling and bias', 'Correlation and causation', 'Interpreting results'], prompt: 'A study finds a correlation between sleep and academic performance. What can you conclude?' },
    { title: 'Ethics and Communication', topics: ['Informed consent', 'Confidentiality', 'Professional boundaries', 'Active listening', 'Referral and supervision'], prompt: 'How would you respond when a question falls outside your training or role?' },
  ],
  demo: {
    prompts: ['A student reports difficulty concentrating. What questions would you ask to understand the context?', 'A study reports that two variables are associated. How would you explain the finding and its limitations?'],
    feedback: ['Listen without making assumptions and ask open-ended questions about context and relevant factors.', 'Distinguish observations from interpretations and avoid drawing conclusions beyond the available evidence.', 'Consider confidentiality, professional boundaries, and appropriate support or supervision.'],
  },
  projects: [
    { title: 'Research Study Review', image: assessment, description: 'Evaluate a published psychology study’s design, findings, and limitations.', stack: ['Research', 'Evidence'], focus: 'Explain how the study design affects the conclusions.' },
    { title: 'Learning and Memory Brief', image: practice, description: 'Summarize a learning or memory concept using an everyday example.', stack: ['Cognition', 'Communication'], focus: 'Connect the example to evidence without overstating the result.' },
    { title: 'Ethical Scenario Analysis', image: collaboration, description: 'Consider confidentiality and professional boundaries in a fictional scenario.', stack: ['Ethics', 'Communication'], focus: 'Explain what additional information or supervision you would seek.' },
  ],
  questions: [
    ['What should I prepare for a psychology interview?', 'Review core concepts, research methods, ethics, and examples that show clear communication and critical thinking.'],
    ['Do I need professional experience?', 'You can practice with coursework, research, volunteer experience, or fictional scenarios relevant to the role.'],
    ['What does the mock interview cover?', 'It covers a concentration scenario and interpreting an association in a study.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

import HumanResourcesPreview from '../components/HumanResourcesPreview.jsx'
import hiring from '../assets/hiring.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const humanResourcesInterviewPath = '/interviews/human-resource'

export const humanResourcesInterviewTrack = {
  title: 'Modern Human Resources',
  shortTitle: 'Human Resources',
  program: 'human-resource',
  Preview: HumanResourcesPreview,
  heroDescription: 'Prepare for HR interviews by practicing how to hire fairly, onboard employees, and help managers address performance and workplace concerns. Explain your decisions using clear criteria and people data.',
  projectDescription: 'Build practical HR materials and work through scenarios from recruiting to retention.',
  topics: [
    ['Talent', 'Hiring and onboarding'],
    ['People operations', 'Performance and employee relations'],
    ['Analytics', 'Workforce metrics and reporting'],
  ],
  overviewHeading: ['Practice making', 'people decisions.'],
  overviewDescription: 'Work through a realistic HR request. Identify what you need to learn, decide who should be involved, and explain how you would document and measure the outcome.',
  focusAreas: [
    ['Talent acquisition', 'Define job-relevant criteria and compare applicants consistently.'],
    ['Onboarding and development', 'Set clear milestones and collect new-hire feedback.'],
    ['Performance management', 'Turn broad feedback into observable expectations.'],
    ['Employee relations', 'Document facts and identify when to escalate.'],
    ['People analytics', 'Choose workforce metrics and explain what the data can support.'],
  ],
  practiceSkills: ['Job Analysis', 'Structured Interviews', 'Onboarding', 'Performance Feedback', 'Employee Relations', 'Survey Design', 'HR Reporting'],
  curriculum: [
    {
      title: 'HR Foundations and Workforce Planning',
      topics: ['HR stakeholders', 'Workforce planning', 'Job analysis', 'Employee lifecycle', 'Handling employee records'],
      prompt: 'What would you ask a manager who requests additional headcount?',
    },
    {
      title: 'Talent Acquisition and Selection',
      topics: ['Job descriptions', 'Sourcing and screening', 'Structured interviews', 'Scoring rubrics', 'Candidate communication'],
      prompt: 'Two interviewers disagree about a candidate. How would you run the debrief?',
    },
    {
      title: 'Onboarding, Learning, and Performance',
      topics: ['Onboarding milestones', 'Learning needs', 'Goal setting', 'Giving feedback', 'Development plans'],
      prompt: 'How would you design a 30-day onboarding plan for a new employee?',
    },
    {
      title: 'Employee Relations and Engagement',
      topics: ['Listening and fact-finding', 'Documenting concerns', 'Escalation paths', 'Engagement surveys', 'Manager follow-up'],
      prompt: 'An employee raises a concern about workload. What would you clarify before agreeing on next steps?',
    },
    {
      title: 'People Analytics and HR Operations',
      topics: ['Hiring funnel metrics', 'Turnover and retention', 'Survey analysis', 'Privacy-conscious reporting', 'Communicating findings'],
      prompt: 'Turnover is higher in one team. How would you investigate before proposing a response?',
    },
  ],
  demo: {
    prompts: [
      'Two interviewers recommend different candidates for the same role. Their notes mostly describe impressions. How would you lead the hiring debrief?',
      'One essential job skill was assessed inconsistently. What would you do before deciding?',
    ],
    feedback: [
      'Return to the role criteria and ask interviewers for specific evidence. Record any gaps.',
      'Agree on a consistent way to assess the missing job-related skill for candidates still in consideration.',
      'Document the decision against the rubric and agree who will communicate the next steps.',
    ],
  },
  projects: [
    { title: 'Structured Hiring Scorecard', image: hiring, description: 'Build interview questions and rating criteria for a sample role.', stack: ['Job Analysis', 'Interview Design'], focus: 'Explain how the rubric supports consistent scoring.' },
    { title: 'Candidate Funnel Analysis', image: assessment, description: 'Map application-to-offer conversion and identify stages to review.', stack: ['Spreadsheets', 'Recruiting Metrics'], focus: 'Distinguish low conversion from missing data.' },
    { title: '30-Day Onboarding Plan', image: practice, description: 'Plan training, check-ins, and milestones for a new hire.', stack: ['Onboarding', 'Learning Plans'], focus: 'Explain how you would gather feedback and adjust the plan.' },
    { title: 'Performance Feedback Guide', image: collaboration, description: 'Rewrite vague feedback into examples and measurable expectations.', stack: ['Coaching', 'Goal Setting'], focus: 'Define how the manager and employee will follow up.' },
    { title: 'Employee Engagement Survey', image: operations, description: 'Draft a survey and propose actions based on sample responses.', stack: ['Survey Design', 'Engagement'], focus: 'Explain how you would report findings for small teams.' },
    { title: 'Retention Dashboard', image: review, description: 'Compare turnover and tenure across teams using sample data.', stack: ['People Analytics', 'Reporting'], focus: 'Identify patterns that warrant investigation.' },
  ],
  questions: [
    ['Do I need prior HR experience?', 'You can start with the employee lifecycle and practice using sample cases and data.'],
    ['What does the mock interview cover?', 'You will lead a hiring debrief, compare interview evidence against role criteria, and decide how to assess a missing skill.'],
    ['Which project should I start with?', 'Try the Structured Hiring Scorecard for recruiting or the 30-Day Onboarding Plan for people operations.'],
    ['Does the track cover people analytics?', 'Yes. You will practice interpreting hiring funnels, retention trends, and engagement survey results.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

import designWorkspace from '../assets/ui-ux-preview/workspace.webp'
import research from '../assets/ui-ux-preview/research.webp'
import wireframe from '../assets/ui-ux-preview/wireframe.webp'
import prototype from '../assets/ui-ux-preview/prototype.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const uiUxDesignInterviewPath = '/interviews/ui-ux-design'

export const uiUxDesignInterviewTrack = {
  title: 'UI/UX Design',
  shortTitle: 'UI/UX Design',
  program: 'ui-ux-design',
  previewLabel: 'Design preview',
  preview: {
    label: 'Product design workflow with a design workspace, research board, wireframe, and interactive prototype',
    startLabel: 'Run the design workflow preview',
    replayLabel: 'Replay the design workflow preview',
    clientImageHeight: 509,
    wideConnectors: true,
    images: [designWorkspace, research, wireframe, prototype],
    stages: [
      'Ready to explore the design workflow',
      'Design workspace gathers research insights',
      'Research findings shape the wireframe',
      'Wireframe becomes a testable prototype',
      'Prototype testing produces feedback',
      'Feedback informs the next design revision',
      'Updated design returns to the workspace',
      'Design workflow preview completed',
    ],
  },
  heroDescription: 'Prepare for UI/UX interviews by explaining how you uncover user needs, turn evidence into design decisions, and test whether a design works. Practice walking an interviewer through your process and its trade-offs.',
  projectDescription: 'Build design case studies you can present in an interview, from your research question to the changes you made after testing.',
  topics: [
    ['Research', 'User needs and problem framing'],
    ['Design', 'Flows, interactions, and design systems'],
    ['Validation', 'Prototypes and usability testing'],
  ],
  overviewHeading: ['Practice explaining', 'your design decisions.'],
  overviewDescription: 'A UI/UX interview asks how you moved from an ambiguous problem to a usable design. Describe the evidence you gathered, the alternatives you considered, and what you learned when people used the prototype.',
  focusAreas: [
    ['UI/UX foundations', 'Define the user problem and measure what a better experience would achieve.'],
    ['Research and information architecture', 'Gather evidence and organize content around users’ goals.'],
    ['Wireframing and interaction design', 'Map the key flow and account for errors, empty states, and recovery.'],
    ['Visual design and design systems', 'Explain hierarchy, accessibility, and reusable component choices.'],
    ['Prototyping and portfolio', 'Test a task, prioritize findings, and explain what changed in a case study.'],
  ],
  practiceSkills: ['User Research', 'Information Architecture', 'User Flows', 'Wireframing', 'Figma', 'Design Systems', 'Usability Testing', 'Portfolio Storytelling'],
  curriculum: [
    {
      title: 'Foundations of UI/UX Design',
      topics: ['UI and UX responsibilities', 'Problem framing and success criteria', 'User-centered design methods', 'Usability principles', 'Accessibility fundamentals', 'Design critiques and feedback'],
      prompt: 'An app has a high onboarding drop-off rate. What would you learn before deciding whether to change the interface?',
    },
    {
      title: 'User Research and Information Architecture',
      topics: ['Planning research objectives', 'Writing and running user interviews', 'Synthesizing research evidence', 'Mapping user journeys', 'Organizing navigation and content', 'Mapping task flows'],
      prompt: 'Users cannot find a key feature. How would you tell whether navigation, terminology, or discoverability is the main issue?',
    },
    {
      title: 'Wireframing and Interaction Design',
      topics: ['Low-fidelity wireframes', 'Interaction and navigation patterns', 'Feedback and system status', 'Empty, loading, and error states', 'Responsive behavior', 'Exploring alternate flows'],
      prompt: 'Sketch a checkout flow that handles a payment failure and explain how users can recover without losing their work.',
    },
    {
      title: 'Visual Design and Design Systems',
      topics: ['Visual hierarchy and layout', 'Typography and color contrast', 'Spacing and layout grids', 'Reusable components and variants', 'Tokens and component documentation'],
      prompt: 'Show how you would design a reusable button that handles loading, errors, and keyboard interaction across multiple products.',
    },
    {
      title: 'Prototyping, Testing, and Portfolio',
      topics: ['Interactive prototype fidelity', 'Writing a usability test plan', 'Prioritizing findings and iterating', 'Presenting a design case study', 'Communicating handoff and next steps'],
      prompt: 'A usability test finds several friction points. Explain which change you would make first and how you would show its impact in a case study.',
    },
  ],
  demo: {
    prompts: [
      'New users abandon a mobile onboarding flow before reaching their first task. How would you investigate the issue and decide what to redesign?',
      'In a usability test, users say the flow is clear but still hesitate at the permissions screen. How would you respond and test your revision?',
    ],
    feedback: [
      'Use funnel data to locate the drop-off, then observe new users attempting the task. Check whether the issue is comprehension, effort, trust, or a technical error.',
      'Watch what users do as well as what they say. Test a version that explains the permission in context and lets users proceed without granting it when possible.',
      'Compare task completion, hesitation, and confidence across prototype variants. Explain which metrics would guide a rollout.',
    ],
  },
  projects: [
    { title: 'Mobile Onboarding Redesign', image: practice, description: 'Redesign a first-use flow so users understand the next step and reach their first meaningful task.', stack: ['Figma', 'FigJam', 'Usability testing'], focus: 'Explain where users dropped off and how you tested your changes.' },
    { title: 'E-commerce Product Experience', image: assessment, description: 'Design a responsive journey from product discovery through checkout, including recovery states.', stack: ['Figma', 'Auto Layout', 'Prototype'], focus: 'Show how you handled trust, information hierarchy, and checkout friction.' },
    { title: 'SaaS Dashboard Interface', image: workspace, description: 'Design a dashboard with filters, charts, tables, and useful empty states for a specific audience.', stack: ['Figma', 'Design tokens', 'Components'], focus: 'Defend your choices for metric priority and accessibility.' },
    { title: 'Design System Starter Kit', image: operations, description: 'Build reusable components with states, variants, and documentation for a small product team.', stack: ['Figma Variables', 'Design tokens', 'Documentation'], focus: 'Explain how you balanced consistency with flexibility.' },
    { title: 'UX Research Case Study', image: collaboration, description: 'Plan user interviews, group observations, and turn evidence into design recommendations.', stack: ['FigJam', 'Interview guide', 'Journey map'], focus: 'Explain how you separated observations from assumptions.' },
    { title: 'Portfolio Case Study Presentation', image: review, description: 'Present one design project through the problem, evidence, iterations, and outcomes.', stack: ['Figma', 'Notion', 'Slides'], focus: 'Make your own role, trade-offs, and lessons clear.' },
  ],
  questions: [
    ['What should I prepare for a UI/UX interview?', 'Prepare one case study you can walk through clearly. Explain the problem, your role, the evidence behind your choices, and what improved after testing.'],
    ['Do I need prior design experience?', 'You can start with a simple flow and a small research question. Learn Figma alongside fundamentals like hierarchy, accessibility, and usability.'],
    ['How does the UI/UX mock interview work?', 'You’ll investigate onboarding drop-off, respond to a follow-up about a usability test, and compare your reasoning with example feedback.'],
    ['Which projects are useful for a design portfolio?', 'Onboarding, a dashboard, or a research case study can all work. Choose a project with a clear user problem, documented decisions, and evidence from testing.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the requirements of the applicable course or internship.'],
  ],
}

import dashboard from '../assets/cybersecurity-preview/dashboard.webp'
import collector from '../assets/cybersecurity-preview/collector.webp'
import correlator from '../assets/cybersecurity-preview/correlator.webp'
import reviewTerminal from '../assets/cybersecurity-preview/review.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const cybersecurityInterviewPath = '/interviews/cybersecurity'

export const cybersecurityInterviewTrack = {
  title: 'Cybersecurity',
  shortTitle: 'Cybersecurity',
  program: 'cybersecurity',
  previewLabel: 'Security preview',
  preview: {
    label: 'Defensive security triage simulation with a monitoring console, event collector, log correlator, and analyst review',
    startLabel: 'Run the security triage preview',
    replayLabel: 'Replay the security triage preview',
    clientImageHeight: 493,
    images: [dashboard, collector, correlator, reviewTerminal],
    stages: [
      'Ready to review a synthetic alert',
      'Monitoring console requests event context',
      'Collector passes event records to correlation',
      'Related events are grouped for analyst review',
      'Review terminal returns the triage decision',
      'Decision and supporting context return to the console',
      'Console receives the review',
      'Security triage preview completed',
    ],
  },
  heroDescription: 'Prepare for cybersecurity interviews by explaining how you protect systems, prioritize risk, and investigate alerts. Practice making decisions from limited evidence and communicating what your team should do next.',
  projectDescription: 'Practice defensive security scenarios and explain the evidence, trade-offs, and safeguards behind your decisions.',
  topics: [
    ['Protection', 'Network, identity, and application controls'],
    ['Detection', 'Logs, alerts, and event correlation'],
    ['Response', 'Triage, containment, and recovery'],
  ],
  overviewHeading: ['Practice reasoning', 'like a defender.'],
  overviewDescription: 'Start by identifying what needs protection and how the system is used. Explain which controls reduce the most risk, which evidence would change your assessment, and how you would respond without interrupting critical work unnecessarily.',
  focusAreas: [
    ['Cybersecurity fundamentals', 'Identify assets, trust boundaries, and operational risk.'],
    ['Network security', 'Explain segmentation, secure access, and useful telemetry.'],
    ['Application and web security', 'Review authentication, authorization, and secure defaults.'],
    ['Cryptography and data protection', 'Choose controls for data, credentials, and keys.'],
    ['Incident response and forensics', 'Prioritize alerts, preserve evidence, and plan recovery.'],
  ],
  practiceSkills: ['Risk Assessment', 'Network Segmentation', 'Access Control', 'Secure Code Review', 'Encryption', 'Log Analysis', 'Incident Triage', 'Evidence Handling'],
  curriculum: [
    {
      title: 'Cybersecurity Fundamentals',
      topics: ['Confidentiality, integrity, and availability', 'Assets, threats, and business impact', 'Trust boundaries and threat modeling', 'Defense in depth', 'Security policies and governance', 'Prioritizing remediation'],
      prompt: 'How would you prioritize controls for a new employee portal that stores sensitive records?',
    },
    {
      title: 'Network Security',
      topics: ['Network protocols and trust zones', 'Segmentation and traffic policy', 'Firewalls and secure remote access', 'Identity-aware network access', 'Network logging and visibility', 'Interpreting unusual traffic from sample logs'],
      prompt: 'Design network boundaries for a public web app with a private database. Explain what you would log and why.',
    },
    {
      title: 'Application and Web Security',
      topics: ['Authentication and session handling', 'Server-side authorization', 'Safe input and output handling', 'Secure defaults and configuration', 'Dependency maintenance', 'Defensive code review and regression checks'],
      prompt: 'Review an account settings design and explain where authorization should be enforced and tested.',
    },
    {
      title: 'Cryptography and Data Protection',
      topics: ['Encryption at rest and in transit', 'Hashing and password storage', 'Certificates and secure transport', 'Key lifecycle and secrets management', 'Retention, backups, and recovery'],
      prompt: 'Explain how you would protect stored customer data and manage the keys used to encrypt it.',
    },
    {
      title: 'Incident Response and Forensics',
      topics: ['Preparing playbooks and roles', 'Alert triage and evidence collection', 'Containment and recovery decisions', 'Evidence integrity and event timelines', 'Post-incident reviews and follow-up'],
      prompt: 'What evidence would help you distinguish a false alarm from an account compromise? Explain when you would escalate.',
    },
  ],
  demo: {
    prompts: [
      'You receive an unusual sign-in alert for a privileged account. What evidence would you check before deciding whether to escalate?',
      'The account owner says they do not recognize the session. How would you contain the incident and preserve the evidence?',
    ],
    feedback: [
      'Compare the event with recent sign-ins, device and authentication logs, and any relevant changes to the account.',
      'Follow the incident playbook to contain the affected session and preserve the timeline and relevant records. Coordinate with the account owner and the response team.',
      'Document why you escalated, what remains uncertain, and what must be verified before restoring normal access.',
    ],
  },
  projects: [
    { title: 'Network Security Assessment', image: assessment, description: 'Review a sample network inventory and access policy to identify where controls can be strengthened.', stack: ['Network diagrams', 'Firewall logs', 'Risk register'], focus: 'Explain which changes reduce the most risk and what you would verify.' },
    { title: 'System Hardening Review', image: practice, description: 'Compare a baseline configuration against a hardening checklist and document remediation priorities.', stack: ['Linux', 'Configuration review', 'Git'], focus: 'Describe how you would validate a fix without breaking normal operations.' },
    { title: 'Security Monitoring Dashboard', image: workspace, description: 'Group synthetic sign-in and endpoint events into alerts for a defensive monitoring dashboard.', stack: ['SIEM', 'Kibana', 'Sample logs'], focus: 'Explain how you would distinguish useful alerts from noise.' },
    { title: 'Incident Response Tabletop', image: collaboration, description: 'Build a scenario timeline, response checklist, and stakeholder briefing for a simulated incident.', stack: ['Incident playbook', 'Event timeline', 'Evidence log'], focus: 'Describe how you decide when to contain, escalate, or recover.' },
    { title: 'Security Reporting Automation', image: operations, description: 'Summarize sample security events and route a daily review report to the right team.', stack: ['Python', 'JSON', 'Git'], focus: 'Explain deduplication, failure handling, and human approval.' },
    { title: 'Secure Web App Review', image: review, description: 'Review authentication, authorization, and configuration in a sample app and document defensive fixes.', stack: ['JavaScript', 'Access-control tests', 'Code review'], focus: 'Explain how regression checks keep a fix effective.' },
  ],
  questions: [
    ['What should I prepare for a cybersecurity interview?', 'Practice networking, access control, secure application design, and incident triage. Be ready to explain what evidence supports your decisions.'],
    ['Do I need programming experience to start?', 'Start with networking, operating systems, and logs. Basic scripting becomes useful when you need to parse records or automate a defensive report.'],
    ['How does the cybersecurity mock interview work?', 'You’ll investigate an unusual sign-in, answer a follow-up on containment and evidence, then compare your approach with example feedback.'],
    ['What projects can I discuss in an interview?', 'Use a monitoring dashboard, hardening review, or an incident tabletop to explain how you assessed risk, chose controls, and tested your decisions.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is a practice exercise. AntIntern certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}

import DigitalMarketingPreview from '../components/DigitalMarketingPreview.jsx'
import campaign from '../assets/digital-marketing-preview/campaign-workspace.png'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'
import collaboration from '../assets/team-debrief.webp'
import workspace from '../assets/hiring.webp'

export const digitalMarketingInterviewPath = '/interviews/digital-marketing'

export const digitalMarketingInterviewTrack = {
  title: 'Digital Marketing',
  shortTitle: 'Digital Marketing',
  program: 'digital-marketing',
  Preview: DigitalMarketingPreview,
  heroDescription: 'Prepare for digital marketing interviews by planning a campaign, choosing the right metrics, and diagnosing what happens after someone clicks. Practice explaining your decisions across search, paid media, content, and email.',
  projectDescription: 'Work through campaign briefs and sample performance data. Practice showing how each decision supports a measurable goal.',
  topics: [
    ['Strategy', 'Audience, positioning, and channel mix'],
    ['Acquisition', 'Search, paid media, and social content'],
    ['Measurement', 'Conversion tracking and experiments'],
  ],
  overviewHeading: ['Connect campaign decisions', 'to measurable results.'],
  overviewDescription: 'Start with a business goal and an audience. Choose a channel, define the conversion, and explain how you would use campaign data to decide what to change next.',
  focusAreas: [
    ['Campaign strategy', 'Turn a business objective into an audience brief and measurable goal.'],
    ['SEO and content', 'Match search intent with useful pages and measure qualified traffic.'],
    ['Paid media', 'Connect creative, targeting, budget, and landing-page performance.'],
    ['Social and email', 'Adapt creative across channels and plan lifecycle messages.'],
    ['Analytics and experimentation', 'Check tracking, interpret funnel data, and design a test.'],
  ],
  practiceSkills: ['Audience Research', 'SEO', 'Paid Search', 'Paid Social', 'Email Segmentation', 'UTM Tagging', 'GA4', 'A/B Testing'],
  curriculum: [
    {
      title: 'Digital Marketing Strategy',
      topics: ['Business goals and KPIs', 'Audience research', 'Positioning and messaging', 'Customer journey mapping', 'Channel selection'],
      prompt: 'How would you choose a primary channel for a product launch with a small budget?',
    },
    {
      title: 'Search Engine Optimization and Content',
      topics: ['Keyword research', 'Search intent', 'On-page optimization', 'Technical SEO basics', 'Content performance reporting'],
      prompt: 'A page is getting more organic traffic but few qualified leads. What would you investigate?',
    },
    {
      title: 'Paid Search and Social Advertising',
      topics: ['Campaign and ad group structure', 'Keyword match and exclusions', 'Audience and creative testing', 'Landing-page alignment', 'Budget and acquisition cost'],
      prompt: 'An ad’s click-through rate rises while cost per qualified lead increases. How would you diagnose the change?',
    },
    {
      title: 'Social Content and Email Marketing',
      topics: ['Content calendars', 'Creative briefs', 'Audience segmentation', 'Lifecycle email flows', 'Reporting engagement and conversions'],
      prompt: 'How would you design a welcome email sequence for new subscribers who have never purchased?',
    },
    {
      title: 'Analytics and Conversion Optimization',
      topics: ['UTM and event tracking', 'Funnel analysis', 'Attribution limitations', 'Experiment design', 'Communicating results'],
      prompt: 'How would you test whether a new landing page improves qualified conversions?',
    },
  ],
  demo: {
    prompts: [
      'A paid campaign is driving more clicks, but qualified leads are flat. What would you check before increasing the budget?',
      'You find that mobile visitors abandon the lead form more often. How would you test a shorter form and measure lead quality?',
    ],
    feedback: [
      'Verify conversion tracking, then break down performance by device, audience, and creative. Compare qualified leads and acquisition cost alongside clicks.',
      'Check mobile load time and form errors before assuming the number of fields is the cause.',
      'Randomly split traffic between forms, choose qualified leads per visit as the primary metric, and monitor total submissions and lead quality.',
    ],
  },
  projects: [
    { title: 'Product Launch Campaign', image: campaign, description: 'Create a launch brief with audience, offers, channel mix, and a measurement plan.', stack: ['Audience Research', 'Campaign Brief', 'KPIs'], focus: 'Explain how you would prioritize channels with a limited budget.' },
    { title: 'SEO Content Audit', image: assessment, description: 'Identify search intent gaps and recommend improvements to a set of pages.', stack: ['Search Console', 'Keyword Mapping'], focus: 'Explain how you would measure impact after publishing.' },
    { title: 'Paid Search Account Plan', image: workspace, description: 'Draft ad groups, keyword lists, exclusions, and copy for a sample account.', stack: ['Google Ads', 'Spreadsheets'], focus: 'Connect each ad group to a relevant landing page.' },
    { title: 'Social Creative Test', image: collaboration, description: 'Design two ad concepts and define how to compare them with the same audience.', stack: ['Creative Brief', 'Paid Social'], focus: 'Explain what makes the comparison fair.' },
    { title: 'Email Welcome Flow', image: practice, description: 'Plan a welcome sequence with distinct messages for new subscribers and customers.', stack: ['Segmentation', 'Email Automation'], focus: 'Describe what would trigger each message and how you would measure it.' },
    { title: 'Conversion Funnel Report', image: review, description: 'Use sample data to identify drop-offs and propose a measurable experiment.', stack: ['GA4', 'UTMs', 'A/B Testing'], focus: 'Separate tracking gaps from changes in customer behavior.' },
  ],
  questions: [
    ['Do I need experience running live campaigns?', 'You can use sample data and mock briefs to practice campaign planning, reporting, and experiment design.'],
    ['What topics should I prepare for?', 'Review audience research, SEO, paid ads, social content, email, and conversion measurement. Practice explaining why you would choose one metric or action over another.'],
    ['What does the mock interview cover?', 'You will diagnose a campaign that attracts clicks while qualified leads stay flat, then propose a test for the mobile lead form.'],
    ['Which project should I start with?', 'Start with the Product Launch Campaign to practice strategy, or choose the Conversion Funnel Report if you want to focus on analytics.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}

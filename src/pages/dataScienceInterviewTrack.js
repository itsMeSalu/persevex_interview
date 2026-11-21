import DataSciencePreview from '../components/DataSciencePreview.jsx'
import planning from '../assets/practice.webp'
import modeling from '../assets/remote-practice.webp'
import visualization from '../assets/assessment.webp'
import review from '../assets/review.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'

export const dataScienceInterviewPath = '/interviews/data-science'

export const dataScienceInterviewTrack = {
  title: 'Data Science',
  shortTitle: 'Data Science',
  program: 'data-science',
  previewLabel: 'Data workflow',
  Preview: DataSciencePreview,
  heroDescription: 'Prepare for data science interviews by turning messy data into a defensible recommendation. Practice SQL, statistics, visualization, and model evaluation, then explain what the result means for a real decision.',
  projectDescription: 'Work through practical datasets and rehearse the assumptions, checks, and decisions you would discuss in an interview.',
  topics: [
    ['Data', 'SQL, Python, and exploratory analysis'],
    ['Statistics', 'Experiments and uncertainty'],
    ['Communication', 'Visualization and recommendations'],
  ],
  overviewHeading: ['Practice turning data', 'into decisions.'],
  overviewDescription: 'Define the question, check where the data came from, and test whether your result holds across meaningful groups. Explain the uncertainty and what you would recommend given the evidence.',
  focusAreas: [
    ['Data science fundamentals', 'Frame questions and check the quality of raw data.'],
    ['Statistics and visualization', 'Choose an analysis and communicate uncertainty.'],
    ['Predictive modeling', 'Compare baselines and validate predictions.'],
    ['Data at scale', 'Explain SQL and distributed processing choices.'],
    ['Data science in practice', 'Share results, handle data responsibly, and plan for deployment.'],
  ],
  practiceSkills: ['Python', 'Pandas & NumPy', 'SQL', 'A/B Testing', 'Plotly & Tableau', 'Scikit-learn', 'Apache Spark', 'Data Storytelling'],
  curriculum: [
    {
      title: 'Data Science Fundamentals',
      topics: ['Applications of data science', 'Planning the analysis workflow', 'Working with NumPy and Pandas', 'Collecting and cleaning records', 'Exploring and profiling a dataset'],
      prompt: 'You receive a messy order export. What checks would you run before reporting revenue?',
    },
    {
      title: 'Statistical Analysis and Visualization',
      topics: ['Summarizing data and making inferences', 'Probability distributions and hypothesis testing', 'Correlation and regression', 'Selecting and designing charts', 'Charting with Matplotlib, Seaborn, and Plotly', 'Building interactive views in Tableau'],
      prompt: 'An experiment shows a small conversion lift. Explain how you would check whether it is credible and useful.',
    },
    {
      title: 'Machine Learning for Data Science',
      topics: ['Predicting from labeled observations', 'Finding groups in unlabeled data', 'Reducing feature dimensions', 'Combining predictive models', 'Forecasting over time', 'Choosing and tuning models', 'Validation strategies and evaluation metrics'],
      prompt: 'Choose a baseline and a validation strategy for a weekly sales forecast. Explain how you would report its errors.',
    },
    {
      title: 'Big Data Analytics',
      topics: ['Components of a big-data platform', 'Distributed computation with Spark', 'Querying datasets with SQL', 'When to use NoSQL storage', 'Running data workloads in the cloud'],
      prompt: 'A query over event data becomes too slow. Explain how you would find the bottleneck and decide when to distribute the work.',
    },
    {
      title: 'Data Science in Practice',
      topics: ['Taking an analysis from question to delivery', 'Making features available at prediction time', 'Serving models through an API', 'Data privacy and responsible use', 'Presenting findings to decision-makers', 'Planning and reviewing data science projects'],
      prompt: 'Explain how you would present a recommendation whose effect varies substantially by customer group.',
    },
  ],
  demo: {
    prompts: [
      'A dashboard shows a rise in conversion after a checkout redesign. How would you determine whether the redesign caused the increase?',
      'Desktop and mobile results point in different directions. What would you check before recommending a rollout?',
    ],
    feedback: [
      'Check that exposure and conversion are defined consistently. Compare randomly assigned groups if possible and account for changes in traffic, seasonality, and instrumentation.',
      'Look at sample sizes, uncertainty, and device mix. Verify the segment definitions and distinguish exploratory findings from planned comparisons.',
      'Explain the decision in terms of expected lift and guardrail metrics, then propose a follow-up test if the evidence is inconclusive.',
    ],
  },
  projects: [
    { title: 'Customer Segmentation', image: planning, description: 'Group customers by behavior and check whether the groups are stable and useful.', stack: ['Python', 'Pandas', 'Scikit-learn'], focus: 'Explain feature scaling and how you validate clusters without labels.' },
    { title: 'Sales Forecasting', image: modeling, description: 'Estimate upcoming sales and compare the forecast against a seasonal baseline.', stack: ['Python', 'Prophet', 'Pandas'], focus: 'Discuss time-based validation, seasonality, and prediction intervals.' },
    { title: 'Interactive KPI Dashboard', image: visualization, description: 'Build a dashboard with filters and metrics that answer a specific business question.', stack: ['SQL', 'Plotly', 'Dash'], focus: 'Defend the metric definitions and chart choices.' },
    { title: 'Social Media Analysis', image: review, description: 'Analyze an approved public dataset to summarize trends in customer sentiment.', stack: ['Python', 'Pandas', 'NLTK'], focus: 'Describe sampling bias, noisy labels, and privacy boundaries.' },
    { title: 'Fraud Detection', image: workspace, description: 'Use a sample transaction dataset to detect rare suspicious activity and review false positives.', stack: ['Python', 'Scikit-learn', 'XGBoost'], focus: 'Explain threshold selection and the cost of manual reviews.' },
    { title: 'Market Basket Analysis', image: collaboration, description: 'Find products that tend to be purchased together and check whether the patterns hold over time.', stack: ['Python', 'Pandas', 'MLxtend'], focus: 'Explain support, confidence, and lift in business terms.' },
  ],
  questions: [
    ['What should I prepare for a data science interview?', 'Practice SQL, exploratory analysis, statistics, experiment design, and model evaluation. Be ready to explain how your findings would change a decision.'],
    ['How much coding and statistics should I know?', 'Start with Python data manipulation, SQL joins and aggregations, and basic probability. Then practice interpreting confidence intervals and explaining trade-offs.'],
    ['How does the data science mock interview work?', 'You’ll investigate a conversion lift, respond to a follow-up about device-level results, and compare your reasoning with example feedback.'],
    ['Which project is a good starting point?', 'Start with the KPI dashboard to practice turning a question into a clear analysis. Then try forecasting or segmentation to practice model validation.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the requirements of the course or internship.'],
  ],
}

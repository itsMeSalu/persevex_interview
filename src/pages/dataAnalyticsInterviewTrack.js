import consoleImage from '../assets/data-analytics-preview/console.webp'
import sources from '../assets/data-analytics-preview/sources.webp'
import query from '../assets/data-analytics-preview/query.webp'
import report from '../assets/data-analytics-preview/report.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const dataAnalyticsInterviewPath = '/interviews/data-analytics'

export const dataAnalyticsInterviewTrack = {
  title: 'Data Analytics',
  shortTitle: 'Data Analytics',
  program: 'data-analytics',
  previewLabel: 'Analytics preview',
  preview: {
    label: 'Analytics workflow with a dashboard, source tables, query engine, and report publisher',
    startLabel: 'Run the analytics workflow',
    replayLabel: 'Replay the analytics workflow',
    clientImageHeight: 508,
    images: [consoleImage, sources, query, report],
    stages: [
      'Ready to refresh the analytics dashboard',
      'Dashboard requests an updated report',
      'Source tables are loaded into the query engine',
      'Query joins and aggregates the source records',
      'Reporting module publishes the new totals',
      'Reporting results return through the workflow',
      'Dashboard receives the updated metrics',
      'Analytics report is ready',
    ],
  },
  heroDescription: 'Prepare for data analytics interviews by turning business questions into trustworthy metrics. Practice SQL, Excel, Python, and Power BI, then explain what changed and which decision the data supports.',
  projectDescription: 'Build reports you can walk through in an interview, from metric definitions and data quality checks to recommendations.',
  topics: [
    ['Business metrics', 'KPIs, dimensions, and reporting grain'],
    ['Analysis', 'SQL, Excel, and Python'],
    ['Reporting', 'Power BI, DAX, and storytelling'],
  ],
  overviewHeading: ['Practice turning metrics', 'into decisions.'],
  overviewDescription: 'Start with the decision someone needs to make. Define the metric, validate the source data, and break the result down by relevant groups. Explain what the evidence supports and which assumptions you would check next.',
  focusAreas: [
    ['Data analytics foundations', 'Translate a business question into a metric and a reporting plan.'],
    ['Excel and spreadsheet analytics', 'Clean and reconcile data, then build a repeatable summary.'],
    ['SQL for data analysis', 'Choose the right join and aggregation grain.'],
    ['Python for analytics', 'Profile a dataset and document decisions about missing values and outliers.'],
    ['Power BI and data storytelling', 'Build a dashboard that helps someone decide what to do next.'],
  ],
  practiceSkills: ['Excel', 'Power Query', 'SQL Joins', 'Window Functions', 'Pandas', 'Power BI', 'DAX', 'KPI Reporting'],
  curriculum: [
    {
      title: 'Data Analytics Foundations',
      topics: ['The role of a data analyst', 'Framing questions and planning analysis', 'Defining metrics and dimensions', 'Recognizing data quality problems'],
      prompt: 'A team asks for a weekly performance dashboard. What questions would you ask before choosing the metrics?',
    },
    {
      title: 'Excel and Spreadsheet Analytics',
      topics: ['Formulas and lookup functions', 'Cleaning and formatting spreadsheets', 'PivotTables and pivot charts', 'Transforming data with Power Query', 'Creating dashboards in Excel', 'Checks for repeatable reporting'],
      prompt: 'Two spreadsheet reports disagree on monthly revenue. Explain how you would reconcile the sources.',
    },
    {
      title: 'SQL for Data Analysis',
      topics: ['Selecting, filtering, sorting, and grouping', 'Joining tables and modeling relationships', 'Aggregations and conditional logic', 'Subqueries and common table expressions', 'Analytic window functions', 'Building a business report with SQL'],
      prompt: 'Explain how to report monthly revenue by region without counting orders twice when joining line items and refunds.',
    },
    {
      title: 'Python for Analytics',
      topics: ['Python fundamentals for analysis', 'Working with NumPy and Pandas', 'Handling missing values and outliers', 'Exploring a dataset', 'Plotting with Matplotlib and Seaborn', 'Reporting with notebooks'],
      prompt: 'How would you inspect a dataset with missing values before deciding what to exclude or fill in?',
    },
    {
      title: 'Power BI and Data Storytelling',
      topics: ['Modeling data in Power BI', 'DAX measures and calculated columns', 'Choosing visuals and arranging dashboards', 'Slicers, filters, and drill-downs', 'Presenting findings and recommendations', 'Reviewing a complete dashboard'],
      prompt: 'Explain why a Power BI total can differ from the sum of visible rows and how you would check the measure.',
    },
  ],
  demo: {
    prompts: [
      'Revenue fell 12% this month, but the number of orders stayed flat. What would you check first, and how would you explain the change?',
      'After joining orders, line items, and refunds, your report no longer matches finance. How would you find the discrepancy?',
    ],
    feedback: [
      'Check revenue definitions and reporting dates first. Break the change into factors such as average order value, discounts, refunds, and product mix.',
      'Identify the row grain and compare counts and sums after each join. Aggregate refunds or line items to the grain required by the final report.',
      'Reconcile totals with finance and communicate the biggest confirmed driver, the remaining uncertainty, and a next step.',
    ],
  },
  projects: [
    { title: 'Sales Insights Dashboard', image: assessment, description: 'Build an interactive report for revenue, margin, products, and regions.', stack: ['Power BI', 'Excel', 'DAX'], focus: 'Explain how you reconcile revenue and validate filtered totals.' },
    { title: 'Customer Behavior Analysis', image: practice, description: 'Compare purchase patterns across customer groups and recommend a retention experiment.', stack: ['SQL', 'Python', 'Pandas'], focus: 'Explain the grouping criteria and how you avoid overstating the results.' },
    { title: 'HR Attrition Report', image: collaboration, description: 'Summarize departures by tenure and department using de-identified sample data.', stack: ['Excel', 'Power BI', 'SQL'], focus: 'Discuss denominators, privacy, and the limits of descriptive comparisons.' },
    { title: 'Marketing Campaign Performance', image: workspace, description: 'Compare campaign cost, conversions, and returns across channels.', stack: ['SQL', 'Power BI', 'Excel'], focus: 'Explain attribution assumptions and what would change your budget recommendation.' },
    { title: 'Operations KPI Tracker', image: operations, description: 'Track lead times, inventory exceptions, and delivery performance across an operations workflow.', stack: ['SQL', 'Power Query', 'Power BI'], focus: 'Define on-time delivery and verify consistent reporting grain.' },
    { title: 'Python Exploratory Data Analysis', image: review, description: 'Clean a messy dataset and document findings in a reproducible notebook.', stack: ['Python', 'Pandas', 'Seaborn'], focus: 'Explain how you handled missing records and tested your conclusions.' },
  ],
  questions: [
    ['What should I prepare for a data analytics interview?', 'Practice SQL joins and aggregations, Excel summaries, data quality checks, and communicating findings. Be ready to explain how you define and validate a business metric.'],
    ['Do I need both Python and Power BI?', 'They serve different needs. Python helps with reproducible cleaning and exploration. Power BI helps people interact with a report and make recurring decisions.'],
    ['How does the analytics mock interview work?', 'You’ll investigate a revenue decline, troubleshoot a reporting mismatch, and compare your reasoning with example feedback.'],
    ['Which project should I start with?', 'Start with the Sales Insights Dashboard to practice building and reconciling a few clear metrics. Then try the Operations KPI Tracker to explore reporting grain and data freshness.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}

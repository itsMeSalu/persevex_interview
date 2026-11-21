import FinancePreview from '../components/FinancePreview.jsx'
import report from '../assets/finance-preview/report.png'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import collaboration from '../assets/team-debrief.webp'
import workspace from '../assets/hiring.webp'
import review from '../assets/review.webp'

export const financeInterviewPath = '/interviews/finance'

export const financeInterviewTrack = {
  title: 'Finance',
  shortTitle: 'Finance',
  program: 'finance',
  Preview: FinancePreview,
  heroDescription: 'Prepare for finance interviews by reading financial statements, building forecasts, and explaining the business drivers behind the numbers. Practice walking an interviewer through your assumptions and showing how they affect cash flow and valuation.',
  projectDescription: 'Analyze sample companies, build spreadsheet models, and practice explaining your assumptions and findings.',
  topics: [
    ['Accounting', 'Financial statements and cash flow'],
    ['Planning', 'Budgets, forecasts, and variance'],
    ['Valuation', 'DCF and comparable companies'],
  ],
  overviewHeading: ['Explain what drives', 'the financial results.'],
  overviewDescription: 'Start with the income statement, balance sheet, and cash flow statement. Trace how a change in sales, margins, or working capital affects the business, then explain how you would test the assumptions in your model.',
  focusAreas: [
    ['Financial statements', 'Connect the three statements and explain how transactions flow through them.'],
    ['Profitability and liquidity', 'Use ratios to compare performance and spot areas worth investigating.'],
    ['Budgeting and forecasting', 'Build a forecast from operating drivers and explain differences from plan.'],
    ['Corporate finance', 'Compare funding choices and evaluate project cash flows.'],
    ['Valuation and sensitivity', 'Explain what drives a DCF and test how changes in assumptions affect the result.'],
  ],
  practiceSkills: ['Financial Statements', 'Ratio Analysis', 'Excel Modeling', 'Working Capital', 'Forecasting', 'Variance Analysis', 'DCF', 'Sensitivity Analysis'],
  curriculum: [
    {
      title: 'Accounting and Financial Statements',
      topics: ['Accrual accounting', 'Income statement', 'Balance sheet', 'Cash flow statement', 'Linking the three statements'],
      prompt: 'Walk through how an increase in depreciation affects each financial statement.',
    },
    {
      title: 'Financial Statement Analysis',
      topics: ['Profit margins', 'Liquidity ratios', 'Leverage ratios', 'Working capital cycle', 'Comparing reporting periods'],
      prompt: 'A business reports higher profit but lower operating cash flow. What would you check?',
    },
    {
      title: 'Budgeting and Financial Forecasting',
      topics: ['Revenue drivers', 'Fixed and variable costs', 'Budget assumptions', 'Scenario planning', 'Variance analysis'],
      prompt: 'Sales exceeded budget but operating profit fell short. How would you break down the variance?',
    },
    {
      title: 'Corporate Finance and Capital Budgeting',
      topics: ['Time value of money', 'Incremental cash flows', 'Net present value', 'Internal rate of return', 'Funding and capital structure'],
      prompt: 'How would you compare two projects with different investment sizes and cash flow timing?',
    },
    {
      title: 'Valuation and Sensitivity Analysis',
      topics: ['Free cash flow', 'Discount rates', 'Terminal value', 'Comparable company multiples', 'Sensitivity tables'],
      prompt: 'Which assumptions would you stress-test first in a discounted cash flow model, and why?',
    },
  ],
  demo: {
    prompts: [
      'A company’s revenue and net income increased, but operating cash flow fell. How would you investigate the difference?',
      'Receivables grew much faster than sales. How would you reflect that in your forecast?',
    ],
    feedback: [
      'Reconcile net income to operating cash flow. Separate non-cash adjustments from changes in receivables, inventory, and payables.',
      'Compare receivable days and aging across periods. Check customer mix, billing timing, and collection patterns before choosing a driver.',
      'Model a range of collection assumptions and explain how each affects operating cash flow and liquidity.',
    ],
  },
  projects: [
    { title: 'Three-Statement Model', image: report, description: 'Link an income statement, balance sheet, and cash flow statement for a sample company.', stack: ['Excel', 'Financial Statements'], focus: 'Explain how you check that the statements reconcile.' },
    { title: 'Working Capital Review', image: assessment, description: 'Compare receivables, inventory, and payables to explain a change in cash conversion.', stack: ['Ratio Analysis', 'Cash Flow'], focus: 'Identify which operating driver explains the largest change.' },
    { title: 'Driver-Based Forecast', image: practice, description: 'Forecast revenue and expenses using volume, pricing, and cost assumptions.', stack: ['Excel', 'Scenario Analysis'], focus: 'Show which assumptions have the most impact on profit.' },
    { title: 'Budget Variance Report', image: collaboration, description: 'Reconcile actual performance to budget and explain the largest differences.', stack: ['Planning', 'Variance Analysis'], focus: 'Distinguish price, volume, and cost effects.' },
    { title: 'Capital Investment Case', image: workspace, description: 'Compare two projects by modeling incremental cash flows and net present value.', stack: ['NPV', 'Capital Budgeting'], focus: 'Explain what changes if the projects have different useful lives.' },
    { title: 'DCF Valuation Model', image: review, description: 'Estimate enterprise value and compare results across discount rates and growth assumptions.', stack: ['DCF', 'Sensitivity Tables'], focus: 'Explain how terminal value affects the estimate.' },
  ],
  questions: [
    ['Do I need a finance background?', 'Start with the three financial statements and basic spreadsheet formulas. The modules build from financial statements to forecasting and valuation.'],
    ['Do I need real company data?', 'You can use sample statements and fictional scenarios to practice the calculations and explain your reasoning.'],
    ['What does the mock interview cover?', 'You will investigate why profit rose while operating cash flow fell, then explain how changing receivables affects a forecast.'],
    ['Which project should I start with?', 'Start with the Three-Statement Model to learn how the accounts link, or choose the Budget Variance Report to practice explaining results.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

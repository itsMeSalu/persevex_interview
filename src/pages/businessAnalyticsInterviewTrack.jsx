import { dataAnalyticsInterviewTrack } from './dataAnalyticsInterviewTrack.js'
import dashboard from '../assets/business-analytics-preview/dashboard.webp'
import sources from '../assets/business-analytics-preview/sources.webp'
import analysis from '../assets/business-analytics-preview/analysis.webp'
import report from '../assets/business-analytics-preview/report.webp'

export const businessAnalyticsInterviewPath = '/interviews/business-analytics'

export const businessAnalyticsInterviewTrack = {
  ...dataAnalyticsInterviewTrack,
  title: 'Business Analytics',
  shortTitle: 'Business Analytics',
  program: 'business-analytics',
  preview: {
    ...dataAnalyticsInterviewTrack.preview,
    label: 'Business analytics workflow from source data to dashboard',
    images: [dashboard, sources, analysis, report],
  },
  previewLabel: 'Business analytics preview',
  heroDescription: 'Prepare for business analytics interviews by turning business questions into measurable insights. Practice analyzing performance, evaluating opportunities, and explaining recommendations to stakeholders.',
  overviewHeading: ['Turn business questions', 'into decisions.'],
}

import LogisticsPreview from '../components/LogisticsPreview.jsx'
import warehouse from '../assets/logistics-preview/warehouse.png'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'
import operations from '../assets/remote-practice.webp'
import collaboration from '../assets/team-debrief.webp'

export const logisticsInterviewPath = '/interviews/logistics-supply-chain'

export const logisticsInterviewTrack = {
  title: 'Logistics & Supply Chain Management',
  shortTitle: 'Logistics & Supply Chain',
  program: 'logistics-supply-chain',
  Preview: LogisticsPreview,
  previewLabel: 'Logistics preview',
  heroDescription: 'Prepare for supply chain interviews by tracing an order from demand planning through procurement, storage, and delivery. Practice explaining how you would handle shortages, delays, and changes in demand.',
  projectDescription: 'Use sample orders and inventory data to practice planning decisions and explain their effects on cost and service.',
  topics: [
    ['Planning', 'Demand, inventory, and replenishment'],
    ['Operations', 'Suppliers, warehouses, and fulfillment'],
    ['Delivery', 'Transport, service, and exceptions'],
  ],
  overviewHeading: ['Follow an order', 'from plan to delivery.'],
  overviewDescription: 'Start with customer demand, check what stock and capacity are available, and decide how to fulfill the order. Explain what changes when a supplier is late or a route reaches capacity.',
  focusAreas: [
    ['Demand planning', 'Compare a baseline forecast with actual demand and identify forecast bias.'],
    ['Inventory control', 'Explain reorder points, safety stock, and service-level trade-offs.'],
    ['Procurement', 'Assess lead time, reliability, and total landed cost.'],
    ['Warehouse operations', 'Trace receiving, putaway, picking, packing, and dispatch.'],
    ['Transport and delivery', 'Compare routes and carriers and manage delivery exceptions.'],
  ],
  practiceSkills: ['Demand Forecasting', 'Safety Stock', 'Reorder Points', 'Supplier Scorecards', 'Warehouse KPIs', 'Route Planning', 'OTIF', 'Landed Cost'],
  curriculum: [
    { title: 'Supply Chain Fundamentals and Demand Planning', topics: ['Supply chain flows', 'Demand signals', 'Forecast baselines', 'Forecast error and bias', 'Sales and operations planning'], prompt: 'How would you explain a forecast that consistently underestimates demand?' },
    { title: 'Inventory and Replenishment', topics: ['Inventory classifications', 'Stock availability', 'Lead time variability', 'Safety stock', 'Reorder points'], prompt: 'What would you change if a high-demand SKU regularly stocks out despite adequate average inventory?' },
    { title: 'Procurement and Supplier Management', topics: ['Supplier selection', 'Purchase orders', 'Lead time and reliability', 'Total landed cost', 'Supplier scorecards'], prompt: 'How would you compare a low-cost supplier with a more reliable local supplier?' },
    { title: 'Warehousing and Order Fulfillment', topics: ['Receiving and putaway', 'Slotting', 'Picking and packing', 'Cycle counts', 'Dispatch accuracy'], prompt: 'Picking volume increased and errors doubled. How would you investigate?' },
    { title: 'Transportation and Supply Chain Performance', topics: ['Carrier selection', 'Route and capacity planning', 'Delivery exception handling', 'On-time in-full measurement', 'Returns logistics'], prompt: 'A carrier misses delivery windows in one region. What data would you check before switching providers?' },
  ],
  demo: {
    prompts: [
      'A late inbound shipment leaves you short of stock for several orders due this week. How would you allocate the available inventory and communicate the delay?',
      'The supplier has missed three shipments this month. How would you decide whether to change the replenishment policy or qualify a backup supplier?',
    ],
    feedback: [
      'Confirm usable stock, order deadlines, commitments, and the revised inbound ETA before promising delivery.',
      'Apply consistent allocation rules. Check transfers and partial shipments, then communicate revised commitments to affected teams.',
      'Compare supplier reliability, demand variability, and the cost of extra inventory against qualifying a second source.',
    ],
  },
  projects: [
    { title: 'Demand Forecast Review', image: assessment, description: 'Compare a baseline forecast with actual orders and investigate recurring bias.', stack: ['Spreadsheets', 'Forecast Error'], focus: 'Explain where the baseline is reliable and where it misses.' },
    { title: 'Replenishment Model', image: practice, description: 'Estimate reorder points for sample SKUs with different demand and lead times.', stack: ['Safety Stock', 'Inventory'], focus: 'Explain the service and holding-cost trade-off.' },
    { title: 'Supplier Scorecard', image: collaboration, description: 'Compare supplier delivery reliability, quality, and landed cost.', stack: ['Procurement', 'Landed Cost'], focus: 'Explain how you would weight each metric.' },
    { title: 'Warehouse Picking Plan', image: warehouse, description: 'Arrange sample stock locations and compare routes for picking orders.', stack: ['Slotting', 'Fulfillment'], focus: 'Explain how the plan changes during seasonal peaks.' },
    { title: 'Delivery Exception Report', image: operations, description: 'Classify late deliveries and propose a response for each root cause.', stack: ['Carrier KPIs', 'OTIF'], focus: 'Separate dispatch issues from transit issues.' },
    { title: 'Returns Flow Map', image: review, description: 'Map how returns are inspected, restocked, repaired, or written off.', stack: ['Reverse Logistics', 'Process Mapping'], focus: 'Explain the cost and service impact of each decision.' },
  ],
  questions: [
    ['Do I need experience in a warehouse?', 'You can work through the scenarios using sample inventory, purchase orders, and shipment records.'],
    ['Does this cover planning and operations?', 'Yes. The track covers demand forecasts, inventory, procurement, warehousing, and transportation.'],
    ['What does the mock interview cover?', 'You will respond to a late inbound shipment, allocate available inventory, and compare options for preventing repeat delays.'],
    ['Which project should I start with?', 'Start with the Replenishment Model for planning or the Warehouse Picking Plan for operations.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

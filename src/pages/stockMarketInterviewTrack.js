import MarketPreview from '../components/MarketPreview.jsx'
import ticker from '../assets/iot-telemetry/console.webp'
import tokens from '../assets/market-preview/tokens.png'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'
import collaboration from '../assets/team-debrief.webp'

export const stockMarketInterviewPath = '/interviews/stock-market-crypto'

export const stockMarketInterviewTrack = {
  title: 'Stock Market & Cryptocurrency',
  shortTitle: 'Stock Market & Crypto',
  program: 'stock-market-crypto',
  Preview: MarketPreview,
  heroDescription: 'Prepare for markets interviews by explaining how orders execute, what price and volume reveal, and how equities and digital assets differ. Practice interpreting simulated market data and communicating risk clearly.',
  projectDescription: 'Use sample quotes and simulated transactions to practice market analysis, execution, and risk reporting.',
  topics: [
    ['Equities', 'Exchanges, orders, and liquidity'],
    ['Analysis', 'Price, volume, and portfolio risk'],
    ['Digital assets', 'Blockchains, wallets, and custody'],
  ],
  overviewHeading: ['Practice explaining', 'how markets work.'],
  overviewDescription: 'Look at a quote, trace how an order would execute, and explain how the result could change in a thin market. Compare equity and digital-asset examples using the same questions about liquidity, settlement, and risk.',
  focusAreas: [
    ['Market structure', 'Explain bids, asks, spreads, and order book depth.'],
    ['Equity analysis', 'Connect company results to market expectations and distinguish price from value.'],
    ['Price and volume', 'Describe what a chart shows and identify where the evidence is limited.'],
    ['Portfolio risk', 'Compare returns, volatility, concentration, and drawdowns.'],
    ['Digital assets', 'Explain blockchains, custody, and how settlement can differ across venues.'],
  ],
  practiceSkills: ['Order Books', 'Bid–Ask Spreads', 'Candlestick Charts', 'Volume', 'Drawdowns', 'Diversification', 'Blockchain Basics', 'Custody'],
  curriculum: [
    {
      title: 'Market Structure and Order Execution',
      topics: ['Exchange and broker roles', 'Bids and asks', 'Market and limit orders', 'Liquidity and order book depth', 'Slippage and partial fills'],
      prompt: 'Why might a market order fill at several prices even when the quoted spread is small?',
    },
    {
      title: 'Equity Research and Market Data',
      topics: ['Reading quotes', 'Company financials', 'Earnings expectations', 'Valuation multiples', 'Corporate actions'],
      prompt: 'How could a stock fall after reporting higher earnings than last quarter?',
    },
    {
      title: 'Chart Reading and Portfolio Risk',
      topics: ['Candlestick construction', 'Volume and volatility', 'Benchmark-relative returns', 'Drawdown', 'Concentration and diversification'],
      prompt: 'Two portfolios have the same return. How would you tell whether they took different risks?',
    },
    {
      title: 'Cryptocurrency and Blockchain Fundamentals',
      topics: ['Blockchain ledgers', 'Public and private keys', 'Wallets and custody', 'Network fees', 'Confirmations and settlement'],
      prompt: 'How does holding an asset on an exchange differ from holding it in a self-custody wallet?',
    },
    {
      title: 'Digital-Asset Markets and Risk',
      topics: ['Centralized and decentralized venues', 'Liquidity fragmentation', 'Stablecoin mechanisms', 'Custody and counterparty risk', 'Simulated execution reviews'],
      prompt: 'Two venues quote different prices for the same asset. What would you check before comparing the quotes?',
    },
  ],
  demo: {
    prompts: [
      'A simulated market order received a worse average price than the best ask shown on screen. How would you explain the difference?',
      'If you reran the exercise with a limit order, how would you compare execution price and fill probability?',
    ],
    feedback: [
      'Check the timestamp, order size, depth at each price, and execution records. A top-of-book quote covers only the available quantity at that level.',
      'Compare average fill price, quantity filled, and time to execution. Measure fees separately from the effects of depth and price movement.',
      'Explain that a limit price bounds execution price but can leave the order partially or entirely unfilled.',
    ],
  },
  projects: [
    { title: 'Order Book Simulator', image: ticker, description: 'Compare market and limit orders against a sample book.', stack: ['Order Types', 'Market Depth'], focus: 'Explain why orders can fill across multiple levels.' },
    { title: 'Equity Research Brief', image: assessment, description: 'Write a company summary with financial drivers and open questions.', stack: ['Financial Statements', 'Multiples'], focus: 'Separate reported results from assumptions.' },
    { title: 'Price and Volume Dashboard', image: practice, description: 'Build charts from sample open, high, low, close, and volume data.', stack: ['Spreadsheets', 'Candlesticks'], focus: 'Explain what the chart can and cannot establish.' },
    { title: 'Portfolio Risk Comparison', image: review, description: 'Compare sample portfolios by return, drawdown, and concentration.', stack: ['Benchmarking', 'Risk Metrics'], focus: 'Explain how the measurement period affects the comparison.' },
    { title: 'Digital Asset Custody Map', image: tokens, description: 'Diagram who controls keys and how a simulated transfer settles.', stack: ['Wallets', 'Blockchain'], focus: 'Compare custody and recovery responsibilities.' },
    { title: 'Cross-Venue Quote Review', image: collaboration, description: 'Compare sample prices after accounting for spread, depth, and fees.', stack: ['Liquidity', 'Execution Costs'], focus: 'Explain when a headline price difference may disappear.' },
  ],
  questions: [
    ['Do I need a brokerage or crypto account?', 'The track uses sample quotes and simulated transactions, so you can practice without an account.'],
    ['Does the track cover both stocks and crypto?', 'Yes. It covers equity-market structure and company analysis, as well as blockchain, custody, and digital-asset markets.'],
    ['What does the mock interview cover?', 'You will explain a market-order fill and compare the trade-offs of a limit order using simulated execution data.'],
    ['Where should I start?', 'Start with the Order Book Simulator for execution mechanics, or the Digital Asset Custody Map for wallet and custody concepts.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Eligibility depends on the applicable course or internship requirements.'],
  ],
}

import monitor from '../assets/market-preview/monitor.png'
import tokens from '../assets/market-preview/tokens.png'
import ticker from '../assets/iot-telemetry/console.webp'
import './FinancePreview.css'
import './MarketPreview.css'

export default function MarketPreview() {
  return (
    <div className="finance-preview market-preview" role="img" aria-label="A market monitor with animated candlesticks, a stock ticker display, and copper digital tokens">
      <div className="finance-preview__monitor" aria-hidden="true">
        <img src={monitor} alt="" />
        <div className="finance-preview__dashboard">
          <strong>Market snapshot</strong>
          <div className="market-preview__chart">
            {[37, 50, 44, 61, 69, 60, 77, 83, 73].map((level, index) => (
              <span key={index} style={{ '--level': level + '%', '--delay': index * -110 + 'ms' }} />
            ))}
          </div>
          <div className="market-preview__legend"><span>Price action</span><span>Practice data</span></div>
        </div>
      </div>
      <span className="finance-preview__link" aria-hidden="true" />
      <img className="finance-preview__calculator" src={ticker} alt="" />
      <img className="finance-preview__report" src={tokens} alt="" />
    </div>
  )
}

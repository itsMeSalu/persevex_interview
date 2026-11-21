import monitor from '../assets/finance-preview/monitor.png'
import calculator from '../assets/finance-preview/calculator.png'
import report from '../assets/finance-preview/report.png'
import './FinancePreview.css'

export default function FinancePreview() {
  return (
    <div className="finance-preview" role="img" aria-label="A financial dashboard with animated cash flow bars, a calculator, and a printed financial report">
      <div className="finance-preview__monitor" aria-hidden="true">
        <img src={monitor} alt="" />
        <div className="finance-preview__dashboard">
          <strong>Operating cash flow</strong>
          <div className="finance-preview__chart">
            <span /><span /><span /><span /><span />
          </div>
          <div className="finance-preview__legend">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month) => <span key={month}>{month}</span>)}
          </div>
        </div>
      </div>
      <span className="finance-preview__link" aria-hidden="true" />
      <img className="finance-preview__calculator" src={calculator} alt="" />
      <img className="finance-preview__report" src={report} alt="" />
    </div>
  )
}

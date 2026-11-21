import workspace from '../assets/digital-marketing-preview/campaign-workspace.png'
import './DigitalMarketingPreview.css'

export default function DigitalMarketingPreview() {
  return (
    <div className="marketing-preview">
      <img src={workspace} alt="Isometric campaign dashboard with a growth chart, a social ad on a phone, and a copper conversion funnel" />
      <div className="marketing-preview__bars" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
      <div className="marketing-preview__chart" aria-hidden="true" />
      <span className="marketing-preview__donut" aria-hidden="true" />
      <span className="marketing-preview__engagement" aria-hidden="true">♥</span>
      <span className="marketing-preview__conversion" aria-hidden="true" />
    </div>
  )
}

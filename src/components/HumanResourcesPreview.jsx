import monitor from '../assets/hr-preview/monitor.png'
import badge from '../assets/hr-preview/badge.png'
import calendar from '../assets/hr-preview/calendar.png'
import './HumanResourcesPreview.css'

export default function HumanResourcesPreview() {
  return (
    <div className="hr-preview" role="img" aria-label="A candidate moves through screening and interviews to onboarding. Below the monitor are an interview calendar and a new-hire badge.">
      <div className="hr-preview__monitor" aria-hidden="true">
        <img src={monitor} alt="" />
        <div className="hr-preview__pipeline">
          <strong className="hr-preview__title">Hiring pipeline</strong>
          {['Screening', 'Interview', 'Onboarding'].map((stage) => (
            <div className="hr-preview__stage" key={stage}>
              <span>{stage}</span>
              <i />
            </div>
          ))}
          <span className="hr-preview__candidate"><b>AK</b> <span>Candidate</span></span>
        </div>
      </div>
      <div className="hr-preview__connection" aria-hidden="true" />
      <img className="hr-preview__prop hr-preview__badge" src={badge} alt="" />
      <img className="hr-preview__prop hr-preview__calendar" src={calendar} alt="" />
      <span className="hr-preview__appointment" aria-hidden="true">✓ Interview booked</span>
      <span className="hr-preview__appointment hr-preview__appointment--hire" aria-hidden="true">✓ Badge issued</span>
    </div>
  )
}

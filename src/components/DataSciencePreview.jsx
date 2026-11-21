import workflow from '../assets/data-science-preview/workflow.webp'
import './DataSciencePreview.css'

export default function DataSciencePreview() {
  return (
    <figure id="sample" className="data-workflow" aria-label="Data science workflow">
      <img src={workflow} alt="A spreadsheet feeds a laptop with a scatterplot, then a dashboard displays the findings" width="1152" height="555" />
      <div className="data-workflow-sheet" aria-hidden="true"><span /></div>
      <div className="data-workflow-points" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="data-workflow-trend" aria-hidden="true"><span /><i /><i /><i /><i /></div>
    </figure>
  )
}

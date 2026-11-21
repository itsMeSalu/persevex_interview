import workbench from '../assets/vlsi-preview/design-workbench.png'
import './VlsiPreview.css'

export default function VlsiPreview() {
  return (
    <div className="vlsi-preview" data-hero-visual>
      <span className="vlsi-preview__connection" aria-hidden="true" />
      <img src={workbench} alt="A chip floorplan display above a packaged integrated circuit and an open test socket" />
      <div className="vlsi-preview__screen-ui" aria-hidden="true">
        <span className="vlsi-preview__run">▶</span>
        <span className="vlsi-preview__selection" />
        <span className="vlsi-preview__block vlsi-preview__block--input" />
        <span className="vlsi-preview__block vlsi-preview__block--output" />
        <span className="vlsi-preview__signal vlsi-preview__signal--input" />
        <span className="vlsi-preview__signal vlsi-preview__signal--output" />
      </div>
      <span className="vlsi-preview__screen-sweep" aria-hidden="true" />
      <span className="vlsi-preview__socket-glow" aria-hidden="true" />
    </div>
  )
}

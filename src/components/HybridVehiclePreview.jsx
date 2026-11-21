import powertrain from '../assets/hybrid-preview/powertrain.webp'
import './HybridVehiclePreview.css'

export default function HybridVehiclePreview() {
  return (
    <figure id="sample" className="hev-preview" aria-label="Animated hybrid powertrain">
      <img src={powertrain} alt="Cutaway hybrid vehicle showing the engine, electric motor, battery, and energy flow during assist and braking" width="1120" height="683" />
      <span className="hev-preview-glow hev-preview-motor" aria-hidden="true" />
      <span className="hev-preview-glow hev-preview-battery" aria-hidden="true" />
      <span className="hev-preview-wheel" aria-hidden="true" />
      <span className="hev-preview-pulse" aria-hidden="true" />
      <span className="hev-preview-pulse hev-preview-return" aria-hidden="true" />
    </figure>
  )
}

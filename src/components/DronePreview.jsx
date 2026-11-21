import quadcopter from '../assets/drone-preview/quadcopter.webp'
import './DronePreview.css'

export default function DronePreview() {
  return (
    <figure id="sample" className="drone-preview">
      <img src={quadcopter} alt="An exploded quadcopter diagram showing the propellers, flight controller, and battery" width="1100" height="769" />
      <div className="drone-preview-rotors" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="drone-preview-signals" aria-hidden="true"><i /><i /></div>
    </figure>
  )
}

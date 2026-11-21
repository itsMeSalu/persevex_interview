import drafting from '../assets/autocad-preview/drafting.webp'
import './AutoCadPreview.css'

export default function AutoCadPreview() {
  return (
    <figure id="sample" className="autocad-preview">
      <img src={drafting} alt="Three orthographic views of a bracket on a drafting sheet beside the corresponding copper 3D model" width="1027" height="800" />
      <span className="autocad-preview-scan" aria-hidden="true" />
      <span className="autocad-preview-hole" aria-hidden="true" />
      <span className="autocad-preview-hole autocad-preview-hole-right" aria-hidden="true" />
    </figure>
  )
}

import board from '../assets/embedded-preview/test-bench.png'
import './EmbeddedPreview.css'

export default function EmbeddedPreview() {
  return (
    <div className="embedded-preview" data-hero-visual>
      <img
        src={board}
        width="1200"
        height="800"
        alt="Isometric embedded development board with a raised microcontroller, status LEDs, and a square wave on its attached display"
      />
      <div className="embedded-preview__effects" aria-hidden="true">
        <span className="embedded-preview__switch embedded-preview__switch--first" />
        <span className="embedded-preview__switch embedded-preview__switch--second" />
        <span className="embedded-preview__led embedded-preview__led--input" />
        <span className="embedded-preview__led embedded-preview__led--output" />
        <span className="embedded-preview__signal embedded-preview__signal--input" />
        <span className="embedded-preview__signal embedded-preview__signal--output" />
        <span className="embedded-preview__scope" />
      </div>
    </div>
  )
}

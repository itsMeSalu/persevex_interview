import phoneWorkflow from '../assets/android-preview/phone-workflow.webp'
import './AndroidPreview.css'

export default function AndroidPreview() {
  return (
    <figure id="sample" className="android-preview" aria-label="Android offline sync preview">
      <img src={phoneWorkflow} alt="An Android notes app connected to local storage and a remote server" width="899" height="950" />
      <span className="android-preview-screen" aria-hidden="true" />
      <span className="android-preview-compose" aria-hidden="true" />
      <span className="android-preview-note" aria-hidden="true">
        <span>✓</span>
      </span>
      <span className="android-preview-cache" aria-hidden="true" />
      <span className="android-preview-network" aria-hidden="true" />
      <figcaption className="android-preview-caption">
        <span className="sr-only">A note is saved on the device, queued while offline, and synced after connectivity returns.</span>
        <span aria-hidden="true" className="android-preview-status">
          <span>Saved offline</span>
          <span>Syncing</span>
          <span>Up to date</span>
        </span>
      </figcaption>
    </figure>
  )
}

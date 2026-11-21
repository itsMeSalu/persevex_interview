import { useEffect, useState } from 'react'
import browserImage from '../assets/full-stack-preview/browser.webp'
import gatewayImage from '../assets/full-stack-preview/gateway.webp'
import serverImage from '../assets/full-stack-preview/server.webp'
import databaseImage from '../assets/full-stack-preview/database.webp'
import './FullStackPreview.css'

const fullStackStages = [
  'Ready to add a task',
  'Browser sends the request to the network gateway',
  'Gateway routes the request to the application server',
  'Server saves the task to the database',
  'Database confirms the write to the server',
  'Server returns the result through the gateway',
  'Browser receives the response',
  'New task appears in the browser',
]

export default function FullStackPreview({ preview }) {
  const stages = preview?.stages ?? fullStackStages
  const images = preview?.images ?? [browserImage, gatewayImage, serverImage, databaseImage]
  const [client, gateway, server, database] = images
  const [stage, setStage] = useState(0)
  const saved = stage === stages.length - 1
  const running = stage > 0 && !saved

  useEffect(() => {
    if (saved) return
    const timer = window.setTimeout(() => setStage(stage + 1), stage === 0 ? 1000 : 520)
    return () => window.clearTimeout(timer)
  }, [saved, stage])

  return (
    <figure id="sample" className={`stack-preview ${preview ? 'stack-preview-float' : ''}`} data-wide-connectors={preview?.wideConnectors} aria-label={preview?.label ?? 'Full-stack request and response simulation'} data-stage={stage}>
      <div className="stack-browser">
        <img src={client} alt="" width="900" height={preview?.clientImageHeight ?? 522} />
        <span className="stack-browser-result" data-saved={saved} aria-hidden="true">✓</span>
        <button
          className="stack-browser-action"
          type="button"
          aria-label={saved ? (preview?.replayLabel ?? 'Replay full-stack request') : (preview?.startLabel ?? 'Add a task')}
          aria-disabled={running}
          onClick={() => { if (!running) setStage(1) }}
        >
          <span aria-hidden="true">{saved ? '↻' : '+'}</span>
        </button>
      </div>

      <div className="stack-browser-link" aria-hidden="true"><span /><i /></div>

      <div className="stack-infrastructure" aria-hidden="true">
        <img className="stack-object stack-gateway" src={gateway} alt="" data-active={stage === 1 || stage === 5 || stage === 6} />
        <div className="stack-link stack-route"><i /></div>
        <img className="stack-object stack-server" src={server} alt="" data-active={stage === 2 || stage === 4 || stage === 5} />
        <div className="stack-link stack-storage"><i /></div>
        <img className="stack-object stack-database" src={database} alt="" data-active={stage === 3 || stage === 4} />
      </div>
      <p className="sr-only" role="status">{stages[stage]}</p>
    </figure>
  )
}

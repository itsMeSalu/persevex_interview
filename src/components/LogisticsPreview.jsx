import supplyChain from '../assets/logistics-preview/global-supply-chain.webp'
import './LogisticsPreview.css'

export default function LogisticsPreview() {
  return (
    <figure id="sample" className="logistics-preview">
      <img
        src={supplyChain}
        alt="A globe with a cargo plane, container ship, warehouse, truck, and pallet of parcels"
        width="1100"
        height="1005"
      />
      <div className="logistics-preview__motion" aria-hidden="true">
        <span className="logistics-preview__signal" />
        <span className="logistics-preview__signal logistics-preview__signal--trail" />
        <span className="logistics-preview__wing-light" />
        <span className="logistics-preview__dock-light" />
        <span className="logistics-preview__truck-light" />
      </div>
    </figure>
  )
}

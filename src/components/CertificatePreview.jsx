import logo from '../assets/antintern-logo.svg'

export default function CertificatePreview({ title, id, programTitle = 'Full Stack Web Development' }) {
  return (
    <div id={id} aria-hidden="true" className="@container aspect-[1.42] w-full overflow-hidden rounded-md border border-[#e4c6b3] bg-[#fffdf8] p-[3%]">
      <div className="flex size-full flex-col items-center justify-center gap-[4%] border border-[#edd9cb] bg-[radial-gradient(ellipse_at_bottom,#fff1e6,transparent_65%)] px-[7%] text-center text-[#281e1a]">
        <div className="flex items-center justify-center gap-[1.5cqw] text-[5.2cqw] leading-none font-extrabold tracking-tight">
          <img src={logo} alt="" className="size-[7.2cqw]" />
          AntIntern
        </div>
        <p className="max-w-[23ch] font-serif text-[7.8cqw] leading-[1.05] tracking-tight">{title}</p>
        <span className="h-px w-[22%] bg-[#c37954]" />
        <p className="text-[3.6cqw] font-semibold text-[#795647]">{programTitle}</p>
        <p className="text-[3cqw] font-bold tracking-wide text-[#795647] uppercase">Sample certificate</p>
      </div>
    </div>
  )
}

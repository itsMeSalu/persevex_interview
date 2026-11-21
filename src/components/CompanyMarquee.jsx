import tcs from '../assets/companies/tcs.svg'
import wipro from '../assets/companies/wipro.svg'
import google from '../assets/companies/google.png'
import meta from '../assets/companies/meta.png'
import ibm from '../assets/companies/ibm.svg'
import infosys from '../assets/companies/infosys.svg'
import deloitte from '../assets/companies/deloitte.svg'

const companies = [
  ['Tata Consultancy Services', tcs],
  ['Wipro', wipro],
  ['Google', google],
  ['Meta', meta],
  ['IBM', ibm],
  ['Infosys', infosys],
  ['Deloitte', deloitte],
]

export default function CompanyMarquee() {
  return (
    <section aria-labelledby="company-marquee-title" className="page-width pt-6 pb-12 text-center sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      <div data-scroll-reveal>
        <h2 id="company-marquee-title" className="hero-title mx-auto max-w-[23ch] text-balance text-[#14223a]">
          Learn from experts at <span className="brand-gradient-text">leading companies</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[55ch] px-2 text-base leading-relaxed text-[#574b43] sm:text-lg lg:text-xl">
          Get practical guidance from working engineers, analysts, and managers who know what the job demands.
        </p>
      </div>
      <div className="company-marquee mt-6 py-3 sm:mt-8">
        <div className="company-marquee-track">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} aria-hidden={duplicate ? true : undefined} className={duplicate ? 'company-marquee-copy' : undefined}>
              {companies.map(([name, logo]) => (
                <li key={name} className="px-2">
                  <div className="flex h-16 w-full items-center justify-center rounded-full border border-[#f0cbb4] bg-white px-4 shadow-[0_4px_12px_#a65b3012] sm:h-20 sm:px-5">
                    <img src={logo} alt={duplicate ? '' : name} className="h-10 w-full max-w-32 object-contain sm:h-12" />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

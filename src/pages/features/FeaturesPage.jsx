import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'
import FeaturesHero from './components/FeaturesHero.jsx'
import ConnectedLearningEcosystem from './components/ConnectedLearningEcosystem.jsx'
import CompletePackage from './components/CompletePackage.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CareerCTA from './components/CareerCTA.jsx'
import './features.css'

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="features-page min-h-screen w-full bg-white">
        <FeaturesHero />
        <ConnectedLearningEcosystem />
        <CompletePackage />
        <HowItWorks />
        <CareerCTA startHref="/#interviews" scheduleHref="mailto:support@antintern.com?subject=Interview%20preparation" />
      </main>
      <SiteFooter />
    </>
  )
}

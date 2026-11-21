import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CertificateDetailsPage from './pages/CertificateDetailsPage.jsx'
import FullStackInterviewPage from './pages/FullStackInterviewPage.jsx'
import { cloudInterviewPath, cloudInterviewTrack } from './pages/cloudInterviewTrack.js'
import { machineLearningInterviewPath, machineLearningInterviewTrack } from './pages/machineLearningInterviewTrack.js'
import { artificialIntelligenceInterviewPath, artificialIntelligenceInterviewTrack } from './pages/artificialIntelligenceInterviewTrack.js'
import { dataScienceInterviewPath, dataScienceInterviewTrack } from './pages/dataScienceInterviewTrack.js'
import { cybersecurityInterviewPath, cybersecurityInterviewTrack } from './pages/cybersecurityInterviewTrack.js'
import { uiUxDesignInterviewPath, uiUxDesignInterviewTrack } from './pages/uiUxDesignInterviewTrack.js'
import HomePage from './pages/HomePage.jsx'
import { embeddedInterviewPath, embeddedInterviewTrack } from './pages/embeddedInterviewTrack.js'
import { iotInterviewPath, iotInterviewTrack } from './pages/iotInterviewTrack.js'
import { hybridVehiclesInterviewPath, hybridVehiclesInterviewTrack } from './pages/hybridVehiclesInterviewTrack.js'
import { droneMechanicsInterviewPath, droneMechanicsInterviewTrack } from './pages/droneMechanicsInterviewTrack.js'
import { autocadInterviewPath, autocadInterviewTrack } from './pages/autocadInterviewTrack.js'
import { dataAnalyticsInterviewPath, dataAnalyticsInterviewTrack } from './pages/dataAnalyticsInterviewTrack.js'
import { androidDevelopmentInterviewPath, androidDevelopmentInterviewTrack } from './pages/androidDevelopmentInterviewTrack.js'
import { javaDevelopmentInterviewPath, javaDevelopmentInterviewTrack } from './pages/javaDevelopmentInterviewTrack.js'
import { vlsiInterviewPath, vlsiInterviewTrack } from './pages/vlsiInterviewTrack.js'
import { digitalMarketingInterviewPath, digitalMarketingInterviewTrack } from './pages/digitalMarketingInterviewTrack.js'
import { humanResourcesInterviewPath, humanResourcesInterviewTrack } from './pages/humanResourcesInterviewTrack.js'
import { financeInterviewPath, financeInterviewTrack } from './pages/financeInterviewTrack.js'
import { stockMarketInterviewPath, stockMarketInterviewTrack } from './pages/stockMarketInterviewTrack.js'
import { logisticsInterviewPath, logisticsInterviewTrack } from './pages/logisticsInterviewTrack.js'
import { businessAnalyticsInterviewPath, businessAnalyticsInterviewTrack } from './pages/businessAnalyticsInterviewTrack.jsx'
import { businessLawInterviewPath, businessLawInterviewTrack } from './pages/businessLawInterviewTrack.jsx'
import { psychologyInterviewPath, psychologyInterviewTrack } from './pages/psychologyInterviewTrack.jsx'
import { medicalCodingInterviewPath, medicalCodingInterviewTrack } from './pages/medicalCodingInterviewTrack.jsx'
import './assets/main.css'

const routes = {
  [medicalCodingInterviewPath]: () => <FullStackInterviewPage track={medicalCodingInterviewTrack} />,
  [psychologyInterviewPath]: () => <FullStackInterviewPage track={psychologyInterviewTrack} />,
  [businessLawInterviewPath]: () => <FullStackInterviewPage track={businessLawInterviewTrack} />,
  [businessAnalyticsInterviewPath]: () => <FullStackInterviewPage track={businessAnalyticsInterviewTrack} />,
  [logisticsInterviewPath]: () => <FullStackInterviewPage track={logisticsInterviewTrack} />,
  [stockMarketInterviewPath]: () => <FullStackInterviewPage track={stockMarketInterviewTrack} />,
  [financeInterviewPath]: () => <FullStackInterviewPage track={financeInterviewTrack} />,
  [humanResourcesInterviewPath]: () => <FullStackInterviewPage track={humanResourcesInterviewTrack} />,
  [digitalMarketingInterviewPath]: () => <FullStackInterviewPage track={digitalMarketingInterviewTrack} />,
  [vlsiInterviewPath]: () => <FullStackInterviewPage track={vlsiInterviewTrack} />,
  [embeddedInterviewPath]: () => <FullStackInterviewPage track={embeddedInterviewTrack} />,
  [iotInterviewPath]: () => <FullStackInterviewPage track={iotInterviewTrack} />,
  [hybridVehiclesInterviewPath]: () => <FullStackInterviewPage track={hybridVehiclesInterviewTrack} />,
  [droneMechanicsInterviewPath]: () => <FullStackInterviewPage track={droneMechanicsInterviewTrack} />,
  [autocadInterviewPath]: () => <FullStackInterviewPage track={autocadInterviewTrack} />,
  [dataAnalyticsInterviewPath]: () => <FullStackInterviewPage track={dataAnalyticsInterviewTrack} />,
  [androidDevelopmentInterviewPath]: () => <FullStackInterviewPage track={androidDevelopmentInterviewTrack} />,
  [javaDevelopmentInterviewPath]: () => <FullStackInterviewPage track={javaDevelopmentInterviewTrack} />,
  '/certificates': CertificateDetailsPage,
  [uiUxDesignInterviewPath]: () => <FullStackInterviewPage track={uiUxDesignInterviewTrack} />,
  [cybersecurityInterviewPath]: () => <FullStackInterviewPage track={cybersecurityInterviewTrack} />,
  [dataScienceInterviewPath]: () => <FullStackInterviewPage track={dataScienceInterviewTrack} />,
  [artificialIntelligenceInterviewPath]: () => <FullStackInterviewPage track={artificialIntelligenceInterviewTrack} />,
  [machineLearningInterviewPath]: () => <FullStackInterviewPage track={machineLearningInterviewTrack} />,
  [cloudInterviewPath]: () => <FullStackInterviewPage track={cloudInterviewTrack} />,
  '/interviews/full-stack-web-development': FullStackInterviewPage,
}
const path = window.location.pathname.replace(/\/$/, '')
const Page = Object.hasOwn(routes, path) ? routes[path] : HomePage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)

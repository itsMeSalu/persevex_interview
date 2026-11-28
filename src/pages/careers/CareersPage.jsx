"use client";
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import ApplicationFormModal from './ApplicationFormModal';
import SiteHeader from '../../components/SiteHeader.jsx';
import SiteFooter from '../../components/SiteFooter.jsx';
import CareersHero from './components/CareersHero';
import CareersBenefits from './components/CareersBenefits';
import CareersPositions from './components/CareersPositions';
import CareersCulture from './components/CareersCulture';
import './careers.css';
export default function CareersPage() {
 const [firmOpen,setFirmOpen]=useState(false);
 const [applicationModalOpen,setApplicationModalOpen]=useState(false);
 const [selectedJob,setSelectedJob]=useState({title:'General Application',id:'general'});
 const onApply=job=>{setSelectedJob(job);setApplicationModalOpen(true);};
 return <><SiteHeader /><main className="careers-page text-[#402b19] bg-white font-[family-name:var(--font-sans,_Inter,_system-ui,_sans-serif)] overflow-x-clip">
 <CareersHero onApply={()=>onApply({title:'General Application',id:'general'})} onAbout={()=>setFirmOpen(true)}/>
 <CareersBenefits/><CareersPositions onApply={onApply}/><CareersCulture/>
 <div className="text-foreground"><ApplicationFormModal isOpen={applicationModalOpen} onClose={()=>setApplicationModalOpen(false)} jobTitle={selectedJob.title} jobId={selectedJob.id}/></div>
      <AnimatePresence>
        {firmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start md:items-center justify-center z-[998] p-4 overflow-y-auto"
            onClick={() => setFirmOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white text-foreground rounded-2xl p-6 md:p-8 max-w-lg w-full my-4 md:my-0 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">About AntIntern</h2>
              <p className="mb-4 text-[#706056]">
                AntIntern helps learners prepare for technical and domain interviews through practice, project discussions, and feedback. Explore how your skills could contribute to the platform.
              </p>
              <button
                onClick={() => setFirmOpen(false)}
                className="mt-2 px-6 py-3 md:px-4 md:py-2 bg-[#fa7405] text-white rounded-full hover:bg-[#fa7405]/90 transition-colors touch-manipulation"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<div className="company-footer font-sans"><SiteFooter/></div>
 </main></>;
}

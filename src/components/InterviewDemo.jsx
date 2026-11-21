import { useId, useRef, useState } from 'react'

const defaultPrompts = [
  'Given a list of candidate IDs, how would you return the duplicates in the order they first repeat?',
  'How would you handle the same problem if the list were too large to fit in memory?',
]

const defaultFeedback = [
  'Use one set for IDs you’ve seen and another for IDs you’ve already reported. This preserves the order of first repeats.',
  'Test an empty list and an ID that occurs three times. Each duplicate should appear only once.',
  'For larger inputs, discuss storing membership on disk and trading memory use for extra I/O.',
]

export default function InterviewDemo({ blue = false, prompts = defaultPrompts, feedback = defaultFeedback }) {
  const titleId = useId()
  const answerId = useId()
  const dialog = useRef(null)
  const heading = useRef(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(['', ''])

  function openDemo() {
    setStep(0)
    setAnswers(['', ''])
    dialog.current.showModal()
  }

  function nextStep() {
    setStep((current) => current + 1)
    heading.current.focus()
  }

  return (
    <>
      <button type="button" onClick={openDemo} className={`inline-flex min-h-12 cursor-pointer items-center rounded-xl border px-5 py-3 font-bold transition-colors motion-reduce:transition-none ${blue ? 'border-[#073467] text-[#073467] hover:bg-[#e5eefc]' : 'border-[#d84f14] text-[#a53508] hover:bg-[#fff1e7]'}`}>
        Try Interview Demo
      </button>

      <dialog ref={dialog} aria-labelledby={titleId} className="fixed inset-0 m-auto max-h-[90dvh] w-[min(92vw,34rem)] overflow-y-auto rounded-2xl border border-[#eadfd7] bg-white p-5 text-[#14223a] shadow-2xl backdrop:bg-[#17243d80] sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 ref={heading} tabIndex={-1} id={titleId} className="platform-title text-2xl">Sample technical interview</h2>
          <button type="button" aria-label="Close interview demo" onClick={() => dialog.current.close()} className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-[#eadfd7] text-xl hover:bg-[#fff4eb]">×</button>
        </div>

        {step < prompts.length ? (
          <>
            <p className="mb-2 text-sm font-semibold text-[#963d26]">{step === 0 ? 'Question' : 'Follow-up'}</p>
            <p className="mb-4 text-lg leading-relaxed">{prompts[step]}</p>
            <label htmlFor={answerId} className="mb-2 block text-sm font-semibold">Your response (optional)</label>
            <textarea id={answerId} rows={4} value={answers[step]} onChange={(event) => setAnswers(answers.map((answer, index) => index === step ? event.target.value : answer))} className="w-full resize-y rounded-xl border border-[#e4d2c6] p-3 focus-visible:outline-2 focus-visible:outline-[#b74313]" />
            <button type="button" onClick={nextStep} className="hero-action mt-4 cursor-pointer bg-[#a83e16] text-white hover:bg-[#8e3210]">
              {step === 0 ? 'Next question' : 'See example feedback'} <span aria-hidden="true">→</span>
            </button>
          </>
        ) : (
          <>
            <h3 className="mb-2 font-semibold text-[#963d26]">Example feedback</h3>
            <ul className="mb-5 list-disc space-y-2 pl-5 leading-relaxed text-[#574b43]">
              {feedback.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="hero-action hero-action-primary" href="https://www.antintern.com/signup">Start practicing on AntIntern <span aria-hidden="true">↗</span></a>
          </>
        )}
      </dialog>
    </>
  )
}

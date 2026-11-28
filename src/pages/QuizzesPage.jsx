import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock3, Search, X } from 'lucide-react'
import codingImage from '../assets/team-debrief.webp'
import interviewImage from '../assets/interview.webp'
import systemImage from '../assets/cloud-preview/balancer.webp'
import aptitudeImage from '../assets/assessment.webp'
import portfolioImage from '../assets/ui-ux-preview/prototype.webp'
import communicationImage from '../assets/psychology-preview.webp'
import './quizzes.css'

const quizzes = [
  { id: 'coding', title: 'Coding Fundamentals', category: 'Coding', level: 'Beginner', minutes: 5, image: codingImage, description: 'Arrays, loops, and problem solving basics.', questions: [
    { text: 'Which data structure stores values in an ordered sequence?', options: ['Array', 'Graph', 'Hash function', 'Compiler'], answer: 0 },
    { text: 'What is the index of the first element in a JavaScript array?', options: ['1', '0', '-1', 'It varies'], answer: 1 },
    { text: 'Which loop runs while its condition is true?', options: ['while', 'switch', 'return', 'import'], answer: 0 },
  ] },
  { id: 'interview', title: 'Interview Essentials', category: 'Interview', level: 'Beginner', minutes: 5, image: interviewImage, description: 'Practice clear answers to common interview questions.', questions: [
    { text: 'What is a strong way to structure a behavioral answer?', options: ['STAR method', 'One-word reply', 'Read your resume', 'Avoid examples'], answer: 0 },
    { text: 'What should you do when a question is unclear?', options: ['Guess immediately', 'Ask a clarifying question', 'Stay silent', 'Skip it'], answer: 1 },
    { text: 'Which answer best shows impact?', options: ['I worked hard', 'I helped the team', 'I reduced load time by 30%', 'It went well'], answer: 2 },
  ] },
  { id: 'system', title: 'System Design Basics', category: 'Technical', level: 'Intermediate', minutes: 5, image: systemImage, description: 'Explore scalability, caching, and system components.', questions: [
    { text: 'What does a cache primarily improve?', options: ['Latency', 'Source code style', 'Screen brightness', 'Keyboard input'], answer: 0 },
    { text: 'What distributes requests across servers?', options: ['Load balancer', 'Text editor', 'Firewall rule', 'Compiler'], answer: 0 },
    { text: 'Which property helps a service handle increased traffic?', options: ['Scalability', 'Opacity', 'Syntax', 'Contrast'], answer: 0 },
  ] },
  { id: 'aptitude', title: 'Aptitude Practice', category: 'Aptitude', level: 'Beginner', minutes: 5, image: aptitudeImage, description: 'Strengthen quick reasoning and numerical skills.', questions: [
    { text: 'What is 15% of 200?', options: ['15', '20', '30', '45'], answer: 2 },
    { text: 'If a train travels 60 km in one hour, how far in two hours?', options: ['30 km', '60 km', '90 km', '120 km'], answer: 3 },
    { text: 'What comes next: 2, 4, 8, 16?', options: ['18', '24', '32', '64'], answer: 2 },
  ] },
  { id: 'portfolio', title: 'Portfolio Readiness', category: 'Career', level: 'Beginner', minutes: 5, image: portfolioImage, description: 'Make your projects easier for recruiters to assess.', questions: [
    { text: 'Which detail helps explain a project best?', options: ['Only the title', 'Your role and measurable result', 'A long list of tools', 'No description'], answer: 1 },
    { text: 'What should a project link ideally open?', options: ['A working demo or repository', 'An empty page', 'A login error', 'An unrelated site'], answer: 0 },
    { text: 'Which claim is strongest?', options: ['Built a dashboard', 'Improved reporting time by 40%', 'Used technology', 'Worked on a team'], answer: 1 },
  ] },
  { id: 'communication', title: 'Communication Skills', category: 'Interview', level: 'Beginner', minutes: 5, image: communicationImage, description: 'Explain your thinking with confidence and clarity.', questions: [
    { text: 'What helps an interviewer follow your solution?', options: ['Explain your approach aloud', 'Speak as fast as possible', 'Skip assumptions', 'Use jargon only'], answer: 0 },
    { text: 'What should you do after receiving feedback?', options: ['Ignore it', 'Ask questions and apply it', 'Argue immediately', 'Change the topic'], answer: 1 },
    { text: 'Which response communicates uncertainty honestly?', options: ['I know everything', 'I would verify that assumption', 'That is impossible', 'No comment'], answer: 1 },
  ] },
]

const categories = ['All quizzes', 'Coding', 'Interview', 'Technical', 'Aptitude', 'Career']

export default function QuizzesPage() {
  const [category, setCategory] = useState('All quizzes')
  const [query, setQuery] = useState('')
  const [activeQuiz, setActiveQuiz] = useState(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [choice, setChoice] = useState(null)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [finished, setFinished] = useState([])
  const visible = quizzes.filter((quiz) => (category === 'All quizzes' || quiz.category === category) && `${quiz.title} ${quiz.description}`.toLowerCase().includes(query.toLowerCase()))

  function openQuiz(quiz) { setActiveQuiz(quiz); setQuestionIndex(0); setChoice(null); setScore(0); setCompleted(false) }
  function nextQuestion() {
    const nextScore = score + Number(choice === activeQuiz.questions[questionIndex].answer)
    setScore(nextScore)
    if (questionIndex === activeQuiz.questions.length - 1) { setCompleted(true); setFinished((current) => current.includes(activeQuiz.id) ? current : [...current, activeQuiz.id]) }
    else { setQuestionIndex((current) => current + 1); setChoice(null) }
  }

  return <div className="quizzes-page">
    <div className="quizzes-header"><div className="quizzes-header-copy"><span className="quizzes-eyebrow">PRACTICE AND PROGRESS</span><h1>Quizzes</h1><p>Put your skills to the test with short quizzes across coding, interviews, aptitude, and career preparation.</p></div><div className="quizzes-header-stat"><CheckCircle2 size={18} /><strong>{finished.length}</strong><span>completed</span></div></div>
    <div className="quizzes-toolbar"><div className="quizzes-categories" aria-label="Quiz categories">{categories.map((item) => <button key={item} type="button" className={item === category ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="quizzes-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search quizzes" aria-label="Search quizzes" /></label></div>
    <div className="quizzes-layout"><div className="quizzes-grid">{visible.length ? visible.map((quiz) => <article className="quizzes-card" key={quiz.id}><div className={`quizzes-image quizzes-image-${quiz.id}`}><img src={quiz.image} alt="" loading="lazy" /><span className="quizzes-art-index">{String(quizzes.indexOf(quiz) + 1).padStart(2, "0")}</span></div><div className="quizzes-card-body"><div className="quizzes-card-meta"><span>{quiz.level}</span><span><Clock3 size={14} /> {quiz.minutes} min</span></div><h2>{quiz.title}</h2><p>{quiz.description}</p><div className="quizzes-card-footer"><span>{quiz.questions.length} questions{finished.includes(quiz.id) ? ' · Completed' : ''}</span><button type="button" onClick={() => openQuiz(quiz)}>{finished.includes(quiz.id) ? 'Try again' : 'Start quiz'} <ArrowRight size={16} /></button></div></div></article>) : <p className="quizzes-empty">No quizzes found. Try another search or category.</p>}</div><aside className="quizzes-side"><h2>Find your next quiz</h2><p>Browse by skill area, then take a short quiz to check your understanding.</p><div className="quizzes-side-divider" /><strong>Categories</strong><div className="quizzes-filter-list">{categories.slice(1).map((item) => <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)}><span>{item}</span><span>{quizzes.filter((quiz) => quiz.category === item).length}</span></button>)}</div></aside></div>
    {activeQuiz && <div className="quizzes-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveQuiz(null) }}><section className="quizzes-modal" role="dialog" aria-modal="true" aria-label={`${activeQuiz.title} quiz`}><div className="quizzes-modal-head"><div><small>{activeQuiz.category} QUIZ</small><h2>{activeQuiz.title}</h2></div><button type="button" aria-label="Close quiz" onClick={() => setActiveQuiz(null)}><X size={20} /></button></div>{completed ? <div className="quizzes-result"><CheckCircle2 size={38} /><h3>Quiz complete</h3><p>You answered {score} of {activeQuiz.questions.length} questions correctly.</p><button type="button" onClick={() => setActiveQuiz(null)}>Back to quizzes</button></div> : <div className="quizzes-question"><span>Question {questionIndex + 1} of {activeQuiz.questions.length}</span><h3>{activeQuiz.questions[questionIndex].text}</h3><div className="quizzes-options">{activeQuiz.questions[questionIndex].options.map((option, index) => <button key={option} type="button" className={choice === index ? 'selected' : ''} onClick={() => setChoice(index)}>{option}</button>)}</div><button className="quizzes-next" type="button" disabled={choice === null} onClick={nextQuestion}>{questionIndex === activeQuiz.questions.length - 1 ? 'Finish quiz' : 'Next question'} <ArrowRight size={16} /></button></div>}</section></div>}
  </div>
}

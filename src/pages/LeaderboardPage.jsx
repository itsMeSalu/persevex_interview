import { useState } from 'react'
import { Crown, Flame, Star, Target, Trophy, UserRound, Zap } from 'lucide-react'
import SiteHeader from '../components/SiteHeader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import './leaderboard.css'

const learners = [
  ['Aarav Sharma', 'AS', 'peach', 1520, 680, 520, 320, 23],
  ['Priya Nair', 'PN', 'purple', 1380, 610, 460, 310, 15],
  ['Rohan Mehta', 'RM', 'blue', 1210, 500, 410, 300, 12],
  ['Sneha Patel', 'SP', 'mint', 1060, 450, 360, 250, 10],
  ['Kabir Singh', 'KS', 'gold', 940, 390, 330, 220, 9],
  ['Ananya Gupta', 'AG', 'rose', 845, 350, 285, 210, 8],
  ['Dev Kumar', 'DK', 'purple', 760, 300, 260, 200, 7],
  ['Ishita Rao', 'IR', 'mint', 690, 280, 230, 180, 6],
  ['Aditya Shah', 'AS', 'blue', 612, 250, 202, 160, 5],
  ['Meera Joshi', 'MJ', 'rose', 548, 220, 178, 150, 4],
].map(([name, initials, color, overall, problems, interviews, prepare, streak]) => ({ name, initials, color, overall, problems, interviews, prepare, streak }))

const categories = [
  { id: 'overall', label: 'Overall', Icon: Trophy },
  { id: 'problems', label: 'Problems', Icon: Target },
  { id: 'interviews', label: 'Interviews', Icon: UserRound },
  { id: 'prepare', label: 'Prepare', Icon: Zap },
]

export function LeaderboardContent({ embedded = false }) {
  const [category, setCategory] = useState('overall')
  const [period, setPeriod] = useState('week')
  const multiplier = period === 'all' ? 4 : 1
  const ranked = [...learners].sort((a, b) => b[category] - a[category])
  const leader = ranked[0]
  const categoryLabel = categories.find((item) => item.id === category).label
  const points = (value) => (value * multiplier).toLocaleString('en-IN')

  return <>
    {!embedded && <SiteHeader />}
    <main className="leaderboard-page">
      <div className="leaderboard-intro">
        <div className="leaderboard-intro-copy">
          <span className="leaderboard-welcome">WELCOME, CHAMPION</span>
          <h1>Bronze League</h1>
          <p>Compete for the top spots. Resets every Sunday.</p>
        </div>
        <div className="leaderboard-current-league">
          <span className="leaderboard-league-medal"><Trophy size={19} /></span>
          <span><small>YOUR LEAGUE</small><strong>Bronze <span>League</span></strong></span>
        </div>
      </div>
      <div className="leaderboard-controls">
        <div className="leaderboard-tabs" role="tablist" aria-label="Leaderboard category">
          {categories.map(({ id, label, Icon }) => <button key={id} type="button" role="tab" aria-selected={category === id} className={category === id ? 'active' : ''} onClick={() => setCategory(id)}><Icon size={16} />{label}</button>)}
        </div>
        <label className="leaderboard-period">Period <select value={period} onChange={(event) => setPeriod(event.target.value)}><option value="week">This week</option><option value="all">All time</option></select></label>
      </div>
      <div className="leaderboard-grid">
        <section className="leaderboard-list-card" aria-label="Learner rankings">
          <div className="leaderboard-card-heading"><div><h2>Top learners</h2><p>Ranked by {categoryLabel.toLowerCase()} points</p></div><span>{ranked.length} learners</span></div>
          <div className="leaderboard-list">{ranked.map((person, index) => <div className={`leaderboard-row${index === 0 ? ' first' : ''}`} key={person.name}>
            <span className={`leaderboard-position${index < 3 ? ` top-${index + 1}` : ''}`}>{index < 3 ? <Trophy size={18} strokeWidth={1.8} aria-label={`Rank ${index + 1}`} /> : index + 1}</span>
            <span className={`leaderboard-avatar ${person.color}`}>{person.initials}</span>
            <span className="leaderboard-person"><strong>{person.name}</strong><small><Flame size={12} /> {person.streak} day streak</small></span>
            <span className="leaderboard-score">{points(person[category])} <small>pts</small></span>
          </div>)}</div>
        </section>
        <aside className="leaderboard-side">
          <section className="leaderboard-summary-card">
            <div className="leaderboard-card-heading"><div><h2>Community leader</h2><p>{categoryLabel} · {period === 'week' ? 'This week' : 'All time'}</p></div><span className="leaderboard-crown"><Crown size={19} strokeWidth={1.8} /></span></div>
            <div className="leaderboard-feature-profile"><div className={`leaderboard-feature-avatar ${leader.color}`}>{leader.initials}</div><div><strong className="leaderboard-feature-name">{leader.name}</strong><span className="leaderboard-feature-caption">Rank #1</span></div></div>
            <div className="leaderboard-summary-stats">
              <div><Trophy size={16} /><strong>1st</strong><small>Ranking</small></div>
              <div><Star size={16} /><strong>{points(leader[category])}</strong><small>Points</small></div>
              <div><Flame size={16} /><strong>{leader.streak} days</strong><small>Streak</small></div>
              <div><Target size={16} /><strong>{category === 'overall' ? 'All tracks' : categoryLabel}</strong><small>Category</small></div>
            </div>
          </section>
          <section className="leaderboard-tip"><div><Zap size={17} /><strong>Keep your momentum going</strong></div><p>Practice regularly to earn points and climb the board.</p><a href="/problems">Explore problems →</a></section>
        </aside>
      </div>
    </main>
    {!embedded && <SiteFooter />}
  </>
}

export default function LeaderboardPage() { return <LeaderboardContent /> }

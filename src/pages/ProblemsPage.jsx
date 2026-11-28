import { useEffect, useRef, useState } from 'react'

import {
  Search,
  ArrowDownUp,
  ArrowUpRight,
  LockKeyhole,
  Filter,
  X,
} from 'lucide-react'

import {
  FaGoogle,
  FaAmazon,
  FaUber,
  FaMicrosoft,
  FaApple,
  FaAirbnb,
  FaFacebook,
} from 'react-icons/fa'

import { SiAsana } from 'react-icons/si'

import './problems.css'


function AdobeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14 3h7v18L14 3ZM3 3h7L3 21V3Zm9 7 5 11h-4l-1-3H8l4-8Z" />
    </svg>
  )
}


/* =========================================
   COMPANY DATA
========================================= */

const companies = [
  ['Google', FaGoogle, '#4285f4'],
  ['Amazon', FaAmazon, '#b67c16'],
  ['Uber', FaUber, '#171717'],
  ['Microsoft', FaMicrosoft, '#ee8a19'],
  ['Apple', FaApple, '#171717'],
  ['Adobe', AdobeIcon, '#ed2224'],
  ['Airbnb', FaAirbnb, '#ff5a66'],
  ['Asana', SiAsana, '#f36a70'],
  ['Facebook', FaFacebook, '#4279ed'],
]


const problemCompanies = [
  ['Google', 'Microsoft', 'Amazon'],
  ['Amazon', 'Apple', 'Facebook'],
  ['Google', 'Microsoft', 'Apple'],
  ['Google', 'Amazon'],
  ['Google', 'Amazon', 'Microsoft'],
  ['Facebook', 'Microsoft', 'Adobe'],
  ['Google', 'Facebook', 'Amazon'],
  ['Google', 'Facebook', 'Microsoft'],
  ['Apple', 'Amazon', 'Facebook'],
]


/* =========================================
   PROBLEMS DATA
========================================= */

const problems = [
  ['Reverse That String!', 'Easy', 100, 79, 'Fundamentals'],
  ['The Sum of All Numbers', 'Easy', 100, 70, 'Math'],
  ['Spiral Matrix Generator', 'Medium', 250, 83, 'Arrays', true],
  ['Find the Biggest Number', 'Easy', 100, 100, 'Fundamentals'],
  ['FizzBuzz Fiesta', 'Easy', 100, 90, 'Strings'],
  ['The Palindrome Puzzler', 'Easy', 100, 100, 'Two Pointers'],
  ['Valid Parentheses', 'Medium', 250, 100, 'Strings'],
  ['Flatten a Nested Array', 'Medium', 250, 100, 'Arrays'],
  ['Most Frequent Character', 'Medium', 250, 50, 'Hash Table'],
].map(
  (
    [title, difficulty, xp, acceptance, topic, premium = false],
    index
  ) => ({
    id: index + 1,
    title,
    difficulty,
    xp,
    acceptance,
    topic,
    premium,
  })
)


const topics = [
  ...new Set(problems.map(problem => problem.topic)),
]


/* =========================================
   MAIN COMPONENT
========================================= */

export default function ProblemsPage() {

  const filtersRef = useRef(null)
  const filterButton = useRef(null)

  const [filtersOpen, setFiltersOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const [company, setCompany] = useState('')
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [topic, setTopic] = useState('')
  const [sort, setSort] = useState('default')


  /* =========================================
     CLOSE FILTER DROPDOWN
  ========================================= */

  useEffect(() => {

    const onPointer = event => {
      if (!filtersRef.current?.contains(event.target)) {
        setFiltersOpen(false)
      }
    }

    const onKey = event => {
      if (event.key === 'Escape' && filtersOpen) {
        setFiltersOpen(false)
        filterButton.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }

  }, [filtersOpen])


  /* =========================================
     RESET FILTERS
  ========================================= */

  const resetFilters = () => {
    setDifficulty('')
    setTopic('')
    setCompany('')
    setQuery('')
  }


  const activeFilters = [
    difficulty,
    topic,
  ].filter(Boolean).length


  /* =========================================
     FILTER AND SORT PROBLEMS
  ========================================= */

  const visible = problems
    .filter(problem => {

      const matchesQuery = (
        problem.title +
        ' ' +
        problem.id +
        ' ' +
        problem.topic
      )
        .toLowerCase()
        .includes(query.trim().toLowerCase())

      const matchesDifficulty =
        !difficulty ||
        problem.difficulty === difficulty

      const matchesTopic =
        !topic ||
        problem.topic === topic

      const matchesCompany =
        !company ||
        problemCompanies[problem.id - 1].includes(company)

      return (
        matchesQuery &&
        matchesDifficulty &&
        matchesTopic &&
        matchesCompany
      )

    })
    .sort((a, b) => {

      if (sort === 'title') {
        return a.title.localeCompare(b.title)
      }

      if (sort === 'difficulty') {
        return a.xp - b.xp
      }

      return a.id - b.id

    })


  return (

    <section
      className="problems-page"
      aria-labelledby="problems-title"
    >

      {/* =====================================
          PAGE HEADING
      ===================================== */}

      <div className="problems-heading">

        <div className="problems-heading-content">

          <p className="problems-welcome">
            WELCOME, SALU KUMARI
          </p>

          <h1 id="problems-title">
            Coding Challenges
          </h1>

          <p>
            {visible.length} problems available in this preview
          </p>

        </div>


        {/* =====================================
            SEARCH AND FILTER
        ===================================== */}

        <div className="problems-top-actions">

          <label className="problems-search">

            <Search
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span className="sr-only">
              Search problems
            </span>

            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search problems..."
            />

          </label>


          <div
            ref={filtersRef}
            className="problems-filter-container"
          >

            <button
              ref={filterButton}
              type="button"
              className="problems-filter-button"
              aria-expanded={filtersOpen}
              aria-controls={
                filtersOpen ? 'problem-filters' : undefined
              }
              onClick={() => setFiltersOpen(!filtersOpen)}
            >

              <Filter
                size={16}
                strokeWidth={1.7}
              />

              Filters

              {activeFilters > 0 && (
                <span>{activeFilters}</span>
              )}

            </button>


            {/* =====================================
                FILTER DROPDOWN
            ===================================== */}

            {filtersOpen && (

              <div
                id="problem-filters"
                className="problems-filter-panel"
              >

                <div className="problems-filter-title">

                  <strong>Filter problems</strong>

                  <button
                    type="button"
                    aria-label="Close filters"
                    onClick={() => {
                      setFiltersOpen(false)
                      filterButton.current?.focus()
                    }}
                  >
                    <X size={17} />
                  </button>

                </div>


                <label>

                  Difficulty

                  <select
                    value={difficulty}
                    onChange={event =>
                      setDifficulty(event.target.value)
                    }
                  >

                    <option value="">
                      All difficulties
                    </option>

                    <option value="Easy">
                      Easy
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                  </select>

                </label>


                <label>

                  Topic

                  <select
                    value={topic}
                    onChange={event =>
                      setTopic(event.target.value)
                    }
                  >

                    <option value="">
                      All topics
                    </option>

                    {topics.map(value => (
                      <option
                        key={value}
                        value={value}
                      >
                        {value}
                      </option>
                    ))}

                  </select>

                </label>


                <button
                  type="button"
                  className="problems-reset"
                  onClick={resetFilters}
                >
                  Reset all filters
                </button>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* =====================================
          COMPANY FILTERS
      ===================================== */}

      <div
        className="problems-company-strip"
        aria-label="Filter by company"
      >

        {companies
          .slice(0, moreOpen ? companies.length : 8)
          .map(([name, Icon, color]) => (

            <button
              key={name}
              type="button"
              aria-pressed={company === name}
              onClick={() =>
                setCompany(company === name ? '' : name)
              }
            >

              <Icon
                style={{ color }}
                aria-hidden="true"
              />

              <span>{name}</span>

            </button>

          ))}


        <button
          type="button"
          className="problems-more"
          aria-expanded={moreOpen}
          onClick={() => setMoreOpen(!moreOpen)}
        >
          {moreOpen ? '− Less' : '+ More'}
        </button>

      </div>


      {/* =====================================
          RESULTS AND SORTING
      ===================================== */}

      <div className="problems-results-toolbar">

        <p role="status">

          {visible.length} results

          {company && ` for ${company}`}

          {company && (

            <button
              type="button"
              onClick={() => setCompany('')}
              aria-label="Clear company filter"
            >
              <X size={12} />
            </button>

          )}

        </p>


        <label className="problems-sort">

          <ArrowDownUp
            size={15}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <span className="sr-only">
            Sort problems
          </span>

          <select
            value={sort}
            onChange={event => setSort(event.target.value)}
          >

            <option value="default">
              Default order
            </option>

            <option value="title">
              Title A–Z
            </option>

            <option value="difficulty">
              Difficulty
            </option>

          </select>

        </label>

      </div>


      {/* =====================================
          PROBLEMS TABLE
      ===================================== */}

      <div className="problems-table-wrap">

        <table>

          <caption className="sr-only">
            Coding challenges
          </caption>

          <thead>

            <tr>

              <th scope="col">#</th>

              <th scope="col">Problem</th>

              <th scope="col">Difficulty</th>

              <th scope="col">XP</th>

              <th scope="col">Acceptance</th>

              <th scope="col">
                <span className="sr-only">
                  Practice link
                </span>
              </th>

            </tr>

          </thead>


          <tbody>

            {visible.map((problem, index) => (

              <tr
                key={problem.id}
                style={{
                  '--row-delay': `${Math.min(index, 10) * 45}ms`,
                }}
              >

                {/* Problem Number */}

                <td className="problems-number">
                  {problem.id}
                </td>


                {/* Problem Title */}

                <td>

                  <div className="problems-title">

                    <span>{problem.title}</span>

                    {problem.premium && (

                      <span className="problems-premium">

                        <LockKeyhole
                          size={11}
                          strokeWidth={1.7}
                        />

                        Premium

                      </span>

                    )}

                  </div>

                  <small>{problem.topic}</small>

                </td>


                {/* Difficulty */}

                <td>

                  <span
                    className={
                      'problems-difficulty ' +
                      problem.difficulty.toLowerCase()
                    }
                  >
                    {problem.difficulty}
                  </span>

                </td>


                {/* XP */}

                <td className="problems-xp">
                  {problem.xp}
                </td>


                {/* Acceptance */}

                <td className="problems-acceptance">
                  {problem.acceptance}%
                </td>


                {/* Practice Button */}

                <td>

                  <a
                    className="problems-open"
                    href="https://www.antintern.com/problems"
                    aria-label={
                      `Open AntIntern coding practice for ${problem.title}`
                    }
                  >

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                    />

                  </a>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {/* =====================================
            EMPTY STATE
        ===================================== */}

        {!visible.length && (

          <div className="problems-empty">

            <Search
              size={28}
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <h3>No problems found</h3>

            <p>
              No problems match your current filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
            >
              Clear filters
            </button>

          </div>

        )}

      </div>


      <p className="problems-note">
        Titles and metrics shown are from your screenshot.
        Practice links open the existing AntIntern problem catalog.
      </p>

    </section>

  )
}
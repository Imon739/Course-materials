import { useEffect, useMemo, useState } from 'react'
import SearchBar from './components/SearchBar'
import TrimesterContainer from './components/TrimesterContainer'
import ExtraResources from './components/ExtraResources'
import Footer from './components/Footer'
import { materials } from './data/materials'
import type { CourseSuggestion } from './types'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSelection, setActiveSelection] = useState<CourseSuggestion | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    // one-shot fade-in on first paint, respects prefers-reduced-motion via CSS
    const t = window.requestAnimationFrame(() => setRevealed(true))
    return () => window.cancelAnimationFrame(t)
  }, [])

  const stats = useMemo(() => {
    const trimesterNames = Object.keys(materials)
    let courseCount = 0
    let resourceCount = 0
    Object.values(materials).forEach((courses) => {
      Object.values(courses).forEach((resources) => {
        courseCount += 1
        resourceCount += resources.length
      })
    })
    return {
      trimesters: trimesterNames.length,
      courses: courseCount,
      resources: resourceCount
    }
  }, [])

  const courseIndex = useMemo<CourseSuggestion[]>(() => {
    const list: CourseSuggestion[] = []
    Object.entries(materials).forEach(([trimester, courses]) => {
      Object.keys(courses).forEach((courseName) => {
        list.push({
          trimester,
          courseName,
          id: `${trimester}::${courseName}`
        })
      })
    })
    return list
  }, [])

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const suggestions = useMemo<CourseSuggestion[]>(() => {
    if (!normalizedQuery) return []
    const results: CourseSuggestion[] = []
    for (const item of courseIndex) {
      if (item.courseName.toLowerCase().includes(normalizedQuery)) {
        results.push(item)
        if (results.length >= 8) break
      }
    }
    return results
  }, [courseIndex, normalizedQuery])

  return (
    <>
      <div className="page">
        <header className="page-header">
          <p className="eyebrow">UIU · CSE</p>
          <h1 className="page-title">Course Materials</h1>
          <p className="page-subtitle">
            Every trimester, every course, one link away — slides, notes, and exam materials in one index.
          </p>
          <div className="stat-strip">
            <div className="stat">
              <span className="stat-value">{stats.trimesters}</span>
              <span className="stat-label">Trimesters</span>
            </div>
            <div className="stat">
              <span className="stat-value">{stats.courses}</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-value">{stats.resources}</span>
              <span className="stat-label">Resources</span>
            </div>
          </div>
        </header>
      </div>

      <SearchBar
        query={searchQuery}
        onQueryChange={setSearchQuery}
        suggestions={suggestions}
        onPickSuggestion={(item) => {
          setActiveSelection(item)
          setSearchQuery(item.courseName)
        }}
      />

      {normalizedQuery && suggestions.length === 0 && (
        <div className="no-results" role="status" aria-live="polite">
          No course found for <strong>"{searchQuery.trim()}"</strong>
        </div>
      )}

      <TrimesterContainer materials={materials} activeSelection={activeSelection} />

      <div className={`reveal ${revealed ? 'in' : ''}`}>
        <ExtraResources />
      </div>
      <div className={`reveal ${revealed ? 'in' : ''}`}>
        <Footer />
      </div>
    </>
  )
}

export default App

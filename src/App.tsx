import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar'
import TrimesterContainer from './components/TrimesterContainer'
import ExtraResources from './components/ExtraResources'
import Footer from './components/Footer'
import { materials } from './data/materials'
import type { CourseSuggestion } from './types'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSelection, setActiveSelection] = useState<CourseSuggestion | null>(null)

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

      <div className="container reveal">
        <h1>📚 Course Materials</h1>
        <TrimesterContainer materials={materials} activeSelection={activeSelection} />
      </div>

      <ExtraResources />
      <Footer />
    </>
  )
}

export default App

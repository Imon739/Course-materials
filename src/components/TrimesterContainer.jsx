import { useState, useEffect, useMemo } from 'react'
import Trimester from './Trimester'

function TrimesterContainer({ materials, searchQuery, onSearchResults }) {
  const [expandedTrimesters, setExpandedTrimesters] = useState({})

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      onSearchResults({ count: 0, matches: [] })
      return { filtered: materials, totalMatches: 0 }
    }

    const query = searchQuery.toLowerCase()
    let totalMatches = 0
    const filtered = {}

    Object.entries(materials).forEach(([trimester, courses]) => {
      const filteredCourses = {}
      
      Object.entries(courses).forEach(([courseName, resources]) => {
        const courseMatch = courseName.toLowerCase().includes(query)
        const matchedResources = resources.filter(r => 
          r.name.toLowerCase().includes(query)
        )

        if (courseMatch || matchedResources.length > 0) {
          filteredCourses[courseName] = courseMatch ? resources : matchedResources
          totalMatches += courseMatch ? 1 : matchedResources.length
        }
      })

      if (Object.keys(filteredCourses).length > 0) {
        filtered[trimester] = filteredCourses
      }
    })

    onSearchResults({ count: totalMatches, matches: Object.keys(filtered) })
    return { filtered, totalMatches }
  }, [materials, searchQuery, onSearchResults])

  // Auto-expand trimesters when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const expanded = {}
      Object.keys(filteredData.filtered).forEach(tri => {
        expanded[tri] = true
      })
      setExpandedTrimesters(expanded)
    } else {
      setExpandedTrimesters({})
    }
  }, [searchQuery, filteredData.filtered])

  const toggleTrimester = (trimester) => {
    setExpandedTrimesters(prev => ({
      ...prev,
      [trimester]: !prev[trimester]
    }))
  }

  const highlightText = (text, query) => {
    if (!query) return text
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, idx) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <span key={idx} className="match">{part}</span>
        : part
    )
  }

  const dataToDisplay = searchQuery.trim() ? filteredData.filtered : materials

  return (
    <div id="trimesterContainer">
      {Object.entries(dataToDisplay).map(([trimester, courses]) => (
        <Trimester
          key={trimester}
          name={trimester}
          courses={courses}
          expanded={expandedTrimesters[trimester]}
          onToggle={() => toggleTrimester(trimester)}
          searchQuery={searchQuery}
          highlightText={highlightText}
        />
      ))}
    </div>
  )
}

export default TrimesterContainer

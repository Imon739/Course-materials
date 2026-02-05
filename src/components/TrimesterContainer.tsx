import { useEffect, useState } from 'react'
import Trimester from './Trimester'
import type { CourseSuggestion, Materials } from '../types'

type Props = {
  materials: Materials
  activeSelection: CourseSuggestion | null
}

function TrimesterContainer({ materials, activeSelection }: Props) {
  const [expandedTrimesters, setExpandedTrimesters] = useState<Record<string, boolean>>({})

  // Expand the trimester that contains the picked course
  useEffect(() => {
    if (!activeSelection?.trimester) return
    setExpandedTrimesters((prev) => ({
      ...prev,
      [activeSelection.trimester]: true
    }))
  }, [activeSelection])

  const toggleTrimester = (trimester: string) => {
    setExpandedTrimesters((prev) => ({
      ...prev,
      [trimester]: !prev[trimester]
    }))
  }

  return (
    <div id="trimesterContainer">
      {Object.entries(materials).map(([trimester, courses]) => (
        <Trimester
          key={trimester}
          name={trimester}
          courses={courses}
          expanded={!!expandedTrimesters[trimester]}
          onToggle={() => toggleTrimester(trimester)}
          activeSelection={activeSelection}
        />
      ))}
    </div>
  )
}

export default TrimesterContainer

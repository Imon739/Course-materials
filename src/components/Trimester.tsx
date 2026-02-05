import Course from './Course'
import type { CourseSuggestion, MaterialLink } from '../types'

type Props = {
  name: string
  courses: Record<string, MaterialLink[]>
  expanded: boolean
  onToggle: () => void
  activeSelection: CourseSuggestion | null
}

function Trimester({ name, courses, expanded, onToggle, activeSelection }: Props) {
  return (
    <div className="trimester">
      <button className="button trimester-btn" onClick={onToggle} aria-expanded={expanded}>
        {name}
      </button>

      <div className="section course" style={{ display: expanded ? 'block' : 'none' }}>
        {Object.entries(courses).map(([courseName, resources]) => (
          <Course
            key={courseName}
            name={courseName}
            resources={resources}
            activeSelection={activeSelection}
          />
        ))}
      </div>
    </div>
  )
}

export default Trimester

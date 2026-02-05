import { useEffect, useRef, useState } from 'react'
import type { CourseSuggestion, MaterialLink } from '../types'

type Props = {
  name: string
  resources: MaterialLink[]
  activeSelection: CourseSuggestion | null
}

function Course({ name, resources, activeSelection }: Props) {
  const [expanded, setExpanded] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!activeSelection?.courseName) return
    if (activeSelection.courseName !== name) return
    setExpanded(true)
    // scroll to the course button smoothly
    buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeSelection, name])

  return (
    <>
      <button
        ref={buttonRef}
        className="button course-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {name}
      </button>

      <div className={`section folder ${expanded ? 'expanded' : 'collapsed'}`}>
        {expanded && (
          <div className="button-grid">
            {resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button"
              >
                {resource.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Course

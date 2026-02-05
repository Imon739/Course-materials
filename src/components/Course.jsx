import { useState, useEffect } from 'react'

function Course({ name, resources, searchQuery, highlightText }) {
  const [expanded, setExpanded] = useState(false)

  // Auto-expand when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      setExpanded(true)
    }
  }, [searchQuery])

  return (
    <>
      <button
        className="button course-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {highlightText(name, searchQuery)}
      </button>
      
      <div className={`section folder ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className="button-grid">
          {resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
            >
              {highlightText(resource.name, searchQuery)}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Course

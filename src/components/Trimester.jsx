import { useState } from 'react'
import Course from './Course'

function Trimester({ name, courses, expanded, onToggle, searchQuery, highlightText }) {
  return (
    <div className="trimester">
      <button
        className="button trimester-btn"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {highlightText(name, searchQuery)}
      </button>
      
      <div 
        className="section course"
        style={{ display: expanded ? 'block' : 'none' }}
      >
        {Object.entries(courses).map(([courseName, resources]) => (
          <Course
            key={courseName}
            name={courseName}
            resources={resources}
            searchQuery={searchQuery}
            highlightText={highlightText}
          />
        ))}
      </div>
    </div>
  )
}

export default Trimester

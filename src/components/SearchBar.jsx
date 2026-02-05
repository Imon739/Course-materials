import { useRef } from 'react'

function SearchBar({ query, onQueryChange, suggestions, onPickSuggestion }) {
  const inputRef = useRef(null)

  const handleClear = () => {
    onQueryChange('')
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear()
      inputRef.current?.blur()
      return
    }

    if (e.key === 'Enter' && suggestions?.length) {
      e.preventDefault()
      onPickSuggestion?.(suggestions[0])
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search courses or materials..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search courses"
        />
        {query && (
          <button 
            className="search-clear" 
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
        <span className="search-count">
          {query && suggestions?.length ? `${suggestions.length} match${suggestions.length === 1 ? '' : 'es'}` : ''}
        </span>
      </div>

      {query.trim() && suggestions?.length > 0 && (
        <div className="search-suggest" role="listbox" aria-label="Course suggestions">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="suggest-item"
              role="option"
              tabIndex={0}
              onMouseDown={(e) => {
                // mousedown prevents input blur before click
                e.preventDefault()
                onPickSuggestion?.(item)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onPickSuggestion?.(item)
              }}
              title={item.trimester}
            >
              <span>{item.courseName}</span>
              <span className="suggest-pill">{item.trimester}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar

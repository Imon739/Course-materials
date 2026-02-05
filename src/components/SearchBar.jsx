import { useRef } from 'react'

function SearchBar({ query, onQueryChange, resultCount }) {
  const inputRef = useRef(null)

  const handleClear = () => {
    onQueryChange('')
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear()
      inputRef.current?.blur()
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
          {query && resultCount > 0 ? `${resultCount} result${resultCount === 1 ? '' : 's'}` : ''}
        </span>
      </div>
    </div>
  )
}

export default SearchBar

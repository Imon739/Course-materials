import { useState } from 'react'
import SearchBar from './components/SearchBar'
import TrimesterContainer from './components/TrimesterContainer'
import ExtraResources from './components/ExtraResources'
import Footer from './components/Footer'
import { materials } from './data/materials.js'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState({ count: 0, matches: [] })

  return (
    <>
      <SearchBar 
        query={searchQuery}
        onQueryChange={setSearchQuery}
        resultCount={searchResults.count}
      />

      <div className="container reveal">
        <h1>📚 Course Materials</h1>
        <TrimesterContainer 
          materials={materials}
          searchQuery={searchQuery}
          onSearchResults={setSearchResults}
        />
      </div>

      <ExtraResources />
      <Footer />
    </>
  )
}

export default App

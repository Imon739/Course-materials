import { useMemo, useState } from 'react'
import { materials, type MaterialLink } from './data/materials'

type Course = { trimester: string; name: string; resources: MaterialLink[] }

const courseIndex: Course[] = Object.entries(materials).flatMap(([trimester, courses]) =>
  Object.entries(courses).map(([name, resources]) => ({ trimester, name, resources })),
)

function App() {
  const [query, setQuery] = useState('')
  const [openCourse, setOpenCourse] = useState<string | null>(null)
  const [openTrimesters, setOpenTrimesters] = useState<Set<string>>(() => new Set())
  const term = query.trim().toLowerCase()
  const results = useMemo(() => term ? courseIndex.filter((course) => `${course.name} ${course.trimester}`.toLowerCase().includes(term)) : courseIndex, [term])
  const groups = useMemo(() => Object.entries(materials).map(([trimester, courses]) => ({ trimester, courses: Object.entries(courses).filter(([name]) => !term || `${name} ${trimester}`.toLowerCase().includes(term)) })).filter(({ courses }) => courses.length), [term])
  const resourceCount = courseIndex.reduce((total, course) => total + course.resources.length, 0)

  const toggleTrimester = (trimester: string) => setOpenTrimesters((current) => {
    const next = new Set(current)
    next.has(trimester) ? next.delete(trimester) : next.add(trimester)
    return next
  })

  return <main>
    <header className="hero">
      <div className="hero-inner">
        <p className="eyebrow">UIU CSE RESOURCE LIBRARY</p>
        <h1>Course materials, all in one place.</h1>
        <p className="hero-copy">Browse the original trimester-wise collection of slides, assignments, notes, questions, and study resources.</p>
        <label className="search" htmlFor="course-search"><span aria-hidden="true">⌕</span><input id="course-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a course or trimester" />{query && <button type="button" onClick={() => setQuery('')}>Clear</button>}</label>
        <div className="stats"><span><strong>{Object.keys(materials).length}</strong> trimesters</span><span><strong>{courseIndex.length}</strong> courses</span><span><strong>{resourceCount}</strong> resources</span></div>
      </div>
    </header>

    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog-heading"><div><p className="section-label">Course catalog</p><h2 id="catalog-title">Browse by trimester</h2></div><p>{results.length} course{results.length === 1 ? '' : 's'} found</p></div>
      {groups.length ? <div className="trimester-list">{groups.map(({ trimester, courses }) => {
        const isOpen = term.length > 0 || openTrimesters.has(trimester)
        return <section className="trimester" key={trimester}>
          <button className="trimester-button" type="button" onClick={() => toggleTrimester(trimester)} aria-expanded={isOpen}><span><small>{trimester.split(' ')[0].slice(0, 2).toUpperCase()}{trimester.slice(-2)}</small>{trimester}</span><span>{courses.length} courses <b aria-hidden="true">⌄</b></span></button>
          {isOpen && <div className="course-list">{courses.map(([name, resources]) => {
            const id = `${trimester}-${name}`
            const expanded = openCourse === id
            return <article className="course" key={name}><button className="course-button" type="button" onClick={() => setOpenCourse(expanded ? null : id)} aria-expanded={expanded}><span>{name}</span><span>{resources.length} links <b aria-hidden="true">›</b></span></button>
              {expanded && <div className="resources">{resources.length ? resources.map((resource) => <a key={resource.name} href={resource.url} target="_blank" rel="noreferrer"><span>{resource.name}</span><span aria-hidden="true">↗</span></a>) : <p>No resources have been added for this course yet.</p>}</div>}
            </article>
          })}</div>}
        </section>
      })}</div> : <div className="empty-state"><p>No course matches &quot;{query}&quot;.</p><button type="button" onClick={() => setQuery('')}>Show all courses</button></div>}
    </section>
    <section className="suggestions" aria-labelledby="suggestions-title">
      <p className="section-label">Suggested resources</p>
      <h2 id="suggestions-title">More ways to study</h2>
      <div className="suggestion-links">
        <a href="https://docs.google.com/spreadsheets/d/1UTliZRhDHcRKNKkKnWdNQI-XiEDrxRhWsG0dguoqSEo/htmlview#" target="_blank" rel="noreferrer">UIUSS Notes by Tahsin Parvez <span aria-hidden="true">-&gt;</span></a>
        <a href="https://nurulalamador.github.io/UIUQuestionBank/index.html" target="_blank" rel="noreferrer">UIU Question Bank by Nurul Alam Ador <span aria-hidden="true">-&gt;</span></a>
        <a href="https://sayeemzzzaman.hashnode.dev/series/uiu-courses" target="_blank" rel="noreferrer">UIU Course Insights by Sayeem Bin Zaman <span aria-hidden="true">-&gt;</span></a>
      </div>
    </section>
    <footer><span>UIU CSE - Community course materials index</span><a href="mailto:mimon2310084@bscse.uiu.ac.bd">Suggest a resource</a></footer>
  </main>
}

export default App

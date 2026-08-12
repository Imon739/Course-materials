import { useMemo, useState } from 'react'

type Course = { code: string; name: string; category: 'Core' | 'Lab' | 'Math'; resources: number }

const courses: Course[] = [
  { code: 'CSE 1110', name: 'Introduction to Computing', category: 'Core', resources: 12 },
  { code: 'CSE 1111', name: 'Introduction to Computing Lab', category: 'Lab', resources: 9 },
  { code: 'CSE 2215', name: 'Data Structures and Algorithms', category: 'Core', resources: 18 },
  { code: 'CSE 2216', name: 'Data Structures and Algorithms Lab', category: 'Lab', resources: 14 },
  { code: 'CSE 3211', name: 'Database Management Systems', category: 'Core', resources: 16 },
  { code: 'CSE 3314', name: 'Operating Systems', category: 'Core', resources: 15 },
  { code: 'MAT 1111', name: 'Differential Calculus and Coordinate Geometry', category: 'Math', resources: 10 },
  { code: 'MAT 1211', name: 'Integral Calculus and Differential Equations', category: 'Math', resources: 11 },
]

function App() {
  const [query, setQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const filteredCourses = useMemo(() => {
    const term = query.trim().toLowerCase()
    return term ? courses.filter((course) => `${course.code} ${course.name} ${course.category}`.toLowerCase().includes(term)) : courses
  }, [query])

  return <main className="app-shell">
    <section className="hero" aria-labelledby="page-title">
      <p className="brand">UIU · CSE RESOURCE LIBRARY</p>
      <h1 id="page-title">Find your course materials, faster.</h1>
      <p className="hero-copy">A focused collection of notes, slides, assignments, and practice materials for UIU CSE courses.</p>
      <label className="search" htmlFor="course-search"><span aria-hidden="true">⌕</span><input id="course-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by course name or code" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search">Clear</button>}</label>
      <div className="highlights" aria-label="Library summary"><span><strong>{courses.length}</strong> courses</span><span><strong>{courses.reduce((total, course) => total + course.resources, 0)}</strong> resources</span><span><strong>3</strong> subject areas</span></div>
    </section>
    <section className="library" aria-labelledby="library-title">
      <div className="section-heading"><div><p className="section-label">Course catalog</p><h2 id="library-title">Browse materials</h2></div><p>{filteredCourses.length} course{filteredCourses.length === 1 ? '' : 's'} found</p></div>
      {filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => <article className="course-card" key={course.code}><div className="course-card-top"><span className={`tag ${course.category.toLowerCase()}`}>{course.category}</span><span className="resource-count">{course.resources} items</span></div><p className="course-code">{course.code}</p><h3>{course.name}</h3><button type="button" onClick={() => setSelectedCourse(course)}>View materials <span aria-hidden="true">→</span></button></article>)}</div> : <div className="empty-state"><p>No courses match “{query}”.</p><button type="button" onClick={() => setQuery('')}>Show all courses</button></div>}
    </section>
    <footer><span>UIU CSE · Course materials index</span><a href="mailto:mimon2310084@bscse.uiu.ac.bd">Suggest a resource</a></footer>
    {selectedCourse && <div className="dialog-backdrop" role="presentation" onMouseDown={() => setSelectedCourse(null)}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="dialog-close" type="button" onClick={() => setSelectedCourse(null)} aria-label="Close">×</button><p className="course-code">{selectedCourse.code}</p><h2 id="dialog-title">{selectedCourse.name}</h2><p>This course currently has {selectedCourse.resources} materials listed. Add the relevant Drive links to connect this card to its course files.</p></section></div>}
  </main>
}

export default App

type Resource = {
  name: string
  url: string
}

function ExtraResources() {
  const resources: Resource[] = [
    {
      name: 'UIUSS Notes by Tahsin Parvez',
      url: 'https://docs.google.com/spreadsheets/d/1UTliZRhDHcRKNKkKnWdNQI-XiEDrxRhWsG0dguoqSEo/htmlview#'
    },
    {
      name: 'UIU Question Bank by Nurul Alam Ador',
      url: 'https://nurulalamador.github.io/UIUQuestionBank/index.html'
    },
    {
      name: 'UIU Course Insights by Sayeem Bin Zaman',
      url: 'https://sayeemzzzaman.hashnode.dev/series/uiu-courses'
    }
  ]

  return (
    <div className="extra-resources reveal">
      <h2>📖 More Resources</h2>
      {resources.map((resource, idx) => (
        <a
          key={idx}
          className="resource-button"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resource.name}
        </a>
      ))}
    </div>
  )
}

export default ExtraResources

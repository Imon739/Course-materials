function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer-content">
        <p>
          Connect with Me<span style={{ color: '#e25555' }}>&#10084;</span>
        </p>
        <div className="contact-links">
          <a
            href="mailto:mimon2310084@bscse.uiu.ac.bd"
            className="contact-link"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sazzadhossainimon/"
            className="contact-link"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://facebook.com/sazzad.imon739"
            className="contact-link"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

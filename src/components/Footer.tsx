import "../styles/Footer.css"; // Archivo CSS para los estilos


const Footer = () => {
  return (
    <footer className="footer">

      


      <div className="footer-content">
        <div className="footer-section logo">
      <img src="./public/logo.jpeg" alt="logo torneos" className="footer-logo" />
    </div>
        <div className="footer-section about">
          <h1 className="logo-text">Federación Tucumana de Gimnasia</h1>
          <p>
            🔵Gimnasia artística femenina y masculina
            🔵Gimnasia Rítmica
          </p>
          <div className="contact">
           
            <i className="bi bi-envelope"></i> &nbsp;
            contacto: fedetucdegimnasia@gmail.com
          </div>
        </div>
        
          
        
        <div className="footer-section social">
          {" "}
          <h1 className="logo-text">Redes Sociales</h1> <br />
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100066369534804"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </i>
            </a>{" "}
          <a
                  href="https://www.instagram.com/fedtucdegimnasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16.5 7.5v.001" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>{" "}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Federación Tucumana de Gimnasia | Todos
        los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;

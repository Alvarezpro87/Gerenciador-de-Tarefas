import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <a href="/" className="d-inline-flex align-items-center text-white text-decoration-none">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              marginLeft: '20px',
              width: '65px',
              height: '65px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
            }}
          >
            <i className="bi bi-check2-square fs-1 text-white"></i>
            <span className="visually-hidden">Voltar para Home</span>
          </div>
        </a>
      </div>
      <div className="col-md-5 d-flex justify-content-end align-items-center">
        <span className="me-3" style={{ fontSize: '1.5rem', color: '#007bff' }}>Contato:</span>
        <ul className="nav list-unstyled d-flex">
          <li className="ms-3 d-flex align-items-center">
            <a href="https://wa.me/5561982992727" className="text-success" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp fs-1 text-primary"></i>
              <span className="visually-hidden">WhatsApp</span>
            </a>
          </li>
          <li className="ms-3 d-flex align-items-center">
            <a href="https://github.com/Alvarezpro87" className="text-dark" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-1 text-primary"></i>
              <span className="visually-hidden">GitHub</span>
            </a>
          </li>
          <li className="ms-3 d-flex align-items-center">
            <a href="https://www.linkedin.com/in/alvarez87/" className="text-primary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin fs-1 text-primary" style={{ marginRight: '20px'}}></i>
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

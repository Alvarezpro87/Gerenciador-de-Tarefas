import React from 'react';


const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
        <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: '20px', width: '65px', height: '65px', backgroundColor: '#007bff', borderRadius: '50%', margin: '0 auto' }}>
              <i className="bi bi-check2-square fs-1 text-white"></i>
            </div>
          <span style={{ fontSize: '1.5rem', marginLeft: '20px' }}>
            Gerenciador de Tarefas
          </span>
        </a>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a href="https://github.com/Alvarezpro87">
            <i className="bi bi-github fs-1 text-primary"></i> 
            <span className="visually-hidden">GitHub</span>
          </a>
        </li>
        <li className="ms-3">
          <a href="https://www.linkedin.com/in/alvarez87/">
            <i className="bi bi-linkedin fs-1 text-primary" style={{ marginRight: '20px'}}></i>
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

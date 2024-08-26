import React from 'react';
// Certifique-se de que o caminho está correto

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
        <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: '20px', width: '65px', height: '65px', backgroundColor: '#007bff', borderRadius: '50%', margin: '0 auto' }}>
              <i className="bi bi-check2-square fs-1 text-white"></i>
            </div>
          <span style={{ fontSize: '1.5rem', marginLeft: '10px' }}>
            Gerenciador de Tarefas
          </span>
        </a>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2">About</a></li>
      </ul>
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary" style={{ marginRight: '20px'}}>Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;

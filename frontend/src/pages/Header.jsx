import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
      <div className="col-md-3 d-flex align-items-center">
        <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
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
          </div>
        </Link>
      </div>
      <div className="col-md-6 text-center">
        <Link to="/" className="nav-link px-2 link-primary" style={{ fontSize: '2.5rem', textDecoration: 'none' }}>
          Gerenciador de Tarefas
        </Link>
      </div>
      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary" style={{ marginRight: '20px' }}>
          Cadastrar
        </Link>
      </div>
    </header>
  );
};

export default Header;

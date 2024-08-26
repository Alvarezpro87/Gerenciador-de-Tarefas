import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <section className="text-center">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: '90px',
              height: '90px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
            }}
          >
            <i className="bi bi-check2-square fs-1 text-white"></i>
          </div>
        </div>
        <h1 className="display-4">Bem-vindo ao Gerenciador de Tarefas</h1>
        <p className="lead text-muted">
          Organize suas tarefas e maximize sua produtividade com nosso aplicativo.
        </p>
        <Link to="/register" className="btn btn-primary btn-lg mt-4">
          Comece Agora
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Funcionalidades</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="mb-4">
              <i className="bi bi-card-checklist fs-1 text-primary"></i>
            </div>
            <h5>Gerenciamento de Tarefas</h5>
            <p className="text-muted">
              Crie, edite e marque suas tarefas como concluídas de forma simples e rápida.
            </p>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <i className="bi bi-shield-lock fs-1 text-primary"></i>
            </div>
            <h5>Segurança</h5>
            <p className="text-muted">
              Proteja suas informações com autenticação segura e criptografia de dados.
            </p>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <i className="bi bi-speedometer2 fs-1 text-primary"></i>
            </div>
            <h5>Desempenho</h5>
            <p className="text-muted">
              Aproveite a interface rápida e eficiente para gerenciar suas tarefas sem complicações.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center my-5">
        <h3>Pronto para começar?</h3>
        <p className="text-muted">
          Cadastre-se agora e comece a organizar suas tarefas hoje mesmo!
        </p>
        <Link to="/register" className="btn btn-outline-primary btn-lg">
          Criar Conta
        </Link>
        <Link to="/login" className="btn btn-primary btn-lg ms-3">
          Login
        </Link>
      </section>
    </div>
  );
};

export default Home;

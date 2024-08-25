import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Cadastro</Link>
      <Link to="/tasks">Tarefas</Link>
    </div>
  );
}

export default App;

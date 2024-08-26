import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Cadastro</Link>
      <Link to="/tasks">Tarefas</Link>
    </div>
  );
}

export default App;

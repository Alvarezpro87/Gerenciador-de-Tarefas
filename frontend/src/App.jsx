import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>

      <Link to="/">Home</Link>      
      <Link to="/register">cadastrar</Link>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/tasks');
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <form onSubmit={handleLogin}>
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center align-items-center" style={{ width: '65px', height: '65px', backgroundColor: '#007bff', borderRadius: '50%', margin: '0 auto' }}>
              <i className="bi bi-check2-square fs-1 text-white"></i>
            </div>
            <span style={{ fontSize: '1.5rem', marginTop: '20px' }}>Login</span>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <div className="checkbox mb-3 text-center">
            <label>
              <input type="checkbox" value="remember-me" /> Lembrar Senha
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

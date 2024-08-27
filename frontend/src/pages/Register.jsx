import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas devem ser iguais.');
      return;
    }
    try {
      const response = await API.post('/register', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/tasks');
    } catch (err) {
      setError('Falha no cadastro. Verifique suas credenciais.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <form onSubmit={handleRegister}>
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center align-items-center" style={{ width: '65px', height: '65px', backgroundColor: '#007bff', borderRadius: '50%', margin: '0 auto' }}>
              <i className="bi bi-check2-square fs-1 text-white"></i>
            </div>
            <span style={{ fontSize: '1.5rem', marginTop: '20px' }}>Cadastrar</span>
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
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingConfirmPassword">Confirmar Senha</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

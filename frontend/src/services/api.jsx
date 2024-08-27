import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base da API
});

// Intercepta a requisição para adicionar o token JWT, se existir
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

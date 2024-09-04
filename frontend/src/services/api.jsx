import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base da API
});

// Remove o interceptor, já que não é mais necessário adicionar o token
export default API;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import TaskList from './pages/TaskList';
import { AuthProvider } from './contexts/AuthContext';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

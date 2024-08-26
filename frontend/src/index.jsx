import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
 // Importando o layout

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

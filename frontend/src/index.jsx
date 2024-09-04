import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import Layout from './components/Layout'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    
      <Router>
        <Layout>
          <Routes>
            <Route path="/tasks" element={<TaskPage />} />            
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    
  </React.StrictMode>
);

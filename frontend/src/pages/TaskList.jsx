import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';

const TaskList = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const fetchTasks = async () => {
        try {
          const response = await API.get('/tasks');
          setTasks(response.data);
        } catch (err) {
          setError('Erro ao carregar tarefas.');
        }
      };

      fetchTasks();
    }
  }, [isAuthenticated, navigate]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/tasks', { title, description });
      setTasks([...tasks, response.data]);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Erro ao criar tarefa.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Erro ao excluir tarefa.');
    }
  };

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleCreateTask}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

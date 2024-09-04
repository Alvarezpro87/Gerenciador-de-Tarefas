import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import TaskModal from '../components/TaskModal';
import API from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Carrega as tarefas ao montar o componente
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        setError('Erro ao carregar tarefas. Tente novamente mais tarde.');
      } finally {
        setLoading(false); // Remove o estado de carregamento
      }
    };

    fetchTasks();
  }, []);

  // Adiciona nova tarefa
  const handleAddTask = async () => {
    try {
      const response = await API.post('/tasks', task);
      setTasks([...tasks, response.data]);
      setTask({ title: '', description: '' });
    } catch (err) {
      setError('Erro ao adicionar tarefa. Tente novamente.');
    }
  };

  // Atualiza tarefa existente
  const handleUpdateTask = async () => {
    try {
      const response = await API.put(`/tasks/${editingTaskId}`, task);
      setTasks(
        tasks.map((t) => (t.id === editingTaskId ? response.data : t))
      );
      setIsEditing(false);
      setTask({ title: '', description: '' });
      setEditingTaskId(null);
    } catch (err) {
      setError('Erro ao atualizar tarefa. Tente novamente.');
    }
  };

  // Deleta uma tarefa
  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      setError('Erro ao excluir tarefa. Tente novamente.');
    }
  };

  // Prepara o modal para edição de tarefa
  const handleEditClick = (task) => {
    setTask({ title: task.title, description: task.description });
    setIsEditing(true);
    setEditingTaskId(task.id);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 primary">Lista de Tarefas</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Botão para adicionar nova tarefa */}
      <div className="text-end mb-3">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
        >
          Adicionar Tarefa
        </button>
      </div>

      {/* Exibir spinner enquanto as tarefas estão sendo carregadas */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        // Listagem de Tarefas
        <ul className="list-group">
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id || index} // Corrigido para garantir que o 'key' seja único
              task={task}
              onEdit={handleEditClick}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}

      {/* Modal para adicionar/editar tarefas */}
      <TaskModal
        isEditing={isEditing}
        task={task}
        setTask={setTask}
        onSave={isEditing ? handleUpdateTask : handleAddTask}
      />
    </div>
  );
};

export default TasksPage;

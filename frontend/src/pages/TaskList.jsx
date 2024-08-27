import React, { useState, useEffect } from 'react';
import API from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    
    const fetchTasks = async () => {
      try {
        const response = await API.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        setError('Erro ao carregar tarefas. Tente novamente mais tarde.');
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const response = await API.post('/tasks', task);
      setTasks([...tasks, response.data]);
      setTask({ title: '', description: '' });
    } catch (err) {
      setError('Erro ao adicionar tarefa. Tente novamente.');
    }
  };

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

  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      setError('Erro ao excluir tarefa. Tente novamente.');
    }
  };

  const handleEditClick = (task) => {
    setTask({ title: task.title, description: task.description });
    setIsEditing(true);
    setEditingTaskId(task.id);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gerenciamento de Tarefas</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Add Task Button */}
      <div className="text-end mb-3">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
        >
          Adicionar Tarefa
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => handleEditClick(task)}
                data-bs-toggle="modal"
                data-bs-target="#taskModal"
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTask(task.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Task Modal */}
      <div
        className="modal fade"
        id="taskModal"
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskModalLabel">
                {isEditing ? 'Editar Tarefa' : 'Adicionar Tarefa'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    placeholder="Título da Tarefa"
                    value={task.title}
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                    required
                  />
                  <label htmlFor="taskTitle">Título da Tarefa</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="taskDescription"
                    placeholder="Descrição da Tarefa"
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                    required
                  ></textarea>
                  <label htmlFor="taskDescription">Descrição da Tarefa</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={isEditing ? handleUpdateTask : handleAddTask}
                data-bs-dismiss="modal"
              >
                {isEditing ? 'Atualizar' : 'Adicionar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;

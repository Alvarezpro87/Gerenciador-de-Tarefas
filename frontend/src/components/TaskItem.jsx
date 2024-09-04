import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
      </div>
      <div>
        <button
          className="btn btn-warning me-2"
          onClick={() => onEdit(task)}
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

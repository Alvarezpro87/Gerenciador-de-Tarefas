import React from 'react';

const TaskModal = ({ isEditing, task, setTask, onSave }) => {
  const taskTitle = task.title || ''; // Valor padrão
  const taskDescription = task.description || ''; // Valor padrão

  return (
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
                  value={taskTitle}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  required
                />
                <label htmlFor="taskTitle">Título da Tarefa</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="taskDescription"
                  placeholder="Descrição da Tarefa"
                  value={taskDescription}
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
              onClick={onSave}
              data-bs-dismiss="modal"
            >
              {isEditing ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;

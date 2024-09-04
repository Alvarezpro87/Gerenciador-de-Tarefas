const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController'); 

const router = express.Router(); 

// Rota para criar uma nova tarefa
router.post('/tasks', createTask);

// Rota para listar tarefas
router.get('/tasks', getTasks);

// Rota para atualizar uma tarefa
router.put('/tasks/:id', updateTask);

// Rota para excluir uma tarefa
router.delete('/tasks/:id', deleteTask);

module.exports = router;

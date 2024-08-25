const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController'); 

// Importa todos os métodos do controlador de tarefas

const router = express.Router(); // Inicialize o router antes de usá-lo

// Rota protegida para criar uma nova tarefa
router.post('/tasks', authenticateToken, createTask);

// Rota protegida para listar tarefas do usuário autenticado
router.get('/tasks', authenticateToken, getTasks);

// Rota protegida para atualizar uma tarefa
router.put('/tasks/:id', authenticateToken, updateTask);

// Rota protegida para excluir uma tarefa
router.delete('/tasks/:id', authenticateToken, deleteTask);


module.exports = router;

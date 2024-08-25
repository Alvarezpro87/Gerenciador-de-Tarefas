const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();
const { loginUser } = require('../controllers/userController');

// Rota para registrar um novo usuário
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

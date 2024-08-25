const express = require('express');
const knex = require('knex')(require('./knexfile').development);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const taskRoutes = require('./src/routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'seu_segredo_jwt'; // Em produção, use variáveis de ambiente

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

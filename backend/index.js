const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS para permitir requisições do frontend
app.use(cors({
  origin: 'http://localhost:3000', // Permitir apenas localhost:3000
}));

app.use(express.json());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

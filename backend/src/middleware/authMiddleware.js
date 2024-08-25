const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, 'seu_segredo_jwt');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido.' });
  }
};

module.exports = authenticateToken;

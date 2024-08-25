const knex = require('knex')(require('../../knexfile').development);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    // Verifica se o email já existe no banco de dados
    const existingUser = await knex('users').where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    // Cria o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere o novo usuário no banco de dados
    const [userId] = await knex('users').insert({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!', userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }
  
    try {
      // Verifique se o usuário existe
      const user = await knex('users').where({ email }).first();
      if (!user) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }
  
      // Verifique se a senha está correta
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }
  
      // Gerar um token JWT
      const token = jwt.sign({ userId: user.id }, 'seu_segredo_jwt', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
    }
  };
  
  

module.exports = {
  registerUser,
  loginUser,
};

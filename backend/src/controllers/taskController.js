const knex = require('knex')(require('../../knexfile').development);

const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'O título da tarefa é obrigatório.' });
  }

  try {
    const [taskId] = await knex('tasks').insert({
      title,
      description,
    });

    res.status(201).json({ message: 'Tarefa criada com sucesso!', taskId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await knex('tasks').select('*');
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await knex('tasks').where({ id }).first();
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    await knex('tasks').where({ id }).update({
      title: title !== undefined ? title : task.title,
      description: description !== undefined ? description : task.description,
      completed: completed !== undefined ? completed : task.completed,
      updated_at: knex.fn.now(),
    });

    res.json({ message: 'Tarefa atualizada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await knex('tasks').where({ id }).first();
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    await knex('tasks').where({ id }).del();

    res.json({ message: 'Tarefa excluída com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};

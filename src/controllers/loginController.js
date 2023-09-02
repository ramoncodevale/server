import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Define a chave secreta para assinar e verificar tokens JWT
const JWT_SECRET = 'your_secret_key';

export const listUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    return res.json({
      error: false,
      message: 'Usuários listados',
      data: users,
    });
  } catch (error) {
    console.error('Erro ao listar os usuários', error);
    return res.status(500).json({
      error: true,
      message: 'Erro ao listar os usuários.',
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        error: true,
        message: 'Usuário não encontrado.',
      });
    }

    // Verificar a senha usando bcrypt.compare
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        error: true,
        message: 'Senha incorreta.',
      });
    }

    // Gerar um token JWT após a autenticação bem-sucedida
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);

    return res.json({
      error: false,
      message: 'Usuário logado com sucesso!',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.error('Erro ao logar o usuário:', error);
    return res.status(500).json({
      error: true,
      message: 'Erro ao logar o usuário.',
    });
  }
};

export const registerUser = async (req, res) => {
  const { name, surname, email, telephone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      surname,
      telephone,
      email,
      password: hashedPassword,
    });

    // Gerar um token JWT após o registro bem-sucedido
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET);

    return res.json({
      error: false,
      message: 'Usuário cadastrado com sucesso!',
      data: {
        newUser,
        token,
      },
    });
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    return res.status(500).json({
      error: true,
      message: 'Erro ao cadastrar o usuário.',
    });
  }
};

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

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

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: true,
                message: 'Senha incorreta.',
            });
        }

        // Crie um token JWT com os dados do usuário
        const token = jwt.sign({ usuarioId: user.id }, 'suaChaveSecreta', { expiresIn: '1h' });

        return res.json({
            error: false,
            message: 'Usuário logado com sucesso!',
            token, // Enviar o token para o cliente
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

        return res.json({
            error: false,
            message: 'Usuário cadastrado com sucesso!',
            data: newUser,
        });
    } catch (error) {
        console.error('Erro ao cadastrar o usuário:', error);
        return res.status(500).json({
            error: true,
            message: 'Erro ao cadastrar o usuário.',
        });
    }
};

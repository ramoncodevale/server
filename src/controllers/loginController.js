import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const listUsers = async (req,res) => {
    try {
    const users = await User.findAll({})
    return res.json({
        error: false,
        message: 'Usuários listados',
        data: users,
    });
    } 
 catch (error) {
    console.error('Erro ao listar os usuários', error);
    return res.status(500).json({
        error: true,
        message: 'Erro ao listar os usuários.',
    });
}
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ 
            where: {email }});

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


        req.session.user = user

        return res.json({
            error: false,
            message: 'Usuário logado com sucesso!',
            data: user,
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



User.prototype.getOperatorName = async function () {
    // Consulta ao banco de dados para buscar o nome do operador com base no userId
    const user = await User.findByPk(this.usuarioId);
  
    if (!user) {
      // Trate o caso em que o usuário não é encontrado
      return null;
    }
  
    return `${user.name} ${user.surname}`; // Assumindo que o nome e o sobrenome estão nas colunas correspondentes
  };
 
  
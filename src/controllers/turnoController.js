import Shift from '../models/Shift.js';
import User from '../models/User.js';
import { authenticateJWT } from '../middleware/authMiddleware.js'; // Importe o middleware de autenticação JWT

export const listShift = async (req, res) => {
    try {
        const turno = await Shift.findAll({});
        return res.json({
            error: false,
            message: 'Turno listado',
            data: turno,
        });
    } catch (error) {
        console.error('Erro ao listar o turno', error);
        return res.status(500).json({
            error: true,
            message: 'Erro ao listar o turno',
        });
    }
};

export const createShift = async (req, res) => {
    // Obtenha o ID do usuário autenticado a partir do objeto req.user
    const { operador, periodo, horario, maquina, ge, metaPorHora, planejado, produzido, desperdicoCafe, desperdicoEmbalagem, qualidade, she } = req.body;

    try {
      
        const newShift = await Shift.create({
            usuarioId: usuarioId,
            operador, 
            periodo,
            horario,
            maquina,
            ge,
            metaPorHora,
            planejado,
            produzido,
            desperdicoCafe,
            desperdicoEmbalagem,
            qualidade,
            she,
        });

        return res.json({
            error: false,
            message: 'Turno cadastrado com sucesso!',
            data: newShift,
        });
    } catch (error) {
        console.error('Erro ao cadastrar o turno:', error);
        return res.status(500).json({
            error: true,
            message: 'Erro ao cadastrar o turno.',
        });
    }
};
// Proteja a rota de criação de turno com autenticação JWT
export const createShiftWithAuth = [authenticateJWT, createShift];

import Shift from '../models/Shift.js';

import User from '../models/User.js';

export const listShift = async (req,res) => {
    try {
    const turno = await Shift.findAll({})
    return res.json({
        error: false,
        message: 'Turno listado',
        data: turno,
    });
    } 
 catch (error) {
    console.error('Erro ao listar o turno', error);
    return res.status(500).json({
        error: true,
        message: 'Erro ao listar o turno',
    });
}
}


export const createShift = async (req, res) => {
    const { periodo, maquina, ge, operador, metaPorHora, planejado, produzido, desperdicoCafe, desperdicoEmbalagem, qualidade, she, usuarioId } = req.body;

    req.session.usuarioId = usuarioId;


    try {

        const userIdFromSession = req.session.usuarioId; 
        console.log('userIdFromSession:', userIdFromSession);

        const newShift = await Shift.create({
            operador,
            periodo,
            maquina,
            ge,
            metaPorHora,
            planejado,
            produzido,
            desperdicoCafe,
            desperdicoEmbalagem,
            qualidade,
            she,
            usuarioId: userIdFromSession
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

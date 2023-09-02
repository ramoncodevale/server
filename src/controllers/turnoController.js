import Shift from '../models/Shift.js';

export const createShift = async (req, res) => {
    const { periodo, maquina, ge, metaPorHora, planejado, produzido, desperdicoCafe, desperdicoEmbalagem, qualidade, she } = req.body;

    try {
        const usuarioId = req.session.user.id;

        // Use o método getOperatorName para buscar o nome do operador
        const operatorName = await req.session.user.getOperatorName();

        if (!operatorName) {
            return res.status(404).json({
                error: true,
                message: 'Operador não encontrado.',
            });
        }

        const newShift = await Shift.create({
            usuarioId,
            operador: operatorName, 
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

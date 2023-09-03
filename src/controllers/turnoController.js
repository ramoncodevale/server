export const createShift = async (req, res) => {
    // Verifique se o campo "usuarioId" está presente no corpo da solicitação
    if (!req.body.usuarioId) {
        return res.status(400).json({
            error: true,
            message: 'Campo "usuarioId" é obrigatório.',
        });
    }

    // Obtenha o ID do usuário autenticado a partir do objeto req.user
    const { usuarioId, operador, periodo, horario, maquina, ge, metaPorHora, planejado, produzido, desperdicoCafe, desperdicoEmbalagem, qualidade, she } = req.body;

    try {
        const newShift = await Shift.create({
            usuarioId, // Use o valor fornecido no corpo da solicitação
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

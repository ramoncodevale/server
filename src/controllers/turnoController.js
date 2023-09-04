// Importe os modelos e outros módulos necessários
import Period from '../models/Period.js'
import Operator from '../models/Operator.js'
import Machine from '../models/Machine.js'
import Production from '../models/Production.js'
import Time from '../models/Time.js'
import ProductionData from '../models/ProductionData.js'

// Controller para listar todos os registros de produção
export async function listarRegistrosProducao(req, res) {
  try {
    const registros = await ProductionData.findAll({
      include: [
        { model: Period },
        { model: Operator },
        { model: Machine },
        {
          model: Production,
          include: [{ model: Time }],
        },
      ],
    });
    res.json(registros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar registros de produção.' });
  }
}

// Controller para cadastrar um operador
export async function cadastrarOperador(req, res) {
  try {
    const { nome, sobrenome } = req.body; // Supondo que você recebe os dados do operador no corpo da requisição

    // Crie um novo operador no banco de dados
    const operador = await Operator.create({
      nome,
      sobrenome,
    });

    res.status(201).json(operador); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar o operador.' });
  }
}

// Controller para cadastrar um operador
export async function cadastrarMaquina(req, res) {
  try {
    const { nome, metaHora} = req.body; // Supondo que você recebe os dados do operador no corpo da requisição

    // Crie um novo operador no banco de dados
    const maquina = await Machine.create({
      nome,
      metaHora,
    });

    res.status(201).json(maquina); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar a máquina.' });
  }
}

export async function listarMaquina(req, res) {
  try {
    

    // Crie um novo operador no banco de dados
    const maquina = await Machine.findAll({});

    res.status(201).json(maquina); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar as máquinas.' });
  }
}

export async function cadastrarPeriodo(req, res) {
  try {
    const { turno } = req.body; // Supondo que você recebe os dados do operador no corpo da requisição

    // Crie um novo operador no banco de dados
    const periodo = await Period.create({
      turno
    });

    res.status(201).json(periodo); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar periodo' });
  }
}
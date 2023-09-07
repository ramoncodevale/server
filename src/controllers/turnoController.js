// Importe os modelos e outros módulos necessários
import Period from '../models/Period.js'
import Operator from '../models/Operator.js'
import Machine from '../models/Machine.js'
import Time from '../models/Time.js'
import Production from '../models/Production.js'
import ProductionRegister from '../models/ProductionRegister.js'
import ProductionAllRegister from '../models/ProductionAllRegister.js'

export async function salvarProducao(req,res) {
  try {
    const { quantidade, perda, comentario, horario_id } = req.body;
    const producao = await Production.create({ quantidade, perda, comentario, horario_id });
    res.status(201).json(producao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar registro de produção' });
  }
}

export async function registrarProducao(req,res) {
  try {
    const {
      data,
      ger,
      planejado,
      produzido,
      qualidade,
      she,
      desperdicioEmbalagem,
      desperdicioCafe,
      periodo_id,
      operador_id,
      maquina_id,
    } = req.body;
    const registroProducao = await ProductionRegister.create({
      data,
      ger,
      planejado,
      produzido,
      qualidade,
      she,
      desperdicioEmbalagem,
      desperdicioCafe,
      periodo_id,
      operador_id,
      maquina_id,
    });
    res.status(201).json(registroProducao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar registro de produção' });
  }
}

export async function  associarProducao(req,res) {
  
  try {
    const { producao_id, registro_producao_id } = req.body;
    const producaoRegistroProducao = await ProductionAllRegister.create({
      producao_id,
      registro_producao_id,
    });
    res.status(201).json(producaoRegistroProducao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao associar produção a registro de produção' });
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

export async function listarOperador(req, res) {
  try {
    
    const operador = await Operator.findAll({});

    res.status(201).json(operador); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar os operadores.' });
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

export async function listarPeriodo(req, res) {
  try {
    
    const periodo = await Period.findAll({});

    res.status(201).json(periodo); // Retorna o operador criado com status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar os periodos.' });
  }
}


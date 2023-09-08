// Importe os modelos e outros módulos necessários
import Period from '../models/Period.js'
import Operator from '../models/Operator.js'
import Machine from '../models/Machine.js'
import Time from '../models/Time.js'
import Production from '../models/Production.js'
import ProductionRegister from '../models/ProductionRegister.js'


export async function salvarInformacoes(req, res) {
  try {
    // Dados do corpo da requisição
    const {
      data,
      ger,
      planejado,
      produzido,
      qualidade,
      she,
      desperdicioEmbalagem,
      desperdicioCafe,
      periodo,
      operador,
      maquina,
      producoes,
    } = req.body;

    // Crie o objeto de dados
    const dataObj = await ProductionRegister.create({
      data,
      ger,
      planejado,
      produzido,
      qualidade,
      she,
      desperdicioEmbalagem,
      desperdicioCafe,
      PeriodoId: periodoObj.id,
      OperadorId: operadorObj.id,
      MaquinaId: maquinaObj.id,
    });

    // Crie as produções associadas à data
    for (const producao of producoes) {
      const { quantidade, perda, comentario, horario } = producao;

      // Encontre ou crie um horário
      const [horarioObj, createdHorario] = await Time.findOrCreate({
        where: { faixa: horario.faixa },
      });

      await Production.create({
        quantidade,
        perda,
        comentario,
        HorarioId: horarioObj.id,
        DataId: dataObj.id,
      });
    }

    res.status(201).json({ message: 'Informações salvas com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar informações:', error);
    res.status(500).json({ error: 'Erro ao salvar informações.' });
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


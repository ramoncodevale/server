// Importe os modelos e outros módulos necessários
import Period from '../models/Period.js'
import Operator from '../models/Operator.js'
import Machine from '../models/Machine.js'
import Time from '../models/Time.js'
import Production from '../models/Production.js'
import ProductionRegister from '../models/ProductionRegister.js'


export async function listarHorario(req, res) {
  try {
    const horario = await Time.findAll({})
    res.status(201).json(horario)
    console.log(horario)
  } catch (error) {
    console.log(error)
  }
}

export async function listarHorarioPeriodo(req,res) {
try {
  const { periodoId } = req.params;

  // Verifique se o turno com o ID fornecido existe
  const turno = await Period.findByPk(periodoId);

  if (!turno) {
    return res.status(404).json({ error: 'Turno não encontrado.' });
  }

  // Liste os horários associados a esse turno
  const horarios = await Time.findAll({
    where: { PeriodoId: periodoId },
  });

  res.status(200).json(horarios);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Erro ao listar os horários por turno.' });
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

export async function cadastrarProducao(req, res) {
  try {
    const {
      data,
      ger,
      planejado,
      periodoId, 
      operadorId, 
      maquinaId,  
    } = req.body;

    // Create the Production Register record in the database
    const productionRegister = await ProductionRegister.create({
      data,
      ger,
      planejado,
      periodoId,
      operadorId,
      maquinaId,
    });

    return res.status(201).json(productionRegister);
  } catch (error) {
    console.error('Error creating Production Register:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function cadastrarProducaoRegistro(req, res) {
  try {
    const {
      horarioId,
      comentario,
      quantidade,
      perda, 
    } = req.body;

    // Create the Production Register record in the database
    const productionRegister = await Production.create({
      horarioId,
      comentario,
      quantidade,
      perda, 
    });

    return res.status(201).json(productionRegister);
  } catch (error) {
    console.error('Error creating Production Register:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function listarProducoes(req, res) {
  try {
    // Busque todos os registros de Producao e ProducaoRegistro no banco de dados
    const producoes = await ProductionRegister.findAll({
      include: [
        {
          model: Operator, 
          as: 'operadores', 
          attributes: ['nome', 'sobrenome'], 
        },
        {
          model: Machine,
          as: 'maquinas',
          attributes: ['nome', 'metaHora']
        },
        {
          model: Period,
          as: 'periodos',
          attributes: ['turno']
        }
      ],
    });
    const producoesRegistro = await Production.findAll({
      include: [
        {
          model: Time,
          as: 'horarios',
          attributes: ['faixa']
        }
      ]
    });

    res.status(200).json({
      producoes,
      producoesRegistro,
    });
  } catch (error) {
    console.error('Erro ao listar registros de Produção e Produção de Registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}




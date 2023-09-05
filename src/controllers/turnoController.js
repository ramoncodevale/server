// Importe os modelos e outros módulos necessários
import Period from '../models/Period.js'
import Operator from '../models/Operator.js'
import Machine from '../models/Machine.js'
import Production from '../models/Production.js'
import Time from '../models/Time.js'
import ProductionData from '../models/ProductionData.js'

// Função que retorna o resultado desejado
export async function listarRegistrosProducao(req, res) {
  try {
    // Consulta para obter os dados principais
    const productionData = await ProductionData.findOne({
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

    // Monta o objeto JSON com base nos resultados
    const result = {
      id: productionData.id,
      periodo: {
        id: productionData.Period.id,
        turno: productionData.Period.turno,
      },
      ger: productionData.ger,
      planejado: productionData.planejado,
      produzido: productionData.produzido,
      qualidade: productionData.qualidade,
      she: productionData.she,
      desperdicioEmbalagem: productionData.desperdicioEmbalagem,
      desperdicioCafe: productionData.desperdicioCafe,
      operador: {
        id: productionData.Operator.id,
        nome: productionData.Operator.nome,
        sobreNome: productionData.Operator.sobreNome,
      },
      maquina: {
        id: productionData.Machine.id,
        nome: productionData.Machine.nome,
        metaHora: productionData.Machine.metaHora,
      },
      producoes: productionData.Production.map((production) => ({
        id: production.id,
        quantidade: production.quantidade,
        perda: production.perda,
        comentario: production.comentario,
        horario: {
          id: production.Time.id,
          faixa: production.Time.faixa,
        },
      })),
    };

    // Envia a resposta HTTP com o objeto JSON
    res.status(200).json(result);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: "Erro ao buscar os dados de produção" });
  }
}

export async function saveProductionData(req, res) {
  try {
    // Obtenha os dados do corpo da solicitação HTTP
    const { periodoId, ger, planejado, produzido, qualidade, she, desperdicioEmbalagem, desperdicioCafe, operadorId, maquinaId, producoes } = req.body;

    // Crie um novo registro de ProductionData no banco de dados
    const newProductionData = await ProductionData.create({
      periodoId,
      ger,
      planejado,
      produzido,
      qualidade,
      she,
      desperdicioEmbalagem,
      desperdicioCafe,
      operadorId,
      maquinaId,
    });

    // Crie registros de Production associados, se necessário
    if (producoes && producoes.length > 0) {
      await newProductionData.createProductions(producoes);
    }

    // Envie uma resposta de sucesso
    res.status(201).json({ message: "Dados de produção salvos com sucesso" });
  } catch (error) {
    // Trate os erros adequadamente
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar os dados de produção" });
  }
}



export async function cadastrarProducoes(req, res) {
  try {
    const { perda, comentario, quantidade, operadorId, metaHora } = req.body;

    // Crie um novo registro de ProductionData no banco de dados
    const newProductionData = await Production.create({
      perda,
      operadorId,
      comentario,
      quantidade,
      metaHora
    });

    // Envie uma resposta de sucesso
    res.status(201).json(newProductionData); 
    }  catch (error) {
    // Trate os erros adequadamente
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar os dados de produção" });
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


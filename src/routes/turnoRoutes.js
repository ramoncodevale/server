import express from 'express';

import { listarRegistrosProducao, cadastrarOperador, cadastrarMaquina, cadastrarPeriodo } from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/operador', cadastrarOperador)
router.post('/cadastrar/maquina', cadastrarMaquina)
router.post('/cadastrar/periodo', cadastrarPeriodo)

export default router;
import express from 'express';

import { listarRegistrosProducao, cadastrarOperador, cadastrarMaquina } from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/operador', cadastrarOperador)
router.post('/cadastrar/maquina', cadastrarMaquina)

export default router;
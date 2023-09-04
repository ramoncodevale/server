import express from 'express';

import { listarRegistrosProducao, cadastrarOperador } from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/operador', cadastrarOperador)

export default router;
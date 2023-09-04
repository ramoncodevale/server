import express from 'express';

import { listarRegistrosProducao, cadastrarOperador, cadastrarMaquina, cadastrarPeriodo, listarMaquina } from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/operador', cadastrarOperador)
router.get('/listar/operador')


router.post('/cadastrar/maquina', cadastrarMaquina)
router.get('/listar/maquina', listarMaquina)

router.post('/cadastrar/periodo', cadastrarPeriodo)
router.get('/listar/periodo')

export default router;
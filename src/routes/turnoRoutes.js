import express from 'express';

import {  cadastrarOperador, cadastrarMaquina, cadastrarPeriodo, listarMaquina, listarOperador, listarPeriodo, salvarProducao, registrarProducao} from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/producao', salvarProducao)
router.post('/registrar/producao', registrarProducao)

router.post('/cadastrar/operador', cadastrarOperador)
router.get('/listar/operador', listarOperador)


router.post('/cadastrar/maquina', cadastrarMaquina)
router.get('/listar/maquina', listarMaquina)

router.post('/cadastrar/periodo', cadastrarPeriodo)
router.get('/listar/periodo', listarPeriodo)


export default router;
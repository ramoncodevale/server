import express from 'express';

import {  cadastrarOperador, cadastrarMaquina, cadastrarPeriodo, listarMaquina, listarOperador, listarPeriodo, salvarInformacoes,listarHorario  } from '../controllers/turnoController.js'


const router = express();

router.post('/cadastrar/turno', salvarInformacoes)

router.get('/listar/horarios', listarHorario)

router.post('/cadastrar/operador', cadastrarOperador)
router.get('/listar/operador', listarOperador)


router.post('/cadastrar/maquina', cadastrarMaquina)
router.get('/listar/maquina', listarMaquina)

router.post('/cadastrar/periodo', cadastrarPeriodo)
router.get('/listar/periodo', listarPeriodo)


export default router;
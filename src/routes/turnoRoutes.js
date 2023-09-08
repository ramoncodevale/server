import express from 'express';

import {  cadastrarOperador, cadastrarMaquina, cadastrarPeriodo, listarMaquina, listarOperador, listarPeriodo, listarHorario, listarHorarioPeriodo, cadastrarProducao,  cadastrarProducaoRegistro, listarProducoes  } from '../controllers/turnoController.js'


const router = express();


router.get('/listar/horarios', listarHorario)
router.get('/listar/horario/:periodoId', listarHorarioPeriodo)

router.post('/cadastrar/operador', cadastrarOperador)
router.get('/listar/operador', listarOperador)


router.post('/cadastrar/maquina', cadastrarMaquina)
router.get('/listar/maquina', listarMaquina)

router.post('/cadastrar/periodo', cadastrarPeriodo)
router.get('/listar/periodo', listarPeriodo)

router.post('/cadastrar/producao', cadastrarProducao)
router.post('/cadastrar/turno',  cadastrarProducaoRegistro)

router.get('/listar/producoes', listarProducoes)

export default router;
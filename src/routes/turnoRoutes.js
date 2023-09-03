import express from 'express';

import { listShift, createShift } from '../controllers/turnoController.js';

const router = express();



router.get('/listar-turno', listShift);
router.post('/cadastrar-turno', createShift); 


export default router;
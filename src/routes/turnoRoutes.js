import express from 'express';

import { listShift, createShiftWithAuth  } from '../controllers/turnoController.js';

const router = express();



router.get('/listar-turno', listShift);
router.post('/cadastrar-turno', createShiftWithAuth); 


export default router;
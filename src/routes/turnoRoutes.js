import express from 'express';

import { listShift, createShift } from '../controllers/turnoController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express();


router.get('/listar-turno', isAuthenticated, listShift)
router.post('/cadastrar-turno', isAuthenticated, createShift)


export default router;
import express from 'express';

import { listShift, createShift } from '../controllers/turnoController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express();


router.get('/listar-turno', authenticateJWT, listShift)
router.post('/cadastrar-turno', authenticateJWT, createShift)


export default router;
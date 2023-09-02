import express from 'express';

import { createShift } from '../controllers/turnoController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express();

router.post('/turno', isAuthenticated, createShift)


export default router;
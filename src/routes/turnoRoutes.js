import express from 'express';

import { createShift } from '../controllers/turnoController.js';

const router = express();

router.post('/turno', createShift)


export default router;
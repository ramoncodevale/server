import express from 'express';
import { loginUser, registerUser } from '../controllers/loginController.js';

const router = express.Router();

router.post('/login', loginUser);

// Rota para registro de usuário
router.post('/cadastrar-usuario', registerUser);

export default router;

import express from 'express';
import { registerUser, loginUser } from "../controllers/loginController.js"
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rota pública que permite o registro de um usuário
router.post('/register', registerUser);

// Rota pública que permite o login de um usuário e gera um token JWT
router.post('/login', loginUser);

// Rota protegida que requer autenticação JWT
router.get('/protected-route', authenticateJWT, (req, res) => {
    // Você pode acessar o usuário autenticado usando req.user aqui
    res.json({ message: 'Rota protegida acessada com sucesso!', user: req.user });
});

export default router;

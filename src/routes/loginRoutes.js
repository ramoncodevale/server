import express from 'express';
// import { listUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';

import { listUsers, loginUser,registerUser } from '../controllers/loginController.js';

const router = express();


router.get('/listar', listUsers);
router.post('/login', loginUser);
router.post('/cadastrar-usuario', registerUser);
// router.put('/atualizar-usuario/:id', updateUser);
// router.delete('/deletar-usuario/:id', deleteUser);

export default router;
// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization'); // Certifique-se de que o token JWT esteja sendo enviado no cabeçalho de autorização

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  jwt.verify(token, 'suaChaveSecreta', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Falha na autenticação do token' });
    }
    req.user = user; // Defina o req.user com as informações do usuário
    next();
  });
};

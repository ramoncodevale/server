import express from 'express';
import path from 'path';
import cors from 'cors';
import jwt from 'jsonwebtoken'; // Importe o módulo jwt aqui

const app = express();
// ...

// Middleware para verificar o token JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
}

// Use o middleware de verificação do token em rotas que exigem autenticação
app.use('/protected', verifyToken);

// ...

// Rotas
import loginRoutes from './src/routes/loginRoutes.js';
import turnoRoutes from './src/routes/turnoRoutes.js';

app.use(express.json());
app.use(loginRoutes);
app.use(turnoRoutes);

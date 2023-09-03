import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: true, message: 'Token não fornecido.' });
  }

  // Verifique se o token começa com 'Bearer ' e remova essa parte
  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ error: true, message: 'Token mal formatado.' });
  }

  const tokenValue = tokenParts[1];

  jwt.verify(tokenValue, 'suaChaveSecreta', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: true, message: 'Falha na autenticação do token.' });
    }

    // O token é válido, você pode acessar os dados do usuário decodificados
    req.user = decoded;

    next(); // Continue com a próxima função de middleware ou rota
  });
};

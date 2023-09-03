import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: true, message: 'Token não fornecido.' });
    }

    jwt.verify(token, 'suaChaveSecreta', (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: true, message: 'Falha na autenticação do token.' });
        }

        // O token é válido, você pode acessar os dados do usuário decodificados
        req.user = decoded;

        next(); // Continue com a próxima função de middleware ou rota
    });
};

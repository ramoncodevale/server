// authMiddleware.js

export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    // O usuário está autenticado, continue com a solicitação
    next();
  } else {
    // O usuário não está autenticado, retorne um erro ou redirecione para a página de login
    res.status(401).json({
      error: true,
      message: 'Você precisa estar autenticado para acessar esta página.',
    });
  }
};

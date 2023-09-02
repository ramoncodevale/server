import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express';

const app = express();

app.set('trust proxy', 1);

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: false,
}));

app.use(function (req, res, next) {
  if (!req.session) {
    return next(new Error('Oh no')) // handle error
  }
  next() // otherwise continue
});

// Configurando o middleware cors para permitir acesso de qualquer origem
app.use(cors({ origin: '*' }));

// Configuration to allow the use of images
app.use(express.static(new URL('public', import.meta.url).pathname));

// Routes
import loginRoutes from './src/routes/loginRoutes.js';
import turnoRoutes from './src/routes/turnoRoutes.js';

app.use(express.json());
app.use(loginRoutes);
app.use(turnoRoutes);

app.get('/', async (req, res) => {
  res.send('Deu certo');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
});

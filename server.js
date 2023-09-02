import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'cookie-session';

const app = express();

app.set('trust proxy', 1);

app.use(session({
  cookie: {
    secure: true,
    maxAge: 60000
  },
  secret: 'secret',
  saveUninitialized: true,
  resave: false
}));

app.use(function (req, res, next) {
  if (!req.session) {
    return next(new Error('Oh no')) // handle error
  }
  next() // otherwise continue
});

const corsOptions = {
  origin: 'http://localhost:5173/', // Substitua pelo URL do seu aplicativo React
  credentials: true, // Permitir o envio de cookies ou cabeçalhos de autenticação
};

app.use(cors(corsOptions));


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

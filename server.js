import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração para permitir o uso de imagens
app.use(express.static(new URL('public', import.meta.url).pathname));


app.use(
  session({
    store: new MySQLStore({ createDatabaseTable: true }, db),
    secret: 'abdajd',
    resave: false,
    saveUninitialized: true,
  })
);

// Rotas
import loginRoutes from './src/routes/loginRoutes.js';

app.use(express.json());
app.use(loginRoutes);

app.get('/', async (req, res) => {
  res.send('Deu certo');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
});

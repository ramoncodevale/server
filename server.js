import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import RedisStore from "connect-redis"
import {createClient} from "redis"

const app = express();



// Configuração do CORS
app.use(cors());

// Configuração para permitir o uso de imagens
app.use(express.static(new URL('public', import.meta.url).pathname));

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
})

// Initialize sesssion storage.
app.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
  })
)

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

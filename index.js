import express from 'express';
import cors from 'cors'
import route from './src/routes/routes.js';

const port = 5000;
const app = express();

app.use(cors())

app.use(route) //Rotas do projeto

app.listen(port,console.log('Servidor rodando'));
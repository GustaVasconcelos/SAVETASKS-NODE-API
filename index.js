import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import conectarBanco from './src/database/db.js';
import route from './src/routes/routes.js';

dotenv.config()

const port = 5000;
const app = express();

conectarBanco() //Chamando a função para conectar o banco de dados

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(route) //Rotas

app.listen(port,console.log('Servidor rodando'));
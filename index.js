import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

import conectarBanco from './src/database/db.js';
import route from './src/routes/routes.js';

const port = 5000;
const app = express();

dotenv.config()


conectarBanco()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors())
app.use(express.json())
app.use(route) //Rotas

app.listen(port,console.log('Servidor rodando'));
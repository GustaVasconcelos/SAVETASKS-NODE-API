import { Router } from "express";

import { pesquisarUsuarioId } from "../controllers/pesquisarUsuarioId/index.js";
import { cadastrarUsuario } from "../controllers/cadastrarUsuario/index.js";
import { adicionarLista } from "../controllers/adicionarTarefa/index.js";
import { deletarTarefa } from "../controllers/deletarTarefa/index.js";
import { pesquisarTodosOsUsuarios } from "../controllers/pesquisarTodosOsUsuarios/index.js";
import { login } from "../controllers/login/index.js";
import { verificarToken } from "../controllers/verificarToken/index.js";
import { deletarToken } from "../controllers/deletarToken/index.js";

const route = Router()

//Rotas disponiveis 
route.get('/pesquisar_usuario/:id', pesquisarUsuarioId)
route.get('/pesquisar_usuarios', pesquisarTodosOsUsuarios)
route.get('/verificar_token', verificarToken)
route.get('/deletar_token', deletarToken)
route.post('/cadastro_usuario', cadastrarUsuario)
route.post('/login', login)
route.patch('/adicionar_tarefa', adicionarLista)
route.patch('/deletar_tarefa', deletarTarefa)

export default route
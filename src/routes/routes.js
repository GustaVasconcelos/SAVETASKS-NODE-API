import { Router } from "express";

import { pesquisarUsuarioId } from "../controllers/pesquisarUsuarioId/index.js";
import { cadastrarUsuario } from "../controllers/cadastrarUsuario/index.js";
import { adicionarLista } from "../controllers/adicionarTarefa/index.js";
import { deletarTarefa } from "../controllers/deletarTarefa/index.js";
import { pesquisarTodosOsUsuarios } from "../controllers/pesquisarTodosOsUsuarios/index.js";

const route = Router()

//Rotas disponiveis 
route.get('/pesquisar_usuarios', pesquisarTodosOsUsuarios)
route.post('/cadastro_usuario', cadastrarUsuario)
route.patch('/adicionar_tarefa', adicionarLista)
route.patch('/deletar_tarefa', deletarTarefa)
route.get('/pesquisar_usuario/:id', pesquisarUsuarioId)

export default route
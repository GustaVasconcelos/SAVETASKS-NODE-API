import { Router } from "express";

import { pesquisarUsuarioId } from "../controllers/pesquisarUsuarioId/index.js";
import { cadastrarUsuario } from "../controllers/cadastrarUsuario/index.js";
import { adicionarLista } from "../controllers/adicionarTarefa/index.js";
import { deletarTarefa } from "../controllers/deletarTarefa/index.js";

const route = Router()

//Rotas disponiveis 
route.post('/cadastro_usuario', cadastrarUsuario)
route.patch('/adicionar_item', adicionarLista)
route.patch('/deletar_item', deletarTarefa)
route.get('/pesquisar_usuario/:id', pesquisarUsuarioId)

export default route
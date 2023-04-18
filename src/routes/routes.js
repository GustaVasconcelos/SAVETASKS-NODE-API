import { Router } from "express";

import {adicionar_lista, cadastrarUsuario, deletar_item, pesquisarUsuarioId} from '../controllers/controllers.js'

const route = Router()

//Rotas disponiveis 
route.post('/cadastro_usuario', cadastrarUsuario)
route.patch('/adicionar_item', adicionar_lista)
route.patch('/deletar_item', deletar_item)
route.get('/pesquisar_usuario/:id', pesquisarUsuarioId)

export default route
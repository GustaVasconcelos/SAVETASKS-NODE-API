import Usuarios from "../models/User.js";

//Cadastro de usuário
const cadastrarUsuario = (body) => Usuarios.create(body)

//Pesquisa de usuário
const pesquisarUsuarioPorId = (body) => Usuarios.findById(body)

//adicionar tarefa na lista do usuário
const adicionarTarefa = (usuario,id_tarefa, titulo,descricao) => Usuarios.findOneAndUpdate({usuario},{$push:{tarefas:{id_tarefa, titulo, descricao}}}, {new:true})

//deletando tarefa na lista do usuário
const deletarTarefa = (usuario,id_tarefa) => Usuarios.findOneAndUpdate({usuario},{$pull:{tarefas:{id_tarefa}}}, {new:true})

export default {
    cadastrarUsuario,
    pesquisarUsuarioPorId,
    adicionarTarefa,
    deletarTarefa
}
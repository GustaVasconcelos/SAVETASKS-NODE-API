import Usuarios from "../models/User.js";

//Cadastro de usuário
const cadastrarUsuario = (body) => Usuarios.create(body)

//Pesquisa de usuário pelo o id
const pesquisarUsuarioPorId = (body) => Usuarios.findById(body)

//Pesquisa de todos os usuários existente no banco

const pesquisarTodosUsuarios = () => Usuarios.find()

//adicionar tarefa na lista do usuário
const adicionarTarefa = (id_usuario,id_tarefa, titulo,descricao) => Usuarios.findByIdAndUpdate({_id:id_usuario},{$push:{tarefas:{id_tarefa, titulo, descricao}}}, {new:true})

//deletando tarefa na lista do usuário
const deletarTarefa = (id_usuario,id_tarefa) => Usuarios.findByIdAndUpdate({_id:id_usuario},{$pull:{tarefas:{id_tarefa}}}, {new:true})

export default {
    cadastrarUsuario,
    pesquisarUsuarioPorId,
    adicionarTarefa,
    deletarTarefa,
    pesquisarTodosUsuarios
}
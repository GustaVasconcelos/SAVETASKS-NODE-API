import Usuarios from '../models/User.js';
import servicos from '../services/services.js'

/* ------ Adicionar item na lista --------- */
export const adicionarLista = async (req,res) =>{

    //Campos necessário para a criação da tarefa na lista do usuário
    const { usuario, titulo, descricao} = req.body

    //Criando o id da tarefa 
    const id_tarefa = Math.floor(Date.now() * Math.random()).toString()

    //Verificação se não há campos vázios
    if(!usuario || !titulo || !descricao){
        return res.status(400).json({mensagem:"Preencha todos os campos"})
    }

    try{
        //Verificando se existe o usuário
        const usuarioServico = await servicos.pesquisarUsuario({usuario})
        if(!usuarioServico){
            return res.status(400).json({mensagem:"Usuário não encontrado"})
        }

        //Cadastrando a tarefa na lista do usuário
        const tarefaAdicionar = await servicos.adicionarTarefa(usuario,id_tarefa, titulo, descricao)

        return res.status(200).json({mensagem:'Tarefa adicionada',tarefaAdicionar})

    }catch(err){
        return res.status(500).json({mensagem: "Erro ao adicionar tarefa", err});
    }
}

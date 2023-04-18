import Usuarios from '../../models/User.js';
import servicos from '../../services/services.js'

/* ------ deletar item na lista --------- */
export const deletarTarefa = async (req,res) =>{

    //Campos necessário para deletar a tarefa na lista do usuário
    const { usuario, id_tarefa} = req.body

    //Verificação se não há campos vázios
    if(!usuario || !id_tarefa){
        return res.status(400).json({mensagem:"Preencha todos os campos"})
    }

    try{
        //Verificando se existe o usuário
        const usuarioServico = await servicos.pesquisarUsuario({usuario})
        if(!usuarioServico){
            return res.status(400).json({mensagem:"Usuário não encontrado"})
        }

        //Deletando a tarefa na lista do usuário
        const tarefaDeletar = await servicos.deletarTarefa(usuario,id_tarefa)

        return res.status(200).json({mensagem:'tarefa deletado',tarefaDeletar})

    }catch(err){
        return res.status(500).json({mensagem: "Erro ao deletar tarefa", err});
    }
}

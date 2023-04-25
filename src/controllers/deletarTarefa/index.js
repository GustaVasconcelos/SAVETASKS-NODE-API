import Usuarios from '../../models/User.js';
import servicos from '../../services/services.js'

/* ------ deletar item na lista --------- */
export const deletarTarefa = async (req,res) =>{

    //Campos necessário para deletar a tarefa na lista do usuário
    const { id_usuario, id_tarefa} = req.body

    //Verificação se não há campos vázios
    if(!id_usuario || !id_tarefa){
        return res.status(200).json({mensagem:"Preencha todos os campos", status:400})
    }

    try{
        //Verificando se existe o usuário
        const usuarioServico = await servicos.pesquisarUsuarioPorId(id_usuario)
        if(!usuarioServico){
            return res.status(200).json({mensagem:"Usuário não encontrado", status:400})
        }

        //Deletando a tarefa na lista do usuário
        const tarefaDeletar = await servicos.deletarTarefa(id_usuario,id_tarefa)

        return res.status(200).json({mensagem:'tarefa deletado',tarefaDeletar})

    }catch(err){
        return res.status(500).json({mensagem: "Erro ao deletar tarefa", err});
    }
}

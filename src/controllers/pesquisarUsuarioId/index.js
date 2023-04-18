import Usuarios from '../../models/User.js';
import servicos from '../../services/services.js'

/* -- Pesquisar o usuário pelo o id */
export const pesquisarUsuarioId = async (req,res) =>{
  
    //Campos necessário para a pesquisa
    const id_usuario = req.params.id

    //Verificação se não há campos vázios
    if(!id_usuario){
        res.status(400).json({ message: "Preencha todos os campos" });
    }

    try{
        //Procurando o usuário no banco de dados
        const usuario = await servicos.pesquisarUsuarioPorId(id_usuario)

        //Verificação se caso não tenha um usúario
        if(!usuario){
            res.status(400).json({ message: "Usuário não encontrado" });
        }
        
        //Se caso o usuário for encontrado
        res.status(200).json({mensagem:'Usuário encontrado',usuario})
    }catch(err){
        return res.status(400).json({mensagem: "Erro ao pesquisar pelo o usuário", err});
    }
}


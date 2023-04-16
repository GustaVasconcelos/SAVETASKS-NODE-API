import Usuarios from '../models/User.js';
import servicos from '../services/services.js'

/* ------Cadastrar usuario--------- */
const cadastrarUsuario = async (req, res) => {
    //Campos necessário para a criação do usuário no banco de dados
    const { usuario, senha, confirmacao } = req.body;
    
    //Verificação se não há campos vázios
    if (!usuario || !senha || !confirmacao) {
      return res.status(400).json({ message: "Preencha todos os campos" });
    }

    //Verificação se as senhas são iguais
    if (senha !== confirmacao) {
      return res.status(400).json({ message: "As senhas não correspondem" });
    }
    //Verificação se a senha tem pelo menos 6 digitos
    if (senha.length < 6) {
      return res.status(400).json({ message: "A senha deve ter no mínimo 6 caracteres" });
    }
    
    //Cadastrando o usuário no banco de dados
    try {
      const usuarioServico = await servicos.cadastrarUsuario(req.body);
      const usuarioCriado = { id: usuarioServico._id, usuario };
      return res.status(201).json({ message: "Usuário cadastrado", usuarioCriado });

    } catch (error) {
      return res.status(400).json({ message: "Erro ao criar o usuário" });
    }
  };
/* ------ fim Cadastrar usuario--------- */

/* ------ Adicionar item na lista --------- */
const adicionar_lista = async (req,res) =>{

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

        return res.status(200).json({mensagem:'Item adicionado',tarefaAdicionar})

    }catch(err){
        console.log(err)
    }
}
/* ------ Adicionar item na lista --------- */
const deletar_item = async (req,res) =>{

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

        return res.status(200).json({mensagem:'Item deletado',tarefaDeletar})

    }catch(err){
        console.log(err)
    }
}
export {
    cadastrarUsuario,
    adicionar_lista,
    deletar_item
}
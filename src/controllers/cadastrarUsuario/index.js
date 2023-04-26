import Usuarios from '../../models/User.js';
import servicos from '../../services/services.js'

/* ------Cadastrar usuario------ */
export const cadastrarUsuario = async (req, res) => {
    //Campos necessário para a criação do usuário no banco de dados
    const { usuario, senha, confirmacao } = req.body;
    
    //Verificação se não há campos vázios
    if (!usuario || !senha || !confirmacao) {
      return res.status(200).json({ mensagem: "Preencha todos os campos" , status:400});
    }

    const usuarioExistente = await servicos.pesquisarUsuarioPorNome(usuario)
    if(usuarioExistente){
      return res.status(200).json({mensagem:"Usuário já existe", status:400})
    }
    //Verificação se as senhas são iguais
    if (senha !== confirmacao) {
      return res.status(200).json({ mensagem: "As senhas não correspondem", status:400 });
    }
    //Verificação se a senha tem pelo menos 6 digitos
    if (senha.length < 6) {
      return res.status(200).json({ mensagem: "A senha deve ter no mínimo 6 caracteres", status:400});
    }
    
    //Cadastrando o usuário no banco de dados
    try {
      const usuarioServico = await servicos.cadastrarUsuario(req.body);
      const usuarioCriado = { id: usuarioServico._id, usuario };
      return res.status(201).json({ mensagem: "Usuário cadastrado", usuarioCriado });

    } catch (error) {
      return res.status(500).json({mensagem: "Erro ao criar o usuário", err});
    }
  };

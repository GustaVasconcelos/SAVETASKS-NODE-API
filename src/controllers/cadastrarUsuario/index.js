import Usuarios from '../models/User.js';
import servicos from '../services/services.js'

/* ------Cadastrar usuario------ */
export const cadastrarUsuario = async (req, res) => {
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
      return res.status(500).json({mensagem: "Erro ao criar o usuário", err});
    }
  };

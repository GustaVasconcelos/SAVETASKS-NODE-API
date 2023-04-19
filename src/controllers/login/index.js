import servicos from '../../services/services.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/*------Inicio login-------- */

export const login = async (req,res) =>{

    //Campos necessários para efetuar o login
    const {usuario, senha} = req.body

    //verificação se há todos os campos necessários
    if(!usuario || !senha){
        return res.status(400).json({mensagem:"Há campos vázios"})
    }
    try{
        //Verificando se existe o usuário no banco de dados
        const usuarioBD = await servicos.pesquisarUsuarioPorNome(usuario)

        if(!usuarioBD){
            return res.status(400).json({mensagem:"Usuário ou senha incorreta!"})
        }
        //Verificando se a senha está correta
        const senhaValida =  bcrypt.compareSync(senha, usuarioBD.senha)
        if (!senhaValida) {
            return res.status(400).send({mensagem: "Usuário ou senha incorreta!" });
        }

        //Gerando o token pro usuário
        const token = jwt.sign({usuario}, process.env.SECRET_JWT,{expiresIn:86400})

        //Login efetuado
        res.cookie("token",token,{httpOnly:true})
        res.status(200).json({token:token,id_usuario:usuarioBD._id,usuario:usuarioBD.usuario})

    }catch(err){
        res.status(500).json({mensagem:"Erro ao efetuar o login"})
    }
}
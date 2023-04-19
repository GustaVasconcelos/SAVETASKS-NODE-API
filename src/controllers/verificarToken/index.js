import jwt from 'jsonwebtoken'

/*-----verificar token -----*/
export const verificarToken = (req,res) =>{
    //Campo necessário para verificar
    const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
    req.token = token

    //verificando se o token é válido
    if(!token){
        return res.status(401).json({msg:"Token inválido"})
    }
    jwt.verify(token,process.env.SECRET_JWT,(err,decoded) =>{
        if(err){
            return res.status(400).json({msg:"Token inválido"})
        }else{
            req.usuario = decoded.usuario
            return res.status(200).json({msg:"Token válido"})
        }
    })
}
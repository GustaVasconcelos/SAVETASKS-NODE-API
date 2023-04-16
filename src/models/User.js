import mongoose from "mongoose";
import bcrypt from 'bcrypt'

//Modelo do usuario
const Usuario = new mongoose.Schema({
    usuario:{
        type:String,
        require:true,
    },
    senha:{
        type:String,
        require:true,
        select:false
    },
    tarefas:{
        type:Array
    }
})

//Criptogrando a senha do usuário
Usuario.pre('save',async function(next){

    this.senha = await bcrypt.hash(this.senha, 10)
    next()
})

//Criando a model
const Usuarios = mongoose.model('Usuarios', Usuario)

export default Usuarios
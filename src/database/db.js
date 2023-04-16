import mongoose from "mongoose";


const conectarBanco = () =>{
    
    //Conexão do banco de dados com a api
    console.log('Conectando o banco de dados')
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => console.log('Banco conectado')).catch((erro) => console.log(erro))
}


export default conectarBanco
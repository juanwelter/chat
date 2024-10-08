const db = require("./db");

async function registrarUsuario(nick) {
    return await db.insertOne("usuario",{"nick": nick});
};

let buscarUsuario = async (idUser)=>{
    let user = await db.findOne("usuarios",idUser);
    return user;
  }
  
  
  let alterarUsuario = async (user)=>{
    return await db.updateOne("usuarios", user,{_id:user._id});
  }
  
  let removerUsuario = async (iduser) => {
    return await db.deleteOne("usuarios", iduser);
};

  
  module.exports = {registrarUsuario, buscarUsuario, alterarUsuario, removerUsuario};
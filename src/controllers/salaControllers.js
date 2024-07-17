const salaModel = require('../models/salaModels');

exports.get=async(req,res)=>{ 
    return salaModel.listarSalas();
}
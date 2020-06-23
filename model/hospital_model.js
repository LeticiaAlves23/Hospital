const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    nome: {
        nome: String,
        Leitos: String,
        tipo: String,
        paciente: String
    },
        paciente:{
        nome: String,
        Idade: String,
        Sexo: String
   }
 });


const hospital = mongoose.model("hospital", hospitalSchema);

module.exports = hospital;
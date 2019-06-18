const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nome: String,
  email: String,
  idade: Number,
});

module.exports = mongoose.model('usuario', UsuarioSchema);

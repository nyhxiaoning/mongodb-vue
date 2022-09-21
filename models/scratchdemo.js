const mongoose = require('mongoose')

const usersProject = mongoose.Schema({
  userName: String,
  scratchProject: String
}, { collection: 'scratch', timestamps: true })
// 这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据

const Scratch = module.exports = mongoose.model('scratch', usersProject);

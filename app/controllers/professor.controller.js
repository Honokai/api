const db = require("../models");
const Professor = db.professor;

/**
 * Cria um registro na tabela professor
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {
  const professor = {
    nome_completo: req.body.nome_completo,
    email: req.body.email,
    nascimento: req.body.nascimento.split("/").reverse().join("-"),
    ativo: req.body.ativo ? req.body.ativo : false
  }

  Professor.create(professor).then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Criar professor"
    })
  })
}

/**
 * Lista todos os cadastros na tabela de professor
 * @param {*} req 
 * @param {*} res 
 */
exports.index = (req, res) => {
  Professor.findAll().then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao buscar lista de professors"
    })
  })
}

/**
 * Encontra um registro na tabela professor
 * @param {*} req 
 * @param {*} res 
 */
exports.findOne = (req, res) => {
  Professor.findOne({ where: { nome_completo: req.query.nome_completo } }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao buscar professor"
    })
  })
}

/**
 * Encontra um registro na tabela professor
 * @param {*} req 
 * @param {*} res 
 */
exports.destroy = (req, res) => {
  Professor.destroy({ where: { email: req.query.email } }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao apagar professor"
    })
  })
}

exports.update = (req, res) => {
  Professor.update({ nascimento: req.body.nascimento.split("/").reverse().join('-') }, { where: { email: req.body.email } }).then((data) => {
    res.send("Atualização de registro realizada")
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao atualizar professor"
    })
  })
}
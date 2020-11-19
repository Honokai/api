const models = require("../db/models")

/**
 * Lista todos os cadastros na tabela de questao
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async () => {
  const resultado = await models.questao.findAll()
  return resultado
}

/**
 * Cria um registro na tabela questao
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (questao) => {
  const resultado = await models.questao.create(questao)
    .catch(err => {return "Para criar uma questão é necessário o id do usuário"})
  return resultado
}

/**
 * Encontra um registro na tabela usuário
 * @param {*} req 
 * @param {*} res 
 */
exports.findOne = async (id) => {
  const resultado = await models.questao.findByPk(id)
  return resultado
}

/**
 * Encontra um registro na tabela usuário
 * @param {*} req.query.email
 * @param {*} res 
 */
exports.destroy = async (id) => {
  const resultado = await models.questao.destroy({
    where: {id: id}
  })
  return resultado
}

/**
 * 
 * @param {*} req.body.email email para clausula WHERE
 * @param {*} req.body.nascimento data de nascimento a ser atualizada
 * @param {*} res 
 */
exports.update = async (questao, id) => {
  const resultado = await models.questao.update(usuario, {
    where: {id: id}
  })
  return resultado
}
const models = require("../db/models")

/**
 * Lista todos os cadastros na tabela de hardskill
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async () => {
  const resultado = await models.hardskill.findAll()
  return resultado
}

/**
 * Cria um registro na tabela hardskill
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (hardskill) => {
  const resultado = await models.hardskill.create(hardskill)
  return resultado
}

/**
 * Encontra um registro na tabela usuário
 * @param {*} req 
 * @param {*} res 
 */
exports.findOne = async (id) => {
  const resultado = await models.hardskill.findByPk(id)
  return resultado
}

/**
 * Encontra um registro na tabela usuário
 * @param {*} req.query.email
 * @param {*} res 
 */
exports.destroy = async (id) => {
  const resultado = await models.hardskill.destroy({
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
exports.update = async (hardskill, id) => {
  const resultado = await models.hardskill.update(hardskill, {
    where: {id: id}
  })
  return resultado
}
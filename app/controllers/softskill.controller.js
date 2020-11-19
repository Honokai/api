const models = require("../db/models")


exports.index = async () => {
  const resultado = await models.softskill.findAll({include: ['aluno']})
  return resultado
}


exports.create = async (softskill) => {
  const resultado = await models.softskill.create(softskill, {
    include: ['aluno']
  }).catch(err => {
    return err
  })
  return resultado
}


exports.findOne = async (id) => {
  const resultado = await models.softskill.findByPk(id)
  return resultado
}

exports.destroy = async (id) => {
  const resultado = await models.softskill.destroy({
    where: {id: id}
  })
  return resultado
}

exports.update = async (softskill, id) => {
  const resultado = await models.softskill.update(softskill, {
    where: {id: id}
  })
  return resultado
}
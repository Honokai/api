const models = require("../db/models")


exports.index = async () => {
  const resultado = await models.curso.findAll()
  return resultado
}


exports.create = async (curso) => {
  const resultado = await models.curso.create(curso).catch(err => {
    return err
  })
  return resultado
}


exports.findOne = async (id) => {
  const resultado = await models.curso.findByPk(id)
  return resultado
}

exports.destroy = async (id) => {
  const resultado = await models.curso.destroy({
    where: {id: id}
  })
  return resultado
}

exports.update = async (curso, id) => {
  const resultado = await models.curso.update(curso, {
    where: {id: id}
  })
  return resultado
}
const models = require("../db/models")


exports.index = async () => {
  const resultado = await models.usuario.findAll({include: ['aluno', 'questoes', 'professor']})
  return resultado
}


exports.create = async (usuario) => {
  const resultado = await models.usuario.create(usuario, {
    include: ['aluno', 'questoes', 'professor']
  }).catch(err => {
    return err
  })
  return resultado
}


exports.findOne = async (id) => {
  const resultado = await models.usuario.findByPk(id)
  return resultado
}

exports.destroy = async (id) => {
  const resultado = await models.usuario.destroy({
    where: {id: id}
  })
  return resultado
}

exports.update = async (usuario, id) => {
  const resultado = await models.usuario.update(usuario, {
    where: {id: id}
  })
  return resultado
}
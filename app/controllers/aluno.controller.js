const models = require("../db/models")

exports.create = async (aluno) => {
  const resultado = await models.aluno.create(aluno, {
    include: ['usuario', 'curso']
  }).catch(err => {return err})
  return resultado
}


exports.index = async () => {
  const resultado = await models.aluno.findAll({include: ['usuario']}).catch(err => {return err})
  return resultado
}

exports.findOne = async (id) => {
  const resultado = await models.aluno.findByPk(id, {include: ['usuario', 'hardskill', 'softskill']})
  return resultado
}

exports.destroy = async (id) => {
  const resultado = await models.aluno.destroy({  
    where: {id: id}
  })
  return resultado
}

exports.update = async (aluno, id) => {
  const resultado = await models.aluno.update(aluno, {
    where: {id: id}
  })
  return resultado
}
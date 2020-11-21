const models = require("../db/models")


exports.create = async (obj, id_aluno) => {
  let novo_grupo = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.grupo){
    let grupo = obj.grupo[h]
    console.log('--------------objeto--------------')
    console.log(obj)
    console.log('--------------objeto--------------')
    const [ resultado ] = await models.grupo.findOrCreate({where: grupo}).catch(err => console.log(err))
    
    novo_grupo.push(resultado.id)
    
  }
  aluno.addGrupo(novo_grupo).catch(err => {console.log(err)})
  return true
}

exports.destroy = async (obj, id_aluno) => {
  let novo_grupo = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.grupo){
    let grupo = obj.grupo[h]
    const [resultado] = await models.grupo.findOrCreate({where: grupo}).catch(err => {console.log(err)})
    
    novo_grupo.push(resultado.id)
  }

aluno.removeGrupo(novo_grupo)

return true
}
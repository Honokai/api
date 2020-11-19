const models = require("../db/models")


exports.create = async (obj, id_aluno) => {
  let novo_softskill = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.softskills){
    let softskills = obj.softskills[h]
    const [ resultado ] = await models.softskill.findOrCreate({where: softskills}).catch(err => console.log(err))
    
    novo_softskill.push(resultado.id)
    
  }
  aluno.addSoftskill(novo_softskill).catch(err => {console.log(err)})
  return true
}

exports.destroy = async (obj, id_aluno) => {
  let novo_softskill = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.softskills){
    let softskills = obj.softskills[h]
    const [resultado] = await models.softskill.findOrCreate({where: softskills}).catch(err => {console.log(err)})
    
    novo_softskill.push(resultado.id)
  }

aluno.removeSoftskill(novo_softskill)

return true
}
const models = require("../db/models")


exports.create = async (obj, id_aluno) => {
  let novo_hardskill = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.hardskills){

    let hardskills = obj.hardskills[h]
    const [ resultado ] = await models.hardskill.findOrCreate({where: hardskills}).catch(err => console.log(err))
    novo_hardskill.push(resultado.id) 
    
  }

  aluno.addHardskill(novo_hardskill).catch(err => {console.log(err)})
  return true
}

exports.destroy = async (obj, id_aluno) => {
  let novo_hardskill = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.hardskills){
    let hardskills = obj.hardskills[h]
    const [resultado] = await models.hardskill.findOrCreate({where: hardskills}).catch(err => {console.log(err)})
    novo_hardskill.push(resultado.id)
  }

aluno.removeHardskill(novo_hardskill)

return true
}
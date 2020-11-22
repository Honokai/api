const models = require("../db/models")


exports.create = async (obj, id_aluno) => {
  let novo_turma = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.turma){
    let turma = obj.turma[h]
    console.log('--------------objeto--------------')
    console.log(obj)
    console.log('--------------objeto--------------')
    const [ resultado ] = await models.turma.findOrCreate({where: turma}).catch(err => console.log(err))
    
    novo_turma.push(resultado.id)
    
  }
  return aluno.addTurma(novo_turma).catch(err => {console.log(err)})
}

exports.destroy = async (obj, id_aluno) => {
  let novo_turma = []
  const aluno = await models.aluno.findOne({where: {id: id_aluno}})
  
  for(let h in obj.turma){
    let turma = obj.turma[h]
    const [resultado] = await models.turma.findOrCreate({where: turma}).catch(err => {console.log(err)})
    
    novo_turma.push(resultado.id)
  }

  return aluno.removeTurma(novo_turma).then(
    data => {return data>0?{"mensagem":"Registros alterados "+ data}: {"mensagem":"Nenhum registro alterado"}
  }).catch(error => {return error})
 
}
const usuario = require('./usuario.routes')
const questao = require('./questao.routes')
const hardskill = require('./hardskill.routes')
const softskill = require('./softskill.routes')
const aluno_hardskills = require('./aluno_hardskills.routes')
const aluno_softskills = require('./aluno_softskill.routes')
const aluno_turma = require('./aluno_turma.routes')
const aluno = require('./aluno.routes')
const curso = require('./curso.routes')

module.exports = app => {
    app.use('/api/usuario', usuario)
    app.use('/api/questao', questao)
    app.use('/api/aluno', aluno)
    app.use('/api/hardskill', hardskill)
    app.use('/api/aluno_hardskills', aluno_hardskills)
    app.use('/api/aluno_softskills', aluno_softskills)
    app.use('/api/aluno_turma', aluno_turma)
    app.use('/api/softskill', softskill)
    app.use('/api/curso', curso)
}







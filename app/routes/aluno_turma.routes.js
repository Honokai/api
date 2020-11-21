module.exports = (() => {
  const alunoTurmaController = require("../controllers/aluno_turma.controller.js")

  var router = require("express").Router()

  router.post("/:id", async (req, res) => {
    const turma = await alunoTurmaController.create(req.body, req.params.id)
    res.json(turma)
    
  })

  router.delete("/:id", async (req, res) => {
    const turma = await alunoTurmaController.destroy(req.body, req.params.id)
    res.json(turma)
  })

  return router
  
})()
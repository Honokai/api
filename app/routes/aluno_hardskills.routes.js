module.exports = (() => {
  const alunoHardskillsController = require("../controllers/aluno_hardskills.controller.js")

  var router = require("express").Router()

  router.post("/:id", async (req, res) => {
    const hardskills = await alunoHardskillsController.create(req.body, req.params.id)
    res.json(hardskills)
    
  })

  router.delete("/:id", async (req, res) => {
    const hardskills = await alunoHardskillsController.destroy(req.body, req.params.id)
    res.json(hardskills)
  })

  return router
  
})()
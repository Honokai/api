module.exports = (() => {
    const alunoSoftskillsController = require("../controllers/aluno_softskills.controller.js")
  
    var router = require("express").Router()
  
    router.post("/:id", async (req, res) => {
      const softskills = await alunoSoftskillsController.create(req.body, req.params.id)
      res.json(softskills)
      
    })
  
    router.delete("/:id", async (req, res) => {
      const softskills = await alunoSoftskillsController.destroy(req.body, req.params.id)
      res.json(softskills)
    })

    return router
   
  })()
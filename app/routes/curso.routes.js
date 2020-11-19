module.exports = (() => {
    const cursoController = require("../controllers/curso.controller.js")
  
    var router = require("express").Router()
  
    router.get("/", async (req, res) => {
      const curso = await cursoController.index()
      res.json(curso)
    })
    
    router.get("/:id", async (req, res) => {
      const curso = await cursoController.findOne(req.params.id)
      res.json(curso)
    })
  
    router.post("/", async (req, res) => {
      const curso = await cursoController.create(req.body)
      res.json(curso)
    })
  
    router.delete("/:id", async (req, res) => {
      const curso = await cursoController.destroy(req.params.id)
      res.json(curso)
    })
  
    router.put("/", async (req, res) => {
      const curso = await cursoController.update(req.body, req.params.id)
      res.json(curso)
    })
  
    return router
   
  })()
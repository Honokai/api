"use strict";

module.exports = function () {
  var alunoTurmaController = require("../controllers/aluno_turma.controller.js");

  var router = require("express").Router();

  router.post("/:id", function _callee(req, res) {
    var turma;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(alunoTurmaController.create(req.body, req.params.id));

          case 2:
            turma = _context.sent;
            res.json(turma);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  router["delete"]("/:id", function _callee2(req, res) {
    var turma;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(alunoTurmaController.destroy(req.body, req.params.id));

          case 2:
            turma = _context2.sent;
            res.json(turma);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  return router;
}();